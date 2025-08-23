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
    "description": language === 'en'
      ? "AI for public tenders and government contracts"
      : "IA pour appels d'offres publics (AO) et marchés publics",
    "url": "https://eligibly.ai",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://eligibly.ai/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
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
    </>
  );
};