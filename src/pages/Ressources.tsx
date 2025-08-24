import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEOHead";
import { MobileCTABar } from "@/components/MobileCTABar";
import { Input } from "@/components/ui/input";
import { SafeLink } from "@/components/SafeLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SocialShare } from "@/components/ui/social-share";
import { ExpertArticleCarousel } from "@/components/ExpertArticleCarousel";
import { ArticleCard } from "@/components/ArticleCard";
import { EligiblyButton, CTAButton } from "@/components/EligiblyButton";
import { 
  BookOpen,
  Calendar,
  ArrowRight,
  Mail,
  TrendingUp,
  Bell,
  Sparkles,
  CheckCircle,
  Zap,
  Users,
  Target,
  Eye,
  Shield,
  Brain,
  Lightbulb,
  AlertTriangle,
  Clock,
  Filter,
  BarChart3,
  Quote
} from "lucide-react";

const Ressources = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  // Articles ordonnés par date décroissante (plus récent en premier)
  const allArticles = [
    {
      title: "Le futur de la réponse aux AO : IA, automatisation et stratégie humaine",
      description: "Vision prospective de l'évolution des marchés publics à l'ère de l'intelligence artificielle",
      url: "/futur-ia",
      date: "12 septembre 2025",
      readTime: "8 min",
      icon: Brain,
      category: "IA & automatisation",
      isFeatured: true
    },
    {
      title: "Critères environnementaux et sociaux : comment les intégrer",
      description: "Guide complet pour réussir sur les marchés publics durables en 2025",
      url: "/criteres-rse",
      date: "28 août 2025",
      readTime: "8 min",
      icon: Sparkles,
      category: "Critères RSE & innovation",
      isFeatured: true
    },
    {
      title: "PME, comment rivaliser avec les grands groupes sur les AO",
      description: "Stratégies concrètes : groupements, niches, différenciation pour inverser le rapport de force",
      url: "/pme-vs-grands-groupes",
      date: "19 août 2025",
      readTime: "7 min",
      icon: Users,
      category: "Répondre efficacement aux AO",
      isFeatured: true
    },
    {
      title: "Marchés publics et innovation : où se cachent les vraies opportunités",
      description: "Guide 2025 pour identifier et conquérir les marchés d'avenir dans la tech publique",
      url: "/marches-innovation",
      date: "5 août 2025",
      readTime: "8 min",
      icon: Lightbulb,
      category: "Tendances & data clés"
    },
    {
      title: "Pourquoi 3 appels d'offres sur 5 sont perdus d'avance",
      description: "Décryptage des mécanismes cachés qui rendent 60% des AO impossibles à gagner",
      url: "/ao-perdus-avance",
      date: "22 juillet 2025",
      readTime: "6 min",
      icon: AlertTriangle,
      category: "Tendances & data clés",
      isFeatured: true
    },
    {
      title: "Anticiper les appels d'offres : le vrai avantage compétitif",
      description: "Pourquoi les entreprises gagnantes ne réagissent plus aux publications d'AO mais les anticipent",
      url: "/anticipation-ao",
      date: "18 juillet 2025",
      readTime: "7 min",
      icon: TrendingUp,
      category: "Répondre efficacement aux AO"
    },
    {
      title: "Les signaux faibles qui trahissent un marché public verrouillé",
      description: "Comment détecter les appels d'offres truqués et éviter les procédures biaisées",
      url: "/signaux-faibles",
      date: "8 juillet 2025",
      readTime: "8 min",
      icon: Shield,
      category: "Répondre efficacement aux AO"
    },
    {
      title: "Comment bâtir une vraie stratégie AO basée sur les données",
      description: "De l'intuition à la science : transformer votre approche des marchés publics avec la data",
      url: "/strategie-donnees",
      date: "2 juillet 2025",
      readTime: "7 min",
      icon: Brain,
      category: "Tendances & data clés"
    },
    {
      title: "Les 7 plus grosses erreurs des PME sur les marchés publics",
      description: "Guide pratique pour éviter les pièges administratifs qui éliminent 60% des candidatures",
      url: "/erreurs-ao",
      date: "25 juin 2025",
      readTime: "6 min",
      icon: AlertTriangle,
      category: "Répondre efficacement aux AO"
    },
    {
      title: "Comment détecter les bons appels d'offres sans perdre des heures",
      description: "Méthodes et outils IA pour identifier efficacement les AO pertinents et optimiser votre veille",
      url: "/detection-appels-offres",
      date: "15 juin 2025",
      readTime: "7 min",
      icon: Eye,
      category: "IA & automatisation"
    }
  ];

  const featuredArticles = allArticles.filter(article => article.isFeatured);
  const thematicCategories = [
    "Répondre efficacement aux AO",
    "Tendances & data clés", 
    "Critères RSE & innovation",
    "IA & automatisation"
  ];

  const categories = [...new Set(allArticles.map(article => article.category))];

  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
        <Header />
        <MobileCTABar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Décoder les{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">
                marchés publics
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
              Des contenus experts, des stratégies éprouvées et des données actualisées pour maximiser vos chances de succès sur les appels d'offres publics.
            </p>

            {/* Newsletter inline dans le hero */}
            <div className="max-w-md mx-auto">
              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 text-base"
                    required
                  />
                  <EligiblyButton type="submit" size="lg" className="px-6">
                    📩 Recevoir
                  </EligiblyButton>
                </form>
              ) : (
                <div className="flex items-center justify-center gap-2 text-green-600 bg-green-50 rounded-lg p-4">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Merci ! Vous recevrez nos analyses chaque semaine.</span>
                </div>
              )}
              
              <p className="text-sm text-gray-500 mt-3">
                Analyses d'experts • Tendances du marché • Guides pratiques
              </p>
            </div>
          </div>
        </section>

        {/* Articles phares */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border-blue-200 text-sm px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                Articles phares
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Nos guides les plus consultés
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Les contenus essentiels pour comprendre et maîtriser les marchés publics
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredArticles.map((article, index) => (
                <ArticleCard
                  key={index}
                  title={article.title}
                  description={article.description}
                  category={article.category}
                  date={article.date}
                  readTime={article.readTime}
                  url={article.url}
                  variant="featured"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Explorer par thématiques */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 border-green-200 text-sm px-4 py-2">
                <Filter className="w-4 h-4 mr-2" />
                Explorer par thématiques
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Choisissez votre domaine d'expertise
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Retrouvez facilement les contenus qui correspondent à vos besoins et votre secteur d'activité
              </p>
            </div>

            <Tabs defaultValue={thematicCategories[0]} className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 bg-white/60 backdrop-blur-sm p-2 rounded-2xl">
                {thematicCategories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category} 
                    className="data-[state=active]:bg-white data-[state=active]:shadow-lg rounded-xl py-3 px-4 text-sm font-medium"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>

              {thematicCategories.map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allArticles
                      .filter(article => article.category === category)
                      .map((article, index) => (
                        <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm h-full hover:-translate-y-1">
                          <CardContent className="p-6 flex flex-col h-full">
                            <div className="flex items-start justify-between mb-4">
                              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <article.icon className="w-6 h-6 text-white" />
                              </div>
                              <Badge variant="outline" className="text-xs text-blue-600 border-blue-300">
                                {article.readTime}
                              </Badge>
                            </div>
                            
                            <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                              <Calendar className="w-3 h-3" />
                              <span>{article.date}</span>
                            </div>
                            
                            <h3 className="text-base font-bold mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                              {article.title}
                            </h3>
                            
                            <p className="text-gray-600 text-xs leading-relaxed mb-4 flex-grow">
                              {article.description}
                            </p>
                            
                            <div className="mb-4">
                              <SocialShare 
                                title={article.title}
                                url={article.url}
                                variant="minimal"
                                size="sm"
                              />
                            </div>
                            
                             <SafeLink to={article.url} className="mt-auto">
                              <EligiblyButton variant="secondary" size="sm" className="w-full">
                                Lire l'article
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </EligiblyButton>
                            </SafeLink>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Micro-contenus contextuels avec stats */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200 text-sm px-4 py-2">
                <BarChart3 className="w-4 h-4 mr-2" />
                Données clés du secteur
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Ce que révèlent les chiffres
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 bg-gradient-to-r from-blue-50 to-indigo-50 p-8">
                <div className="flex items-start gap-4">
                  <Quote className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg font-bold text-gray-900 mb-2">
                      "59,9% des marchés sont remportés par des PME, mais seulement 27,2% du montant total leur est attribué."
                    </p>
                    <p className="text-xs text-gray-600">
                      — Observatoire Économique de la Commande Publique (OECP) 2023
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-0 bg-gradient-to-r from-green-50 to-emerald-50 p-8">
                <div className="flex items-start gap-4">
                  <Quote className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg font-bold text-gray-900 mb-2">
                      "On passe 5 heures par semaine à trier des AO… pour en écarter 80%."
                    </p>
                    <p className="text-xs text-gray-600">
                      — Dirigeant PME secteur IT, interview terrain Eligibly
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">110 Mds€</div>
                <div className="text-sm text-gray-600">Budget annuel marchés publics</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">3,2M</div>
                <div className="text-sm text-gray-600">Appels d'offres publiés/an</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
                <div className="text-sm text-gray-600">Marchés publics dématérialisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">25j</div>
                <div className="text-sm text-gray-600">Délai moyen de réponse</div>
              </div>
            </div>
          </div>
        </section>

        <ExpertArticleCarousel
          articles={allArticles}
          title="Tous nos articles experts"
          subtitle="Chaque semaine, Eligibly décrypte les marchés publics pour vous aider à anticiper les opportunités et maximiser vos chances de succès."
          variant="standard"
        />

        {/* Stats & CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-6">Une expertise reconnue</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-4xl font-bold mb-2">10</div>
                  <div className="text-blue-100">Articles experts</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">15k+</div>
                  <div className="text-blue-100">Mots de conseils</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">3 mois</div>
                  <div className="text-blue-100">De publication continue</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SafeLink to="/demo">
                  <EligiblyButton variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    <Zap className="w-5 h-5 mr-2" />
                    Tester Charly gratuitement
                  </EligiblyButton>
                </SafeLink>
                <SafeLink to="/tarifs">
                  <EligiblyButton variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    Découvrir nos offres
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </EligiblyButton>
                </SafeLink>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Une question sur les marchés publics ?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Notre équipe d'experts vous accompagne dans votre réussite sur les appels d'offres
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Support expert</h3>
                  <p className="text-sm text-gray-600 mb-4">Réponse personnalisée sous 24h</p>
                  <Button variant="outline" size="sm">
                    contact@eligibly.ai
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Communauté Eligibly</h3>
                  <p className="text-sm text-gray-600 mb-4">Échangez avec 500+ professionnels AO</p>
                  <EligiblyButton variant="secondary" size="sm">
                    Rejoindre la communauté
                  </EligiblyButton>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Accompagnement personnalisé</h3>
                  <p className="text-sm text-gray-600 mb-4">Audit gratuit de votre stratégie AO</p>
                  <EligiblyButton variant="secondary" size="sm">
                    Réserver un audit gratuit
                  </EligiblyButton>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Ressources;