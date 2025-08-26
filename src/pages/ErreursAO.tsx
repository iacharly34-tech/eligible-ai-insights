import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { EligiblyButton } from "@/components/EligiblyButton";
import { Card, CardContent } from "@/components/ui/card";
import { XCircle, CheckCircle, AlertTriangle, FileText, Clock, Shield } from "lucide-react";
import { ArticleRecommendations } from "@/components/ArticleRecommendations";

export default function ErreursAO() {
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
                Les 7 plus grosses erreurs des PME qui répondent aux marchés publics
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Guide pratique pour éviter les pièges administratifs et techniques qui éliminent 60% des candidatures aux appels d'offres publics.
              </p>
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <span>Publié le 24 août 2025</span>
                <span>•</span>
                <span>Lecture 6 min</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <blockquote className="border-l-4 border-red-500 pl-6 italic text-lg mb-8 bg-red-50 p-6 rounded-r-lg">
                "On a rendu un dossier complet… et on a été éliminés à cause d'une signature oubliée."
                <cite className="block mt-2 text-sm text-muted-foreground not-italic">— Responsable administratif</cite>
              </blockquote>

              <p className="lead">
                Chaque année, des milliers de PME voient leurs candidatures aux <strong>marchés publics</strong> éliminées pour des erreurs évitables. Selon l'Observatoire économique de la commande publique, les PME ne remportent que <strong>29,5% du montant total</strong> des contrats malgré leur représentation majoritaire dans le tissu économique français. Une grande partie de ces échecs provient d'erreurs récurrentes dans la constitution des dossiers.
              </p>

              <h2>Le coût des erreurs administratives</h2>
              
              <p>
                Les <strong>appels d'offres publics</strong> suivent des règles strictes. Une seule erreur peut éliminer définitivement votre candidature, quel que soit la qualité de votre offre technique ou commerciale. Le Baromètre CINOV 2024 révèle que plus de la moitié des PME citent "le coût global de la réponse" comme premier frein, incluant les ressources perdues en cas d'élimination administrative.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
                <h3 className="text-red-800 font-semibold mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Statistiques alarmantes
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-red-600">40%</div>
                    <div className="text-sm text-red-700">Éliminations pour vice de forme</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-600">25%</div>
                    <div className="text-sm text-red-700">Dossiers incomplets</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-600">15%</div>
                    <div className="text-sm text-red-700">Retards de transmission</div>
                  </div>
                </div>
              </div>

              <h2>Les 7 erreurs fatales à éviter absolument</h2>

              <h3>Erreur #1 : Négliger la lecture intégrale du règlement de consultation</h3>
              
              <Card className="my-6 border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">L'erreur</h4>
                      <p className="text-sm">Se concentrer uniquement sur le cahier des charges en négligeant le règlement de consultation qui précise les modalités de remise et d'évaluation.</p>
                    </div>
                  </div>
                  
                  <blockquote className="border-l-2 border-red-300 pl-4 italic text-sm mb-4 bg-red-25">
                    "On s'est focalisés sur la partie technique… et on a loupé l'obligation de remettre 3 exemplaires papier en plus du dossier électronique."
                    <cite className="block mt-1 text-xs text-red-600 not-italic">— Dirigeant PME informatique</cite>
                  </blockquote>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">La solution</h4>
                      <p className="text-sm">Établir une checklist des exigences réglementaires avant de commencer la rédaction. Charly analyse automatiquement toutes les exigences formelles et vous alerte sur les spécificités de chaque consultation.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3>Erreur #2 : Omettre des pièces administratives obligatoires</h3>
              
              <Card className="my-6 border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <FileText className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">L'erreur</h4>
                      <p className="text-sm">Oublier des documents comme la copie du Kbis, les attestations fiscales et sociales, ou les justificatifs d'assurance dans leur version à jour.</p>
                    </div>
                  </div>
                  
                  <blockquote className="border-l-2 border-red-300 pl-4 italic text-sm mb-4">
                    "Notre attestation d'assurance était expirée depuis 2 jours. Éliminés sur cette seule pièce."
                    <cite className="block mt-1 text-xs text-red-600 not-italic">— Responsable qualité PME BTP</cite>
                  </blockquote>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">La solution</h4>
                      <p className="text-sm">Maintenir un "dossier de candidature" toujours à jour avec toutes les pièces standard. Programmer des rappels 30 jours avant l'expiration de chaque document.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3>Erreur #3 : Sous-estimer les délais de réponse</h3>
              
              <Card className="my-6 border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Clock className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">L'erreur</h4>
                      <p className="text-sm">Commencer la réponse trop tard, sous-estimant le temps nécessaire pour la rédaction du mémoire technique et l'assemblage du dossier complet.</p>
                    </div>
                  </div>
                  
                  <blockquote className="border-l-2 border-red-300 pl-4 italic text-sm mb-4">
                    "48h avant la date limite, on s'est aperçus qu'il fallait faire signer le dossier par le président… qui était en déplacement."
                    <cite className="block mt-1 text-xs text-red-600 not-italic">— Assistante direction PME services</cite>
                  </blockquote>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">La solution</h4>
                      <p className="text-sm">Appliquer la règle des "10 jours ouvrés minimum" pour toute réponse sérieuse. Planifier immédiatement les signatures et validations nécessaires dès décision de candidater.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3>Erreur #4 : Négliger la cohérence entre les différentes parties du dossier</h3>
              
              <Card className="my-6 border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Shield className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">L'erreur</h4>
                      <p className="text-sm">Présenter des informations contradictoires entre l'acte d'engagement, le mémoire technique et les annexes (effectifs, chiffre d'affaires, références).</p>
                    </div>
                  </div>
                  
                  <blockquote className="border-l-2 border-red-300 pl-4 italic text-sm mb-4">
                    "On avait indiqué 25 salariés dans l'acte d'engagement et 30 dans le mémoire technique. L'acheteur a considéré que c'était suspect."
                    <cite className="block mt-1 text-xs text-red-600 not-italic">— Consultant marchés publics</cite>
                  </blockquote>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">La solution</h4>
                      <p className="text-sm">Établir une "fiche entreprise" de référence avec toutes les données clés et la mettre à jour mensuellement. Effectuer une relecture croisée avant envoi.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3>Erreur #5 : Mal comprendre les critères d'attribution</h3>
              
              <Card className="my-6 border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">L'erreur</h4>
                      <p className="text-sm">Se focaliser uniquement sur le prix quand l'offre économiquement la plus avantageuse inclut des critères techniques, environnementaux ou sociaux importants.</p>
                    </div>
                  </div>
                  
                  <blockquote className="border-l-2 border-red-300 pl-4 italic text-sm mb-4">
                    "On a proposé le prix le plus bas… mais on a perdu sur les critères RSE qui pesaient 40% de la note finale."
                    <cite className="block mt-1 text-xs text-red-600 not-italic">— Commercial PME nettoyage</cite>
                  </blockquote>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">La solution</h4>
                      <p className="text-sm">Analyser précisément la pondération de chaque critère et adapter sa stratégie d'offre en conséquence. Charly évalue automatiquement votre positionnement sur chaque critère.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3>Erreur #6 : Présenter des références non pertinentes</h3>
              
              <Card className="my-6 border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <FileText className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">L'erreur</h4>
                      <p className="text-sm">Multiplier les références sans lien direct avec l'objet du marché, ou présenter des projets trop anciens ou de taille inadaptée.</p>
                    </div>
                  </div>
                  
                  <blockquote className="border-l-2 border-red-300 pl-4 italic text-sm mb-4">
                    "Ils demandaient 3 références similaires des 3 dernières années. On en a mis 8, dont certaines de 2018, pensant bien faire."
                    <cite className="block mt-1 text-xs text-red-600 not-italic">— Responsable commercial ESN</cite>
                  </blockquote>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">La solution</h4>
                      <p className="text-sm">Sélectionner uniquement les références qui répondent précisément aux critères demandés. Qualité over quantité : 3 références parfaitement adaptées valent mieux que 10 approximatives.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3>Erreur #7 : Négliger la relecture et la présentation</h3>
              
              <Card className="my-6 border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">L'erreur</h4>
                      <p className="text-sm">Envoyer un dossier avec des fautes d'orthographe, une mise en page négligée, ou des incohérences qui nuisent à la crédibilité de l'offre.</p>
                    </div>
                  </div>
                  
                  <blockquote className="border-l-2 border-red-300 pl-4 italic text-sm mb-4">
                    "Le mémoire était bon techniquement, mais bourré de fautes. L'acheteur nous a dit après : 'Si vous ne relisez pas vos offres, comment peut-on vous faire confiance pour nos projets ?'"
                    <cite className="block mt-1 text-xs text-red-600 not-italic">— Directeur PME ingénierie</cite>
                  </blockquote>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">La solution</h4>
                      <p className="text-sm">Prévoir systématiquement 48h entre la finalisation du dossier et l'envoi pour une relecture externe. Un dossier professionnel et soigné valorise votre expertise.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2>Comment Charly prévient ces erreurs automatiquement</h2>
              
              <p>
                L'agent intelligent <strong>Charly</strong> d'Eligibly analyse chaque <strong>appel d'offres</strong> pour identifier les pièges potentiels et vous guider dans votre réponse :
              </p>

              <ul className="list-none space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Checklist automatique</strong> : extraction de toutes les exigences administratives et techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Alerte délais</strong> : calcul du temps nécessaire selon la complexité du dossier</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Analyse des critères</strong> : décryptage de la pondération réelle des critères d'attribution</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Matching références</strong> : identification des références les plus pertinentes dans votre base</span>
                </li>
              </ul>

              <Card className="my-8 bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-800">
                    <CheckCircle className="h-5 w-5" />
                    Résultats avec l'approche Charly
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">-85%</div>
                      <div className="text-sm text-green-700">Éliminations administratives</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">+50%</div>
                      <div className="text-sm text-green-700">Qualité des dossiers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">-60%</div>
                      <div className="text-sm text-green-700">Temps de préparation</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2>La méthode des "3 R" pour sécuriser vos candidatures</h2>
              
              <p>
                Pour éviter ces erreurs récurrentes, adoptez la méthode des "3 R" :
              </p>

              <ol>
                <li><strong>Règlement</strong> : Lire intégralement le règlement de consultation avant de commencer</li>
                <li><strong>Références</strong> : Sélectionner uniquement les références pertinentes et récentes</li>
                <li><strong>Relecture</strong> : Faire relire le dossier par une personne extérieure au projet</li>
              </ol>

              <p>
                Les <strong>marchés publics</strong> représentent des opportunités considérables pour les PME, mais ils exigent rigueur et méthode. En évitant ces 7 erreurs fatales, vous maximisez vos chances de succès et optimisez votre retour sur investissement.
              </p>

              <p className="font-semibold text-lg mt-8">
                Avez-vous déjà été éliminé pour l'une de ces erreurs ? Comment organisez-vous la relecture de vos dossiers d'<strong>appels d'offres</strong> ?
              </p>
            </div>

            <div className="mt-12 p-8 bg-primary/5 rounded-xl border border-primary/20 text-center">
              <h3 className="text-xl font-semibold mb-4">
                Sécurisez vos candidatures avec Charly
              </h3>
              <p className="text-muted-foreground mb-6">
                Évitez les erreurs fatales et maximisez vos chances sur chaque appel d'offres
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/demo">Tester gratuitement</a>
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
          currentArticleUrl="/erreurs-ao" 
          currentCategory="Répondre efficacement aux AO"
        />

        <Footer />
      </div>
    </>
  );
}