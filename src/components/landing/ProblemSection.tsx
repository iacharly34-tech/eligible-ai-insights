import { useLanguage } from "@/contexts/LanguageContext";
import { Clock, Ban, TrendingDown } from "lucide-react";

const problems = {
  fr: [
    { icon: Clock, title: "Trop de temps perdu", desc: "Vous passez des heures à chercher et qualifier des AO sur BOAMP, PLACE, TED… pour ne candidater que sur une poignée." },
    { icon: Ban, title: "AO non pertinents", desc: "Sans scoring, vous investissez dans des réponses à des marchés où vous n'avez aucune chance — un coût caché massif." },
    { icon: TrendingDown, title: "Taux de succès faible", desc: "En moyenne, une PME remporte moins de 20% de ses candidatures. Chaque réponse ratée coûte 3 000 à 15 000€ en temps interne." },
  ],
  en: [
    { icon: Clock, title: "Too much time wasted", desc: "You spend hours searching and qualifying tenders on BOAMP, PLACE, TED… only to bid on a handful." },
    { icon: Ban, title: "Irrelevant tenders", desc: "Without scoring, you invest in responses to tenders where you have zero chance — a massive hidden cost." },
    { icon: TrendingDown, title: "Low win rate", desc: "On average, an SME wins less than 20% of its bids. Each failed response costs €3,000–15,000 in internal time." },
  ],
};

export const ProblemSection = () => {
  const { language } = useLanguage();
  const items = problems[language];

  return (
    <section className="py-24 sm:py-32 px-4" aria-label="Problem">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-xs font-semibold text-destructive uppercase tracking-[0.3em]">
            {language === "en" ? "The problem" : "Le problème"}
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-[1.1] tracking-tight">
            {language === "en"
              ? "Responding to tenders shouldn't be a lottery"
              : "Répondre aux AO ne devrait pas être une loterie"}
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {language === "en"
              ? "Most companies waste 80% of their tender response budget on opportunities they'll never win."
              : "La plupart des entreprises gaspillent 80% de leur budget de réponse sur des marchés qu'elles ne remporteront jamais."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.title} className="group p-8 rounded-2xl border border-border/50 bg-card hover:border-destructive/30 transition-all duration-500 hover:shadow-card">
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-destructive/15 transition-colors">
                <item.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3 tracking-tight">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
