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
    
    // Pages articles spécialisées
    if (path === '/appels-d-offres-publics') {
      return {
        title: "Appels d'offres publics : Guide complet 2025 | Eligibly IA",
        description: "Guide expert appels d'offres publics : stratégies, analyse IA, conseils pour remporter vos marchés publics. +40% de succès avec Eligibly. Secteurs BTP, IT, services.",
        keywords: "appels d'offres publics, appels d'offre publics, AO publics, marchés publics, appel d'offre public, procédure appel d'offres, code des marchés publics, achat public, commande publique, eligibly, IA"
      };
    }
    
    const articlesRoutes = {
      '/detection-appels-offres': {
        title: "Comment détecter les bons appels d'offres sans perdre des heures | Eligibly",
        description: "Découvrez comment identifier efficacement les appels d'offres pertinents grâce à l'IA. Stratégies et outils pour optimiser votre veille marchés publics en 2025.",
        keywords: "appels d'offres, marchés publics, détection, veille automatisée, IA, PME, filtrage AO"
      },
      '/erreurs-ao': {
        title: "Les 7 plus grosses erreurs des PME qui répondent aux marchés publics | Eligibly", 
        description: "Guide pratique pour éviter les pièges administratifs et techniques qui éliminent 60% des candidatures aux appels d'offres publics.",
        keywords: "erreurs appels d'offres, PME, mémoire technique, stratégie AO, marchés publics"
      },
      '/signaux-faibles': {
        title: "Les signaux faibles qui trahissent un marché public verrouillé | Eligibly",
        description: "Comment détecter les appels d'offres truqués et éviter de perdre du temps sur des procédures biaisées. Guide complet des indices révélateurs.",
        keywords: "favoritisme AO, marchés publics verrouillés, signaux faibles, transparence"
      },
      '/anticipation-ao': {
        title: "Anticiper les appels d'offres : le vrai avantage compétitif des entreprises gagnantes | Eligibly",
        description: "Pourquoi les leaders du marché ne réagissent plus aux publications d'AO mais les anticipent. Stratégies et outils pour prendre une longueur d'avance.",
        keywords: "anticipation AO, stratégie commerciale, veille marchés publics"
      },
      '/criteres-rse': {
        title: "Critères environnementaux et sociaux : comment les intégrer pour maximiser ses chances | Eligibly",
        description: "Guide complet pour réussir sur les marchés publics durables. Nouvelles obligations RSE, stratégies gagnantes et outils d'accompagnement en 2025.",
        keywords: "critères environnementaux, RSE, marchés publics, AO durables"
      },
      '/connexion': {
        title: "Connexion eligibly.ai - Accès à votre compte IA pour appels d'offres",
        description: "Connectez-vous à votre espace eligibly.ai pour analyser et gérer vos appels d'offres publics avec l'intelligence artificielle.",
        keywords: "connexion eligibly, compte IA, appels d'offres, login plateforme"
      },
      '/strategie-donnees': {
        title: "Comment bâtir une vraie stratégie AO basée sur les données | Eligibly",
        description: "De l'intuition à la science : comment les données transforment l'approche des marchés publics et maximisent le ROI commercial des PME et grands groupes.",
        keywords: "stratégie AO, données AO, IA marchés publics"
      },
      '/ao-perdus-avance': {
        title: "Pourquoi 3 appels d'offres sur 5 sont perdus d'avance | Eligibly",
        description: "Décryptage des mécanismes cachés qui rendent 60% des AO impossibles à gagner. Comment détecter et éviter ces pièges pour optimiser vos efforts commerciaux.",
        keywords: "AO perdus d'avance, filtrage AO, marchés publics IA"
      },
      '/marches-innovation': {
        title: "Marchés publics et innovation : où se cachent les vraies opportunités | Eligibly",
        description: "Décryptage des secteurs porteurs et des nouvelles opportunités dans la commande publique innovante. Guide 2025 pour identifier et conquérir les marchés d'avenir.",
        keywords: "marchés publics innovants, appels d'offres innovation, tech publique"
      },
      '/pme-vs-grands-groupes': {
        title: "PME, comment rivaliser avec les grands groupes sur les appels d'offres | Eligibly",
        description: "Stratégies concrètes pour que les PME tirent leur épingle du jeu face aux mastodontes. Groupements, niches, différenciation : tous les leviers pour inverser le rapport de force.",
        keywords: "PME marchés publics, concurrencer grands groupes, groupements AO"
      },
      '/futur-ia': {
        title: "Le futur de la réponse aux AO : IA, automatisation et stratégie humaine | Eligibly",
        description: "Vision prospective de l'évolution des marchés publics à l'ère de l'intelligence artificielle. Comment l'humain et la machine vont transformer ensemble l'approche des appels d'offres.",
        keywords: "IA marchés publics, automatisation AO, futur appels d'offres"
      },
      '/numerique-responsable': {
        title: "Critères environnementaux AO IT, Digital et Marketing | Guide 2025 | Eligibly",
        description: "Comment répondre aux exigences environnementales des marchés publics numériques. Numérique responsable, éco-conception, bilan carbone digital avec Greenmetrics.",
        keywords: "numérique responsable, green IT, critères environnementaux, AO numériques, éco-conception, Greenmetrics, marchés publics IT"
      },
      '/produit/veille-appels-offres': {
        title: "Veille appels d'offres IA automatisée | Eligibly Detect",
        description: "Automatisez votre veille appels d'offres avec l'IA. Surveillance de 200+ sources officielles, alertes temps réel, filtrage intelligent. Gagnez 15h/semaine.",
        keywords: "veille appels d'offres, monitoring AO, surveillance marchés publics, alertes AO, veille automatisée IA"
      },
      '/produit/analyse-dce-ia': {
        title: "Analyse DCE par IA | Extraction automatique des exigences | Eligibly Analyze",
        description: "Analysez vos DCE en quelques minutes avec l'IA. Extraction des exigences, scoring de compatibilité, synthèse stratégique. De 4h à 5 minutes.",
        keywords: "analyse DCE, dossier consultation entreprises, extraction exigences, IA marchés publics, analyse CCTP"
      },
      '/produit/go-no-go-ia': {
        title: "Go/No-Go prédictif IA appels d'offres | Eligibly Decide",
        description: "Décidez plus vite avec le scoring Go/No-Go prédictif par IA. Score de réussite, analyse de risques, recommandation stratégique. ×2.5 taux de succès.",
        keywords: "go no go appel d'offres, qualification AO, scoring prédictif, décision marchés publics, sélection AO"
      },
      '/produit/memoire-technique-ia': {
        title: "Mémoire technique IA | Rédaction assistée par RAG | Eligibly Write",
        description: "Rédigez vos mémoires techniques 5x plus vite avec l'IA RAG. Structure miroir du DCE, contenu personnalisé à partir de vos références.",
        keywords: "mémoire technique IA, rédaction mémoire technique, aide rédaction AO, IA rédaction marchés publics, RAG appels d'offres"
      },
      '/produit/conformite-appel-offres': {
        title: "Conformité appel d'offres | Anti-omission IA | Eligibly Check",
        description: "Vérifiez la conformité de vos réponses AO avec l'IA. Matrice de traçabilité DCE, checklist anti-omission, zéro élimination administrative.",
        keywords: "conformité appel d'offres, anti-omission AO, vérification dossier AO, checklist marchés publics, matrice traçabilité"
      },
      '/produit/pilotage-marches-publics': {
        title: "Pilotage performance marchés publics | KPIs et analytics | Eligibly Win",
        description: "Pilotez votre performance marchés publics avec des KPIs actionnables. Taux de succès, analyse retours acheteurs, benchmarks sectoriels.",
        keywords: "pilotage marchés publics, KPI appels d'offres, performance AO, analytics marchés publics, taux de succès"
      },
      '/checklist-conformite-ao': {
        title: "Checklist conformité AO : ne plus jamais être éliminé | Eligibly",
        description: "Checklist complète pour garantir la conformité de vos réponses aux appels d'offres. Documents, pièces administratives, matrice de traçabilité.",
        keywords: "checklist conformité AO, conformité marchés publics, pièces administratives, DC1 DC2 DUME"
      },
      '/kpi-marches-publics': {
        title: "KPIs marchés publics : les indicateurs qui comptent vraiment | Eligibly",
        description: "Les 8 KPIs essentiels pour piloter votre performance marchés publics. Taux de succès, ROI commercial, coût de réponse, analyse retours acheteurs.",
        keywords: "KPI marchés publics, indicateurs appels d'offres, performance AO, taux de succès, ROI commercial"
      }
    };

    if (articlesRoutes[path]) {
      return articlesRoutes[path];
    }
    
    if (language === 'en') {
      switch (path) {
        case '/en':
        case '/en/':
          return {
            title: "Eligibly - AI Platform for Public Tender Success",
            description: "Eligibly is the leading AI solution to analyze and win more public tenders. Increase your success rate by +47% with our predictive technology.",
            keywords: "eligibly, eligibly platform, public tenders, AI procurement, eligibly solution"
          };
        case '/en/product':
          return {
            title: "Eligibly Product – Save Time on Public Tenders",
            description: "Discover how Eligibly qualifies government contracts and maximizes your chances on each public tender.",
            keywords: "eligibly product, public tender analysis, government contracts, AI qualification"
          };
        case '/en/demo':
          return {
            title: "Eligibly Demo – AI Analysis of Your Public Tenders",
            description: "Launch an Eligibly demo and test our AI to evaluate your opportunities on government contracts.",
            keywords: "eligibly demo, public tender demo, AI analysis, government contracts"
          };
        case '/en/pricing':
          return {
            title: "Eligibly Pricing – AI for Public Tenders",
            description: "Discover Eligibly pricing plans for public tender analysis and government contract optimization.",
            keywords: "eligibly pricing, public tender pricing, government contracts AI"
          };
        case '/en/solutions':
          return {
            title: "Eligibly Solutions – Public Tender AI Platform",
            description: "Eligibly solutions for public tender analysis and government contract optimization.",
            keywords: "eligibly solutions, public tender platform, government contracts AI"
          };
        case '/en/resources':
          return {
            title: "Eligibly Resources – Public Tender Guides",
            description: "Resources and guides for winning public tenders and government contracts with Eligibly.",
            keywords: "eligibly resources, public tender guides, government contracts tips"
          };
        case '/en/about':
          return {
            title: "About Eligibly – Public Tender AI Experts",
            description: "Learn about Eligibly, the AI platform transforming public tender analysis and government contracts.",
            keywords: "about eligibly, public tender experts, government contracts AI"
          };
        case '/en/about-eligibly':
          return {
            title: "Eligibly - Leading AI for Public Tenders and Government Contracts",
            description: "Eligibly revolutionizes public tenders with AI. +47% success rate, predictive analysis of government contracts, public procurement optimization. Complete solution for businesses.",
            keywords: "eligibly, public tenders, government contracts, AI, artificial intelligence, predictive analysis, public procurement, tender process, bid opportunities, contract bidding, public sector contracts, tender documentation, procurement strategy, tender success, competitive bidding, procurement opportunities, tender qualification, bid preparation, procurement analysis, tender intelligence"
          };
        // English Blog Articles
        case '/en/strategic-watch':
          return {
            title: "Strategic Watch for Public Tenders: Complete Guide 2025 | Eligibly",
            description: "Master strategic watch for public tenders. Learn how to anticipate opportunities and gain competitive advantage with AI-powered monitoring.",
            keywords: "strategic watch, public tenders, tender monitoring, competitive intelligence, procurement opportunities"
          };
        case '/en/go-no-go-decision':
          return {
            title: "Go/No-Go Decision: Optimize Your Tender Response Strategy | Eligibly",
            description: "Master the Go/No-Go decision process. Learn 7 essential criteria to qualify opportunities and improve your tender success rate by 35%.",
            keywords: "go no go decision, tender qualification, bid decision, public tender strategy, tender success rate"
          };
        case '/en/public-tender-training':
          return {
            title: "Public Tender Training: Expert Guide for Professionals | Eligibly",
            description: "Complete training guide for mastering public tenders. From basics to advanced strategies for winning government contracts.",
            keywords: "public tender training, procurement training, bid writing course, government contracts"
          };
        case '/en/technical-proposal':
          return {
            title: "Technical Proposal Writing: Win More Public Contracts | Eligibly",
            description: "Expert guide to writing winning technical proposals. Structure, content, and strategies to maximize your score on public tenders.",
            keywords: "technical proposal, bid writing, tender response, government contracts, procurement"
          };
        case '/en/tender-feedback':
          return {
            title: "Tender Feedback Analysis: Learn from Every Bid | Eligibly",
            description: "How to analyze tender feedback and improve your future responses. Transform rejection into opportunity with data-driven insights.",
            keywords: "tender feedback, bid analysis, procurement improvement, tender debrief"
          };
        case '/en/price-quality-balance':
          return {
            title: "Price-Quality Balance in Public Tenders | Eligibly",
            description: "Master the price-quality balance in public procurement. Optimize your bids with strategic pricing and technical excellence.",
            keywords: "price quality balance, tender pricing, procurement strategy, best value"
          };
        default:
          return {
            title: "Eligibly – AI for Public Tenders and Government Contracts",
            description: "Eligibly analyzes your success chances on public tenders and government contracts. Test our predictive AI specialized in public procurement.",
            keywords: "eligibly, public tenders, government contracts, AI, procurement"
          };
      }
    } else {
      // French pages
      switch (path) {
        case '/':
        case '/accueil':
          return {
            title: "Eligibly — CRM de prospection pour cabinets d'expertise comptable",
            description: "Vos prochains clients sont fraîchement immatriculés. Eligibly consolide chaque jour les SASU/SAS créées en France, filtres amont (CAC, procédure, holding, serial), score expliqué, plan d'action par lead. 14 jours d'essai gratuits.",
            keywords: "prospection cabinet expertise comptable, leads experts comptables, SASU SAS immatriculation, CRM expertise comptable, primo entrepreneur, eligibly"
          };
        case '/produit':
          return {
            title: "Produit Eligibly – Gagnez du temps sur vos appels d'offres publics (AO)",
            description: "Découvrez comment Eligibly qualifie les marchés publics et maximise vos chances sur chaque AO.",
            keywords: "produit eligibly, analyse AO, appels d'offres publics, marchés publics"
          };
        case '/demo':
          return {
            title: "Démo Eligibly – Analyse IA de vos appels d'offres publics",
            description: "Lancez une démo Eligibly et testez notre IA pour évaluer vos opportunités sur les marchés publics.",
            keywords: "démo eligibly, test AO, appels d'offres publics, analyse IA"
          };
        case '/tarifs':
          return {
            title: "Tarifs Eligibly – IA pour appels d'offres publics et marchés",
            description: "Découvrez les tarifs Eligibly pour l'analyse d'appels d'offres publics et l'optimisation des marchés publics.",
            keywords: "tarifs eligibly, prix AO, appels d'offres publics, marchés publics"
          };
        case '/solutions':
          return {
            title: "Solutions Eligibly – Plateforme IA pour appels d'offres publics",
            description: "Solutions Eligibly pour l'analyse d'appels d'offres publics et l'optimisation des marchés publics.",
            keywords: "solutions eligibly, plateforme AO, appels d'offres publics, marchés publics"
          };
        case '/ressources':
          return {
            title: "Ressources Eligibly – Guides appels d'offres publics",
            description: "Ressources et guides pour gagner vos appels d'offres publics et marchés publics avec Eligibly.",
            keywords: "ressources eligibly, guides AO, appels d'offres publics, conseils marchés"
          };
        case '/a-propos':
          return {
            title: "À propos Eligibly – Experts IA appels d'offres publics",
            description: "Découvrez Eligibly, la plateforme IA qui transforme l'analyse des appels d'offres publics et marchés publics.",
            keywords: "à propos eligibly, experts AO, appels d'offres publics, IA marchés"
          };
        case '/a-propos-eligibly':
          return {
            title: "Eligibly - Leader IA pour Appels d'Offres Publics et Marchés Publics",
            description: "Eligibly révolutionne les appels d'offres publics avec l'IA. +47% de succès, analyse prédictive des AO, optimisation marchés publics. Solution complète pour PME et grands groupes.",
            keywords: "eligibly, appels d'offres publics, AO, marchés publics, IA, intelligence artificielle, analyse prédictive, consultation publique, procédure appel d'offres, mémoire technique, code marchés publics, achat public, commande publique, veille marchés publics, stratégie AO, AAPC, dossier candidature, critères attribution, secteurs prioritaires, opportunités commerciales"
          };
        default:
          return {
            title: "Eligibly – IA pour appels d'offres publics (AO) et marchés publics",
            description: "Eligibly analyse vos chances de succès sur les appels d'offres publics et marchés publics. Testez notre IA prédictive spécialisée dans les AO.",
            keywords: "eligibly, appels d'offres publics, AO, marchés publics, IA"
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
    upsertMetaTag("name", "twitter:site", "@eligible_ai");
    upsertMetaTag("name", "twitter:creator", "@eligible_ai");
    upsertMetaTag("name", "news_keywords", "appels d'offres publics, IA, marchés publics, intelligence artificielle");
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
      upsertMetaTag("property", "article:section", "Marchés Publics");
      upsertMetaTag("property", "article:tag", "marchés publics");
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
