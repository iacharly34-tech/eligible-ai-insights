---
name: Pivot CRM Cabinets EC
description: Eligibly a pivoté vers un CRM vertical de prospection pour cabinets d'expertise comptable (SASU/SAS fraîchement immatriculées)
type: feature
---
# Pivot acté (juin 2026)

Eligibly n'est plus une plateforme d'appels d'offres publics. C'est maintenant un **CRM de prospection vertical pour cabinets d'expertise comptable**.

## Positionnement
- Cible : cabinets EC français (10-40 collab) en croissance, structuration commerciale, vertical, ou sortie portfolio.
- Promesse : chaque matin, les SASU/SAS fraîchement immatriculées les plus prometteuses, déjà filtrées (CAC, procédure, holding, serial écartés), priorisées avec score expliqué + plan d'action.
- Sources : INPI/RNE, Sirene/INSEE, BODACC, Pappers, Kaspr, Hunter.io.
- Tarif : 290€ HT/mois, 14 jours pilote gratuit sans CB.

## Design system (refonte juin 2026)
- **Palette éditoriale chaleureuse** : terracotta (#D85A30) accent principal, sapin (#2D4A3E) trust, moutarde (#D4A93B) accent secondaire, fonds crème (#FBF8F2 / #FAEEDA / #F4EFE8), textes terreux (#1B1410 / #5C4F47 / #9A8A75).
- **Typo** : Fraunces (display, italiques pour emphase) + Inter (body).
- **Plus de violet/bleu Tudor Watch** — l'ancien dark cinematic est archivé.

## Status routes
- `/` : nouvelle home pivot live.
- Toutes les autres pages (Tarifs, Demo, blog AO, Vs *, /produit/*, etc.) restent en l'état temporairement et héritent automatiquement de la nouvelle palette via les tokens shadcn. À traiter au prochain tour (suppression vs refonte page par page).

## Constraint
Ne plus parler d'appels d'offres publics dans la home / SEO / nouvelles pages. Les anciennes mémoires AO (`messaging/positionnement-scoring-predictif`, `features/ai-response-automation-suite`, `seo/product-module-landing-pages`, etc.) sont **obsolètes** pour la nouvelle direction.