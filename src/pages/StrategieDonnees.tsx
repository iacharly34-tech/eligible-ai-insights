import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { EligiblyButton } from "@/components/EligiblyButton";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Database, Target, TrendingUp, Brain, CheckCircle } from "lucide-react";
import { ArticleRecommendations } from "@/components/ArticleRecommendations";

export default function StrategieDonnees() {
  return (
    <>
      <SEOHead />
      <StructuredData page="article" />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-16 max-w-4xl">
          <article>
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-6">
                Comment bâtir une vraie stratégie AO basée sur les données
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                De l'intuition à la science : comment les données transforment l'approche des marchés publics et maximisent le ROI commercial des PME et grands groupes.
              </p>
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <span>Publié le 24 août 2025</span>
                <span>•</span>
                <span>Lecture 7 min</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <blockquote className="border-l-4 border-primary pl-6 italic text-lg mb-8 bg-primary/5 p-6 rounded-r-lg">
                "Répondre à tout, c'est la meilleure manière de tout perdre."
                <cite className="block mt-2 text-sm text-muted-foreground not-italic">— Bid Manager secteur informatique</cite>
              </blockquote>

              <p className="lead">
                Cette maxime illustre parfaitement l'évolution nécessaire dans l'approche des <strong>marchés publics</strong>. Alors que la commande publique représente plus de <strong>160 milliards d'euros</strong> annuels en France, la plupart des entreprises naviguent encore à vue, guidées par l'intuition plutôt que par l'analyse. Les leaders du secteur ont déjà franchi le cap : ils utilisent la <strong>data</strong> pour transformer leur <strong>stratégie AO</strong> en avantage concurrentiel durable.
              </p>

              <h2>L'ère de la stratégie AO data-driven</h2>
              
              <p>
                La <strong>stratégie AO</strong> traditionnelle repose sur des approximations : "on répond parce qu'on fait ce métier", "cette collectivité nous connaît", "le budget semble correct"... Cette approche empirique atteint ses limites face à la complexité croissante des <strong>appels d'offres publics</strong>.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 text-red-800">Approche traditionnelle</h3>
                    <ul className="space-y-2 text-sm text-red-700">
                      <li>• Candidature sur 60-80% des AO du secteur</li>
                      <li>• Décision basée sur l'intuition</li>
                      <li>• Taux de succès : 15-20%</li>
                      <li>• ROI difficile à mesurer</li>
                      <li>• Équipes commerciales surchargées</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 text-success">Stratégie data-driven</h3>
                    <ul className="space-y-2 text-sm text-success">
                      <li>• Sélection ciblée : 20-30% des AO</li>
                      <li>• Décision basée sur l'analyse prédictive</li>
                      <li>• Taux de succès : 40-60%</li>
                      <li>• ROI optimisé et traçable</li>
                      <li>• Focus sur les opportunités à fort potentiel</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2>Les 4 piliers de la stratégie data-driven</h2>

              <h3>1. Collecte et structuration des données historiques</h3>
              
              <p>
                La première étape consiste à capitaliser sur l'expérience passée. Chaque <strong>appel d'offres</strong> génère des données précieuses : critères de sélection, profil des concurrents, pondération réelle des critères, caractéristiques du gagnant...
              </p>

              <Card className="my-6 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-primary">
                    <Database className="h-5 w-5" />
                    Base de données AO optimale
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Données marché</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Acheteur et contexte</li>
                        <li>• Montant et durée</li>
                        <li>• Critères et pondération</li>
                        <li>• Concurrents identifiés</li>
                        <li>• Résultat et motifs</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Métriques performance</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Temps de préparation</li>
                        <li>• Coût de la réponse</li>
                        <li>• Score obtenu</li>
                        <li>• Écart avec le gagnant</li>
                        <li>• ROI réalisé</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <blockquote className="border-l-4 border-primary pl-6 italic text-lg my-6 bg-primary/5 p-4 rounded-r-lg">
                "Depuis qu'on trace systématiquement nos résultats, on a découvert qu'on gagnait surtout sur des marchés de 100-500k€ avec des critères techniques pesant plus de 60%. On a complètement revu notre ciblage."
                <cite className="block mt-2 text-sm text-muted-foreground not-italic">— Responsable commercial PME ingénierie</cite>
              </blockquote>

              <h3>2. Analyse prédictive des opportunités</h3>
              
              <p>
                Les <strong>données AO</strong> permettent de développer des modèles prédictifs sophistiqués. En croisant les caractéristiques d'un nouvel appel d'offres avec l'historique, on peut prédire les chances de succès avec une précision remarquable.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-8">
                <h3 className="text-primary font-semibold mb-3 flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  Algorithmes de scoring Charly
                </h3>
                <p className="text-primary text-sm mb-4">
                  L'IA de Charly analyse plus de 150 variables par appel d'offres pour calculer votre probabilité de succès.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">85%</div>
                    <div className="text-sm text-success">Précision des prédictions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">150+</div>
                    <div className="text-sm text-primary">Variables analysées</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">2M+</div>
                    <div className="text-sm text-purple-700">AO dans la base d'entraînement</div>
                  </div>
                </div>
              </div>

              <h3>3. Optimisation du portefeuille d'opportunités</h3>
              
              <p>
                Comme en finance, la <strong>stratégie AO</strong> optimale combine plusieurs opportunités pour maximiser le rendement tout en maîtrisant les risques. L'analyse de données permet de construire un portefeuille équilibré.
              </p>

              <Card className="my-6 border-success/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-success">
                    <Target className="h-5 w-5" />
                    Matrice risque/opportunité
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-sm mb-2 text-success">Opportunités sûres (70%)</h5>
                      <p className="text-sm">Marchés à forte probabilité, profil parfaitement adapté, concurrence limitée</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-2 text-amber-700">Opportunités stratégiques (20%)</h5>
                      <p className="text-sm">Gros contrats ou nouveaux clients, probabilité moyenne mais fort enjeu</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-2 text-primary">Opportunités exploratoires (10%)</h5>
                      <p className="text-sm">Nouveaux secteurs ou territoires, faible probabilité mais apprentissage</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3>4. Mesure et amélioration continue</h3>
              
              <p>
                La <strong>stratégie data-driven</strong> s'améliore en permanence. Chaque résultat enrichit la base de connaissances et affine les modèles prédictifs. Cette boucle d'amélioration continue procure un avantage cumulatif.
              </p>

              <h2>Les métriques clés à suivre</h2>

              <p>
                Une <strong>stratégie AO</strong> efficace nécessite un tableau de bord précis avec des indicateurs pertinents :
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <BarChart3 className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Métriques d'efficacité</h3>
                    <ul className="text-sm text-left space-y-1">
                      <li>• Taux de succès par segment</li>
                      <li>• Temps moyen de préparation</li>
                      <li>• Score moyen obtenu</li>
                      <li>• Écart concurrentiel</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-8 w-8 text-success mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Métriques de rentabilité</h3>
                    <ul className="text-sm text-left space-y-1">
                      <li>• ROI par marché remporté</li>
                      <li>• Coût d'acquisition client</li>
                      <li>• Valeur vie client (LTV)</li>
                      <li>• Marge préservée</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <Target className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Métriques stratégiques</h3>
                    <ul className="text-sm text-left space-y-1">
                      <li>• Diversification portefeuille</li>
                      <li>• Part de marché captée</li>
                      <li>• Positionnement concurrentiel</li>
                      <li>• Nouveaux segments</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2>Cas d'usage : la transformation d'une ESN</h2>
              
              <p>
                Une ESN de 150 salariés spécialisée dans les <strong>marchés publics</strong> illustre parfaitement cette transformation. Avant l'adoption d'une approche data-driven, l'entreprise candidatait sur 200 AO par an avec un taux de succès de 18%.
              </p>

              <Card className="my-8 bg-blue-50 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-primary">
                    <BarChart3 className="h-5 w-5" />
                    Transformation en 18 mois
                  </h4>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-sm">Phase 1 : Audit et structuration (mois 1-6)</h5>
                      <p className="text-sm text-muted-foreground">Analyse des 500 derniers AO, identification des patterns de succès, mise en place du tracking</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm">Phase 2 : Optimisation ciblage (mois 7-12)</h5>
                      <p className="text-sm text-muted-foreground">Réduction du volume (-60%), focus sur les segments à fort potentiel, amélioration du scoring</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm">Phase 3 : Automatisation et scaling (mois 13-18)</h5>
                      <p className="text-sm text-muted-foreground">Déploiement de Charly IA, automatisation de la veille, optimisation continue des modèles</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-card rounded border">
                    <h5 className="font-semibold text-sm mb-2">Résultats obtenus :</h5>
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-xl font-bold text-success">45%</div>
                        <div className="text-xs">Taux de succès</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-primary">-40%</div>
                        <div className="text-xs">Coûts commerciaux</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-purple-600">+180%</div>
                        <div className="text-xs">ROI commercial</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2>L'intelligence artificielle au service de la stratégie</h2>
              
              <p>
                L'émergence de l'IA transforme radicalement les possibilités d'analyse. <strong>Charly IA</strong> d'Eligibly représente cette nouvelle génération d'outils capables de traiter des volumes de données impossibles à gérer manuellement.
              </p>

              <Card className="my-8 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    Capacités d'analyse de Charly
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm">Analyse sémantique avancée</h5>
                        <p className="text-sm text-muted-foreground">Compréhension du sens au-delà des mots-clés, détection des critères implicites</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm">Benchmarking concurrentiel automatisé</h5>
                        <p className="text-sm text-muted-foreground">Identification des patterns de succès de vos concurrents</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm">Prédiction multi-variables</h5>
                        <p className="text-sm text-muted-foreground">Modèles prédictifs intégrant contexte économique, cycles politiques, tendances sectorielles</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm">Optimisation continue</h5>
                        <p className="text-sm text-muted-foreground">Apprentissage automatique à partir de vos résultats pour améliorer les recommandations</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2>Mise en œuvre pratique</h2>

              <h3>Étape 1 : Audit de l'existant (2-4 semaines)</h3>
              <p>Analyse des 50-100 derniers AO pour identifier les patterns de succès et d'échec</p>

              <h3>Étape 2 : Définition des KPIs (1-2 semaines)</h3>
              <p>Mise en place du tableau de bord et des métriques de pilotage</p>

              <h3>Étape 3 : Déploiement progressif (3-6 mois)</h3>
              <p>Test sur un échantillon d'AO, ajustement des modèles, généralisation</p>

              <h3>Étape 4 : Optimisation continue (permanent)</h3>
              <p>Analyse des résultats, amélioration des algorithmes, extension du périmètre</p>

              <h2>ROI de la stratégie data-driven</h2>
              
              <p>
                L'investissement dans une <strong>stratégie AO</strong> basée sur les données génère des retours rapides et durables :
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-success mb-2">+120%</div>
                    <div className="text-sm text-muted-foreground">
                      Amélioration du taux de succès moyen
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">-50%</div>
                    <div className="text-sm text-muted-foreground">
                      Réduction des coûts commerciaux
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-2">6 mois</div>
                    <div className="text-sm text-muted-foreground">
                      Retour sur investissement moyen
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2>L'avenir des stratégies AO</h2>
              
              <p>
                La <strong>stratégie AO data-driven</strong> n'est plus un avantage concurrentiel temporaire, c'est devenu une nécessité pour rester compétitif. Les entreprises qui tardent à adopter cette approche prennent un retard difficile à combler.
              </p>

              <p>
                Demain, toutes les décisions commerciales sur les <strong>marchés publics</strong> seront guidées par l'analyse prédictive. L'intuition et l'expérience resteront importantes, mais elles seront augmentées par l'intelligence artificielle pour optimiser chaque choix stratégique.
              </p>

              <p className="font-semibold text-lg mt-8">
                Comment votre entreprise structure-t-elle sa <strong>stratégie AO</strong> ? Quelles données collectez-vous actuellement ? Quel serait l'impact d'une amélioration de 20 points de votre taux de succès ?
              </p>
            </div>

            <div className="mt-12 p-8 bg-primary/5 rounded-xl border border-primary/20 text-center">
              <h3 className="text-xl font-semibold mb-4">
                Transformez votre stratégie AO avec l'IA de Charly
              </h3>
              <p className="text-muted-foreground mb-6">
                Découvrez comment les données peuvent multiplier par 2 votre taux de succès sur les marchés publics
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/demo">Analyser ma stratégie</a>
                </Button>
                <EligiblyButton 
                  variant="secondary" 
                  size="lg" 
                  onClick={() => window.location.href = '/produit'}
                >
                  Découvrir Charly
                </EligiblyButton>
              </div>
            </div>
          </article>
        </main>

        {/* Articles recommandés */}
        <ArticleRecommendations 
          currentArticleUrl="/strategie-donnees" 
          currentCategory="Tendances & data clés"
        />

        <Footer />
      </div>
    </>
  );
}