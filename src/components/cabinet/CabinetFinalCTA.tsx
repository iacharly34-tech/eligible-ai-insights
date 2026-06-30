import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/SafeLink";
import { ArrowRight } from "lucide-react";
import { useLang, localizedHref } from "@/hooks/useLang";

const copy = {
  fr: {
    h2a: "Jugez sur pièces.",
    h2b: "Recevez un échantillon",
    h2c: "de 3 leads qualifiés.",
    sub: "Donnez-nous votre zone et votre verticale. Sous 48 h, nous vous livrons trois sociétés fraîchement immatriculées, scorées selon vos critères. Vous décidez ensuite si vous continuez.",
    cta: "Demander un échantillon de 3 leads",
    note: "Données INPI · Sirene · BODACC, hébergées en France. Vos coordonnées servent uniquement à vous livrer l'échantillon.",
  },
  en: {
    h2a: "Judge for yourself.",
    h2b: "Get a sample",
    h2c: "of 3 qualified leads.",
    sub: "Share your area and vertical. Within 48 hours, we deliver three newly registered companies scored against your criteria. You decide if you continue.",
    cta: "Request a 3-lead sample",
    note: "INPI · Sirene · BODACC data, hosted in France. Your details are only used to deliver the sample.",
  },
} as const;

export const CabinetFinalCTA = () => {
  const lang = useLang();
  const t = copy[lang];
  return (
    <section id="demo" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden bg-foreground text-background px-8 py-16 md:px-16 md:py-20 text-center">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(circle at 20% 20%, hsl(var(--primary) / 0.4), transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--primary) / 0.3), transparent 50%)",
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-5">
              {t.h2a} <em className="italic text-primary">{t.h2b}</em> {t.h2c}
            </h2>
            <p className="text-background/90 text-lg leading-relaxed mb-8">
              {t.sub}
            </p>
            <SafeLink to={localizedHref("/demo", lang)}>
              <Button className="h-12 px-8 bg-background text-foreground hover:bg-background/90 hover:shadow-glow text-sm font-semibold group">
                {t.cta}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </SafeLink>
            <p className="mt-4 text-xs text-background/80">
              {t.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};