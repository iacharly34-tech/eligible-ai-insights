import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { AOResults } from "./AOResults";
import charlyNoBg from "@/assets/ai-character-tech-male.png";
import { 
  Play, 
  RotateCcw, 
  Globe,
  CheckCircle,
  Terminal
} from "lucide-react";

export const ProcessDemo = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [currentStep, setCurrentStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [sourceData, setSourceData] = useState({
    boamp: 241,
    marchesPublics: 163,
    place: 89,
    awsDume: 67
  });
  const [codeLines, setCodeLines] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showExpandedResults, setShowExpandedResults] = useState(false);
  const [mobileActiveScreen, setMobileActiveScreen] = useState<'initial' | 'step1' | 'step2' | 'step3' | 'step4' | 'results'>('initial');

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
    setTimeElapsed(0);
    setSourceData({
      boamp: 241,
      marchesPublics: 163,
      place: 89,
      awsDume: 67
    });
    setCodeLines([]);
    setShowResults(false);
    setShowExpandedResults(false);
    setMobileActiveScreen('initial');
  };

  const startDemo = () => {
    if (isRunning) return;
    
    resetDemo();
    setIsRunning(true);
    setProgress(0);
    
    // Étape 1: Connexion multi-sources (0-2.5s)
    setTimeout(() => {
      setCurrentStep(1);
      if (isMobile) setMobileActiveScreen('step1');
      
      // Animation du code JavaScript
      const codeStep1 = [
        "// Connexion aux sources",
        "const sources = ['BOAMP', 'MarchesPublics', 'PLACE'];",
        "for (let source of sources) {",
        "  await connect(source);",
        "  console.log(`Connecté à ${source}`);",
        "}"
      ];
      
      codeStep1.forEach((line, i) => {
        setTimeout(() => {
          setCodeLines(prev => [...prev, line]);
        }, i * 300);
      });
      
      // Animation croissante des données
      const step1Interval = setInterval(() => {
        setSourceData(prev => ({
          ...prev,
          boamp: Math.min(prev.boamp + Math.floor(Math.random() * 3) + 1, 250),
          marchesPublics: Math.min(prev.marchesPublics + Math.floor(Math.random() * 2) + 1, 170)
        }));
      }, 200);
      
      setTimeout(() => clearInterval(step1Interval), 2000);
    }, 100);

    // Étape 2: Extraction & Parsing (2.5-5s)
    setTimeout(() => {
      setCurrentStep(2);
      if (isMobile) setMobileActiveScreen('step2');
      
      // Animation du code d'extraction
      const codeStep2 = [
        "",
        "// Extraction des données",
        "const extractedData = await extractAOData(sources);",
        "const parsedAO = await parseStructuredData(extractedData);",
        "console.log(`${parsedAO.length} AO extraits`);",
        ""
      ];
      
      codeStep2.forEach((line, i) => {
        setTimeout(() => {
          setCodeLines(prev => [...prev, line]);
        }, i * 400);
      });
      
      const step2Interval = setInterval(() => {
        setSourceData(prev => ({
          ...prev,
          place: Math.min(prev.place + Math.floor(Math.random() * 2) + 1, 105),
          awsDume: Math.min(prev.awsDume + Math.floor(Math.random() * 2) + 1, 85)
        }));
      }, 300);
      
      setTimeout(() => clearInterval(step2Interval), 2000);
    }, 2500);

    // Étape 3: Analyse IA Multi-LLM (5-7.5s)
    setTimeout(() => {
      setCurrentStep(3);
      if (isMobile) setMobileActiveScreen('step3');
      
      // Animation du code d'analyse IA
      const codeStep3 = [
        "// Analyse IA Multi-LLM avec critères client",
        "const aiModels = ['GPT-4', 'Claude', 'Gemini'];",
        "const clientProfile = {",
        "  ca: '5M€', secteur: 'IT', references: ['Education', 'Santé'],",
        "  usages: ['Cloud', 'SaaS'], environmental: 'ISO14001'",
        "};",
        "for (let ao of parsedAO) {",
        "  const analysis = await analyzeWithClientProfile(ao, clientProfile);",
        "  ao.aiScore = calculateCompatibilityScore(analysis);",
        "  console.log(`AO ${ao.id}: Score compatibilité = ${ao.aiScore}%`);",
        "}"
      ];
      
      codeStep3.forEach((line, i) => {
        setTimeout(() => {
          setCodeLines(prev => [...prev, line]);
        }, i * 350);
      });
      
      // Animation croissante continue pour l'analyse IA
      const step3Interval = setInterval(() => {
        setSourceData(prev => ({
          ...prev,
          boamp: Math.min(prev.boamp + Math.floor(Math.random() * 2) + 1, 280),
          marchesPublics: Math.min(prev.marchesPublics + Math.floor(Math.random() * 2) + 1, 190),
          place: Math.min(prev.place + Math.floor(Math.random() * 1) + 1, 115),
          awsDume: Math.min(prev.awsDume + Math.floor(Math.random() * 1) + 1, 95)
        }));
      }, 150);
      
      setTimeout(() => clearInterval(step3Interval), 2000);
    }, 5000);

    // Étape 4: Scoring Algorithmique (7.5-10s)
    setTimeout(() => {
      setCurrentStep(4);
      if (isMobile) setMobileActiveScreen('step4');
      
      // Animation du code de scoring
      const codeStep4 = [
        "",
        "// Scoring final personnalisé",
        "const scoredAO = await calculatePersonalizedScore(parsedAO, clientProfile);",
        "const rankedAO = scoredAO.sort((a, b) => b.compatibilityScore - a.compatibilityScore);",
        "console.log('✅ Analyse terminée - Scores adaptés au profil client');",
        "console.log('Critères pris en compte: CA, secteur, références, environnement');",
        ""
      ];
      
      codeStep4.forEach((line, i) => {
        setTimeout(() => {
          setCodeLines(prev => [...prev, line]);
        }, i * 350);
      });
      
      const step4Interval = setInterval(() => {
        setSourceData(prev => ({
          ...prev,
          boamp: Math.min(prev.boamp + Math.floor(Math.random() * 1) + 1, 300),
          marchesPublics: Math.min(prev.marchesPublics + Math.floor(Math.random() * 1) + 1, 200),
          place: Math.min(prev.place + Math.floor(Math.random() * 1) + 1, 125),
          awsDume: Math.min(prev.awsDume + Math.floor(Math.random() * 1) + 1, 105)
        }));
      }, 250);
      
      setTimeout(() => clearInterval(step4Interval), 2000);
      
      // Affichage des résultats après 1.5s
      setTimeout(() => {
        setShowResults(true);
        if (isMobile) setMobileActiveScreen('results');
      }, 1500);
    }, 7500);

    // Progression continue avec timer réel
    const startTime = Date.now();
    const progressInterval = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;
      setTimeElapsed(elapsed);
      
      setProgress(prev => {
        const newProgress = prev + 1;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsRunning(false);
            setCurrentStep(5); // État terminé
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 100);
  };

  // Mobile fullscreen component renderers
  const renderMobileInitialScreen = () => (
    <div className="fixed inset-0 w-screen h-screen bg-gradient-primary flex flex-col items-center justify-center p-6 text-white overflow-hidden">
      <div className="text-center max-w-sm mx-auto">
        <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-4 py-2">
          Démonstration IA
        </Badge>
        <h1 className="text-2xl font-bold mb-4">
          Processus automatisé Charly
        </h1>
        <p className="text-white/90 mb-8 text-base leading-relaxed">
          Découvrez comment notre IA analyse les marchés publics en temps réel
        </p>
        
        <div className="space-y-4">
          <Button 
            onClick={startDemo}
            disabled={isRunning}
            className="w-full h-14 text-lg font-semibold bg-white text-primary hover:bg-secondary rounded-xl"
            size="lg"
          >
            <Play className="w-6 h-6 mr-3" />
            {isRunning ? "Démarrage..." : "Commencer la démo"}
          </Button>
          
          <Button 
            onClick={resetDemo}
            variant="outline"
            className="w-full h-12 text-base border-white/30 text-white hover:bg-white/10"
            size="lg"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Réinitialiser
          </Button>
        </div>
      </div>
    </div>
  );

  const renderMobileStepScreen = (stepNumber: number) => {
    const step = steps[stepNumber - 1];
    return (
      <div className="fixed inset-0 w-screen h-screen bg-gradient-to-br from-background to-muted flex flex-col p-4 text-foreground overflow-hidden">
        {/* Header avec progression */}
        <div className="flex items-center justify-between mb-6 pt-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
              {stepNumber}
            </div>
            <span className="font-semibold">Étape {stepNumber}/4</span>
          </div>
          <div className="text-right">
            <div className="text-xs text-muted-foreground">Progression</div>
            <div className="text-lg font-bold">{Math.round(progress)}%</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step content */}
        <div className="flex-1 flex flex-col">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold mb-3">{step?.title}</h2>
            <p className="text-muted-foreground text-base leading-relaxed">{step?.description}</p>
          </div>

          {/* Live indicators */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-accent/20 border border-accent/30 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-accent">
                {currentStep >= 1 ? '693' : '0'}
              </div>
              <div className="text-xs text-muted-foreground">AO analysés</div>
            </div>
            
            <div className="bg-success/20 border border-success/30 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-success">
                {currentStep >= 3 ? '15+' : currentStep >= 1 ? '3' : '0'}
              </div>
              <div className="text-xs text-muted-foreground">Opportunités</div>
            </div>
            
            <div className="bg-primary/20 border border-primary/30 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary">
                {currentStep >= 4 ? '91%' : currentStep >= 3 ? '87%' : currentStep >= 1 ? '45%' : '-'}
              </div>
              <div className="text-xs text-muted-foreground">Score IA</div>
            </div>
            
            <div className="bg-warning/20 border border-warning/30 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-warning">
                {timeElapsed.toFixed(1)}s
              </div>
              <div className="text-xs text-muted-foreground">Temps</div>
            </div>
          </div>

          {/* Console simulation */}
          <div className="bg-background/90 border border-border rounded-lg p-4 flex-1 shadow-card">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-destructive rounded-full"></div>
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <div className="w-2 h-2 bg-success rounded-full"></div>
              </div>
              <span className="text-success text-xs font-mono">charly-analysis.js</span>
            </div>
            
            <div className="space-y-1 h-32 overflow-y-auto">
              {codeLines.slice(-8).map((line, index) => (
                <div key={index} className="text-success text-xs font-mono">
                  <span className="text-muted-foreground mr-2">{'>'}</span>
                  {line}
                </div>
              ))}
              {isRunning && (
                <div className="text-success animate-pulse text-xs font-mono">
                  <span className="text-muted-foreground mr-2">{'>'}</span>
                  █
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderMobileResultsScreen = () => (
    <div className="fixed inset-0 w-screen h-screen bg-gradient-to-br from-background to-muted flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-card/80 backdrop-blur-sm p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-success-foreground" />
            </div>
            <div>
              <h2 className="text-foreground font-semibold">Analyse terminée</h2>
              <p className="text-success text-sm">Résultats disponibles</p>
            </div>
          </div>
          <Button 
            onClick={resetDemo}
            variant="outline"
            className="border-border text-foreground hover:bg-muted"
            size="sm"
          >
            <RotateCcw className="w-4 h-4 mr-1" />
            Rejouer
          </Button>
        </div>
      </div>

      {/* Results - Full screen optimized */}
      <div className="flex-1 p-2 overflow-hidden">
        <div className="bg-card rounded-lg h-full p-2 border border-border shadow-card overflow-y-auto">
          <AOResults 
            isExpanded={true}
            onToggleExpand={() => {}}
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Progressive Screens */}
      {isMobile ? (
        <div className="lg:hidden">
          {mobileActiveScreen === 'initial' && renderMobileInitialScreen()}
          {mobileActiveScreen === 'step1' && renderMobileStepScreen(1)}
          {mobileActiveScreen === 'step2' && renderMobileStepScreen(2)}
          {mobileActiveScreen === 'step3' && renderMobileStepScreen(3)}
          {mobileActiveScreen === 'step4' && renderMobileStepScreen(4)}
          {mobileActiveScreen === 'results' && renderMobileResultsScreen()}
        </div>
      ) : null}

      {/* Desktop Layout */}
      <section 
        id="demo" 
        className={`${isMobile ? 'hidden' : 'block'} py-12 px-4 bg-gradient-to-br from-slate-50 to-gray-100`}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
              Démonstration
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Processus automatisé en action
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez comment notre IA analyse et évalue les opportunités de marchés publics en temps réel
            </p>
          </div>

          {/* Desktop grid layout */}
          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-6 max-w-7xl mx-auto">
            
            {/* Desktop controls */}
            <div className="lg:col-span-3 order-1 lg:order-3">
              <div className="space-y-4">
                <div className="bg-white rounded-lg border shadow-sm p-4">
                  <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wide mb-4 flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    Contrôles
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <Button 
                        onClick={startDemo}
                        disabled={isRunning}
                        className="flex-1 h-12 text-base font-medium"
                        size="lg"
                      >
                        <Play className="w-5 h-5 mr-2" />
                        {isRunning ? "En cours..." : "Démarrer"}
                      </Button>
                      
                      <Button 
                        onClick={resetDemo}
                        variant="outline"
                        className="flex-1 h-12 text-base font-medium"
                        size="lg"
                      >
                        <RotateCcw className="w-5 h-5 mr-2" />
                        Reset
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Progression</span>
                        <span className="font-medium">{Math.round(progress)}%</span>
                      </div>
                      <Progress value={progress} className="h-3" />
                      <div className="text-xs text-gray-500 text-center">
                        {isRunning ? `Étape ${currentStep}/4` : currentStep === 5 ? "Terminé ✓" : "Prêt à démarrer"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop steps and indicators */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="bg-white rounded-lg border shadow-sm p-4 mb-6">
                <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wide mb-4">
                  Étapes du processus
                </h3>
                
                <div className="space-y-3">
                  {steps.map((step) => (
                    <div key={step.id} className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs transition-colors ${
                        currentStep >= step.id 
                          ? 'bg-green-500 text-white' 
                          : currentStep === step.id - 1 && isRunning
                          ? 'bg-purple-500 text-white animate-pulse'
                          : 'bg-gray-300 text-gray-600'
                      }`}>
                        {currentStep > step.id ? <CheckCircle className="w-3 h-3" /> : step.id}
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-medium text-gray-800">{step.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm p-4">
                <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wide mb-4">
                  Indicateurs temps réel
                </h3>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-3 text-center">
                    <div className="text-lg font-bold">
                      {currentStep >= 1 ? '693' : '0'}
                    </div>
                    <div className="text-xs opacity-90">AO analysés</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-3 text-center">
                    <div className="text-lg font-bold">
                      {currentStep >= 3 ? '15+' : currentStep >= 1 ? '3' : '0'}
                    </div>
                    <div className="text-xs opacity-90">Opportunités</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg p-3 text-center">
                    <div className="text-lg font-bold">
                      {currentStep >= 4 ? '91%' : currentStep >= 3 ? '87%' : currentStep >= 1 ? '45%' : '-'}
                    </div>
                    <div className="text-xs opacity-90">Score IA</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg p-3 text-center">
                    <div className="text-lg font-bold">
                      {currentStep >= 4 && !isRunning ? `${timeElapsed.toFixed(1)}s` : currentStep >= 1 ? `${timeElapsed.toFixed(1)}s` : '-'}
                    </div>
                    <div className="text-xs opacity-90">Temps</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop console and results */}
            <div className="lg:col-span-7 order-3 lg:order-2">
              <div className="bg-white rounded-lg border shadow-sm p-4 mb-6">
                <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wide mb-4 flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  Console JavaScript
                </h3>
                <div className="bg-gray-900 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-green-400 text-xs font-mono">node charly-analysis.js</span>
                  </div>
                  
                  <div className="space-y-1 text-xs font-mono h-48 overflow-y-auto bg-black/20 rounded p-2">
                    {codeLines.map((line, index) => (
                      <div key={index} className="text-green-400 break-all">
                        <span className="text-gray-500 mr-1 text-xs">{index + 1}.</span>
                        <span className="text-xs">{line}</span>
                      </div>
                    ))}
                    {codeLines.length > 0 && isRunning && (
                      <div className="text-green-400 animate-pulse">
                        <span className="text-gray-500 mr-1 text-xs">{codeLines.length + 1}.</span>
                        <span className="text-xs">█</span>
                      </div>
                    )}
                    {codeLines.length === 0 && (
                      <div className="text-gray-500 text-xs italic">
                        En attente du démarrage de l'analyse...
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm p-4">
                <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wide mb-4 flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Interface Charly IA
                </h3>
                
                <div className="relative bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg shadow-xl mx-auto" style={{ width: '100%', height: '500px' }}>
                  <div className="absolute inset-3 bg-black rounded-lg overflow-hidden">
                    <div className="h-full bg-white">
                      <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 border-b">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex-1 mx-3">
                          <div className="bg-white rounded px-2 py-1 text-xs flex items-center gap-1 border">
                            <Globe className="w-3 h-3 text-gray-500" />
                            <span>app.eligibly.ai</span>
                          </div>
                        </div>
                      </div>

                      <div className="h-full p-4 bg-gray-50 overflow-hidden" style={{ height: 'calc(100% - 40px)' }}>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                            C
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-800 text-sm">Charly IA</h3>
                            <p className="text-gray-600 text-xs">Analyse des appels d'offres</p>
                          </div>
                          <div className="ml-auto flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-green-600 font-medium text-xs">Actif</span>
                          </div>
                        </div>

                        <div style={{ height: 'calc(100% - 60px)' }}>
                          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col h-full">
                            <div className="p-2 flex-1 overflow-y-auto">
                              {showResults ? (
                                <AOResults 
                                  isExpanded={showExpandedResults}
                                  onToggleExpand={() => setShowExpandedResults(true)}
                                />
                              ) : (
                                <div className="h-full flex items-center justify-center">
                                  <div className="text-center text-gray-500">
                                    <div className="mb-3 flex justify-center">
                                      <img 
                                        src={charlyNoBg}
                                        alt="Charly, votre assistant IA"
                                        className="w-16 h-16 object-contain animate-pulse"
                                      />
                                    </div>
                                    <div className="text-sm">En attente de l'analyse...</div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};