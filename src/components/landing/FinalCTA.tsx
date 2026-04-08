import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SafeLink } from "@/components/SafeLink";

export const FinalCTA = () => {
  const { language } = useLanguage();
  const demoHref = language === "en" ? "/en/demo" : "/demo";

  return (
    <section className="py-20 sm:py-28 px-4 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden" aria-label="CTA">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display mb-6 leading-tight">
          {language === "en"
            ? "Stop guessing. Start scoring."
            : "Arrêtez de deviner. Commencez à scorer."}
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
          {language === "en"
            ? "Get your first predictive score in under 5 minutes. No credit card, no commitment."
            : "Obtenez votre premier score prédictif en moins de 5 minutes. Sans carte bancaire, sans engagement."}
        </p>

        <SafeLink to={demoHref}>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-14 px-10 text-base font-bold group">
            {language === "en" ? "Start free trial" : "Démarrer l'essai gratuit"}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </SafeLink>

        <p className="text-white/60 mt-6 text-sm">
          ✓ {language === "en" ? "14-day free trial" : "Essai 14 jours"} · ✓ {language === "en" ? "Cancel anytime" : "Annulation libre"} · ✓ {language === "en" ? "Dedicated support" : "Support dédié"}
        </p>
      </div>
    </section>
  );
};
