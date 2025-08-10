import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CriticalResourcePreloader, PerformanceMonitor } from "./components/PerformanceOptimizer";
import { WebVitalsMonitor } from "./components/WebVitalsMonitor";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SkipNavigation } from "@/components/SkipNavigation";
import { WCAGAccessibilityComponent } from "@/components/WCAGAccessibilityComponent";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { StructuredData } from "@/components/StructuredData";
import { SEOHead } from "@/components/SEOHead";
import { HighContrastToggle, FontSizeAdjuster, FocusEnhancer, ScreenReaderAnnouncer, KeyboardNavigationEnhancer } from "@/components/AccessibilityEnhancer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieConsent } from "@/components/CookieConsent";
import { LazyLoadEnhancer } from "@/components/LazyLoadEnhancer";
import { Header } from "@/components/Header";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Produit from "./pages/Produit";
import Solutions from "./pages/Solutions";
import Tarifs from "./pages/Tarifs";
import Ressources from "./pages/Ressources";
import APropos from "./pages/APropos";
import Connexion from "./pages/Connexion";
import Demo from "./pages/Demo";
import MentionsLegales from "./pages/MentionsLegales";
import Confidentialite from "./pages/Confidentialite";
import CGU from "./pages/CGU";
import { LanguageSync } from "@/components/LanguageSync";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ErrorBoundary>
      <LanguageProvider>
        <TooltipProvider>
          <CriticalResourcePreloader />
          <PerformanceMonitor />
          <WebVitalsMonitor />
          <WCAGAccessibilityComponent />
          <SkipNavigation />
          <Toaster />
          <Sonner />
          <CookieConsent />
          <BrowserRouter>
            <ScrollToTop />
            <LanguageSync />
            {/* Routes */}
            <Routes>
              {/* FR routes */}
              <Route path="/" element={<Index />} />
              <Route path="/produit" element={<Produit />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/tarifs" element={<Tarifs />} />
              <Route path="/ressources" element={<Ressources />} />
              <Route path="/a-propos" element={<APropos />} />
              <Route path="/connexion" element={<Connexion />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/inscription" element={<Demo />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
              <Route path="/confidentialite" element={<Confidentialite />} />
              <Route path="/cgu" element={<CGU />} />

              {/* EN routes */}
              <Route path="/en" element={<Index />} />
              <Route path="/en/product" element={<Produit />} />
              <Route path="/en/solutions" element={<Solutions />} />
              <Route path="/en/pricing" element={<Tarifs />} />
              <Route path="/en/resources" element={<Ressources />} />
              <Route path="/en/about" element={<APropos />} />
              <Route path="/en/login" element={<Connexion />} />
              <Route path="/en/demo" element={<Demo />} />
              <Route path="/en/legal" element={<MentionsLegales />} />
              <Route path="/en/privacy" element={<Confidentialite />} />
              <Route path="/en/terms" element={<CGU />} />

              {/* CATCH-ALL */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ErrorBoundary>
  </QueryClientProvider>
);

export default App;
