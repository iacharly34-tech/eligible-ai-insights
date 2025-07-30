import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-emerald-50/40">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200">
              Solutions sur mesure
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Une solution pour chaque{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">
                profil métier
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Notre IA s'adapte aux besoins spécifiques de votre secteur et de votre 
              rôle pour maximiser votre performance commerciale.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
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
                            <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                            <p className="text-gray-600">{solution.subtitle}</p>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                          {solution.description}
                        </p>
                        
                        <div className="space-y-3 mb-8">
                          {solution.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                        
                        <Button className={`bg-gradient-to-r ${solution.gradient} hover:shadow-lg text-white group w-full sm:w-auto`}>
                          {solution.cta}
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
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
                        <h4 className="text-xl font-bold text-center text-gray-900">{solution.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Cas d'usage{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">clients</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment nos clients transforment leur performance commerciale
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                  <p className="text-gray-600 mb-6">{useCase.description}</p>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                    <p className="text-green-700 font-semibold">{useCase.stat}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Quelle que soit votre activité, nous avons la solution
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Planifiez une démo personnalisée selon votre secteur
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 h-auto group">
                Découvrir ma solution
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 h-auto border-2 border-white text-white hover:bg-white/10">
                Planifier une démo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;