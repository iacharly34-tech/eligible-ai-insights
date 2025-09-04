import { useLanguage } from "@/contexts/LanguageContext";

export const SitelinksStructuredData = () => {
  const { language } = useLanguage();

  const siteNavigationData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Navigation Eligibly",
    "description": "Navigation principale du site Eligibly pour les appels d'offres publics",
    "url": "https://eligibly.ai",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": language === 'en' ? "AI Product" : "Produit IA",
        "description": language === 'en' ? "AI analysis platform for public tenders and procurement" : "Plateforme d'analyse IA pour appels d'offres et marchés publics",
        "url": `https://eligibly.ai${language === 'en' ? '/en/product' : '/produit'}`,
        "about": language === 'en' ? "Artificial intelligence for public procurement optimization" : "Intelligence artificielle pour l'optimisation des marchés publics"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2, 
        "name": language === 'en' ? "Free Demo" : "Démo Gratuite",
        "description": language === 'en' ? "Test Eligibly AI on your public tender projects for free" : "Testez gratuitement l'IA Eligibly sur vos projets d'appels d'offres",
        "url": `https://eligibly.ai${language === 'en' ? '/en/demo' : '/demo'}`,
        "about": language === 'en' ? "Free testing and demonstration of AI capabilities" : "Test gratuit et démonstration des capacités IA"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": language === 'en' ? "Complete Solutions" : "Solutions Complètes",
        "description": language === 'en' ? "End-to-end solutions for public procurement success" : "Solutions de bout en bout pour réussir dans la commande publique", 
        "url": `https://eligibly.ai${language === 'en' ? '/en/solutions' : '/solutions'}`,
        "about": language === 'en' ? "Comprehensive strategies and tools for public markets" : "Stratégies et outils complets pour les marchés publics"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": language === 'en' ? "Transparent Pricing" : "Tarifs Transparents", 
        "description": language === 'en' ? "Clear and transparent pricing for all business sizes" : "Tarification claire et transparente pour toutes les tailles d'entreprise",
        "url": `https://eligibly.ai${language === 'en' ? '/en/pricing' : '/tarifs'}`,
        "about": language === 'en' ? "Pricing plans adapted to SMEs and large groups" : "Plans tarifaires adaptés aux PME et grands groupes"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": language === 'en' ? "Expert Resources" : "Ressources Expert",
        "description": language === 'en' ? "Guides, articles and expertise for public tender success" : "Guides, articles et expertise pour réussir vos appels d'offres publics",
        "url": `https://eligibly.ai${language === 'en' ? '/en/resources' : '/ressources'}`,
        "about": language === 'en' ? "Educational content and strategic guides" : "Contenu éducatif et guides stratégiques"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 6,
        "name": language === 'en' ? "Public Tender Guide" : "Guide Appels d'Offres",
        "description": language === 'en' ? "Complete guide to analyzing and winning public tenders" : "Guide complet pour analyser et remporter les appels d'offres publics",
        "url": "https://eligibly.ai/appels-d-offres-publics",
        "about": language === 'en' ? "Comprehensive methodology for public procurement success" : "Méthodologie complète pour réussir dans les marchés publics"
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