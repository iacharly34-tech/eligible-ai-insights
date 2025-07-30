import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dashboard.jpg";
import { ArrowRight, Zap, Target, Brain } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm">
                <Zap className="w-4 h-4 mr-2" />
                Propulsé par l'Intelligence Artificielle
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Identifiez les{" "}
                <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                  opportunités
                </span>{" "}
                d'appels d'offres
              </h1>
              
              <p className="text-xl text-blue-100 max-w-xl mx-auto lg:mx-0">
                Notre IA analyse et score automatiquement les appels d'offres publics 
                pour identifier les meilleures opportunités pour votre entreprise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                Demander une démo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                Voir comment ça marche
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-sm text-blue-200">Précision IA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10x</div>
                <div className="text-sm text-blue-200">Plus rapide</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-blue-200">Surveillance</div>
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