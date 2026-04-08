import { useLanguage } from "@/contexts/LanguageContext";
import { Check, X, Minus } from "lucide-react";

const Icon = ({ v }: { v: "yes" | "no" | "partial" }) => {
  if (v === "yes") return <Check className="w-5 h-5 text-success" />;
  if (v === "no") return <X className="w-5 h-5 text-destructive/60" />;
  return <Minus className="w-5 h-5 text-warning" />;
};

type V = "yes" | "no" | "partial";

interface Row {
  feature: string;
  traditional: V;
  aggregator: V;
  eligibly: V;
}

const rows: { fr: Row[]; en: Row[] } = {
  fr: [
    { feature: "Détection automatique des AO", traditional: "no", aggregator: "yes", eligibly: "yes" },
    { feature: "Scoring prédictif Go/No-Go", traditional: "no", aggregator: "no", eligibly: "yes" },
    { feature: "Analyse IA du DCE", traditional: "no", aggregator: "partial", eligibly: "yes" },
    { feature: "Données d'attribution historiques", traditional: "no", aggregator: "partial", eligibly: "yes" },
    { feature: "Alertes personnalisées (Slack, Teams)", traditional: "no", aggregator: "partial", eligibly: "yes" },
    { feature: "Temps de qualification par AO", traditional: "no", aggregator: "partial", eligibly: "yes" },
    { feature: "Transparence tarifaire", traditional: "yes", aggregator: "no", eligibly: "yes" },
    { feature: "Prise en main < 5 min", traditional: "no", aggregator: "partial", eligibly: "yes" },
  ],
  en: [
    { feature: "Automatic tender detection", traditional: "no", aggregator: "yes", eligibly: "yes" },
    { feature: "Predictive Go/No-Go scoring", traditional: "no", aggregator: "no", eligibly: "yes" },
    { feature: "AI analysis of tender docs", traditional: "no", aggregator: "partial", eligibly: "yes" },
    { feature: "Historical award data", traditional: "no", aggregator: "partial", eligibly: "yes" },
    { feature: "Custom alerts (Slack, Teams)", traditional: "no", aggregator: "partial", eligibly: "yes" },
    { feature: "Time per tender qualification", traditional: "no", aggregator: "partial", eligibly: "yes" },
    { feature: "Transparent pricing", traditional: "yes", aggregator: "no", eligibly: "yes" },
    { feature: "Setup in < 5 min", traditional: "no", aggregator: "partial", eligibly: "yes" },
  ],
};

export const ComparisonTable = () => {
  const { language } = useLanguage();
  const data = rows[language];

  const headers = language === "en"
    ? ["Feature", "Manual", "Aggregators", "Eligibly"]
    : ["Fonctionnalité", "Manuel", "Agrégateurs", "Eligibly"];

  return (
    <section className="py-24 sm:py-32 px-4" aria-label="Comparison">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">
            {language === "en" ? "Comparison" : "Comparaison"}
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-[1.1] tracking-tight">
            {language === "en"
              ? "Not another monitoring tool"
              : "Pas un énième outil de veille"}
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            {language === "en"
              ? "Eligibly is the only platform that tells you WHERE to invest your time — not just what's available."
              : "Eligibly est la seule plateforme qui vous dit OÙ investir votre temps — pas juste ce qui est disponible."}
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border/50">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50">
                {headers.map((h, i) => (
                  <th key={h} className={`py-5 px-5 text-left text-xs uppercase tracking-[0.2em] font-semibold ${i === 3 ? "bg-primary/5 text-primary" : "text-muted-foreground"}`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className="border-t border-border/30 hover:bg-card/50 transition-colors">
                  <td className="py-4 px-5 font-medium">{row.feature}</td>
                  <td className="py-4 px-5"><Icon v={row.traditional} /></td>
                  <td className="py-4 px-5"><Icon v={row.aggregator} /></td>
                  <td className="py-4 px-5 bg-primary/5"><Icon v={row.eligibly} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
