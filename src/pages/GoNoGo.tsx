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
  Target, 
  CheckCircle, 
  XCircle, 
  TrendingUp, 
  Clock, 
  Calculator,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Users,
  FileText,
  Lightbulb
} from "lucide-react";

const GoNoGo = () => {
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
              <Badge className="mb-6 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 border-orange-200">
                <Target className="w-4 h-4 mr-2" />
                Répondre efficacement aux AO
              </Badge>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
                Optimiser le Go/No Go : la décision qui fait la différence
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                La décision de répondre ou non à un appel d'offres est cruciale. Comment structurer votre processus de qualification pour maximiser votre taux de succès ?
              </p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span>3 octobre 2025</span>
                <span>•</span>
                <span>9 min de lecture</span>
              </div>
            </header>

            {/* Introduction */}
            <section className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Chaque appel d'offres représente un investissement significatif</strong> : temps de rédaction, mobilisation des équipes, coûts de production. Pourtant, de nombreuses entreprises se lancent dans des réponses sans réelle analyse préalable, gaspillant des ressources précieuses sur des marchés qu'elles n'ont aucune chance de remporter.
              </p>
              
              <blockquote className="border-l-4 border-orange-500 pl-6 my-8 bg-orange-50/50 py-4 rounded-r-lg">
                <p className="text-lg font-medium text-foreground mb-2">
                  "Une PME qui répond systématiquement à tout ce qu'elle voit passe en moyenne 70% de son temps commercial sur des AO qu'elle ne remportera jamais."
                </p>
                <cite className="text-sm text-muted-foreground">— Étude Eligibly 2025</cite>
              </blockquote>
            </section>

            {/* Qu'est-ce que le Go/No Go */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Qu'est-ce que le Go/No Go ?</h2>
              
              <p className="text-foreground leading-relaxed mb-6">
                Le Go/No Go est un processus de qualification structuré qui permet de décider, de manière objective et rapide, si une opportunité mérite d'être poursuivie. Cette méthode, empruntée aux grands groupes, est essentielle pour les PME qui disposent de ressources limitées.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-success/20 bg-success/10/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="w-8 h-8 text-success" />
                      <h3 className="font-bold text-success">Quand dire GO</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-success">
                      <li>• Le besoin correspond à votre cœur de métier</li>
                      <li>• Vous avez des références similaires</li>
                      <li>• Le délai est réaliste</li>
                      <li>• Le prix estimé est cohérent</li>
                      <li>• Vous connaissez l'acheteur</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <XCircle className="w-8 h-8 text-destructive" />
                      <h3 className="font-bold text-red-800">Quand dire NO GO</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-red-700">
                      <li>• Le cahier des charges est flou ou orienté</li>
                      <li>• Vous n'avez aucune référence similaire</li>
                      <li>• Le délai est trop court</li>
                      <li>• Le marché semble déjà attribué</li>
                      <li>• Les exigences dépassent vos capacités</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Les 7 critères */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Les 7 critères essentiels d'un Go/No Go efficace</h2>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">1</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Adéquation technique</h3>
                        <p className="text-muted-foreground text-sm">Le besoin correspond-il à votre savoir-faire ? Avez-vous les compétences et les ressources pour délivrer ?</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">2</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Références et expérience</h3>
                        <p className="text-muted-foreground text-sm">Disposez-vous de références similaires ? L'absence de références sur un marché ciblé est souvent éliminatoire.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">3</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Connaissance de l'acheteur</h3>
                        <p className="text-muted-foreground text-sm">Avez-vous déjà travaillé avec cet acheteur ? Connaissez-vous ses attentes et son historique ?</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">4</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Analyse concurrentielle</h3>
                        <p className="text-muted-foreground text-sm">Qui sont vos concurrents probables ? Avez-vous un avantage distinctif sur ce marché ?</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">5</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Faisabilité économique</h3>
                        <p className="text-muted-foreground text-sm">Le budget estimé est-il cohérent avec vos coûts ? La marge est-elle suffisante ?</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">6</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Délais et disponibilité</h3>
                        <p className="text-muted-foreground text-sm">Avez-vous le temps de préparer une réponse de qualité ? Vos équipes sont-elles disponibles pour l'exécution ?</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">7</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Valeur stratégique</h3>
                        <p className="text-muted-foreground text-sm">Ce marché ouvre-t-il de nouvelles portes ? Renforce-t-il votre positionnement sectoriel ?</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Grille de scoring */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Mettre en place une grille de scoring</h2>
              
              <p className="text-foreground leading-relaxed mb-6">
                Pour objectiver votre décision, attribuez une note de 1 à 5 à chaque critère, puis pondérez selon votre stratégie. Une note globale inférieure à 60% devrait déclencher un No Go automatique.
              </p>

              <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Calculator className="w-8 h-8 text-primary" />
                    <h3 className="font-bold text-xl">Exemple de pondération</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-primary/20">
                      <span>Adéquation technique</span>
                      <span className="font-bold text-primary">25%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-primary/20">
                      <span>Références</span>
                      <span className="font-bold text-primary">20%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-primary/20">
                      <span>Connaissance acheteur</span>
                      <span className="font-bold text-primary">15%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-primary/20">
                      <span>Analyse concurrentielle</span>
                      <span className="font-bold text-primary">15%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-primary/20">
                      <span>Faisabilité économique</span>
                      <span className="font-bold text-primary">10%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-primary/20">
                      <span>Délais</span>
                      <span className="font-bold text-primary">10%</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span>Valeur stratégique</span>
                      <span className="font-bold text-primary">5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Impact chiffré */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">L'impact d'un Go/No Go structuré</h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <TrendingUp className="w-12 h-12 text-success mx-auto mb-4" />
                    <div className="text-3xl font-bold text-success mb-2">+35%</div>
                    <p className="text-sm text-muted-foreground">Amélioration du taux de succès</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-primary mb-2">-40%</div>
                    <p className="text-sm text-muted-foreground">Temps économisé sur les réponses</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-primary mb-2">x3</div>
                    <p className="text-sm text-muted-foreground">ROI moyen constaté</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Comment Charly aide */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Comment Charly automatise votre Go/No Go</h2>
              
              <p className="text-foreground leading-relaxed mb-6">
                L'intelligence artificielle de Charly analyse automatiquement chaque appel d'offres selon vos critères de qualification. En quelques secondes, vous obtenez une recommandation Go/No Go personnalisée.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Analyse instantanée</h4>
                    <p className="text-sm text-muted-foreground">Charly lit et analyse le DCE en quelques secondes pour identifier les critères clés.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Scoring personnalisé</h4>
                    <p className="text-sm text-muted-foreground">Configurez vos critères de qualification et Charly applique votre grille automatiquement.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Recommandation argumentée</h4>
                    <p className="text-sm text-muted-foreground">Chaque recommandation Go/No Go est accompagnée d'une analyse détaillée.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Alertes intelligentes</h4>
                    <p className="text-sm text-muted-foreground">Soyez alerté uniquement sur les opportunités qui correspondent vraiment à votre profil.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Optimisez vos décisions Go/No Go avec Charly
              </h2>
              <p className="text-lg mb-8 text-orange-100 max-w-2xl mx-auto">
                Arrêtez de perdre du temps sur des AO que vous ne remporterez pas. Laissez Charly qualifier automatiquement vos opportunités.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SafeLink to="/demo">
                  <Button size="lg" className="bg-card text-orange-600 hover:bg-orange-50">
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

          <ArticleRecommendations currentArticleUrl="/go-no-go" />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GoNoGo;
