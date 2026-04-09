import { useLanguage } from "@/contexts/LanguageContext";
import { CORE_FEATURES } from "@/data/constants";

export const ProductFeatures = () => {
  const { t } = useLanguage();

  const technicalFeatures = CORE_FEATURES.map((feature) => ({
    ...feature,
    technicalDetails: feature.details,
  }));

  return (
    <section className="py-24 sm:py-32 px-4 bg-[hsl(var(--hero-dark))]" aria-label="Features">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">
            {t('product.features.title')}
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-[1.1] tracking-tight">
            {t('product.features.title.highlight')}
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            {t('product.features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-1">
          {technicalFeatures.map((feature, index) => (
            <div key={index} className="group p-8 sm:p-10 border border-border/30 bg-card hover:bg-card/80 transition-all duration-500">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold font-display mb-3 tracking-tight group-hover:text-primary transition-colors">
                    {t(`features.core.${(feature as any).key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {t(`features.core.${(feature as any).key}.desc`)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {feature.technicalDetails.map((detail, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
