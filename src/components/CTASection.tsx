import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Users, Timer, Shield } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge */}
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/10 mb-8 px-6 py-2">
            <Timer className="w-4 h-4 mr-2" />
            Offre limitée • Plus que 7 jours
          </Badge>

          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Prêt à transformer votre{" "}
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
              veille commerciale
            </span>{" "}
            ?
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Rejoignez plus de 2000+ professionnels qui utilisent déjà eligible.ai 
            pour décrocher plus de marchés publics.
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="flex items-start gap-3 text-left">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-foreground">Essai gratuit 14 jours</div>
                <div className="text-sm text-muted-foreground">Aucune carte bancaire requise</div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-foreground">Configuration en 5 minutes</div>
                <div className="text-sm text-muted-foreground">Support inclus pour la mise en route</div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-foreground">Résultats dès le premier jour</div>
                <div className="text-sm text-muted-foreground">Opportunités détectées immédiatement</div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-foreground">Support premium inclus</div>
                <div className="text-sm text-muted-foreground">Équipe dédiée pour vous accompagner</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="rolex" size="xl" className="text-lg px-12 py-4 group shadow-luxury">
              Commencer gratuitement
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="text-lg px-8 py-4">
              Planifier une démo
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>2000+ utilisateurs actifs</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border"></div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Données sécurisées RGPD</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border"></div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Support 7j/7</span>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-foreground">Résultats cette semaine</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">+2,247</div>
              <div className="text-sm text-muted-foreground">Opportunités détectées</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">847</div>
              <div className="text-sm text-muted-foreground">Alertes envoyées</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">12.4M€</div>
              <div className="text-sm text-muted-foreground">Valeur cumulée des marchés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">94%</div>
              <div className="text-sm text-muted-foreground">Précision du scoring IA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};