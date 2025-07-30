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
        <div className="text-center mb-6">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-4 py-2">
            <TrendingUp className="w-4 h-4 mr-2" />
            +2000 opportunités détectées cette semaine
          </Badge>
        </div>

        {/* Header text */}
        <div className="text-center mb-12 max-w-5xl mx-auto">
          <div className="text-sm font-medium text-muted-foreground mb-6 tracking-widest uppercase">
            L'INTELLIGENCE ARTIFICIELLE AU SERVICE DES MARCHÉS PUBLICS
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light text-foreground leading-tight mb-6 tracking-tight">
            Transformez votre{" "}
            <span className="text-primary font-medium bg-gradient-primary bg-clip-text text-transparent">
              veille commerciale
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed font-light">
            Notre IA analyse <strong>automatiquement</strong> tous les appels d'offres publics, 
            les score selon vos critères et vous alerte en temps réel des meilleures opportunités.
          </p>

          {/* Value Propositions */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>+600 sources surveillées</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Scoring IA précis à 98%</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Alertes en moins de 15min</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="rolex" size="xl" className="text-base px-12 py-4 group">
              Démarrer gratuitement
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="ghost" size="xl" className="text-base px-8 py-4 flex items-center gap-2">
              <Play className="w-4 h-4" />
              Voir la démo (2min)
            </Button>
          </div>

          <div className="text-xs text-muted-foreground mt-4">
            ✨ Aucune carte bancaire requise • Essai gratuit 14 jours
          </div>
        </div>

        {/* Dashboard Interface avec stats en overlay */}
        <div className="relative max-w-6xl mx-auto">
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
          
          {/* Floating cards autour de l'interface */}
          <div className="absolute -top-6 -left-6 bg-card rounded-2xl p-6 shadow-luxury border border-border/30 hidden lg:block animate-fade-in">
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

          <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-luxury border border-border/30 hidden lg:block animate-fade-in">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-medium text-sm text-foreground">Analyse complétée</div>
                <div className="text-xs text-primary font-medium">Recommandé • Candidater maintenant</div>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 -left-8 bg-card rounded-2xl p-4 shadow-luxury border border-border/30 hidden xl:block animate-slide-in">
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

        {/* Social proof stats */}
        <div className="mt-12 text-center">
          <div className="text-sm text-muted-foreground mb-4">
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