import * as React from 'react'
import { Body, Container, Head, Heading, Html, Preview, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  fullName?: string
  email?: string
  phone?: string
  company?: string
  departements?: string
  tailleCabinet?: string
  when?: string
}

const Email = (p: Props) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>{`RDV démo pris : ${p.company ?? ''} — ${p.when ?? ''}`}</Preview>
    <Body style={{ backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif', color: '#2D4A3E' }}>
      <Container style={{ padding: '20px 25px', maxWidth: '560px' }}>
        <Heading style={{ fontSize: '20px' }}>Nouveau rendez-vous démo</Heading>
        <Text><strong>Quand :</strong> {p.when ?? '—'} (Paris)</Text>
        <Text><strong>Contact :</strong> {p.fullName ?? '—'} · {p.email ?? '—'} · {p.phone || 'pas de téléphone'}</Text>
        <Text><strong>Cabinet :</strong> {p.company ?? '—'} · {p.tailleCabinet || 'taille non précisée'}</Text>
        <Text><strong>Départements :</strong> {p.departements || 'non précisés'}</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (d: Record<string, any>) => `Eligibly · RDV démo — ${d['company'] ?? ''} — ${d['when'] ?? ''}`,
  displayName: 'Demo — notification RDV (interne)',
  to: 'lahyani.daniel@gmail.com',
  previewData: { fullName: 'Jean Dupont', email: 'jean@cabinet.fr', phone: '06 00 00 00 00', company: 'Cabinet Dupont', departements: '75, 92', tailleCabinet: '2 à 5 personnes', when: 'mardi 3 novembre à 09:30' },
} satisfies TemplateEntry
