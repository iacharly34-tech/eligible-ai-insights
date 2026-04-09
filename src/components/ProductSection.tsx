import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Bell, Target, BarChart3, Shield, ArrowRight, CheckCircle } from "lucide-react";

export const ProductSection = () => {
  const features = [
    {
      icon: Brain,
      title: "IA Avancée",
      description: "Algorithmes propriétaires pour scorer et analyser chaque appel d'offre automatiquement.",
      badge: "IA",
      benefits: ["Scoring précis à 98%", "Analyse en temps réel", "Apprentissage continu"]
    },
    {
      icon: Zap,
      title: "Détection Automatique", 
      description: "Surveillance continue de +600 sources d'appels d'offres publics en France.",
      badge: "Auto",
      benefits: ["600+ sources surveillées", "Mise à jour temps réel", "Couverture nationale"]
    },
    {
      icon: Bell,
      title: "Alertes Intelligentes",
      description: "Notifications personnalisées sur vos canaux préférés dès qu'une opportunité apparaît.",
      badge: "Smart",
      benefits: ["Slack, Teams, Email", "Filtres personnalisés", "Alertes en 15min"]
    }
  ];

  return (
    <section id="product" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 mb-6">
            Produit
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Une plateforme{" "}
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
              tout-en-un
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            De la détection à l'analyse, eligibly.ai automatise votre veille commerciale 
            et vous aide à identifier les meilleures opportunités de marchés publics.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="group border-border/50 hover:border-primary/20 hover:shadow-luxury transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Flow */}
        <div className="bg-gradient-hero rounded-3xl p-12 border border-border/50">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Le cycle complet des marchés publics</h3>
            <p className="text-lg text-muted-foreground">De la détection à la victoire en 6 étapes</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { step: "01", title: "Détecter", desc: "Veille automatique sur 200+ sources" },
              { step: "02", title: "Analyser", desc: "Analyse DCE et extraction des exigences" },
              { step: "03", title: "Décider", desc: "Go/No-Go assisté avec scoring prédictif" },
              { step: "04", title: "Rédiger", desc: "Mémoire technique généré par IA (RAG)" },
              { step: "05", title: "Vérifier", desc: "Conformité et matrice de traçabilité" },
              { step: "06", title: "Gagner", desc: "Suivi performance et optimisation" }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm mb-3 mx-auto shadow-lg">
                  {item.step}
                </div>
                <h4 className="font-semibold text-foreground mb-1 text-sm">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
                {index < 5 && (
                  <ArrowRight className="hidden lg:block absolute top-5 -right-3 w-5 h-5 text-primary/50" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};