import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTAFooter } from "@/components/CTAFooter";
import { 
  Brain, 
  Database, 
  Target, 
  Zap, 
  Search,
  Filter,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Globe,
  Clock,
  Award,
  BarChart3
} from "lucide-react";
import aiAssistantMain from "@/assets/ai-assistant-main.jpg";

const Produit = () => {
  const features = [
    {
      icon: Database,
      title: "Connexion Multi-Sources",
      description: "Accès automatisé à 600+ sources officielles françaises et européennes",
      details: ["BOAMP", "Marchés Publics", "TED eTendering", "Simap", "Find a Tender"]
    },
    {
      icon: Brain,
      title: "Analyse IA Avancée", 
      description: "Triple modèle IA (GPT-4, Claude, Mistral) pour une analyse exhaustive",
      details: ["Analyse sémantique", "Scoring intelligent", "Recommandations expertes"]
    },
    {
      icon: Target,
      title: "Scoring Intelligent",
      description: "Évaluation automatique de la pertinence et du potentiel de chaque marché",
      details: ["Critères personnalisés", "Machine Learning", "Précision 98%"]
    },
    {
      icon: Zap,
      title: "Notification Temps Réel",
      description: "Alertes instantanées via Slack, email et intégrations personnalisées",
      details: ["Slack", "Email", "API", "Webhooks"]
    }
  ];

  const benefits = [
    { icon: Clock, title: "95% de temps économisé", desc: "Automatisation complète de la veille" },
    { icon: Globe, title: "600+ sources surveillées", desc: "Coverage exhaustive du marché" },
    { icon: Award, title: "98% de précision IA", desc: "Analyse fine grâce aux modèles multi-LLM" },
    { icon: TrendingUp, title: "23 opportunités/jour", desc: "Détection intelligente des marchés premium" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-emerald-50/40">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200">
              Intelligence Artificielle • Marchés Publics
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Notre plateforme{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">
                IA complète
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Découvrez comment notre intelligence artificielle révolutionne la veille commerciale
              des marchés publics avec une précision et une rapidité inégalées.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-cta hover:shadow-glow text-white px-8 py-4 h-auto group">
                Essayer maintenant
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 h-auto border-2 border-primary text-primary hover:bg-primary hover:text-white">
                <BarChart3 className="w-5 h-5 mr-2" />
                Voir une démonstration
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Fonctionnalités{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">clés</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une suite complète d'outils IA pour transformer votre approche des marchés publics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
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
                        {feature.details.map((detail, i) => (
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

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Résultats{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">mesurables</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTAFooter 
        title="Prêt à transformer votre veille commerciale ?"
        subtitle="Rejoignez plus de 2000+ professionnels qui utilisent déjà notre IA"
        primaryButtonText="Commencer l'essai gratuit"
        secondaryButtonText="Planifier une démo"
      />
    </div>
  );
};

export default Produit;