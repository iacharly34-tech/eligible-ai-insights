import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CriticalResourcePreloader, PerformanceMonitor } from "./components/PerformanceOptimizer";
import { WebVitalsMonitor } from "./components/WebVitalsMonitor";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SkipNavigation } from "@/components/SkipNavigation";
import { WCAGAccessibilityComponent } from "@/components/WCAGAccessibilityComponent";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { StructuredData } from "@/components/StructuredData";
import { SitelinksStructuredData } from "@/components/SitelinksStructuredData";
import { SEOHead } from "@/components/SEOHead";
import { HighContrastToggle, FontSizeAdjuster, FocusEnhancer, ScreenReaderAnnouncer, KeyboardNavigationEnhancer } from "@/components/AccessibilityEnhancer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieConsent } from "@/components/CookieConsent";
import { LazyLoadEnhancer } from "@/components/LazyLoadEnhancer";
import { Header } from "@/components/Header";
import { WebVitalsReporter } from "@/components/WebVitalsReporter";
import { FormUXEnhancer } from "@/components/FormUXEnhancer";
import { SpaServerConfig } from "@/components/SpaServerConfig";
import { ResourceOptimizer } from "@/utils/resourceOptimizer";
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
const Newsletter = lazy(() => import("./pages/Newsletter"));
const NewsletterConfig = lazy(() => import("./pages/NewsletterConfig"));

// Lazy load blog articles
const AppelosOffresPublics = lazy(() => import("./pages/AppelosOffresPublics"));
const DetectionAppelosOffres = lazy(() => import("./pages/DetectionAppelosOffres"));
const ErreursAO = lazy(() => import("./pages/ErreursAO"));
const SignauxFaibles = lazy(() => import("./pages/SignauxFaibles"));
const AnticipationAO = lazy(() => import("./pages/AnticipationAO"));
const CriteresRSE = lazy(() => import("./pages/CriteresRSE"));
const StrategieDonnees = lazy(() => import("./pages/StrategieDonnees"));
const AOPerdusAvance = lazy(() => import("./pages/AOPerdusAvance"));
const MarchesInnovation = lazy(() => import("./pages/MarchesInnovation"));
const PMEvsGrandsGroupes = lazy(() => import("./pages/PMEvsGrandsGroupes"));
const FuturIA = lazy(() => import("./pages/FuturIA"));
const AProposEligibly = lazy(() => import("./pages/AProposEligibly"));
const GoNoGo = lazy(() => import("./pages/GoNoGo"));
const FormationAO = lazy(() => import("./pages/FormationAO"));
const PrixQualite = lazy(() => import("./pages/PrixQualite"));
const DocumentsAO = lazy(() => import("./pages/DocumentsAO"));
const RetoursAO = lazy(() => import("./pages/RetoursAO"));
const VeilleStrategique = lazy(() => import("./pages/VeilleStrategique"));
const NumeriqueResponsable = lazy(() => import("./pages/NumeriqueResponsable"));

// English Blog Articles
const StrategicWatchEN = lazy(() => import("./pages/en/StrategicWatch"));
const GoNoGoDecisionEN = lazy(() => import("./pages/en/GoNoGoDecision"));
const PublicTenderTrainingEN = lazy(() => import("./pages/en/PublicTenderTraining"));
const TechnicalProposalEN = lazy(() => import("./pages/en/TechnicalProposal"));
const TenderFeedbackEN = lazy(() => import("./pages/en/TenderFeedback"));
const PriceQualityBalanceEN = lazy(() => import("./pages/en/PriceQualityBalance"));

import { LanguageSync } from "@/components/LanguageSync";

const queryClient = new QueryClient();

// Initialize resource optimizer
if (typeof window !== 'undefined') {
  const optimizer = ResourceOptimizer.getInstance();
  optimizer.preloadCriticalResources();
}

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
            <SitelinksStructuredData />
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
                <Route path="/a-propos-eligibly" element={<AProposEligibly />} />
                <Route path="/connexion" element={<Connexion />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/inscription" element={<Demo />} />
                <Route path="/mentions-legales" element={<MentionsLegales />} />
                <Route path="/confidentialite" element={<Confidentialite />} />
                <Route path="/cgu" element={<CGU />} />
                <Route path="/newsletter" element={<Newsletter />} />
                <Route path="/newsletter-config" element={<NewsletterConfig />} />
                
                
                {/* Blog Articles */}
                <Route path="/appels-d-offres-publics" element={<AppelosOffresPublics />} />
                <Route path="/detection-appels-offres" element={<DetectionAppelosOffres />} />
                <Route path="/erreurs-ao" element={<ErreursAO />} />
                <Route path="/signaux-faibles" element={<SignauxFaibles />} />
                <Route path="/anticipation-ao" element={<AnticipationAO />} />
                <Route path="/criteres-rse" element={<CriteresRSE />} />
                <Route path="/strategie-donnees" element={<StrategieDonnees />} />
                <Route path="/ao-perdus-avance" element={<AOPerdusAvance />} />
                <Route path="/marches-innovation" element={<MarchesInnovation />} />
                <Route path="/pme-vs-grands-groupes" element={<PMEvsGrandsGroupes />} />
                <Route path="/futur-ia" element={<FuturIA />} />
                <Route path="/go-no-go" element={<GoNoGo />} />
                <Route path="/formation-ao" element={<FormationAO />} />
                <Route path="/prix-qualite" element={<PrixQualite />} />
                <Route path="/documents-ao" element={<DocumentsAO />} />
                <Route path="/retours-ao" element={<RetoursAO />} />
                <Route path="/veille-strategique" element={<VeilleStrategique />} />
                <Route path="/numerique-responsable" element={<NumeriqueResponsable />} />

                {/* EN routes */}
                <Route path="/en" element={<Index />} />
                <Route path="/en/product" element={<Produit />} />
                <Route path="/en/solutions" element={<Solutions />} />
                <Route path="/en/pricing" element={<Tarifs />} />
                <Route path="/en/resources" element={<Ressources />} />
                <Route path="/en/about" element={<APropos />} />
                <Route path="/en/about-eligibly" element={<AProposEligibly />} />
                <Route path="/en/login" element={<Connexion />} />
                <Route path="/en/demo" element={<Demo />} />
                <Route path="/en/legal" element={<MentionsLegales />} />
                <Route path="/en/privacy" element={<Confidentialite />} />
                <Route path="/en/terms" element={<CGU />} />

                {/* English Blog Articles */}
                <Route path="/en/strategic-watch" element={<StrategicWatchEN />} />
                <Route path="/en/go-no-go-decision" element={<GoNoGoDecisionEN />} />
                <Route path="/en/public-tender-training" element={<PublicTenderTrainingEN />} />
                <Route path="/en/technical-proposal" element={<TechnicalProposalEN />} />
                <Route path="/en/tender-feedback" element={<TenderFeedbackEN />} />
                <Route path="/en/price-quality-balance" element={<PriceQualityBalanceEN />} />

                {/* Search redirects (for SEO) - redirect search queries to main page */}
                <Route path="/search" element={<Navigate to="/" replace />} />
                
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
