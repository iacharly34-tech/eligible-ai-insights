import { useLang } from "@/hooks/useLang";

const copy = {
  fr: {
    eyebrow: "Témoignage client",
    quote:
      "Avec Eligibly, on a construit une stratégie marketing globale : image de marque, site web, visibilité Google et avis, présence sur les LLM. Résultat : 2 leads inbound qualifiés par semaine, sans y passer mon temps. On attaque maintenant l'outbound avec eux pour continuer à faire grossir le CA et structurer la partie commerciale du cabinet.",
    name: "Mickaël Fellous",
    role: "Fondateur, EM Partners",
    site: "empartners.fr",
    siteUrl: "https://www.empartners.fr/",
    metrics: [
      { v: "2 / sem.", l: "leads inbound qualifiés" },
      { v: "Inbound + Outbound", l: "stratégie 360°" },
      { v: "Structuration", l: "commerciale sans surcharge" },
    ],
  },
  en: {
    eyebrow: "Client testimonial",
    quote:
      "With Eligibly we built a full marketing strategy: brand, website, Google visibility & reviews, presence on LLMs. The outcome: 2 qualified inbound leads per week, without spending my time on it. We're now rolling out outbound with them to keep growing revenue and structure the firm's sales motion.",
    name: "Mickaël Fellous",
    role: "Founder, EM Partners",
    site: "empartners.fr",
    siteUrl: "https://www.empartners.fr/",
    metrics: [
      { v: "2 / week", l: "qualified inbound leads" },
      { v: "Inbound + Outbound", l: "360° strategy" },
      { v: "Sales", l: "structured without overhead" },
    ],
  },
} as const;

export const CabinetTestimonial = () => {
  const lang = useLang();
  const t = copy[lang];

  return (
    <section className="py-24 sm:py-32 px-4 bg-[hsl(var(--cream))]" aria-label={t.eyebrow}>
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">
            {t.eyebrow}
          </span>
        </div>

        <figure className="bg-background border border-border/60 rounded-2xl p-8 sm:p-14 shadow-sm">
          <svg
            aria-hidden="true"
            className="w-10 h-10 text-primary/30 mb-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7.17 6C4.32 6 2 8.32 2 11.17v6.83h6.83v-6.83H5.17C5.17 9.42 6.42 8.17 7.17 8.17V6zm10 0c-2.85 0-5.17 2.32-5.17 5.17v6.83h6.83v-6.83h-3.66c0-1.75 1.25-3 2-3V6z" />
          </svg>

          <blockquote className="text-xl sm:text-2xl leading-relaxed font-display text-foreground tracking-tight">
            « {t.quote} »
          </blockquote>

          <figcaption className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-8 border-t border-border/50">
            <div>
              <div className="font-semibold text-base tracking-tight">{t.name}</div>
              <div className="text-sm text-muted-foreground mt-1">{t.role}</div>
              <a
                href={t.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline mt-1 inline-block"
              >
                {t.site} ↗
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6 sm:gap-10 sm:text-right">
              {t.metrics.map((m) => (
                <div key={m.l}>
                  <div className="text-lg sm:text-xl font-display font-bold text-foreground tracking-tight">
                    {m.v}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mt-1 leading-tight">
                    {m.l}
                  </div>
                </div>
              ))}
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};