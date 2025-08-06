import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import useEmblaCarousel from 'embla-carousel-react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Globe,
  Terminal,
  Code,
  CheckCircle,
  TrendingUp,
  Search,
  Filter,
  Settings,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Target,
  Award,
  Zap
} from "lucide-react";

const DashboardCarousel = ({ isPlaying, progress }: { isPlaying: boolean; progress: number }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const slides = [
    {
      title: "Veille d'appels d'offres",
      content: (
        <div className="h-full bg-gradient-to-br from-blue-50 to-purple-50 p-4">
          <div className="grid grid-cols-2 gap-4 h-full">
            {/* Left side - Features */}
            <div className="space-y-4">
              <div className="bg-blue-100 rounded-lg px-3 py-1 text-blue-800 text-xs font-medium w-fit">
                Flux d'opportunités
              </div>
              <h3 className="text-lg font-bold text-gray-800">
                Simplifiez votre veille d'appels d'offres
              </h3>
              <div className="space-y-3">
                {[
                  "Soyez avertis de tous les AO français et bientôt européens et privés",
                  "Captez les meilleurs appels d'offres sur plus de 50 plateformes",
                  "Collaborez avec votre équipe pour fluidifier la détection des AO"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right side - Dashboard */}
            <div className="bg-white rounded-xl shadow-lg p-4 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-gray-800">PLACE</span>
                </div>
                <Badge className="bg-blue-600 text-white text-lg font-bold px-3 py-1">
                  {isPlaying ? Math.floor(18 * (progress / 100)) : 18}
                </Badge>
              </div>
              <div className="text-xs text-gray-600 mb-2">opportunités identifiées</div>
              
              <Button className="w-full mb-4">
                + Créer mon flux
              </Button>
              
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">Statut</span>
                  <span className="text-green-600 font-medium">Ouvert</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Montant</span>
                  <span className="font-medium">&gt;80k</span>
                </div>
                <div className="text-gray-600">Critères</div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Analyse instantanée",
      content: (
        <div className="h-full bg-gradient-to-br from-green-50 to-blue-50 p-4">
          <div className="grid grid-cols-2 gap-4 h-full">
            {/* Left side */}
            <div className="space-y-4">
              <div className="bg-purple-100 rounded-lg px-3 py-1 text-purple-800 text-xs font-medium w-fit">
                Analyse instantanée
              </div>
              <h3 className="text-lg font-bold text-gray-800">
                Analysez vos appels d'offres en 3 clics
              </h3>
              <div className="space-y-3">
                {[
                  "Listez les informations nécessaires à l'analyse d'un marché",
                  "Identifiez les points d'attention et les points bloquants",
                  "Accédez directement aux passages pertinents du DCE"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right side - Analysis Dashboard */}
            <div className="bg-white rounded-xl shadow-lg p-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-800">Quels sont les critères de l'acheteur ?</span>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Critère prix : 20%</span>
                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                    <div className="w-3 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Critère qualité : 70%</span>
                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                    <div className="w-11 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Critère performance : 10%</span>
                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-3 space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-700">Y a-t-il des pénalités ?</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-700">Qui est le titulaire du marché ?</span>
                </div>
              </div>
              
              <input 
                type="text" 
                placeholder="Poser une question..." 
                className="w-full text-xs p-2 border rounded-lg"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Scoring et recommandations",
      content: (
        <div className="h-full bg-gradient-to-br from-purple-50 to-pink-50 p-4">
          <div className="grid grid-cols-2 gap-4 h-full">
            {/* Left side */}
            <div className="space-y-4">
              <div className="bg-orange-100 rounded-lg px-3 py-1 text-orange-800 text-xs font-medium w-fit">
                Scoring IA
              </div>
              <h3 className="text-lg font-bold text-gray-800">
                Évaluations et recommandations
              </h3>
              <div className="space-y-3">
                {[
                  "Score de pertinence basé sur vos critères",
                  "Analyse de la concurrence probable",
                  "Recommandations stratégiques personnalisées",
                  "Timeline optimisée pour la réponse"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right side - Scoring Dashboard */}
            <div className="bg-white rounded-xl shadow-lg p-4 space-y-4">
              <div className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <div className="w-16 h-16 rounded-full border-4 border-gray-200"></div>
                  <div 
                    className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-green-500 transition-all duration-1000"
                    style={{
                      clipPath: isPlaying ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
                      transform: 'rotate(-90deg)'
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-800">
                      {isPlaying ? Math.floor(92 * (progress / 100)) : 92}
                    </span>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-700 border-green-200">
                  Score: {isPlaying ? Math.floor(92 * (progress / 100)) : 92}/100
                </Badge>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-700">
                  Plateforme E-learning - Ministère
                </div>
                <div className="text-xs text-gray-600">
                  Budget: 2.4M€ • Échéance: 15 mars 2025
                </div>
              </div>
              
              <div className="space-y-2">
                {[
                  { label: "Expertise", value: 96, color: "green" },
                  { label: "Budget", value: 89, color: "blue" },
                  { label: "Concurrence", value: 85, color: "yellow" }
                ].map((criteria, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">{criteria.label}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-1.5 bg-gray-200 rounded-full">
                        <div 
                          className={`h-1.5 bg-${criteria.color}-500 rounded-full transition-all duration-1000`}
                          style={{ width: isPlaying ? `${criteria.value}%` : '0%' }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium text-gray-700 w-8">
                        {isPlaying ? criteria.value : 0}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    // Auto-scroll when playing
    if (isPlaying) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000);
      return () => clearInterval(interval);
    }

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, isPlaying]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="h-full relative">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 h-full">
              {slide.content}
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation buttons */}
      <Button
        variant="outline"
        size="sm"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 p-0 bg-white/80 hover:bg-white"
        onClick={scrollPrev}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 p-0 bg-white/80 hover:bg-white"
        onClick={scrollNext}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
      
      {/* Dots indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === selectedIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export const MacBookSimulation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Connexion multi-sources",
      component: "browser",
      duration: 4000,
    },
    {
      id: 2,
      title: "Extraction & Parsing",
      component: "terminal",
      duration: 5000,
    },
    {
      id: 3,
      title: "Analyse IA Multi-LLM",
      component: "vscode",
      duration: 6000,
    },
    {
      id: 4,
      title: "Scoring Algorithmique",
      component: "dashboard",
      duration: 4000,
    }
  ];

  const currentStepData = steps[currentStep];

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
  };

  const renderMacBookContent = () => {
    switch (currentStepData.component) {
      case "browser":
        return (
          <div className="h-full bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="bg-gray-100 border-b px-4 py-2 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 bg-white rounded-md px-3 py-1.5 text-sm text-gray-600 flex items-center gap-2 border">
                <Globe className="w-4 h-4" />
                https://app.eligibly.ai
                <div className="ml-auto text-green-600">🔒</div>
              </div>
            </div>
            
            <div className="p-4 space-y-4 h-full overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">B</span>
                    {isPlaying && (
                      <div className="absolute inset-0 bg-blue-400 rounded-lg animate-ping opacity-20"></div>
                    )}
                  </div>
                  <div>
                    <h1 className="text-lg font-bold text-gray-800">BOAMP</h1>
                    <p className="text-xs text-gray-600">Sources connectées</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-600 font-medium">Live</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "BOAMP", count: 234, color: "blue" },
                  { name: "Marchés Publics", count: 156, color: "purple" },
                  { name: "PLACE", count: 89, color: "green" },
                  { name: "AWS DUME", count: 67, color: "orange" }
                ].map((source, index) => (
                  <div 
                    key={index}
                    className="p-3 bg-white rounded-lg shadow-sm border hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-medium text-gray-600">{source.name}</div>
                        <div className="text-lg font-bold text-blue-600">
                          {isPlaying ? Math.floor(source.count * (progress / 100)) : source.count}
                        </div>
                      </div>
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className={`w-3 h-3 bg-blue-500 rounded-full ${isPlaying ? 'animate-pulse' : ''}`}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "terminal":
        return (
          <div className="h-full bg-black text-green-400 font-mono relative overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 text-sm">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <Terminal className="w-4 h-4 text-gray-400 ml-2" />
              <span className="text-gray-300">extraction-pipeline</span>
            </div>
            
            <div className="p-4 space-y-1 text-xs leading-relaxed">
              <div className="text-blue-400">$ npm run scrape-sources --parallel</div>
              
              {isPlaying && (
                <div className="space-y-1">
                  <div className="text-yellow-400">🔍 Initializing Puppeteer cluster (8 workers)...</div>
                  <div className="text-blue-400">🌐 Connecting to BOAMP API...</div>
                  <div className="text-purple-400">📄 Processing PDF documents (47 files)...</div>
                  <div className="text-pink-400">🧠 Starting AI content extraction...</div>
                  <div className="text-green-400">✅ Processed 547 documents successfully</div>
                </div>
              )}
              
              <div className="flex items-center">
                <span className="text-blue-400">$ </span>
                <div className="w-2 h-4 bg-green-400 ml-1 animate-pulse"></div>
              </div>
            </div>
          </div>
        );

      case "vscode":
        return (
          <div className="h-full bg-gray-900 text-white">
            <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 text-sm border-b border-gray-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <Code className="w-4 h-4 text-blue-400 ml-2" />
              <span className="text-gray-300">ai-multi-analyzer.ts</span>
            </div>
            
            <div className="p-4">
              <div className="space-y-1 text-sm font-mono">
                <div className="flex">
                  <div className="w-8 text-gray-500 text-right pr-2">1</div>
                  <div className="text-purple-400">// Analyse avec plusieurs modèles IA</div>
                </div>
                <div className="flex">
                  <div className="w-8 text-gray-500 text-right pr-2">2</div>
                  <div className="text-blue-400">const analyses = await Promise.all([</div>
                </div>
                <div className="flex">
                  <div className="w-8 text-gray-500 text-right pr-2">3</div>
                  <div className="text-gray-300">  // GPT-4 Turbo pour l'extraction</div>
                </div>
              </div>
            </div>
          </div>
        );

      case "dashboard":
        return <DashboardCarousel isPlaying={isPlaying} progress={progress} />;

      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4">Démonstration</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Processus automatisé en action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment notre IA analyse et évalue les opportunités de marchés publics en temps réel
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-0">
            {/* MacBook Frame */}
            <div className="bg-gray-200 rounded-t-xl p-6 pb-2">
              <div className="bg-gray-800 rounded-lg shadow-2xl transform perspective-1000 rotateX-5">
                {/* MacBook Top Bar */}
                <div className="bg-gray-700 rounded-t-lg px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <div className="w-4 h-3 bg-gray-600 rounded-sm"></div>
                    <span>100%</span>
                    <div className="w-6 h-3 bg-green-500 rounded-sm"></div>
                  </div>
                </div>

                {/* MacBook Screen */}
                <div className="h-96 bg-white rounded-b-lg overflow-auto relative">
                  {renderMacBookContent()}
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <Button
                    onClick={isPlaying ? pauseSimulation : startSimulation}
                    className="flex items-center gap-2"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    {isPlaying ? "Pause" : "Démarrer"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={resetSimulation}
                    className="flex items-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset
                  </Button>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  Étape {currentStep + 1}/{steps.length}: {currentStepData.title}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progression</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="w-full" />
              </div>

              {/* Step Indicators */}
              <div className="flex justify-between mt-6">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`flex flex-col items-center ${
                      index <= currentStep ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-2 ${
                        index < currentStep
                          ? 'bg-primary text-primary-foreground'
                          : index === currentStep
                          ? 'bg-primary/20 text-primary border-2 border-primary'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      {index < currentStep ? <CheckCircle className="w-4 h-4" /> : index + 1}
                    </div>
                    <span className="text-xs text-center max-w-16">{step.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};