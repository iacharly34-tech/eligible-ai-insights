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
      className="py-20 px-4 bg-gradient-subtle"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 font-medium">
            Démonstration produit
          </Badge>
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            Solutions par profil métier
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez comment Eligibly s'adapte à votre rôle dans l'écosystème des marchés publics
          </p>
        </div>

        {/* Persona Navigation */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {personas.map((persona) => {
              const PersonaIcon = persona.icon;
              const isSelected = selectedPersona === persona.id;
              
              return (
                <button
                  key={persona.id}
                  onClick={() => setSelectedPersona(persona.id)}
                  className={`group p-6 rounded-2xl border-2 text-left transition-all duration-300 transform hover:scale-105 hover:shadow-glow ${
                    isSelected 
                      ? 'border-primary bg-gradient-to-br from-primary/5 to-primary/10 shadow-glow' 
                      : 'border-border bg-card hover:border-primary/30 hover:bg-primary/5'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isSelected ? 'bg-primary text-white shadow-glow' : 'bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary'
                    }`}>
                      <PersonaIcon className="w-6 h-6" />
                    </div>
                    {isSelected && (
                      <CheckCircle className="w-6 h-6 text-primary animate-scale-in" />
                    )}
                  </div>
                  <h3 className={`font-semibold text-sm leading-tight transition-colors duration-300 ${
                    isSelected ? 'text-primary' : 'text-foreground group-hover:text-primary'
                  }`}>
                    {persona.title}
                  </h3>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Demo Layout - Optimized for Large Screens */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* Demo Section - Main Column (2/3) */}
          <div className="lg:col-span-2">
            <Card className="border-border shadow-elegant bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                {/* Demo Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                    <Play className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Démonstration interactive</h3>
                    <p className="text-muted-foreground">Scénario adapté à votre profil métier</p>
                  </div>
                </div>

                {/* Persona Context */}
                <div className="mb-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Processus optimisé pour :</p>
                      <p className="font-semibold text-primary text-lg">{selectedPersonaData.title}</p>
                    </div>
                  </div>
                </div>
                
                {/* Integrated ProcessDemo */}
                <div className="bg-gradient-to-br from-muted/20 to-muted/30 rounded-2xl p-8 min-h-[600px]">
                  <ProcessDemo />
                </div>
                
                {/* CTA Button */}
                <div className="text-center mt-8">
                  <Button 
                    size="lg"
                    onClick={() => {
                      const demoSection = document.getElementById('process-demo');
                      if (demoSection) {
                        demoSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="bg-gradient-primary text-white hover:shadow-glow font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Voir la démo complète
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Persona Content - Side Column (1/3) */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-8">
              {/* Persona Header */}
              <Card className="border-border shadow-card bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground text-lg leading-tight">{selectedPersonaData.title}</h3>
                      <Badge variant="outline" className="mt-2 text-xs border-primary/30 text-primary">Profil sélectionné</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {selectedPersonaData.description}
                  </p>
                </CardContent>
              </Card>

              {/* Benefits Block */}
              <Card className="border-success/30 shadow-card bg-gradient-to-br from-success/5 to-success/10">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    Bénéfices clés
                  </h4>
                  <ul className="space-y-3">
                    {selectedPersonaData.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Actions Block */}
              <Card className="border-primary/30 shadow-card bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-3">
                    <Target className="w-5 h-5 text-primary" />
                    Actions dans Eligibly
                  </h4>
                  <ul className="space-y-3">
                    {selectedPersonaData.actions.map((action, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">{action}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Global CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-primary rounded-3xl p-12 text-white shadow-luxury">
            <h3 className="text-3xl font-bold mb-6">
              Eligibly s'adapte à votre rôle
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Découvrez votre scénario métier personnalisé dans une démonstration adaptée à vos besoins spécifiques.
            </p>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:shadow-glow font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Planifier une démo personnalisée
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};