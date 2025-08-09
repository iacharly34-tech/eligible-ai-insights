import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
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
        className={`${isMobile ? 'hidden' : 'block'} py-6 px-4 bg-gradient-to-br from-slate-50 to-gray-100`}
      >
        <div className="container mx-auto max-w-[1400px]">
          {/* Full-width Interface on top - no header to save vertical space */}
          <div className="rounded-xl border bg-card shadow-card p-4 md:p-6">
            <h3 className="font-bold text-foreground text-base md:text-lg mb-3 flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Interface Charly IA
            </h3>
            {/* Full width, single AO visible above the fold */}
            <div className="w-full">
              <AOResults isExpanded={false} startIndex={0} />
            </div>
          </div>

          {/* Other AO results - scrollable zone below the fold */}
          <div className="mt-4 rounded-xl border bg-card shadow-card p-4 md:p-6">
            <h4 className="font-semibold text-foreground mb-3">Autres résultats AO</h4>
            <div className="max-h-[42vh] overflow-y-auto pr-1">
              <AOResults isExpanded={true} startIndex={1} />
            </div>
          </div>

          {/* Process, Console and Controls moved below in a collapsible area */}
          <div className="mt-6">
            <Accordion type="single" collapsible>
              <AccordionItem value="tech">
                <AccordionTrigger className="text-left">Processus IA, Console et Contrôles</AccordionTrigger>
                <AccordionContent>
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Steps Process */}
                    <div className="lg:col-span-1 order-1">
                      <div className="bg-white rounded-lg border shadow-sm p-4 h-fit">
                        <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wide mb-4">
                          Processus IA
                        </h3>
                        <div className="space-y-2">
                          {steps.map((step) => (
                            <div key={step.id} className="flex items-center gap-2">
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs transition-colors ${
                                currentStep >= step.id 
                                  ? 'bg-green-500 text-white' 
                                  : currentStep === step.id - 1 && isRunning
                                  ? 'bg-purple-500 text-white animate-pulse'
                                  : 'bg-gray-300 text-gray-600'
                              }`}>
                                {currentStep > step.id ? <CheckCircle className="w-3 h-3" /> : step.id}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs font-medium text-gray-800 line-clamp-1">{step.title}</div>
                                <div className="text-xs text-gray-500 line-clamp-1">{step.description}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Console + Controls */}
                    <div className="lg:col-span-2 order-2 space-y-4">
                      {/* Console */}
                      <div className="bg-white rounded-lg border shadow-sm p-4">
                        <h3 className="font-bold text-gray-700 text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
                          <Terminal className="w-4 h-4" />
                          Console Charly IA
                        </h3>
                        <div className="bg-gray-900 rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex gap-1">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="text-green-400 text-xs font-mono">charly-analysis.js</span>
                          </div>
                          <div className="space-y-0.5 text-xs font-mono h-32 overflow-y-auto bg-black/20 rounded p-2">
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
                                Charly IA en attente...
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Controls */}
                      <div className="bg-white rounded-lg border shadow-sm p-4 h-fit">
                        <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wide mb-4 flex items-center gap-2">
                          <Play className="w-4 h-4" />
                          Contrôles
                        </h3>
                        <div className="space-y-3">
                          <Button 
                            onClick={startDemo}
                            disabled={isRunning}
                            className="w-full h-12 text-sm font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            <Play className="w-4 h-4 mr-2" />
                            {isRunning ? "Analyse..." : "Lancer IA"}
                          </Button>
                          <Button 
                            onClick={resetDemo}
                            variant="outline"
                            className="w-full h-10 text-sm font-medium border-border hover:bg-muted/50"
                          >
                            <RotateCcw className="w-4 h-4 mr-2" />
                            Reset
                          </Button>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-600">Progression</span>
                              <span className="font-medium">{Math.round(progress)}%</span>
                            </div>
                            <Progress value={progress} className="h-2" />
                            <div className="text-xs text-gray-500 text-center">
                              {isRunning ? `Étape ${currentStep}/4` : currentStep === 5 ? "Terminé ✓" : "Prêt"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
      </section>
    </>
  );
};