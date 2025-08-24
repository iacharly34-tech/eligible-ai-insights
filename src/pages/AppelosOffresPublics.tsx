import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { EligiblyButton } from "@/components/EligiblyButton";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp, FileCheck, Timer } from "lucide-react";

export default function AppelosOffresPublics() {
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
                Comment l'IA transforme les appels d'offres publics (AO) en 2025
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Découvrez comment Eligibly révolutionne l'analyse des appels d'offres publics et des marchés publics grâce à l'intelligence artificielle prédictive.
              </p>
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <span>Publié le 20 août 2025</span>
                <span>•</span>
                <span>Lecture 8 min</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <h2>Qu'est-ce qu'un appel d'offres public (AO) ?</h2>
              <p>
                Un appel d'offres public (AO) est une procédure par laquelle les administrations publiques et collectivités 
                mettent en concurrence plusieurs entreprises pour l'attribution d'un marché public. Ces marchés publics 
                représentent plus de 200 milliards d'euros par an en France.
              </p>

              <h2>Les défis traditionnels des appels d'offres publics</h2>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card>
                  <CardContent className="p-6">
                    <Timer className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">Temps d'analyse</h3>
                    <p className="text-sm text-muted-foreground">
                      Analyser manuellement chaque AO prend en moyenne 4-6 heures par dossier
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <TrendingUp className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">Taux de succès</h3>
                    <p className="text-sm text-muted-foreground">
                      Seuls 15-20% des candidatures aux marchés publics sont retenues
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h2>Comment Eligibly transforme l'analyse des AO</h2>
              <p>
                <strong>Eligibly</strong> est la première plateforme d'intelligence artificielle spécialement conçue 
                pour analyser les appels d'offres publics et prédire vos chances de succès sur les marchés publics.
              </p>

              <h3>Analyse automatisée en quelques minutes</h3>
              <p>
                Notre IA analyse automatiquement tous les critères d'un appel d'offres public :
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  Critères de sélection et pondération
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  Exigences techniques et administratives
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  Budget et contraintes financières
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  Délais et planning de réalisation
                </li>
              </ul>

              <h3>Prédiction intelligente de vos chances</h3>
              <p>
                En croisant vos capacités avec les exigences de l'AO, Eligibly calcule votre probabilité 
                de succès et identifie les points d'amélioration pour maximiser vos chances sur les marchés publics.
              </p>

              <Card className="my-8 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <FileCheck className="h-5 w-5 text-primary" />
                    Résultats concrets avec Eligibly
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">+40%</div>
                      <div className="text-sm text-muted-foreground">Taux de succès</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">-75%</div>
                      <div className="text-sm text-muted-foreground">Temps d'analyse</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">+60%</div>
                      <div className="text-sm text-muted-foreground">Marchés qualifiés</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2>Secteurs et types de marchés publics couverts</h2>
              <p>
                Eligibly analyse tous types d'appels d'offres publics dans tous les secteurs :
              </p>
              <ul>
                <li>Travaux publics et BTP</li>
                <li>Services informatiques et transformation digitale</li>
                <li>Fournitures et équipements</li>
                <li>Services aux collectivités</li>
                <li>Conseil et formation</li>
                <li>Marchés de services publics</li>
              </ul>

              <h2>L'avenir des appels d'offres publics avec l'IA</h2>
              <p>
                L'intelligence artificielle révolutionne déjà la façon dont les entreprises abordent les marchés publics. 
                Avec des outils comme Eligibly, l'analyse des AO devient plus précise, plus rapide et plus stratégique.
              </p>

              <p>
                Les entreprises qui adoptent dès maintenant ces technologies d'IA pour les appels d'offres publics 
                prennent une longueur d'avance significative sur leurs concurrents.
              </p>
            </div>

            <div className="mt-12 p-8 bg-primary/5 rounded-xl border border-primary/20 text-center">
              <h3 className="text-xl font-semibold mb-4">
                Testez Eligibly sur vos prochains appels d'offres publics
              </h3>
              <p className="text-muted-foreground mb-6">
                Découvrez comment notre IA peut transformer votre approche des marchés publics
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/demo">Tester gratuitement</a>
                </Button>
                <EligiblyButton variant="secondary" size="lg" asChild>
                  <a href="/produit">Découvrir le produit</a>
                </EligiblyButton>
              </div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}