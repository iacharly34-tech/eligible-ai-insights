import { Button } from "@/components/ui/button";
import heroImage from "@/assets/tengo-style-dashboard.jpg";
import { ArrowRight, Zap, Target, Brain } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-16">
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-primary text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Propulsé par l'Intelligence Artificielle
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Gagnez{" "}
                <span className="text-primary">
                  enfin
                </span>{" "}
                plus d'Appels d'Offres Publics
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Grâce à la puissance de l'Intelligence Artificielle, eligible.ai vous permet 
                d'identifier, analyser et répondre à tous les Appels d'offres publics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="tengo" size="lg" className="group">
                Demandez votre accès
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">+600</div>
                <div className="text-sm text-muted-foreground">Appels d'offres remontés chaque jour</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">10x</div>
                <div className="text-sm text-muted-foreground">Plus rapide pour analyser un marché</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">+50000</div>
                <div className="text-sm text-muted-foreground">Renouvellements de marchés détectés</div>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className="relative animate-slide-in">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Tableau de bord eligible.ai montrant l'analyse des appels d'offres" 
                className="w-full rounded-2xl shadow-glow border border-white/20"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-card animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Score: 89/100</div>
                    <div className="text-xs text-muted-foreground">Excellente opportunité</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-card animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">IA Active</div>
                    <div className="text-xs text-muted-foreground">Analyse en cours...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};