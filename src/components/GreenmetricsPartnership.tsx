import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Users, Award, ArrowRight, ExternalLink } from "lucide-react";

export const GreenmetricsPartnership = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-green-50 to-emerald-50 border-t border-green-100">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
            <Leaf className="w-4 h-4 mr-2" />
            Partenaire RSE recommandé
          </Badge>
          <h2 className="text-2xl font-bold mb-4 text-green-900">
            Besoin d'aide pour construire votre feuille de route environnementale ?
          </h2>
          <p className="text-green-800 max-w-3xl mx-auto">
            Eligibly recommande <strong>Greenmetrics</strong>, expert en stratégies environnementales pour les entreprises qui visent les marchés publics durables.
          </p>
        </div>

        <Card className="border-green-200 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-900">Greenmetrics</h3>
                    <p className="text-sm text-green-700">Votre expert RSE pour les marchés publics</p>
                  </div>
                </div>

                <p className="text-green-800 mb-6">
                  Greenmetrics accompagne les PME dans la construction de feuilles de route environnementales 
                  concrètes et adaptées aux exigences des appels d'offres publics.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-green-800">Diagnostic environnemental complet de votre entreprise</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-green-800">Plan d'action RSE personnalisé selon vos marchés cibles</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Leaf className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-green-800">Accompagnement pour obtenir les certifications requises</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.open('https://greenmetrics.fr/contact', '_blank')}
                  >
                    Demander un diagnostic gratuit
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-green-600 text-green-600 hover:bg-green-50"
                    onClick={() => window.open('https://greenmetrics.fr', '_blank')}
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Offre spéciale lecteurs Eligibly</h4>
                    <p className="text-sm text-green-800 mb-3">
                      Diagnostic environnemental gratuit + 20% de réduction sur l'accompagnement feuille de route
                    </p>
                    <div className="text-xs text-green-600 bg-green-100 p-2 rounded">
                      Code : ELIGIBLY2025
                    </div>
                  </CardContent>
                </Card>

                <div className="text-center p-4 bg-white rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600 mb-1">150+</div>
                  <div className="text-xs text-green-700">PME accompagnées en 2024</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-xs text-green-600">
            * Greenmetrics est un partenaire indépendant recommandé par Eligibly pour son expertise RSE spécialisée dans les marchés publics.
          </p>
        </div>
      </div>
    </section>
  );
};