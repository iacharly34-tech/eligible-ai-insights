import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { SecurityErrorBoundary } from './components/SecurityErrorBoundary'
import './index.css'

// Mesurer les performances en développement
const measureWebVitals = () => {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    // LCP
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry.startTime > 2500) {
        console.warn(`LCP slow: ${lastEntry.startTime}ms`);
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });
  }
};

if (process.env.NODE_ENV === 'development') {
  measureWebVitals();
}

createRoot(document.getElementById("root")!).render(
  <SecurityErrorBoundary>
    <App />
  </SecurityErrorBoundary>
);
