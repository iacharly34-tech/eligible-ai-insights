import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/js-development-workspace.jpg";
import { ArrowRight, Zap, Target, Brain, Play, CheckCircle, TrendingUp } from "lucide-react";

export const Hero = () => {
  return (
    <section className="bg-gradient-hero pt-8 pb-16 relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative">
        {/* Social Proof Banner */}
        <div className="text-center mb-8">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-4 py-2">
            <TrendingUp className="w-4 h-4 mr-2" />
            +2000 opportunités détectées cette semaine
          </Badge>
        </div>

        {/* Main Content - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
              L'INTELLIGENCE ARTIFICIELLE AU SERVICE DES MARCHÉS PUBLICS
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight tracking-tight">
              Transformez votre{" "}
              <span className="text-primary font-medium bg-gradient-primary bg-clip-text text-transparent">
                veille commerciale
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-xl">
              Notre IA analyse <strong>automatiquement</strong> tous les appels d'offres publics, 
              les score selon vos critères et vous alerte en temps réel des meilleures opportunités.
            </p>

            {/* Value Propositions */}
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+600 sources surveillées en temps réel</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Scoring IA précis à 98%</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Alertes en moins de 15 minutes</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="rolex" size="xl" className="text-base px-12 py-4 group">
                Démarrer gratuitement
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="ghost" size="xl" className="text-base px-8 py-4 flex items-center gap-2">
                <Play className="w-4 h-4" />
                Voir la démo (2min)
              </Button>
            </div>

            <div className="text-xs text-muted-foreground">
              ✨ Aucune carte bancaire requise • Essai gratuit 14 jours
            </div>
          </div>

          {/* Right Column - Dashboard Interface */}
          <div className="relative">
            <div className="bg-card rounded-3xl shadow-luxury overflow-hidden border border-border/50 relative">
              <img 
                src={heroImage} 
                alt="Interface eligible.ai - Scoring IA des appels d'offres publics" 
                className="w-full h-auto"
              />
              
              {/* Stats overlay sur l'image */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <div className="bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border/50">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-xs text-muted-foreground">Précision IA</div>
                </div>
                
                <div className="bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border/50">
                  <div className="text-2xl font-bold text-primary">2,4M€</div>
                  <div className="text-xs text-muted-foreground">Marché détecté</div>
                </div>
              </div>
            </div>
            
            {/* Floating cards repositionnées */}
            <div className="absolute -top-8 -right-8 bg-card rounded-2xl p-6 shadow-luxury border border-border/30 hidden lg:block animate-fade-in">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-medium text-sm text-foreground">Nouvelle opportunité</div>
                  <div className="text-xs text-muted-foreground">Ministère Éducation • Score: 94%</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-card rounded-2xl p-6 shadow-luxury border border-border/30 hidden lg:block animate-fade-in">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-medium text-sm text-foreground">Analyse complétée</div>
                  <div className="text-xs text-primary font-medium">Recommandé • Candidater</div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-12 bg-card rounded-2xl p-4 shadow-luxury border border-border/30 hidden xl:block animate-slide-in">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-success rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-success-foreground" />
                </div>
                <div>
                  <div className="font-medium text-xs text-foreground">Alerte temps réel</div>
                  <div className="text-xs text-muted-foreground">Il y a 3 minutes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof stats */}
        <div className="mt-16 text-center">
          <div className="text-sm text-muted-foreground mb-6">
            Rejoint par plus de 2000+ professionnels des marchés publics
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">+15M€</div>
              <div className="text-sm text-muted-foreground">de marchés remportés</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border opacity-50"></div>
            <div>
              <div className="text-3xl font-bold text-primary">47%</div>
              <div className="text-sm text-muted-foreground">d'augmentation du taux de succès</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border opacity-50"></div>
            <div>
              <div className="text-3xl font-bold text-primary">6h/semaine</div>
              <div className="text-sm text-muted-foreground">économisées en veille</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};