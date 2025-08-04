import { useEffect } from 'react';

interface WebVitalsMetric {
  name: string;
  value: number;
  id: string;
}

export const useWebVitals = () => {
  useEffect(() => {
    // Mesurer les Core Web Vitals
    const measureWebVitals = () => {
      // Largest Contentful Paint (LCP)
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        const lcp = lastEntry.startTime;
        
        if (lcp > 2500) {
          console.warn(`LCP slow: ${lcp}ms`);
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fidEntry = entry as any;
          const fid = fidEntry.processingStart - fidEntry.startTime;
          if (fid > 100) {
            console.warn(`FID slow: ${fid}ms`);
          }
        }
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsScore = 0;
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const clsEntry = entry as any;
          if (!clsEntry.hadRecentInput) {
            clsScore += clsEntry.value;
          }
        }
        if (clsScore > 0.1) {
          console.warn(`CLS score high: ${clsScore}`);
        }
      }).observe({ entryTypes: ['layout-shift'] });
    };

    // Seulement en développement
    if (process.env.NODE_ENV === 'development') {
      measureWebVitals();
    }
  }, []);
};