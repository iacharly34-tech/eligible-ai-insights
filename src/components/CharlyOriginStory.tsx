import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Lightbulb,
  Target,
  Users,
  Zap,
  Brain,
  ArrowRight
} from "lucide-react";

export const CharlyOriginStory = () => {
  const storySteps = [
    {
      icon: Target,
      title: "Le constat",
      description: "Chez Eligibly, nous avons observé que les entreprises perdaient un temps considérable à analyser des appels d'offres inadaptés à leur profil.",
      detail: "Nos études montrent que 70% du temps commercial est gaspillé sur des opportunités sans potentiel."
    },
    {
      icon: Lightbulb,
      title: "L'innovation",
      description: "Notre équipe d'experts en IA et marchés publics a développé des algorithmes prédictifs révolutionnaires.",
      detail: "2 ans de R&D pour créer la première IA capable de prédire vos chances de succès."
    },
    {
      icon: Brain,
      title: "La naissance de Charly",
      description: "Nous avons donné vie à cette intelligence en créant Charly, votre assistant personnel qui comprend vos besoins.",
      detail: "Un assistant qui apprend de votre secteur, votre historique et vos préférences."
    },
    {
      icon: Zap,
      title: "La mission",
      description: "Charly by Eligibly transforme chaque analyse en opportunité, chaque veille en succès commercial.",
      detail: "Notre objectif : multiplier par 3 votre efficacité sur les marchés publics."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200">
            L'histoire de Charly
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comment Eligibly a{" "}
            <span className="bg-gradient-highlight bg-clip-text text-transparent">
              créé Charly
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez pourquoi et comment notre équipe chez Eligibly a développé 
            l'assistant IA le plus avancé pour les marchés publics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              La vision d'Eligibly
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              En tant qu'experts des marchés publics et de l'intelligence artificielle, 
              nous chez Eligibly avons voulu créer plus qu'un simple outil.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong>Charly représente notre engagement</strong> : mettre l'IA la plus avancée 
              au service de votre réussite commerciale, avec la simplicité d'interaction 
              d'un véritable partenaire de confiance.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white text-center">
              <Users className="w-16 h-16 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-3">L'ADN Eligibly dans Charly</h4>
              <p className="text-blue-100">
                Chaque interaction avec Charly reflète notre expertise : 
                précision technique, compréhension métier et innovation continue.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {storySteps.map((step, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-1 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="md:col-span-8">
                    <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      {step.description}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {step.detail}
                    </p>
                  </div>
                  
                  <div className="md:col-span-3 flex justify-center">
                    {index < storySteps.length - 1 && (
                      <ArrowRight className="w-8 h-8 text-muted-foreground/50 group-hover:text-primary transition-colors hidden md:block" />
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-4">
              Charly by Eligibly : Votre avantage concurrentiel
            </h4>
            <p className="text-lg text-blue-100 leading-relaxed">
              Derrière chaque recommandation de Charly, il y a l'expertise d'Eligibly : 
              nos algorithmes propriétaires, notre connaissance du marché et notre engagement 
              à transformer votre performance commerciale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};