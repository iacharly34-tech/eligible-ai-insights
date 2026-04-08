import { useLanguage } from "@/contexts/LanguageContext";
import { Quote, TrendingUp, Clock, Target, Users } from "lucide-react";

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
    { icon: TrendingUp, value: "38%", label: "taux de succès", prev: "vs 15% avant" },
    { icon: Clock, value: "-80%", label: "temps de veille", prev: "2h/sem vs 10h" },
    { icon: Target, value: "x2.5", label: "ROI sur 6 mois", prev: "premiers utilisateurs" },
    { icon: Users, value: "50+", label: "entreprises en bêta", prev: "PME et ETI" },
  ],
  en: [
    { icon: TrendingUp, value: "38%", label: "win rate", prev: "vs 15% before" },
    { icon: Clock, value: "-80%", label: "monitoring time", prev: "2h/week vs 10h" },
    { icon: Target, value: "x2.5", label: "ROI over 6 months", prev: "early users" },
    { icon: Users, value: "50+", label: "companies in beta", prev: "SMEs & mid-caps" },
  ],
};

export const SocialProof = () => {
  const { language } = useLanguage();
  const items = testimonials[language];
  const metrics = caseStudyMetrics[language];

  return (
    <section className="py-24 sm:py-32 px-4 bg-[hsl(var(--hero-dark))]" aria-label="Testimonials">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">
            {language === "en" ? "They trust us" : "Ils nous font confiance"}
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-[1.1] tracking-tight">
            {language === "en"
              ? "Teams that win more with Eligibly"
              : "Des équipes qui gagnent plus avec Eligibly"}
          </h2>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {metrics.map((m) => (
            <div key={m.label} className="text-center p-6">
              <m.icon className="w-5 h-5 text-primary mx-auto mb-3" />
              <div className="text-3xl sm:text-4xl font-extrabold text-foreground font-display tracking-tight">{m.value}</div>
              <div className="text-xs font-medium uppercase tracking-[0.2em] mt-2">{m.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{m.prev}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-px bg-border/30 rounded-2xl overflow-hidden mb-8">
          {items.map((t) => (
            <div key={t.name} className="bg-card p-8 sm:p-10 flex flex-col">
              <Quote className="w-8 h-8 text-primary/20 mb-6" />
              <p className="text-sm text-foreground leading-relaxed flex-1 italic">"{t.quote}"</p>
              <div className="mt-8 pt-6 border-t border-border/50">
                <p className="font-semibold text-sm tracking-tight">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.role} — {t.company}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground tracking-wide">
          {language === "en"
            ? "* Testimonials from beta users. Names anonymized for confidentiality."
            : "* Témoignages d'utilisateurs bêta. Noms anonymisés pour confidentialité."}
        </p>
      </div>
    </section>
  );
};
