import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO_CONTENT } from '@/utils/seo';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  articleMeta?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

export const SEOHead = ({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  noindex = false,
  articleMeta
}: SEOHeadProps) => {
  const location = useLocation();
  
  useEffect(() => {
    // Auto-detect page based on route if no explicit title provided
    const getPageSEO = () => {
      const path = location.pathname;
      const pathMap: Record<string, keyof typeof SEO_CONTENT> = {
        '/': 'home',
        '/produit': 'produit',
        '/solutions': 'solutions',
        '/tarifs': 'tarifs',
        '/ressources': 'ressources',
        '/a-propos': 'apropos',
        '/demo': 'demo',
        '/connexion': 'connexion',
        '/mentions-legales': 'mentionslegales',
        '/confidentialite': 'confidentialite',
        '/cgu': 'cgu'
      };
      
      const pageKey = pathMap[path];
      return pageKey ? SEO_CONTENT[pageKey] : SEO_CONTENT.home;
    };

    const pageSEO = getPageSEO();
    const finalTitle = title || pageSEO.title;
    const finalDescription = description || pageSEO.description;
    const finalCanonical = canonical || pageSEO.url;
    const defaultOg = `${window?.location?.origin || 'https://eligibly.ai'}/assets/eligible-ai-opengraph.png`;
    const finalOgImage = ogImage || defaultOg;

    // Update document title
    document.title = finalTitle;

    // Update or create meta tags
    const updateOrCreateMeta = (selector: string, attribute: string, value: string) => {
      let meta = document.querySelector(selector) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        if (selector.includes('[name=')) {
          meta.name = selector.match(/name="([^"]+)"/)?.[1] || '';
        } else if (selector.includes('[property=')) {
          meta.setAttribute('property', selector.match(/property="([^"]+)"/)?.[1] || '');
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute(attribute, value);
    };

    // Basic meta tags
    updateOrCreateMeta('meta[name="description"]', 'content', finalDescription);
    updateOrCreateMeta('meta[name="robots"]', 'content', noindex ? 'noindex, nofollow' : 'index, follow');
    
    // Open Graph meta tags
    updateOrCreateMeta('meta[property="og:title"]', 'content', finalTitle);
    updateOrCreateMeta('meta[property="og:description"]', 'content', finalDescription);
    updateOrCreateMeta('meta[property="og:url"]', 'content', finalCanonical);
    updateOrCreateMeta('meta[property="og:type"]', 'content', ogType);
    updateOrCreateMeta('meta[property="og:image"]', 'content', finalOgImage);
    updateOrCreateMeta('meta[property="og:site_name"]', 'content', 'eligibly.ai');
    updateOrCreateMeta('meta[property="og:locale"]', 'content', 'fr_FR');

    // Twitter Card meta tags
    updateOrCreateMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    updateOrCreateMeta('meta[name="twitter:title"]', 'content', finalTitle);
    updateOrCreateMeta('meta[name="twitter:description"]', 'content', finalDescription);
    updateOrCreateMeta('meta[name="twitter:image"]', 'content', finalOgImage);
    updateOrCreateMeta('meta[name="twitter:site"]', 'content', '@eligible_ai');

    // Article meta tags if provided
    if (articleMeta) {
      if (articleMeta.publishedTime) {
        updateOrCreateMeta('meta[property="article:published_time"]', 'content', articleMeta.publishedTime);
      }
      if (articleMeta.modifiedTime) {
        updateOrCreateMeta('meta[property="article:modified_time"]', 'content', articleMeta.modifiedTime);
      }
      if (articleMeta.author) {
        updateOrCreateMeta('meta[property="article:author"]', 'content', articleMeta.author);
      }
      if (articleMeta.section) {
        updateOrCreateMeta('meta[property="article:section"]', 'content', articleMeta.section);
      }
      if (articleMeta.tags) {
        articleMeta.tags.forEach(tag => {
          const meta = document.createElement('meta');
          meta.setAttribute('property', 'article:tag');
          meta.content = tag;
          document.head.appendChild(meta);
        });
      }
    }

    // Update canonical URL
    let canonical_link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical_link) {
      canonical_link = document.createElement('link');
      canonical_link.rel = 'canonical';
      document.head.appendChild(canonical_link);
    }
    canonical_link.href = finalCanonical;

    // Add hreflang for internationalization if needed
    let hreflang = document.querySelector('link[rel="alternate"][hreflang="fr"]') as HTMLLinkElement;
    if (!hreflang) {
      hreflang = document.createElement('link');
      hreflang.rel = 'alternate';
      hreflang.setAttribute('hreflang', 'fr');
      hreflang.href = finalCanonical;
      document.head.appendChild(hreflang);
    }

  }, [title, description, canonical, ogImage, ogType, noindex, articleMeta, location.pathname]);

  return null; // This component only manages head tags
};