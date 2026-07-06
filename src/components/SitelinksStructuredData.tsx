import { useLanguage } from "@/contexts/LanguageContext";

export const SitelinksStructuredData = () => {
  const { language } = useLanguage();

  const siteNavigationData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Navigation Eligibly",
    "description": language === 'en' ? "Main navigation of Eligibly — lead detection for accounting firms" : "Navigation principale d'Eligibly — détection de leads pour cabinets d'expertise-comptable",
    "url": "https://eligibly.ai",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": language === 'en' ? "Product" : "Produit",
        "description": language === 'en' ? "Detection, scoring and multichannel activation for newly-registered entrepreneurs" : "Détection, scoring et activation multicanale des nouveaux entrepreneurs",
        "url": `https://eligibly.ai${language === 'en' ? '/en/product' : '/produit'}`,
        "about": language === 'en' ? "Lead detection and prioritisation for accounting firms" : "Détection et priorisation de leads pour cabinets d'expertise-comptable"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "Solutions",
        "description": language === 'en' ? "Approach calibrated to each accounting-firm profile" : "Approche calibrée pour chaque profil de cabinet d'expertise-comptable",
        "url": `https://eligibly.ai${language === 'en' ? '/en/solutions' : '/solutions'}`,
        "about": language === 'en' ? "Verticals: tech, consulting, healthcare, craftsmen, large firms" : "Verticales : tech, conseil, santé, artisans, grands cabinets"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": language === 'en' ? "Pricing" : "Tarifs", 
        "description": language === 'en' ? "Clear and transparent pricing for all business sizes" : "Tarification claire et transparente pour toutes les tailles d'entreprise",
        "url": `https://eligibly.ai${language === 'en' ? '/en/pricing' : '/tarifs'}`,
        "about": language === 'en' ? "Free 14-day pilot, monthly billing, no commitment" : "Pilote 14 jours gratuit, facturation mensuelle, sans engagement"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": language === 'en' ? "Resources" : "Ressources",
        "description": language === 'en' ? "Playbooks, ROI calculators and prospecting guides for accounting firms" : "Playbooks, calculateurs ROI et guides de prospection pour cabinets d'expertise-comptable",
        "url": `https://eligibly.ai${language === 'en' ? '/en/resources' : '/ressources'}`,
        "about": language === 'en' ? "Baromètres, ICP guides and prospecting playbooks" : "Baromètres, guides ICP et playbooks de prospection"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": language === 'en' ? "About" : "À propos",
        "description": language === 'en' ? "Our mission: help accounting firms produce their own leads, never mutualised" : "Notre mission : aider les cabinets à produire leurs propres leads, jamais mutualisés",
        "url": `https://eligibly.ai${language === 'en' ? '/en/about' : '/a-propos'}`,
        "about": language === 'en' ? "Team, mission and vision" : "Équipe, mission, vision"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 6,
        "name": language === 'en' ? "Demo" : "Démo",
        "description": language === 'en' ? "See Eligibly on real data from your area" : "Voyez Eligibly sur les données réelles de votre zone",
        "url": `https://eligibly.ai${language === 'en' ? '/en/demo' : '/demo'}`,
        "about": language === 'en' ? "Personalised demo — 10 scored leads live" : "Démo personnalisée — 10 leads scorés en direct"
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
        "name": "Produit",
        "item": "https://eligibly.ai/produit"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Solutions",
        "item": "https://eligibly.ai/solutions"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Tarifs",
        "item": "https://eligibly.ai/tarifs"
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