import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Database, 
  Search, 
  FileText, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Building2,
  Users,
  TrendingUp,
  Shield
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const AboutUsSection = () => {
  const { t } = useLanguage();
  
  const ourRole = [
    {
      icon: Target,
      title: "Notre mission",
      description: "Démocratiser l'accès aux marchés publics grâce à l'intelligence artificielle",
      detail: "Nous aidons les entreprises de toutes tailles à identifier, analyser et remporter les appels d'offres publics qui correspondent exactement à leur expertise."
    },
    {
      icon: Building2,
      title: "Notre expertise",
      description: "Spécialistes des marchés publics depuis 2020",
      detail: "Des experts qui ont mis à disposition leur savoir-faire dans cette solution pour vous accompagner dans la conquête des marchés publics."
    },
    {
      icon: Users,
      title: "Notre approche",
      description: "Technologie au service de l'humain",
      detail: "L'IA ne remplace pas les métiers, elle libère du temps pour que vos équipes commerciales se concentrent sur ce qu'elles font de mieux : vendre."
    }
  ];

  const dataSources = [
    {
      source: "BOAMP",
      description: "Bulletin officiel des annonces de marchés publics",
      coverage: "France entière",
      frequency: "Temps réel",
      verified: true
    },
    {
      source: "JOUE",
      description: "Journal officiel de l'Union européenne",
      coverage: "27 pays UE",
      frequency: "Quotidien",
      verified: true
    },
    {
      source: "AWS",
      description: "Avis de marchés de travaux et services",
      coverage: "Secteur public",
      frequency: "Temps réel",
      verified: true
    },
    {
      source: "Plateformes territoriales",
      description: "Sites des collectivités locales",
      coverage: "Régions, départements, communes",
      frequency: "Continue",
      verified: true
    },
    {
      source: "Sources sectorielles",
      description: "Organismes publics spécialisés",
      coverage: "Santé, éducation, défense",
      frequency: "Variable",
      verified: true
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Scraping intelligent",
      description: "Notre IA surveille 600+ sources officielles 24h/24",
      details: "Algorithmes adaptatifs qui s'ajustent aux changements de structure des sites officiels"
    },
    {
      step: "02",
      title: "Analyse sémantique",
      description: "Extraction et structuration automatique des données",
      details: "NLP avancé pour comprendre le contenu, identifier les critères d'éligibilité et extraire les informations clés"
    },
    {
      step: "03",
      title: "Scoring prédictif",
      description: "Évaluation de la pertinence pour votre profil",
      details: "Machine learning basé sur vos succès passés et votre expertise déclarée"
    },
    {
      step: "04",
      title: "Enrichissement",
      description: "Ajout de contexte et d'insights métier",
      details: "Données financières des acheteurs, historique des marchés, analyse concurrentielle"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <Badge variant="outline" className="text-primary border-primary">
            Notre expertise
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Qui sommes-nous et{" "}
            <span className="text-primary">comment ça marche</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Transparence totale sur notre rôle, nos sources de données et notre méthodologie 
            pour vous aider à comprendre la valeur d'Eligibly.
          </p>
        </div>

        {/* Notre rôle */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold mb-8 text-center">Notre rôle dans l'écosystème</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ourRole.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sources de données */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Nos sources de données officielles</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nous collectons les données disponibles dans les API publiques, 
              garantissant 100% de sources publiques et légales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {dataSources.map((source, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Database className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-lg">{source.source}</h4>
                    </div>
                    {source.verified && (
                      <Badge variant="outline" className="text-success border-green-600">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Officiel
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {source.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="font-medium">Couverture :</span>
                      <br />
                      <span className="text-muted-foreground">{source.coverage}</span>
                    </div>
                    <div>
                      <span className="font-medium">Fréquence :</span>
                      <br />
                      <span className="text-muted-foreground">{source.frequency}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Méthodologie */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Notre méthodologie de collecte</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un processus en 4 étapes pour transformer les données brutes en opportunités qualifiées.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {methodology.map((step, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                      <p className="text-sm text-primary font-medium mb-2">
                        {step.description}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats de transparence */}
        <div className="bg-gradient-subtle rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-4">Transparence en chiffres</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">600+</div>
              <div className="text-sm text-muted-foreground">Sources surveillées</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">24h/24</div>
              <div className="text-sm text-muted-foreground">Surveillance active</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Sources officielles</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">15min</div>
              <div className="text-sm text-muted-foreground">Délai moyen de détection</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold">
              Des questions sur notre méthodologie ?
            </h3>
            <p className="text-muted-foreground">
              Notre équipe technique est disponible pour vous expliquer en détail 
              notre approche et répondre à toutes vos questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Search className="w-4 h-4" />
                Découvrir nos sources
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Shield className="w-4 h-4" />
                Parler à un expert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};