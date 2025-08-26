import { memo, lazy, Suspense, ComponentType } from 'react';

// HOC for dynamic imports with better error handling
export function createLazyComponent<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  fallback?: React.ReactNode
) {
  const LazyComponent = lazy(importFn);
  
  return memo((props: any) => (
    <Suspense fallback={fallback || <div className="animate-pulse bg-muted h-20 rounded" />}>
      <LazyComponent {...props} />
    </Suspense>
  ));
}

// Bundle splitting utilities
export const BundleOptimizer = {
  // Preload critical components
  preloadComponent: async (importFn: () => Promise<any>) => {
    if ('requestIdleCallback' in window) {
      return new Promise<void>((resolve) => {
        requestIdleCallback(async () => {
          try {
            await importFn();
            resolve();
          } catch (error) {
            console.warn('Failed to preload component:', error);
            resolve();
          }
        });
      });
    } else {
      try {
        await importFn();
      } catch (error) {
        console.warn('Failed to preload component:', error);
      }
    }
  },

  // Smart prefetching based on user interaction
  enableSmartPrefetch: () => {
    const prefetchMap = new Map<string, boolean>();
    
    // Prefetch on hover with debounce
    const handleMouseEnter = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a[href]') as HTMLAnchorElement;
      
      if (link && !prefetchMap.has(link.href)) {
        prefetchMap.set(link.href, true);
        
        setTimeout(() => {
          const prefetchLink = document.createElement('link');
          prefetchLink.rel = 'prefetch';
          prefetchLink.href = link.href;
          document.head.appendChild(prefetchLink);
        }, 100);
      }
    };

    document.addEventListener('mouseenter', handleMouseEnter, { passive: true, capture: true });
    
    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter, { capture: true });
    };
  },

  // Optimize CSS loading
  optimizeCSSLoading: () => {
    // Load non-critical CSS asynchronously
    const loadCSS = (href: string) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.media = 'print';
      link.onload = () => {
        link.media = 'all';
      };
      document.head.appendChild(link);
    };

    // Example: Load non-critical styles
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // Load additional styles that are not critical for first paint
        const nonCriticalStyles = [
          // Add paths to non-critical CSS files here
        ];
        
        nonCriticalStyles.forEach(loadCSS);
      });
    }
  }
};