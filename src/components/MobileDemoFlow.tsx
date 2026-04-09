import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AOResults } from "./AOResults";
import { useDemoAnimation } from "@/hooks/useDemoAnimation";
import { 
  Play, 
  RotateCcw, 
  CheckCircle,
  Terminal,
  Globe,
  Brain,
  Zap,
  Target,
  Clock,
  Database,
  FileText,
  TrendingUp
} from "lucide-react";

type DemoScreen = 'start' | 'collecting' | 'analyzing' | 'scoring' | 'results';

interface DemoStep {
  id: number;
  title: string;
  description: string;
  icon: any;
  duration: number;
}

export const MobileDemoFlow = () => {
  const [currentScreen, setCurrentScreen] = useState<DemoScreen>('start');
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [codeLines, setCodeLines] = useState<string[]>([]);
  const { counters, resetCounters, startAnimation, isAnimating } = useDemoAnimation();

  const demoSteps: DemoStep[] = [
    {
      id: 1,
      title: "Connexion multi-sources",
      description: "Collecte automatique depuis 8 plateformes officielles",
      icon: Globe,
      duration: 2500
    },
    {
      id: 2,
      title: "Extraction & Parsing",
      description: "Analyse et structuration des données en temps réel",
      icon: Database,
      duration: 2500
    },
    {
      id: 3,
      title: "Analyse IA Multi-LLM",
      description: "Intelligence artificielle prédictive avancée",
      icon: Brain,
      duration: 2500
    },
    {
      id: 4,
      title: "Scoring Algorithmique",
      description: "Attribution des scores de compatibilité",
      icon: Target,
      duration: 2000
    }
  ];

  const startDemo = () => {
    resetCounters();
    setCurrentScreen('collecting');
    setCurrentStep(1);
    setProgress(0);
    setTimeElapsed(0);
    setCodeLines([]);
    
    runDemoSequence();
  };

  const resetDemo = () => {
    resetCounters();
    setCurrentScreen('start');
    setCurrentStep(0);
    setProgress(0);
    setTimeElapsed(0);
    setCodeLines([]);
  };

  const runDemoSequence = () => {
    const startTime = Date.now();
    
    // Progress timer
    const progressInterval = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;
      setTimeElapsed(elapsed);
      
      const totalDuration = 10; // 10 seconds total
      const newProgress = Math.min((elapsed / totalDuration) * 100, 100);
      setProgress(newProgress);
      
      if (newProgress >= 100) {
        clearInterval(progressInterval);
        setCurrentScreen('results');
      }
    }, 100);

    // Step sequence
    executeStep(1, 0);
    setTimeout(() => executeStep(2, 2500), 2500);
    setTimeout(() => executeStep(3, 5000), 5000);
    setTimeout(() => executeStep(4, 7500), 7500);
  };

  const executeStep = (stepId: number, delay: number) => {
    setCurrentStep(stepId);
    startAnimation(stepId);
    
    // Add code lines for this step
    const stepCodeLines = getCodeLinesForStep(stepId);
    let lineIndex = 0;
    
    const addCodeLine = () => {
      if (lineIndex < stepCodeLines.length) {
        setCodeLines(prev => [...prev, stepCodeLines[lineIndex]]);
        lineIndex++;
        setTimeout(addCodeLine, 300);
      }
    };
    
    addCodeLine();
  };

  const getCodeLinesForStep = (stepId: number): string[] => {
    switch (stepId) {
      case 1:
        return [
          "// Initialisation des connexions",
          "const sources = ['BOAMP', 'TED', 'PLACE', 'AWS-DUME'];",
          "await connectToSources(sources);",
          "console.log('8 sources connectées');",
          "startDataCollection();"
        ];
      case 2:
        return [
          "",
          "// Extraction des données",
          "const rawData = await extractTenderData();",
          "const parsed = await parseStructuredData(rawData);",
          "console.log(`${parsed.length} AO extraits`);",
          "processMetadata(parsed);"
        ];
      case 3:
        return [
          "",
          "// Analyse IA avancée",
          "const models = ['GPT-4', 'Claude', 'Gemini'];",
          "const analysis = await runMultiLLMAnalysis(parsed, models);",
          "calculateCompatibilityScores(analysis);",
          "console.log('Analyse IA terminée');"
        ];
      case 4:
        return [
          "",
          "// Scoring final",
          "const scores = await generatePersonalizedScores();",
          "const ranked = rankByCompatibility(scores);",
          "console.log('Scores calculés avec succès');",
          "prepareResults(ranked);"
        ];
      default:
        return [];
    }
  };

  const renderStartScreen = () => (
    <div className="h-screen w-screen bg-gradient-primary flex flex-col items-center justify-center p-6 text-white overflow-hidden">
      <div className="text-center max-w-sm mx-auto space-y-8">
        <div className="space-y-4">
          <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto">
            <Play className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold">
            Démonstration IA
          </h1>
          <p className="text-white/90 text-lg leading-relaxed">
            Découvrez notre processus automatisé d'analyse des marchés publics
          </p>
        </div>
        
        <div className="space-y-4">
          <Button 
            onClick={startDemo}
            className="w-full h-16 text-xl font-semibold bg-card text-primary hover:bg-card rounded-2xl"
            size="lg"
          >
            <Play className="w-6 h-6 mr-3" />
            Démarrer la démonstration
          </Button>
          
          <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
            <Clock className="w-4 h-4" />
            <span>Durée : 10 secondes</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCollectingScreen = () => {
    const step = demoSteps[currentStep - 1];
    const IconComponent = step?.icon || Globe;

    return (
      <div className="h-screen w-screen bg-gradient-to-br from-background to-muted flex flex-col overflow-hidden">
        {/* Header with progress */}
        <div className="p-6 pt-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Étape {currentStep}/4</h2>
                <p className="text-muted-foreground text-sm">{step?.title}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">{Math.round(progress)}%</div>
              <div className="text-xs text-muted-foreground">{timeElapsed.toFixed(1)}s</div>
            </div>
          </div>

          <Progress value={progress} className="h-3 mb-6" />
          
          <p className="text-center text-muted-foreground mb-8">
            {step?.description}
          </p>
        </div>

        {/* Live counters */}
        <div className="px-6 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/30 rounded-2xl p-4 text-center">
              <div className="text-3xl font-bold text-primary mb-1">
                {counters.opportunities}
              </div>
              <div className="text-xs text-primary/80">Opportunités</div>
            </div>
            
            <div className="bg-gradient-to-br from-success/100/20 to-success/20 border border-success/20/30 rounded-2xl p-4 text-center">
              <div className="text-3xl font-bold text-success mb-1">
                {counters.pagesAnalyzed}
              </div>
              <div className="text-xs text-success/80">Pages analysées</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-400/30 rounded-2xl p-4 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">
                {(counters.totalWeight / 1000).toFixed(1)}MB
              </div>
              <div className="text-xs text-purple-600/80">Données traitées</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-400/30 rounded-2xl p-4 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">
                {counters.aiScore}%
              </div>
              <div className="text-xs text-orange-600/80">Score IA moyen</div>
            </div>
          </div>
        </div>

        {/* Console simulation */}
        <div className="flex-1 px-6 pb-6">
          <div className="bg-black/90 rounded-2xl p-4 h-full border border-gray-600">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-success/100 rounded-full"></div>
              </div>
              <Terminal className="w-4 h-4 text-success" />
              <span className="text-success text-sm font-mono">charly-analysis.js</span>
            </div>
            
            <div className="space-y-2 overflow-y-auto h-full">
              {codeLines.map((line, index) => (
                <div key={index} className="text-success text-sm font-mono flex items-start">
                  <span className="text-muted-foreground mr-3 select-none">{'>'}</span>
                  <span className="flex-1">{line}</span>
                </div>
              ))}
              {isAnimating && (
                <div className="text-success animate-pulse text-sm font-mono flex items-center">
                  <span className="text-muted-foreground mr-3">{'>'}</span>
                  <span className="w-2 h-4 bg-success animate-pulse"></span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderResultsScreen = () => (
    <div className="h-screen w-screen bg-gradient-to-br from-background to-muted flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-card/80 backdrop-blur-sm p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-success rounded-2xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-foreground font-bold text-lg">Analyse terminée</h2>
              <p className="text-success text-sm">127 opportunités identifiées</p>
            </div>
          </div>
          <Button 
            onClick={resetDemo}
            variant="outline"
            className="border-border text-foreground hover:bg-muted rounded-xl"
            size="sm"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Rejouer
          </Button>
        </div>
      </div>

      {/* Results - Full screen optimized */}
      <div className="flex-1 p-4 overflow-hidden">
        <div className="bg-card rounded-2xl h-full p-4 border border-border shadow-card overflow-y-auto">
          <AOResults 
            isExpanded={true}
            onToggleExpand={() => {}}
          />
        </div>
      </div>
    </div>
  );

  // Main render logic
  switch (currentScreen) {
    case 'start':
      return renderStartScreen();
    case 'collecting':
    case 'analyzing':
    case 'scoring':
      return renderCollectingScreen();
    case 'results':
      return renderResultsScreen();
    default:
      return renderStartScreen();
  }
};