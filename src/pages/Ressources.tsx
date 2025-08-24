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
  AlertTriangle
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

  const blogArticles = {
    "Stratégie et méthodes": [
      {
        title: "Comment détecter les bons appels d'offres sans perdre des heures",
        description: "Méthodes et outils pour identifier efficacement les AO pertinents grâce à l'IA",
        url: "/detection-appels-offres",
        date: "15 juin 2025",
        readTime: "7 min",
        icon: Eye
      },
      {
        title: "Comment bâtir une vraie stratégie AO basée sur les données",
        description: "De l'intuition à la science : transformer votre approche des marchés publics",
        url: "/strategie-donnees",
        date: "2 juillet 2025",
        readTime: "7 min",
        icon: Brain
      },
      {
        title: "Anticiper les appels d'offres : le vrai avantage compétitif",
        description: "Pourquoi les entreprises gagnantes ne réagissent plus aux publications d'AO",
        url: "/anticipation-ao",
        date: "18 juillet 2025",
        readTime: "7 min",
        icon: TrendingUp
      }
    ],
    "Erreurs à éviter et pièges": [
      {
        title: "Les 7 plus grosses erreurs des PME sur les marchés publics",
        description: "Guide pratique pour éviter les pièges qui éliminent 60% des candidatures",
        url: "/erreurs-ao",
        date: "25 juin 2025",
        readTime: "6 min",
        icon: AlertTriangle
      },
      {
        title: "Les signaux faibles qui trahissent un marché public verrouillé",
        description: "Comment détecter les appels d'offres truqués et éviter les procédures biaisées",
        url: "/signaux-faibles",
        date: "8 juillet 2025",
        readTime: "8 min",
        icon: Shield
      },
      {
        title: "Pourquoi 3 appels d'offres sur 5 sont perdus d'avance",
        description: "Décryptage des mécanismes cachés qui rendent 60% des AO impossibles à gagner",
        url: "/ao-perdus-avance",
        date: "22 juillet 2025",
        readTime: "6 min",
        icon: AlertTriangle
      }
    ],
    "Innovation et avenir": [
      {
        title: "Marchés publics et innovation : où se cachent les vraies opportunités",
        description: "Guide 2025 pour identifier et conquérir les marchés d'avenir",
        url: "/marches-innovation",
        date: "5 août 2025",
        readTime: "8 min",
        icon: Lightbulb
      },
      {
        title: "Le futur de la réponse aux AO : IA, automatisation et stratégie humaine",
        description: "Vision prospective de l'évolution des marchés publics à l'ère de l'IA",
        url: "/futur-ia",
        date: "12 septembre 2025",
        readTime: "8 min",
        icon: Brain
      }
    ],
    "PME et différenciation": [
      {
        title: "PME, comment rivaliser avec les grands groupes sur les AO",
        description: "Stratégies concrètes : groupements, niches, différenciation",
        url: "/pme-vs-grands-groupes",
        date: "19 août 2025",
        readTime: "7 min",
        icon: Users
      }
    ],
    "RSE et développement durable": [
      {
        title: "Critères environnementaux et sociaux : comment les intégrer",
        description: "Guide complet pour réussir sur les marchés publics durables en 2025",
        url: "/criteres-rse",
        date: "28 août 2025",
        readTime: "8 min",
        icon: Sparkles
      }
    ]
  };

  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-emerald-50/40">
        <Header />
        <MobileCTABar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200">
              <BookOpen className="w-4 h-4 mr-2" />
              Ressources expertes
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ne manquez pas le{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">
                marchés publics
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Guides experts, analyses et stratégies pour exceller dans les appels d'offres publics. 
              Découvrez nos ressources exclusives rédigées par des spécialistes.
            </p>

            {/* Newsletter Subscription */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-12 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Bell className="w-5 h-5 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">Soyez les premiers informés</h3>
              </div>
              
              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Votre adresse email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                    required
                  />
                  <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">
                    Me prévenir
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              ) : (
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Merci ! Vous recevrez nos nouveaux articles.</span>
                </div>
              )}
              
              <p className="text-sm text-gray-500 mt-3">
                Recevez un email dès qu'une nouvelle ressource est disponible
              </p>
            </div>
          </div>
        </section>

        {/* Blog Articles by Categories */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            {Object.entries(blogArticles).map(([category, articles]) => (
              <div key={category} className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                  {category}
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articles.map((article, index) => (
                    <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-10 h-10 bg-gradient-cta rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <article.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                              <Calendar className="w-3 h-3" />
                              <span>{article.date}</span>
                              <span>•</span>
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {article.description}
                        </p>
                        
                        <SafeLink to={article.url}>
                          <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-all">
                            Lire l'article
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </SafeLink>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Preview */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-6">Une bibliothèque en constante évolution</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2">10+</div>
                  <div className="text-purple-100">Articles experts</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-purple-100">Conseils pratiques</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">5</div>
                  <div className="text-purple-100">Catégories spécialisées</div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <SafeLink to="/demo">
                  <Button variant="secondary" size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                    <Zap className="w-5 h-5 mr-2" />
                    Tester Charly maintenant
                  </Button>
                </SafeLink>
                <SafeLink to="/tarifs">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    Voir nos offres
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </SafeLink>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Besoin d'aide personnalisée ?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Notre équipe d'experts est là pour vous accompagner dans votre réussite sur les marchés publics
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Support expert</h3>
                  <p className="text-sm text-gray-600 mb-4">Réponse sous 24h par nos spécialistes</p>
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
                  <h3 className="font-semibold mb-2">Communauté</h3>
                  <p className="text-sm text-gray-600 mb-4">Échangez avec d'autres professionnels</p>
                  <Button variant="outline" size="sm">
                    Rejoindre
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Conseil personnalisé</h3>
                  <p className="text-sm text-gray-600 mb-4">Accompagnement sur-mesure</p>
                  <Button variant="outline" size="sm">
                    Réserver un créneau
                  </Button>
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