import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  noindex?: boolean;
}

export const SEOHead = ({ noindex = false }: SEOHeadProps) => {
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
            title: "Eligibly - Plateforme IA pour optimiser vos appels d'offres publics",
            description: "Eligibly est la solution IA leader pour analyser et gagner plus d'appels d'offres publics. Augmentez votre taux de succès de +47% avec notre technologie prédictive.",
            keywords: "eligibly, plateforme eligibly, appels d'offres publics, IA marchés publics, solution eligibly"
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
  
  // Gestion correcte des URLs canoniques pour éviter les doublons
  let canonicalUrl = `https://eligibly.ai${location.pathname}`;
  
  // Pour les pages EN, on garde la version EN comme canonique
  if (location.pathname.startsWith('/en/')) {
    canonicalUrl = `https://eligibly.ai${location.pathname}`;
  } else {
    // Pour les pages FR, on s'assure qu'il n'y a pas de duplication
    canonicalUrl = `https://eligibly.ai${location.pathname}`;
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="robots" content="index, follow" />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Géolocalisation pour SEO local */}
      <meta name="geo.region" content="FR-IDF" />
      <meta name="geo.placename" content="Paris, France" />
      <meta name="geo.position" content="48.8566;2.3522" />
      <meta name="ICBM" content="48.8566, 2.3522" />
      
      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eligibly.ai/assets/eligible-ai-opengraph.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={language === 'en' ? 'en_US' : 'fr_FR'} />
      <meta property="og:site_name" content="Eligibly.ai" />
      
      {/* Article spécifique */}
      {location.pathname.includes('/') && !location.pathname.includes('/en') && location.pathname !== '/' && (
        <>
          <meta property="article:published_time" content="2025-08-20T10:00:00Z" />
          <meta property="article:modified_time" content="2025-08-24T15:30:00Z" />
          <meta property="article:author" content="Équipe Eligibly" />
          <meta property="article:section" content="Marchés Publics" />
          <meta property="article:tag" content="appels d'offres publics" />
          <meta property="article:tag" content="IA" />
          <meta property="article:tag" content="marchés publics" />
        </>
      )}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content="https://eligibly.ai/assets/eligible-ai-opengraph.png" />
      <meta name="twitter:site" content="@eligibly_ai" />
      <meta name="twitter:creator" content="@eligibly_ai" />
      
      {/* Language alternatives - URLs correctes pour éviter les doublons */}
      {!location.pathname.startsWith('/en/') ? (
        <>
          <link rel="alternate" hrefLang="fr" href={`https://eligibly.ai${location.pathname}`} />
          <link rel="alternate" hrefLang="en" href={`https://eligibly.ai/en${location.pathname === '/' ? '' : location.pathname}`} />
        </>
      ) : (
        <>
          <link rel="alternate" hrefLang="en" href={`https://eligibly.ai${location.pathname}`} />
          <link rel="alternate" hrefLang="fr" href={`https://eligibly.ai${location.pathname.replace('/en', '') || '/'}`} />
        </>
      )}
      <link rel="alternate" hrefLang="x-default" href="https://eligibly.ai/" />
      
      {/* Preload critical resources */}
      <link rel="preload" as="image" href="/assets/eligible-ai-hero-optimized.webp" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      
      {/* Enhanced meta pour Google Discover */}
      <meta name="news_keywords" content="appels d'offres publics, IA, marchés publics, intelligence artificielle" />
      <meta name="author" content="Eligibly Team" />
      <meta name="publisher" content="Eligibly.ai" />
    </>
  );
};