import { useLanguage } from "@/contexts/LanguageContext";
import { MEASURABLE_BENEFITS } from "@/data/constants";

export const ProductBenefits = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 sm:py-32 px-4" aria-label="Benefits">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">
            {t('product.benefits.title')}
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-[1.1] tracking-tight">
            {t('product.benefits.title.highlight')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MEASURABLE_BENEFITS.map((benefit, index) => (
            <div key={index} className="text-center group p-8 rounded-2xl border border-border/50 bg-card hover:border-primary/30 transition-all duration-500 hover:shadow-card">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/15 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold font-display mb-3 tracking-tight text-primary">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
