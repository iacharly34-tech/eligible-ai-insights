import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { ContextualLinks } from "@/components/ContextualLinks";
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
                Appels d'offres publics : Guide complet pour réussir vos marchés publics en 2025
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Découvrez comment analyser et remporter vos appels d'offres publics grâce à l'IA. Guide expert sur les marchés publics, stratégies gagnantes et optimisation de vos candidatures AO.
              </p>
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <span>Publié le 20 août 2025</span>
                <span>•</span>
                <span>Lecture 8 min</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <h2>Appels d'offres publics : définition et enjeux des marchés publics</h2>
              <p>
                Les <strong>appels d'offres publics</strong> (AO) constituent la procédure principale d'attribution des <strong>marchés publics</strong> en France. Ces appels d'offres permettent aux administrations publiques, collectivités territoriales et établissements publics de sélectionner les meilleures offres pour leurs projets. Le marché des appels d'offres publics représente plus de 200 milliards d'euros annuels, soit une opportunité majeure pour les entreprises de tous secteurs.
              </p>
              
              <h3>Types d'appels d'offres publics</h3>
              <p>
                Les appels d'offres publics se déclinent en plusieurs catégories selon les seuils et procédures :
              </p>
              <ul>
                <li><strong>Appel d'offres ouvert</strong> : procédure la plus courante pour les marchés publics</li>
                <li><strong>Appel d'offres restreint</strong> : avec présélection des candidats</li>
                <li><strong>Procédure négociée</strong> : pour des marchés publics spécifiques</li>
                <li><strong>Dialogue compétitif</strong> : pour les projets complexes d'appels d'offres publics</li>
              </ul>

              <h2>Défis et complexité des appels d'offres publics</h2>
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

              <h2>Solutions IA pour optimiser vos appels d'offres publics</h2>
              <p>
                <strong>Eligibly</strong> révolutionne l'approche des <strong>appels d'offres publics</strong> grâce à l'intelligence artificielle. Notre plateforme analyse automatiquement tous les appels d'offres publics et calcule vos probabilités de succès sur les marchés publics, vous permettant de concentrer vos efforts sur les opportunités les plus prometteuses.
              </p>

              <h3>Analyse automatisée en quelques minutes</h3>
              <p>
                Notre IA analyse automatiquement tous les critères d'un appel d'offres public :
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  Critères de sélection et pondération
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  Exigences techniques et administratives
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  Budget et contraintes financières
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
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

              <h2>Tous secteurs d'appels d'offres publics couverts</h2>
              <p>
                Notre IA analyse tous les types d'<strong>appels d'offres publics</strong> et <strong>marchés publics</strong> dans l'ensemble des secteurs d'activité :
              </p>
              <ul>
                <li><strong>Appels d'offres publics BTP</strong> : travaux publics, construction, rénovation</li>
                <li><strong>Marchés publics informatiques</strong> : services IT, transformation digitale, logiciels</li>
                <li><strong>Appels d'offres fournitures</strong> : équipements, matériels, fournitures administratives</li>
                <li><strong>Services aux collectivités</strong> : nettoyage, sécurité, maintenance</li>
                <li><strong>Marchés publics conseil</strong> : formation, audit, accompagnement</li>
                <li><strong>Appels d'offres publics santé</strong> : équipements médicaux, services hospitaliers</li>
                <li><strong>Marchés publics énergie</strong> : efficacité énergétique, énergies renouvelables</li>
              </ul>

              <h2>Stratégies gagnantes pour vos appels d'offres publics</h2>
              
              <h3>Conseils d'experts pour remporter vos marchés publics</h3>
              <ul>
                <li><strong>Analyse approfondie</strong> : étudiez chaque appel d'offres public en détail</li>
                <li><strong>Qualification préalable</strong> : vérifiez votre éligibilité aux marchés publics</li>
                <li><strong>Offre différenciante</strong> : valorisez vos atouts sur chaque appel d'offres</li>
                <li><strong>Respect des délais</strong> : anticipez les échéances des appels d'offres publics</li>
                <li><strong>Partenariats stratégiques</strong> : constituez des groupements pour les gros marchés publics</li>
              </ul>

              <h2>L'avenir des appels d'offres publics avec l'IA</h2>
              <p>
                L'intelligence artificielle transforme radicalement l'approche des <strong>appels d'offres publics</strong>. Les entreprises utilisant l'IA pour analyser les marchés publics augmentent significativement leur taux de succès et optimisent leurs ressources commerciales.
              </p>

              <p>
                Avec Eligibly, l'analyse des <strong>appels d'offres publics</strong> devient automatisée, prédictive et stratégique. Les entreprises qui adoptent ces technologies d'IA pour les marchés publics prennent une avance décisive sur leurs concurrents.
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
                <EligiblyButton 
                  variant="secondary" 
                  size="lg" 
                  onClick={() => window.location.href = '/produit'}
                >
                  Découvrir le produit
                </EligiblyButton>
              </div>
            </div>
          </article>
          
          <ContextualLinks currentPage="/appels-d-offres-publics" context="article" />
        </main>

        <Footer />
      </div>
    </>
  );
}