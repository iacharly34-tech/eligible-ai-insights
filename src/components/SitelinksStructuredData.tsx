import { useLanguage } from "@/contexts/LanguageContext";

export const SitelinksStructuredData = () => {
  const { language } = useLanguage();

  const siteNavigationData = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Eligibly Navigation",
    "url": "https://eligibly.ai",
    "hasPart": [
      {
        "@type": "WebPage",
        "name": language === 'en' ? "Public Tender Analysis" : "Appels d'Offres Publics",
        "description": language === 'en' 
          ? "AI analysis for public tenders and government contracts"
          : "Analyse IA des appels d'offres publics et marchés publics",
        "url": "https://eligibly.ai/appels-d-offres-publics",
        "about": language === 'en' ? "Public procurement" : "Marchés publics"
      },
      {
        "@type": "WebPage", 
        "name": language === 'en' ? "Product Features" : "Fonctionnalités Produit",
        "description": language === 'en'
          ? "Discover Eligibly AI platform features for public tenders"
          : "Découvrez les fonctionnalités de la plateforme IA Eligibly",
        "url": "https://eligibly.ai/produit",
        "about": language === 'en' ? "AI software" : "Logiciel IA"
      },
      {
        "@type": "WebPage",
        "name": language === 'en' ? "Free Demo" : "Démo Gratuite",
        "description": language === 'en'
          ? "Test Eligibly AI analysis on your public tenders"
          : "Testez l'analyse IA Eligibly sur vos appels d'offres",
        "url": "https://eligibly.ai/demo",
        "about": language === 'en' ? "Product demonstration" : "Démonstration produit"
      },
      {
        "@type": "WebPage",
        "name": language === 'en' ? "AI Solutions" : "Solutions IA",
        "description": language === 'en'
          ? "Complete AI solutions for public procurement optimization"
          : "Solutions IA complètes pour l'optimisation des marchés publics",
        "url": "https://eligibly.ai/solutions",
        "about": language === 'en' ? "Business solutions" : "Solutions entreprise"
      },
      {
        "@type": "WebPage",
        "name": language === 'en' ? "Pricing Plans" : "Plans Tarifaires", 
        "description": language === 'en'
          ? "Affordable pricing for AI public tender analysis"
          : "Tarifs accessibles pour l'analyse IA des appels d'offres",
        "url": "https://eligibly.ai/tarifs",
        "about": language === 'en' ? "Subscription plans" : "Plans d'abonnement"
      },
      {
        "@type": "WebPage",
        "name": language === 'en' ? "Expert Resources" : "Ressources Expert",
        "description": language === 'en'
          ? "Guides and articles for public tender success"
          : "Guides et articles pour réussir vos appels d'offres",
        "url": "https://eligibly.ai/ressources",
        "about": language === 'en' ? "Educational content" : "Contenu éducatif"
      }
    ]
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://eligibly.ai"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "Appels d'Offres Publics",
        "item": "https://eligibly.ai/appels-d-offres-publics"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Produit",
        "item": "https://eligibly.ai/produit"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Solutions",
        "item": "https://eligibly.ai/solutions"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteNavigationData, null, 2)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData, null, 2)
        }}
      />
    </>
  );
};