import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTAFooter } from "@/components/CTAFooter";
import { ProcessDemo } from "@/components/ProcessDemo";
import { MacBookSimulation } from "@/components/MacBookSimulation";
import { SafeLink } from "@/components/SafeLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { updateMetaDescription, updatePageTitle, updateCanonicalUrl, SEO_CONTENT } from "@/utils/seo";
import { 
  ArrowRight,
  CheckCircle,
  BarChart3,
  Building2,
  Users,
  Award,
  Briefcase
} from "lucide-react";
import aiAssistantMain from "@/assets/ai-assistant-main.jpg";
import { CORE_FEATURES, MEASURABLE_BENEFITS, HERO_MESSAGES, STANDARD_CTAS, COMPANY_STATS } from "@/data/constants";

const Produit = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    updatePageTitle(SEO_CONTENT.produit.title);
    updateMetaDescription(SEO_CONTENT.produit.description);
    updateCanonicalUrl(SEO_CONTENT.produit.url);
  }, []);

  // Spécialisation : Fonctionnalités techniques détaillées uniquement
  const technicalFeatures = CORE_FEATURES.map(feature => ({
    ...feature,
    // Ajout de détails techniques spécifiques pour la page Produit
    technicalDetails: feature.details,
    integrations: feature.title === "Alertes Instantanées" ? ['Slack', 'Microsoft Teams', 'Email', 'Webhooks'] : [],
    apiAccess: feature.title === "Surveillance Multi-Sources" ? true : false
  }));

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-emerald-50/40">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200">
              {t('product.badge')}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('product.hero.title')}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('product.hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SafeLink to="/demo">
                <Button size="lg" className="px-8 py-4 h-auto group">
                  {t('common.tryFree')}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </SafeLink>
              <SafeLink to="/demo">
                <Button variant="outline" size="lg" className="px-8 py-4 h-auto">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  {t('common.watchDemo')}
                </Button>
              </SafeLink>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <ProcessDemo />

      {/* MacBook Demo Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-100 to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Démonstration</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Processus automatisé{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">
                en action
              </span>
            </h2>
          </div>
          
          <MacBookSimulation />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('product.features.title')}{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">{t('product.features.title.highlight')}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('product.features.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {technicalFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gradient-cta rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {feature.technicalDetails.map((detail, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {detail}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200">
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
                        
                        <SafeLink to="/demo">
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
                    <img
                      src={aiAssistantMain}
                      alt={`Solution ${solution.title}`}
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('product.benefits.title')}{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">{t('product.benefits.title.highlight')}</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MEASURABLE_BENEFITS.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTAFooter 
        title={t('cta.title')}
        subtitle={t('cta.subtitle')}
        primaryButtonText={t('cta.primary')}
        secondaryButtonText={t('cta.secondary')}
      />
    </div>
  );
};

export default Produit;