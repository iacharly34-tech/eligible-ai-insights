import * as React from 'react'
import { Body, Container, Head, Heading, Html, Link, Preview, Section, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  fullName?: string
  when?: string
  bookingUrl?: string
}

const Email = ({ fullName, when, bookingUrl }: Props) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>{`Démo Eligibly confirmée${when ? ` : ${when}` : ''}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={brandBar}><Text style={brand}>ELIGIBLY</Text></Section>
        <Section style={card}>
          <Heading style={h1}>Rendez-vous confirmé{fullName ? `, ${fullName}` : ''}.</Heading>
          <Text style={text}>Votre démonstration de 20 minutes est fixée au <strong>{when ?? 'créneau choisi'}</strong> (heure de Paris).</Text>
          <Text style={text}>Nous vous appelons ou vous envoyons le lien de visio avant le rendez-vous. Pour préparer l'échange, notez les départements et types de sociétés que vous ciblez en priorité.</Text>
          {bookingUrl ? <Text style={text}>Besoin de changer ? <Link href={bookingUrl} style={footerLink}>Gérer mon rendez-vous</Link> ou répondez à cet e-mail.</Text> : null}
        </Section>
        <Text style={footer}>— L'équipe Eligibly · <Link href="https://eligibly.ai" style={footerLink}>eligibly.ai</Link></Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (d: Record<string, any>) => `Eligibly · Démo confirmée${d['when'] ? ` — ${d['when']}` : ''}`,
  displayName: 'Demo — rendez-vous confirmé',
  previewData: { fullName: 'Jean Dupont', when: 'mardi 3 novembre à 09:30', bookingUrl: 'https://eligibly.ai/rdv/exemple' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif', color: '#2D4A3E', padding: '24px 0' }
const container = { padding: '0 20px', maxWidth: '580px', margin: '0 auto' }
const brandBar = { background: '#2D4A3E', padding: '18px 24px', borderRadius: '6px 6px 0 0' }
const brand = { color: '#FAF7F2', fontFamily: 'Georgia, serif', fontSize: '18px', letterSpacing: '4px', fontWeight: 700 as const, margin: 0 }
const card = { background: '#FAF7F2', padding: '28px 32px', borderRadius: '0 0 6px 6px', borderLeft: '4px solid #2D4A3E' }
const h1 = { color: '#2D4A3E', fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: 700 as const, margin: '0 0 16px' }
const text = { color: '#3a4a44', fontSize: '15px', lineHeight: '1.65', margin: '0 0 14px' }
const footer = { color: '#8a8a8a', fontSize: '12px', margin: '14px 0 0', padding: '0 4px' }
const footerLink = { color: '#D85A30', textDecoration: 'none' }
