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
  };
  return map[path] ?? path;
};