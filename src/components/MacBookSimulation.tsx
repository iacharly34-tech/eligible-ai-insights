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
  Clock,
  Bell,
  Mail,
  Slack,
  Download,
  Eye,
  TrendingUp,
  Award,
  Zap,
  Search,
  Filter,
  Settings,
  Maximize2,
  Minimize2,
  X
} from "lucide-react";

interface Step {
  id: number;
  title: string;
  component: "browser" | "terminal" | "vscode" | "dashboard" | "notifications" | "email" | "slack";
  duration: number;
  content: any;
  substeps?: string[];
}

export const MacBookSimulation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentSubstep, setCurrentSubstep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [notifications, setNotifications] = useState<string[]>([]);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 50 });
  const [showAnimatedCursor, setShowAnimatedCursor] = useState(true);
  const [cursorPath, setCursorPath] = useState(0);

  // Cursor animation paths for each step
  const cursorPaths = {
    browser: [
      { x: 20, y: 15 }, // Navigate to URL bar
      { x: 50, y: 15 }, // Type in URL
      { x: 80, y: 15 }, // Click secure icon
      { x: 30, y: 60 }, // Scroll down
      { x: 70, y: 80 }  // Click result
    ],
    terminal: [
      { x: 15, y: 25 }, // Click terminal
      { x: 40, y: 25 }, // Type command
      { x: 25, y: 40 }, // Watch output
      { x: 60, y: 70 }, // Scroll to see results
      { x: 80, y: 90 }  // Complete
    ],
    vscode: [
      { x: 10, y: 20 }, // Click file
      { x: 30, y: 40 }, // Start typing
      { x: 60, y: 60 }, // Continue coding
      { x: 40, y: 80 }, // See results
      { x: 70, y: 85 }  // Success message
    ],
    dashboard: [
      { x: 80, y: 20 }, // Look at score
      { x: 30, y: 50 }, // Check criteria
      { x: 60, y: 70 }, // Scroll progress bars
      { x: 50, y: 90 }, // Read recommendation
      { x: 25, y: 95 }  // Action button
    ]
  };

  const steps: Step[] = [
    {
      id: 1,
      title: "Connexion multi-sources",
      component: "browser",
      duration: 4000,
      content: {
        urls: [
          "https://www.boamp.fr/avis",
          "https://www.marches-publics.gouv.fr", 
          "https://www.achatpublic.com",
          "https://aws-dume.fr"
        ],
        currentUrl: 0,
        status: "Connexion sécurisée aux 600+ sources...",
        results: [
          "BOAMP: 234 nouvelles publications",
          "Marchés Publics: 156 appels d'offres",
          "PLACE: 89 consultations", 
          "AWS DUME: 67 avis"
        ]
      },
      substeps: [
        "Authentification multi-sources",
        "Scan BOAMP.fr - 234 nouveaux",
        "Scan Marchés-publics.gouv.fr - 156 nouveaux", 
        "Scan des plateformes régionales",
        "Agrégation des données"
      ]
    },
    {
      id: 2,
      title: "Extraction & Parsing",
      component: "terminal",
      duration: 5000,
      content: {
        commands: [
          "npm run scrape-sources --parallel",
          "python ai_extractor.py --mode=deep",
          "node document_parser.js --pdf --docx",
          "curl -X POST /api/ai/analyze"
        ],
        outputs: [
          "🔍 Initializing Puppeteer cluster (8 workers)...",
          "🌐 Connecting to BOAMP API...",
          "📄 Processing PDF documents (47 files)...",
          "🧠 Starting AI content extraction...",
          "⚡ OCR processing for scanned documents...",
          "📊 Extracting structured data...",
          "✅ Processed 547 documents successfully",
          "💾 Saving to Vector Database..."
        ]
      },
      substeps: [
        "Démarrage cluster Puppeteer",
        "Extraction PDF/DOCX",
        "OCR pour documents scannés",
        "Parsing structure des données",
        "Validation & nettoyage"
      ]
    },
    {
      id: 3,
      title: "Analyse IA Multi-LLM",
      component: "vscode",
      duration: 6000,
      content: {
        filename: "ai-multi-analyzer.ts",
        code: `// Analyse avec plusieurs modèles IA
const analyses = await Promise.all([
  // GPT-4 Turbo pour l'extraction structurée
  openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages: [{
      role: "system",
      content: "Expert en marchés publics. Extrait: secteur, budget, critères, délais, géolocalisation."
    }, {
      role: "user", 
      content: document.fullText
    }],
    temperature: 0.1
  }),
  
  // Claude 3.5 pour l'analyse concurrentielle
  anthropic.messages.create({
    model: "claude-3-5-sonnet-20241022",
    messages: [{
      role: "user",
      content: "Analyse la concurrence probable sur ce marché: " + document.title
    }]
  }),
  
  // Mistral pour l'évaluation des risques
  mistral.chat({
    model: "mistral-large-latest",
    messages: [{
      role: "user", 
      content: "Évalue les risques juridiques et techniques: " + document.criteria
    }]
  })
]);

// Fusion des analyses
const synthesis = {
  gpt4_analysis: JSON.parse(analyses[0].choices[0].message.content),
  claude_competition: analyses[1].content[0].text,
  mistral_risks: analyses[2].choices[0].message.content,
  confidence_score: calculateConfidence(analyses)
};

console.log("✅ Multi-LLM analysis completed:", synthesis);
return synthesis;`
      },
      substeps: [
        "Initialisation GPT-4 Turbo",
        "Analyse Claude 3.5 (concurrence)",
        "Évaluation Mistral (risques)",
        "Synthèse des modèles",
        "Calcul score de confiance"
      ]
    },
    {
      id: 4,
      title: "Scoring Algorithmique",
      component: "dashboard",
      duration: 4000,
      content: {
        title: "Plateforme E-learning - Ministère Éducation Nationale",
        budget: "2.4M€",
        deadline: "15 mars 2025",
        publication: "12 janvier 2025",
        score: 92,
        criteria: {
          expertise: 96,
          budget: 89,
          location: 94,
          competition: 85,
          timeline: 91,
          requirements: 88
        },
        recommendation: "🏆 Opportunité Premium - Action immédiate recommandée",
        details: {
          sector: "Formation & Numérique",
          contracting: "Ministère Éducation Nationale",
          location: "Paris & Académies",
          type: "Marché à bons de commande",
          duration: "4 ans",
          competitors: "8-12 estimés"
        }
      },
      substeps: [
        "Calcul score expertise",
        "Analyse budget & rentabilité", 
        "Évaluation géographique",
        "Analyse concurrentielle",
        "Score timeline & faisabilité",
        "Synthèse finale"
      ]
    },
    {
      id: 5,
      title: "Notification multi-canaux",
      component: "notifications",
      duration: 3000,
      content: {
        channels: ["slack", "email", "webhook"],
        message: "🚨 Nouvelle opportunité Premium détectée",
        urgency: "high"
      },
      substeps: [
        "Notification Slack équipe",
        "Email aux décideurs",
        "Webhook CRM",
        "Mise à jour dashboard",
        "Alerte mobile"
      ]
    }
  ];

  const currentStepData = steps[currentStep];
  const currentTime = new Date().toLocaleTimeString('fr-FR', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  // Enhanced typing effect
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
    }, 30);
  };

  // Terminal line animation
  const addTerminalLine = (line: string) => {
    setTerminalLines(prev => [...prev, line]);
  };

  // Notification system
  const addNotification = (message: string) => {
    setNotifications(prev => [...prev, message]);
    setTimeout(() => {
      setNotifications(prev => prev.slice(1));
    }, 4000);
  };

  // Cursor animation
  useEffect(() => {
    if (!isPlaying) return;
    
    const currentPaths = cursorPaths[currentStepData.component as keyof typeof cursorPaths] || [];
    if (currentPaths.length === 0) return;

    const pathDuration = currentStepData.duration / currentPaths.length;
    
    const animateCursor = () => {
      setCursorPath(0);
      
      currentPaths.forEach((position, index) => {
        setTimeout(() => {
          setCursorPosition(position);
          setCursorPath(index);
        }, index * pathDuration);
      });
    };

    setTimeout(animateCursor, 500);
  }, [currentStep, isPlaying, currentStepData]);

  // Animated cursor blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setShowAnimatedCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Substep progression
  useEffect(() => {
    if (isPlaying && currentStepData.substeps) {
      const substepDuration = currentStepData.duration / currentStepData.substeps.length;
      const timer = setInterval(() => {
        setCurrentSubstep(prev => {
          if (prev < currentStepData.substeps!.length - 1) {
            return prev + 1;
          }
          return prev;
        });
      }, substepDuration);

      return () => clearInterval(timer);
    }
  }, [currentStep, isPlaying, currentStepData]);

  // Step progression
  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        if (currentStep < steps.length - 1) {
          setCurrentStep(prev => prev + 1);
          setCurrentSubstep(0);
          setProgress(0);
          
          // Add notification for new step
          addNotification(`Étape ${currentStep + 2} démarrée: ${steps[currentStep + 1].title}`);
        } else {
          setIsPlaying(false);
          setProgress(100);
          addNotification("🎉 Processus terminé avec succès!");
        }
      }, currentStepData.duration);

      return () => clearTimeout(timer);
    }
  }, [currentStep, isPlaying, currentStepData.duration]);

  // Progress update with substeps
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

  // Terminal animation
  useEffect(() => {
    if (currentStepData.component === "terminal" && isPlaying) {
      setTerminalLines([]);
      currentStepData.content.outputs.forEach((line: string, index: number) => {
        setTimeout(() => {
          addTerminalLine(line);
        }, index * 600);
      });
    }
  }, [currentStep, isPlaying, currentStepData]);

  const startSimulation = () => {
    setCurrentStep(0);
    setCurrentSubstep(0);
    setProgress(0);
    setIsPlaying(true);
    setTerminalLines([]);
    setNotifications([]);
    addNotification("🚀 Simulation démarrée");
  };

  const pauseSimulation = () => {
    setIsPlaying(false);
    addNotification("⏸️ Simulation mise en pause");
  };

  const resetSimulation = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setCurrentSubstep(0);
    setProgress(0);
    setTypedText("");
    setTerminalLines([]);
    setNotifications([]);
  };

  const renderMacBookContent = () => {
    switch (currentStepData.component) {
      case "browser":
        return (
          <div className="h-full bg-white">
            {/* Enhanced Browser Chrome */}
            <div className="bg-gray-100 border-b px-4 py-2 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 cursor-pointer"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 cursor-pointer"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 cursor-pointer"></div>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="p-1 hover:bg-gray-200 rounded cursor-pointer"><span>←</span></div>
                <div className="p-1 hover:bg-gray-200 rounded cursor-pointer"><span>→</span></div>
                <div className="p-1 hover:bg-gray-200 rounded cursor-pointer"><span>↻</span></div>
              </div>
              <div className="flex-1 bg-white rounded-md px-3 py-1.5 text-sm text-gray-600 flex items-center gap-2 border">
                <Globe className="w-4 h-4" />
                {currentStepData.content.urls[currentStepData.content.currentUrl]}
                <div className="ml-auto text-green-600">🔒</div>
              </div>
              <div className="flex gap-1">
                <div className="p-1 hover:bg-gray-200 rounded cursor-pointer">⭐</div>
                <div className="p-1 hover:bg-gray-200 rounded cursor-pointer">👤</div>
                <div className="p-1 hover:bg-gray-200 rounded cursor-pointer">⋮</div>
              </div>
            </div>
            
            {/* Enhanced BOAMP Content */}
            <div className="p-6 space-y-6 bg-gradient-to-br from-blue-50 to-indigo-50 h-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">B</span>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800">BOAMP</h1>
                    <p className="text-gray-600">Bulletin officiel des annonces de marchés publics</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm"><Search className="w-4 h-4" /></Button>
                  <Button variant="outline" size="sm"><Filter className="w-4 h-4" /></Button>
                  <Button variant="outline" size="sm"><Settings className="w-4 h-4" /></Button>
                </div>
              </div>
              
              {isPlaying && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-blue-200">
                    <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    <div>
                      <div className="font-semibold text-blue-600">{currentStepData.content.status}</div>
                      <div className="text-sm text-gray-600">Sources multiples en cours de traitement...</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {currentStepData.content.results.map((result: string, index: number) => (
                      <div 
                        key={index}
                        className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 animate-fade-in"
                        style={{ animationDelay: `${index * 500}ms` }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="font-semibold text-gray-800 text-sm">{result}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-1.5 rounded-full transition-all duration-2000"
                            style={{ width: isPlaying ? '100%' : '0%' }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
                    <div className="flex items-center gap-2 text-green-700 font-semibold mb-2">
                      <TrendingUp className="w-5 h-5" />
                      Résultat de l'extraction
                    </div>
                    <div className="text-sm text-gray-700">
                      <strong>547 documents</strong> traités • <strong>89% de précision</strong> • <strong>23 opportunités Premium</strong> détectées
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case "terminal":
        return (
          <div className="h-full bg-gray-900 text-green-400 font-mono">
            {/* Enhanced Terminal Header */}
            <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <Terminal className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">eligible-ai@macbook:~/scraper</span>
              </div>
              <div className="flex gap-2 text-gray-400">
                <Minimize2 className="w-4 h-4 hover:text-white cursor-pointer" />
                <Maximize2 className="w-4 h-4 hover:text-white cursor-pointer" />
                <X className="w-4 h-4 hover:text-red-400 cursor-pointer" />
              </div>
            </div>
            
            {/* Enhanced Terminal Content */}
            <div className="p-4 text-sm leading-relaxed overflow-y-auto" style={{ height: 'calc(100% - 40px)' }}>
              <div className="text-blue-400 mb-2">
                eligible-ai@macbook:~/scraper$ {currentStepData.content.commands[0]}
              </div>
              
              {terminalLines.map((line: string, index: number) => (
                <div 
                  key={index} 
                  className="mb-1 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {line}
                </div>
              ))}
              
              {isPlaying && progress > 80 && (
                <div className="mt-4 p-3 bg-green-900/20 border border-green-500/30 rounded">
                  <div className="flex items-center gap-2 text-green-400 mb-2">
                    <CheckCircle className="w-4 h-4" />
                    <span className="font-semibold">Extraction terminée avec succès</span>
                  </div>
                  <div className="text-green-300 text-xs grid grid-cols-2 gap-4">
                    <div>📊 Documents: 547/547</div>
                    <div>⚡ Vitesse: 2.3s/doc</div>
                    <div>💾 Taille: 234 MB</div>
                    <div>✅ Succès: 99.1%</div>
                  </div>
                </div>
              )}
              
              {showAnimatedCursor && isPlaying && (
                <span className="bg-green-400 w-2 h-4 inline-block animate-pulse ml-1">_</span>
              )}
            </div>
          </div>
        );

      case "vscode":
        return (
          <div className="h-full bg-gray-900 text-white">
            {/* Enhanced VS Code Header */}
            <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Code className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300">{currentStepData.content.filename}</span>
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                </div>
              </div>
              <div className="flex gap-4 text-xs text-gray-400">
                <span>TypeScript</span>
                <span>UTF-8</span>
                <span>Ln 47, Col 12</span>
              </div>
            </div>
            
            {/* VS Code Sidebar */}
            <div className="flex h-full">
              <div className="w-12 bg-gray-800 border-r border-gray-700 flex flex-col items-center py-2 gap-3">
                <FileText className="w-5 h-5 text-blue-400" />
                <Search className="w-5 h-5 text-gray-400" />
                <Database className="w-5 h-5 text-gray-400" />
                <Settings className="w-5 h-5 text-gray-400" />
              </div>
              
              {/* Code Editor */}
              <div className="flex-1 p-4 font-mono text-sm leading-relaxed overflow-hidden">
                <div className="flex items-center gap-4 mb-4 text-xs">
                  <div className="flex items-center gap-2 text-gray-400">
                    <span>1</span><span>2</span><span>3</span><span>...</span><span>47</span>
                  </div>
                  <div className="text-green-400">● Running AI Analysis...</div>
                </div>
                
                <pre className="text-green-400 whitespace-pre-wrap leading-6">
                  {typedText}
                  {showAnimatedCursor && isPlaying && <span className="bg-white w-1 h-5 inline-block animate-pulse">|</span>}
                </pre>
                
                {progress > 70 && (
                  <div className="mt-6 space-y-3">
                    <div className="p-4 bg-green-900/20 border border-green-500/30 rounded">
                      <div className="flex items-center gap-2 text-green-400 mb-2">
                        <Brain className="w-5 h-5" />
                        <span className="font-semibold">Multi-LLM Analysis Completed</span>
                      </div>
                      <div className="text-xs text-green-300 space-y-1">
                        <div>✅ GPT-4: Structured extraction completed</div>
                        <div>✅ Claude 3.5: Competition analysis ready</div>
                        <div>✅ Mistral: Risk assessment finished</div>
                        <div className="text-yellow-300">📊 Confidence score: 94.2%</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case "dashboard":
        return (
          <div className="h-full bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
            {/* Enhanced Dashboard Header */}
            <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="font-bold text-gray-800 text-lg">eligible.ai Dashboard</h1>
                  <p className="text-sm text-gray-600">Intelligence Analysis • Live Results</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-green-100 text-green-700">Live</Badge>
                <Badge className="bg-blue-100 text-blue-700">AI Powered</Badge>
                <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
              </div>
            </div>
            
            {/* Enhanced Dashboard Content */}
            <div className="p-6 space-y-6 overflow-y-auto" style={{ height: 'calc(100% - 80px)' }}>
              {/* Main Result Card */}
              <Card className="border border-purple-200 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Award className="w-6 h-6 text-purple-600" />
                        <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg px-4 py-2 animate-pulse">
                          Score: {currentStepData.content.score}%
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 leading-tight">
                        {currentStepData.content.title}
                      </h3>
                      <p className="text-gray-600">{currentStepData.content.details.contracting}</p>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="text-2xl font-bold text-purple-600">{currentStepData.content.budget}</div>
                      <div className="text-sm text-gray-600">Budget estimé</div>
                    </div>
                  </div>
                  
                  {/* Key Details Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-100">
                    <div>
                      <div className="text-sm text-gray-600">Publication</div>
                      <div className="font-semibold text-gray-800">{currentStepData.content.publication}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Échéance</div>
                      <div className="font-semibold text-red-600">{currentStepData.content.deadline}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Durée</div>
                      <div className="font-semibold text-gray-800">{currentStepData.content.details.duration}</div>
                    </div>
                  </div>
                  
                  {/* Detailed Criteria Analysis */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-800 flex items-center gap-2">
                      <Brain className="w-5 h-5 text-purple-600" />
                      Analyse Multi-Critères IA
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(currentStepData.content.criteria).map(([key, value]: [string, number]) => (
                        <div key={key} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-700 capitalize">
                              {key === 'expertise' ? '🎯 Expertise Match' : 
                               key === 'budget' ? '💰 Budget Alignment' :
                               key === 'location' ? '📍 Geo Proximity' : 
                               key === 'competition' ? '⚔️ Competition Level' :
                               key === 'timeline' ? '⏰ Timeline Feasibility' : '📋 Requirements Fit'}
                            </span>
                            <span className="font-bold text-purple-600">{value}%</span>
                          </div>
                          <div className="relative">
                            <div className="w-full bg-gray-200 rounded-full h-3">
                              <div 
                                className={`h-3 rounded-full transition-all duration-2000 ${
                                  value >= 90 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                                  value >= 80 ? 'bg-gradient-to-r from-blue-500 to-purple-500' :
                                  value >= 70 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                                  'bg-gradient-to-r from-red-500 to-pink-500'
                                }`}
                                style={{ width: isPlaying ? `${value}%` : '0%' }}
                              ></div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* AI Recommendation */}
                  {progress > 60 && (
                    <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl animate-fade-in">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                          <Zap className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-green-800 text-lg">{currentStepData.content.recommendation}</div>
                          <div className="text-sm text-green-700">Basé sur l'analyse IA multi-modèles</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-green-700">Concurrents estimés:</span>
                          <span className="font-semibold text-green-800 ml-2">{currentStepData.content.details.competitors}</span>
                        </div>
                        <div>
                          <span className="text-green-700">Taux de succès prévu:</span>
                          <span className="font-semibold text-green-800 ml-2">73%</span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Action Buttons */}
              {progress > 80 && (
                <div className="flex gap-4 animate-fade-in">
                  <Button className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3">
                    <Download className="w-5 h-5 mr-2" />
                    Télécharger l'analyse complète
                  </Button>
                  <Button variant="outline" className="flex-1 border-purple-200 text-purple-700 hover:bg-purple-50 py-3">
                    <Eye className="w-5 h-5 mr-2" />
                    Voir le document source
                  </Button>
                </div>
              )}
            </div>
          </div>
        );

      case "notifications":
        return (
          <div className="h-full bg-gray-100 relative">
            {/* Desktop Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600"></div>
            <div className="absolute inset-0 bg-black/20"></div>
            
            {/* Dock */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-md rounded-2xl px-4 py-2 flex gap-2">
              {[Slack, Mail, Chrome, Terminal, Code].map((Icon, index) => (
                <div key={index} className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center hover:bg-white/40 cursor-pointer transition-all hover:scale-110">
                  <Icon className="w-6 h-6 text-white" />
                </div>
              ))}
            </div>
            
            {/* Notifications */}
            <div className="absolute top-4 right-4 space-y-3">
              {/* Slack Notification */}
              <div className="bg-white rounded-xl shadow-2xl p-4 w-80 animate-slide-in border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Slack className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Slack</div>
                    <div className="text-xs text-gray-600">Il y a quelques secondes</div>
                  </div>
                </div>
                <div className="text-sm text-gray-700">
                  <div className="font-semibold">#opportunities</div>
                  <div>🚨 <strong>Nouvelle opportunité Premium!</strong></div>
                  <div>Formation E-learning - 2.4M€ - Score: 92%</div>
                </div>
              </div>
              
              {/* Email Notification */}
              <div className="bg-white rounded-xl shadow-2xl p-4 w-80 animate-slide-in border border-gray-200" style={{ animationDelay: '500ms' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Email</div>
                    <div className="text-xs text-gray-600">Il y a quelques secondes</div>
                  </div>
                </div>
                <div className="text-sm text-gray-700">
                  <div className="font-semibold">Rapport d'Analyse IA</div>
                  <div>eligible.ai a détecté une opportunité majeure correspondant à vos critères...</div>
                </div>
              </div>

              {/* System Notification */}
              <div className="bg-white rounded-xl shadow-2xl p-4 w-80 animate-slide-in border border-gray-200" style={{ animationDelay: '1000ms' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">eligible.ai</div>
                    <div className="text-xs text-gray-600">Maintenant</div>
                  </div>
                </div>
                <div className="text-sm text-gray-700">
                  <div className="font-semibold">Processus terminé</div>
                  <div>Analyse complète disponible dans votre dashboard</div>
                </div>
              </div>
            </div>
            
            {/* Time Display */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-white text-6xl font-light">
              {currentTime}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-24 bg-background">
      {/* Floating Notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {notifications.map((notification, index) => (
          <div 
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-3 min-w-64 animate-slide-in"
          >
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-800">{notification}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 mb-6">
            <Play className="w-4 h-4 mr-2" />
            Simulation Interactive Avancée
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Le processus complet{" "}
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
              en temps réel
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Observez notre IA en action : de la connexion aux sources officielles 
            jusqu'aux notifications multi-canaux, chaque étape du workflow automatisé.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Enhanced MacBook Frame */}
          <div className="relative" style={{ perspective: '1000px' }}>
            {/* MacBook Body */}
            <div className={`bg-gray-800 rounded-t-3xl p-6 shadow-2xl transition-all duration-700 ${
              isFullscreen ? 'transform scale-110 rotateX(-5deg)' : ''
            }`}>
              {/* MacBook Screen */}
              <div className="bg-black rounded-2xl p-3 shadow-inner">
                {/* Enhanced Notch */}
                <div className="w-40 h-7 bg-black rounded-b-3xl mx-auto mb-3 relative">
                  <div className="absolute inset-x-6 top-3 h-1 bg-gray-800 rounded-full"></div>
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full"></div>
                </div>
                
                {/* Screen Content */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg relative" style={{ height: '500px' }}>
                  {/* Animated Cursor */}
                  {isPlaying && (
                    <div 
                      className="absolute z-50 pointer-events-none transition-all duration-1000 ease-out"
                      style={{ 
                        left: `${cursorPosition.x}%`, 
                        top: `${cursorPosition.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div className="relative">
                        {/* Cursor */}
                        <div className="w-6 h-6 transform rotate-12">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-800 drop-shadow-lg">
                            <path d="M8.5 2.1L3.3 17.3l4.9-1.4 1.9 4.9 3.4-1.3L8.5 2.1z"/>
                          </svg>
                        </div>
                        {/* Click effect */}
                        <div className="absolute inset-0 w-8 h-8 -translate-x-1 -translate-y-1">
                          <div className="w-full h-full rounded-full border-2 border-blue-500 animate-ping opacity-75"></div>
                        </div>
                        {/* Trail effect */}
                        <div className="absolute -inset-2 w-10 h-10 rounded-full bg-blue-500/20 animate-pulse"></div>
                      </div>
                    </div>
                  )}
                  
                  {/* Enhanced macOS Menu Bar */}
                  <div className="bg-gray-50/80 backdrop-blur-sm px-4 py-2 flex items-center justify-between text-xs border-b border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="font-semibold cursor-pointer hover:bg-gray-200 px-2 py-1 rounded">🍎</div>
                      <div className="text-gray-600 cursor-pointer hover:bg-gray-200 px-2 py-1 rounded font-medium">
                        {currentStepData.component === 'browser' ? 'Chrome' :
                         currentStepData.component === 'terminal' ? 'Terminal' :
                         currentStepData.component === 'vscode' ? 'VS Code' :
                         currentStepData.component === 'dashboard' ? 'Dashboard' :
                         'Desktop'}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Wifi className="w-3 h-3" />
                      <Signal className="w-3 h-3" />
                      <Battery className="w-4 h-3" />
                      <span className="font-medium">{currentTime}</span>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div style={{ height: 'calc(100% - 36px)' }}>
                    {renderMacBookContent()}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced MacBook Base */}
            <div className="bg-gradient-to-b from-gray-700 to-gray-800 h-6 rounded-b-3xl shadow-xl relative">
              <div className="absolute inset-x-12 top-2 h-2 bg-gray-600 rounded-full shadow-inner"></div>
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gray-500 rounded-full"></div>
            </div>
          </div>

          {/* Enhanced Controls */}
          <div className="mt-16 space-y-8">
            {/* Main Progress */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Étape {currentStep + 1}/5: {currentStepData.title}</h3>
                  {currentStepData.substeps && (
                    <p className="text-gray-600 mt-1">
                      Sous-étape: {currentStepData.substeps[currentSubstep]}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">{Math.round(progress)}%</div>
                  <div className="text-sm text-gray-600">Progression</div>
                </div>
              </div>
              
              <Progress value={progress} className="h-4 mb-4" />
              
              {/* Substeps Progress */}
              {currentStepData.substeps && (
                <div className="grid grid-cols-5 gap-2 mt-4">
                  {currentStepData.substeps.map((substep, index) => (
                    <div 
                      key={index}
                      className={`text-xs p-2 rounded-lg text-center transition-all ${
                        index <= currentSubstep 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {substep}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Control Buttons */}
            <div className="flex justify-center gap-6">
              <Button 
                onClick={startSimulation} 
                disabled={isPlaying}
                variant="default"
                size="xl"
                className="flex items-center gap-3 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <Play className="w-6 h-6" />
                {isPlaying ? "Simulation en cours..." : "Démarrer la simulation"}
              </Button>
              
              <Button 
                onClick={pauseSimulation} 
                disabled={!isPlaying}
                variant="outline"
                size="xl"
                className="px-6 py-4"
              >
                <Pause className="w-6 h-6" />
              </Button>
              
              <Button 
                onClick={resetSimulation}
                variant="outline"
                size="xl"
                className="px-6 py-4"
              >
                <RotateCcw className="w-6 h-6" />
              </Button>

              <Button 
                onClick={() => setIsFullscreen(!isFullscreen)}
                variant="outline"
                size="xl"
                className="px-6 py-4"
              >
                {isFullscreen ? <Minimize2 className="w-6 h-6" /> : <Maximize2 className="w-6 h-6" />}
              </Button>
            </div>

            {/* Enhanced Step Indicators */}
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <Card 
                  key={step.id}
                  className={`p-4 transition-all cursor-pointer hover:shadow-lg ${
                    index === currentStep 
                      ? 'bg-primary text-primary-foreground shadow-xl scale-105' 
                      : index < currentStep 
                        ? 'bg-green-50 border-green-200 text-green-700' 
                        : 'bg-gray-50 text-gray-500'
                  }`}
                  onClick={() => !isPlaying && setCurrentStep(index)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {index < currentStep ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : index === currentStep ? (
                      <Clock className="w-5 h-5 animate-spin" />
                    ) : (
                      <AlertCircle className="w-5 h-5" />
                    )}
                    <span className="font-semibold text-sm">Étape {step.id}</span>
                  </div>
                  <div className="text-sm font-medium">{step.title}</div>
                </Card>
              ))}
            </div>

            {/* Performance Metrics */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                Métriques de Performance
              </h3>
              <div className="grid grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">2.3s</div>
                  <div className="text-sm text-gray-600">Temps moyen par document</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">99.1%</div>
                  <div className="text-sm text-gray-600">Taux de succès extraction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">94.2%</div>
                  <div className="text-sm text-gray-600">Précision IA moyenne</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">547</div>
                  <div className="text-sm text-gray-600">Documents traités</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};