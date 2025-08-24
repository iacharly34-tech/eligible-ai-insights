import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Users, Award, CheckCircle, AlertTriangle, TrendingUp } from "lucide-react";

export default function CriteresRSE() {
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
                Critères environnementaux et sociaux : comment les intégrer pour maximiser ses chances
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Guide complet pour réussir sur les marchés publics durables. Nouvelles obligations RSE, stratégies gagnantes et outils d'accompagnement en 2025.
              </p>
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <span>Publié le 24 août 2025</span>
                <span>•</span>
                <span>Lecture 8 min</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <blockquote className="border-l-4 border-green-500 pl-6 italic text-lg mb-8 bg-green-50 p-6 rounded-r-lg">
                "On nous demande un plan RSE, mais on ne sait pas par où commencer."
                <cite className="block mt-2 text-sm text-muted-foreground not-italic">— Responsable PME logistique</cite>
              </blockquote>

              <p className="lead">
                Cette interrogation résonne dans de nombreuses PME face à l'évolution des <strong>marchés publics</strong>. En 2022, <strong>29% des marchés</strong> intégraient déjà une clause environnementale selon l'Observatoire économique de la commande publique, et cette proportion ne cesse de croître. Les <strong>critères environnementaux et sociaux</strong> ne sont plus optionnels : ils deviennent déterminants pour remporter les <strong>appels d'offres publics</strong>.
              </p>

              <h2>La révolution RSE dans la commande publique</h2>
              
              <p>
                L'évolution réglementaire transforme profondément les exigences des <strong>marchés publics</strong>. Le Code de la commande publique impose désormais l'intégration systématique de considérations environnementales, et la loi Climat et Résilience de 2021 accélère cette transition.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
                <h3 className="text-green-800 font-semibold mb-3 flex items-center gap-2">
                  <Leaf className="h-5 w-5" />
                  Contexte réglementaire 2024-2025
                </h3>
                <p className="text-green-700 text-sm mb-3">
                  Depuis janvier 2024, les acheteurs publics doivent obligatoirement intégrer au moins une clause environnementale dans tous les marchés supérieurs à 100 000€. Cette obligation s'étend progressivement à tous les marchés d'ici 2026.
                </p>
                <p className="text-green-700 text-sm">
                  <strong>Source :</strong> Direction des Affaires Juridiques (DAJ) - Ministère de l'Économie
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Leaf className="h-8 w-8 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">29%</h3>
                    <p className="text-sm text-muted-foreground">
                      Marchés avec clause environnementale en 2022
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Users className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">22%</h3>
                    <p className="text-sm text-muted-foreground">
                      Marchés avec clause sociale (insertion)
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">+15%</h3>
                    <p className="text-sm text-muted-foreground">
                      Évolution annuelle des exigences RSE
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h2>Décryptage des nouvelles exigences</h2>

              <h3>Les critères environnementaux incontournables</h3>
              
              <p>
                Les <strong>AO durables</strong> intègrent désormais des critères environnementaux sophistiqués qui vont bien au-delà du simple "respect de l'environnement". Les acheteurs publics demandent des preuves concrètes et mesurables.
              </p>

              <Card className="my-6 border-green-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4 flex items-center gap-2 text-green-800">
                    <Leaf className="h-5 w-5" />
                    Top 5 des exigences environnementales
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm">Bilan carbone et réduction des émissions</h5>
                        <p className="text-sm text-muted-foreground">Calcul et engagement de réduction des émissions GES liées au projet</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm">Économie circulaire</h5>
                        <p className="text-sm text-muted-foreground">Valorisation des déchets, réemploi, circuits courts d'approvisionnement</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm">Certifications environnementales</h5>
                        <p className="text-sm text-muted-foreground">ISO 14001, labels sectoriels, certifications produits</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm">Biodiversité et ressources naturelles</h5>
                        <p className="text-sm text-muted-foreground">Protection des écosystèmes, gestion durable des ressources</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm">Innovation environnementale</h5>
                        <p className="text-sm text-muted-foreground">Solutions innovantes pour la transition écologique</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3>Les critères sociaux en expansion</h3>
              
              <p>
                Les <strong>clauses sociales</strong> évoluent également. Elles ne se limitent plus à l'insertion par l'emploi mais englobent l'égalité professionnelle, les conditions de travail et l'impact sociétal.
              </p>

              <blockquote className="border-l-4 border-blue-500 pl-6 italic text-lg my-6 bg-blue-50 p-4 rounded-r-lg">
                "Sur notre dernier marché de nettoyage, 40% de la note portait sur les critères sociaux : insertion, égalité homme-femme, qualité de l'emploi... On a dû complètement revoir notre approche RH."
                <cite className="block mt-2 text-sm text-muted-foreground not-italic">— Dirigeant entreprise de services</cite>
              </blockquote>

              <h2>Les défis spécifiques aux PME</h2>

              <p>
                Si les grandes entreprises disposent souvent de services RSE dédiés, les PME font face à des défis particuliers pour répondre à ces nouvelles exigences.
              </p>

              <h3>Le syndrome de la "paperasserie RSE"</h3>
              
              <Card className="my-6 border-amber-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <AlertTriangle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-2">Le défi PME</h4>
                      <p className="text-sm">Les PME perçoivent souvent les exigences RSE comme une surcharge administrative plutôt que comme un avantage concurrentiel.</p>
                    </div>
                  </div>
                  
                  <blockquote className="border-l-2 border-amber-300 pl-4 italic text-sm mb-4">
                    "On veut bien répondre sur des critères environnementaux ou sociaux, on y est sensibles… Mais on nous réclame des labels, des preuves, toute une paperasse RSE qui est très lourde pour une petite entreprise."
                    <cite className="block mt-1 text-xs text-amber-600 not-italic">— Directeur commercial PME BTP</cite>
                  </blockquote>
                  
                  <div className="text-sm text-amber-700">
                    <strong>Réalité :</strong> 67% des PME estiment manquer de ressources pour répondre efficacement aux critères RSE (Baromètre CINOV 2024).
                  </div>
                </CardContent>
              </Card>

              <h3>Le manque d'accompagnement</h3>
              
              <p>
                Contrairement aux critères techniques où les PME maîtrisent leur sujet, les exigences RSE nécessitent souvent des compétences nouvelles : calcul carbone, reporting social, certifications...
              </p>

              <h2>Stratégies gagnantes pour les PME</h2>

              <h3>1. Commencer par l'essentiel : l'auto-évaluation</h3>
              
              <p>
                Avant de se lancer dans la course aux labels, il faut faire l'inventaire de ses pratiques existantes. Beaucoup de PME sous-estiment leurs atouts RSE actuels.
              </p>

              <Card className="my-6 border-blue-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-blue-800">
                    <Award className="h-5 w-5" />
                    Checklist RSE pour PME
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Environnemental</h5>
                      <ul className="space-y-1 text-sm">
                        <li>✓ Tri et recyclage des déchets</li>
                        <li>✓ Optimisation énergétique</li>
                        <li>✓ Dématérialisation</li>
                        <li>✓ Transport et mobilité</li>
                        <li>✓ Achats responsables</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Social</h5>
                      <ul className="space-y-1 text-sm">
                        <li>✓ Formation des salariés</li>
                        <li>✓ Égalité professionnelle</li>
                        <li>✓ Conditions de travail</li>
                        <li>✓ Partenariats locaux</li>
                        <li>✓ Insertion et diversité</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3>2. Prioriser selon les secteurs d'activité</h3>
              
              <p>
                Tous les <strong>critères environnementaux</strong> ne se valent pas selon votre domaine. Il faut identifier ceux qui sont stratégiques pour vos <strong>marchés publics</strong> cibles.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3">Secteur BTP/Travaux</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Matériaux biosourcés/recyclés</li>
                      <li>• Réduction des déchets de chantier</li>
                      <li>• Insertion par l'emploi</li>
                      <li>• Bilan carbone transport</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3">Secteur Services/IT</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Numérique responsable</li>
                      <li>• Dématérialisation</li>
                      <li>• Égalité professionnelle</li>
                      <li>• Formation/montée en compétences</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3>3. Valoriser plutôt que subir</h3>
              
              <p>
                Les <strong>critères RSE</strong> ne doivent pas être vus comme une contrainte mais comme un levier de différenciation. Les PME agiles peuvent souvent innover plus rapidement que les grands groupes.
              </p>

              <blockquote className="border-l-4 border-green-500 pl-6 italic text-lg my-6 bg-green-50 p-4 rounded-r-lg">
                "On a fait de notre petite taille un atout : circuits courts, relations directes avec les producteurs locaux, flexibilité pour adapter nos pratiques. Sur les critères environnementaux, on bat les grands groupes."
                <cite className="block mt-2 text-sm text-muted-foreground not-italic">— Dirigeante PME restauration collective</cite>
              </blockquote>

              <h2>Comment Charly optimise votre approche RSE</h2>
              
              <p>
                L'agent intelligent <strong>Charly</strong> d'Eligibly analyse spécifiquement les <strong>critères environnementaux et sociaux</strong> de chaque <strong>appel d'offres</strong> pour vous aider à maximiser vos chances :
              </p>

              <Card className="my-8 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-primary" />
                    Analyse RSE automatisée par Charly
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm">Détection des critères cachés</h5>
                        <p className="text-sm text-muted-foreground">Identification des exigences RSE implicites dans le cahier des charges</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm">Pondération réelle</h5>
                        <p className="text-sm text-muted-foreground">Calcul du poids effectif des critères RSE dans la notation finale</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm">Benchmark concurrentiel</h5>
                        <p className="text-sm text-muted-foreground">Évaluation de votre positionnement RSE face aux attentes du marché</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-sm">Plan d'action personnalisé</h5>
                        <p className="text-sm text-muted-foreground">Recommandations prioritaires selon votre profil et vos marchés cibles</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2>Les outils d'accompagnement disponibles</h2>

              <h3>Certifications accessibles aux PME</h3>
              
              <ul className="space-y-2 my-6">
                <li><strong>ISO 14001</strong> : Management environnemental (coût : 5-15k€)</li>
                <li><strong>B-Corp</strong> : Certification d'entreprise à mission (coût : 2-5k€)</li>
                <li><strong>EcoVadis</strong> : Plateforme d'évaluation RSE (coût : 1-3k€)</li>
                <li><strong>Labels sectoriels</strong> : Spécifiques à votre domaine d'activité</li>
              </ul>

              <h3>Financements et aides</h3>
              
              <p>
                De nombreux dispositifs accompagnent les PME dans leur transition RSE :
              </p>

              <ul>
                <li>France Relance : aides à la transition écologique</li>
                <li>ADEME : accompagnement technique et financier</li>
                <li>Régions : dispositifs d'aide aux certifications</li>
                <li>CCI/CMA : formations et diagnostic RSE</li>
              </ul>

              <h2>ROI de la démarche RSE</h2>
              
              <p>
                Investir dans les <strong>critères environnementaux et sociaux</strong> génère des retours mesurables au-delà des seuls <strong>marchés publics</strong> :
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">+25%</div>
                    <div className="text-sm text-muted-foreground">
                      Augmentation du taux de succès sur AO durables
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">-15%</div>
                    <div className="text-sm text-muted-foreground">
                      Réduction des coûts opérationnels
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-2">+30%</div>
                    <div className="text-sm text-muted-foreground">
                      Amélioration de l'attractivité employeur
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2>L'avenir des marchés publics durables</h2>
              
              <p>
                La transition est irréversible. D'ici 2030, l'intégration de <strong>critères environnementaux</strong> sera systématique dans tous les <strong>marchés publics</strong>. Les entreprises qui anticipent cette évolution prennent une longueur d'avance décisive.
              </p>

              <p>
                Le Ministère de la Transition Écologique prévoit que 100% des <strong>appels d'offres publics</strong> intégreront au moins un critère environnemental d'ici 2026. Parallèlement, les exigences sociales se renforcent avec la loi sur le devoir de vigilance et les nouvelles obligations en matière d'égalité professionnelle.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 italic text-lg my-8 bg-primary/5 p-6 rounded-r-lg">
                "Les critères RSE ne sont plus un 'plus' dans les AO, c'est devenu le minimum attendu. Les entreprises qui ne s'y préparent pas seront mécaniquement exclues."
                <cite className="block mt-2 text-sm text-muted-foreground not-italic">— Responsable achats durables, grande collectivité</cite>
              </blockquote>

              <p className="font-semibold text-lg mt-8">
                Votre entreprise est-elle prête pour les <strong>marchés publics durables</strong> ? Quels critères RSE mettez-vous déjà en avant ? Quels sont vos principaux défis pour répondre aux nouvelles exigences environnementales et sociales ?
              </p>
            </div>

            <div className="mt-12 p-8 bg-primary/5 rounded-xl border border-primary/20 text-center">
              <h3 className="text-xl font-semibold mb-4">
                Optimisez votre stratégie RSE avec Charly
              </h3>
              <p className="text-muted-foreground mb-6">
                Identifiez les critères environnementaux et sociaux clés pour maximiser vos chances sur les AO durables
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/demo">Analyser mes critères RSE</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/produit">Découvrir Charly</a>
                </Button>
              </div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}