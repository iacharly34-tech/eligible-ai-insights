import { Suspense, useEffect } from "react";
import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
  redirect,
  useRouter,
} from "@tanstack/react-router";
import { HelmetProvider } from "react-helmet-async";

import appCss from "../styles.css?url";
import { getRouteMeta, getCanonicalUrl, isKnownRoute } from "@/lib/route-meta";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SkipNavigation } from "@/components/SkipNavigation";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { SecurityErrorBoundary } from "@/components/SecurityErrorBoundary";
import { SitelinksStructuredData } from "@/components/SitelinksStructuredData";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieConsent } from "@/components/CookieConsent";
import { FormUXEnhancer } from "@/components/FormUXEnhancer";
import { LanguageSync } from "@/components/LanguageSync";
import NotFound from "@/pages/NotFound";

// ----- Legacy redirects (formerly <Navigate> routes in src/App.tsx) -----
// Served as real 301s during SSR — better for SEO than the old client-side redirects.
const LEGACY_AO_PATHS = [
  "/appels-d-offres-publics", "/detection-appels-offres", "/erreurs-ao", "/signaux-faibles",
  "/anticipation-ao", "/criteres-rse", "/strategie-donnees", "/ao-perdus-avance",
  "/marches-innovation", "/pme-vs-grands-groupes", "/futur-ia", "/go-no-go",
  "/formation-ao", "/prix-qualite", "/documents-ao", "/retours-ao",
  "/veille-strategique", "/numerique-responsable", "/eligibly-vs-doubletrade",
  "/eligibly-vs-tengo", "/eligibly-vs-veille-manuelle", "/eligibly-vs-libel",
  "/eligibly-vs-remporte", "/eligibly-vs-doaken", "/boamp-guide",
  "/logiciel-appels-offres", "/repondre-appel-offres", "/trouver-appels-offres",
  "/mapa-marches-publics", "/dce-dossier-consultation", "/profil-acheteur",
  "/plateforme-marches-publics", "/seuils-marches-publics",
  "/dematerialisation-marches-publics", "/allotissement-marches-publics",
  "/criteres-attribution-marches-publics", "/memoire-technique-marches-publics",
  "/groupement-entreprises-marches-publics", "/negociation-marches-publics",
  "/chiffrer-offre-marche-public", "/scoring-predictif-ia-marches-publics",
  "/ia-analyse-dce", "/donnees-attribution-marches-publics",
  "/automatiser-veille-marches-publics", "/checklist-conformite-ao", "/kpi-marches-publics",
];

const EXACT_REDIRECTS: Record<string, string> = {
  "/search": "/",
  "/a-propos-eligibly": "/a-propos",
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
  "/en/glossary": "/cabinet/glossaire",
  "/en/use-cases": "/cabinet/cas-usage",
  "/en/blog/registrations-barometer-july-2026": "/blog/barometre-immatriculations-juillet-2026",
  "/en/blog/modernise-accounting-firm-2026": "/blog/moderniser-cabinet-etat-lieux-2026",
  "/en/blog/5-growth-levers-accounting-firm": "/blog/5-leviers-croissance-cabinet-expertise-comptable",
  "/en/blog/empartners-case-study": "/blog/cas-client-empartners",
  ...Object.fromEntries(LEGACY_AO_PATHS.map((p) => [p, "/"])),
};

function resolveLegacyRedirect(pathname: string): string | undefined {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const exact = EXACT_REDIRECTS[path];
  if (exact) return exact;
  if (path.startsWith("/en/")) return "/";
  if (path.startsWith("/produit/")) return "/produit";
  return undefined;
}

