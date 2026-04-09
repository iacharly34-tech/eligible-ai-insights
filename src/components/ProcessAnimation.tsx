import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Globe, 
  FileText, 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  Code, 
  Database,
  Zap,
  Target,
  BarChart3,
  Sparkles,
  Activity,
  Cpu
} from "lucide-react";

export const ProcessAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const steps = [
    {
      id: 1,
      title: "Connexion BOAMP.org",
      description: "Scraping intelligent des sources officielles",
      icon: Globe,
      code: `const scrapeBOAMP = async () => {
  const browser = await puppeteer.launch();
  const response = await fetch('/api/v1/offres', {
    headers: { 'User-Agent': 'EligiblyBot/2.0' }
  });
  return await response.json();
};`,
      status: "🔄 Scanning 600+ sources en temps réel...",
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 2,
      title: "Détection ML",
      description: "Machine Learning pour identifier les nouvelles opportunités",
      icon: Activity,
      code: `const detectNewOffers = async (data) => {
  const newOffers = await ml.classify(data, {
    model: 'procurement-detector-v3',
    threshold: 0.85,
    filters: ['type:APPEL_OFFRES', 'status:ACTIVE']
  });
  
  return newOffers.filter(o => o.confidence > 0.9);
};`,
      status: "🎯 47 nouvelles opportunités détectées",
      color: "from-success/100 to-success/100",
      gradient: "bg-gradient-to-br from-success/100/20 to-success/100/20"
    },
    {
      id: 3,
      title: "IA Générative", 
      description: "LLM avancé pour l'analyse sémantique complète",
      icon: Cpu,
      code: `const analyzeWithAI = async (document) => {
  const analysis = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages: [{
      role: "system",
      content: "Extrait secteur, budget, critères, délais..."
    }, {
      role: "user", 
      content: document.fullText
    }],
    temperature: 0.1
  });
  
  return JSON.parse(analysis.choices[0].message.content);
};`,
      status: "🧠 Deep learning analysis in progress...",
      color: "from-purple-500 to-violet-500",
      gradient: "bg-gradient-to-br from-purple-500/20 to-violet-500/20"
    },
    {
      id: 4,
      title: "Scoring Algorithmique",
      description: "Algorithme propriétaire de matching intelligent",
      icon: Target,
      code: `const calculateSmartScore = (analysis, profile) => {
  const vectors = {
    expertise: cosineSimilarity(analysis.skills, profile.skills),
    budget: normalizeScore(analysis.amount, profile.range),
    geography: calculateDistance(analysis.location, profile.zones),
    competition: analyzeCompetitors(analysis.sector)
  };
  
  const weights = [0.35, 0.25, 0.20, 0.20];
  return vectors.reduce((acc, score, i) => acc + score * weights[i], 0);
};`,
      status: "⚡ Score calculé: 88% - Opportunité Premium",
      color: "from-amber-500 to-orange-500",
      gradient: "bg-gradient-to-br from-amber-500/20 to-orange-500/20"
    }
  ];

  const processData = {
    title: "Plateforme E-learning - Ministère Éducation",
    budget: "2.4M€", 
    deadline: "15 mars 2025",
    score: 88,
    status: "🏆 Premium Match",
    location: "Paris & Île-de-France",
    criteria: {
      expertise: 95,
      budget: 87,
      location: 92,
      competition: 78
    },
    tags: ["Formation", "Digital", "E-learning", "React", "LMS"]
  };

  const typeEffect = (text: string, callback?: () => void) => {
    setTypedText("");
    setIsTyping(true);
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setTypedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setIsTyping(false);
        callback?.();
      }
    }, 30);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            if (currentStep < steps.length - 1) {
              setCurrentStep(current => current + 1);
              typeEffect(steps[currentStep + 1]?.code || "");
            } else {
              setIsPlaying(false);
              setCurrentStep(0);
            }
            return 0;
          }
          return prev + 1.5;
        });
      }, 80);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentStep, steps.length]);

  const startAnimation = () => {
    setCurrentStep(0);
    setProgress(0);
    setIsPlaying(true);
    typeEffect(steps[0].code);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-success/100/20 to-success/100/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            IA Générative • Temps Réel
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-purple-600 bg-clip-text text-transparent">
            Du scraping au{" "}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              scoring IA
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Notre stack moderne analyse en temps réel chaque appel d'offre avec 
            <strong className="text-primary"> Machine Learning</strong>, <strong className="text-primary">LLM</strong> et 
            <strong className="text-primary"> algorithmes propriétaires</strong>.
          </p>
          
          <Button 
            onClick={startAnimation} 
            variant="default" 
            size="xl"
            className="mb-12 group shadow-luxury hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            disabled={isPlaying}
          >
            {isPlaying ? (
              <>
                <Activity className="w-5 h-5 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Code className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Voir la tech en action
              </>
            )}
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Animation Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const isActive = index === currentStep;
              const isCompleted = index < currentStep || (index === currentStep && progress === 100);
              
              return (
                <Card 
                  key={step.id}
                  className={`transition-all duration-700 border backdrop-blur-sm ${
                    isActive 
                      ? `border-primary/40 shadow-2xl ${step.gradient} scale-105 ring-2 ring-primary/20` 
                      : isCompleted 
                        ? 'border-success/20/30 bg-success/100/5 backdrop-blur-sm' 
                        : 'border-border/30 opacity-60 bg-card/50 backdrop-blur-sm'
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 shadow-lg ${
                        isActive ? 'scale-110 animate-pulse shadow-2xl' : ''
                      }`}>
                        {isCompleted ? (
                          <CheckCircle className="w-7 h-7 text-white animate-bounce" />
                        ) : (
                          <step.icon className={`w-7 h-7 text-white ${isActive ? 'animate-pulse' : ''}`} />
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-bold text-lg text-foreground">{step.title}</h3>
                          <Badge variant="secondary" className="text-xs bg-card/80 backdrop-blur-sm">
                            Étape {step.id}/4
                          </Badge>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {step.description}
                        </p>
                        
                        {isActive && (
                          <>
                            <Progress 
                              value={progress} 
                              className="mb-4 h-2" 
                            />
                            <div className="text-sm font-medium mb-4 flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
                              {step.status}
                            </div>
                          </>
                        )}
                        
                        <div className="bg-black/90 backdrop-blur-md rounded-xl p-4 font-mono text-sm overflow-hidden border border-primary/20">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-success/100 rounded-full"></div>
                            <span className="text-muted-foreground text-xs ml-2">eligibly-ai.js</span>
                          </div>
                          <pre className="text-success leading-relaxed text-xs">
                            {isActive ? (
                              <>{typedText}<span className={`${isTyping ? 'animate-pulse' : ''}`}>|</span></>
                            ) : (
                              step.code
                            )}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Modern Result Card */}
          <div className="space-y-6">
            <Card className="border-primary/20 shadow-2xl bg-card/80 backdrop-blur-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <Target className="w-6 h-6 text-primary" />
                    Résultat IA
                  </h3>
                  <Badge className="bg-gradient-to-r from-primary to-purple-500 text-white text-lg px-4 py-2 shadow-lg animate-pulse">
                    {processData.score}% Match
                  </Badge>
                </div>
                
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20">
                    <h4 className="font-bold text-foreground mb-2 text-lg">{processData.title}</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Budget:</span>
                        <div className="font-bold text-primary text-lg">{processData.budget}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Deadline:</span>
                        <div className="font-bold text-foreground">{processData.deadline}</div>
                      </div>
                      <div className="col-span-2">
                        <span className="text-muted-foreground">Zone:</span>
                        <div className="font-semibold text-foreground">{processData.location}</div>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {processData.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <h5 className="font-bold text-foreground flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      Analyse Multi-Critères
                    </h5>
                    {Object.entries(processData.criteria).map(([key, value]) => (
                      <div key={key} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground capitalize font-medium">
                            {key === 'expertise' ? '🎯 Expertise Match' : 
                             key === 'budget' ? '💰 Budget Fit' :
                             key === 'location' ? '📍 Geo Proximity' : '⚔️ Competition Level'}
                          </span>
                          <span className="font-bold text-primary">{value}%</span>
                        </div>
                        <div className="relative">
                          <Progress value={value} className="h-3" />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-6 border-t border-border/30">
                    <div className="bg-gradient-to-r from-success/100/20 to-success/100/20 backdrop-blur-sm border border-success/20/30 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-success mb-1">{processData.status}</div>
                      <div className="text-sm text-success">Candidature fortement recommandée</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Modern Tech Stack */}
            <Card className="border-border/30 bg-card/50 backdrop-blur-xl">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-primary" />
                  Stack Technique 2025
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                      <div className="w-3 h-3 bg-primary/10 border border-primary/20 rounded-full animate-pulse"></div>
                      <span className="font-medium">Next.js 14 + TypeScript</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-gradient-to-r from-success/100/10 to-success/100/10 border border-success/20/20">
                      <div className="w-3 h-3 bg-gradient-to-r from-success/100 to-success/100 rounded-full animate-pulse"></div>
                      <span className="font-medium">GPT-4 + Claude 3.5</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-500/20">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full animate-pulse"></div>
                      <span className="font-medium">Puppeteer + Playwright</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20">
                      <div className="w-3 h-3 bg-warning/10 border border-warning/20 rounded-full animate-pulse"></div>
                      <span className="font-medium">Vector DB + Redis</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};