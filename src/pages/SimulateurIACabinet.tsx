import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { SafeLink } from "@/components/SafeLink";
import { AIGainsSimulator } from "@/components/AIGainsSimulator";
import { ArrowLeft } from "lucide-react";

const SimulateurIACabinet = () => (
  <>
    <SEOHead />
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto max-w-6xl px-4">
          <SafeLink
            to="/blog/moderniser-cabinet-expertise-comptable-ia"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" /> Retour à l'article
          </SafeLink>

          <header className="mb-10 max-w-3xl">
            <h1 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-6">
              Simulateur ROI IA — Cabinet d'expertise comptable
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chiffrez, en 4 étapes, les gains annuels d'un déploiement IA sur les 6 axes de modernisation
              du cabinet&nbsp;: production, conseil, relation client, RH, gouvernance et développement commercial.
            </p>
          </header>

          <AIGainsSimulator />
        </div>
      </main>
      <Footer />
    </div>
  </>
);

export default SimulateurIACabinet;