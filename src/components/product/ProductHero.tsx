import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/SafeLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

export const ProductHero = () => {
  const { t, language } = useLanguage();
  const demoHref = language === "en" ? "/en/demo" : "/demo";

  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-4 bg-[hsl(var(--hero-dark))]" aria-label="Product hero">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">
          {t('product.badge')}
        </span>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold font-display leading-[1.05] tracking-tight">
          {t('product.hero.title')}
        </h1>

        <p className="mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {t('product.hero.subtitle')}
        </p>

        <div className="mt-12">
          <SafeLink to={demoHref}>
            <Button size="lg" className="h-14 px-10 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground tracking-wide uppercase group">
              {t('common.bookDemo')}
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </SafeLink>
        </div>
      </div>
    </section>
  );
};
