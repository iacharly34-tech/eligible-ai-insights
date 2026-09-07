import * as React from 'npm:react@18.3.1'
import { renderAsync } from 'npm:@react-email/components@0.0.22'
import { sendLovableEmail } from 'npm:@lovable.dev/email-js'
import { createClient } from 'npm:@supabase/supabase-js@2'
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { z } from 'npm:zod@3.23.8'
import { TEMPLATES } from '../_shared/transactional-email-templates/registry.ts'

// Public endpoint (verify_jwt = false). This is the ONLY client-facing entry point
// for demo requests. It validates input, rate-limits by IP + email, persists the
// lead, then renders and sends the applicant confirmation and the internal
// notification through Lovable's managed email API. Recipients are fixed here, so
// clients can never choose arbitrary recipients.

const OWNER_NOTIFICATION_EMAIL = 'lahyani.daniel@gmail.com'
const SENDER_DOMAIN = 'notify.eligibly.ai'
const FROM_DOMAIN = 'eligibly.ai'

const BodySchema = z.object({
  fullName: z.string().trim().min(1).max(120),
  email: z.string().trim().toLowerCase().email().max(254),
  company: z.string().trim().min(1).max(150),
  message: z.string().trim().max(2000).optional().or(z.literal('')),
  source: z.string().trim().max(80).optional(),
})

function getClientIp(req: Request): string {
  const fwd = req.headers.get('x-forwarded-for') || ''
  return (fwd.split(',')[0] || req.headers.get('x-real-ip') || 'unknown').trim()
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders })
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  if (!supabaseUrl || !serviceKey) {
    return new Response(JSON.stringify({ error: 'Server misconfigured' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const parsed = BodySchema.safeParse(body)
  if (!parsed.success) {
    return new Response(
      JSON.stringify({ error: 'Validation failed', details: parsed.error.flatten().fieldErrors }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
  const { fullName, email, company, message, source } = parsed.data
  const clientIp = getClientIp(req)
  const userAgent = (req.headers.get('user-agent') || '').slice(0, 500)

  const supabase = createClient(supabaseUrl, serviceKey)

  // Rate limit: max 3 submissions from same email in 1h, and max 10 from same IP in 1h.
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString()

  const { count: emailCount } = await supabase
    .from('demo_requests')
    .select('id', { count: 'exact', head: true })
    .eq('email', email)
    .gte('created_at', oneHourAgo)
  if ((emailCount ?? 0) >= 3) {
    return new Response(
      JSON.stringify({ error: 'Too many requests for this email. Try again later.' }),
      { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }

  if (clientIp && clientIp !== 'unknown') {
    const { count: ipCount } = await supabase
      .from('demo_requests')
      .select('id', { count: 'exact', head: true })
      .ilike('user_agent', `%${clientIp}%`)
      .gte('created_at', oneHourAgo)
    if ((ipCount ?? 0) >= 10) {
      return new Response(
        JSON.stringify({ error: 'Too many requests. Try again later.' }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
  }

  // Persist the lead (tag user_agent with IP so we can enforce IP rate limit later).
  const uaWithIp = clientIp && clientIp !== 'unknown' ? `[${clientIp}] ${userAgent}` : userAgent
  const { data: inserted, error: insertErr } = await supabase
    .from('demo_requests')
    .insert({
      full_name: fullName,
      email,
      company,
      message: message ? message : null,
      source: source || '/demo',
      user_agent: uaWithIp,
    })
    .select('id, created_at')
    .single()

  if (insertErr || !inserted) {
    console.error('demo_requests insert failed', insertErr)
    return new Response(JSON.stringify({ error: 'Failed to save request' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  // Render and send each email synchronously through Lovable's managed email
  // API. Delivery, retries, rate limits, suppression and unsubscribe are handled
  // on Lovable's side — nothing is queued here.
  const logSend = async (
    templateName: string,
    recipient: string,
    status: 'sent' | 'suppressed' | 'failed',
    errorMessage?: string,
  ) => {
    const { error } = await supabase.from('email_send_log').insert({
      recipient_email: recipient,
      template_name: templateName,
      status,
      error_message: errorMessage ?? null,
    })
    if (error) console.warn('email_send_log insert failed', templateName, status, error)
  }

  const sendEmail = async (
    templateName: string,
    recipient: string,
    data: Record<string, unknown>,
  ) => {
    const entry = TEMPLATES[templateName]
    if (!entry) {
      console.warn('unknown template', templateName)
      return
    }
    const finalRecipient = (typeof entry.to === 'function' ? entry.to(data) : entry.to) || recipient
    try {
      const element = React.createElement(entry.component, data)
      const html = await renderAsync(element)
      const text = await renderAsync(element, { plainText: true })
      const subject =
        typeof entry.subject === 'function' ? entry.subject(data) : entry.subject

      await sendLovableEmail(
        {
          to: finalRecipient,
          from: `Eligibly <noreply@${FROM_DOMAIN}>`,
          sender_domain: SENDER_DOMAIN,
          subject,
          html,
          text,
          purpose: 'transactional',
          label: templateName,
          idempotency_key: `${templateName}-${inserted.id}`,
        },
        { apiKey: lovableApiKey ?? '' },
      )
      await logSend(templateName, finalRecipient, 'sent')
    } catch (e) {
      const code = e && typeof e === 'object' && 'code' in e ? (e as { code: string }).code : ''
      if (code === 'recipient_suppressed') {
        await logSend(templateName, finalRecipient, 'suppressed', 'Recipient suppressed')
        return
      }
      const msg = e instanceof Error ? e.message : String(e)
      console.warn(`${templateName} send failed`, msg)
      await logSend(templateName, finalRecipient, 'failed', msg.slice(0, 500))
    }
  }

  await Promise.all([
    sendEmail('demo-confirmation', email, { fullName, company, message: message || undefined }),
    sendEmail('lead-notification', OWNER_NOTIFICATION_EMAIL, {
      fullName,
      email,
      company,
      message: message || undefined,
      source: source || '/demo',
      submittedAt: new Date(inserted.created_at).toLocaleString('fr-FR', { timeZone: 'Europe/Paris' }),
    }),
  ])

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
})