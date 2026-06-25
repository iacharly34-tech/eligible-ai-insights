import { useLanguage } from "@/contexts/LanguageContext";

interface StructuredDataProps {
  page?: string;
}

export const StructuredData = ({ page = "homepage" }: StructuredDataProps) => {
  const { language } = useLanguage();

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Eligibly",
    "description": language === 'en' 
      ? "Lead detection engine for French accounting firms. Daily qualified leads of newly registered SASU and SAS."
      : "moteur de détection de leads pour cabinets d'expertise comptable français. Leads quotidiens de SASU et SAS fraîchement immatriculées.",
    "url": "https://eligibly.ai",
    "logo": "https://eligibly.ai/assets/eligibly-logo-main.png",
    "image": "https://eligibly.ai/assets/eligible-ai-opengraph.png",
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR"
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
      ? "Lead detection engine for accounting firms — qualified leads of newly registered French companies."
      : "moteur de détection de leads pour cabinets d'expertise comptable — leads qualifiés de sociétés fraîchement immatriculées en France.",
    "url": "https://eligibly.ai",
    "sameAs": [
      "https://www.linkedin.com/company/eligibly",
      "https://twitter.com/eligibly_ai"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://eligibly.ai/recherche?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
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
          "description": language === 'en' ? "Try Eligibly on real leads" : "Testez Eligibly sur de vrais leads",
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
          "description": language === 'en' ? "Single Pro plan, 14-day free trial" : "Forfait Pro unique, 14 jours d'essai gratuits", 
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
      ? "Vertical prospection CRM that delivers daily qualified leads of newly registered French companies to accounting firms, with explained scoring and action plans."
      : "CRM de prospection vertical qui livre chaque jour aux cabinets d'expertise comptable des leads qualifiés de sociétés fraîchement immatriculées, avec score expliqué et plan d'action.",
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
        "item": "https://eligibly.ai/"
      }
    ]
  };

  // Add page-specific breadcrumbs
  if (page === "product") {
    breadcrumbData.itemListElement.push({
      "@type": "ListItem",
      "position": 2,
      "name": language === 'en' ? "Product" : "Produit",
      "item": `https://eligibly.ai/${language === 'en' ? 'en/product' : 'produit'}`
    });
  } else if (page === "demo") {
    breadcrumbData.itemListElement.push({
      "@type": "ListItem",
      "position": 2,
      "name": language === 'en' ? "Demo" : "Démo",
      "item": `https://eligibly.ai/${language === 'en' ? 'en/demo' : 'demo'}`
    });
  }

  // Article structured data
  const articleData = page === "article" ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Comment l'IA transforme les appels d'offres publics (AO) en 2025",
    "description": "Découvrez comment Eligibly révolutionne l'analyse des appels d'offres publics et marchés publics grâce à l'IA",
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
    "datePublished": "2025-08-20",
    "dateModified": "2025-08-20",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://eligibly.ai/appels-d-offres-publics"
    },
    "keywords": "eligibly, appels d'offres publics, AO, marchés publics, IA"
  } : null;

  // LocalBusiness pour SEO local
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Eligibly",
    "image": "https://eligibly.ai/assets/eligible-ai-opengraph.png",
    "telephone": "+33-1-XX-XX-XX-XX",
    "email": "contact@eligibly.ai",
    "url": "https://eligibly.ai",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tour Eiffel",
      "addressLocality": "Paris", 
      "addressRegion": "Île-de-France",
      "postalCode": "75007",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.8566",
      "longitude": "2.3522"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "€€",
    "servesCuisine": "Technology",
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
          "text": "Eligibly est un moteur de détection de leads pour cabinets d'expertise comptable français. Chaque jour, il consolide les SASU et SAS fraîchement immatriculées, applique des filtres amont qualité (CAC mandaté, procédure collective, holding, serial entrepreneur) et présente au cabinet les leads potentiellement adressables, avec un score expliqué et un plan d'action."
        }
      },
      {
        "@type": "Question", 
        "name": "En quoi Eligibly est différent de Pappers ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pappers est un annuaire généraliste qui donne la donnée brute. Eligibly est verticalisé cabinet EC : filtres amont automatiques, score expliqué par lead, plan d'action concret, et apprentissage progressif sur le feedback du cabinet."
        }
      },
      {
        "@type": "Question",
        "name": "Combien coûte Eligibly ?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Un seul forfait Pro à 290 € HT par mois, avec 14 jours d'essai gratuits sans carte bancaire et résiliation à tout moment avec préavis de 30 jours."
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