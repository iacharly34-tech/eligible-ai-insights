# Repositionnement Eligibly — Détection + Scoring + Activation

Objectif : sortir de la comparaison "fichier de SIRET" (PrimoLead, Nouvelles Entreprises) en vendant une couche **priorisation + activation multicanale**.

Positionnement cible (une phrase, réutilisée partout) :
> Eligibly aide les cabinets d'expertise-comptable à détecter les nouveaux entrepreneurs à fort potentiel, à comprendre pourquoi ils sont prioritaires, puis à les approcher avec le bon canal : LinkedIn, email, appel, Instagram ou courrier à en-tête du cabinet.

Je propose 4 phases pour ne pas tout casser d'un coup et livrer de la valeur SEO/UX incrémentale.

---

## Phase 1 — Messaging & nettoyage (fondations)

Livrables :
- Nouveau tagline + sous-titre appliqué partout (Header, Hero, Footer, meta title, meta description sitewide dans `index.html`).
- Purge des mots interdits dans meta/titres/copies : "appels d'offres", "AO", "marchés publics", "go/no-go", "candidater", "score de succès avant candidature". Grep global sur `src/` + `index.html` + `public/*.xml`.
- Repositionnement du KPI produit (leads consultés / contactés / taux réponse / RDV / lettres de mission / revenu potentiel / temps économisé) dans `constants.ts` et sections chiffres.
- Retirer "IA" du headline principal ; l'IA passe en support ("Eligibly utilise l'IA pour expliquer...").

## Phase 2 — Refonte Home en 3 blocs

Nouvelle structure `src/pages/Index.tsx` :
1. **Hero** : nouveau tagline + démo visuelle d'une fiche lead scorée.
2. **Bloc Détection** — sources publiques, nouvelles SASU/SAS/EURL/SARL par zone/activité.
3. **Bloc Scoring** — forme juridique, activité, localisation, dirigeant, complexité, timing, signaux.
4. **Bloc Activation** — 5 canaux (LinkedIn, email, appel, Instagram, courrier en-tête) + message préparé.
5. **Comparatif "Fichier vs Eligibly"** — table côte à côte (les 5 lignes du brief).
6. **Démo concrète** — mini-tableau 10 leads factices (Nom / Date / Ville / Forme / Activité / Score / Besoin probable / Canal / Action).
7. **Preuve de conformité** — bandeau court (sources publiques, opt-out, blacklist, prospection B2B CNIL).
8. **Tarifs 3 niveaux** (Essentiel / Pro / Business, cf. Phase 4).
9. **CTA final**.

Sections existantes à supprimer/reléguer : tout module orienté AO / réponse d'AO.

## Phase 3 — Pages produit clés (nouvelles routes)

Créer :
- `/leads-experts-comptables` — landing SEO principale.
- `/prospection-cabinet-comptable` — méthode 2026.
- `/pourquoi-ce-lead-est-prioritaire` — **page clé** : fiche lead type détaillée (SASU conseil IT Paris, score 84, explication ligne par ligne, canal recommandé, message proposé).
- `/canaux-activation` — les 5 canaux détaillés avec cas d'usage (Instagram → restaurants/beauté, courrier → professions traditionnelles, etc.).
- `/fonctionnalites/scoring-leads`
- `/fonctionnalites/social-selling`
- `/fonctionnalites/courrier-cabinet`

Toutes câblées dans `src/App.tsx`, ajoutées à `scripts/generate-sitemap.ts`.

## Phase 4 — Offres, SEO longue traîne, redirections

- **Tarifs** refactorés en 3 offres : Essentiel (Lead Feed) / Pro (Lead Scoring) / Business (Sales Assistant). Refonte `src/pages/Tarifs.tsx` + `PricingSection.tsx`.
- **Blog** : nouvel article `/blog/acquisition-client-cabinet-comptable` + 6 pages SEO ciblées (prospection expert-comptable, leads cabinets, fichier SASU limites, contact post-immatriculation, LinkedIn expert-comptable, courrier prospection modèles).
- **Redirections** : les routes AO legacy dans `App.tsx` sont déjà des `Navigate to="/"` — on redirige plutôt vers `/leads-experts-comptables` là où c'est pertinent, et on ajoute des redirects manquants pour anciennes pages produit.
- **Sitemap + robots** mis à jour ; suppression des URLs AO du sitemap.

---

## Détails techniques

- Design : garder les tokens existants (terracotta / sapin / moutarde / Fraunces + Inter — cf. memory pivot cabinet EC). Aucun hex en dur.
- Composants réutilisés : `ArticleLayout` pour les nouvelles pages SEO ; `ProductModuleLayout` pour les 3 fiches fonctionnalités ; `Card`, `Badge`, `Table` shadcn pour la fiche lead prioritaire et le comparatif.
- Chaque nouvelle route : `<Helmet>` avec title/description/canonical propres (installer `react-helmet-async` si absent, sinon appliquer via `SEOHead`).
- Sitemap : ajouter les ~15 nouvelles routes + supprimer archives AO.
- Bilingue : FR d'abord (priorité marché). EN suit dans un second temps (hors périmètre de ce plan).

## Ordre de merge suggéré

```text
Phase 1 (nettoyage messaging)     → 1 PR — sûr, réversible
Phase 2 (home refactor)           → 1 PR — visible immédiat
Phase 3 (pages produit clés)      → 1 PR par 2-3 pages
Phase 4 (offres + SEO + redirects)→ 1 PR
```

## Ce qui n'est PAS dans ce plan (à confirmer plus tard)

- Backend scraping / ingestion données INSEE-SIRENE (memory constraint : frontend focus).
- Vraie génération IA de messages LinkedIn/email (nécessite edge function + Lovable AI — décision produit à part).
- CRM interne / pipeline (Phase 5 éventuelle).
- Traduction EN des nouvelles pages.

---

## Questions avant de démarrer

1. **On attaque par Phase 1 seule d'abord** (messaging + purge des mots AO), ou tu veux qu'on enchaîne direct Phase 1 + Phase 2 (home refactor) dans la foulée ?
2. **Fiche lead démo** : je pars sur les 10 exemples inventés listés dans ton brief, ou tu veux fournir des noms/villes précis ?
3. **Tarifs Essentiel/Pro/Business** : je garde le prix unique 290€ HT/mois actuel (memory) comme "Pro", et j'invente Essentiel moins cher / Business plus cher — ou tu m'indiques les 3 prix ?
