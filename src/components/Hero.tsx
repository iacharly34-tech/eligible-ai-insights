import { Button } from "@/components/ui/button";
import heroImage from "@/assets/exact-tengo-dashboard.jpg";
import { ArrowRight, Zap, Target, Brain } from "lucide-react";

export const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-blue-100 pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header text */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Gagnez{" "}
            <span className="text-primary">
              enfin
            </span>{" "}
            plus d'Appels d'Offres Publics
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Grâce à la puissance de l'Intelligence Artificielle, eligible.ai vous permet 
            d'identifier, analyser et répondre à tous les Appels d'offres publics.
          </p>
          
          <Button variant="tengo" size="lg" className="text-lg px-8 py-4">
            Demandez votre accès
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Dashboard Interface */}
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <img 
              src={heroImage} 
              alt="Interface de eligible.ai montrant l'analyse des appels d'offres" 
              className="w-full h-auto"
            />
          </div>
          
          {/* Floating elements like Tengo */}
          <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-gray-200 hidden md:block">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <Target className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-semibold text-sm text-gray-900">Opéra de Paris</div>
                <div className="text-xs text-gray-500">Formation numérique</div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-200 hidden md:block">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-semibold text-sm text-gray-900">Avis global</div>
                <div className="text-xs text-green-600">Go ✓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};