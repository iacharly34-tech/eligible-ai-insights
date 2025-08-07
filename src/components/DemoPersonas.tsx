import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { MobileDemoFlow } from "./MobileDemoFlow";
import { ProcessDemo } from "./ProcessDemo";
import { 
  UserCheck, 
  Target, 
  TrendingUp, 
  BookOpen,
  CheckCircle,
  ArrowRight,
  Play
} from "lucide-react";

interface Persona {
  id: string;
  title: string;
  icon: any;
  description: string;
  benefits: string[];
  actions: string[];
}

const personas: Persona[] = [
  {
    id: "acheteur",
    title: "Responsable des marchés publics / Acheteur public",
    icon: UserCheck,
    description: "Vous gérez les processus d'achat et de sélection des prestataires pour votre collectivité ou administration. Votre enjeu : identifier rapidement les entreprises les plus qualifiées et optimiser vos procédures.",
    benefits: [
      "Benchmarks automatisés des fournisseurs",
      "Analyse comparative des candidatures",
      "Optimisation des achats publics",
      "Conformité réglementaire garantie"
    ],
    actions: [
      "Sélectionne et qualifie les prestataires potentiels",
      "Publie et suit la présélection des appels d'offres",
      "Valide la conformité technique et administrative"
    ]
  },
  {
    id: "chef-projet",
    title: "Chef de projet / Pilote marché",
    icon: Target,
    description: "Vous coordonnez les projets d'achat public et pilotez les consultations. Votre défi : garantir la cohérence entre besoins métier et offres du marché tout en respectant les délais.",
    benefits: [
      "Vue d'ensemble consolidée de tous les marchés en cours",
      "Comparaison objective et automatisée des réponses",
      "Traçabilité complète des décisions et critères",
      "Optimisation des processus d'achat"
    ],
    actions: [
      "Compare et consolide les différentes réponses",
      "Valide l'adéquation offre/besoin métier",
      "Coordonne les équipes et respecte les échéances"
    ]
  },
  {
    id: "commercial",
    title: "Responsable commercial / Business Developer",
    icon: TrendingUp,
    description: "Vous développez le portefeuille clients de votre PME/ESN dans le secteur public. Votre objectif : détecter les opportunités les plus prometteuses et maximiser vos taux de réussite.",
    benefits: [
      "Détection automatique des AO compatibles",
      "Score de pertinence en temps réel",
      "Alertes personnalisées par secteur",
      "Historique et suivi des candidatures"
    ],
    actions: [
      "Filtre et surveille les opportunités par secteur",
      "Analyse la concurrence et les critères de sélection",
      "Propose une stratégie de réponse personnalisée"
    ]
  },
  {
    id: "consultant",
    title: "Consultant / Cabinet de conseil",
    icon: BookOpen,
    description: "Vous accompagnez vos clients dans leur stratégie de développement sur les marchés publics. Votre valeur ajoutée : l'expertise et la veille stratégique pour maximiser leurs succès.",
    benefits: [
      "Veille sectorielle exhaustive",
      "Analyse concurrentielle avancée",
      "Rapports automatisés pour clients",
      "Intelligence de marché en temps réel"
    ],
    actions: [
      "Effectue une veille marché complète et ciblée",
      "Prépare les réponses stratégiques optimisées",
      "Télécharge et analyse les DCE pertinents"
    ]
  }
];

