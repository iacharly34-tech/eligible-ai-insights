import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { MobileDemoFlow } from "./MobileDemoFlow";
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

  return (
    <>
      {/* Mobile Progressive Demo Flow */}
      {isMobile ? (
        <div className="lg:hidden">
          <MobileDemoFlow />
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

          {/* Desktop grid layout - Redesigned pour plus d'espace */}
          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8 max-w-full mx-auto">
            
            {/* Desktop controls - Plus large */}
            <div className="lg:col-span-3 order-1 lg:order-3">
              <div className="space-y-4">
                <div className="bg-white rounded-lg border shadow-sm p-6">
                  <h3 className="font-bold text-gray-800 text-base uppercase tracking-wide mb-6 flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Contrôles
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex flex-col gap-3">
                      <Button 
                        onClick={startDemo}
                        disabled={isRunning}
                        className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                        size="lg"
                      >
                        <Play className="w-6 h-6 mr-3" />
                        {isRunning ? "Analyse en cours..." : "Démarrer l'analyse IA"}
                      </Button>
                      
                      <Button 
                        onClick={resetDemo}
                        variant="outline"
                        className="w-full h-12 text-base font-medium border-border hover:bg-muted/50"
                        size="lg"
                      >
                        <RotateCcw className="w-5 h-5 mr-2" />
                        Réinitialiser
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

            {/* Desktop steps and indicators - Plus large */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="bg-white rounded-lg border shadow-sm p-5 mb-6">
                <h3 className="font-bold text-gray-700 text-base uppercase tracking-wide mb-5">
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

              <div className="bg-white rounded-lg border shadow-sm p-5">
                <h3 className="font-bold text-gray-700 text-base uppercase tracking-wide mb-5">
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

            {/* Desktop console and results - Interface Charly élargie */}
            <div className="lg:col-span-6 order-3 lg:order-2">
              <div className="bg-white rounded-lg border shadow-sm p-5 mb-6">
                <h3 className="font-bold text-gray-700 text-base uppercase tracking-wide mb-5 flex items-center gap-2">
                  <Terminal className="w-5 h-5" />
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

              <div className="bg-white rounded-lg border shadow-sm p-5">
                <h3 className="font-bold text-gray-700 text-base uppercase tracking-wide mb-5 flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Interface Charly IA
                </h3>
                
                {/* Extended Charly Interface - Maximum width and height */}
                <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-lg border border-gray-200 min-h-[800px] w-full relative overflow-hidden">
                  {/* Simulated browser header */}
                  <div className="bg-gray-100 rounded-t-xl px-4 py-3 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-600 border">
                        app.eligibly.ai
                      </div>
                    </div>
                  </div>
                  
                  {/* Charly header */}
                  <div className="p-6 border-b bg-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                          C
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-base">Charly IA</h4>
                          <p className="text-sm text-gray-600">Analyse des appels d'offres</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-700 border-green-200 text-xs px-3 py-1">
                        Actif
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Content area - Much larger */}
                  <div className="p-6 flex-1 min-h-[500px] bg-gradient-to-b from-white to-gray-50">
                    {!showResults ? (
                      <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                        <div className="w-24 h-24 mx-auto">
                          <img 
                            src={charlyNoBg} 
                            alt="Charly Assistant" 
                            className="w-full h-full object-contain opacity-80"
                          />
                        </div>
                        
                        <div className="space-y-3">
                          <h5 className="text-xl font-medium text-gray-700">
                            {isRunning 
                              ? currentStep === 1 ? "Collecte en cours..." 
                              : currentStep === 2 ? "Analyse des données..."
                              : currentStep === 3 ? "Intelligence artificielle au travail..."
                              : currentStep === 4 ? "Calcul des scores..."
                              : "En attente de l'analyse..."
                              : "En attente de l'analyse..."
                            }
                          </h5>
                          
                          <p className="text-sm text-gray-500 max-w-md leading-relaxed">
                            {isRunning 
                              ? currentStep === 1 ? "Connexion aux plateformes officielles et extraction des données..."
                              : currentStep === 2 ? "Traitement et structuration des appels d'offres collectés..."
                              : currentStep === 3 ? "Analyse approfondie avec nos modèles d'IA spécialisés..."
                              : currentStep === 4 ? "Génération des scores de compatibilité personnalisés..."
                              : "Charly va analyser et évaluer les opportunités selon vos critères."
                              : "Charly va analyser et évaluer les opportunités selon vos critères."
                            }
                          </p>
                        </div>
                        
                        {isRunning && (
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {/* Results header */}
                        <div className="flex items-center justify-between pb-4 border-b">
                          <div>
                            <h5 className="text-lg font-semibold text-gray-900">
                              Résultats d'analyse - {new Date().toLocaleDateString()}
                            </h5>
                            <p className="text-sm text-gray-600 mt-1">
                              15 opportunités détectées • Score moyen: 78%
                            </p>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setShowExpandedResults(!showExpandedResults)}
                            className="text-xs"
                          >
                            {showExpandedResults ? 'Vue résumée' : 'Voir détails'}
                          </Button>
                        </div>
                        
                        {/* AOResults component with enhanced display */}
                        <div className="bg-gray-50 rounded-lg p-4">
                          <AOResults 
                            isExpanded={showExpandedResults}
                          />
                        </div>
                        
                        {/* Action buttons */}
                        <div className="flex gap-3 pt-4 border-t">
                          <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                            Télécharger DCE
                          </Button>
                          <Button variant="outline" className="flex-1">
                            Programmer suivi
                          </Button>
                          <Button variant="outline" className="flex-1">
                            Exporter analyse
                          </Button>
                        </div>
                      </div>
                    )}
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