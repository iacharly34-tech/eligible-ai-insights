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
  RotateCcw, 
  TrendingUp, 
  MessageSquare, 
  CheckCircle,
  ArrowRight,
  Target,
  BarChart3,
  Lightbulb,
  FileText,
  AlertTriangle,
  Clock,
  Award
} from "lucide-react";

const RetoursAO = () => {
  return (
    <>
      <SEOHead />
      <StructuredData />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-32 pb-20">
          <article className="container mx-auto max-w-4xl px-4">
            {/* Header */}
            <header className="mb-12">
              <Badge className="mb-6 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 border-cyan-200">
                <RotateCcw className="w-4 h-4 mr-2" />
                Amélioration continue
              </Badge>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
                Tirer parti des retours sur les appels d'offres : une stratégie gagnante
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                L'analyse des retours est la clé de la progression. Comment transformer chaque échec en apprentissage et chaque succès en modèle reproductible.
              </p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span>8 septembre 2025</span>
                <span>•</span>
                <span>7 min de lecture</span>
              </div>
            </header>

            {/* Introduction */}
            <section className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Perdre un appel d'offres n'est jamais agréable.</strong> Mais c'est une mine d'or d'informations si vous savez l'exploiter. Les entreprises qui analysent systématiquement leurs retours améliorent leur taux de succès de 25 à 40% en un an.
              </p>
              
              <blockquote className="border-l-4 border-cyan-500 pl-6 my-8 bg-cyan-50/50 py-4 rounded-r-lg">
                <p className="text-lg font-medium text-foreground mb-2">
                  "Les meilleures équipes AO ne sont pas celles qui gagnent le plus, mais celles qui apprennent le plus vite de leurs échecs."
                </p>
                <cite className="text-sm text-muted-foreground">— Expert marchés publics, Eligibly</cite>
              </blockquote>
            </section>

            {/* Le droit au débriefing */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Votre droit au débriefing</h2>
              
              <p className="text-foreground leading-relaxed mb-6">
                Le Code de la commande publique vous garantit un droit d'accès aux informations sur l'attribution. L'acheteur est tenu de vous répondre dans un délai de 15 jours.
              </p>

              <Card className="border-0 shadow-xl bg-gradient-to-r from-cyan-50 to-blue-50 mb-8">
                <CardContent className="p-8">
                  <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 text-cyan-600" />
                    Ce que vous pouvez demander
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Les notes obtenues sur chaque critère</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Le classement de votre offre</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Le nom de l'attributaire</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Les caractéristiques de l'offre retenue</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Les motifs détaillés du rejet</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Un rendez-vous téléphonique ou physique</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-amber-500 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Modèle de demande de débriefing</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Envoyez votre demande par écrit dans les 30 jours suivant la notification de rejet. Soyez précis et professionnel.
                      </p>
                      <p className="text-sm text-muted-foreground italic">
                        "Madame, Monsieur, Suite à la notification de rejet de notre offre pour le marché [référence], nous sollicitons un débriefing détaillé conformément à l'article R2181-1 du CCP..."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Analyser les retours */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Comment analyser efficacement les retours</h2>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-cyan-600">1</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Collectez les données brutes</h3>
                        <p className="text-muted-foreground text-sm">Rassemblez toutes les informations : notes, commentaires de l'acheteur, rapport d'analyse si disponible. Conservez-les dans un tableau de suivi.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-cyan-600">2</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Identifiez les écarts</h3>
                        <p className="text-muted-foreground text-sm">Où avez-vous perdu des points ? Sur le prix ? La technique ? Les références ? Comparez avec vos prévisions internes.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-cyan-600">3</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Comprenez le contexte</h3>
                        <p className="text-muted-foreground text-sm">Qui a gagné ? À quel prix ? Avec quelle offre technique ? Ces informations sont souvent publiques après attribution.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-cyan-600">4</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Tirez les leçons</h3>
                        <p className="text-muted-foreground text-sm">Qu'auriez-vous pu faire différemment ? Le marché était-il gagnable ? Si non, pourquoi avez-vous répondu ?</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-cyan-600">5</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Mettez à jour vos processus</h3>
                        <p className="text-muted-foreground text-sm">Formalisez les apprentissages : ajustez votre grille Go/No Go, vos modèles de mémoire technique, votre stratégie de pricing.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Les indicateurs à suivre */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Les indicateurs clés à suivre</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Target className="w-10 h-10 text-cyan-600 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Taux de transformation</h3>
                    <p className="text-sm text-muted-foreground">Nombre de marchés gagnés / Nombre de réponses</p>
                    <div className="mt-4 text-2xl font-bold text-cyan-600">Objectif : 20-25%</div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <BarChart3 className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Score technique moyen</h3>
                    <p className="text-sm text-muted-foreground">Moyenne des notes techniques obtenues</p>
                    <div className="mt-4 text-2xl font-bold text-primary">Objectif : 75/100</div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Clock className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Temps moyen par réponse</h3>
                    <p className="text-sm text-muted-foreground">Heures investies par dossier</p>
                    <div className="mt-4 text-2xl font-bold text-purple-600">Benchmark : 40h</div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Award className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Écart prix moyen</h3>
                    <p className="text-sm text-muted-foreground">Votre prix vs prix retenu</p>
                    <div className="mt-4 text-2xl font-bold text-amber-600">Cible : ±10%</div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Transformer les échecs */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Transformer les échecs en opportunités</h2>
              
              <p className="text-foreground leading-relaxed mb-6">
                Chaque refus est une occasion de créer une relation avec l'acheteur. Bien gérée, cette relation peut vous positionner favorablement pour le prochain marché.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Restez professionnel</h4>
                    <p className="text-sm text-muted-foreground">Remerciez l'acheteur pour le débriefing. Montrez que vous êtes dans une démarche d'amélioration.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Proposez un suivi</h4>
                    <p className="text-sm text-muted-foreground">Demandez à être informé des prochaines consultations. Montrez votre intérêt pour la collectivité.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Documentez tout</h4>
                    <p className="text-sm text-muted-foreground">Créez une fiche acheteur avec ses préférences, ses critères réels, ses attentes non écrites.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Préparez le reconduction</h4>
                    <p className="text-sm text-muted-foreground">Le marché sera relancé. Positionnez-vous dès maintenant avec les bonnes informations.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Comment Charly aide */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">L'analyse de retours avec Charly</h2>
              
              <Card className="border-0 shadow-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
                <CardContent className="p-8">
                  <h3 className="font-bold text-xl mb-6">Ce que Charly automatise pour vous</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Tableau de bord analytique</h4>
                        <p className="text-sm text-cyan-100">Visualisez vos performances par secteur, par type de marché, par acheteur.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Tendances et patterns</h4>
                        <p className="text-sm text-cyan-100">L'IA identifie les schémas récurrents dans vos succès et échecs.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Target className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Recommandations ciblées</h4>
                        <p className="text-sm text-cyan-100">Suggestions personnalisées pour améliorer vos prochaines réponses.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <RotateCcw className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Historique complet</h4>
                        <p className="text-sm text-cyan-100">Accédez à tout votre historique de réponses et de retours en un clic.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Transformez vos échecs en succès futurs
              </h2>
              <p className="text-lg mb-8 text-cyan-100 max-w-2xl mx-auto">
                Avec Charly, analysez vos retours, identifiez vos axes d'amélioration et augmentez votre taux de succès.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SafeLink to="/demo">
                  <Button size="lg" className="bg-card text-cyan-600 hover:bg-cyan-50">
                    Essayer gratuitement
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

          <ArticleRecommendations currentArticleUrl="/retours-ao" />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default RetoursAO;
