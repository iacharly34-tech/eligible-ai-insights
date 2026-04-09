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
  FileText, 
  FolderOpen, 
  CheckCircle, 
  AlertTriangle,
  ArrowRight,
  Download,
  Eye,
  Clock,
  BookOpen,
  Scale,
  Shield,
  Lightbulb
} from "lucide-react";

const DocumentsAO = () => {
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
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                <FolderOpen className="w-4 h-4 mr-2" />
                Guide pratique
              </Badge>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
                Quels documents composent un appel d'offres public ?
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Le DCE décrypté : comprendre chaque document, son rôle et les informations clés à en extraire pour optimiser votre réponse.
              </p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span>20 septembre 2025</span>
                <span>•</span>
                <span>12 min de lecture</span>
              </div>
            </header>

            {/* Introduction */}
            <section className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Le Dossier de Consultation des Entreprises (DCE) est le cœur de tout appel d'offres.</strong> Ce package documentaire contient toutes les informations nécessaires pour comprendre le besoin, préparer votre réponse et évaluer vos chances de succès. Maîtriser sa lecture est la première compétence à acquérir.
              </p>
              
              <blockquote className="border-l-4 border-blue-500 pl-6 my-8 bg-blue-50/50 py-4 rounded-r-lg">
                <p className="text-lg font-medium text-foreground mb-2">
                  "80% des erreurs de réponse aux AO proviennent d'une lecture incomplète ou superficielle du DCE."
                </p>
                <cite className="text-sm text-muted-foreground">— Retour d'expérience Eligibly</cite>
              </blockquote>
            </section>

            {/* Vue d'ensemble */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Vue d'ensemble du DCE</h2>
              
              <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-indigo-50 mb-8">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <FolderOpen className="w-8 h-8 text-primary" />
                    <h3 className="font-bold text-xl">Composition standard d'un DCE</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-card rounded-lg">
                      <FileText className="w-5 h-5 text-primary" />
                      <span className="font-medium">Règlement de Consultation (RC)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-card rounded-lg">
                      <FileText className="w-5 h-5 text-primary" />
                      <span className="font-medium">Acte d'Engagement (AE)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-card rounded-lg">
                      <FileText className="w-5 h-5 text-primary" />
                      <span className="font-medium">Cahier des Clauses Administratives (CCAP)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-card rounded-lg">
                      <FileText className="w-5 h-5 text-primary" />
                      <span className="font-medium">Cahier des Clauses Techniques (CCTP)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-card rounded-lg">
                      <FileText className="w-5 h-5 text-primary" />
                      <span className="font-medium">Bordereau des Prix (BPU/DQE)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-card rounded-lg">
                      <FileText className="w-5 h-5 text-primary" />
                      <span className="font-medium">Annexes techniques</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Détail de chaque document */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Analyse détaillée de chaque document</h2>

              <div className="space-y-8">
                {/* RC */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-3">Règlement de Consultation (RC)</h3>
                        <p className="text-muted-foreground mb-4">
                          Le document à lire en premier. Il définit les règles du jeu : procédure, critères de sélection, délais et modalités de remise des offres.
                        </p>
                        
                        <h4 className="font-bold text-sm mb-2 text-primary">Informations clés à extraire :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                            <span><strong>Critères de notation</strong> et leur pondération</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                            <span><strong>Date et heure limite</strong> de remise des offres</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                            <span><strong>Documents à fournir</strong> (liste complète)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                            <span><strong>Possibilité de variantes</strong> ou options</span>
                          </li>
                        </ul>
                        
                        <div className="flex items-center gap-2 text-xs text-amber-600 bg-amber-50 p-3 rounded-lg">
                          <AlertTriangle className="w-4 h-4" />
                          <span>Attention aux sous-critères parfois détaillés uniquement dans les annexes</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* AE */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Scale className="w-6 h-6 text-success" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-3">Acte d'Engagement (AE)</h3>
                        <p className="text-muted-foreground mb-4">
                          Le document contractuel par excellence. En le signant, vous vous engagez sur votre offre. Il devient le contrat en cas d'attribution.
                        </p>
                        
                        <h4 className="font-bold text-sm mb-2 text-success">Points de vigilance :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                            <span><strong>Durée du marché</strong> et reconductions éventuelles</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                            <span><strong>Montants mini/maxi</strong> pour les accords-cadres</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                            <span><strong>Délai de validité</strong> de votre offre</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                            <span><strong>Signature électronique</strong> requise ou non</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* CCAP */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-3">Cahier des Clauses Administratives Particulières (CCAP)</h3>
                        <p className="text-muted-foreground mb-4">
                          Définit les conditions d'exécution du marché : pénalités, délais de paiement, assurances, sous-traitance...
                        </p>
                        
                        <h4 className="font-bold text-sm mb-2 text-purple-600">Clauses à vérifier :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                            <span><strong>Pénalités de retard</strong> (montant et calcul)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                            <span><strong>Délai de paiement</strong> (30 jours légaux)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                            <span><strong>Révision des prix</strong> (formule et indices)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                            <span><strong>Assurances exigées</strong> et montants de garantie</span>
                          </li>
                        </ul>
                        
                        <div className="flex items-center gap-2 text-xs text-amber-600 bg-amber-50 p-3 rounded-lg">
                          <AlertTriangle className="w-4 h-4" />
                          <span>Des pénalités disproportionnées peuvent rendre un marché non rentable</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* CCTP */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Lightbulb className="w-6 h-6 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-3">Cahier des Clauses Techniques Particulières (CCTP)</h3>
                        <p className="text-muted-foreground mb-4">
                          Le cœur technique du besoin. Décrit précisément ce qui est attendu : spécifications, performances, méthodologie...
                        </p>
                        
                        <h4 className="font-bold text-sm mb-2 text-amber-600">Ce qu'il faut y chercher :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                            <span><strong>Spécifications techniques</strong> détaillées</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                            <span><strong>Niveaux de service</strong> attendus (SLA)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                            <span><strong>Livrables</strong> et échéances</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                            <span><strong>Contraintes spécifiques</strong> (horaires, lieux, certifications)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* BPU/DQE */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Download className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-3">Bordereau des Prix Unitaires (BPU) / Détail Quantitatif Estimatif (DQE)</h3>
                        <p className="text-muted-foreground mb-4">
                          Le document financier à compléter. Le BPU liste les prix unitaires, le DQE y ajoute les quantités estimées.
                        </p>
                        
                        <h4 className="font-bold text-sm mb-2 text-emerald-600">Bonnes pratiques :</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                            <span><strong>Vérifiez les formules</strong> de calcul (Excel)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                            <span><strong>Cohérence</strong> entre BPU et mémoire technique</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                            <span><strong>Prix réalistes</strong> sur chaque ligne</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                            <span><strong>Ne laissez aucune case vide</strong></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Ordre de lecture */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">L'ordre optimal de lecture</h2>

              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                      <div>
                        <span className="font-bold">Règlement de Consultation</span>
                        <p className="text-sm text-muted-foreground">Pour décider Go/No Go rapidement</p>
                      </div>
                      <Clock className="w-5 h-5 text-primary ml-auto" />
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-xl">
                      <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                      <div>
                        <span className="font-bold">CCTP</span>
                        <p className="text-sm text-muted-foreground">Pour comprendre le besoin technique</p>
                      </div>
                      <Eye className="w-5 h-5 text-amber-600 ml-auto" />
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-success/10 rounded-xl">
                      <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center text-white font-bold">3</div>
                      <div>
                        <span className="font-bold">BPU/DQE</span>
                        <p className="text-sm text-muted-foreground">Pour estimer le prix et la rentabilité</p>
                      </div>
                      <Download className="w-5 h-5 text-success ml-auto" />
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                      <div>
                        <span className="font-bold">CCAP</span>
                        <p className="text-sm text-muted-foreground">Pour évaluer les risques contractuels</p>
                      </div>
                      <Shield className="w-5 h-5 text-purple-600 ml-auto" />
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                      <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
                      <div>
                        <span className="font-bold">Acte d'Engagement + Annexes</span>
                        <p className="text-sm text-muted-foreground">Pour finaliser et signer</p>
                      </div>
                      <FileText className="w-5 h-5 text-slate-600 ml-auto" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Laissez Charly analyser vos DCE
              </h2>
              <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
                L'IA de Charly lit et synthétise tous les documents du DCE en quelques secondes. Plus de lecture fastidieuse, juste l'essentiel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SafeLink to="/demo">
                  <Button size="lg" className="bg-card text-primary hover:bg-blue-50">
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

          <ArticleRecommendations currentArticleUrl="/documents-ao" />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DocumentsAO;
