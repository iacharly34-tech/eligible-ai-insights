import { useLocation } from "react-router-dom";

export type Lang = "fr" | "en";

/**
 * Detects the current site language from the URL pathname.
 * /en or /en/... → 'en', otherwise → 'fr'.
 */
export const useLang = (): Lang => {
  const { pathname } = useLocation();
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr";
};

export const localizedHref = (path: string, lang: Lang): string => {
  if (lang === "fr") return path;
  // Map common FR routes → EN equivalents
  const map: Record<string, string> = {
    "/": "/en",
    "/produit": "/en/product",
    "/solutions": "/en/solutions",
    "/tarifs": "/en/pricing",
    "/ressources": "/en/resources",
    "/a-propos": "/en/about",
    "/connexion": "/en/login",
    "/demo": "/en/demo",
    "/mentions-legales": "/en/legal",
    "/confidentialite": "/en/privacy",
    "/cgu": "/en/terms",
    "/leads-experts-comptables": "/en/accountant-lead-generation",
    "/alternatives-primolead-experts-comptables": "/en/primolead-alternative",
    "/prospection-cabinet-comptable": "/en/accounting-firm-prospecting",
    "/canaux-activation": "/en/activation-channels",
    "/pourquoi-ce-lead-est-prioritaire": "/en/why-this-lead-is-priority",
    "/cabinet/glossaire": "/en/glossary",
    "/cabinet/cas-usage": "/en/use-cases",
    "/cabinet/cas-usage/cabinet-8-collaborateurs-departement": "/en/use-cases/8-people-regional-firm",
    "/cabinet/cas-usage/cabinet-specialise-restauration": "/en/use-cases/hospitality-specialist-firm",
    "/cabinet/cas-usage/cabinet-full-remote-startups-ecommerce": "/en/use-cases/remote-startup-ecommerce-firm",
    "/verticales/sasu-tech": "/en/verticals/tech-ltd-companies",
    "/verticales/e-commerce": "/en/verticals/e-commerce",
    "/verticales/restauration-chr": "/en/verticals/restaurants-hospitality",
    "/verticales/btp-artisans": "/en/verticals/construction-trades",
    "/verticales/professions-liberales-sante": "/en/verticals/healthcare-professionals",
    "/verticales/holdings-groupes": "/en/verticals/holdings-groups",
    "/blog/barometre-immatriculations-juillet-2026": "/en/blog/registrations-barometer-july-2026",
    "/blog/moderniser-cabinet-etat-lieux-2026": "/en/blog/modernise-accounting-firm-2026",
    "/blog/5-leviers-croissance-cabinet-expertise-comptable": "/en/blog/5-growth-levers-accounting-firm",
    "/sales-assistant": "/en/sales-assistant",
  };
  return map[path] ?? path;
};

// Reverse map EN → FR
const EN_TO_FR: Record<string, string> = {
  "/en": "/",
  "/en/product": "/produit",
  "/en/solutions": "/solutions",
  "/en/pricing": "/tarifs",
  "/en/resources": "/ressources",
  "/en/about": "/a-propos",
  "/en/login": "/connexion",
  "/en/demo": "/demo",
  "/en/legal": "/mentions-legales",
  "/en/privacy": "/confidentialite",
  "/en/terms": "/cgu",
  "/en/accountant-lead-generation": "/leads-experts-comptables",
  "/en/primolead-alternative": "/alternatives-primolead-experts-comptables",
  "/en/accounting-firm-prospecting": "/prospection-cabinet-comptable",
  "/en/activation-channels": "/canaux-activation",
  "/en/why-this-lead-is-priority": "/pourquoi-ce-lead-est-prioritaire",
  "/en/glossary": "/cabinet/glossaire",
  "/en/use-cases": "/cabinet/cas-usage",
  "/en/use-cases/8-people-regional-firm": "/cabinet/cas-usage/cabinet-8-collaborateurs-departement",
  "/en/use-cases/hospitality-specialist-firm": "/cabinet/cas-usage/cabinet-specialise-restauration",
  "/en/use-cases/remote-startup-ecommerce-firm": "/cabinet/cas-usage/cabinet-full-remote-startups-ecommerce",
  "/en/verticals/tech-ltd-companies": "/verticales/sasu-tech",
  "/en/verticals/e-commerce": "/verticales/e-commerce",
  "/en/verticals/restaurants-hospitality": "/verticales/restauration-chr",
  "/en/verticals/construction-trades": "/verticales/btp-artisans",
  "/en/verticals/healthcare-professionals": "/verticales/professions-liberales-sante",
  "/en/verticals/holdings-groups": "/verticales/holdings-groupes",
  "/en/blog/registrations-barometer-july-2026": "/blog/barometre-immatriculations-juillet-2026",
  "/en/blog/modernise-accounting-firm-2026": "/blog/moderniser-cabinet-etat-lieux-2026",
  "/en/blog/5-growth-levers-accounting-firm": "/blog/5-leviers-croissance-cabinet-expertise-comptable",
  "/en/sales-assistant": "/sales-assistant",
};

/**
 * Return the alternate-language URL path for the given path.
 * Used for hreflang tags.
 */
export const alternateHref = (path: string): string | null => {
  // Try EN → FR first
  if (EN_TO_FR[path]) return EN_TO_FR[path];
  // Then FR → EN (rebuild the map on the fly)
  const enMap: Record<string, string> = Object.fromEntries(
    Object.entries(EN_TO_FR).map(([en, fr]) => [fr, en]),
  );
  return enMap[path] ?? null;
};