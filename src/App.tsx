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
const WaitlistSuccess = lazy(() => import("./pages/WaitlistSuccess"));
const Unsubscribe = lazy(() => import("./pages/Unsubscribe"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const Confidentialite = lazy(() => import("./pages/Confidentialite"));
const CGU = lazy(() => import("./pages/CGU"));
const Newsletter = lazy(() => import("./pages/Newsletter"));
const NewsletterConfig = lazy(() => import("./pages/NewsletterConfig"));
const BlogCreations2025 = lazy(() => import("./pages/blog/CreationsEntreprises2025"));
const BlogCAC = lazy(() => import("./pages/blog/CoutAcquisitionClientCabinet"));
const BlogICP = lazy(() => import("./pages/blog/IcpCabinetExpertiseComptable"));
const BlogBarometre = lazy(() => import("./pages/blog/BarometreAcquisitionCabinet"));
const BlogObservatoire = lazy(() => import("./pages/blog/ObservatoireSasuSas"));
const BlogPlaybook = lazy(() => import("./pages/blog/PlaybookProspectionCabinet"));
const BlogLexique = lazy(() => import("./pages/blog/LexiqueMarketingExpertComptable"));
const BlogFichierVsAction = lazy(() => import("./pages/blog/FichierSiretVsPlanAction"));
const BlogModerniserIA = lazy(() => import("./pages/blog/ModerniserCabinetIA"));
const SimulateurIACabinet = lazy(() => import("./pages/SimulateurIACabinet"));
const LeadsExpertsComptables = lazy(() => import("./pages/cabinet/LeadsExpertsComptables"));
const ProspectionCabinetComptable = lazy(() => import("./pages/cabinet/ProspectionCabinetComptable"));
const CanauxActivation = lazy(() => import("./pages/cabinet/CanauxActivation"));
const PourquoiCeLeadEstPrioritaire = lazy(() => import("./pages/cabinet/PourquoiCeLeadEstPrioritaire"));
const AlternativesPrimolead = lazy(() => import("./pages/cabinet/AlternativesPrimolead"));
const GlossaireCabinet = lazy(() => import("./pages/cabinet/Glossaire"));
const CasUsageIndex = lazy(() => import("./pages/cabinet/CasUsageIndex"));
const CasUsage8Collabs = lazy(() => import("./pages/cabinet/CasUsage8Collaborateurs"));
const CasUsageRestauration = lazy(() => import("./pages/cabinet/CasUsageRestauration"));
const CasUsageFullRemote = lazy(() => import("./pages/cabinet/CasUsageFullRemote"));
const SalesAssistant = lazy(() => import("./pages/SalesAssistant"));
const VerticaleSasuTech = lazy(() => import("./pages/verticales/VerticaleSasuTech"));
const VerticaleEcommerce = lazy(() => import("./pages/verticales/VerticaleEcommerce"));
const VerticaleRestaurationChr = lazy(() => import("./pages/verticales/VerticaleRestaurationChr"));
const VerticaleBtpArtisans = lazy(() => import("./pages/verticales/VerticaleBtpArtisans"));
const VerticaleProfessionsLiberalesSante = lazy(() => import("./pages/verticales/VerticaleProfessionsLiberalesSante"));
const VerticaleHoldingsGroupes = lazy(() => import("./pages/verticales/VerticaleHoldingsGroupes"));

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
                <Route path="/connexion" element={<Connexion />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/inscription" element={<Demo />} />
                <Route path="/waitlist/success" element={<WaitlistSuccess />} />
                <Route path="/mentions-legales" element={<MentionsLegales />} />
                <Route path="/confidentialite" element={<Confidentialite />} />
                <Route path="/cgu" element={<CGU />} />
                <Route path="/newsletter" element={<Newsletter />} />
                <Route path="/newsletter-config" element={<NewsletterConfig />} />
                <Route path="/unsubscribe" element={<Unsubscribe />} />

                {/* Cabinet EC — landing pages SEO */}
                <Route path="/leads-experts-comptables" element={<LeadsExpertsComptables />} />
                <Route path="/prospection-cabinet-comptable" element={<ProspectionCabinetComptable />} />
                <Route path="/canaux-activation" element={<CanauxActivation />} />
                <Route path="/pourquoi-ce-lead-est-prioritaire" element={<PourquoiCeLeadEstPrioritaire />} />
                <Route path="/alternatives-primolead-experts-comptables" element={<AlternativesPrimolead />} />
                <Route path="/cabinet/glossaire" element={<GlossaireCabinet />} />
                <Route path="/cabinet/cas-usage" element={<CasUsageIndex />} />
                <Route path="/cabinet/cas-usage/cabinet-8-collaborateurs-departement" element={<CasUsage8Collabs />} />
                <Route path="/cabinet/cas-usage/cabinet-specialise-restauration" element={<CasUsageRestauration />} />
                <Route path="/cabinet/cas-usage/cabinet-full-remote-startups-ecommerce" element={<CasUsageFullRemote />} />

                {/* Blog */}
                <Route path="/blog/creations-entreprises-france-2025" element={<BlogCreations2025 />} />
                <Route path="/blog/cout-acquisition-client-cabinet-comptable" element={<BlogCAC />} />
                <Route path="/blog/icp-cabinet-expertise-comptable" element={<BlogICP />} />
                <Route path="/blog/barometre-acquisition-cabinet-ec-2026" element={<BlogBarometre />} />
                <Route path="/blog/observatoire-sasu-sas-juin-2026" element={<BlogObservatoire />} />
                <Route path="/blog/playbook-prospection-cabinet-ec-2026" element={<BlogPlaybook />} />
                <Route path="/blog/lexique-marketing-expert-comptable" element={<BlogLexique />} />
                <Route path="/blog/fichier-siret-vs-plan-action-comptable" element={<BlogFichierVsAction />} />
                <Route path="/blog/moderniser-cabinet-expertise-comptable-ia" element={<BlogModerniserIA />} />
                <Route path="/simulateur-roi-ia-cabinet" element={<SimulateurIACabinet />} />

                {/* Sales Assistant + Verticales sectorielles */}
                <Route path="/sales-assistant" element={<SalesAssistant />} />
                <Route path="/verticales/sasu-tech" element={<VerticaleSasuTech />} />
                <Route path="/verticales/e-commerce" element={<VerticaleEcommerce />} />
                <Route path="/verticales/restauration-chr" element={<VerticaleRestaurationChr />} />
                <Route path="/verticales/btp-artisans" element={<VerticaleBtpArtisans />} />
                <Route path="/verticales/professions-liberales-sante" element={<VerticaleProfessionsLiberalesSante />} />
                <Route path="/verticales/holdings-groupes" element={<VerticaleHoldingsGroupes />} />

                {/* EN routes */}
                <Route path="/en" element={<Index />} />
                <Route path="/en/product" element={<Produit />} />
                <Route path="/en/solutions" element={<Solutions />} />
                <Route path="/en/pricing" element={<Tarifs />} />
                <Route path="/en/resources" element={<Ressources />} />
                <Route path="/en/about" element={<APropos />} />
                <Route path="/en/login" element={<Connexion />} />
                <Route path="/en/demo" element={<Demo />} />
                <Route path="/en/waitlist/success" element={<WaitlistSuccess />} />
                <Route path="/en/legal" element={<MentionsLegales />} />
                <Route path="/en/privacy" element={<Confidentialite />} />
                <Route path="/en/terms" element={<CGU />} />

                {/* Search redirects (for SEO) - redirect search queries to main page */}
                <Route path="/search" element={<Navigate to="/" replace />} />

                {/* Legacy AO routes - redirect to home post-pivot */}
                <Route path="/a-propos-eligibly" element={<Navigate to="/a-propos" replace />} />
                <Route path="/produit/*" element={<Navigate to="/produit" replace />} />
                <Route path="/appels-d-offres-publics" element={<Navigate to="/" replace />} />
                <Route path="/detection-appels-offres" element={<Navigate to="/" replace />} />
                <Route path="/erreurs-ao" element={<Navigate to="/" replace />} />
                <Route path="/signaux-faibles" element={<Navigate to="/" replace />} />
                <Route path="/anticipation-ao" element={<Navigate to="/" replace />} />
                <Route path="/criteres-rse" element={<Navigate to="/" replace />} />
                <Route path="/strategie-donnees" element={<Navigate to="/" replace />} />
                <Route path="/ao-perdus-avance" element={<Navigate to="/" replace />} />
                <Route path="/marches-innovation" element={<Navigate to="/" replace />} />
                <Route path="/pme-vs-grands-groupes" element={<Navigate to="/" replace />} />
                <Route path="/futur-ia" element={<Navigate to="/" replace />} />
                <Route path="/go-no-go" element={<Navigate to="/" replace />} />
                <Route path="/formation-ao" element={<Navigate to="/" replace />} />
                <Route path="/prix-qualite" element={<Navigate to="/" replace />} />
                <Route path="/documents-ao" element={<Navigate to="/" replace />} />
                <Route path="/retours-ao" element={<Navigate to="/" replace />} />
                <Route path="/veille-strategique" element={<Navigate to="/" replace />} />
                <Route path="/numerique-responsable" element={<Navigate to="/" replace />} />
                <Route path="/eligibly-vs-doubletrade" element={<Navigate to="/" replace />} />
                <Route path="/eligibly-vs-tengo" element={<Navigate to="/" replace />} />
                <Route path="/eligibly-vs-veille-manuelle" element={<Navigate to="/" replace />} />
                <Route path="/eligibly-vs-libel" element={<Navigate to="/" replace />} />
                <Route path="/eligibly-vs-remporte" element={<Navigate to="/" replace />} />
                <Route path="/eligibly-vs-doaken" element={<Navigate to="/" replace />} />
                <Route path="/boamp-guide" element={<Navigate to="/" replace />} />
                <Route path="/logiciel-appels-offres" element={<Navigate to="/" replace />} />
                <Route path="/repondre-appel-offres" element={<Navigate to="/" replace />} />
                <Route path="/trouver-appels-offres" element={<Navigate to="/" replace />} />
                <Route path="/mapa-marches-publics" element={<Navigate to="/" replace />} />
                <Route path="/dce-dossier-consultation" element={<Navigate to="/" replace />} />
                <Route path="/profil-acheteur" element={<Navigate to="/" replace />} />
                <Route path="/plateforme-marches-publics" element={<Navigate to="/" replace />} />
                <Route path="/seuils-marches-publics" element={<Navigate to="/" replace />} />
                <Route path="/dematerialisation-marches-publics" element={<Navigate to="/" replace />} />
                <Route path="/allotissement-marches-publics" element={<Navigate to="/" replace />} />
                <Route path="/criteres-attribution-marches-publics" element={<Navigate to="/" replace />} />
                <Route path="/memoire-technique-marches-publics" element={<Navigate to="/" replace />} />
                <Route path="/groupement-entreprises-marches-publics" element={<Navigate to="/" replace />} />
                <Route path="/negociation-marches-publics" element={<Navigate to="/" replace />} />
                <Route path="/chiffrer-offre-marche-public" element={<Navigate to="/" replace />} />
                <Route path="/scoring-predictif-ia-marches-publics" element={<Navigate to="/" replace />} />
                <Route path="/ia-analyse-dce" element={<Navigate to="/" replace />} />
                <Route path="/donnees-attribution-marches-publics" element={<Navigate to="/" replace />} />
                <Route path="/automatiser-veille-marches-publics" element={<Navigate to="/" replace />} />
                <Route path="/checklist-conformite-ao" element={<Navigate to="/" replace />} />
                <Route path="/kpi-marches-publics" element={<Navigate to="/" replace />} />
                <Route path="/en/about-eligibly" element={<Navigate to="/en/about" replace />} />
                <Route path="/en/strategic-watch" element={<Navigate to="/en" replace />} />
                <Route path="/en/go-no-go-decision" element={<Navigate to="/en" replace />} />
                <Route path="/en/public-tender-training" element={<Navigate to="/en" replace />} />
                <Route path="/en/technical-proposal" element={<Navigate to="/en" replace />} />
                <Route path="/en/tender-feedback" element={<Navigate to="/en" replace />} />
                <Route path="/en/price-quality-balance" element={<Navigate to="/en" replace />} />
                
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
