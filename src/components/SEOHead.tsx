import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  noindex?: boolean;
  titleOverride?: string;
  descriptionOverride?: string;
  canonicalOverride?: string;
}

const upsertMetaTag = (attribute: "name" | "property", value: string, content: string) => {
  let meta = document.head.querySelector(`meta[${attribute}="${value}"]`) as HTMLMetaElement | null;

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, value);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
};

const removeMetaTag = (attribute: "name" | "property", value: string) => {
  document.head.querySelector(`meta[${attribute}="${value}"]`)?.remove();
};

const upsertLinkTag = (rel: string, href: string, extraAttributes: Record<string, string> = {}) => {
  const selector = `link[rel="${rel}"]${Object.entries(extraAttributes)
    .map(([key, value]) => `[${key}="${value}"]`)
    .join("")}`;

  let link = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);

  Object.entries(extraAttributes).forEach(([key, value]) => {
    link?.setAttribute(key, value);
  });
};

const removeLinkTag = (rel: string, extraAttributes: Record<string, string> = {}) => {
  const selector = [
    `link[rel="${rel}"]`,
    ...Object.entries(extraAttributes).map(([key, value]) => `[${key}="${value}"]`),
  ].join("");

  document.head.querySelector(selector)?.remove();
};

export const SEOHead = ({
  noindex = false,
  titleOverride,
  descriptionOverride,
  canonicalOverride,
}: SEOHeadProps) => {
  const { language } = useLanguage();
  const location = useLocation();
  
  const getPageSEO = () => {
    const path = location.pathname;

    // Blog articles cabinet EC
    const blogRoutes: Record<string, { title: string; description: string; keywords: string }> = {
      '/blog/creations-entreprises-france-2025': {
        title: "Créations d'entreprises en France 2025 : chiffres INSEE | Eligibly",
        description: "État des lieux INSEE des créations d'entreprises en France : SASU, SAS, EURL, SARL, micro-entreprises. Volumes, régions, secteurs porteurs pour cabinets d'expertise-comptable.",
        keywords: "créations entreprises 2025, SASU SAS, INSEE, primo-entrepreneurs, cabinet expertise-comptable"
      },
      '/blog/cout-acquisition-client-cabinet-comptable': {
        title: "Coût d'acquisition client en cabinet d'expertise-comptable | Eligibly",
        description: "Décomposition du CAC en cabinet d'expertise-comptable et leviers concrets pour le diviser par deux : sourcing, qualification, séquences, canaux.",
        keywords: "CAC cabinet comptable, coût acquisition client, prospection expertise-comptable, marketing cabinet"
      },
      '/blog/icp-cabinet-expertise-comptable': {
        title: "ICP cabinet d'expertise-comptable : définir son client idéal | Eligibly",
        description: "Comment définir l'ICP d'un cabinet d'expertise-comptable : forme juridique, activité, taille, complexité, zone. Et surtout : ce qu'il faut exclure du pipeline.",
        keywords: "ICP cabinet expertise-comptable, client idéal, ciblage prospection, segmentation cabinet"
      },
      '/blog/barometre-acquisition-cabinet-ec-2026': {
        title: "Baromètre acquisition cabinet d'expertise-comptable 2026 | Eligibly",
        description: "Benchmark 2026 : CAC, taux de conversion, durée du cycle de vente et canaux d'acquisition les plus efficaces pour les cabinets d'expertise-comptable français.",
        keywords: "baromètre acquisition cabinet, CAC 2026, cycle de vente cabinet, benchmark cabinet expertise-comptable"
      },
      '/blog/observatoire-sasu-sas-juin-2026': {
        title: "Observatoire SASU / SAS — juin 2026 | Eligibly",
        description: "Volumes, géographie et secteurs des SASU et SAS fraîchement immatriculées en France : les données que tout cabinet d'expertise-comptable doit connaître.",
        keywords: "observatoire SASU SAS, immatriculations, primo-entrepreneurs, marché cabinet expertise-comptable"
      },
      '/blog/playbook-prospection-cabinet-ec-2026': {
        title: "Playbook prospection cabinet expertise-comptable 2026 | Eligibly",
        description: "Cadre opérationnel de prospection pour cabinets d'expertise-comptable : ICP, séquences multi-canal (LinkedIn, email, appel, courrier), mesure et pilotage.",
        keywords: "playbook prospection cabinet, séquences prospection expertise-comptable, LinkedIn cabinet, courrier cabinet"
      },
      '/blog/lexique-marketing-expert-comptable': {
        title: "Lexique marketing pour expert-comptable | Eligibly",
        description: "Tous les termes marketing utiles à un cabinet d'expertise-comptable : CAC, LTV, ICP, MQL/SQL, taux de conversion, cycle de vente, social selling.",
        keywords: "lexique marketing expert-comptable, CAC LTV, MQL SQL, glossaire prospection cabinet"
      }
    };

    if (blogRoutes[path]) {
      return blogRoutes[path];
    }
    
    if (language === 'en') {
      switch (path) {
        case '/en':
        case '/en/':
          return {
            title: "Eligibly — AI lead detection for French accounting firms",
            description: "Eligibly's AI detects newly registered French SASU/SAS each day, applies your ICP filters, and delivers your morning digest of PREMIUM leads directly to your inbox.",
            keywords: "accounting firm prospecting, SASU SAS leads, AI for accountants, lead detection, eligibly"
          };
        case '/en/product':
          return {
            title: "Eligibly Features — AI lead detection engine",
            description: "Official immatriculation sources, AI filters, explained scoring and a morning PREMIUM-leads digest delivered to your inbox. Slack and Microsoft Teams integrations available on request.",
            keywords: "eligibly features, lead detection engine, AI SASU SAS, lead scoring, morning digest"
          };
        case '/en/demo':
          return {
            title: "Eligibly Demo — AI lead detection for accounting firms",
            description: "Book a personalised Eligibly demo and see how the AI surfaces fresh SASU/SAS prospects in your area every morning.",
            keywords: "eligibly demo, accountant lead detection, accounting firm prospecting"
          };
        case '/en/pricing':
          return {
            title: "Eligibly Pricing — tailored quote · 14-day pilot",
            description: "Monthly subscription calibrated to your firm, shared after a scoping call. 14-day pilot, no credit card.",
            keywords: "eligibly pricing, accounting firm prospecting price, accountant subscription"
          };
        case '/en/solutions':
          return {
            title: "Eligibly Use Cases — by accounting firm profile",
            description: "Six verticals for accounting firms: Tech, Consulting, Healthcare, Craftsmen, Large firms & networks, Commercial scale-up. Filters and benefits per profile.",
            keywords: "accounting firm use cases, accountant verticals, eligibly"
          };
        case '/en/resources':
          return {
            title: "Eligibly Resources — Accounting firm prospecting playbooks",
            description: "Playbooks, ROI calculators and prospecting guides to grow your accounting firm's portfolio through AI lead detection.",
            keywords: "accounting firm resources, prospecting playbook, accountant ROI"
          };
        case '/en/about':
          return {
            title: "About Eligibly — Stop buying leads",
            description: "Eligibly helps accounting firms produce their own leads, never mutualised. Our mission, team and vision.",
            keywords: "about eligibly, mission, accounting firm team"
          };
        case '/en/about-eligibly':
          return {
            title: "Eligibly — AI lead detection for accounting firms",
            description: "Eligibly turns official immatriculation data into a daily flow of qualified leads delivered to your accounting firm's preferred channels.",
            keywords: "eligibly, accounting firm AI, lead detection, SASU SAS, accountant prospecting"
          };
        default:
          return {
            title: "Eligibly — AI lead detection for accounting firms",
            description: "Eligibly's AI detects newly registered French SASU/SAS each day, applies your ICP filters, and delivers your morning digest of PREMIUM leads directly to your inbox.",
            keywords: "eligibly, accountant lead detection, AI for accounting firms, SASU SAS"
          };
      }
    } else {
      // French pages
      switch (path) {
        case '/':
        case '/accueil':
          return {
            title: "Eligibly — Prospection nouveaux entrepreneurs pour cabinets d'expertise-comptable",
            description: "Chaque semaine, recevez les nouveaux entrepreneurs à fort potentiel pour votre cabinet : SASU, SAS, EURL, SARL fraîchement immatriculées, priorisées par score, avec le canal d'approche recommandé.",
            keywords: "prospection cabinet expertise-comptable, leads experts-comptables, SASU SAS immatriculation, nouveaux entrepreneurs, scoring leads, social selling, courrier à en-tête, eligibly"
          };
        case '/produit':
          return {
            title: "Fonctionnalités Eligibly — Détection, scoring, activation multicanale",
            description: "Détection des nouvelles immatriculations, scoring de priorité expliqué, recommandation du canal d'approche (LinkedIn, email, appel, Instagram, courrier à en-tête) et message préparé. Conformité RGPD.",
            keywords: "fonctionnalités eligibly, détection leads cabinet, scoring priorité, canal d'approche, social selling, courrier cabinet"
          };
        case '/demo':
          return {
            title: "Démo Eligibly — Voir 10 leads scorés sur votre zone",
            description: "Réservez une démo personnalisée d'Eligibly et voyez 10 nouveaux entrepreneurs scorés sur votre zone : forme juridique, activité, besoin probable, canal d'approche recommandé.",
            keywords: "démo eligibly, prospection cabinet expertise-comptable, leads scorés, canal d'approche"
          };
        case '/tarifs':
          return {
            title: "Tarifs Eligibly — 290 € HT / mois, pilote 14 jours gratuit",
            description: "290 € HT / mois pour votre cabinet d'expertise-comptable, sans engagement. 14 jours de pilote gratuit sans carte bancaire. Résiliation mensuelle.",
            keywords: "tarifs eligibly, prix prospection cabinet, abonnement expert-comptable, pilote gratuit"
          };
        case '/solutions':
          return {
            title: "Cas d'usage Eligibly — Par type de cabinet",
            description: "6 verticales pour cabinets d'expertise-comptable : Tech, Conseil, Santé, Artisans & commerces, Grands cabinets & réseaux, Structuration commerciale. Filtres et bénéfices par profil.",
            keywords: "cas d'usage cabinet expertise-comptable, verticales prospection cabinet, eligibly"
          };
        case '/ressources':
          return {
            title: "Ressources Eligibly — Playbooks prospection cabinet",
            description: "Playbooks, baromètres et guides pour développer le portefeuille de votre cabinet d'expertise-comptable : CAC, ICP, séquences multi-canal, social selling, courrier à en-tête.",
            keywords: "ressources cabinet expertise-comptable, playbook prospection, baromètre CAC, ICP cabinet"
          };
        case '/a-propos':
          return {
            title: "À propos d'Eligibly — Stop buying leads",
            description: "Eligibly aide les cabinets d'expertise-comptable à produire leurs propres leads, jamais mutualisés. Notre mission, notre équipe, notre vision.",
            keywords: "à propos eligibly, mission, équipe cabinet expertise-comptable"
          };
        default:
          return {
            title: "Eligibly — Prospection nouveaux entrepreneurs pour cabinets d'expertise-comptable",
            description: "Détection, scoring et activation multicanale des nouveaux entrepreneurs pour les cabinets d'expertise-comptable — LinkedIn, email, appel, Instagram, courrier à en-tête.",
            keywords: "eligibly, leads experts-comptables, prospection cabinet, SASU SAS, nouveaux entrepreneurs"
          };
      }
    }
  };

  const seo = getPageSEO();
  const resolvedTitle = titleOverride ?? seo.title;
  const resolvedDescription = descriptionOverride ?? seo.description;
  const isEnglishPath = location.pathname === "/en" || location.pathname.startsWith("/en/");
  const frenchPath = isEnglishPath
    ? location.pathname.replace(/^\/en(?=\/|$)/, "") || "/"
    : location.pathname;
  const englishPath = isEnglishPath
    ? location.pathname
    : (location.pathname === "/" ? "/en" : `/en${location.pathname}`);
  const canonicalUrl = canonicalOverride
    ?? (location.pathname === "/" ? "https://eligibly.ai" : `https://eligibly.ai${location.pathname}`);
  const alternateFrHref = frenchPath === "/" ? "https://eligibly.ai" : `https://eligibly.ai${frenchPath}`;
  const alternateEnHref = `https://eligibly.ai${englishPath}`;
  const ogImageUrl = "https://eligibly.ai/og-image.png";
  const isArticlePage = !noindex && location.pathname !== "/" && !location.pathname.startsWith("/en");

  useEffect(() => {
    document.title = resolvedTitle;
    document.documentElement.lang = language === "en" ? "en" : "fr";

    upsertMetaTag("name", "description", resolvedDescription);
    upsertMetaTag("name", "keywords", seo.keywords);
    upsertMetaTag("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertMetaTag("name", "geo.region", "FR-IDF");
    upsertMetaTag("name", "geo.placename", "Paris, France");
    upsertMetaTag("name", "geo.position", "48.8566;2.3522");
    upsertMetaTag("name", "ICBM", "48.8566, 2.3522");
    upsertMetaTag("name", "twitter:card", "summary_large_image");
    upsertMetaTag("name", "twitter:title", resolvedTitle);
    upsertMetaTag("name", "twitter:description", resolvedDescription);
    upsertMetaTag("name", "twitter:image", ogImageUrl);
    upsertMetaTag("name", "twitter:site", "@eligibly_ai");
    upsertMetaTag("name", "twitter:creator", "@eligibly_ai");
    upsertMetaTag("name", "news_keywords", "experts-comptables, leads, prospection, SASU, SAS, IA");
    upsertMetaTag("name", "author", "Eligibly Team");
    upsertMetaTag("name", "publisher", "Eligibly.ai");

    upsertMetaTag("property", "og:title", resolvedTitle);
    upsertMetaTag("property", "og:description", resolvedDescription);
    upsertMetaTag("property", "og:url", canonicalUrl);
    upsertMetaTag("property", "og:type", "website");
    upsertMetaTag("property", "og:image", ogImageUrl);
    upsertMetaTag("property", "og:image:width", "1200");
    upsertMetaTag("property", "og:image:height", "630");
    upsertMetaTag("property", "og:locale", language === "en" ? "en_US" : "fr_FR");
    upsertMetaTag("property", "og:site_name", "Eligibly");

    upsertLinkTag("canonical", canonicalUrl);
    upsertLinkTag("alternate", alternateFrHref, { hreflang: "fr" });
    upsertLinkTag("alternate", alternateEnHref, { hreflang: "en" });
    upsertLinkTag("alternate", "https://eligibly.ai", { hreflang: "x-default" });

    if (isArticlePage) {
      upsertMetaTag("property", "article:published_time", "2025-08-20T10:00:00Z");
      upsertMetaTag("property", "article:modified_time", "2025-08-24T15:30:00Z");
      upsertMetaTag("property", "article:author", "Équipe Eligibly");
      upsertMetaTag("property", "article:section", "Expertise comptable");
      upsertMetaTag("property", "article:tag", "prospection cabinet");
    } else {
      removeMetaTag("property", "article:published_time");
      removeMetaTag("property", "article:modified_time");
      removeMetaTag("property", "article:author");
      removeMetaTag("property", "article:section");
      removeMetaTag("property", "article:tag");
    }

    return () => {
      removeLinkTag("alternate", { hreflang: "fr" });
      removeLinkTag("alternate", { hreflang: "en" });
      removeLinkTag("alternate", { hreflang: "x-default" });
    };
  }, [
    alternateEnHref,
    alternateFrHref,
    canonicalUrl,
    isArticlePage,
    language,
    noindex,
    resolvedDescription,
    resolvedTitle,
    seo.keywords,
  ]);

  return null;
};
