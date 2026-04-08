import { useLanguage } from "@/contexts/LanguageContext";

const metrics = {
  fr: [
    { value: "200+", label: "sources surveillées" },
    { value: "94%", label: "précision du scoring" },
    { value: "5 min", label: "par analyse d'AO" },
    { value: "x3", label: "ROI moyen constaté" },
  ],
  en: [
    { value: "200+", label: "monitored sources" },
    { value: "94%", label: "scoring accuracy" },
    { value: "5 min", label: "per tender analysis" },
    { value: "x3", label: "average ROI" },
  ],
};

export const MetricsBar = () => {
  const { language } = useLanguage();
  const items = metrics[language];

  return (
    <section className="py-16 sm:py-20 border-y border-border/30" aria-label="Key metrics">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
          {items.map((m) => (
            <div key={m.label} className="space-y-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground font-display tracking-tight">{m.value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-[0.2em]">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
