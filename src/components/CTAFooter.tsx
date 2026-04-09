import { Button } from "@/components/ui/button";
import { SafeLink } from "./SafeLink";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface CTAFooterProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

export const CTAFooter = ({
  title = "Prêt à transformer votre veille commerciale ?",
  subtitle = "Obtenez votre premier score prédictif en moins de 5 minutes. Sans carte bancaire, sans engagement.",
  primaryButtonText = "Démarrer l'essai gratuit",
  secondaryButtonText,
}: CTAFooterProps) => {
  const { language } = useLanguage();
  const demoHref = language === "en" ? "/en/demo" : "/demo";

  return (
    <section className="py-32 sm:py-40 px-4 relative overflow-hidden bg-[hsl(var(--hero-dark))]" aria-label="CTA">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />

      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-[1.05] tracking-tight">
          {title}
        </h2>
        <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <SafeLink to={demoHref}>
            <Button size="lg" className="h-14 px-12 text-sm font-semibold uppercase tracking-[0.2em] bg-primary text-primary-foreground hover:bg-primary/90 group">
              {primaryButtonText}
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </SafeLink>
          {secondaryButtonText && (
            <SafeLink to={demoHref}>
              <Button variant="outline" size="lg" className="h-14 px-10 text-sm font-semibold border-border/50 hover:bg-card/50 tracking-wide uppercase">
                {secondaryButtonText}
              </Button>
            </SafeLink>
          )}
        </div>

        <p className="mt-8 text-xs text-muted-foreground tracking-wide">
          ✓ {language === "en" ? "14-day free trial" : "Essai 14 jours"} · ✓ {language === "en" ? "Cancel anytime" : "Annulation libre"} · ✓ {language === "en" ? "Dedicated support" : "Support dédié"}
        </p>
      </div>
    </section>
  );
};
