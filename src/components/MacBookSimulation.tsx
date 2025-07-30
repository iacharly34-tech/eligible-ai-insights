import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Wifi,
  Battery,
  Signal,
  Chrome,
  Terminal,
  Code,
  Database,
  Globe,
  FileText,
  Brain,
  Target,
  CheckCircle,
  AlertCircle,
  Clock
} from "lucide-react";

interface Step {
  id: number;
  title: string;
  component: "browser" | "terminal" | "vscode" | "dashboard";
  duration: number;
  content: any;
}

export const MacBookSimulation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const steps: Step[] = [
    {
      id: 1,
      title: "Connexion BOAMP.org",
      component: "browser",
      duration: 3000,
      content: {
        url: "https://www.boamp.fr/avis",
        status: "Connexion sécurisée...",
        results: "Scan de 647 nouvelles publications"
      }
    },
    {
      id: 2,
      title: "Extraction des données",
      component: "terminal",
      duration: 4000,
      content: {
        command: "npm run scrape-boamp",
        output: [
          "🔍 Scanning BOAMP database...",
          "📊 Found 47 new procurement notices",
          "⚡ Processing with Puppeteer...",
          "✅ Extraction completed: 47/47"
        ]
      }
    },
    {
      id: 3,
      title: "Analyse IA du contenu",
      component: "vscode",
      duration: 5000,
      content: {
        filename: "ai-analyzer.ts",
        code: `// Analyse avec GPT-4 Turbo
const analysis = await openai.chat.completions.create({
  model: "gpt-4-turbo",
  messages: [{
    role: "system", 
    content: "Extrait: secteur, budget, critères, géolocalisation"
  }, {
    role: "user",
    content: document.fullText
  }],
  temperature: 0.1
});

const result = JSON.parse(analysis.choices[0].message.content);
console.log("✅ Analysis completed:", result);`
      }
    },
    {
      id: 4,
      title: "Génération du score",
      component: "dashboard",
      duration: 3000,
      content: {
        title: "Formation E-learning - Ministère Éducation",
        score: 88,
        criteria: {
          expertise: 95,
          budget: 87,
          location: 92,
          competition: 78
        },
        recommendation: "🏆 Candidature fortement recommandée"
      }
    }
  ];

  const currentStepData = steps[currentStep];

  // Typing effect for code
  const typeCode = (code: string) => {
    setTypedText("");
    let i = 0;
    const interval = setInterval(() => {
      if (i <= code.length) {
        setTypedText(code.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
  };

  // Cursor blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Step progression
  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        if (currentStep < steps.length - 1) {
          setCurrentStep(prev => prev + 1);
          setProgress(0);
        } else {
          setIsPlaying(false);
          setProgress(100);
        }
      }, currentStepData.duration);

      return () => clearTimeout(timer);
    }
  }, [currentStep, isPlaying, currentStepData.duration]);

  // Progress update
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress(prev => {
          const increment = 100 / (currentStepData.duration / 100);
          return Math.min(prev + increment, 100);
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isPlaying, currentStepData.duration]);

  // Type code when in VS Code step
  useEffect(() => {
    if (currentStepData.component === "vscode" && isPlaying) {
      setTimeout(() => {
        typeCode(currentStepData.content.code);
      }, 500);
    }
  }, [currentStep, isPlaying, currentStepData]);

  const startSimulation = () => {
    setCurrentStep(0);
    setProgress(0);
    setIsPlaying(true);
  };

  const pauseSimulation = () => {
    setIsPlaying(false);
  };

  const resetSimulation = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
    setTypedText("");
  };

  const renderMacBookContent = () => {
    switch (currentStepData.component) {
      case "browser":
        return (
          <div className="h-full bg-white">
            {/* Browser Chrome */}
            <div className="bg-gray-100 border-b px-4 py-2 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 bg-white rounded-md px-3 py-1 text-sm text-gray-600 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                {currentStepData.content.url}
                <div className="ml-auto text-green-600">🔒</div>
              </div>
            </div>
            
            {/* BOAMP Content */}
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzAwNzNlNiIvPjx0ZXh0IHg9IjIwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkI8L3RleHQ+PC9zdmc+" alt="BOAMP" className="w-10 h-10" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">BOAMP</h1>
                  <p className="text-gray-600">Bulletin officiel des annonces de marchés publics</p>
                </div>
              </div>
              
              {isPlaying && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-blue-600">
                    <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    <span className="font-medium">{currentStepData.content.status}</span>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-gray-800">{currentStepData.content.results}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Sources: PLACE, AWS, BOAMP, Marchés-publics.info...
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case "terminal":
        return (
          <div className="h-full bg-black text-green-400 font-mono">
            {/* Terminal Header */}
            <div className="bg-gray-800 px-4 py-2 flex items-center gap-3 border-b border-gray-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-300 text-sm">eligible-ai — Terminal</span>
            </div>
            
            {/* Terminal Content */}
            <div className="p-4 space-y-2 text-sm">
              <div className="text-blue-400">eligible-ai@macbook:~$ {currentStepData.content.command}</div>
              {isPlaying && currentStepData.content.output.map((line: string, index: number) => (
                <div 
                  key={index} 
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 800}ms` }}
                >
                  {line}
                </div>
              ))}
              {isPlaying && (
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Process completed successfully</span>
                </div>
              )}
            </div>
          </div>
        );

      case "vscode":
        return (
          <div className="h-full bg-gray-900 text-white">
            {/* VS Code Header */}
            <div className="bg-gray-800 px-4 py-2 flex items-center gap-3 border-b border-gray-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Code className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">{currentStepData.content.filename}</span>
              </div>
            </div>
            
            {/* VS Code Content */}
            <div className="p-4 font-mono text-sm leading-relaxed">
              <div className="text-gray-500 mb-2">1</div>
              <pre className="text-green-400 whitespace-pre-wrap">
                {typedText}
                {showCursor && isPlaying && <span className="bg-white w-2 h-5 inline-block animate-pulse">|</span>}
              </pre>
              
              {progress > 80 && (
                <div className="mt-4 p-3 bg-green-900/20 border border-green-500/30 rounded">
                  <div className="flex items-center gap-2 text-green-400">
                    <CheckCircle className="w-4 h-4" />
                    <span>Analysis completed successfully</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case "dashboard":
        return (
          <div className="h-full bg-gradient-to-br from-purple-50 to-blue-50">
            {/* Dashboard Header */}
            <div className="bg-white border-b px-6 py-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-gray-800">eligible.ai Dashboard</h1>
                <p className="text-sm text-gray-600">Intelligence Analysis Results</p>
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="p-6 space-y-6">
              <Card className="border border-purple-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-800">{currentStepData.content.title}</h3>
                    <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg px-4 py-2">
                      {currentStepData.content.score}% Match
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <span className="text-gray-600 text-sm">Budget:</span>
                      <div className="font-bold text-purple-600 text-xl">2.4M€</div>
                    </div>
                    <div>
                      <span className="text-gray-600 text-sm">Deadline:</span>
                      <div className="font-bold text-gray-800">15 mars 2025</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {Object.entries(currentStepData.content.criteria).map(([key, value]: [string, number]) => (
                      <div key={key} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 capitalize">{key}</span>
                          <span className="font-semibold text-purple-600">{value}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: isPlaying ? `${value}%` : '0%' }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {progress > 70 && (
                    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
                      <div className="flex items-center gap-2 text-green-700 font-semibold">
                        <Target className="w-5 h-5" />
                        {currentStepData.content.recommendation}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 mb-6">
            <Play className="w-4 h-4 mr-2" />
            Simulation Live
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Regardez le processus{" "}
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
              en action
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Simulation en temps réel du workflow complet : de la connexion BOAMP 
            jusqu'à la génération du score final.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* MacBook Frame */}
          <div className="relative">
            {/* MacBook Body */}
            <div className="bg-gray-800 rounded-t-3xl p-4 shadow-2xl">
              {/* MacBook Screen */}
              <div className="bg-black rounded-2xl p-2">
                {/* Notch */}
                <div className="w-32 h-6 bg-black rounded-b-2xl mx-auto mb-2 relative">
                  <div className="absolute inset-x-4 top-2 h-1 bg-gray-800 rounded-full"></div>
                </div>
                
                {/* Screen Content */}
                <div className="bg-white rounded-xl overflow-hidden" style={{ height: '400px' }}>
                  {/* macOS Menu Bar */}
                  <div className="bg-gray-50 px-4 py-1 flex items-center justify-between text-xs border-b">
                    <div className="flex items-center gap-4">
                      <div className="font-semibold">🍎</div>
                      <div className="text-gray-600">Chrome</div>
                      <div className="text-gray-600">Terminal</div>
                      <div className="text-gray-600">VS Code</div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Wifi className="w-3 h-3" />
                      <Battery className="w-3 h-3" />
                      <span>14:32</span>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div style={{ height: 'calc(100% - 28px)' }}>
                    {renderMacBookContent()}
                  </div>
                </div>
              </div>
            </div>
            
            {/* MacBook Base */}
            <div className="bg-gray-700 h-4 rounded-b-3xl shadow-lg relative">
              <div className="absolute inset-x-8 top-1 h-2 bg-gray-600 rounded-full"></div>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-12 flex flex-col items-center gap-6">
            {/* Progress */}
            <div className="w-full max-w-2xl space-y-3">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-foreground">Étape {currentStep + 1}/4: {currentStepData.title}</span>
                <span className="text-primary">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-3" />
            </div>
            
            {/* Buttons */}
            <div className="flex gap-4">
              <Button 
                onClick={startSimulation} 
                disabled={isPlaying}
                variant="default"
                size="lg"
                className="flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                {isPlaying ? "En cours..." : "Démarrer la simulation"}
              </Button>
              
              <Button 
                onClick={pauseSimulation} 
                disabled={!isPlaying}
                variant="outline"
                size="lg"
              >
                <Pause className="w-5 h-5" />
              </Button>
              
              <Button 
                onClick={resetSimulation}
                variant="outline"
                size="lg"
              >
                <RotateCcw className="w-5 h-5" />
              </Button>
            </div>

            {/* Step Indicators */}
            <div className="flex gap-4 mt-6">
              {steps.map((step, index) => (
                <div 
                  key={step.id}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    index === currentStep 
                      ? 'bg-primary text-primary-foreground' 
                      : index < currentStep 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {index < currentStep ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : index === currentStep ? (
                    <Clock className="w-4 h-4 animate-spin" />
                  ) : (
                    <AlertCircle className="w-4 h-4" />
                  )}
                  <span className="text-sm font-medium">{step.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};