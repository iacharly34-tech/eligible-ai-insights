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
  Link,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  fullName?: string
  company?: string
  message?: string
}

const Email = ({ fullName, company, message }: Props) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Votre premier lead premium arrive sous 48 h</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={brandBar}>
          <Text style={brand}>ELIGIBLY</Text>
        </Section>
        <Section style={card}>
          <Text style={eyebrow}>Demande reçue</Text>
          <Heading style={h1}>Bienvenue{fullName ? `, ${fullName}` : ''}.</Heading>
          <Text style={text}>
            Merci pour votre confiance. Notre équipe prépare un lead premium qualifié
            selon votre ICP et vous le livre par email <strong>sous 48 h ouvrées</strong>.
          </Text>
          {company ? (
            <Text style={meta}>
              Cabinet&nbsp;: <strong>{company}</strong>
            </Text>
          ) : null}
          {message ? (
            <Section style={quote}>
              <Text style={quoteText}>« {message} »</Text>
            </Section>
          ) : null}
          <Hr style={hr} />
          <Text style={text}>
            Une question d'ici-là&nbsp;? Répondez simplement à cet email, ou écrivez-nous sur WhatsApp.
          </Text>
          <Section style={{ textAlign: 'center' as const, margin: '16px 0 24px' }}>
            <Link href="https://wa.me/33603263100" style={whatsappButton}>💬 WhatsApp</Link>
          </Section>
        </Section>
        <Text style={signature}>— L'équipe Eligibly</Text>
        <Text style={footer}>
          Eligibly · Détection IA de leads pour cabinets d'expertise comptable
          <br />
          <Link href="https://eligibly.ai" style={footerLink}>eligibly.ai</Link>
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: 'Eligibly · Votre lead premium arrive sous 48 h',
  displayName: 'Demo — confirmation',
  previewData: {
    fullName: 'Jean Dupont',
    company: 'Cabinet Dupont & Associés',
    message: 'SASU/SAS en Île-de-France, capital > 5k€, secteur tech.',
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
  margin: '0 0 12px',
}
const h1 = {
  color: '#2D4A3E',
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontSize: '28px',
  fontWeight: 700 as const,
  lineHeight: '1.2',
  margin: '0 0 20px',
}
const text = {
  color: '#3a4a44',
  fontSize: '15px',
  lineHeight: '1.65',
  margin: '0 0 14px',
}
const meta = {
  color: '#2D4A3E',
  fontSize: '14px',
  lineHeight: '1.6',
  margin: '0 0 10px',
}
const quote = {
  background: '#ffffff',
  borderLeft: '3px solid #D4A93B',
  padding: '10px 16px',
  margin: '14px 0',
  borderRadius: '3px',
}
const quoteText = {
  color: '#55575d',
  fontStyle: 'italic' as const,
  fontSize: '14px',
  lineHeight: '1.6',
  margin: 0,
}
const hr = { border: 'none', borderTop: '1px solid #E5DED2', margin: '24px 0' }
const signature = {
  color: '#2D4A3E',
  fontSize: '14px',
  fontWeight: 600 as const,
  margin: '20px 0 8px',
  padding: '0 4px',
}
const footer = {
  color: '#8a8a8a',
  fontSize: '12px',
  lineHeight: '1.6',
  margin: '12px 0 0',
  padding: '0 4px',
}
const footerLink = { color: '#D85A30', textDecoration: 'none' }