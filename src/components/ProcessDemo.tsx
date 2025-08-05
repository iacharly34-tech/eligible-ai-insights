import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Play, 
  RotateCcw, 
  Globe,
  CheckCircle
} from "lucide-react";

export const ProcessDemo = () => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [sourceData, setSourceData] = useState({
    boamp: 234,
    marchesPublics: 156,
    place: 89,
    awsDume: 67
  });

  const steps = [
    {
      id: 1,
      title: "Connexion multi-sources",
      description: "Collecte automatique depuis toutes les plateformes officielles",
      isActive: false
    },
    {
      id: 2,
      title: "Extraction & Parsing",
      description: "Analyse et structuration des données d'appels d'offres",
      isActive: false
    },
    {
      id: 3,
      title: "Analyse IA Multi-LLM",
      description: "Intelligence artificielle prédictive pour évaluer la compatibilité",
      isActive: false
    },
    {
      id: 4,
      title: "Scoring Algorithmique",
      description: "Attribution d'un score de chance de réussite personnalisé",
      isActive: false
    }
  ];

  
  // Auto-scroll to demo section if hash is present
  useEffect(() => {
    if (window.location.hash === '#demo') {
      setTimeout(() => {
        document.getElementById('demo')?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  }, []);

  const resetDemo = () => {
    setCurrentStep(0);
    setIsRunning(false);
    setProgress(0);
    setSourceData({
      boamp: 234,
      marchesPublics: 156,
      place: 89,
      awsDume: 67
    });
  };

  const startDemo = () => {
    if (isRunning) return;
    
    setIsRunning(true);
    setCurrentStep(1);
    setProgress(0);

    // Simulate the 4-step process
    const stepDuration = 2000; // 2 seconds per step
    
    const runStep = (stepIndex: number) => {
      if (stepIndex > 4) {
        setIsRunning(false);
        return;
      }

      setCurrentStep(stepIndex);
      
      // Animate progress for current step
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          const newProgress = (stepIndex - 1) * 25 + (prev % 25) + 2;
          if (newProgress >= stepIndex * 25) {
            clearInterval(progressInterval);
            setTimeout(() => runStep(stepIndex + 1), 300);
            return stepIndex * 25;
          }
          return newProgress;
        });
      }, 100);

      // Simulate data changes during processing
      if (stepIndex === 1) {
        // Connexion - data flows in
        setTimeout(() => {
          setSourceData(prev => ({
            ...prev,
            boamp: prev.boamp + Math.floor(Math.random() * 10),
            marchesPublics: prev.marchesPublics + Math.floor(Math.random() * 8)
          }));
        }, 1000);
      }
    };

    runStep(1);
  };

  return (
    <section id="demo" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
            Démonstration
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Processus automatisé en action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment notre IA analyse et évalue les opportunités de marchés publics en temps réel
          </p>
        </div>

        {/* Main Demo Interface */}
        <div className="mb-8">
          <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              {/* Browser Header */}
              <div className="flex items-center gap-2 mb-6 p-4 bg-slate-800 rounded-t-lg">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/10 rounded px-3 py-1 text-white text-sm flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    https://www.boamp.fr/avis
                  </div>
                </div>
                <div className="text-white text-sm">100%</div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>

              {/* BOAMP Interface Simulation */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                    B
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">BOAMP</h3>
                    <p className="text-sm text-gray-600">Sources connectées</p>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600 font-medium">Live</span>
                  </div>
                </div>

                {/* Data Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">BOAMP</span>
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">{sourceData.boamp}</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Marchés Publics</span>
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">{sourceData.marchesPublics}</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">PLACE</span>
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">{sourceData.place}</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">AWS DUME</span>
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">{sourceData.awsDume}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            onClick={startDemo}
            disabled={isRunning}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 h-auto"
          >
            <Play className="w-5 h-5 mr-2" />
            {isRunning ? "En cours..." : "Démarrer"}
          </Button>
          
          <Button
            onClick={resetDemo}
            variant="outline"
            className="px-8 py-3 h-auto"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Reset
          </Button>
        </div>

        {/* Progress Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-600">Progression</span>
            <span className="text-sm font-medium text-gray-600">{Math.round(progress)}%</span>
          </div>
          
          <Progress value={progress} className="mb-8" />

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`text-center transition-all duration-500 ${
                  currentStep >= step.id 
                    ? 'opacity-100' 
                    : 'opacity-40'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-500 ${
                  currentStep >= step.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-400'
                }`}>
                  {currentStep > step.id ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    step.id
                  )}
                </div>
                <h4 className="font-semibold text-sm mb-2">{step.title}</h4>
                <p className="text-xs text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Current Step Info */}
          {currentStep > 0 && (
            <div className="mt-8 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="text-center">
                <Badge className="bg-purple-100 text-purple-700 mb-2">
                  Étape {currentStep}/4: {steps[currentStep - 1]?.title}
                </Badge>
                <p className="text-sm text-purple-700">
                  {steps[currentStep - 1]?.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};