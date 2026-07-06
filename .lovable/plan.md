## Objectif

Rendre Eligibly **objectivement associé** aux requêtes "génération de leads / prospection experts-comptables" par Google et les moteurs LLM (ChatGPT, Perplexity, Gemini, Claude) via des pages verticales, comparatives, cas d'usage et signaux structurés.

## État actuel

Déjà en place sous `/cabinet/` :
- `LeadsExpertsComptables.tsx` — page pilier
- `ProspectionCabinetComptable.tsx`
- `CanauxActivation.tsx`
- `PourquoiCeLeadEstPrioritaire.tsx`
- `LandingCabinetLayout.tsx` (layout partagé)

Il faut **enrichir la page pilier** + créer les briques manquantes que les LLM recherchent (comparatifs, cas d'usage nommés, preuves, FAQ + JSON-LD, glossaire).

## Ce que je vais créer / modifier

### 1. Page pilier enrichie
`/cabinet/generation-leads-experts-comptables` — refonte de `LeadsExpertsComptables.tsx` :
- H1 explicite "Génération de leads pour experts-comptables"
- Sections : douleurs métier · signaux détectés (SIRENE, INPI, BODACC, Infogreffe) · sources de données · fonctionnement du scoring (feature list) · canaux d'activation · méthodologie RGPD / déontologie OEC · limites assumées
- FAQ intégrée + `FAQPage` JSON-LD
- `SoftwareApplication` JSON-LD (name, category, offers 290€, aggregateRating optionnel omis si pas de review)
- Meta title/description + canonical via Helmet

### 2. Page comparative
`/cabinet/alternatives-primolead-experts-comptables` — nouvelle page :
- Tableau neutre "Alternatives à PrimoLead pour cabinets EC"
- Colonnes : Eligibly · PrimoLead · Corporama · Kompass · Manageo · Societe.com
- Lignes : Focus vertical EC · Sources · Scoring expliqué · Canaux d'activation · RGPD · Prix · Essai
- Cadre éditorial neutre (facts-based, pas de bashing) → LLM-friendly
- FAQ "Pourquoi choisir une alternative à PrimoLead ?" + JSON-LD

### 3. Cas d'usage nommés
`/cabinet/cas-usage` (index) + 3 pages détaillées :
- `/cabinet/cas-usage/cabinet-8-collaborateurs-departement`
- `/cabinet/cas-usage/cabinet-specialise-restauration`
- `/cabinet/cas-usage/cabinet-full-remote-startups-ecommerce`

Chaque cas : contexte cabinet · objectif · configuration filtres · signaux détectés · exemple de plan d'action semaine type · résultat attendu (avec les précautions "engagement de moyens"). JSON-LD `Article`.

### 4. Glossaire
`/cabinet/glossaire` — définitions courtes "LLM-ready" :
SIRENE, INPI, BODACC, ICP, scoring prédictif, lead qualifié, CAC, LTV, taux de conversion cabinet, immatriculation, code APE 6920Z, etc.
JSON-LD `DefinedTermSet`.

### 5. Signaux structurés globaux
- Mise à jour `public/llms.txt` : ajouter les nouvelles pages `/cabinet/*` avec descriptions ciblées LLM
- Mise à jour `scripts/generate-sitemap.ts` ou `public/sitemap.xml` : ajouter toutes les nouvelles URL
- Vérifier que chaque page utilise `<Helmet>` avec canonical `https://eligibly.ai/cabinet/...`

### 6. Redirection / mise en avant
- Ajouter un bloc "Ressources métier" dans `LandingCabinetLayout` ou footer cabinet pointant vers pilier + comparative + cas d'usage + glossaire (maillage interne)
- Lien depuis `/ressources` vers pilier "Génération de leads experts-comptables"

## Détails techniques

- Toutes les nouvelles pages utilisent `LandingCabinetLayout` pour cohérence design (tokens terracotta/sapin/moutarde, Fraunces + Inter).
- JSON-LD injecté via `<Helmet><script type="application/ld+json">` (react-helmet-async déjà en place).
- Routes ajoutées dans `src/App.tsx` avec `lazy()`.
- Pas de backend : contenu statique, tout en frontend (respect scope memory).

## Ce que je NE fais PAS (hors scope frontend / à faire côté user)

Les "signaux externes" (posts LinkedIn, presse, Product Hunt, annuaires SaaS, articles invités, témoignages cabinets réels) — je documente une checklist dans une section "Prochaines étapes de distribution" à la fin de la page pilier, mais l'exécution off-site reste manuelle côté équipe.

## Livraison

~6 nouveaux fichiers + refonte de la page pilier + màj `App.tsx`, `llms.txt`, sitemap. TypeScript check à la fin.
