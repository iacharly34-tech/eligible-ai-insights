import { useEffect } from 'react';

export const WebVitalsMonitor = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      if (entries.length > 0) {
        const lcp = entries[entries.length - 1];
        // LCP should be less than 2.5s for good performance
        if (lcp.startTime > 2500) {
          console.warn(`LCP needs improvement: ${Math.round(lcp.startTime)}ms`);
        }
      }
    });

    // First Input Delay (FID) / Interaction to Next Paint (INP)
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fidEntry = entry as any; // PerformanceEventTiming
        // FID should be less than 100ms
        if (fidEntry.processingStart && fidEntry.processingStart - entry.startTime > 100) {
          console.warn(`FID needs improvement: ${Math.round(fidEntry.processingStart - entry.startTime)}ms`);
        }
      }
    });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const clsEntry = entry as any; // LayoutShift entry
        if (!clsEntry.hadRecentInput) {
          clsValue += clsEntry.value;
        }
      }
      // CLS should be less than 0.1
      if (clsValue > 0.1) {
        console.warn(`CLS needs improvement: ${clsValue.toFixed(3)}`);
      }
    });

    // Time to First Byte (TTFB)
    const navigationObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const navEntry = entry as PerformanceNavigationTiming;
        const ttfb = navEntry.responseStart - navEntry.requestStart;
        // TTFB should be less than 600ms
        if (ttfb > 600) {
          console.warn(`TTFB needs improvement: ${Math.round(ttfb)}ms`);
        }
      }
    });

    try {
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      navigationObserver.observe({ entryTypes: ['navigation'] });
    } catch (error) {
      console.warn('Performance monitoring not fully supported');
    }

    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      navigationObserver.disconnect();
    };
  }, []);

  return null;
};