// ----- Root route -----
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  beforeLoad: ({ location }) => {
    const target = resolveLegacyRedirect(location.pathname);
    if (target && target !== location.pathname) {
      throw redirect({ href: target, statusCode: 301, replace: true });
    }
  },
  head: (ctx) => {
    const leaf = ctx.matches[ctx.matches.length - 1];
    const pathname = leaf?.pathname ?? "/";
    const known = isKnownRoute(pathname);
    const pageMeta = getRouteMeta(pathname);
    const canonical = getCanonicalUrl(pathname);
    const isArticle = known && pathname.startsWith("/blog/");
    return {
    meta: [
      { charSet: "UTF-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: pageMeta.title },
      { name: "description", content: pageMeta.description },
      { name: "author", content: "eligibly.ai" },
      {
        name: "keywords",
        content:
          "prospection cabinet expertise comptable, leads experts comptables, SASU SAS immatriculation, nouveaux entrepreneurs, scoring leads, social selling, courrier à en-tête, eligibly",
      },
      { name: "geo.region", content: "FR" },
      { name: "geo.placename", content: "France" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "google-site-verification", content: "DU6-5ONzXwKsCKMVInRm8TLzCOg4mtxPbD4Lz8YTjjM" },
      // Security headers (ported from index.html)
      {
        httpEquiv: "Content-Security-Policy",
        content:
          "default-src 'self'; script-src 'self' 'unsafe-inline' https://plausible.io; script-src-attr 'none'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https:; font-src 'self' https://fonts.gstatic.com data:; connect-src 'self' https: https://plausible.io; worker-src 'self'; frame-ancestors 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests",
      },
      { httpEquiv: "X-Content-Type-Options", content: "nosniff" },
      { httpEquiv: "Referrer-Policy", content: "strict-origin-when-cross-origin" },
      { httpEquiv: "Permissions-Policy", content: "camera=(), microphone=(), geolocation=()" },
      // PWA
      { name: "theme-color", content: "#5B36F5" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      // Open Graph / Twitter — per-route values rendered server-side
      { property: "og:title", content: pageMeta.title },
      { property: "og:description", content: pageMeta.description },
      { property: "og:type", content: isArticle ? "article" : "website" },
      { property: "og:image", content: "https://eligibly.ai/og-image.jpg" },
      { property: "og:url", content: canonical },
      { property: "og:site_name", content: "Eligibly" },
      { property: "og:locale", content: "fr_FR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: pageMeta.title },
      { name: "twitter:description", content: pageMeta.description },
      { name: "twitter:image", content: "https://eligibly.ai/og-image.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      // Self-referencing canonical, rendered server-side for every route
      { rel: "canonical", href: canonical },
      // Fonts
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap",
      },
      // Favicons
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      // PWA manifest
      { rel: "manifest", href: "/manifest.json" },
    ],
    scripts: [
      // Hôte canonique : www.eligibly.ai -> eligibly.ai (ported from index.html)
      {
        children:
          "(function(){var h=window.location.hostname;if(h==='www.eligibly.ai'||h==='www.eligibly.fr'){window.location.replace(window.location.protocol+'//'+h.slice(4)+window.location.pathname+window.location.search+window.location.hash);}})();",
      },
      // Analytics: Plausible (RGPD-friendly, cookieless)
      { src: "https://plausible.io/js/script.js", defer: true, "data-domain": "eligibly.ai" },
      // Critical structured data inlined for crawlers that do not execute JS
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Eligibly",
          alternateName: "Eligibly.ai",
          url: "https://eligibly.ai",
          logo: "https://eligibly.ai/assets/eligibly-logo-main.png",
          description:
            "Détectez. Scorez. Signez. — Eligibly détecte chaque SASU/SAS/EURL/SARL/SEL fraîchement immatriculée, score son adéquation à votre ICP et recommande le canal d'approche (LinkedIn, email, appel, courrier) dans la fenêtre de contact ≤ 90 jours. Livré chaque matin à 7h aux cabinets d'expertise-comptable.",
          sameAs: ["https://www.linkedin.com/company/eligibly"],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: "contact@eligibly.ai",
            areaServed: "FR",
            availableLanguage: ["French", "English"],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Eligibly",
          url: "https://eligibly.ai",
          inLanguage: "fr-FR",
          publisher: { "@type": "Organization", name: "Eligibly" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Navigation principale Eligibly",
          itemListElement: [
            { "@type": "SiteNavigationElement", position: 1, name: "Marque & visibilité", url: "https://eligibly.ai/marque-et-visibilite-expert-comptable" },
            { "@type": "SiteNavigationElement", position: 2, name: "Détection & prospection", url: "https://eligibly.ai/produit" },
            { "@type": "SiteNavigationElement", position: 3, name: "Solutions", url: "https://eligibly.ai/solutions" },
            { "@type": "SiteNavigationElement", position: 4, name: "Tarifs", url: "https://eligibly.ai/tarifs" },
            { "@type": "SiteNavigationElement", position: 5, name: "Ressources", url: "https://eligibly.ai/ressources" },
            { "@type": "SiteNavigationElement", position: 6, name: "À propos", url: "https://eligibly.ai/a-propos" },
            { "@type": "SiteNavigationElement", position: 7, name: "Démo", url: "https://eligibly.ai/demo" },
          ],
        }),
      },
      // Service worker cleanup (unregisters legacy SW + caches; /sw.js stays a kill-switch)
      { src: "/scripts/sw-register.js", defer: true },
      // Performance: hover preload
      { src: "/scripts/hover-preload.js", defer: true },
    ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: RootErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SecurityErrorBoundary>
        <HelmetProvider>
          <ErrorBoundary>
            <LanguageProvider>
              <TooltipProvider>
                <FormUXEnhancer />
                <SkipNavigation />
                <Toaster />
                <Sonner />
                <CookieConsent />
                <SitelinksStructuredData />
                <ScrollToTop />
                <LanguageSync />
                <Suspense fallback={null}>
                  <Outlet />
                </Suspense>
              </TooltipProvider>
            </LanguageProvider>
          </ErrorBoundary>
        </HelmetProvider>
      </SecurityErrorBoundary>
    </QueryClientProvider>
  );
}

function RootErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-md text-center">
        <h1 className="mb-2 text-xl font-semibold text-foreground">
          Cette page n'a pas pu se charger
        </h1>
        <p className="mb-6 text-muted-foreground">
          Une erreur est survenue de notre côté. Vous pouvez réessayer ou revenir à l'accueil.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <button
            type="button"
            className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
            onClick={() => {
              void router.invalidate();
              reset();
            }}
          >
            Réessayer
          </button>
          <a
            className="rounded-md border border-border bg-background px-4 py-2 text-foreground"
            href="/"
          >
            Accueil
          </a>
        </div>
      </div>
    </div>
  );
}
