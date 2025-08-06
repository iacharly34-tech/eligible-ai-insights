import { useLanguage } from "@/contexts/LanguageContext";

interface StructuredDataProps {
  page: 'home' | 'product' | 'solutions' | 'pricing' | 'about' | 'demo';
}

export const StructuredData = ({ page }: StructuredDataProps) => {
  const { t } = useLanguage();

  const generateStructuredData = () => {
    const baseOrganization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Eligible.ai",
      "url": "https://eligible.ai",
      "logo": "https://eligible.ai/assets/eligibly-logo-main.png",
      "description": "Plateforme IA pour l'analyse et la veille des marchés publics français et européens",
      "foundingDate": "2024",
      "sameAs": [
        "https://linkedin.com/company/eligible-ai",
        "https://twitter.com/eligible_ai"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+33-1-23-45-67-89",
        "contactType": "customer service",
        "availableLanguage": ["French", "English"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "FR",
        "addressLocality": "Paris"
      }
    };

    switch (page) {
      case 'home':
        return [
          baseOrganization,
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Eligible.ai",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Intelligence artificielle pour l'analyse et le scoring des appels d'offres publics",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR",
              "name": "Essai gratuit 7 jours",
              "description": "Accès complet sans engagement"
            },
            "featureList": [
              "Analyse IA des appels d'offres",
              "Scoring automatique des opportunités",
              "Veille commerciale automatisée",
              "Intégrations CRM",
              "Alertes personnalisées"
            ],
            "screenshot": "https://eligible.ai/assets/hero-dashboard.jpg",
            "softwareVersion": "2.0",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127",
              "bestRating": "5"
            }
          }
        ];

      case 'product':
        return [
          baseOrganization,
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Eligible.ai Platform",
            "description": "Plateforme complète d'intelligence artificielle pour la veille et l'analyse des marchés publics",
            "brand": {
              "@type": "Brand",
              "name": "Eligible.ai"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://eligible.ai/tarifs",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock"
            }
          }
        ];

      case 'pricing':
        return [
          baseOrganization,
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Eligible.ai Services",
            "description": "Services d'intelligence artificielle pour les marchés publics",
            "provider": baseOrganization,
            "serviceType": "AI Software",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Plans Eligible.ai",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Plan Starter"
                  },
                  "price": "99",
                  "priceCurrency": "EUR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Plan Business"
                  },
                  "price": "299",
                  "priceCurrency": "EUR"
                }
              ]
            }
          }
        ];

      case 'about':
        return [
          {
            ...baseOrganization,
            "founder": {
              "@type": "Person",
              "name": "Équipe Eligible.ai"
            },
            "numberOfEmployees": "15-25",
            "industry": "Artificial Intelligence"
          }
        ];

      case 'demo':
        return [
          baseOrganization,
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Démonstration Eligible.ai",
            "description": "Démonstration interactive de la plateforme IA Eligible.ai",
            "applicationCategory": "DemoApplication",
            "operatingSystem": "Web Browser"
          }
        ];

      default:
        return [baseOrganization];
    }
  };

  const structuredDataArray = generateStructuredData();

  return (
    <>
      {structuredDataArray.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data, null, 2)
          }}
        />
      ))}
    </>
  );
};