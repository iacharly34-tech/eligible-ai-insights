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
        "name": language === 'en' ? "Brand & visibility" : "Marque & visibilité",
        "description": language === 'en' ? "The credibility layer prospects check before replying: indexable website, Google profile, reviews, LinkedIn, AI assistants" : "La couche de crédibilité vérifiée par les prospects : site indexable, fiche Google, avis, LinkedIn, assistants IA",
        "url": "https://eligibly.ai/marque-et-visibilite-expert-comptable",
        "about": language === 'en' ? "Digital presence and brand building for accounting firms" : "Présence digitale et image de marque des cabinets d'expertise-comptable"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": language === 'en' ? "Lead detection & outreach" : "Détection & prospection",
        "description": language === 'en' ? "Newly registered SASU, SAS, EURL, SARL and SEL detected, scored and delivered every morning with a multichannel activation plan" : "SASU, SAS, EURL, SARL et SEL fraîchement immatriculées, détectées, scorées et livrées chaque matin avec un plan d'activation multicanal",
        "url": "https://eligibly.ai/produit",
        "about": language === 'en' ? "Lead detection and prioritisation for accounting firms" : "Détection et priorisation de leads pour cabinets d'expertise-comptable"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "Solutions",
        "description": language === 'en' ? "Approach calibrated to each accounting-firm profile" : "Approche calibrée pour chaque profil de cabinet d'expertise-comptable",
        "url": "https://eligibly.ai/solutions",
        "about": language === 'en' ? "Verticals: tech, consulting, healthcare, craftsmen, large firms" : "Verticales : tech, conseil, santé, artisans, grands cabinets"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": language === 'en' ? "Pricing" : "Tarifs", 
        "description": language === 'en' ? "Clear and transparent pricing for all business sizes" : "Tarification claire et transparente pour toutes les tailles d'entreprise",
        "url": "https://eligibly.ai/tarifs",
        "about": language === 'en' ? "Free 14-day pilot, monthly billing, no commitment" : "Pilote 14 jours gratuit, facturation mensuelle, sans engagement"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": language === 'en' ? "Resources" : "Ressources",
        "description": language === 'en' ? "Playbooks, ROI calculators and prospecting guides for accounting firms" : "Playbooks, calculateurs ROI et guides de prospection pour cabinets d'expertise-comptable",
        "url": "https://eligibly.ai/ressources",
        "about": language === 'en' ? "Baromètres, ICP guides and prospecting playbooks" : "Baromètres, guides ICP et playbooks de prospection"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 6,
        "name": language === 'en' ? "About" : "À propos",
        "description": language === 'en' ? "Our mission: help accounting firms produce their own leads, never mutualised" : "Notre mission : aider les cabinets à produire leurs propres leads, jamais mutualisés",
        "url": "https://eligibly.ai/a-propos",
        "about": language === 'en' ? "Team, mission and vision" : "Équipe, mission, vision"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 7,
        "name": language === 'en' ? "Demo" : "Démo",
        "description": language === 'en' ? "See Eligibly on real data from your area" : "Voyez Eligibly sur les données réelles de votre zone",
        "url": "https://eligibly.ai/demo",
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
        "name": "Détection & prospection",
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