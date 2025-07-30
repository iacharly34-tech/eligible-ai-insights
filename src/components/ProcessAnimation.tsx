import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Globe, 
  FileText, 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  Code, 
  Database,
  Zap,
  Target,
  BarChart3
} from "lucide-react";

export const ProcessAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Connexion BOAMP.org",
      description: "Notre bot se connecte automatiquement au portail officiel",
      icon: Globe,
      code: `// Connexion sécurisée BOAMP
await fetch('https://www.boamp.fr/api/v1/offres', {
  headers: { 'Authorization': 'Bearer ' + token }
});`,
      status: "Scanning 600+ sources...",
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Détection Nouveaux AO",
      description: "Identification des nouveaux appels d'offres publiés",
      icon: FileText,
      code: `// Extraction métadonnées
const offres = response.data.filter(offre => 
  offre.datePublication > lastScan &&
  offre.type === 'APPEL_OFFRES'
);`,
      status: "47 nouveaux AO détectés",
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Analyse IA du Contenu", 
      description: "Lecture complète et extraction des paramètres clés",
      icon: Brain,
      code: `// Analyse IA complète
const analysis = await ai.analyze({
  secteur: offre.secteur,
  budget: offre.montant, 
  criteres: offre.criteres,
  delais: offre.echeance
});`,
      status: "Analyzing content with AI...",
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "Scoring & Synthèse",
      description: "Génération du score de compatibilité et fiche synthèse",
      icon: Target,
      code: `// Score de matching
const score = calculateScore({
  expertise: 95,
  budget: 87,
  localisation: 92,
  concurrence: 78
}); // Result: 88% match`,
      status: "Score: 88% - Recommandé ✓",
      color: "bg-primary"
    }
  ];

  const processData = {
    title: "Formation Numérique - Ministère Éducation",
    budget: "2.4M€", 
    deadline: "15 mars 2025",
    score: 88,
    status: "Recommandé",
    criteria: {
      expertise: 95,
      budget: 87,
      location: 92,
      competition: 78
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setCurrentStep(current => {
              if (current >= steps.length - 1) {
                setIsPlaying(false);
                return 0;
              }
              return current + 1;
            });
            return 0;
          }
          return prev + 2;
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentStep, steps.length]);

  const startAnimation = () => {
    setCurrentStep(0);
    setProgress(0);
    setIsPlaying(true);
  };

  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 mb-6">
            <Code className="w-4 h-4 mr-2" />
            Technologie IA
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            De l'appel d'offre au{" "}
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
              score final
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Découvrez comment notre IA analyse automatiquement chaque appel d'offre 
            pour vous fournir un score de compatibilité précis en quelques secondes.
          </p>
          
          <Button 
            onClick={startAnimation} 
            variant="default" 
            size="lg"
            className="mb-12"
            disabled={isPlaying}
          >
            {isPlaying ? "Animation en cours..." : "Voir la démo"}
            <Zap className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Animation Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const isActive = index === currentStep;
              const isCompleted = index < currentStep || (index === currentStep && progress === 100);
              
              return (
                <Card 
                  key={step.id}
                  className={`transition-all duration-500 ${
                    isActive 
                      ? 'border-primary shadow-luxury scale-105' 
                      : isCompleted 
                        ? 'border-green-500/50 bg-green-50/50' 
                        : 'border-border/50 opacity-60'
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isActive ? 'scale-110 shadow-lg' : ''
                      }`}>
                        {isCompleted ? (
                          <CheckCircle className="w-6 h-6 text-white" />
                        ) : (
                          <step.icon className="w-6 h-6 text-white" />
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-foreground">{step.title}</h3>
                          <Badge variant="secondary" className="text-xs">
                            Étape {step.id}
                          </Badge>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-3">
                          {step.description}
                        </p>
                        
                        {isActive && (
                          <>
                            <Progress value={progress} className="mb-3" />
                            <div className="text-xs text-primary font-medium mb-3">
                              {step.status}
                            </div>
                          </>
                        )}
                        
                        <div className="bg-muted/30 rounded-lg p-3 font-mono text-xs overflow-hidden">
                          <code className="text-foreground/80">
                            {step.code}
                          </code>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Result Card */}
          <div className="space-y-6">
            <Card className="border-primary/20 shadow-luxury">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-foreground">Fiche Synthèse</h3>
                  <Badge className="bg-gradient-primary text-white">
                    Score: {processData.score}%
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{processData.title}</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Budget:</span>
                        <div className="font-semibold text-primary">{processData.budget}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Échéance:</span>
                        <div className="font-semibold text-foreground">{processData.deadline}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h5 className="font-medium text-foreground">Critères d'évaluation</h5>
                    {Object.entries(processData.criteria).map(([key, value]) => (
                      <div key={key} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground capitalize">
                            {key === 'expertise' ? 'Expertise' : 
                             key === 'budget' ? 'Budget' :
                             key === 'location' ? 'Localisation' : 'Concurrence'}
                          </span>
                          <span className="font-semibold">{value}%</span>
                        </div>
                        <Progress value={value} className="h-2" />
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-border/50">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                      processData.score >= 80 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      <Target className="w-4 h-4" />
                      {processData.status}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tech Stack */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Stack Technique
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Node.js + TypeScript</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>ML/AI Processing</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Web Scraping</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>Real-time APIs</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};