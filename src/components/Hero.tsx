import { Button } from "@/components/ui/button";
import heroImage from "@/assets/exact-tengo-dashboard.jpg";
import { ArrowRight, Zap, Target, Brain } from "lucide-react";

export const Hero = () => {
  return (
    <section className="bg-gradient-hero pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header text */}
        <div className="text-center mb-20 max-w-5xl mx-auto">
          <div className="text-sm font-medium text-muted-foreground mb-4 tracking-widest uppercase">
            L'INNOVATION EN MOUVEMENT
          </div>
          
          <h1 className="text-6xl md:text-7xl font-light text-foreground leading-tight mb-8 tracking-tight">
            Nouveaux modèles{" "}
            <span className="text-primary font-medium">
              2025
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Du mouvement à l'habillage, du design au choix des matériaux, eligible.ai témoigne 
            d'une inventivité et d'une exigence sans cesse renouvelées dans l'analyse des appels d'offres publics.
          </p>
          
          <Button variant="rolex" size="xl" className="text-base px-12 py-4">
            Découvrir les nouveautés
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Dashboard Interface */}
        <div className="relative max-w-7xl mx-auto">
          <div className="bg-card rounded-3xl shadow-luxury overflow-hidden border border-border/50">
            <img 
              src={heroImage} 
              alt="Interface de eligible.ai montrant l'analyse des appels d'offres" 
              className="w-full h-auto"
            />
          </div>
          
          {/* Rolex-style floating elements */}
          <div className="absolute -top-6 -left-6 bg-card rounded-2xl p-6 shadow-luxury border border-border/30 hidden lg:block">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-medium text-sm text-foreground">Opéra de Paris</div>
                <div className="text-xs text-muted-foreground">Formation numérique • 2.4M€</div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-luxury border border-border/30 hidden lg:block">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-medium text-sm text-foreground">Score de matching</div>
                <div className="text-xs text-primary font-medium">98% • Excellente opportunité</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};