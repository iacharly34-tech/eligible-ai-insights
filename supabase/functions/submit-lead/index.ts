import { createClient } from 'npm:@supabase/supabase-js@2'
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { z } from 'npm:zod@3.23.8'

// Public endpoint (verify_jwt = false). This is the ONLY client-facing entry point
// for demo requests. It validates input, rate-limits by IP + email, persists the
// lead, and then invokes send-transactional-email with the service role for both
// the applicant confirmation and the internal notification. This prevents open
// email relay abuse: clients can no longer choose arbitrary recipients.

const OWNER_NOTIFICATION_EMAIL = 'lahyani.daniel@gmail.com'

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

  // Fire emails with the service-role key so send-transactional-email accepts us.
  const invokeEmail = async (templateName: string, recipient: string, data: Record<string, unknown>) => {
    try {
      const res = await fetch(`${supabaseUrl}/functions/v1/send-transactional-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${serviceKey}`,
        },
        body: JSON.stringify({
          templateName,
          recipientEmail: recipient,
          idempotencyKey: `${templateName}-${inserted.id}`,
          templateData: data,
        }),
      })
      if (!res.ok) {
        console.warn(`${templateName} enqueue failed`, res.status, await res.text())
      }
    } catch (e) {
      console.warn(`${templateName} enqueue error`, e)
    }
  }

  await Promise.all([
    invokeEmail('demo-confirmation', email, { fullName, company, message: message || undefined }),
    invokeEmail('lead-notification', OWNER_NOTIFICATION_EMAIL, {
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