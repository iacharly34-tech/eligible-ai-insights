import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { ArticleRecommendations } from "@/components/ArticleRecommendations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SafeLink } from "@/components/SafeLink";
import { 
  Scale, 
  Euro, 
  Award, 
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Target,
  BarChart3,
  Lightbulb,
  FileText,
  Calculator
} from "lucide-react";

const PrixQualite = () => {
  return (
    <>
      <SEOHead />
      <StructuredData />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
        <Header />
        
        <main className="pt-32 pb-20">
          <article className="container mx-auto max-w-4xl px-4">
            {/* Header */}
            <header className="mb-12">
              <Badge className="mb-6 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 border-emerald-200">
                <Scale className="w-4 h-4 mr-2" />
                Stratégie de prix
              </Badge>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
                Prix vs Qualité : trouver le juste équilibre dans vos offres
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Comment positionner son offre pour maximiser ses chances de succès sans sacrifier sa rentabilité ? Le guide complet du pricing stratégique sur les marchés publics.
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span>15 septembre 2025</span>
                <span>•</span>
                <span>10 min de lecture</span>
              </div>
            </header>

            {/* Introduction */}
            <section className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Le dilemme prix/qualité est au cœur de chaque réponse aux appels d'offres.</strong> Proposer le prix le plus bas ? Miser sur la qualité technique ? Dans la réalité, ni l'un ni l'autre n'est une stratégie gagnante. La clé réside dans la compréhension fine des critères de notation et du positionnement optimal.
              </p>
              
              <blockquote className="border-l-4 border-emerald-500 pl-6 my-8 bg-emerald-50/50 py-4 rounded-r-lg">
                <p className="text-lg font-medium text-gray-800 mb-2">
                  "Le prix le plus bas ne gagne que dans 35% des cas. Les 65% restants sont remportés par des offres mieux positionnées sur le rapport qualité-prix."
                </p>
                <cite className="text-sm text-gray-600">— Analyse Eligibly sur 50 000 attributions</cite>
              </blockquote>
            </section>

            {/* Comprendre les critères */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Comprendre les critères de notation</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Avant de définir votre stratégie, analysez précisément la pondération des critères. Cette information, obligatoirement présente dans le règlement de consultation, détermine votre approche.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Euro className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Prix dominant</h3>
                    <div className="text-2xl font-bold text-blue-600 mb-2">60-70%</div>
                    <p className="text-sm text-gray-600">Stratégie : prix agressif, technique standard</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Scale className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Équilibré</h3>
                    <div className="text-2xl font-bold text-emerald-600 mb-2">40-60%</div>
                    <p className="text-sm text-gray-600">Stratégie : optimiser les deux axes</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Award className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Qualité dominante</h3>
                    <div className="text-2xl font-bold text-purple-600 mb-2">30-40%</div>
                    <p className="text-sm text-gray-600">Stratégie : excellence technique, prix raisonnable</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Les erreurs à éviter */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Les 5 erreurs fatales de pricing</h2>

              <div className="space-y-4">
                <Card className="border-l-4 border-red-500 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">Erreur #1 : Le prix plancher systématique</h3>
                        <p className="text-gray-600 text-sm">Proposer toujours le prix le plus bas détruit vos marges et vous positionne comme low-cost. Les acheteurs se méfient des offres anormalement basses.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-red-500 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">Erreur #2 : Ignorer la pondération</h3>
                        <p className="text-gray-600 text-sm">Sur un marché où le prix compte pour 70%, investir massivement dans le mémoire technique est une perte de temps et d'argent.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-red-500 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">Erreur #3 : Le copier-coller tarifaire</h3>
                        <p className="text-gray-600 text-sm">Appliquer les mêmes tarifs d'un marché à l'autre sans analyser le contexte local et la concurrence probable.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-red-500 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">Erreur #4 : Sous-estimer les coûts cachés</h3>
                        <p className="text-gray-600 text-sm">Oublier les frais de déplacement, la gestion administrative, les imprévus... et se retrouver à exécuter un marché à perte.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-red-500 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">Erreur #5 : Ne pas connaître sa zone de rentabilité</h3>
                        <p className="text-gray-600 text-sm">Gagner un marché non rentable est pire que de le perdre. Définissez votre prix plancher avant de commencer.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* La méthode optimale */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">La méthode du positionnement optimal</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Le positionnement optimal consiste à maximiser votre score global (prix + technique) plutôt que de chercher l'excellence sur un seul critère.
              </p>

              <Card className="border-0 shadow-xl bg-gradient-to-r from-emerald-50 to-teal-50 mb-8">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Calculator className="w-8 h-8 text-emerald-600" />
                    <h3 className="font-bold text-xl">Simulation de score</h3>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-6">
                    Exemple : Marché avec prix (60%) et technique (40%). Estimation du prix moyen des concurrents : 100 000€
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-emerald-200">
                          <th className="text-left py-3">Stratégie</th>
                          <th className="text-center py-3">Prix</th>
                          <th className="text-center py-3">Note prix</th>
                          <th className="text-center py-3">Note tech.</th>
                          <th className="text-center py-3">Score total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3">Prix agressif</td>
                          <td className="text-center">85 000€</td>
                          <td className="text-center">60/60</td>
                          <td className="text-center">28/40</td>
                          <td className="text-center font-bold">88/100</td>
                        </tr>
                        <tr className="border-b bg-emerald-100">
                          <td className="py-3 font-bold">Équilibré optimal</td>
                          <td className="text-center">95 000€</td>
                          <td className="text-center">54/60</td>
                          <td className="text-center">36/40</td>
                          <td className="text-center font-bold text-emerald-700">90/100 ✓</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3">Qualité max</td>
                          <td className="text-center">110 000€</td>
                          <td className="text-center">46/60</td>
                          <td className="text-center">40/40</td>
                          <td className="text-center font-bold">86/100</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Stratégies par type de marché */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Stratégies par type de marché</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <FileText className="w-8 h-8 text-blue-600" />
                      <h3 className="font-bold">Marchés de fournitures</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Prix souvent prépondérant (60-70%)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Qualité = conformité aux spécifications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Délais de livraison critiques</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-8 h-8 text-purple-600" />
                      <h3 className="font-bold">Marchés de services</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Technique souvent valorisée (40-50%)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Méthodologie et références clés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Équipe proposée différenciante</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="w-8 h-8 text-emerald-600" />
                      <h3 className="font-bold">Marchés de travaux</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Prix significatif mais pas unique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Sécurité et environnement valorisés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Planning réaliste essentiel</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Lightbulb className="w-8 h-8 text-amber-600" />
                      <h3 className="font-bold">Marchés innovants</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Innovation souvent à 30-40%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Valeur ajoutée prime sur le prix</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Démonstration de ROI attendue</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Comment Charly aide */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">L'IA au service de votre pricing</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Charly analyse les données historiques et vous aide à positionner votre offre de manière optimale.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <BarChart3 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Analyse des attributions passées</h4>
                    <p className="text-sm text-gray-600">Charly identifie les fourchettes de prix gagnantes sur des marchés similaires.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Simulation de scoring</h4>
                    <p className="text-sm text-gray-600">Testez différents scénarios prix/technique pour trouver l'optimum.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Benchmark concurrentiel</h4>
                    <p className="text-sm text-gray-600">Estimez le positionnement probable de vos concurrents.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Calculator className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Calcul de rentabilité</h4>
                    <p className="text-sm text-gray-600">Vérifiez que votre prix respecte vos contraintes de marge.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Optimisez le prix de vos offres avec Charly
              </h2>
              <p className="text-lg mb-8 text-emerald-100 max-w-2xl mx-auto">
                Ne jouez plus à pile ou face avec vos tarifs. Laissez l'IA vous guider vers le positionnement optimal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SafeLink to="/demo">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                    Tester gratuitement
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </SafeLink>
                <SafeLink to="/produit">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Découvrir Charly
                  </Button>
                </SafeLink>
              </div>
            </section>
          </article>

          <ArticleRecommendations currentArticle="/prix-qualite" />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrixQualite;
