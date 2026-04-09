import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/SafeLink";
import { CTAFooter } from "@/components/CTAFooter";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { MobileCTABar } from "@/components/MobileCTABar";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Users,
  Building2,
  Briefcase,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Target,
  Clock,
  Award,
} from "lucide-react";

const Solutions = () => {
  const { t, language } = useLanguage();
  const demoHref = language === "en" ? "/en/demo" : "/demo";

  const solutions = [
    {
      icon: Users,
      title: "Équipes Commerciales",
      subtitle: "Vendeurs & Business Developers",
      description: "Détectez automatiquement les opportunités qui correspondent parfaitement à votre offre et maximisez votre taux de conversion.",
      benefits: [
        "Détection automatique d'opportunités qualifiées",
        "Scoring IA pour prioriser vos actions",
        "Alertes personnalisées selon vos critères",
        "Veille concurrentielle intégrée",
      ],
      cta: "Booster mes ventes",
    },
    {
      icon: Briefcase,
      title: "Consultants & AMO",
      subtitle: "Assistance à Maîtrise d'Ouvrage",
      description: "Accompagnez vos clients avec une expertise data-driven et une veille exhaustive des marchés publics de votre secteur.",
      benefits: [
        "Benchmark automatique des marchés",
        "Analyse des tendances sectorielles",
        "Rapports d'expertise personnalisés",
        "Veille réglementaire intégrée",
      ],
      cta: "Enrichir mon expertise",
    },
    {
      icon: Building2,
      title: "Acheteurs Publics",
      subtitle: "Collectivités & Administrations",
      description: "Optimisez vos achats publics grâce à l'intelligence de marché et aux benchmarks automatisés de notre IA.",
      benefits: [
        "Benchmarking automatique des prix",
        "Analyse des fournisseurs qualifiés",
        "Optimisation des procédures d'achat",
        "Conformité réglementaire assurée",
      ],
      cta: "Optimiser mes achats",
    },
  ];

  const useCases = [
    { icon: Target, title: "Startups Tech", description: "Identifier les marchés d'innovation publique", stat: "200% d'augmentation des opportunités détectées" },
    { icon: Clock, title: "PME BTP", description: "Automatiser la veille des marchés de travaux", stat: "15h/semaine économisées en veille manuelle" },
    { icon: Award, title: "Grandes Entreprises", description: "Structurer la veille commerciale multi-filiales", stat: "47% d'amélioration du taux de succès" },
  ];

  return (
    <>
      <SEOHead />
      <StructuredData page="solutions" />
      <div className="min-h-screen bg-background">
        <Header />
        <MobileCTABar />

        <main>
          {/* Hero */}
          <section className="relative overflow-hidden pt-32 pb-20 px-4 bg-[hsl(var(--hero-dark))]" aria-label="Solutions hero">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
            <div className="container mx-auto max-w-4xl text-center relative z-10">
              <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">
                {t('solutions.badge')}
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold font-display leading-[1.05] tracking-tight">
                {t('solutions.hero.title')}{" "}
                <span className="bg-gradient-highlight bg-clip-text text-transparent">
                  {t('solutions.hero.title.highlight')}
                </span>
              </h1>
              <p className="mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t('solutions.hero.subtitle')}
              </p>
            </div>
          </section>

          {/* Solutions */}
          <section className="py-24 sm:py-32 px-4" aria-label="Solutions">
            <div className="container mx-auto max-w-5xl space-y-12">
              {solutions.map((solution, index) => (
                <div key={index} className="group p-8 sm:p-10 rounded-2xl border border-border/50 bg-card hover:border-primary/30 transition-all duration-500 hover:shadow-card">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                      <solution.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold font-display mb-1 tracking-tight">{solution.title}</h3>
                      <p className="text-sm text-primary/60 uppercase tracking-[0.2em] mb-4">{solution.subtitle}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">{solution.description}</p>
                      <div className="grid sm:grid-cols-2 gap-3 mb-8">
                        {solution.benefits.map((b, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                      <SafeLink to={demoHref}>
                        <Button variant="outline" className="uppercase tracking-[0.15em] text-xs font-semibold border-border/50 hover:bg-card/50 group/btn">
                          {solution.cta}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </SafeLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section className="py-24 sm:py-32 px-4 bg-[hsl(var(--hero-dark))]" aria-label="Use cases">
            <div className="container mx-auto max-w-5xl">
              <div className="text-center mb-20">
                <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">
                  {t('solutions.usecases.title')}
                </span>
                <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-[1.1] tracking-tight">
                  {t('solutions.usecases.title.highlight')}
                </h2>
                <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
                  {t('solutions.usecases.subtitle')}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-1">
                {useCases.map((uc, index) => (
                  <div key={index} className="group p-8 sm:p-10 border border-border/30 bg-card hover:bg-card/80 transition-all duration-500 text-center">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/15 transition-colors">
                      <uc.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold font-display mb-3 tracking-tight">{uc.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{uc.description}</p>
                    <div className="p-3 rounded-xl bg-success/10 border border-success/20">
                      <p className="text-sm font-semibold text-success">{uc.stat}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <CTAFooter
            title="Quelle que soit votre activité, nous avons la solution"
            subtitle="Planifiez une démonstration personnalisée selon votre secteur"
            primaryButtonText="Découvrir ma solution"
            secondaryButtonText="Démonstration personnalisée"
          />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Solutions;
