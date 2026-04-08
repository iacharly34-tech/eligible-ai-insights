import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SafeLink } from "@/components/SafeLink";

export const FinalCTA = () => {
  const { language } = useLanguage();
  const demoHref = language === "en" ? "/en/demo" : "/demo";

  return (
    <section className="py-32 sm:py-40 px-4 relative overflow-hidden bg-[hsl(var(--hero-dark))]" aria-label="CTA">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />
      
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-[1.05] tracking-tight">
          {language === "en"
            ? "Stop guessing. Start scoring."
            : "Arrêtez de deviner. Commencez à scorer."}
        </h2>
        <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          {language === "en"
            ? "Get your first predictive score in under 5 minutes. No credit card, no commitment."
            : "Obtenez votre premier score prédictif en moins de 5 minutes. Sans carte bancaire, sans engagement."}
        </p>

        <div className="mt-12">
          <SafeLink to={demoHref}>
            <Button size="lg" className="h-14 px-12 text-sm font-semibold uppercase tracking-[0.2em] bg-primary text-primary-foreground hover:bg-primary/90 group">
              {language === "en" ? "Start free trial" : "Démarrer l'essai gratuit"}
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </SafeLink>
        </div>

        <p className="mt-8 text-xs text-muted-foreground tracking-wide">
          ✓ {language === "en" ? "14-day free trial" : "Essai 14 jours"} · ✓ {language === "en" ? "Cancel anytime" : "Annulation libre"} · ✓ {language === "en" ? "Dedicated support" : "Support dédié"}
        </p>
      </div>
    </section>
  );
};
