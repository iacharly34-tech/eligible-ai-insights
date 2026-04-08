import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
    <section className="py-16 sm:py-24 px-4 bg-secondary/30" id="pricing" aria-label="Pricing">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            {language === "en" ? "Pricing" : "Tarifs"}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
            {language === "en"
              ? "Transparent pricing, no surprises"
              : "Tarifs transparents, sans surprise"}
          </h2>
          <p className="text-muted-foreground">
            {language === "en"
              ? "Cancel anytime · Exportable data · 14-day free trial on all plans"
              : "Annulation libre · Données exportables · Essai 14 jours sur tous les plans"}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((plan) => (
            <div
              key={plan.name}
              className={`bg-card border rounded-2xl p-6 flex flex-col relative ${
                plan.popular ? "border-primary shadow-glow" : "border-border"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-cta text-white border-0 px-4">
                  {language === "en" ? "Most popular" : "Le plus populaire"}
                </Badge>
              )}
              <h3 className="text-xl font-bold font-display">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold font-display">
                  {plan.price === "Sur mesure" || plan.price === "Custom" ? "" : "€"}
                  {plan.price}
                </span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
                {plan.annual && (
                  <p className="text-xs text-primary mt-1">
                    {language === "en" ? `€${plan.annual}/mo billed annually` : `${plan.annual}€/mois en annuel`}
                  </p>
                )}
              </div>
              <ul className="space-y-3 flex-1 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <SafeLink to={demoHref}>
                <Button
                  className={`w-full ${plan.popular ? "bg-gradient-cta hover:opacity-90" : ""}`}
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
