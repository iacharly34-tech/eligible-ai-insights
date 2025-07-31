import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Bell, Target, BarChart3, Shield } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Scoring IA Avancé",
      description: "Notre intelligence artificielle analyse chaque appel d'offre selon vos critères spécifiques et attribue un score de compatibilité précis.",
      badge: "IA",
      color: "bg-primary"
    },
    {
      icon: Zap,
      title: "Détection Automatique",
      description: "Surveillance continue des plateformes d'appels d'offres publics pour identifier instantanément les nouvelles opportunités.",
      badge: "Auto",
      color: "bg-accent"
    },
    {
      icon: Bell,
      title: "Alertes Intelligentes",
      description: "Recevez des notifications personnalisées sur Slack, Teams, ou par email dès qu'une opportunité correspond à vos critères.",
      badge: "Temps réel",
      color: "bg-success"
    },
    {
      icon: Target,
      title: "Ciblage Précis",
      description: "Filtrez les appels d'offres par secteur, montant, localisation et autres critères pour maximiser vos chances de succès.",
      badge: "Précision",
      color: "bg-warning"
    },
    {
      icon: BarChart3,
      title: "Analytics Complets",
      description: "Tableaux de bord détaillés avec métriques de performance, taux de succès et analyse de la concurrence.",
      badge: "Insights",
      color: "bg-secondary"
    },
    {
      icon: Shield,
      title: "Conformité Assurée",
      description: "Vérification automatique des critères d'éligibilité et de conformité pour éviter les erreurs coûteuses.",
      badge: "Sécurisé",
      color: "bg-destructive"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="text-primary border-primary">
            Fonctionnalités
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            La plateforme préférée des{" "}
            <span className="text-primary">
              répondants
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des centaines d'experts des marchés publics utilisent eligibly.ai au quotidien pour détecter, analyser et répondre aux appels d'offres.
          </p>
        </div>

        {/* Tengo-style Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">+600</div>
            <div className="text-lg font-medium">Appels d'offres</div>
            <div className="text-muted-foreground">remontés chaque jour</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">10x</div>
            <div className="text-lg font-medium">Plus rapide</div>
            <div className="text-muted-foreground">pour analyser un marché</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">+50000</div>
            <div className="text-lg font-medium">Renouvellements</div>
            <div className="text-muted-foreground">de marchés détectés</div>
          </div>
        </div>

        <div className="text-center mb-16 space-y-4">
          <h3 className="text-2xl font-bold">Flux d'opportunités</h3>
          <h4 className="text-xl text-primary font-semibold">Simplifiez votre veille</h4>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 border bg-white shadow-card"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white rounded-2xl p-8 shadow-card">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Sources surveillées</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">99.9%</div>
              <div className="text-sm text-muted-foreground">Disponibilité</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-success">15min</div>
              <div className="text-sm text-muted-foreground">Délai moyen d'alerte</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};