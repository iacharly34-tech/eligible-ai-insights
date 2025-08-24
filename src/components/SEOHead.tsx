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
    
    if (language === 'en') {
      switch (path) {
        case '/en':
        case '/en/':
          return {
            title: "Eligibly – AI for Public Tenders and Government Contracts",
            description: "Eligibly analyzes your success chances on public tenders and government contracts. Test our predictive AI specialized in public procurement.",
            keywords: "eligibly, public tenders, government contracts, AI, procurement, bid analysis"
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
            title: "Eligibly – IA pour appels d'offres publics (AO) et marchés publics",
            description: "Eligibly analyse vos chances de succès sur les appels d'offres publics et marchés publics. Testez notre IA prédictive spécialisée dans les AO.",
            keywords: "eligibly, appels d'offres publics, AO, marchés publics, IA, analyse"
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
  const canonicalUrl = `https://eligibly.ai${location.pathname}`;

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://eligibly.ai/assets/eligible-ai-opengraph.png" />
      <meta property="og:locale" content={language === 'en' ? 'en_US' : 'fr_FR'} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content="https://eligibly.ai/assets/eligible-ai-opengraph.png" />
      
      {/* Language alternatives */}
      <link rel="alternate" hrefLang="fr" href={`https://eligibly.ai${location.pathname.replace('/en', '')}`} />
      <link rel="alternate" hrefLang="en" href={`https://eligibly.ai/en${location.pathname}`} />
      <link rel="alternate" hrefLang="x-default" href="https://eligibly.ai/" />
      
      {/* Preload critical resources */}
      <link rel="preload" as="image" href="/assets/eligible-ai-hero-optimized.webp" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
    </>
  );
};