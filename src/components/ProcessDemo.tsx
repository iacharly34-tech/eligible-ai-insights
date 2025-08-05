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
    boamp: 241,
    marchesPublics: 163,
    place: 89,
    awsDume: 67
  });
  const [codeLines, setCodeLines] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [aoResults, setAoResults] = useState([
    { 
      title: "Fourniture de matériel informatique", 
      score: 94, 
      budget: "150K€", 
      deadline: "15/02/2025",
      criteres: { prix: 30, qualite: 60, performance: 10 },
      penalites: "Oui - 0.5% par jour de retard",
      titulaire: "À déterminer",
      duree: "24 mois"
    },
    { 
      title: "Services de développement web", 
      score: 87, 
      budget: "80K€", 
      deadline: "28/02/2025",
      criteres: { prix: 20, qualite: 70, performance: 10 },
      penalites: "Non spécifié",
      titulaire: "Nouveau marché",
      duree: "12 mois"
    },
    { 
      title: "Maintenance systèmes réseaux", 
      score: 76, 
      budget: "45K€", 
      deadline: "10/03/2025",
      criteres: { prix: 40, qualite: 50, performance: 10 },
      penalites: "Oui - Forfaitaire 500€",
      titulaire: "Renouvellement",
      duree: "36 mois"
    }
  ]);

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
      boamp: 241,
      marchesPublics: 163,
      place: 89,
      awsDume: 67
    });
    setCodeLines([]);
    setShowResults(false);
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
      
      // Animation des données qui arrivent
      const step1Interval = setInterval(() => {
        setSourceData(prev => ({
          ...prev,
          boamp: Math.min(prev.boamp + Math.floor(Math.random() * 3) + 1, 250),
          marchesPublics: Math.min(prev.marchesPublics + Math.floor(Math.random() * 2) + 1, 162)
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
          place: Math.min(prev.place + Math.floor(Math.random() * 2) + 1, 95),
          awsDume: Math.min(prev.awsDume + Math.floor(Math.random() * 2) + 1, 74)
        }));
      }, 300);
      
      setTimeout(() => clearInterval(step2Interval), 2000);
    }, 2500);

    // Étape 3: Analyse IA Multi-LLM (5-7.5s)
    setTimeout(() => {
      setCurrentStep(3);
      
      // Animation du code d'analyse IA
      const codeStep3 = [
        "// Analyse IA Multi-LLM",
        "const aiModels = ['GPT-4', 'Claude', 'Gemini'];",
        "for (let ao of parsedAO) {",
        "  const analysis = await analyzeWithMultiLLM(ao, aiModels);",
        "  ao.aiScore = calculateAIScore(analysis);",
        "  console.log(`AO ${ao.id}: Score IA = ${ao.aiScore}`);",
        "}"
      ];
      
      codeStep3.forEach((line, i) => {
        setTimeout(() => {
          setCodeLines(prev => [...prev, line]);
        }, i * 350);
      });
      
      // Simulation d'analyse intensive
      const step3Interval = setInterval(() => {
        setSourceData(prev => ({
          ...prev,
          boamp: Math.max(Math.min(prev.boamp + Math.floor(Math.random() * 4) - 1, 250), 240),
          marchesPublics: Math.max(Math.min(prev.marchesPublics + Math.floor(Math.random() * 3) - 1, 162), 155)
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
        "// Scoring final",
        "const scoredAO = await calculateFinalScore(parsedAO);",
        "const rankedAO = scoredAO.sort((a, b) => b.score - a.score);",
        "console.log('Analyse terminée, affichage des résultats...');",
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
          place: Math.max(Math.min(prev.place + Math.floor(Math.random() * 2), 95), 89),
          awsDume: Math.max(Math.min(prev.awsDume + Math.floor(Math.random() * 2), 74), 67)
        }));
      }, 250);
      
      setTimeout(() => clearInterval(step4Interval), 2000);
      
      // Affichage des résultats après 1.5s
      setTimeout(() => {
        setShowResults(true);
      }, 1500);
    }, 7500);

    // Progression continue
    const progressInterval = setInterval(() => {
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

              {/* Interface d'analyse en temps réel */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 mb-6 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                    🤖
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Charly IA</h3>
                    <p className="text-sm text-gray-300">Analyse en cours des appels d'offres</p>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-400 font-medium">Analyse active</span>
                  </div>
                </div>

                {/* Indicateurs d'analyse pertinents */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">AO analysés</span>
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="text-2xl font-bold text-blue-400">
                      {currentStep >= 1 ? (sourceData.boamp + sourceData.marchesPublics + sourceData.place + sourceData.awsDume) : '0'}
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">Opportunités détectées</span>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="text-2xl font-bold text-green-400">
                      {currentStep >= 3 ? '15+' : currentStep >= 1 ? '3' : '0'}
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">Score moyen IA</span>
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="text-2xl font-bold text-purple-400">
                      {currentStep >= 4 ? '91%' : currentStep >= 3 ? '87%' : currentStep >= 1 ? '45%' : '-'}
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">Temps d'analyse</span>
                      <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="text-2xl font-bold text-orange-400">
                      {currentStep >= 4 ? '2.1s' : currentStep >= 1 ? `${Math.floor(progress/10)}.${progress%10}s` : '-'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Console Animation */}
              {codeLines.length > 0 && (
                <div className="bg-gray-900 rounded-lg p-4 mb-6 border-l-4 border-purple-500">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 text-sm font-mono">Console JavaScript</span>
                  </div>
                  <div className="space-y-1 max-h-64 overflow-y-auto">
                    {codeLines.map((line, index) => (
                      <div
                        key={index}
                        className="text-green-400 text-sm font-mono animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {line || '\u00A0'}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Results Display */}
              {showResults && (
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6 border-2 border-purple-200 animate-fade-in">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <h3 className="text-lg font-bold text-purple-800">Résultats d'Analyse AO</h3>
                    <Badge className="bg-green-600 text-white ml-auto">3 opportunités trouvées</Badge>
                  </div>
                  
                  <div className="space-y-4">
                    {aoResults.map((ao, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg p-6 border border-purple-200 animate-fade-in"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800 mb-2">{ao.title}</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                              <div>
                                <span className="text-gray-500">Budget:</span>
                                <div className="font-medium">{ao.budget}</div>
                              </div>
                              <div>
                                <span className="text-gray-500">Deadline:</span>
                                <div className="font-medium">{ao.deadline}</div>
                              </div>
                              <div>
                                <span className="text-gray-500">Durée:</span>
                                <div className="font-medium">{ao.duree}</div>
                              </div>
                              <div>
                                <span className="text-gray-500">Titulaire:</span>
                                <div className="font-medium text-xs">{ao.titulaire}</div>
                              </div>
                            </div>
                          </div>
                          <div className="text-right ml-4">
                            <div className={`text-2xl font-bold ${
                              ao.score >= 90 ? 'text-green-600' : 
                              ao.score >= 80 ? 'text-blue-600' : 
                              'text-orange-600'
                            }`}>
                              {ao.score}%
                            </div>
                            <div className="text-xs text-gray-500">Score Charly</div>
                          </div>
                        </div>
                        
                        {/* Critères d'évaluation */}
                        <div className="bg-gray-50 rounded-lg p-4 mb-3">
                          <h5 className="text-sm font-semibold text-gray-700 mb-2">Critères de l'acheteur</h5>
                          <div className="flex items-center gap-4">
                            <div className="flex-1">
                              <div className="flex justify-between text-xs mb-1">
                                <span>Prix: {ao.criteres.prix}%</span>
                                <span>Qualité: {ao.criteres.qualite}%</span>
                                <span>Performance: {ao.criteres.performance}%</span>
                              </div>
                              <div className="flex gap-1 h-2 rounded-full overflow-hidden">
                                <div 
                                  className="bg-red-400" 
                                  style={{ width: `${ao.criteres.prix}%` }}
                                ></div>
                                <div 
                                  className="bg-green-400" 
                                  style={{ width: `${ao.criteres.qualite}%` }}
                                ></div>
                                <div 
                                  className="bg-blue-400" 
                                  style={{ width: `${ao.criteres.performance}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Pénalités */}
                        <div className="text-sm">
                          <span className="text-gray-500">Pénalités: </span>
                          <span className={ao.penalites.includes("Oui") ? "text-red-600 font-medium" : "text-gray-600"}>
                            {ao.penalites}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 text-center">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                      Voir tous les résultats
                    </Button>
                  </div>
                </div>
              )}
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
                className={`text-center transition-all duration-700 transform ${
                  currentStep >= step.id 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-30 scale-95 translate-y-2'
                }`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-700 ${
                  currentStep > step.id
                    ? 'bg-green-600 text-white shadow-lg scale-110'
                    : currentStep === step.id
                    ? 'bg-purple-600 text-white shadow-lg scale-110 animate-pulse'
                    : 'bg-gray-200 text-gray-400'
                }`}>
                  {currentStep > step.id ? (
                    <CheckCircle className="w-8 h-8" />
                  ) : currentStep === step.id ? (
                    <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
                  ) : (
                    <span className="text-lg font-bold">{step.id}</span>
                  )}
                </div>
                <h4 className={`font-semibold text-sm mb-2 transition-colors duration-500 ${
                  currentStep >= step.id ? 'text-purple-700' : 'text-gray-500'
                }`}>
                  {step.title}
                </h4>
                <p className={`text-xs transition-colors duration-500 ${
                  currentStep >= step.id ? 'text-purple-600' : 'text-gray-400'
                }`}>
                  {step.description}
                </p>
                
                {/* Step Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 transform translate-x-1/2">
                    <div 
                      className={`h-full bg-purple-600 transition-all duration-1000 ${
                        currentStep > step.id ? 'w-full' : 'w-0'
                      }`}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Current Step Info */}
          {currentStep > 0 && currentStep <= 4 && (
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200 animate-fade-in">
              <div className="text-center">
                <Badge className="bg-purple-600 text-white mb-3 px-4 py-2">
                  {isRunning ? '🔄 En cours' : '✅ Terminé'} - Étape {currentStep}/4
                </Badge>
                <h4 className="text-lg font-bold text-purple-800 mb-2">
                  {steps[currentStep - 1]?.title}
                </h4>
                <p className="text-sm text-purple-700 leading-relaxed">
                  {steps[currentStep - 1]?.description}
                </p>
              </div>
            </div>
          )}
          
          {/* Completion Message */}
          {currentStep >= 5 && (
            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 animate-fade-in">
              <div className="text-center">
                <Badge className="bg-green-600 text-white mb-3 px-4 py-2">
                  ✅ Processus terminé
                </Badge>
                <h4 className="text-lg font-bold text-green-800 mb-2">
                  Analyse complète
                </h4>
                <p className="text-sm text-green-700">
                  Les appels d'offres ont été analysés et scorés avec succès !
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};