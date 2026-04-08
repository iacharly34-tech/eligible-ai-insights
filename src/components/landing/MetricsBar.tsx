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
    <section className="py-8 border-y border-border bg-secondary/30" aria-label="Key metrics">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {items.map((m) => (
            <div key={m.label}>
              <div className="text-2xl sm:text-3xl font-extrabold text-primary font-display">{m.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
