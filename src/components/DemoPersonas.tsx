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
      className="py-12 px-4 bg-gradient-subtle min-h-screen flex items-center"
    >
      <div className="container mx-auto max-w-7xl w-full">
        {/* Header Section - Compact */}
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 font-medium">
            Démonstration produit
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Solutions par profil métier
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment Eligibly s'adapte à votre rôle dans l'écosystème des marchés publics
          </p>
        </div>

        {/* Persona Navigation - Compact */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {personas.map((persona) => {
              const PersonaIcon = persona.icon;
              const isSelected = selectedPersona === persona.id;
              
              return (
                <button
                  key={persona.id}
                  onClick={() => setSelectedPersona(persona.id)}
                  className={`group p-4 rounded-xl border-2 text-left transition-all duration-300 transform hover:scale-105 ${
                    isSelected 
                      ? 'border-primary bg-gradient-to-br from-primary/5 to-primary/10 shadow-glow' 
                      : 'border-border bg-card hover:border-primary/30 hover:bg-primary/5'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isSelected ? 'bg-primary text-white' : 'bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary'
                    }`}>
                      <PersonaIcon className="w-5 h-5" />
                    </div>
                    {isSelected && (
                      <CheckCircle className="w-5 h-5 text-primary animate-scale-in" />
                    )}
                  </div>
                  <h3 className={`font-semibold text-xs leading-tight transition-colors duration-300 ${
                    isSelected ? 'text-primary' : 'text-foreground group-hover:text-primary'
                  }`}>
                    {persona.title}
                  </h3>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Demo Layout - Optimized for Above the Fold */}
        <div className="grid lg:grid-cols-5 gap-8 items-start h-[calc(100vh-400px)] min-h-[600px]">
          
          {/* Demo Section - Main Column (3/5) */}
          <div className="lg:col-span-3 h-full">
            <Card className="border-border shadow-elegant bg-card/50 backdrop-blur-sm h-full">
              <CardContent className="p-6 h-full flex flex-col">
                {/* Demo Header - Compact */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">Démonstration interactive</h3>
                    <p className="text-sm text-muted-foreground">Scénario adapté : {selectedPersonaData.title}</p>
                  </div>
                </div>
                
                {/* Integrated ProcessDemo - Full Height */}
                <div className="flex-1 bg-gradient-to-br from-muted/20 to-muted/30 rounded-xl p-6 overflow-hidden">
                  <ProcessDemo />
                </div>
                
                {/* CTA Button - Compact */}
                <div className="text-center mt-4">
                  <Button 
                    size="sm"
                    onClick={() => {
                      const demoSection = document.getElementById('process-demo');
                      if (demoSection) {
                        demoSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="bg-gradient-primary text-white hover:shadow-glow font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Voir la démo complète
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Persona Content - Side Column (2/5) */}
          <div className="lg:col-span-2 h-full">
            <div className="h-full flex flex-col space-y-4">
              {/* Persona Header - Compact */}
              <Card className="border-border shadow-card bg-card/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground text-sm leading-tight">{selectedPersonaData.title}</h3>
                      <Badge variant="outline" className="mt-1 text-xs border-primary/30 text-primary">Profil sélectionné</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {selectedPersonaData.description}
                  </p>
                </CardContent>
              </Card>

              {/* Horizontal Layout for Benefits & Actions */}
              <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-4 flex-1">
                {/* Benefits Block */}
                <Card className="border-success/30 shadow-card bg-gradient-to-br from-success/5 to-success/10">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-success" />
                      Bénéfices clés
                    </h4>
                    <ul className="space-y-2">
                      {selectedPersonaData.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-success rounded-full mt-1.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-xs leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Actions Block */}
                <Card className="border-primary/30 shadow-card bg-gradient-to-br from-primary/5 to-primary/10">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-sm">
                      <Target className="w-4 h-4 text-primary" />
                      Actions dans Eligibly
                    </h4>
                    <ul className="space-y-2">
                      {selectedPersonaData.actions.map((action, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <ArrowRight className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground text-xs leading-relaxed">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Global CTA - Compact */}
        <div className="text-center mt-8">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white shadow-luxury">
            <h3 className="text-2xl font-bold mb-4">
              Eligibly s'adapte à votre rôle
            </h3>
            <p className="text-white/90 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
              Découvrez votre scénario métier personnalisé dans une démonstration adaptée à vos besoins spécifiques.
            </p>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:shadow-glow font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Planifier une démo personnalisée
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};