import { useLanguage } from "@/contexts/LanguageContext";
import { RESPONSE_FEATURES } from "@/data/constants";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/SafeLink";

export const ProductResponseSection = () => {
  const { t, language } = useLanguage();
  const demoHref = language === "en" ? "/en/demo" : "/demo";

  return (
    <section className="py-24 sm:py-32 px-4 bg-background" aria-label="Response features">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">
            {t('product.response.badge')}
          </span>
        </div>
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-[1.1] tracking-tight">
            {t('product.response.title')}{" "}
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
              {t('product.response.title.highlight')}
            </span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('product.response.subtitle')}
          </p>
        </div>

        {/* Full-cycle visual */}
        <div className="mb-16 flex flex-wrap justify-center gap-3 text-sm">
          {['Détecter', 'Analyser', 'Décider', 'Rédiger', 'Vérifier', 'Gagner'].map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-semibold">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </span>
                {step}
              </div>
              {i < 5 && <ArrowRight className="w-4 h-4 text-muted-foreground hidden sm:block" />}
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {RESPONSE_FEATURES.map((feature, index) => (
            <div
              key={index}
              className="group p-8 sm:p-10 border border-border/30 bg-card hover:bg-card/80 transition-all duration-500 relative overflow-hidden"
            >
              {/* Stat badge */}
              <div className="absolute top-6 right-6">
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{feature.stat}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{feature.statLabel}</div>
                </div>
              </div>

              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-lg font-bold font-display mb-3 tracking-tight group-hover:text-primary transition-colors pr-20">
                {t(`product.response.${feature.key}.title`)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {t(`product.response.${feature.key}.desc`)}
              </p>

              <div className="flex flex-wrap gap-2">
                {feature.details.map((detail, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            {t('product.response.cta')}
          </p>
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