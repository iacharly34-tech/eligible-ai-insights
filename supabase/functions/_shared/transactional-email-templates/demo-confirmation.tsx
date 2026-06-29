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
  company?: string
  message?: string
}

const Email = ({ fullName, company, message }: Props) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Votre premier lead premium arrive sous 48 h</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Bien reçu{fullName ? `, ${fullName}` : ''} 👋</Heading>
        <Text style={text}>
          Merci pour votre demande. Notre équipe prépare un lead premium qualifié
          selon votre ICP et vous le livre par email <strong>sous 48 h ouvrées</strong>.
        </Text>
        {company ? (
          <Text style={text}>
            Cabinet : <strong>{company}</strong>
          </Text>
        ) : null}
        {message ? (
          <Section style={quote}>
            <Text style={quoteText}>« {message} »</Text>
          </Section>
        ) : null}
        <Hr style={hr} />
        <Text style={text}>
          En attendant, une question ? Répondez simplement à cet email ou
          contactez-nous sur WhatsApp au <strong>+33 6 03 26 31 00</strong>.
        </Text>
        <Text style={footer}>— L'équipe Eligibly</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: 'Votre premier lead premium Eligibly — confirmation',
  displayName: 'Demo — confirmation',
  previewData: {
    fullName: 'Jean Dupont',
    company: 'Cabinet Dupont & Associés',
    message: 'SASU/SAS en Île-de-France, capital > 5k€, secteur tech.',
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '"Inter", Arial, sans-serif',
  color: '#2D4A3E',
}
const container = { padding: '32px 28px', maxWidth: '560px' }
const h1 = {
  color: '#2D4A3E',
  fontSize: '24px',
  fontWeight: '700',
  margin: '0 0 16px',
}
const text = {
  color: '#3a3a3a',
  fontSize: '15px',
  lineHeight: '1.6',
  margin: '0 0 14px',
}
const quote = {
  borderLeft: '3px solid #D85A30',
  padding: '4px 14px',
  margin: '12px 0',
}
const quoteText = {
  color: '#55575d',
  fontStyle: 'italic',
  fontSize: '14px',
  lineHeight: '1.6',
  margin: 0,
}
const hr = { border: 'none', borderTop: '1px solid #ececec', margin: '24px 0' }
const footer = { color: '#55575d', fontSize: '13px', margin: '8px 0 0' }