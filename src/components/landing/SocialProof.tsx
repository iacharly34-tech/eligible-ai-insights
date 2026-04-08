import { useLanguage } from "@/contexts/LanguageContext";
import { Star, Quote } from "lucide-react";

const testimonials = {
  fr: [
    {
      quote: "Depuis qu'on utilise le scoring Eligibly, on ne candidate que sur les marchés où on a plus de 70% de chances. Résultat : on répond à moins d'AO, mais on en gagne plus.",
      name: "Sophie M.",
      role: "Directrice commerciale",
      company: "PME BTP, 45 salariés",
    },
    {
      quote: "En 3 mois, on a économisé l'équivalent de 2 ETP sur la veille et la qualification. L'IA d'Eligibly fait en 5 minutes ce qui nous prenait une demi-journée.",
      name: "Thomas R.",
      role: "Responsable marchés publics",
      company: "ESN, 120 salariés",
    },
    {
      quote: "Le Go/No-Go n'est plus une décision au feeling. On a des données objectives pour décider. Notre taux de succès est passé de 15% à 38%.",
      name: "Marie L.",
      role: "Gérante",
      company: "Cabinet de conseil, 12 salariés",
    },
  ],
  en: [
    {
      quote: "Since using Eligibly scoring, we only bid on tenders where we have 70%+ chances. Result: fewer bids, more wins.",
      name: "Sophie M.",
      role: "Sales Director",
      company: "Construction SME, 45 employees",
    },
    {
      quote: "In 3 months, we saved the equivalent of 2 FTEs on monitoring and qualification. Eligibly's AI does in 5 minutes what took us half a day.",
      name: "Thomas R.",
      role: "Public procurement manager",
      company: "IT services, 120 employees",
    },
    {
      quote: "Go/No-Go is no longer a gut decision. We have objective data. Our win rate went from 15% to 38%.",
      name: "Marie L.",
      role: "Managing Director",
      company: "Consulting firm, 12 employees",
    },
  ],
};

export const SocialProof = () => {
  const { language } = useLanguage();
  const items = testimonials[language];

  return (
    <section className="py-16 sm:py-24 px-4 bg-secondary/30" aria-label="Testimonials">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            {language === "en" ? "They trust us" : "Ils nous font confiance"}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
            {language === "en"
              ? "Teams that win more with Eligibly"
              : "Des équipes qui gagnent plus avec Eligibly"}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="bg-card border border-border rounded-2xl p-6 flex flex-col">
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-sm text-foreground leading-relaxed flex-1 italic">"{t.quote}"</p>
              <div className="flex items-center gap-1 my-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role} — {t.company}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          {language === "en"
            ? "* Testimonials from beta users. Names anonymized."
            : "* Témoignages d'utilisateurs bêta. Noms anonymisés."}
        </p>
      </div>
    </section>
  );
};
