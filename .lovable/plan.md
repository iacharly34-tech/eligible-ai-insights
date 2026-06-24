# Pivot Eligibly → CRM de prospection vertical pour cabinets d'expertise comptable

## Vision

Eligibly n'est plus une plateforme appels d'offres publics. C'est un **CRM vertical** qui livre chaque matin aux cabinets EC les SASU/SAS nouvellement immatriculées, déjà filtrées (CAC, procédure, holding, serial écartés), priorisées avec un score expliqué et un plan d'action.

On conserve la philosophie craft mais on **change la palette, la typo, le positionnement, la cible, l'offre et toute la landing**.

## Étape 1 — Fondations design (refonte tokens)

**Fichiers : `src/index.css`, `tailwind.config.ts`, `index.html`**

- Nouvelle palette éditoriale chaleureuse (HSL) :
  - `--bg-page` crème clair, `--bg-cream` signature, `--bg-beige` alternance
  - `--terracotta` accent principal + variantes deep/soft
  - `--sapin` vert trust, `--moutarde` accent secondaire
  - Textes terreux (`#1B1410`, `#5C4F47`, `#9A8A75`)
- Typo : `Fraunces` (display, italiques pour emphase) + `Inter` (body) via Google Fonts
- Rayons : 8 / 14 / 20px ; shadow douce
- On retire l'ancien dark cinematic Tudor Watch des tokens (mémoire à mettre à jour)

## Étape 2 — Nouvelle Homepage (10 sections)

**Nouveau fichier : `src/pages/HomePage.tsx` + composants `src/components/eligibly/*`**

Reproduction fidèle du HTML brief, sectionné en composants React :

1. `HeaderEC` — nav simple + CTA "Démo gratuite"
2. `HeroEC` — H1 *« Vos prochains clients sont fraîchement immatriculés »* + mockup "Top leads recommandés" (4 cards : Premium/Standard/À vérifier)
3. `SourcesBar` — INPI/RNE, Sirene/INSEE, BODACC, Pappers, Kaspr, Hunter.io
4. `ProblemSection` — 3 problèmes (bruit, pas de prio, pas de plan d'action)
5. `LeadPreview` — aperçu fiche lead avec score 82 PREMIUM, méta-données, rationale, actions
6. `HowItWorks` — 4 étapes (Consolidation, Filtres amont, Priorisation, Apprentissage)
7. `CompareTable` — Eligibly vs Pappers vs Apollo vs Dev interne
8. `Personas` — 4 cabinets cibles (croissance, structuration co, vertical, sortie portfolio)
9. `PricingEC` — forfait unique 290€ HT/mois + engagement qualité par filtres amont
10. `FAQEC` — 9 questions (Pappers vs nous, garantie, RGPD, onboarding, dev interne, secteurs, après pilote, références)
11. `FinalCTA` — démo 30min

## Étape 3 — SEO & meta

- `<title>` : « Eligibly — CRM de prospection vertical pour cabinets d'expertise comptable »
- Meta description + OG du brief
- `SEOHead` et `StructuredData` adaptés au nouveau positionnement
- `mem://index.md` mis à jour : pivot acté, ancien positionnement AO archivé

## Étape 4 — Routes restantes (hors scope tour 1)

Toutes les pages AO publiques (Tarifs, Demo, blog AO, Vs Doubletrade/Tengo, /produit/*, etc.) restent en l'état pour ce tour. On les traitera dans un second temps :
- Soit suppression / 301 vers la nouvelle home
- Soit refonte page par page (Tarifs en premier pour cohérence pricing 290€)

Te dire quoi traiter en priorité après cette première salve.

## Hors scope explicite

- Pas de back-end / scraping INPI / scoring réel pour l'instant — uniquement la landing marketing
- Pas de touche aux pages legales (CGU, Mentions, Confidentialité)
- Pas de suppression de routes existantes ce tour (on évite les 404)

## Livrable de ce tour

Nouvelle homepage live à `/` qui matche le brief HTML, fondations design propres, reste du site temporairement dans l'ancien style. Tour suivant : décider quelles pages tuer / refondre.
