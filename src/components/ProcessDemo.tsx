import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/contexts/LanguageContext";
import { AOResults } from "./AOResults";
import charlyNoBg from "@/assets/ai-character-tech-male.png";
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
  };

  const startDemo = () => {
    if (isRunning) return;
    
    resetDemo();
    setIsRunning(true);
    setProgress(0);
    
    // Étape 1: Connexion multi-sources (0-2.5s)
    setTimeout(() => {
      setCurrentStep(1);
      
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
    <section id="demo" className="py-12 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
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

        {/* Layout principal avec 3 colonnes */}
        <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto">
          
          {/* Colonne gauche : Indicateurs compacts */}
          <div className="col-span-2 space-y-4">
            <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wide mb-4">Indicateurs</h3>
            
            <div className="bg-blue-600 text-white rounded-lg p-4">
              <div className="text-xs opacity-90 mb-1">AO analysés</div>
              <div className="text-2xl font-bold">
                {currentStep >= 1 ? '693' : '0'}
              </div>
            </div>
            
            <div className="bg-green-600 text-white rounded-lg p-4">
              <div className="text-xs opacity-90 mb-1">Opportunités</div>
              <div className="text-2xl font-bold">
                {currentStep >= 3 ? '15+' : currentStep >= 1 ? '3' : '0'}
              </div>
            </div>
            
            <div className="bg-purple-600 text-white rounded-lg p-4">
              <div className="text-xs opacity-90 mb-1">Score IA</div>
              <div className="text-2xl font-bold">
                {currentStep >= 4 ? '91%' : currentStep >= 3 ? '87%' : currentStep >= 1 ? '45%' : '-'}
              </div>
            </div>
            
            <div className="bg-orange-600 text-white rounded-lg p-4">
              <div className="text-xs opacity-90 mb-1">Temps</div>
              <div className="text-2xl font-bold">
                {currentStep >= 4 && !isRunning ? `${timeElapsed.toFixed(1)}s` : currentStep >= 1 ? `${timeElapsed.toFixed(1)}s` : '-'}
              </div>
            </div>

            {/* Étapes du processus */}
            <div className="mt-8">
              <h4 className="font-bold text-gray-700 text-sm uppercase tracking-wide mb-4">Processus</h4>
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
          </div>

          {/* Colonne centrale : Écran principal MacBook */}
          <div className="col-span-7">
            <div 
              className="relative bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg shadow-2xl mx-auto"
              style={{ 
                width: '100%',
                height: '600px'
              }}
            >
              {/* MacBook Screen Bezel */}
              <div className="absolute inset-3 bg-black rounded-lg overflow-hidden">
                {/* Browser Interface */}
                <div className="h-full bg-white">
                  {/* Browser Header */}
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

                  {/* Main Content */}
                  <div className="h-full p-4 bg-gray-50 overflow-hidden" style={{ height: 'calc(100% - 40px)' }}>
                    {/* Header */}
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

                    {/* Results Container - Taille optimisée pour afficher 1 résultat complet */}
                    <div style={{ height: 'calc(100% - 80px)' }}>
                      <div 
                        className="bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col h-full"
                      >
                        <div className="p-4 flex-1 overflow-y-auto">
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

          {/* Colonne droite : Console et contrôles */}
          <div className="col-span-3 space-y-6">
            {/* Console JavaScript */}
            <div>
              <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wide mb-4">Console</h3>
              <div className="bg-gray-900 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 font-mono text-xs">JavaScript</span>
                </div>
                <div className="space-y-0.5 h-56 overflow-y-auto">
                  {codeLines.length > 0 ? codeLines.map((line, index) => (
                    <div
                      key={index}
                      className="text-green-400 text-sm font-mono leading-tight break-words"
                    >
                      {line || '\u00A0'}
                    </div>
                  )) : (
                    <div className="text-gray-500 font-mono text-sm">Prêt à analyser...</div>
                  )}
                </div>
              </div>
            </div>

            {/* Contrôles */}
            <div>
              <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wide mb-4">Contrôles</h3>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Button
                    onClick={startDemo}
                    disabled={isRunning}
                    className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2 flex-1"
                    size="sm"
                  >
                    <Play className="w-3 h-3" />
                    {isRunning ? 'En cours...' : 'Démarrer'}
                  </Button>
                  
                  <Button
                    onClick={resetDemo}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Reset
                  </Button>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Progression</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} className="w-full" />
                </div>

                {/* Completion Status */}
                {currentStep === 5 && (
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto mb-1" />
                    <h3 className="font-bold text-green-800 text-xs mb-1">✅ Terminé !</h3>
                    <p className="text-green-700 text-xs">
                      AO analysés et scorés !
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};