import { lazy, Suspense, useEffect, useState } from 'react';
import { useEcoOptimizedEffect } from '@/hooks/useEcoOptimizedEffect';

// Lazy-loaded components for better performance
export const LazyFeatures = lazy(() => import('@/components/Features').then(module => ({ default: module.Features })));
export const LazyHero = lazy(() => import('@/components/Hero').then(module => ({ default: module.Hero })));

// Critical resource preloader
export const CriticalResourcePreloader = () => {
  useEcoOptimizedEffect(() => {
    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2';
    fontLink.as = 'font';
    fontLink.type = 'font/woff2';
    fontLink.crossOrigin = 'anonymous';
    document.head.appendChild(fontLink);

    // Preconnect to external domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://api.eligible.ai'
    ];

    preconnectDomains.forEach(domain => {
      if (!document.querySelector(`link[rel="preconnect"][href="${domain}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        if (domain.includes('fonts.gstatic.com')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      }
    });

    // DNS prefetch for external resources
    const dnsPrefetchDomains = [
      '//eligible.ai',
      '//cdn.eligible.ai'
    ];

    dnsPrefetchDomains.forEach(domain => {
      if (!document.querySelector(`link[rel="dns-prefetch"][href="${domain}"]`)) {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      }
    });

    return () => {
      // Cleanup if needed
    };
  }, [], true);

  return null;
};

// Image optimization component
export const OptimizedImageWithSources = ({ 
  src, 
  alt, 
  className, 
  sizes = "(min-width: 768px) 50vw, 100vw",
  ...props 
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  [key: string]: any;
}) => {
  return (
    <picture>
      <source 
        srcSet={`${src}?format=webp&quality=85`} 
        type="image/webp" 
        sizes={sizes}
      />
      <source 
        srcSet={`${src}?format=avif&quality=80`} 
        type="image/avif" 
        sizes={sizes}
      />
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
        sizes={sizes}
        {...props}
      />
    </picture>
  );
};

// Performance monitoring
export const PerformanceMonitor = () => {
  useEcoOptimizedEffect(() => {
    if ('PerformanceObserver' in window) {
      // Monitor LCP
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry.startTime > 2500) {
          console.warn('LCP is too slow:', lastEntry.startTime);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Monitor CLS
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      for (const entry of list.getEntries()) {
        const clsEntry = entry as any; // LayoutShift entry
        if (!clsEntry.hadRecentInput) {
          clsValue += clsEntry.value;
        }
      }
      if (clsValue > 0.1) {
        console.warn('CLS is too high:', clsValue);
      }
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        lcpObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, [], true);

  return null;
};