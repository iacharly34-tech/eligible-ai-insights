import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Users, 
  Mail, 
  Database, 
  Webhook, 
  Smartphone,
  ArrowRight,
  CheckCircle 
} from "lucide-react";

export const Integrations = () => {
  const integrations = [
    {
      name: "Slack",
      icon: MessageSquare,
      description: "Recevez des notifications instantanées dans vos channels Slack",
      category: "Communication",
      popular: true
    },
    {
      name: "Microsoft Teams",
      icon: Users,
      description: "Intégration native avec Teams pour vos équipes commerciales",
      category: "Communication",
      popular: true
    },
    {
      name: "Email",
      icon: Mail,
      description: "Alertes personnalisées par email avec résumés détaillés",
      category: "Notification",
      popular: false
    },
    {
      name: "CRM Salesforce",
      icon: Database,
      description: "Synchronisation automatique des opportunités dans Salesforce",
      category: "CRM",
      popular: true
    },
    {
      name: "HubSpot",
      icon: Database,
      description: "Création automatique de deals dans votre pipeline HubSpot",
      category: "CRM",
      popular: false
    },
    {
      name: "Webhooks",
      icon: Webhook,
      description: "Intégration personnalisée via API REST et webhooks",
      category: "Développeur",
      popular: false
    },
    {
      name: "Mobile Apps",
      icon: Smartphone,
      description: "Notifications push sur iOS et Android",
      category: "Mobile",
      popular: false
    }
  ];

  const benefits = [
    "Configuration en moins de 5 minutes",
    "Synchronisation bidirectionnelle",
    "Support 24/7 pour l'intégration",
    "API complète pour développeurs"
  ];

  return (
    <section id="integrations" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="text-accent border-accent">
            Intégrations
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Connectez eligible.ai à{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              vos outils favoris
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Intégrez seamlessly notre plateforme dans votre workflow existant 
            avec plus de 50 intégrations disponibles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Integrations Grid */}
          <div className="space-y-6">
            <div className="grid gap-4">
              {integrations.map((integration, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-card transition-all duration-300 hover:border-primary/20"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                          <integration.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold">{integration.name}</h3>
                            {integration.popular && (
                              <Badge variant="secondary" className="text-xs">
                                Populaire
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {integration.description}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Benefits & CTA */}
          <div className="space-y-8">
            <Card className="p-8 bg-gradient-subtle border-0">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl">
                  Intégration simplifiée
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-6">
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button variant="hero" className="w-full">
                    Voir toutes les intégrations
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card className="p-6 text-center">
              <div className="space-y-4">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">
                  Intégrations disponibles
                </div>
                <div className="text-xs text-muted-foreground">
                  Nouvelles intégrations ajoutées chaque mois
                </div>
              </div>
            </Card>

            {/* Developer Card */}
            <Card className="p-6 bg-secondary/20">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg">Pour les développeurs</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-sm text-muted-foreground mb-4">
                  API REST complète avec documentation OpenAPI et SDKs disponibles.
                </p>
                <Button variant="outline" size="sm">
                  Documentation API
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};