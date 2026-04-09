import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SafeLink } from "@/components/SafeLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, CheckCircle, Building2, Users, Briefcase } from "lucide-react";
import aiAssistantMain from "@/assets/ai-assistant-main.jpg";
import { OptimizedImageWithSources } from "@/components/PerformanceOptimizer";

export const ProductSolutions = () => {
  const { t, language } = useLanguage();

  // Solutions data from the original Solutions page
  const solutions = [
    {
      icon: Briefcase,
      title: t('solutions.commercial.title'),
      subtitle: t('solutions.commercial.subtitle'),
      description: t('solutions.commercial.description'),
      cta: t('solutions.commercial.cta'),
      gradient: "from-blue-500 to-cyan-500",
      benefits: [
        "Détection automatique des AO compatibles",
        "Score de pertinence en temps réel", 
        "Alertes personnalisées par secteur",
        "Historique et suivi des candidatures"
      ]
    },
    {
      icon: Users,
      title: t('solutions.consultant.title'),
      subtitle: t('solutions.consultant.subtitle'),
      description: t('solutions.consultant.description'),
      cta: t('solutions.consultant.cta'),
      gradient: "from-purple-500 to-pink-500",
      benefits: [
        "Veille sectorielle exhaustive",
        "Analyse concurrentielle avancée",
        "Rapports automatisés pour clients",
        "Intelligence de marché en temps réel"
      ]
    },
    {
      icon: Building2,
      title: t('solutions.public.title'),
      subtitle: t('solutions.public.subtitle'),
      description: t('solutions.public.description'),
      cta: t('solutions.public.cta'),
      gradient: "from-green-500 to-emerald-500",
      benefits: [
        "Benchmarks automatisés",
        "Analyse des fournisseurs",
        "Optimisation des achats publics",
        "Conformité réglementaire"
      ]
    }
  ];

  const demoHref = language === 'en' ? '/en/demo' : '/demo';

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-primary border-blue-200">
            {t('solutions.badge')}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('solutions.hero.title')}{" "}
            <span className="bg-gradient-highlight bg-clip-text text-transparent">
              {t('solutions.hero.title.highlight')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('solutions.hero.subtitle')}
          </p>
        </div>
        
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
                      
                      <SafeLink to={demoHref}>
                        <Button className="w-full group">
                          {solution.cta}
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </SafeLink>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative">
                  <OptimizedImageWithSources
                    src={aiAssistantMain}
                    alt={`Solution ${solution.title}`}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                    sizes="(min-width: 1024px) 560px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};