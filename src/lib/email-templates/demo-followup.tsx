import * as React from 'react'
import { Body, Container, Head, Heading, Html, Link, Preview, Section, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  fullName?: string
  company?: string
  bookingUrl?: string
  step?: number
}

const Email = ({ fullName, company, bookingUrl, step = 1 }: Props) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Votre démo Eligibly : choisissez un créneau de 20 minutes</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={brandBar}><Text style={brand}>ELIGIBLY</Text></Section>
        <Section style={card}>
          <Heading style={h1}>Bonjour{fullName ? ` ${fullName}` : ''},</Heading>
          {step === 1 ? (
            <Text style={text}>
              Suite à votre demande de démonstration{company ? ` pour ${company}` : ''}, nous n'avons pas encore fixé de rendez-vous.
              En 20 minutes, nous parcourons ensemble les sociétés récemment créées sur votre zone, leur score et l'angle d'approche proposé.
            </Text>
          ) : (
            <Text style={text}>
              Dernier message de notre part au sujet de votre demande de démonstration{company ? ` pour ${company}` : ''}.
              Si le moment n'est pas opportun, aucune action n'est nécessaire : votre demande reste enregistrée et vous pouvez réserver plus tard avec le même lien.
            </Text>
          )}
          {bookingUrl ? (
            <Section style={{ textAlign: 'center' as const, margin: '12px 0 20px' }}>
              <Link href={bookingUrl} style={bookButton}>Choisir un créneau</Link>
            </Section>
          ) : null}
          <Text style={text}>Vous préférez échanger par écrit ? Répondez simplement à cet e-mail.</Text>
        </Section>
        <Text style={footer}>— L'équipe Eligibly · <Link href="https://eligibly.ai" style={footerLink}>eligibly.ai</Link></Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (d: Record<string, any>) => d.step === 2 ? 'Eligibly · Votre démo, dernier rappel' : 'Eligibly · Fixons votre démo de 20 minutes',
  displayName: 'Demo — relance',
  previewData: { fullName: 'Jean Dupont', company: 'Cabinet Dupont', bookingUrl: 'https://eligibly.ai/rdv/exemple', step: 1 },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif', color: '#2D4A3E', padding: '24px 0' }
const container = { padding: '0 20px', maxWidth: '580px', margin: '0 auto' }
const brandBar = { background: '#2D4A3E', padding: '18px 24px', borderRadius: '6px 6px 0 0' }
const brand = { color: '#FAF7F2', fontFamily: 'Georgia, serif', fontSize: '18px', letterSpacing: '4px', fontWeight: 700 as const, margin: 0 }
const card = { background: '#FAF7F2', padding: '28px 32px', borderRadius: '0 0 6px 6px', borderLeft: '4px solid #D85A30' }
const h1 = { color: '#2D4A3E', fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: 700 as const, margin: '0 0 16px' }
const text = { color: '#3a4a44', fontSize: '15px', lineHeight: '1.65', margin: '0 0 14px' }
const bookButton = { display: 'inline-block' as const, backgroundColor: '#D85A30', color: '#ffffff', fontSize: '15px', fontWeight: 600 as const, textDecoration: 'none', padding: '13px 26px', borderRadius: '6px' }
const footer = { color: '#8a8a8a', fontSize: '12px', margin: '14px 0 0', padding: '0 4px' }
const footerLink = { color: '#D85A30', textDecoration: 'none' }
