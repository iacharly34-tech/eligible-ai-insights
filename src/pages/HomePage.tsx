import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTABar } from "@/components/MobileCTABar";
import { InternalLinksManager } from "@/components/InternalLinksManager";

import { HeroSection } from "@/components/landing/HeroSection";
import { MetricsBar } from "@/components/landing/MetricsBar";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSteps } from "@/components/landing/SolutionSteps";
import { MockDashboard } from "@/components/landing/MockDashboard";
import { FeaturesGrid } from "@/components/landing/FeaturesGrid";
import { SocialProof } from "@/components/landing/SocialProof";
import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { OnboardingTimeline } from "@/components/landing/OnboardingTimeline";
import { PricingPlans } from "@/components/landing/PricingPlans";
import { FAQAccordion } from "@/components/landing/FAQAccordion";
import { FinalCTA } from "@/components/landing/FinalCTA";

const HomePage = () => {
  return (
    <>
      <SEOHead />
      <StructuredData page="home" />
      <div className="min-h-screen bg-background">
        <Header />
        <MobileCTABar />

        <main id="main-content" tabIndex={-1} className="focus:outline-none" role="main">
          {/* 1. Hero — Scoring prédictif comme promesse */}
          <HeroSection />

          {/* 2. Barre de métriques clés */}
          <MetricsBar />

          {/* 3. Le problème — douleur client */}
          <ProblemSection />

          {/* 4. Solution en 3 étapes — Détecter → Scorer → Répondre */}
          <SolutionSteps />

          {/* 4b. Mock dashboard — scored tenders preview */}
          <MockDashboard />

          {/* 5. Fonctionnalités clés */}
          <FeaturesGrid />

          {/* 6. Preuve sociale — témoignages */}
          <SocialProof />

          {/* 7. Comparaison — Eligibly vs alternatives */}
          <ComparisonTable />

          {/* 8. Timeline d'onboarding */}
          <OnboardingTimeline />

          {/* 9. Pricing — transparence tarifaire */}
          <PricingPlans />

          {/* 10. FAQ — conversion + SEO */}
          <FAQAccordion />

          {/* 11. CTA final */}
          <FinalCTA />
        </main>

        <Footer />

        {/* Hidden content for SEO */}
        <div className="sr-only">
          <h2>À propos d'Eligibly.ai</h2>
          <p>Eligibly.ai est la seule plateforme IA qui prédit vos chances de succès sur les appels d'offres publics grâce au scoring prédictif.</p>
          <InternalLinksManager currentPage="homepage" maxLinks={4} variant="inline" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
