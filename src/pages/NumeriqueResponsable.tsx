import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { ArticleStructuredData } from "@/components/ArticleStructuredData";
import { ArticleRecommendations } from "@/components/ArticleRecommendations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SafeLink } from "@/components/SafeLink";
import { 
  Leaf, 
  Monitor, 
  TrendingUp, 
  CheckCircle, 
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Globe,
  Zap,
  Award,
  ExternalLink,
  Lightbulb,
  Target,
  FileText
} from "lucide-react";

const NumeriqueResponsable = () => {
  return (
    <>
      <SEOHead />
      <ArticleStructuredData
        title="Critères environnementaux dans les AO IT, Digital et Marketing : Guide 2025"
        description="Comment répondre aux exigences environnementales des marchés publics numériques. Numérique responsable, éco-conception, bilan carbone digital. Guide complet avec Greenmetrics."
        datePublished="2025-12-03"
        dateModified="2025-12-03"
        url="/numerique-responsable"
        keywords={["numérique responsable", "green IT", "appels d'offres numériques", "critères environnementaux", "éco-conception", "bilan carbone digital", "marchés publics IT", "Greenmetrics"]}
        readingTime="12 min"
        alternateLanguage={{ lang: "en", url: "/en/sustainable-digital" }}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-32 pb-20">
          <article className="container mx-auto max-w-4xl px-4">
            {/* Header */}
            <header className="mb-12">
              <Badge className="mb-6 bg-gradient-to-r from-success/10 to-success/10 text-success border-success/20">
                <Leaf className="w-4 h-4 mr-2" />
                Numérique responsable
              </Badge>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
                Critères environnementaux dans les AO IT, Digital et Marketing
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Comment intégrer le numérique responsable dans vos réponses aux appels d'offres publics et transformer les exigences environnementales en avantage compétitif.
              </p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span>3 décembre 2025</span>
                <span>•</span>
                <span>12 min de lecture</span>
              </div>
            </header>

            {/* Introduction */}
            <section className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Le numérique représente aujourd'hui 4% des émissions mondiales de gaz à effet de serre</strong>, un chiffre en croissance de 6% par an. Face à l'urgence climatique, les acheteurs publics intègrent désormais systématiquement des critères environnementaux dans leurs marchés IT, digital et marketing.
              </p>
              
              <blockquote className="border-l-4 border-success/20 pl-6 my-8 bg-success/10/50 py-4 rounded-r-lg">
                <p className="text-lg font-medium text-foreground mb-2">
                  "Depuis 2024, 100% de nos marchés numériques supérieurs à 40 000€ intègrent des critères environnementaux représentant au minimum 10% de la notation."
                </p>
                <cite className="text-sm text-muted-foreground">— Direction des Achats, Ministère de la Transition Écologique</cite>
              </blockquote>
            </section>

            {/* Stats */}
            <section className="mb-12">
              <div className="grid md:grid-cols-4 gap-4">
                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <Monitor className="w-10 h-10 text-success mx-auto mb-3" />
                    <div className="text-2xl font-bold text-success mb-1">4%</div>
                    <p className="text-xs text-muted-foreground">Émissions GES mondiales du numérique</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <TrendingUp className="w-10 h-10 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary mb-1">+6%</div>
                    <p className="text-xs text-muted-foreground">Croissance annuelle de l'impact</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <Target className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-purple-600 mb-1">10-25%</div>
                    <p className="text-xs text-muted-foreground">Poids critères RSE dans les AO IT</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <Award className="w-10 h-10 text-amber-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-amber-600 mb-1">2024</div>
                    <p className="text-xs text-muted-foreground">Obligation clause environnementale</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Réglementation */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Le cadre réglementaire 2024-2025</h2>
              
              <Card className="border-success/20 bg-success/10/50 mb-6">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <FileText className="w-8 h-8 text-success flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-success mb-2">Loi REEN et Code de la Commande Publique</h3>
                      <p className="text-foreground text-sm mb-4">
                        La loi REEN (Réduction de l'Empreinte Environnementale du Numérique) et les évolutions du Code de la Commande Publique imposent aux acheteurs publics d'intégrer des considérations environnementales dans leurs marchés numériques.
                      </p>
                      <ul className="space-y-2 text-sm text-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                          <span>Obligation d'une clause environnementale pour tout marché &gt; 100 000€</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                          <span>Critère d'attribution environnemental obligatoire dès 40 000€ pour les services numériques</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                          <span>Prise en compte du coût du cycle de vie incluant l'impact carbone</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Critères par secteur */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Les critères environnementaux par type de marché</h2>

              {/* IT / Infrastructures */}
              <Card className="border-0 shadow-lg mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Monitor className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Marchés IT & Infrastructures</h3>
                      <p className="text-sm text-muted-foreground">Développement, hébergement, maintenance</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-foreground">Critères fréquemment demandés</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                          <span>Éco-conception logicielle (Green Code)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                          <span>PUE datacenter (Power Usage Effectiveness)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                          <span>Hébergement green (énergies renouvelables)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                          <span>Durée de vie et maintenabilité des solutions</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-foreground">Preuves attendues</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Bilan carbone de la solution proposée</li>
                        <li>• Certification hébergeur (ISO 14001, ISO 50001)</li>
                        <li>• Politique de gestion des équipements</li>
                        <li>• Indicateurs d'éco-conception</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Digital / Web */}
              <Card className="border-0 shadow-lg mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Marchés Digital & Web</h3>
                      <p className="text-sm text-muted-foreground">Sites web, applications, UX/UI</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-foreground">Critères fréquemment demandés</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                          <span>Référentiel RGESN (éco-conception services numériques)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                          <span>Performance web (Core Web Vitals)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                          <span>Accessibilité numérique (RGAA)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                          <span>Optimisation des assets (images, vidéos)</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-foreground">Preuves attendues</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Score éco-index ou EcoGrader</li>
                        <li>• Audit RGESN de sites réalisés</li>
                        <li>• Méthodologie d'éco-conception</li>
                        <li>• Formation équipes Green IT</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Marketing / Communication */}
              <Card className="border-0 shadow-lg mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Marchés Marketing & Communication</h3>
                      <p className="text-sm text-muted-foreground">Campagnes digitales, contenus, SEA/SEO</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-foreground">Critères fréquemment demandés</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                          <span>Bilan carbone des campagnes digitales</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                          <span>Stratégie de communication responsable</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                          <span>Optimisation SEO vs SEA (impact carbone)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                          <span>Formats publicitaires éco-responsables</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-foreground">Preuves attendues</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Mesure impact carbone campagnes</li>
                        <li>• Charte communication responsable</li>
                        <li>• Partenariats médias responsables</li>
                        <li>• Politique anti-greenwashing</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Greenmetrics Section - Point fort de l'article */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                Construire sa feuille de route environnementale avec Greenmetrics
              </h2>
              
              <p className="text-foreground leading-relaxed mb-6">
                Répondre aux critères environnementaux des appels d'offres IT, digital et marketing nécessite une <strong>démarche structurée et des preuves tangibles</strong>. C'est là qu'intervient <strong>Greenmetrics</strong>, expert en stratégies environnementales pour le secteur numérique.
              </p>

              <Card className="border-success/20 bg-success/5 shadow-xl mb-8">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-success rounded-2xl flex items-center justify-center shadow-lg">
                      <Leaf className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Greenmetrics</h3>
                      <p className="text-success">Expert RSE pour les marchés publics numériques</p>
                    </div>
                  </div>

                  <p className="text-foreground mb-6">
                    Greenmetrics accompagne les agences digitales, ESN et entreprises IT dans la construction de leurs stratégies environnementales pour remporter les marchés publics. Leur expertise couvre spécifiquement les secteurs IT, Digital et Marketing.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-card rounded-xl p-5 border border-success/20">
                      <Monitor className="w-8 h-8 text-primary mb-3" />
                      <h4 className="font-bold text-foreground mb-2">Missions IT</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Bilan carbone infrastructures</li>
                        <li>• Politique Green IT</li>
                        <li>• Éco-conception logicielle</li>
                        <li>• Certification ISO 14001</li>
                      </ul>
                    </div>

                    <div className="bg-card rounded-xl p-5 border border-success/20">
                      <Globe className="w-8 h-8 text-purple-600 mb-3" />
                      <h4 className="font-bold text-foreground mb-2">Missions Digital</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Audit RGESN complet</li>
                        <li>• Formation éco-conception web</li>
                        <li>• Méthodologie sobriété numérique</li>
                        <li>• Indicateurs performance RSE</li>
                      </ul>
                    </div>

                    <div className="bg-card rounded-xl p-5 border border-success/20">
                      <Zap className="w-8 h-8 text-amber-600 mb-3" />
                      <h4 className="font-bold text-foreground mb-2">Missions Marketing</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Mesure empreinte campagnes</li>
                        <li>• Stratégie communication responsable</li>
                        <li>• Labels et certifications</li>
                        <li>• Reporting impact environnemental</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-success/10 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5" />
                      Comment Greenmetrics vous aide à gagner des AO
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-sm text-foreground">Diagnostic initial</span>
                          <p className="text-xs text-success">Évaluation de votre maturité RSE et identification des quick wins</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-sm text-foreground">Feuille de route personnalisée</span>
                          <p className="text-xs text-success">Plan d'action adapté à vos marchés cibles</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-sm text-foreground">Création des preuves</span>
                          <p className="text-xs text-success">Documents et certifications pour vos réponses AO</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-sm text-foreground">Accompagnement réponse</span>
                          <p className="text-xs text-success">Support pour rédiger le volet RSE de vos mémoires techniques</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Greenmetrics */}
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <Button 
                      size="lg"
                      className="bg-success hover:bg-green-700 text-white shadow-lg"
                      onClick={() => window.open('https://greenmetrics.fr/contact', '_blank')}
                    >
                      Demander un diagnostic gratuit
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="border-green-600 text-success hover:bg-success/10"
                      onClick={() => window.open('https://greenmetrics.fr', '_blank')}
                    >
                      Découvrir Greenmetrics
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>

                  <div className="mt-6 text-center">
                    <Card className="inline-block border-success/20 bg-card">
                      <CardContent className="p-4">
                        <p className="text-sm text-success mb-2">
                          <strong>Offre spéciale lecteurs Eligibly</strong>
                        </p>
                        <p className="text-xs text-success mb-2">
                          Diagnostic environnemental gratuit + 20% sur l'accompagnement
                        </p>
                        <div className="text-sm font-mono bg-success/10 text-success px-3 py-1 rounded inline-block">
                          ELIGIBLY2025
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Erreurs à éviter */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Les erreurs qui coûtent des points sur les critères RSE</h2>
              
              <div className="space-y-4">
                <Card className="border-red-200 bg-red-50/50">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-red-800 mb-1">Greenwashing détectable</h4>
                        <p className="text-sm text-red-700">
                          Affirmer des engagements environnementaux sans preuves concrètes. Les acheteurs publics sont formés à détecter le greenwashing et pénalisent les réponses vagues.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50/50">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-red-800 mb-1">Absence de métriques</h4>
                        <p className="text-sm text-red-700">
                          Ne pas quantifier ses engagements. Un "nous sommes engagés pour l'environnement" vaut 0 point, un "réduction de 30% de l'empreinte carbone de nos solutions depuis 2022" marque des points.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50/50">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-red-800 mb-1">Réponse copier-coller</h4>
                        <p className="text-sm text-red-700">
                          Utiliser la même réponse RSE générique pour tous les AO. Chaque marché a des critères spécifiques qui nécessitent une adaptation de votre argumentaire.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Comment Charly aide */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                Comment Charly identifie les critères RSE de vos AO
              </h2>
              
              <p className="text-foreground leading-relaxed mb-6">
                L'IA Charly d'Eligibly analyse automatiquement les cahiers des charges pour identifier et pondérer les critères environnementaux, vous permettant de prioriser vos efforts.
              </p>

              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold mb-1">Détection automatique</h4>
                        <p className="text-sm text-muted-foreground">Identification des critères RSE explicites et implicites dans le CCTP</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <BarChart3 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold mb-1">Pondération réelle</h4>
                        <p className="text-sm text-muted-foreground">Calcul du poids effectif des critères environnementaux dans la notation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold mb-1">Recommandations ciblées</h4>
                        <p className="text-sm text-muted-foreground">Suggestions d'éléments à intégrer dans votre réponse</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold mb-1">Score de compatibilité</h4>
                        <p className="text-sm text-muted-foreground">Évaluation de votre positionnement RSE vs exigences du marché</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <Card className="border-0 shadow-2xl bg-gradient-to-r from-success to-emerald-600 text-white">
                <CardContent className="p-8 md:p-12 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Prêt à transformer vos critères RSE en avantage compétitif ?
                  </h2>
                  <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
                    Combinez l'analyse IA de Charly avec l'expertise RSE de Greenmetrics pour maximiser vos chances sur les marchés publics numériques.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <SafeLink to="/demo">
                      <Button size="lg" className="bg-card text-success hover:bg-success/10">
                        Analyser mes opportunités avec Charly
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </SafeLink>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white/10"
                      onClick={() => window.open('https://greenmetrics.fr/contact', '_blank')}
                    >
                      Contacter Greenmetrics
                      <ExternalLink className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Article Recommendations */}
            <ArticleRecommendations currentArticleUrl="/numerique-responsable" />
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NumeriqueResponsable;
