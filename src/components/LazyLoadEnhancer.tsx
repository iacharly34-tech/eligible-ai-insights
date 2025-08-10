import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Globally optimize images: lazy-load non-critical, prioritize hero, add alt fallbacks
export const LazyLoadEnhancer = () => {
  const { t } = useLanguage();

  useEffect(() => {
    // Prioritize hero/critical images
    const criticalImgs = document.querySelectorAll<HTMLImageElement>('section#hero img, .hero img, img[data-priority="high"]');
    criticalImgs.forEach((img) => {
      img.loading = 'eager';
      img.decoding = 'async';
      img.setAttribute('fetchpriority', 'high');
      if (!img.alt || img.alt.trim() === '') {
        img.alt = t('accessibility.images.hero') || 'Hero image';
      }
    });

    // Lazy load all other images by default
    const allImgs = Array.from(document.querySelectorAll<HTMLImageElement>('img'));
    allImgs.forEach((img) => {
      if (!criticalImgs.length || !Array.from(criticalImgs).includes(img)) {
        if (!img.hasAttribute('loading')) img.loading = 'lazy';
        img.decoding = 'async';
        if (!img.getAttribute('sizes')) img.setAttribute('sizes', '100vw');
        if (!img.alt || img.alt.trim() === '') {
          img.alt = t('accessibility.images.feature') || 'Image';
        }
      }
      // Ensure width/height to reduce CLS if provided via attributes
      if (!img.width && img.naturalWidth) {
        img.width = img.naturalWidth;
      }
      if (!img.height && img.naturalHeight) {
        img.height = img.naturalHeight;
      }
    });

    // Defer iframes by lazy loading where safe
    const iframes = document.querySelectorAll<HTMLIFrameElement>('iframe:not([loading])');
    iframes.forEach((frame) => frame.setAttribute('loading', 'lazy'));
  }, [t]);

  return null;
};
