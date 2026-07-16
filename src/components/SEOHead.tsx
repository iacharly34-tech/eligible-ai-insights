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
        title: "Créations d'entreprises 2025 : 1,1 M immat. [INSEE]",
        description: "Chiffres INSEE 2025 des créations d'entreprises en France : SASU, SAS, EURL, micro. Volumes par région, secteurs porteurs, opportunités cabinet EC.",
        keywords: "créations entreprises 2025, SASU SAS, INSEE, primo-entrepreneurs, cabinet expertise-comptable"
      },
      '/blog/cout-acquisition-client-cabinet-comptable': {
        title: "CAC cabinet comptable : combien coûte 1 client en 2026 ?",
        description: "Benchmark 2026 du CAC en cabinet EC (300 à 1 200 €) et 6 leviers concrets pour le diviser par deux. Sources chiffrées : Booster, Oltega, 425PPM.",
        keywords: "CAC cabinet comptable, coût acquisition client, prospection expertise-comptable, marketing cabinet"
      },
      '/blog/icp-cabinet-expertise-comptable': {
        title: "ICP cabinet EC : la méthode en 5 étapes (+ modèle prêt)",
        description: "Définir l'ICP de votre cabinet en 5 étapes : forme juridique, activité, taille, zone. Modèle prêt à copier et critères d'exclusion. Sources OEC, Atlas.",
        keywords: "ICP cabinet expertise-comptable, client idéal, ciblage prospection, segmentation cabinet"
      },
      '/blog/barometre-acquisition-cabinet-ec-2026': {
        title: "Baromètre 2026 — Acquisition client en cabinet EC",
        description: "CAC, taux de conversion, cycle de vente et canaux gagnants pour cabinets EC en 2026. Données terrain + sources OEC, INSEE, Atlas.",
        keywords: "baromètre acquisition cabinet, CAC 2026, cycle de vente cabinet, benchmark cabinet expertise-comptable"
      },
      '/blog/observatoire-sasu-sas-juin-2026': {
        title: "Observatoire SASU/SAS France — 25 000 immat./mois",
        description: "Volumes, géographie, secteurs et capital moyen des SASU/SAS créées en France (juin 2026). Comment lire ces données pour orienter votre prospection.",
        keywords: "observatoire SASU SAS, immatriculations, primo-entrepreneurs, marché cabinet expertise-comptable"
      },
      '/blog/playbook-prospection-cabinet-ec-2026': {
        title: "Playbook 2026 : prospection cabinet EC (18 min de lecture)",
        description: "Méthode complète de prospection cabinet EC : ICP, séquences multicanal (LinkedIn, email, appel, courrier), IA, KPIs. De la détection à la signature.",
        keywords: "playbook prospection cabinet, séquences prospection expertise-comptable, LinkedIn cabinet, courrier cabinet"
      },
      '/blog/lexique-marketing-expert-comptable': {
        title: "Lexique marketing pour experts-comptables — 30 mots clés",
        description: "CAC, LTV, ICP, MQL/SQL, pipeline, séquences outbound… Le glossaire du marketing B2B traduit pour le quotidien d'un cabinet d'expertise-comptable.",
        keywords: "lexique marketing expert-comptable, CAC LTV, MQL SQL, glossaire prospection cabinet"
      },
      '/blog/fichier-siret-vs-plan-action-comptable': {
        title: "Fichier SIRET vs plan d'action : lequel choisir en 2026 ?",
        description: "Fichier SIRET brut ou plan d'action scoré : comparatif honnête, coûts, ROI, effort commercial. La bonne réponse dépend de votre cabinet EC.",
        keywords: "fichier SIRET, plan d'action commercial, prospection cabinet EC, alternative Manageo"
      },
      '/blog/moderniser-cabinet-expertise-comptable-ia': {
        title: "IA cabinet expertise comptable 2026 : 6 axes + simulateur ROI",
        description: "Moderniser un cabinet d'expertise comptable avec l'IA en 2026 : production, conseil, relation client, RH, gouvernance, prospection. Simulateur ROI IA gratuit, gains chiffrés, sources OEC, CSOEC, Cegid.",
        keywords: "IA cabinet expertise comptable, IA experts-comptables 2026, modernisation cabinet EC, transformation numérique cabinet comptable, simulateur ROI IA cabinet, prospection IA experts-comptables, automatisation cabinet comptable, OCR facture cabinet EC, dashboards temps réel expert-comptable, Eligibly cabinet comptable, SASU SAS immatriculation prospection"
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
            title: "Eligibly — Detect. Score. Win. Future clients in 90 days.",
            description: "Detect every newly registered French SASU/SAS/EURL/SARL/SEL, score ICP fit and reach out within the ≤ 90-day contact window. Morning digest at 7am. 14-day pilot, no card.",
            keywords: "accounting firm prospecting, SASU SAS leads, AI for accountants, lead detection, 90 day contact window, eligibly"
          };
        case '/en/product':
          return {
            title: "Eligibly Product — Detection, scoring & multichannel activation",
            description: "Daily detection of new SASU, SAS, EURL, SARL and SEL, ICP filters, explained scoring, recommended channel (LinkedIn, email, letter). GDPR-compliant. Delivered to your inbox.",
            keywords: "eligibly features, lead detection engine, AI SASU SAS, lead scoring, morning digest"
          };
        case '/en/demo':
          return {
            title: "Eligibly Demo — 10 scored leads on your area, 20 min",
            description: "Book a 20-min demo: 10 SASU/SAS/EURL/SARL/SEL scored on your area, recommended channel, ready-to-send opener. No card, no commitment.",
            keywords: "eligibly demo, accountant lead detection, accounting firm prospecting"
          };
        case '/en/pricing':
          return {
            title: "Eligibly Pricing — From €10 per qualified lead, custom quote",
            description: "From €10 per qualified lead, tailored to your accounting firm's volume and size. 14-day pilot without a credit card. Leads delivered to your channels.",
            keywords: "eligibly pricing, accounting firm prospecting price, from 10 euro per lead"
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
            title: "About Eligibly — Detect, score and win your future clients",
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
            description: "Eligibly's AI detects newly registered French SASU, SAS, EURL, SARL and SEL each day, applies your ICP filters, and delivers your morning digest of PREMIUM leads directly to your inbox.",
            keywords: "eligibly, accountant lead detection, AI for accounting firms, SASU SAS"
          };
      }
    } else {
      // French pages
      switch (path) {
        case '/mentions-legales':
          return {
            title: "Mentions légales — Eligibly",
            description: "Mentions légales d'Eligibly : éditeur GM2.0 SAS, RCS Paris 930 166 913, siège 9 Avenue de Bouvines 75011 Paris, hébergement et contact.",
            keywords: "mentions légales eligibly, éditeur, GM2.0, RCS Paris"
          };
        case '/confidentialite':
          return {
            title: "Politique de confidentialité — Eligibly",
            description: "Politique de confidentialité et RGPD d'Eligibly : données collectées, finalités, durées de conservation, droits d'accès et de suppression.",
            keywords: "politique confidentialité eligibly, RGPD, données personnelles, cabinet expertise-comptable"
          };
        case '/cgu':
          return {
            title: "Conditions générales d'utilisation — Eligibly",
            description: "Conditions générales d'utilisation d'Eligibly : accès au service, obligations utilisateurs, propriété intellectuelle, responsabilités et résiliation.",
            keywords: "CGU eligibly, conditions générales utilisation, cabinet expertise-comptable"
          };
        case '/':
        case '/accueil':
          return {
            title: "Eligibly — Détectez. Scorez. Signez. Vos futurs clients en 90 j.",
            description: "Détectez chaque SASU/SAS/EURL/SARL/SEL immatriculée en France, scorez-la sur votre ICP, contactez-la dans la fenêtre ≤ 90 jours. Digest livré à 7h chaque matin. Pilote 14 j gratuit, sans CB.",
            keywords: "détectez scorez signez, prospection cabinet expertise-comptable, fenêtre 90 jours, leads experts-comptables, SASU SAS EURL SARL SEL immatriculation, scoring ICP, digest matinal, eligibly"
          };
        case '/produit':
          return {
            title: "Produit Eligibly — Détection, scoring & activation multicanale",
            description: "Détection quotidienne des nouvelles SASU/SAS/EURL/SARL/SEL, filtres ICP, scoring expliqué, canal d'approche recommandé (LinkedIn, email, appel, courrier). RGPD.",
            keywords: "fonctionnalités eligibly, détection leads cabinet, scoring priorité, canal d'approche, social selling, courrier cabinet"
          };
        case '/demo':
          return {
            title: "Démo Eligibly — 10 leads scorés sur votre zone, en 20 min",
            description: "Réservez une démo 20 min : 10 SASU/SAS/EURL/SARL/SEL scorées sur votre zone, canal d'approche recommandé, accroche prête à envoyer. Sans CB, sans engagement.",
            keywords: "démo eligibly, prospection cabinet expertise-comptable, leads scorés, canal d'approche"
          };
        case '/tarifs':
          return {
            title: "Tarifs Eligibly — À partir de 10 € le lead qualifié, devis sur mesure",
            description: "À partir de 10 € le lead qualifié, ajusté à votre volume et à la taille de votre cabinet EC. Pilote 14 jours sans carte bancaire. Résiliation mensuelle.",
            keywords: "tarifs eligibly, prix prospection cabinet, 10 euros lead qualifié, devis personnalisé"
          };
        case '/solutions':
          return {
            title: "Cas d'usage cabinet EC — 6 profils, filtres & bénéfices concrets",
            description: "6 verticales cabinet EC : Tech, Conseil, Santé, Artisans, Grands cabinets, Structuration commerciale. Filtres appliqués et gains chiffrés par profil.",
            keywords: "cas d'usage cabinet expertise-comptable, verticales prospection cabinet, eligibly"
          };
        case '/ressources':
          return {
            title: "Ressources cabinet EC — Baromètres, playbooks & analyses sourcées",
            description: "Baromètres CAC, playbooks de prospection, ICP, séquences multicanal, observatoires SASU/SAS : les analyses sourcées (INSEE, OEC, Atlas) pour votre cabinet.",
            keywords: "ressources cabinet expertise-comptable, playbook prospection, baromètre CAC, ICP cabinet"
          };
        case '/a-propos':
          return {
            title: "À propos d'Eligibly — Détectez, scorez et signez vos futurs clients",
            description: "Notre mission : que chaque cabinet EC produise ses propres leads, jamais mutualisés. Équipe, vision, valeurs et engagement de moyens.",
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
  const ogImageUrl = "https://eligibly.ai/og-image.jpg";
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
    upsertMetaTag("property", "og:type", location.pathname.startsWith("/blog/") ? "article" : "website");
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
