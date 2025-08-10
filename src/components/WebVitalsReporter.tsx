import { useEffect } from 'react';

export const WebVitalsReporter = () => {
  useEffect(() => {
    if (!('PerformanceObserver' in window)) return;

    const log = (name: string, value: number, extra: Record<string, any> = {}) => {
      // Local logging only; note: production build may drop console
      // eslint-disable-next-line no-console
      console.log(`[WebVitals] ${name}:`, Math.round(value * 100) / 100, extra);
    };

    let clsValue = 0;
    const poLCP = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const last = entries[entries.length - 1] as any;
      if (last) log('LCP', last.startTime);
    });

    const poCLS = new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as any) {
        if (!entry.hadRecentInput) clsValue += entry.value;
      }
      log('CLS', clsValue);
    });

    const poFID = new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as any) {
        const fid = entry.processingStart - entry.startTime;
        log('FID', fid);
      }
    });

    const poTTFB = new PerformanceObserver((list) => {
      const nav = list.getEntries()[0] as PerformanceNavigationTiming | undefined;
      if (nav) log('TTFB', nav.responseStart, { requestStart: nav.requestStart });
    });

    try {
      poLCP.observe({ type: 'largest-contentful-paint', buffered: true } as any);
      poCLS.observe({ type: 'layout-shift', buffered: true } as any);
      poFID.observe({ type: 'first-input', buffered: true } as any);
      poTTFB.observe({ type: 'navigation', buffered: true } as any);
    } catch {}

    return () => {
      poLCP.disconnect();
      poCLS.disconnect();
      poFID.disconnect();
      poTTFB.disconnect();
    };
  }, []);

  return null;
};
