import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Zap, Users, Crown, Star } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "49",
      period: "/mois",
      description: "Parfait pour les petites entreprises qui débutent",
      badge: null,
      features: [
        "Jusqu'à 50 alertes/mois",
        "3 secteurs de surveillance",
        "Scoring IA basique",
        "Support email",
        "Tableau de bord simple",
        "Alertes par email"
      ],
      cta: "Commencer maintenant",
      variant: "outline" as const,
      popular: false
    },
    {
      name: "Professional",
      price: "149", 
      period: "/mois",
      description: "Pour les entreprises en croissance",
      badge: "Le plus populaire",
      features: [
        "Alertes illimitées",
        "Tous secteurs surveillés",
        "Scoring IA avancé + analyse concurrence",
        "Support prioritaire",
        "Tableau de bord complet",
        "Alertes Slack/Teams/Email",
        "Intégrations CRM",
        "Rapports personnalisés",
        "API disponible"
      ],
      cta: "Essayer 14 jours",
      variant: "default" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "Sur mesure",
      period: "",
      description: "Solution personnalisée pour les grandes organisations",
      badge: "Premium",
      features: [
        "Volume personnalisé",
        "Surveillance sur mesure",
        "IA personnalisée + machine learning",
        "Account manager dédié",
        "Tableaux de bord personnalisés",
        "Intégrations complètes",
        "Formation équipe",
        "SLA garanti",
        "Déploiement on-premise possible"
      ],
      cta: "Nous contacter",
      variant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 mb-6">
            Tarifs
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Un prix{" "}
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
              adapté à vos besoins
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Commencez dès aujourd'hui et évoluez selon vos besoins. 
            Tous les plans incluent un essai de 14 jours.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'border-2 border-primary shadow-luxury scale-105' : 'border-border/50'} hover:shadow-luxury transition-all duration-300`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-white px-4 py-1 shadow-lg">
                    <Star className="w-3 h-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                {plan.popular && (
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                )}
                
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1 my-4">
                  <span className="text-5xl font-bold text-primary">{plan.price.includes('€') ? plan.price : `${plan.price}€`}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <Button 
                  variant={plan.variant} 
                  className="w-full h-12 text-base font-semibold"
                  size="lg"
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                
                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Pricing */}
        <div className="bg-gradient-hero rounded-3xl p-12 border border-border/50">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Questions fréquentes</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Puis-je changer de plan à tout moment ?</h4>
              <p className="text-sm text-muted-foreground">Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. Les changements prennent effet immédiatement.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Y a-t-il des frais de setup ?</h4>
              <p className="text-sm text-muted-foreground">Aucun frais de setup. Vous ne payez que votre abonnement mensuel, sans engagement.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Que se passe-t-il après l'essai ?</h4>
              <p className="text-sm text-muted-foreground">Vous pouvez continuer avec un plan payant ou revenir à un plan d'entrée limité. Aucune carte bancaire requise pour l'essai.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Support technique inclus ?</h4>
              <p className="text-sm text-muted-foreground">Oui, tous les plans incluent le support. Le plan Pro+ bénéficie d'un support prioritaire.</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-card rounded-2xl p-6 shadow-card border border-border/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">14 jours</div>
              <div className="text-sm text-muted-foreground">Essai</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">0€</div>
              <div className="text-sm text-muted-foreground">Frais de setup</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support inclus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};