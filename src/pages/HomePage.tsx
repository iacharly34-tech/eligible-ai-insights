import { HeaderEC } from "@/components/eligibly/HeaderEC";
import { HeroEC } from "@/components/eligibly/HeroEC";
import { SourcesBar } from "@/components/eligibly/SourcesBar";
import { ProblemSection } from "@/components/eligibly/ProblemSection";
import { LeadPreview } from "@/components/eligibly/LeadPreview";
import { HowItWorks } from "@/components/eligibly/HowItWorks";
import { CompareTable } from "@/components/eligibly/CompareTable";
import { Personas } from "@/components/eligibly/Personas";
import { PricingEC } from "@/components/eligibly/PricingEC";
import { FAQEC } from "@/components/eligibly/FAQEC";
import { FinalCTA } from "@/components/eligibly/FinalCTA";
import { FooterEC } from "@/components/eligibly/FooterEC";
import { FadeIn } from "@/components/eligibly/FadeIn";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-page text-ink antialiased">
      <HeaderEC />
      <main id="main-content" role="main">
        <HeroEC />
        <FadeIn><SourcesBar /></FadeIn>
        <FadeIn><ProblemSection /></FadeIn>
        <FadeIn><LeadPreview /></FadeIn>
        <FadeIn><HowItWorks /></FadeIn>
        <FadeIn><CompareTable /></FadeIn>
        <FadeIn><Personas /></FadeIn>
        <FadeIn><PricingEC /></FadeIn>
        <FadeIn><FAQEC /></FadeIn>
        <FadeIn><FinalCTA /></FadeIn>
      </main>
      <FooterEC />

      {/* SEO sr-only */}
      <div className="sr-only">
        <h2>Eligibly — CRM de prospection vertical pour cabinets d'expertise comptable</h2>
        <p>
          Eligibly consolide chaque jour les SASU et SAS nouvellement immatriculées en France
          via les sources publiques officielles (INPI, Sirene, BODACC) et applique des filtres
          amont systématiques pour livrer aux cabinets d'expertise comptable une liste priorisée
          de leads adressables, avec score expliqué et plan d'action concret.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
