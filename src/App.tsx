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
const EligiblyVsDoubletrade = lazy(() => import("./pages/EligiblyVsDoubletrade"));
const EligiblyVsTengo = lazy(() => import("./pages/EligiblyVsTengo"));
const EligiblyVsVeilleManuelle = lazy(() => import("./pages/EligiblyVsVeilleManuelle"));
const EligiblyVsLibel = lazy(() => import("./pages/EligiblyVsLibel"));
const EligiblyVsRemporte = lazy(() => import("./pages/EligiblyVsRemporte"));
const EligiblyVsDoaken = lazy(() => import("./pages/EligiblyVsDoaken"));

// SEO pillar pages
const BoampGuide = lazy(() => import("./pages/BoampGuide"));
const LogicielAppelsOffres = lazy(() => import("./pages/LogicielAppelsOffres"));
const RepondreAppelOffres = lazy(() => import("./pages/RepondreAppelOffres"));
const TrouverAppelsOffres = lazy(() => import("./pages/TrouverAppelsOffres"));
const MapaMarchesPublics = lazy(() => import("./pages/MapaMarchesPublics"));
const DceDossierConsultation = lazy(() => import("./pages/DceDossierConsultation"));
const ProfilAcheteur = lazy(() => import("./pages/ProfilAcheteur"));
const PlateformeMarchesPublics = lazy(() => import("./pages/PlateformeMarchesPublics"));

// Blog articles - Pilier 1: Comprendre
const SeuilsMarchesPublics = lazy(() => import("./pages/blog/SeuilsMarchesPublics"));
const DematerialisationAO = lazy(() => import("./pages/blog/DematerialisationAO"));
const AllotissementMarchesPublics = lazy(() => import("./pages/blog/AllotissementMarchesPublics"));
const CriteresAttribution = lazy(() => import("./pages/blog/CriteresAttribution"));
// Blog articles - Pilier 2: Optimiser
const MemoireTechnique = lazy(() => import("./pages/blog/MemoireTechnique"));
const GroupementEntreprises = lazy(() => import("./pages/blog/GroupementEntreprises"));
const NegociationMarchesPublics = lazy(() => import("./pages/blog/NegociationMarchesPublics"));
const ChiffrerOffreMarche = lazy(() => import("./pages/blog/ChiffrerOffreMarche"));
// Blog articles - Pilier 3: IA et marchés
const IAScoringPredictif = lazy(() => import("./pages/blog/IAScoringPredictif"));
const IAAnalyseDCE = lazy(() => import("./pages/blog/IAAnalyseDCE"));
const DonneesAttribution = lazy(() => import("./pages/blog/DonneesAttribution"));
const AutomatiserVeilleMarchesPublics = lazy(() => import("./pages/blog/AutomatiserVeilleMarchesPublics"));
const ChecklistConformiteAO = lazy(() => import("./pages/blog/ChecklistConformiteAO"));
const KpiMarchesPublics = lazy(() => import("./pages/blog/KpiMarchesPublics"));

// Product module pages
const VeilleAppelsOffres = lazy(() => import("./pages/produit/VeilleAppelsOffres"));
const AnalyseDceIa = lazy(() => import("./pages/produit/AnalyseDceIa"));
const GoNoGoIa = lazy(() => import("./pages/produit/GoNoGoIa"));
const MemoireTechniqueIa = lazy(() => import("./pages/produit/MemoireTechniqueIa"));
const ConformiteAppelOffres = lazy(() => import("./pages/produit/ConformiteAppelOffres"));
const PilotageMarches = lazy(() => import("./pages/produit/PilotageMarches"));

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

                <Route path="/eligibly-vs-doubletrade" element={<EligiblyVsDoubletrade />} />
                <Route path="/eligibly-vs-tengo" element={<EligiblyVsTengo />} />
                <Route path="/eligibly-vs-veille-manuelle" element={<EligiblyVsVeilleManuelle />} />
                <Route path="/eligibly-vs-libel" element={<EligiblyVsLibel />} />
                <Route path="/eligibly-vs-remporte" element={<EligiblyVsRemporte />} />
                <Route path="/eligibly-vs-doaken" element={<EligiblyVsDoaken />} />

                {/* SEO pillar pages */}
                <Route path="/boamp-guide" element={<BoampGuide />} />
                <Route path="/logiciel-appels-offres" element={<LogicielAppelsOffres />} />
                <Route path="/repondre-appel-offres" element={<RepondreAppelOffres />} />
                <Route path="/trouver-appels-offres" element={<TrouverAppelsOffres />} />
                <Route path="/mapa-marches-publics" element={<MapaMarchesPublics />} />
                <Route path="/dce-dossier-consultation" element={<DceDossierConsultation />} />
                <Route path="/profil-acheteur" element={<ProfilAcheteur />} />
                <Route path="/plateforme-marches-publics" element={<PlateformeMarchesPublics />} />
                
                {/* Blog - Pilier 1: Comprendre */}
                <Route path="/seuils-marches-publics" element={<SeuilsMarchesPublics />} />
                <Route path="/dematerialisation-marches-publics" element={<DematerialisationAO />} />
                <Route path="/allotissement-marches-publics" element={<AllotissementMarchesPublics />} />
                <Route path="/criteres-attribution-marches-publics" element={<CriteresAttribution />} />
                {/* Blog - Pilier 2: Optimiser */}
                <Route path="/memoire-technique-marches-publics" element={<MemoireTechnique />} />
                <Route path="/groupement-entreprises-marches-publics" element={<GroupementEntreprises />} />
                <Route path="/negociation-marches-publics" element={<NegociationMarchesPublics />} />
                <Route path="/chiffrer-offre-marche-public" element={<ChiffrerOffreMarche />} />
                {/* Blog - Pilier 3: IA et marchés */}
                <Route path="/scoring-predictif-ia-marches-publics" element={<IAScoringPredictif />} />
                <Route path="/ia-analyse-dce" element={<IAAnalyseDCE />} />
                <Route path="/donnees-attribution-marches-publics" element={<DonneesAttribution />} />
                <Route path="/automatiser-veille-marches-publics" element={<AutomatiserVeilleMarchesPublics />} />
                <Route path="/checklist-conformite-ao" element={<ChecklistConformiteAO />} />
                <Route path="/kpi-marches-publics" element={<KpiMarchesPublics />} />
                {/* Product module pages */}
                <Route path="/produit/veille-appels-offres" element={<VeilleAppelsOffres />} />
                <Route path="/produit/analyse-dce-ia" element={<AnalyseDceIa />} />
                <Route path="/produit/go-no-go-ia" element={<GoNoGoIa />} />
                <Route path="/produit/memoire-technique-ia" element={<MemoireTechniqueIa />} />
                <Route path="/produit/conformite-appel-offres" element={<ConformiteAppelOffres />} />
                <Route path="/produit/pilotage-marches-publics" element={<PilotageMarches />} />
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
