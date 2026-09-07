import { createEmailWebhookHandler } from '@lovable.dev/email-js'
import { createFileRoute } from '@tanstack/react-router'

type Outcome = 'bounce' | 'complaint' | 'unsubscribe'

const STATUS: Record<Outcome, 'bounced' | 'complained' | 'suppressed'> = {
  bounce: 'bounced',
  complaint: 'complained',
  unsubscribe: 'suppressed',
}

const MESSAGE: Record<Outcome, string> = {
  bounce: 'Permanent bounce — email address is invalid or rejected',
  complaint: 'Spam complaint — recipient marked email as spam',
  unsubscribe: 'Recipient unsubscribed',
}

// Notification-only bookkeeping: Lovable enforces suppression at send time.
// These rows keep the app's historical view (dashboards, CRM) in sync.
async function record(outcome: Outcome, recipient: string, eventId: string) {
  const { supabaseAdmin } = await import('@/integrations/supabase/client.server')
  const email = recipient.toLowerCase()

  const { error: suppressError } = await supabaseAdmin
    .from('suppressed_emails')
    .upsert({ email, reason: outcome, metadata: null }, { onConflict: 'email' })

  if (suppressError) {
    console.error('Failed to upsert suppressed email', {
      event_id: eventId,
      code: suppressError.code,
      message: suppressError.message,
    })
    throw new Error('Failed to write suppression')
  }

  const { error: logError } = await supabaseAdmin.from('email_send_log').insert({
    message_id: null,
    template_name: 'system',
    recipient_email: email,
    status: STATUS[outcome],
    error_message: MESSAGE[outcome],
    metadata: null,
  })

  if (logError) {
    // Non-fatal — the suppression row is already recorded.
    console.warn('Failed to insert email_send_log', {
      event_id: eventId,
      code: logError.code,
      message: logError.message,
    })
  }
}

export const Route = createFileRoute("/lovable/email/events")({
  server: {
    handlers: {
      POST: ({ request }) => {
        const apiKey = process.env['LOVABLE_API_KEY']
        if (!apiKey) {
          console.error('Missing required environment variables')
          return Response.json({ error: 'Server configuration error' }, { status: 500 })
        }
        const handler = createEmailWebhookHandler({
          apiKey,
          on: {
            'email.bounced': async (event) => {
              await record('bounce', event.data.recipient, event.event_id)
            },
            'email.complaint': async (event) => {
              await record('complaint', event.data.recipient, event.event_id)
            },
            'email.unsubscribed': async (event) => {
              await record('unsubscribe', event.data.recipient, event.event_id)
            },
          },
        })
        return handler(request)
      },
    },
  },
})
