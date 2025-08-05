import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { SecurityErrorBoundary } from './components/SecurityErrorBoundary'
import './index.css'

// Mesurer les performances de façon optimisée
const measureWebVitals = () => {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    try {
      // LCP - optimisé sans console.log en production
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (process.env.NODE_ENV === 'development' && lastEntry.startTime > 2500) {
          // Performance tracking sans console en production
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (error) {
      // Gestion d'erreur silencieuse pour l'écoconception
    }
  }
};

measureWebVitals();

createRoot(document.getElementById("root")!).render(
  <SecurityErrorBoundary>
    <App />
  </SecurityErrorBoundary>
);
