import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, GraduationCap, Heart, Zap, ArrowRight, Users, TrendingUp } from "lucide-react";

export const SolutionsSection = () => {
  const solutions = [
    {
      icon: Building2,
      title: "Entreprises & ESN",
      description: "Développez votre portefeuille client public et identifiez les opportunités les plus rentables.",
      features: ["Marchés informatiques", "Formations & Conseil", "Services numériques"],
      stats: { metric: "+67%", label: "d'augmentation des réponses" },
      color: "bg-blue-500"
    },
    {
      icon: GraduationCap,
      title: "Organismes de Formation",
      description: "Trouvez les appels d'offres formation et développez votre activité avec les collectivités.",
      features: ["Formations professionnelles", "Marchés éducation", "Accompagnement RH"],
      stats: { metric: "2.4M€", label: "de marchés formation détectés" },
      color: "bg-green-500"
    },
    {
      icon: Heart,
      title: "Secteur Santé & Social",
      description: "Surveillez les marchés publics santé, médico-social et services à la personne.",
      features: ["Équipements médicaux", "Services de soins", "Accompagnement social"],
      stats: { metric: "+156", label: "opportunités par mois" },
      color: "bg-red-500"
    }
  ];

  const useCases = [
    {
      title: "Startup Tech",
      challenge: "Manque de visibilité sur les marchés publics",
      solution: "Détection automatique + scoring IA",
      result: "+300% d'opportunités identifiées"
    },
    {
      title: "PME Formation",
      challenge: "Veille manuelle chronophage",
      solution: "Alertes intelligentes personnalisées",
      result: "6h/semaine économisées"
    },
    {
      title: "Groupe ESN",
      challenge: "Concurrence accrue sur les gros marchés",
      solution: "Analyse de la concurrence + niches",
      result: "+2.1M€ de CA supplémentaire"
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 mb-6">
            Solutions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Adapté à{" "}
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
              votre secteur
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Que vous soyez une startup tech, un organisme de formation ou une ESN, 
            eligible.ai s'adapte à vos besoins spécifiques.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <Card key={index} className="group border-border/50 hover:border-primary/20 hover:shadow-luxury transition-all duration-300 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${solution.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{solution.stats.metric}</div>
                    <div className="text-xs text-muted-foreground">{solution.stats.label}</div>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {solution.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-6">
                  {solution.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full group-hover:bg-primary/5">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Use Cases */}
        <div className="bg-card rounded-3xl p-12 border border-border/50">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Cas d'usage clients</h3>
            <p className="text-lg text-muted-foreground">Comment nos clients transforment leur business</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-hero border border-border/30">
                <div className="mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary font-semibold">
                    {useCase.title}
                  </Badge>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="font-medium text-muted-foreground mb-1">Défi</div>
                    <div className="text-foreground">{useCase.challenge}</div>
                  </div>
                  <div>
                    <div className="font-medium text-muted-foreground mb-1">Solution</div>
                    <div className="text-foreground">{useCase.solution}</div>
                  </div>
                  <div className="pt-2 border-t border-border/50">
                    <div className="font-bold text-primary text-lg">{useCase.result}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof Numbers */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2000+</div>
              <div className="text-sm text-muted-foreground">Entreprises clientes</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15M€</div>
              <div className="text-sm text-muted-foreground">Marchés remportés</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">47%</div>
              <div className="text-sm text-muted-foreground">Taux de succès moyen</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">600+</div>
              <div className="text-sm text-muted-foreground">Sources surveillées</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};