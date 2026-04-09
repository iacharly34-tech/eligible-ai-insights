import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { EligiblyButton } from "@/components/EligiblyButton";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, XCircle, Eye, Shield, CheckCircle } from "lucide-react";
import { ArticleRecommendations } from "@/components/ArticleRecommendations";

export default function AOPerdusAvance() {
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
                Pourquoi 3 appels d'offres sur 5 sont perdus d'avance
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Décryptage des mécanismes cachés qui rendent 60% des AO impossibles à gagner. Comment détecter et éviter ces pièges pour optimiser vos efforts commerciaux.
              </p>
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <span>Publié le 24 août 2025</span>
                <span>•</span>
                <span>Lecture 6 min</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <blockquote className="border-l-4 border-red-500 pl-6 italic text-lg mb-8 bg-red-50 p-6 rounded-r-lg">
                "On nous invite à répondre… pour justifier la mise en concurrence."
                <cite className="block mt-2 text-sm text-muted-foreground not-italic">— Directeur commercial ESN</cite>
              </blockquote>

              <p className="lead">
                Cette confidence révèle une réalité méconnue des <strong>marchés publics</strong> : une majorité d'<strong>appels d'offres</strong> sont perdus avant même d'être publiés. La Cour des comptes européenne le confirme : 41,8% des procédures n'attirent qu'un seul candidat, et parmi celles qui semblent concurrentielles, beaucoup cachent des biais structurels. Comprendre ces mécanismes permet d'éviter les pièges et de concentrer ses efforts sur les vraies opportunités.
              </p>

              <h2>La réalité cachée des marchés publics</h2>
              
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <XCircle className="h-8 w-8 text-destructive mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">60%</h3>
                    <p className="text-sm text-muted-foreground">
                      AO impossibles à gagner pour la majorité
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <AlertTriangle className="h-8 w-8 text-amber-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">41,8%</h3>
                    <p className="text-sm text-muted-foreground">
                      Procédures avec un seul soumissionnaire
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Eye className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">85%</h3>
                    <p className="text-sm text-muted-foreground">
                      Précision de détection par Charly
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h2>Les 5 causes principales</h2>

              <h3>1. Le favoritisme déguisé</h3>
              <p>
                Certains <strong>appels d'offres</strong> sont rédigés pour favoriser un candidat spécifique, tout en respectant formellement les règles de la commande publique.
              </p>

              <h3>2. Les critères impossibles</h3>
              <p>
                Des exigences cumulées qui éliminent mécaniquement 90% des candidats potentiels.
              </p>

              <h3>3. Les délais non-viables</h3>
              <p>
                Des calendriers qui ne permettent qu'aux initiés de répondre correctement.
              </p>

              <h3>4. Les budgets irréalistes</h3>
              <p>
                Des enveloppes sous-dimensionnées qui rendent la prestation impossible à prix correct.
              </p>

              <h3>5. Les procédures de pure forme</h3>
              <p>
                Des consultations lancées pour satisfier une obligation réglementaire, sans réelle volonté d'achat.
              </p>

              <h2>Comment Charly détecte ces AO perdus d'avance</h2>
              
              <Card className="my-8 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Algorithme de détection Charly
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                      <span className="text-sm">Analyse des critères discriminants cachés</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                      <span className="text-sm">Détection des patterns de favoritisme</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                      <span className="text-sm">Évaluation de la faisabilité budgétaire</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <p className="font-semibold text-lg mt-8">
                Avez-vous déjà suspecté un <strong>marché public</strong> perdu d'avance ? Comment identifiez-vous ces situations pour ne pas gaspiller vos ressources ?
              </p>
            </div>

            <div className="mt-12 p-8 bg-primary/5 rounded-xl border border-primary/20 text-center">
              <h3 className="text-xl font-semibold mb-4">
                Évitez les AO perdus d'avance avec Charly
              </h3>
              <p className="text-muted-foreground mb-6">
                Détectez automatiquement les consultations biaisées et concentrez-vous sur les vraies opportunités
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/demo">Analyser un AO</a>
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
          currentArticleUrl="/ao-perdus-avance" 
          currentCategory="Tendances & data clés"
        />

        <Footer />
      </div>
    </>
  );
}