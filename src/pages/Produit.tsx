import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTAFooter } from "@/components/CTAFooter";
import { 
  ArrowRight,
  CheckCircle,
  BarChart3
} from "lucide-react";
import aiAssistantMain from "@/assets/ai-assistant-main.jpg";
import { CORE_FEATURES, MEASURABLE_BENEFITS, HERO_MESSAGES, STANDARD_CTAS, COMPANY_STATS } from "@/data/constants";

const Produit = () => {
  // Spécialisation : Fonctionnalités techniques détaillées uniquement
  const technicalFeatures = CORE_FEATURES.map(feature => ({
    ...feature,
    // Ajout de détails techniques spécifiques pour la page Produit
    technicalDetails: feature.details,
    integrations: feature.color === 'orange' ? ['Slack', 'Microsoft Teams', 'Email', 'Webhooks'] : [],
    apiAccess: feature.color === 'blue' ? true : false
  }));

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
              {HERO_MESSAGES.product.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {HERO_MESSAGES.product.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4 h-auto group">
                {STANDARD_CTAS.primary.text}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 h-auto">
                <BarChart3 className="w-5 h-5 mr-2" />
                {STANDARD_CTAS.demo.text}
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
        title="Prêt à tester notre technologie ?"
        subtitle={`Rejoignez plus de ${COMPANY_STATS.clients} professionnels qui utilisent déjà notre IA`}
        primaryButtonText={STANDARD_CTAS.primary.text}
        secondaryButtonText={STANDARD_CTAS.secondary.text}
      />
    </div>
  );
};

export default Produit;