import { useLanguage } from "@/contexts/LanguageContext";
import { Star, Quote, TrendingUp, Clock, Target, Users } from "lucide-react";

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

const caseStudyMetrics = {
  fr: [
    { icon: TrendingUp, value: "38%", label: "taux de succès moyen", prev: "vs 15% avant Eligibly" },
    { icon: Clock, value: "-80%", label: "temps de veille", prev: "2h/sem au lieu de 10h" },
    { icon: Target, value: "x2.5", label: "ROI sur 6 mois", prev: "mesuré sur nos premiers utilisateurs" },
    { icon: Users, value: "50+", label: "entreprises en bêta", prev: "PME et ETI françaises" },
  ],
  en: [
    { icon: TrendingUp, value: "38%", label: "average win rate", prev: "vs 15% before Eligibly" },
    { icon: Clock, value: "-80%", label: "monitoring time", prev: "2h/week instead of 10h" },
    { icon: Target, value: "x2.5", label: "ROI over 6 months", prev: "measured on early users" },
    { icon: Users, value: "50+", label: "companies in beta", prev: "French SMEs and mid-caps" },
  ],
};

export const SocialProof = () => {
  const { language } = useLanguage();
  const items = testimonials[language];
  const metrics = caseStudyMetrics[language];

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

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {metrics.map((m) => (
            <div key={m.label} className="bg-card border border-border rounded-2xl p-5 text-center">
              <m.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-extrabold text-primary font-display">{m.value}</div>
              <div className="text-sm font-medium mt-1">{m.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{m.prev}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
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

        <p className="text-center text-xs text-muted-foreground">
          {language === "en"
            ? "* Testimonials from beta users. Names anonymized for confidentiality."
            : "* Témoignages d'utilisateurs bêta. Noms anonymisés pour confidentialité."}
        </p>
      </div>
    </section>
  );
};
