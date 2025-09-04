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
      ? "AI platform for public tender analysis and government contract optimization"
      : "Plateforme IA pour l'analyse des appels d'offres publics (AO) et l'optimisation des marchés publics",
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
      ? "AI platform for public tenders analysis and optimization"
      : "Plateforme IA pour l'analyse et l'optimisation des appels d'offres publics",
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
      "description": "Sections principales du site Eligibly pour les appels d'offres publics",
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": language === 'en' ? "Product" : "Produit",
          "description": language === 'en' ? "AI analysis platform for public tenders" : "Plateforme d'analyse IA pour appels d'offres publics",
          "url": `https://eligibly.ai${language === 'en' ? '/en/product' : '/produit'}`
        },
        {
          "@type": "SiteNavigationElement", 
          "position": 2,
          "name": language === 'en' ? "Demo" : "Démo",
          "description": language === 'en' ? "Test our AI on your public tenders" : "Testez notre IA sur vos appels d'offres",
          "url": `https://eligibly.ai${language === 'en' ? '/en/demo' : '/demo'}`
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": language === 'en' ? "Solutions" : "Solutions", 
          "description": language === 'en' ? "Complete solutions for public procurement" : "Solutions complètes pour la commande publique",
          "url": `https://eligibly.ai${language === 'en' ? '/en/solutions' : '/solutions'}`
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": language === 'en' ? "Pricing" : "Tarifs",
          "description": language === 'en' ? "Transparent pricing for all businesses" : "Tarifs transparents pour toutes les entreprises", 
          "url": `https://eligibly.ai${language === 'en' ? '/en/pricing' : '/tarifs'}`
        },
        {
          "@type": "SiteNavigationElement",
          "position": 5,
          "name": language === 'en' ? "Resources" : "Ressources",
          "description": language === 'en' ? "Guides and expertise for public tenders" : "Guides et expertise pour les appels d'offres publics",
          "url": `https://eligibly.ai${language === 'en' ? '/en/resources' : '/ressources'}`
        },
        {
          "@type": "SiteNavigationElement",
          "position": 6,
          "name": language === 'en' ? "Public Tender Analysis" : "Appels d'Offres Publics",
          "description": language === 'en' ? "Complete guide to public tender analysis" : "Guide complet d'analyse des appels d'offres publics",
          "url": "https://eligibly.ai/appels-d-offres-publics"
        }
      ]
    }
  };

  const softwareApplicationData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Eligibly",
    "description": language === 'en'
      ? "AI platform that analyzes public tenders and predicts success probability for government contracts"
      : "Plateforme IA qui analyse les appels d'offres publics (AO) et prédit les chances de succès sur les marchés publics",
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
      ? "AI solution for public tender analysis and government contract optimization"
      : "Solution IA pour l'analyse des appels d'offres publics et l'optimisation des marchés publics",
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
        "name": "Qu'est-ce qu'Eligibly.ai ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eligibly.ai est une plateforme d'intelligence artificielle spécialisée dans l'analyse des appels d'offres publics. Elle aide les entreprises à identifier les meilleures opportunités et à optimiser leurs chances de succès."
        }
      },
      {
        "@type": "Question", 
        "name": "Comment l'IA d'Eligibly analyse-t-elle les appels d'offres ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Notre IA analyse plus de 600 sources d'appels d'offres publics, évalue la compatibilité avec votre profil d'entreprise et calcule un score de probabilité de succès pour chaque opportunité."
        }
      },
      {
        "@type": "Question",
        "name": "Eligibly est-il gratuit ?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Eligibly propose un essai gratuit de 14 jours. Ensuite, plusieurs plans sont disponibles selon vos besoins d'analyse d'appels d'offres."
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