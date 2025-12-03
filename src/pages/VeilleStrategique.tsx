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
  Search, 
  Bell, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Target,
  Clock,
  AlertTriangle,
  Zap,
  Filter,
  Globe,
  BarChart3,
  Eye
} from "lucide-react";

const VeilleStrategique = () => {
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
              <Badge className="mb-6 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 border-violet-200">
                <Search className="w-4 h-4 mr-2" />
                Veille & détection
              </Badge>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
                La veille stratégique : votre première étape vers le succès
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Comment structurer une veille efficace sur les marchés publics ? Les meilleures pratiques et outils pour ne plus jamais manquer une opportunité.
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span>1er octobre 2025</span>
                <span>•</span>
                <span>9 min de lecture</span>
              </div>
            </header>

            {/* Introduction */}
            <section className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>La veille est le fondement de toute stratégie marchés publics réussie.</strong> Sans elle, vous répondez au hasard, découvrez les opportunités trop tard, et passez à côté des marchés qui vous correspondent vraiment. Pourtant, bien faire sa veille reste un défi pour 80% des PME.
              </p>
              
              <blockquote className="border-l-4 border-violet-500 pl-6 my-8 bg-violet-50/50 py-4 rounded-r-lg">
                <p className="text-lg font-medium text-gray-800 mb-2">
                  "Une PME qui structure sa veille correctement identifie 3 fois plus d'opportunités pertinentes qu'une PME qui fait de la veille 'à l'instinct'."
                </p>
                <cite className="text-sm text-gray-600">— Étude Eligibly 2025</cite>
              </blockquote>
            </section>

            {/* Pourquoi la veille est cruciale */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Pourquoi la veille est-elle cruciale ?</h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Clock className="w-10 h-10 text-violet-600 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Question de timing</h3>
                    <p className="text-sm text-gray-600">Le délai moyen de réponse est de 25 jours. Découvrir un AO une semaine après sa publication peut vous être fatal.</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Target className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Ciblage précis</h3>
                    <p className="text-sm text-gray-600">3,2 millions d'AO publiés par an. Sans filtre, vous perdez votre temps sur des marchés non pertinents.</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Anticipation</h3>
                    <p className="text-sm text-gray-600">La veille ne s'arrête pas aux publications. Les signaux faibles permettent d'anticiper les futurs marchés.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Les sources à surveiller */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Les sources incontournables à surveiller</h2>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-violet-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">Plateformes officielles</h3>
                        <p className="text-gray-600 mb-3">Les sources légales et obligatoires de publication des marchés publics.</p>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span><strong>BOAMP</strong> - Bulletin Officiel des Annonces des Marchés Publics</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span><strong>JOUE</strong> - Journal Officiel de l'Union Européenne (marchés > seuils)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span><strong>Profils acheteurs</strong> - Plateformes dématérialisées des collectivités</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Bell className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">Sources d'anticipation</h3>
                        <p className="text-gray-600 mb-3">Pour détecter les marchés avant qu'ils ne soient publiés.</p>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span><strong>Délibérations</strong> - Conseils municipaux, départementaux, régionaux</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span><strong>Budgets</strong> - Votes de budgets et programmes d'investissement</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span><strong>Presse locale</strong> - Annonces de projets et investissements</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <BarChart3 className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">Données de marché</h3>
                        <p className="text-gray-600 mb-3">Pour comprendre le contexte et affiner votre stratégie.</p>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span><strong>Attributions passées</strong> - Qui gagne, à quel prix, avec quelle stratégie</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span><strong>Reconductions</strong> - Marchés arrivant à échéance</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span><strong>Concurrence</strong> - Activité de vos concurrents sur le secteur</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Structurer sa veille */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Comment structurer sa veille</h2>

              <Card className="border-0 shadow-xl bg-gradient-to-r from-violet-50 to-purple-50 mb-8">
                <CardContent className="p-8">
                  <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                    <Filter className="w-6 h-6 text-violet-600" />
                    Les 4 filtres essentiels
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-xl">
                      <h4 className="font-bold mb-2 text-violet-700">1. Géographique</h4>
                      <p className="text-sm text-gray-600">Définissez votre zone d'intervention. Inutile de surveiller toute la France si vous intervenez uniquement en Île-de-France.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl">
                      <h4 className="font-bold mb-2 text-violet-700">2. Sectoriel</h4>
                      <p className="text-sm text-gray-600">Ciblez les codes CPV correspondant à votre activité. Soyez précis pour éviter le bruit.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl">
                      <h4 className="font-bold mb-2 text-violet-700">3. Volumétrique</h4>
                      <p className="text-sm text-gray-600">Filtrez par montant estimé. Ne perdez pas de temps sur des marchés trop petits ou trop gros pour vous.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl">
                      <h4 className="font-bold mb-2 text-violet-700">4. Type d'acheteur</h4>
                      <p className="text-sm text-gray-600">Ciblez vos acheteurs préférentiels : collectivités, établissements publics, État...</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Les erreurs à éviter */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Les 5 erreurs de veille à éviter</h2>

              <div className="space-y-4">
                <Card className="border-l-4 border-red-500 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">Erreur #1 : La veille ponctuelle</h3>
                        <p className="text-gray-600 text-sm">Faire sa veille une fois par semaine n'est pas suffisant. Les meilleurs marchés peuvent se jouer en quelques jours.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-red-500 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">Erreur #2 : Les filtres trop larges</h3>
                        <p className="text-gray-600 text-sm">Recevoir 200 alertes par jour vous noie dans l'information. Préférez des filtres précis quitte à les élargir ensuite.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-red-500 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">Erreur #3 : Ignorer les signaux faibles</h3>
                        <p className="text-gray-600 text-sm">Se limiter aux publications officielles, c'est réagir quand il est déjà presque trop tard.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-red-500 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">Erreur #4 : Ne pas qualifier les opportunités</h3>
                        <p className="text-gray-600 text-sm">Détecter un marché ne suffit pas. Il faut immédiatement évaluer sa pertinence (Go/No Go).</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-red-500 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">Erreur #5 : Travailler seul</h3>
                        <p className="text-gray-600 text-sm">La veille doit être partagée dans l'équipe. Un commercial peut repérer un marché technique et vice-versa.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Charly */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Comment Charly révolutionne la veille</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Charly surveille en continu plus de 600 sources et filtre automatiquement les opportunités selon votre profil. Plus de veille manuelle, juste les bons marchés au bon moment.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-violet-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Détection instantanée</h4>
                    <p className="text-sm text-gray-600">Alertes en temps réel dès la publication d'un marché correspondant à vos critères.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Eye className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Analyse automatique</h4>
                    <p className="text-sm text-gray-600">Chaque opportunité est analysée et notée selon sa pertinence pour vous.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Qualification Go/No Go</h4>
                    <p className="text-sm text-gray-600">Recommandation instantanée sur la pertinence de répondre.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Bell className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Anticipation</h4>
                    <p className="text-sm text-gray-600">Signaux faibles et marchés à venir pour vous préparer en amont.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-violet-500 to-purple-500 rounded-3xl p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Automatisez votre veille avec Charly
              </h2>
              <p className="text-lg mb-8 text-violet-100 max-w-2xl mx-auto">
                Arrêtez de perdre des heures à chercher des opportunités. Laissez l'IA vous apporter les bons marchés sur un plateau.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SafeLink to="/demo">
                  <Button size="lg" className="bg-white text-violet-600 hover:bg-violet-50">
                    Essayer gratuitement
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

          <ArticleRecommendations currentArticle="/veille-strategique" />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default VeilleStrategique;
