import { useLanguage } from "@/contexts/LanguageContext";

interface ArticleStructuredDataProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  image?: string;
  keywords?: string[];
  author?: string;
  readingTime?: string;
  alternateLanguage?: {
    lang: string;
    url: string;
  };
}

export const ArticleStructuredData = ({
  title,
  description,
  datePublished,
  dateModified,
  url,
  image = "https://eligibly.ai/assets/eligible-ai-opengraph.png",
  keywords = [],
  author = "Eligibly",
  readingTime = "8 min",
  alternateLanguage
}: ArticleStructuredDataProps) => {
  const { language } = useLanguage();
  
  const fullUrl = url.startsWith("http") ? url : `https://eligibly.ai${url}`;

  // Article Schema for Google and LLMs
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://eligibly.ai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://eligibly.ai/assets/eligibly-logo-main.png"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Eligibly",
      "logo": {
        "@type": "ImageObject",
        "url": "https://eligibly.ai/assets/eligibly-logo-main.png",
        "width": 200,
        "height": 60
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    },
    "url": fullUrl,
    "inLanguage": language === "en" ? "en-GB" : "fr-FR",
    "keywords": keywords.join(", "),
    "timeRequired": `PT${readingTime.replace(/[^0-9]/g, "")}M`,
    "isAccessibleForFree": true,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Eligibly",
      "url": "https://eligibly.ai"
    }
  };

  // WebPage Schema for better LLM understanding
  const webPageData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": fullUrl,
    "inLanguage": language === "en" ? "en-GB" : "fr-FR",
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Eligibly",
      "url": "https://eligibly.ai"
    },
    "about": {
      "@type": "Thing",
      "name": language === "en" ? "Public Tenders" : "Appels d'offres publics"
    },
    "mentions": keywords.slice(0, 5).map(keyword => ({
      "@type": "Thing",
      "name": keyword
    })),
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["article h1", "article h2", "article p"]
    }
  };

  // BreadcrumbList for navigation
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": language === "en" ? "Home" : "Accueil",
        "item": `https://eligibly.ai${language === "en" ? "/en" : ""}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": language === "en" ? "Resources" : "Ressources",
        "item": `https://eligibly.ai${language === "en" ? "/en/resources" : "/ressources"}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": fullUrl
      }
    ]
  };

  // HowTo schema for instructional content (great for LLMs)
  const howToData = keywords.some(k => 
    k.toLowerCase().includes("guide") || 
    k.toLowerCase().includes("comment") || 
    k.toLowerCase().includes("how")
  ) ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "description": description,
    "image": image,
    "totalTime": `PT${readingTime.replace(/[^0-9]/g, "")}M`,
    "tool": {
      "@type": "HowToTool",
      "name": "Charly IA - Eligibly"
    }
  } : null;

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(articleData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webPageData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>
      {howToData && (
        <script type="application/ld+json">
          {JSON.stringify(howToData)}
        </script>
      )}
      
      {/* Alternate language link for hreflang */}
      {alternateLanguage && (
        <link 
          rel="alternate" 
          hrefLang={alternateLanguage.lang} 
          href={alternateLanguage.url.startsWith("http") ? alternateLanguage.url : `https://eligibly.ai${alternateLanguage.url}`} 
        />
      )}
    </>
  );
};
