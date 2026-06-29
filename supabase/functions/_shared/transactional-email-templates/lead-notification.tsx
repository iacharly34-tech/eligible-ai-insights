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
        <Heading style={h1}>🎯 Nouveau lead entrant</Heading>
        <Section style={card}>
          <Text style={row}><strong>Nom :</strong> {fullName || '—'}</Text>
          <Text style={row}><strong>Email :</strong> {email || '—'}</Text>
          <Text style={row}><strong>Cabinet :</strong> {company || '—'}</Text>
          {source ? <Text style={row}><strong>Source :</strong> {source}</Text> : null}
          {submittedAt ? <Text style={row}><strong>Reçu le :</strong> {submittedAt}</Text> : null}
        </Section>
        {message ? (
          <>
            <Hr style={hr} />
            <Text style={label}>Message</Text>
            <Section style={quote}>
              <Text style={quoteText}>« {message} »</Text>
            </Section>
          </>
        ) : null}
        <Hr style={hr} />
        <Text style={footer}>Notification automatique — Eligibly</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Props) =>
    `🎯 Nouveau lead Eligibly${data?.company ? ` — ${data.company}` : ''}`,
  displayName: 'Lead — notification interne',
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
  fontFamily: '"Inter", Arial, sans-serif',
  color: '#2D4A3E',
}
const container = { padding: '32px 28px', maxWidth: '560px' }
const h1 = { color: '#2D4A3E', fontSize: '22px', fontWeight: '700', margin: '0 0 18px' }
const card = {
  background: '#FAF7F2',
  borderLeft: '3px solid #D85A30',
  padding: '16px 18px',
  borderRadius: '4px',
}
const row = { color: '#2D4A3E', fontSize: '14px', lineHeight: '1.6', margin: '0 0 6px' }
const label = { color: '#55575d', fontSize: '12px', textTransform: 'uppercase' as const, letterSpacing: '0.5px', margin: '0 0 6px' }
const quote = { borderLeft: '3px solid #D4A93B', padding: '4px 14px', margin: '6px 0' }
const quoteText = { color: '#55575d', fontStyle: 'italic', fontSize: '14px', lineHeight: '1.6', margin: 0 }
const hr = { border: 'none', borderTop: '1px solid #ececec', margin: '20px 0' }
const footer = { color: '#55575d', fontSize: '12px', margin: '8px 0 0' }