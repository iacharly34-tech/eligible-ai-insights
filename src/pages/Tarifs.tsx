import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/SafeLink";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { MobileCTABar } from "@/components/MobileCTABar";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import {
  CheckCircle,
  ArrowRight,
  Shield,
  ChevronDown,
} from "lucide-react";

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

const faqs = {
  fr: [
    { q: "Quelles sources d'appels d'offres surveillez-vous ?", a: "Nous surveillons toutes les plateformes officielles : BOAMP, profils d'acheteurs, PLACE, TED Europe, plus de 200 sources. Notre IA analyse en temps réel tous les nouveaux AO publiés." },
    { q: "Comment Charly IA détermine-t-il la compatibilité d'un appel d'offres ?", a: "Charly IA analyse votre profil d'entreprise (CA, secteur, références, certifications) et le compare aux critères de l'AO. Il évalue la faisabilité technique, la conformité réglementaire, et calcule vos chances de succès." },
    { q: "L'outil fonctionne-t-il pour tous les secteurs ?", a: "Oui ! Charly IA couvre tous les domaines : informatique, BTP, services, fournitures, santé, éducation, défense. Le scoring s'adapte automatiquement à chaque secteur." },
    { q: "Puis-je être alerté en temps réel ?", a: "Absolument ! Configurez vos critères (budget, secteur, zone géographique, mots-clés) et recevez des alertes instantanées par email, Slack ou Teams." },
    { q: "Prévoyez-vous une aide à la rédaction des réponses ?", a: "Nous développons un agent IA spécialisé dans l'aide à la rédaction des mémoires techniques. Disponible Q2 2026 pour les abonnés Croissance et Scale." },
    { q: "Comment garantissez-vous la fraîcheur des données ?", a: "Notre système effectue une veille continue 24h/24. Les données sont mises à jour toutes les heures, avec détection automatique des modifications d'AO." },
  ],
  en: [
    { q: "Which tender sources do you monitor?", a: "We monitor all official platforms: BOAMP, buyer profiles, PLACE, TED Europe, over 200 sources. Our AI analyzes all new tenders in real time." },
    { q: "How does Charly AI determine tender compatibility?", a: "Charly AI analyzes your company profile (revenue, sector, references, certifications) against the tender criteria, evaluating technical feasibility and compliance." },
    { q: "Does it work for all sectors?", a: "Yes! Charly AI covers all domains: IT, construction, services, supplies, healthcare, education, defense. Scoring adapts automatically." },
    { q: "Can I get real-time alerts?", a: "Absolutely! Set your criteria (budget, sector, geography, keywords) and receive instant alerts via email, Slack, or Teams." },
    { q: "Do you offer response writing assistance?", a: "We're developing an AI agent specialized in technical proposal writing. Available Q2 2026 for Growth and Scale subscribers." },
    { q: "How do you ensure data freshness?", a: "Our system monitors continuously 24/7. Data is updated hourly, with automatic detection of tender modifications." },
  ],
};

const Tarifs = () => {
  const { language } = useLanguage();
  const items = plans[language];
  const faqItems = faqs[language];
  const demoHref = language === "en" ? "/en/demo" : "/demo";
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead />
      <StructuredData page="pricing" />
      <div className="min-h-screen bg-background">
        <Header />
        <MobileCTABar />

        <main>
          {/* Hero */}
          <section className="relative overflow-hidden pt-32 pb-20 px-4 bg-[hsl(var(--hero-dark))]" aria-label="Pricing hero">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
            <div className="container mx-auto max-w-4xl text-center relative z-10">
              <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">
                {language === "en" ? "Pricing" : "Tarifs"}
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold font-display leading-[1.05] tracking-tight">
                {language === "en"
                  ? "Transparent pricing, no surprises"
                  : "Tarifs transparents, sans surprise"}
              </h1>
              <p className="mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {language === "en"
                  ? "Cancel anytime · Exportable data · 14-day free trial on all plans"
                  : "Annulation libre · Données exportables · Essai 14 jours sur tous les plans"}
              </p>
            </div>
          </section>

          {/* Plans */}
          <section className="py-24 sm:py-32 px-4" aria-label="Plans">
            <div className="container mx-auto max-w-5xl">
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

          {/* Guarantee */}
          <section className="py-20 px-4 bg-[hsl(var(--hero-dark))]" aria-label="Guarantee">
            <div className="container mx-auto max-w-3xl text-center">
              <div className="w-16 h-16 rounded-2xl bg-success/10 border border-success/20 flex items-center justify-center mx-auto mb-8">
                <Shield className="w-7 h-7 text-success" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight">
                {language === "en" ? "Risk-free guarantee" : "Garantie sans risque"}
              </h2>
              <p className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed">
                {language === "en"
                  ? "14-day free trial on all plans. No credit card required. Cancel anytime with full data export."
                  : "Essai gratuit 14 jours sur tous les plans. Sans carte bancaire. Annulation libre avec export complet des données."}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-success" />{language === "en" ? "No-questions refund" : "Remboursement sans question"}</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-success" />{language === "en" ? "Premium support included" : "Support premium inclus"}</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-success" />{language === "en" ? "Data migration included" : "Migration de données incluse"}</span>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-24 sm:py-32 px-4" id="faq" aria-label="FAQ">
            <div className="container mx-auto max-w-3xl">
              <div className="text-center mb-16">
                <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">FAQ</span>
                <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-[1.1] tracking-tight">
                  {language === "en" ? "Frequently asked questions" : "Questions fréquentes"}
                </h2>
              </div>

              <div className="divide-y divide-border/50">
                {faqItems.map((item, i) => (
                  <div key={i}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between py-6 text-left hover:text-primary transition-colors group"
                      aria-expanded={openFaq === i}
                    >
                      <span className="font-semibold text-sm pr-8 group-hover:text-primary transition-colors">{item.q}</span>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40 pb-6" : "max-h-0"}`}>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-32 sm:py-40 px-4 relative overflow-hidden bg-[hsl(var(--hero-dark))]" aria-label="CTA">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />
            <div className="container mx-auto max-w-3xl text-center relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-[1.05] tracking-tight">
                {language === "en" ? "Ready to score smarter?" : "Prêt à scorer plus intelligemment ?"}
              </h2>
              <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                {language === "en"
                  ? "Get your first predictive score in under 5 minutes."
                  : "Obtenez votre premier score prédictif en moins de 5 minutes."}
              </p>
              <div className="mt-12">
                <SafeLink to={demoHref}>
                  <Button size="lg" className="h-14 px-12 text-sm font-semibold uppercase tracking-[0.2em] bg-primary text-primary-foreground hover:bg-primary/90 group">
                    {language === "en" ? "Start free trial" : "Démarrer l'essai gratuit"}
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </SafeLink>
              </div>
              <p className="mt-8 text-xs text-muted-foreground tracking-wide">
                ✓ {language === "en" ? "14-day free trial" : "Essai 14 jours"} · ✓ {language === "en" ? "Cancel anytime" : "Annulation libre"} · ✓ {language === "en" ? "Dedicated support" : "Support dédié"}
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Tarifs;
