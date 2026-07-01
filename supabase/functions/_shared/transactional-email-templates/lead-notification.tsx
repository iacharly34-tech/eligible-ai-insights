/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  fullName?: string
  email?: string
  company?: string
  message?: string
  source?: string
  submittedAt?: string
}

const Email = ({ fullName, email, company, message, source, submittedAt }: Props) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Nouveau lead Eligibly{company ? ` — ${company}` : ''}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={brandBar}>
          <Text style={brand}>ELIGIBLY</Text>
        </Section>
        <Section style={card}>
          <Text style={eyebrow}>Nouveau lead entrant</Text>
          <Heading style={h1}>
            {company || fullName || 'Nouvelle demande'}
          </Heading>
          <Section style={infoBlock}>
            <Text style={row}><span style={label}>Nom</span>{fullName || '—'}</Text>
            <Text style={row}><span style={label}>Email</span>{email || '—'}</Text>
            <Text style={row}><span style={label}>Cabinet</span>{company || '—'}</Text>
            {source ? <Text style={row}><span style={label}>Source</span>{source}</Text> : null}
            {submittedAt ? <Text style={row}><span style={label}>Reçu le</span>{submittedAt}</Text> : null}
          </Section>
          {message ? (
            <>
              <Text style={msgLabel}>Message du prospect</Text>
              <Section style={quote}>
                <Text style={quoteText}>« {message} »</Text>
              </Section>
            </>
          ) : null}
        </Section>
        <Text style={footer}>Notification automatique · Eligibly</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Props) =>
    `Eligibly · Nouveau lead${data?.company ? ` — ${data.company}` : ''}`,
  displayName: 'Lead — notification interne',
  // Fixed internal recipient — the send function ignores caller-provided
  // recipientEmail for this template. Defense in depth against relay abuse.
  to: 'lahyani.daniel@gmail.com',
  previewData: {
    fullName: 'Jean Dupont',
    email: 'jean@cabinet-dupont.fr',
    company: 'Cabinet Dupont & Associés',
    message: 'SASU/SAS en Île-de-France, capital > 5k€.',
    source: '/demo',
    submittedAt: '29/06/2026 18:42',
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
  color: '#2D4A3E',
  padding: '24px 0',
}
const container = { padding: '0 20px', maxWidth: '580px', margin: '0 auto' }
const brandBar = {
  background: '#2D4A3E',
  padding: '18px 24px',
  borderRadius: '6px 6px 0 0',
}
const brand = {
  color: '#FAF7F2',
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontSize: '18px',
  letterSpacing: '4px',
  fontWeight: 700 as const,
  margin: 0,
}
const card = {
  background: '#FAF7F2',
  padding: '32px 32px 28px',
  borderRadius: '0 0 6px 6px',
  borderLeft: '4px solid #D85A30',
}
const eyebrow = {
  color: '#D85A30',
  fontSize: '11px',
  fontWeight: 600 as const,
  letterSpacing: '2px',
  textTransform: 'uppercase' as const,
  margin: '0 0 10px',
}
const h1 = {
  color: '#2D4A3E',
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontSize: '24px',
  fontWeight: 700 as const,
  lineHeight: '1.25',
  margin: '0 0 20px',
}
const infoBlock = {
  background: '#ffffff',
  borderRadius: '4px',
  padding: '14px 16px',
  marginBottom: '16px',
}
const row = {
  color: '#2D4A3E',
  fontSize: '14px',
  lineHeight: '1.6',
  margin: '0 0 4px',
}
const label = {
  display: 'inline-block',
  width: '90px',
  color: '#8a8a8a',
  fontSize: '11px',
  fontWeight: 600 as const,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.8px',
}
const msgLabel = {
  color: '#8a8a8a',
  fontSize: '11px',
  fontWeight: 600 as const,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.8px',
  margin: '0 0 6px',
}
const quote = {
  background: '#ffffff',
  borderLeft: '3px solid #D4A93B',
  padding: '10px 16px',
  borderRadius: '3px',
  margin: 0,
}
const quoteText = {
  color: '#55575d',
  fontStyle: 'italic' as const,
  fontSize: '14px',
  lineHeight: '1.6',
  margin: 0,
}
const footer = {
  color: '#8a8a8a',
  fontSize: '12px',
  margin: '14px 4px 0',
}