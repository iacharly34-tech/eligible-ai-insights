import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { SafeLink } from "@/components/SafeLink";

const plans = {
  fr: [
    {
      name: "Découverte",
      price: "49",
      period: "/mois",
      annual: "39",
      desc: "Pour tester le scoring sur vos premiers marchés",
      features: [
        "50 AO analysés / mois",
        "Scoring prédictif IA",
        "3 secteurs surveillés",
        "Alertes email",
        "Support email",
      ],
      cta: "Essai gratuit 14 jours",
      popular: false,
    },
    {
      name: "Croissance",
      price: "149",
      period: "/mois",
      annual: "119",
      desc: "Pour les équipes qui répondent régulièrement",
      features: [
        "AO illimités",
        "Scoring avancé + analyse DCE",
        "Tous secteurs",
        "Alertes Slack / Teams / Email",
        "Collaboration d'équipe (5 users)",
        "Rapports personnalisés",
        "API disponible",
        "Support prioritaire",
      ],
      cta: "Essai gratuit 14 jours",
      popular: true,
    },
    {
      name: "Scale",
      price: "Sur mesure",
      period: "",
      annual: "",
      desc: "Pour les organisations avec des besoins spécifiques",
      features: [
        "Volume personnalisé",
        "IA entraînée sur vos données",
        "Intégrations CRM sur mesure",
        "Account manager dédié",
        "Formation équipe",
        "SLA garanti",
        "Hébergement dédié possible",
      ],
      cta: "Nous contacter",
      popular: false,
    },
  ],
  en: [
    {
      name: "Starter",
      price: "49",
      period: "/mo",
      annual: "39",
      desc: "Test scoring on your first tenders",
      features: [
        "50 tenders analyzed / month",
        "AI predictive scoring",
        "3 monitored sectors",
        "Email alerts",
        "Email support",
      ],
      cta: "Start 14-day free trial",
      popular: false,
    },
    {
      name: "Growth",
      price: "149",
      period: "/mo",
      annual: "119",
      desc: "For teams that bid regularly",
      features: [
        "Unlimited tenders",
        "Advanced scoring + DCE analysis",
        "All sectors",
        "Slack / Teams / Email alerts",
        "Team collaboration (5 users)",
        "Custom reports",
        "API access",
        "Priority support",
      ],
      cta: "Start 14-day free trial",
      popular: true,
    },
    {
      name: "Scale",
      price: "Custom",
      period: "",
      annual: "",
      desc: "For organizations with specific needs",
      features: [
        "Custom volume",
        "AI trained on your data",
        "Custom CRM integrations",
        "Dedicated account manager",
        "Team training",
        "Guaranteed SLA",
        "Dedicated hosting option",
      ],
      cta: "Contact us",
      popular: false,
    },
  ],
};

export const PricingPlans = () => {
  const { language } = useLanguage();
  const items = plans[language];
  const demoHref = language === "en" ? "/en/demo" : "/demo";

  return (
    <section className="py-24 sm:py-32 px-4 bg-[hsl(var(--hero-dark))]" id="pricing" aria-label="Pricing">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-20">
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">
            {language === "en" ? "Pricing" : "Tarifs"}
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-[1.1] tracking-tight">
            {language === "en"
              ? "Transparent pricing, no surprises"
              : "Tarifs transparents, sans surprise"}
          </h2>
          <p className="mt-6 text-muted-foreground">
            {language === "en"
              ? "Cancel anytime · Exportable data · 14-day free trial on all plans"
              : "Annulation libre · Données exportables · Essai 14 jours sur tous les plans"}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border/30 rounded-2xl overflow-hidden">
          {items.map((plan) => (
            <div
              key={plan.name}
              className={`bg-card p-8 flex flex-col relative ${plan.popular ? "ring-1 ring-primary" : ""}`}
            >
              {plan.popular && (
                <span className="absolute top-0 left-0 right-0 h-1 bg-primary" />
              )}
              <div className="mb-8">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-extrabold font-display tracking-tight">
                    {plan.price === "Sur mesure" || plan.price === "Custom" ? "" : "€"}
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
                {plan.annual && (
                  <p className="text-xs text-primary mt-2">
                    {language === "en" ? `€${plan.annual}/mo billed annually` : `${plan.annual}€/mois en annuel`}
                  </p>
                )}
                <p className="text-sm text-muted-foreground mt-3">{plan.desc}</p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <SafeLink to={demoHref}>
                <Button
                  className={`w-full h-12 uppercase tracking-[0.15em] text-xs font-semibold ${
                    plan.popular 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                      : "bg-transparent border border-border hover:bg-card"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </SafeLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
