import React, { Suspense, lazy } from "react";
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
import { WebVitalsReporter } from "@/components/WebVitalsReporter";
import { FormUXEnhancer } from "@/components/FormUXEnhancer";
import { SpaServerConfig } from "@/components/SpaServerConfig";
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Produit = lazy(() => import("./pages/Produit"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Tarifs = lazy(() => import("./pages/Tarifs"));
const Ressources = lazy(() => import("./pages/Ressources"));
const APropos = lazy(() => import("./pages/APropos"));
const Connexion = lazy(() => import("./pages/Connexion"));
const Demo = lazy(() => import("./pages/Demo"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const Confidentialite = lazy(() => import("./pages/Confidentialite"));
const CGU = lazy(() => import("./pages/CGU"));
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
          <WebVitalsReporter />
          <LazyLoadEnhancer />
          <FormUXEnhancer />
          <SpaServerConfig />
          <WCAGAccessibilityComponent />
          <SkipNavigation />
          <Toaster />
          <Sonner />
          <CookieConsent />
          <BrowserRouter>
            <ScrollToTop />
            <LanguageSync />
            {/* Routes */}
            <Suspense fallback={null}>
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
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ErrorBoundary>
  </QueryClientProvider>
);

export default App;
