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
  GraduationCap, 
  CheckCircle, 
  TrendingUp, 
  Clock, 
  Euro,
  Users,
  ArrowRight,
  BookOpen,
  Target,
  Award,
  Lightbulb,
  BarChart3
} from "lucide-react";

const FormationAO = () => {
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
              <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 border-purple-200">
                <GraduationCap className="w-4 h-4 mr-2" />
                Formation & montée en compétences
              </Badge>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
                Formation aux appels d'offres : un investissement rentable ?
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Face à la complexité des marchés publics, la formation est-elle vraiment nécessaire ? Analyse du ROI et des alternatives pour monter en compétences.
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span>28 septembre 2025</span>
                <span>•</span>
                <span>8 min de lecture</span>
              </div>
            </header>

            {/* Introduction */}
            <section className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Les marchés publics représentent 110 milliards d'euros par an en France.</strong> Pourtant, de nombreuses PME hésitent encore à s'y aventurer, intimidées par la complexité administrative et juridique. La formation est souvent présentée comme le passage obligé pour se lancer. Mais est-ce vraiment le cas ?
              </p>
              
              <blockquote className="border-l-4 border-purple-500 pl-6 my-8 bg-purple-50/50 py-4 rounded-r-lg">
                <p className="text-lg font-medium text-gray-800 mb-2">
                  "72% des PME qui se forment aux marchés publics décrochent leur premier contrat dans les 12 mois suivants."
                </p>
                <cite className="text-sm text-gray-600">— Baromètre des marchés publics 2024</cite>
              </blockquote>
            </section>

            {/* Les différentes formes de formation */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Les différentes formes de formation</h2>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Formations en présentiel</h3>
                        <p className="text-gray-600 mb-3">Sessions de 1 à 3 jours avec un formateur expert. Idéal pour les échanges et le networking.</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1 text-green-600">
                            <CheckCircle className="w-4 h-4" /> Interactions directes
                          </span>
                          <span className="text-gray-500">1 500€ - 3 000€</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">E-learning et MOOC</h3>
                        <p className="text-gray-600 mb-3">Modules en ligne à suivre à son rythme. Flexibilité maximale mais nécessite de l'autodiscipline.</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1 text-green-600">
                            <CheckCircle className="w-4 h-4" /> Flexibilité totale
                          </span>
                          <span className="text-gray-500">200€ - 800€</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Target className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Accompagnement personnalisé</h3>
                        <p className="text-gray-600 mb-3">Un consultant vous guide sur vos premiers dossiers. Apprentissage par la pratique.</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1 text-green-600">
                            <CheckCircle className="w-4 h-4" /> Sur-mesure
                          </span>
                          <span className="text-gray-500">3 000€ - 10 000€</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Lightbulb className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Outils IA + formation intégrée</h3>
                        <p className="text-gray-600 mb-3">Des solutions comme Charly combinent outil de travail et apprentissage en continu. L'IA vous guide et vous forme au fil des dossiers.</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1 text-green-600">
                            <CheckCircle className="w-4 h-4" /> Apprentissage continu
                          </span>
                          <span className="text-gray-500">À partir de 99€/mois</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* ROI de la formation */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Le ROI réel de la formation</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Le retour sur investissement d'une formation aux marchés publics se mesure sur plusieurs dimensions : taux de succès, temps gagné, et qualité des réponses.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-green-600 mb-2">+45%</div>
                    <p className="text-sm text-gray-600">Amélioration du taux de succès après formation</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-blue-600 mb-2">-30%</div>
                    <p className="text-sm text-gray-600">Réduction du temps de rédaction</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <Euro className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-purple-600 mb-2">6 mois</div>
                    <p className="text-sm text-gray-600">Délai moyen de rentabilisation</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-0 shadow-xl bg-white">
                <CardContent className="p-8">
                  <h3 className="font-bold text-xl mb-6">Calcul du ROI typique</h3>
                  
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-gray-600">Coût moyen de formation</span>
                      <span className="font-bold">2 000€</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-gray-600">Nombre de réponses/an (moyenne PME)</span>
                      <span className="font-bold">20 AO</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-gray-600">Amélioration taux de succès</span>
                      <span className="font-bold text-green-600">+2 marchés gagnés</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-gray-600">Valeur moyenne d'un marché</span>
                      <span className="font-bold">25 000€</span>
                    </div>
                    <div className="flex justify-between items-center py-3 bg-green-50 rounded-lg px-4">
                      <span className="font-bold text-green-700">ROI estimé année 1</span>
                      <span className="font-bold text-green-700 text-xl">+2 400%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Compétences clés */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Les compétences clés à acquérir</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-600" />
                    Compétences techniques
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Lecture et analyse du DCE</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Rédaction du mémoire technique</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Construction du BPU/DQE</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Dématérialisation et signatures</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    Compétences stratégiques
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Veille et détection d'opportunités</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Analyse Go/No Go</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Positionnement prix</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Analyse des retours et amélioration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Alternative : l'IA */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">L'alternative intelligente : apprendre en faisant</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Avec l'émergence des outils IA comme Charly, une nouvelle approche émerge : apprendre en pratiquant, guidé par l'intelligence artificielle. Cette méthode combine productivité immédiate et montée en compétences progressive.
              </p>

              <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <CardContent className="p-8">
                  <h3 className="font-bold text-xl mb-6">Ce que Charly vous apprend au quotidien</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Analyse commentée</h4>
                        <p className="text-sm text-blue-100">Chaque analyse de DCE est accompagnée d'explications pédagogiques.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Target className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Bonnes pratiques intégrées</h4>
                        <p className="text-sm text-blue-100">Les suggestions de rédaction suivent les meilleures pratiques du secteur.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Feedback continu</h4>
                        <p className="text-sm text-blue-100">Apprenez de vos erreurs avec l'analyse des réponses passées.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Expertise à la demande</h4>
                        <p className="text-sm text-blue-100">Posez vos questions et obtenez des réponses d'expert instantanément.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Formez-vous en gagnant des marchés
              </h2>
              <p className="text-lg mb-8 text-purple-100 max-w-2xl mx-auto">
                Avec Charly, plus besoin de choisir entre productivité et apprentissage. L'IA vous guide et vous forme au fil de vos réponses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SafeLink to="/demo">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                    Essayer Charly gratuitement
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </SafeLink>
                <SafeLink to="/ressources">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Voir nos guides
                  </Button>
                </SafeLink>
              </div>
            </section>
          </article>

          <ArticleRecommendations currentArticleUrl="/formation-ao" />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FormationAO;
