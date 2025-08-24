import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { EligiblyButton } from "@/components/EligiblyButton";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTAFooter } from "@/components/CTAFooter";
import { SafeLink } from "@/components/SafeLink";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { MobileCTABar } from "@/components/MobileCTABar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
  Search,
  Brain
} from "lucide-react";

const Solutions = () => {
  const { t } = useLanguage();
  
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
        "Veille concurrentielle intégrée"
      ],
      cta: "Booster mes ventes",
      gradient: "from-blue-500 to-cyan-500"
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
        "Veille réglementaire intégrée"
      ],
      cta: "Enrichir mon expertise",
      gradient: "from-purple-500 to-pink-500"
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
        "Conformité réglementaire assurée"
      ],
      cta: "Optimiser mes achats",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  const useCases = [
    {
      icon: Target,
      title: "Startups Tech",
      description: "Identifier les marchés d'innovation publique",
      stat: "200% d'augmentation des opportunités détectées"
    },
    {
      icon: Clock,
      title: "PME BTP",
      description: "Automatiser la veille des marchés de travaux",
      stat: "15h/semaine économisées en veille manuelle"
    },
    {
      icon: Award,
      title: "Grandes Entreprises",
      description: "Structurer la veille commerciale multi-filiales",
      stat: "47% d'amélioration du taux de succès"
    }
  ];

  return (
    <>
      <SEOHead />
      <StructuredData page="solutions" />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-emerald-50/40">
        <Header />
        <MobileCTABar />
        
        <main className="page-container">
        
        {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200">
              {t('solutions.badge')}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('solutions.hero.title')}{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">
                {t('solutions.hero.title.highlight')}
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('solutions.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Carousel opts={{ align: 'start' }}>
              <CarouselContent>
                {solutions.map((solution, index) => (
                  <CarouselItem key={index} className="basis-[85%]">
                    <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
                      <CardContent className="p-0">
                        <div className={`h-2 bg-gradient-to-r ${solution.gradient}`}></div>
                        <div className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className={`w-12 h-12 bg-gradient-to-r ${solution.gradient} rounded-xl flex items-center justify-center`}>
                              <solution.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-foreground">{solution.title}</h3>
                              <p className="text-muted-foreground text-sm">{solution.subtitle}</p>
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-4">
                            {solution.description}
                          </p>
                          <div className="space-y-2 mb-6">
                            {solution.benefits.slice(0, 3).map((benefit, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-muted-foreground">{benefit}</span>
                              </div>
                            ))}
                          </div>
                          <SafeLink to="/demo">
                            <EligiblyButton className="w-full group">
                              {solution.cta}
                              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </EligiblyButton>
                          </SafeLink>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:block">
            <div className="space-y-16">
              {solutions.map((solution, index) => (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                      <CardContent className="p-0">
                        <div className={`h-2 bg-gradient-to-r ${solution.gradient}`}></div>
                        <div className="p-8">
                          <div className="flex items-center gap-4 mb-6">
                            <div className={`w-16 h-16 bg-gradient-to-r ${solution.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                              <solution.icon className="w-8 h-8 text-white" />
                            </div>
                            <div>
                               <h3 className="text-2xl font-bold text-foreground">{solution.title}</h3>
                              <p className="text-muted-foreground">{solution.subtitle}</p>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                            {solution.description}
                          </p>
                          
                          <div className="space-y-3 mb-8">
                            {solution.benefits.map((benefit, i) => (
                              <div key={i} className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                <span className="text-muted-foreground">{benefit}</span>
                              </div>
                            ))}
                          </div>
                          
                          <SafeLink to="/demo">
                            <EligiblyButton className="w-full sm:w-auto group">
                              {solution.cta}
                              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </EligiblyButton>
                          </SafeLink>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="relative">
                      <div className={`w-full h-96 bg-gradient-to-br ${solution.gradient} rounded-3xl opacity-20`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                          <div className={`w-20 h-20 bg-gradient-to-r ${solution.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                            <solution.icon className="w-10 h-10 text-white" />
                          </div>
                          <h4 className="text-xl font-bold text-center text-foreground">{solution.title}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('solutions.usecases.title')}{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">{t('solutions.usecases.title.highlight')}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('solutions.usecases.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                   <h3 className="text-xl font-bold text-foreground mb-4">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-6">{useCase.description}</p>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                    <p className="text-green-700 font-semibold">{useCase.stat}</p>
                  </div>
                </CardContent>
              </Card>
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
      </div>
  </>
  );
};

export default Solutions;