export const DemoPersonas = () => {
  const [selectedPersona, setSelectedPersona] = useState<string>("acheteur");
  const isMobile = useIsMobile();

  const selectedPersonaData = personas.find(p => p.id === selectedPersona) || personas[0];
  const IconComponent = selectedPersonaData.icon;

  if (isMobile) {
    return (
      <div className="bg-gradient-to-br from-background to-muted">
        <MobileDemoFlow />
      </div>
    );
  }

  return (
    <section 
      id="demo" 
      className="py-16 px-4 bg-gradient-to-br from-slate-50 to-gray-100"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Démonstration produit
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Solutions par profil métier
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment Eligibly s'adapte à votre rôle dans l'écosystème des marchés publics
          </p>
        </div>

        {/* Navigation des personas */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {personas.map((persona) => {
              const PersonaIcon = persona.icon;
              const isSelected = selectedPersona === persona.id;
              
              return (
                <button
                  key={persona.id}
                  onClick={() => setSelectedPersona(persona.id)}
                  className={`p-4 rounded-2xl border-2 text-left transition-all duration-300 hover:scale-105 ${
                    isSelected 
                      ? 'border-primary bg-primary/5 shadow-lg' 
                      : 'border-border bg-card hover:border-primary/30'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                    }`}>
                      <PersonaIcon className="w-5 h-5" />
                    </div>
                    {isSelected && (
                      <CheckCircle className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <h3 className={`font-semibold text-sm leading-tight ${
                    isSelected ? 'text-primary' : 'text-foreground'
                  }`}>
                    {persona.title}
                  </h3>
                </button>
              );
            })}
          </div>
        </div>

        {/* Layout principal optimisé grand écran : Démo + Contenu contextualisé */}
        <div className="grid lg:grid-cols-5 gap-8 xl:gap-12 items-start">
          
          {/* Zone de démonstration - Colonne principale (3/5) */}
          <div className="order-2 lg:order-1 lg:col-span-3">
            <Card className="border-border shadow-card h-fit">
              <CardContent className="p-6 xl:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Démonstration interactive</h3>
                    <p className="text-muted-foreground">Scénario adapté à votre profil</p>
                  </div>
                </div>

                {/* Démo contextuelle intégrée */}
                <div className="bg-gradient-to-br from-muted/30 to-muted/50 rounded-xl p-4 xl:p-6 min-h-[400px] xl:min-h-[500px]">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-muted-foreground mb-2">
                      Processus optimisé pour :
                    </p>
                    <p className="font-semibold text-primary text-lg mb-4">
                      {selectedPersonaData.title}
                    </p>
                  </div>
                  
                  {/* Intégration ProcessDemo avec contexte */}
                  <div className="mb-6">
                    <ProcessDemo />
                  </div>
                  
                  {/* CTA contextualisé */}
                  <div className="text-center">
                    <Button 
                      size="lg"
                      onClick={() => {
                        const demoSection = document.getElementById('process-demo');
                        if (demoSection) {
                          demoSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="bg-primary text-white hover:bg-primary/90 font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Voir la démo complète
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contenu métier contextualisé - Colonne secondaire (2/5) */}
          <div className="order-1 lg:order-2 lg:col-span-2">
            <div className="space-y-6">
              {/* En-tête persona */}
              <Card className="border-border shadow-card">
                <CardContent className="p-4 xl:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground text-lg leading-tight">{selectedPersonaData.title}</h3>
                      <Badge variant="outline" className="mt-1 text-xs">Profil sélectionné</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {selectedPersonaData.description}
                  </p>
                </CardContent>
              </Card>

              {/* Bloc Bénéfices - Séparé visuellement */}
              <Card className="border-border shadow-card bg-success/5 border-success/20">
                <CardContent className="p-4 xl:p-6">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    Bénéfices clés pour votre métier
                  </h4>
                  <ul className="space-y-2">
                    {selectedPersonaData.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Bloc Actions - Séparé visuellement */}
              <Card className="border-border shadow-card bg-primary/5 border-primary/20">
                <CardContent className="p-4 xl:p-6">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Actions typiques dans Eligibly
                  </h4>
                  <ul className="space-y-2">
                    {selectedPersonaData.actions.map((action, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{action}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA global */}
        <div className="text-center mt-12">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Eligibly s'adapte à votre rôle
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Découvrez votre scénario métier personnalisé dans une démonstration adaptée à vos besoins spécifiques.
            </p>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 rounded-xl"
            >
              Planifier une démo personnalisée
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};