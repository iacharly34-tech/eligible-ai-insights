# Version UK complète du site

Cible : **en-GB**, marché UK (chartered accountants). Toutes les URLs sous `/en/...` avec hreflang bidirectionnels vers leurs équivalents FR.

## 1. Blog EN (3 articles)

Nouvelles routes :
- `/en/blog/registrations-barometer-july-2026`
- `/en/blog/modernise-accounting-firm-2026`
- `/en/blog/5-growth-levers-accounting-firm`

Traduction fidèle du contenu FR, adaptée UK : "chartered accountants", "Companies House" en note comparative, £ mentionné à titre indicatif mais chiffres INSEE conservés avec disclaimer "French market data".

## 2. Landings cabinet EC (4 pages)

- `/en/accountant-lead-generation` ← `/leads-experts-comptables`
- `/en/primolead-alternative` ← `/alternatives-primolead-experts-comptables`
- `/en/use-cases` (+ 3 sous-pages) ← `/cabinet/cas-usage/*`
  - `/en/use-cases/8-people-regional-firm`
  - `/en/use-cases/hospitality-specialist-firm`
  - `/en/use-cases/remote-startup-ecommerce-firm`
- `/en/glossary` ← `/cabinet/glossaire`
- `/en/why-this-lead-is-priority` ← `/pourquoi-ce-lead-est-prioritaire`
- `/en/activation-channels` ← `/canaux-activation`
- `/en/accounting-firm-prospecting` ← `/prospection-cabinet-comptable`

## 3. Verticales (6 pages)

- `/en/verticals/sasu-tech` → "Tech Ltd companies"
- `/en/verticals/e-commerce`
- `/en/verticals/restaurants-hospitality`
- `/en/verticals/construction-trades`
- `/en/verticals/healthcare-professionals`
- `/en/verticals/holdings-groups`

Chaque page traduite avec terminologie UK et hreflang vers son équivalent FR.

## 4. SEO transverse

- **hreflang** : ajout systématique `<link rel="alternate" hreflang="fr-FR|en-GB|x-default">` sur chaque page FR et EN via Helmet.
- **JSON-LD** : `inLanguage: "en-GB"` sur toutes les nouvelles pages, `Article` / `BreadcrumbList` / `WebPage` structurés.
- **Sitemap** : `scripts/generate-sitemap.ts` étendu avec les ~20 nouvelles URLs EN.
- **LanguageSwitcher** : mise à jour du mapping FR↔EN pour toutes les nouvelles paires.
- **Header/Footer EN** : libellés harmonisés `Product · Solutions · Pricing · Resources · About · Demo`.
- **llms.txt** : section EN listant les nouvelles URLs.
- **index.html** : ajout `<link rel="alternate" hreflang>` sitewide pour homepage.

## 5. Sitelinks

Les sitelinks Google se déclenchent sur cohérence de navigation. Actions :
- S'assurer que les libellés Header/Footer EN sont **strictement identiques** partout.
- `SitelinksStructuredData` étendu avec les URLs EN principales (`/en`, `/en/product`, `/en/pricing`, `/en/demo`, `/en/resources`).

## Technique

Fichiers créés (~20 fichiers `.tsx`) + patchs sur : `App.tsx`, `LanguageSwitcher.tsx`, `Header.tsx`, `Footer.tsx`, `SitelinksStructuredData.tsx`, `scripts/generate-sitemap.ts`, `public/llms.txt`, `index.html`.

Volume important : je réutilise les shells FR (`LandingCabinetLayout`, `ArticleShell`) en passant des props traduites pour éviter la duplication de logique.

## À noter

- Les articles EN reprennent les données FR (marché français) avec un encart contextuel — un cabinet UK cherchant "how French firms handle X" reste pertinent, mais je préciserai la source pour éviter la confusion.
- Pas de traduction des pages légales (`/en/legal`, `/en/privacy`, `/en/terms` existent déjà).
- Publication : les nouveaux `/en/*` mettront quelques jours à être crawlés par Google même après resoumission du sitemap.
