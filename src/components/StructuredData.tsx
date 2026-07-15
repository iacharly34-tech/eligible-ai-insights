import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "react-router-dom";

interface StructuredDataProps {
  page?: string;
}

export const StructuredData = ({ page = "homepage" }: StructuredDataProps) => {
  const { language } = useLanguage();
  const { pathname } = useLocation();
  const isEn = pathname.startsWith("/en");
  const basePath = isEn ? "/en" : "";

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Eligibly",
    "description": language === 'en'
      ? "Detect. Score. Win. — Eligibly detects every newly registered French SASU/SAS/EURL/SARL/SEL, scores ICP fit and triggers outreach within the ≤ 90-day contact window for accounting firms."
      : "Détectez. Scorez. Signez. — Eligibly détecte chaque SASU/SAS/EURL/SARL/SEL fraîchement immatriculée, score son adéquation à votre ICP et déclenche le contact dans la fenêtre ≤ 90 jours pour les cabinets d'expertise-comptable.",
    "url": "https://eligibly.ai",
    "logo": "https://eligibly.ai/assets/eligibly-logo-main.png",
    "image": "https://eligibly.ai/assets/eligible-ai-opengraph.png",
    "foundingDate": "2023",
    "founder": {
      "@type": "Person",
      "name": "Daniel Lahyani"
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "knowsAbout": [
      "Lead generation for accounting firms",
      "SASU and SAS company registrations",
      "INPI, INSEE Sirene and BODACC data",
      "AI-powered B2B lead scoring",
      "GDPR-compliant prospect intelligence"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR",
      "addressLocality": "Paris"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@eligibly.ai"
    },
    "sameAs": [
      "https://www.linkedin.com/company/eligibly"
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Eligibly",
    "alternateName": "Eligibly.ai",
    "description": language === 'en'
      ? "Detect. Score. Win. Future clients in 90 days — daily detection, ICP scoring and outreach plan for accounting firms."
      : "Détectez. Scorez. Signez. Vos futurs clients en moins de 90 jours — détection quotidienne, scoring ICP et plan d'action pour les cabinets d'expertise-comptable.",
    "url": "https://eligibly.ai",
    "sameAs": [
      "https://www.linkedin.com/company/eligibly",
      "https://twitter.com/eligibly_ai"
    ],
    "mainEntity": {
      "@type": "ItemList",
      "name": "Navigation principale Eligibly",
      "description": "Sections principales du site Eligibly — moteur d'alertes nouveaux clients pour cabinets d'expertise comptable",
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": language === 'en' ? "Product" : "Produit",
          "description": language === 'en' ? "Lead detection engine for accounting firms" : "moteur d'alertes nouveaux clients pour cabinets d'expertise comptable",
          "url": `https://eligibly.ai${language === 'en' ? '/en/product' : '/produit'}`
        },
        {
          "@type": "SiteNavigationElement", 
          "position": 2,
          "name": language === 'en' ? "Demo" : "Démo",
          "description": language === 'en' ? "Request a sample of 3 qualified leads" : "Demander un échantillon de 3 leads qualifiés",
          "url": `https://eligibly.ai${language === 'en' ? '/en/demo' : '/demo'}`
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": language === 'en' ? "Solutions" : "Solutions", 
          "description": language === 'en' ? "Solutions for accounting firms" : "Solutions pour cabinets d'expertise comptable",
          "url": `https://eligibly.ai${language === 'en' ? '/en/solutions' : '/solutions'}`
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": language === 'en' ? "Pricing" : "Tarifs",
          "description": language === 'en' ? "Pro plan from €10 per qualified lead, custom quote" : "Plan Pro à partir de 10 € le lead, devis personnalisé", 
          "url": `https://eligibly.ai${language === 'en' ? '/en/pricing' : '/tarifs'}`
        },
        {
          "@type": "SiteNavigationElement",
          "position": 5,
          "name": language === 'en' ? "Resources" : "Ressources",
          "description": language === 'en' ? "Guides and resources for accounting firms" : "Guides et ressources pour cabinets d'expertise comptable",
          "url": `https://eligibly.ai${language === 'en' ? '/en/resources' : '/ressources'}`
        }
      ]
    }
  };

  const softwareApplicationData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Eligibly",
    "description": language === 'en'
      ? "Detect, score and win. Eligibly delivers a daily digest of newly registered French SASU/SAS/EURL/SARL/SEL to accounting firms, with ICP scoring and an outreach plan within the 90-day contact window."
      : "Détectez, scorez, signez. Eligibly livre chaque matin aux cabinets d'expertise-comptable un digest des SASU/SAS/EURL/SARL/SEL fraîchement immatriculées, avec scoring ICP et plan d'action dans la fenêtre de 90 jours.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "url": "https://eligibly.ai",
    "image": "https://eligibly.ai/assets/eligible-ai-hero-optimized.webp",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "description": language === 'en' ? "Free trial available" : "Essai gratuit disponible"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "250",
      "bestRating": "5"
    },
    "creator": {
      "@type": "Organization",
      "name": "Eligibly"
    }
  };

  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Eligibly AI",
    "description": language === 'en'
      ? "Lead detection engine for accounting firms — qualified leads, explained scoring, action plans."
      : "moteur d'alertes nouveaux clients pour cabinets d'expertise comptable — leads qualifiés, score expliqué, plan d'action.",
    "image": "https://eligibly.ai/assets/eligible-ai-hero-optimized.webp",
    "brand": {
      "@type": "Brand",
      "name": "Eligibly"
    },
    "category": "AI Software",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "EUR",
      "priceValidUntil": "2025-12-31",
      "seller": {
        "@type": "Organization",
        "name": "Eligibly"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "250",
      "bestRating": "5"
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": language === 'en' ? "Home" : "Accueil",
        "item": `https://eligibly.ai${basePath || "/"}`
      }
    ]
  };

  // Add page-specific breadcrumb (sitelinks signal for Google)
  const breadcrumbMap: Record<string, { fr: { name: string; path: string }; en: { name: string; path: string } }> = {
    product:   { fr: { name: "Fonctionnalités", path: "/produit" },     en: { name: "Product",     path: "/en/product" } },
    solutions: { fr: { name: "Cas d'usage",     path: "/solutions" },   en: { name: "Solutions",   path: "/en/solutions" } },
    pricing:   { fr: { name: "Tarifs",          path: "/tarifs" },      en: { name: "Pricing",     path: "/en/pricing" } },
    resources: { fr: { name: "Ressources",      path: "/ressources" },  en: { name: "Resources",   path: "/en/resources" } },
    about:     { fr: { name: "À propos",        path: "/a-propos" },    en: { name: "About",       path: "/en/about" } },
    demo:      { fr: { name: "Démo",            path: "/demo" },        en: { name: "Demo",        path: "/en/demo" } },
  };
  const crumb = breadcrumbMap[page];
  if (crumb) {
    const node = language === 'en' ? crumb.en : crumb.fr;
    breadcrumbData.itemListElement.push({
      "@type": "ListItem",
      "position": 2,
      "name": node.name,
      "item": `https://eligibly.ai${node.path}`,
    });
  }

  // Article structured data
  const articleData = page === "article" ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Comment l'IA transforme la prospection des cabinets d'expertise comptable en 2026",
    "description": "Détection IA des SASU & SAS fraîchement immatriculées, scoring expliqué et plan d'action : la nouvelle prospection des cabinets d'expertise comptable.",
    "image": "https://eligibly.ai/assets/eligible-ai-hero-optimized.webp",
    "author": {
      "@type": "Organization",
      "name": "Eligibly"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Eligibly",
      "logo": {
        "@type": "ImageObject",
        "url": "https://eligibly.ai/assets/eligibly-logo-main.png"
      }
    },
    "datePublished": "2026-01-15",
    "dateModified": "2026-06-28",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://eligibly.ai/ressources"
    },
    "keywords": "eligibly, expert-comptable, prospection, SASU, SAS, détection de leads, IA"
  } : null;

  // LocalBusiness pour SEO local
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Eligibly",
    "image": "https://eligibly.ai/assets/eligible-ai-opengraph.png",
    "email": "contact@eligibly.ai",
    "url": "https://eligibly.ai",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "€€",
    "serviceArea": {
      "@type": "Place",
      "name": "France"
    }
  };

  // FAQ Schema pour améliorer les featured snippets
  const faqData = page === "homepage" ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qu'est-ce qu'Eligibly ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eligibly est un moteur de détection de leads pour cabinets d'expertise comptable français. Chaque jour, il consolide les SASU, SAS, EURL, SARL et SEL fraîchement immatriculées, applique des filtres amont qualité (CAC mandaté, procédure collective, holding, serial entrepreneur) et présente au cabinet les leads potentiellement adressables, avec un score expliqué et un plan d'action."
        }
      },
      {
        "@type": "Question",
        "name": "En quoi Eligibly diffère d'un annuaire d'entreprises ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un annuaire généraliste donne la donnée brute. Eligibly est verticalisé cabinet d'expertise comptable : filtres amont automatiques, score expliqué par lead, plan d'action concret, et apprentissage progressif sur le feedback du cabinet."
        }
      },
      {
        "@type": "Question",
        "name": "Combien coûte Eligibly ?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "À partir de 10 € par lead qualifié. Devis personnalisé selon le volume mensuel et la taille du cabinet, communiqué après un échange de cadrage de 20 minutes. Démarrage sans carte bancaire, résiliable avec préavis de 30 jours."
        }
      }
    ]
  } : null;

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(organizationData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(softwareApplicationData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(productData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>
      {articleData && (
        <script type="application/ld+json">
          {JSON.stringify(articleData)}
        </script>
      )}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessData)}
      </script>
      {faqData && (
        <script type="application/ld+json">
          {JSON.stringify(faqData)}
        </script>
      )}
    </>
  );
};