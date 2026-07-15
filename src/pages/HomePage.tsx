import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTABar } from "@/components/MobileCTABar";
import { InternalLinksManager } from "@/components/InternalLinksManager";

import { CabinetHero } from "@/components/cabinet/CabinetHero";
import { CabinetProblems } from "@/components/cabinet/CabinetProblems";
import { CabinetHowItWorks } from "@/components/cabinet/CabinetHowItWorks";
import { CabinetCockpit } from "@/components/cabinet/CabinetCockpit";
import { CabinetTransparency } from "@/components/cabinet/CabinetTransparency";
import { CabinetSignals } from "@/components/cabinet/CabinetSignals";
import { CabinetCompare } from "@/components/cabinet/CabinetCompare";
import { CabinetTestimonial } from "@/components/cabinet/CabinetTestimonial";
import { CabinetPricing } from "@/components/cabinet/CabinetPricing";
import { CabinetFAQ } from "@/components/cabinet/CabinetFAQ";
import { CabinetFinalCTA } from "@/components/cabinet/CabinetFinalCTA";
import { CabinetActivation } from "@/components/cabinet/CabinetActivation";

const HomePage = () => {
  return (
    <>
      <SEOHead />
      <StructuredData page="home" />
      <div className="min-h-screen bg-background">
        <Header />
        <MobileCTABar />

        <main id="main-content" tabIndex={-1} className="focus:outline-none" role="main">
          {/* Pivot juin 2026 — Moteur de détection de leads pour cabinets EC.
              Home resserrée à 7 sections : promesse → friction → mécanique → preuve → comparatif → tarif → FAQ → CTA.
              ROI calculator et Personas déplacés sur /tarifs et /solutions pour resserrer le scroll. */}
          <CabinetHero />
          <CabinetProblems />
          <CabinetHowItWorks />
          <CabinetCockpit />
          <CabinetActivation />
          <CabinetSignals />
          <CabinetTransparency />
          <CabinetTestimonial />
          <CabinetCompare />
          <CabinetPricing />
          <CabinetFAQ />
          <CabinetFinalCTA />
        </main>

        <Footer />

        <div className="sr-only">
          <h2>À propos d'Eligibly</h2>
          <p>Eligibly est le moteur de détection de leads pour cabinets d'expertise comptable français : leads quotidiens SASU/SAS/EURL/SARL/SEL fraîchement immatriculées, filtres amont (CAC, procédure, holding, serial), score expliqué et plan d'action par lead.</p>
          <InternalLinksManager currentPage="homepage" maxLinks={4} variant="inline" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
