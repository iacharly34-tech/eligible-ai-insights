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

  // Articles ordonnés par date décroissante (plus récent en premier)
  const allArticles = [
    {
      title: "Le futur de la réponse aux AO : IA, automatisation et stratégie humaine",
      description: "Vision prospective de l'évolution des marchés publics à l'ère de l'intelligence artificielle",
      url: "/futur-ia",
      date: "12 septembre 2025",
      readTime: "8 min",
      icon: Brain,
      category: "Innovation & Prospective"
    },
    {
      title: "Critères environnementaux et sociaux : comment les intégrer",
      description: "Guide complet pour réussir sur les marchés publics durables en 2025",
      url: "/criteres-rse",
      date: "28 août 2025",
      readTime: "8 min",
      icon: Sparkles,
      category: "RSE & Durabilité"
    },
    {
      title: "PME, comment rivaliser avec les grands groupes sur les AO",
      description: "Stratégies concrètes : groupements, niches, différenciation pour inverser le rapport de force",
      url: "/pme-vs-grands-groupes",
      date: "19 août 2025",
      readTime: "7 min",
      icon: Users,
      category: "Stratégies PME"
    },
    {
      title: "Marchés publics et innovation : où se cachent les vraies opportunités",
      description: "Guide 2025 pour identifier et conquérir les marchés d'avenir dans la tech publique",
      url: "/marches-innovation",
      date: "5 août 2025",
      readTime: "8 min",
      icon: Lightbulb,
      category: "Innovation & Prospective"
    },
    {
      title: "Pourquoi 3 appels d'offres sur 5 sont perdus d'avance",
      description: "Décryptage des mécanismes cachés qui rendent 60% des AO impossibles à gagner",
      url: "/ao-perdus-avance",
      date: "22 juillet 2025",
      readTime: "6 min",
      icon: AlertTriangle,
      category: "Pièges à éviter"
    },
    {
      title: "Anticiper les appels d'offres : le vrai avantage compétitif",
      description: "Pourquoi les entreprises gagnantes ne réagissent plus aux publications d'AO mais les anticipent",
      url: "/anticipation-ao",
      date: "18 juillet 2025",
      readTime: "7 min",
      icon: TrendingUp,
      category: "Stratégies avancées"
    },
    {
      title: "Les signaux faibles qui trahissent un marché public verrouillé",
      description: "Comment détecter les appels d'offres truqués et éviter les procédures biaisées",
      url: "/signaux-faibles",
      date: "8 juillet 2025",
      readTime: "8 min",
      icon: Shield,
      category: "Pièges à éviter"
    },
    {
      title: "Comment bâtir une vraie stratégie AO basée sur les données",
      description: "De l'intuition à la science : transformer votre approche des marchés publics avec la data",
      url: "/strategie-donnees",
      date: "2 juillet 2025",
      readTime: "7 min",
      icon: Brain,
      category: "Stratégies avancées"
    },
    {
      title: "Les 7 plus grosses erreurs des PME sur les marchés publics",
      description: "Guide pratique pour éviter les pièges administratifs qui éliminent 60% des candidatures",
      url: "/erreurs-ao",
      date: "25 juin 2025",
      readTime: "6 min",
      icon: AlertTriangle,
      category: "Pièges à éviter"
    },
    {
      title: "Comment détecter les bons appels d'offres sans perdre des heures",
      description: "Méthodes et outils IA pour identifier efficacement les AO pertinents et optimiser votre veille",
      url: "/detection-appels-offres",
      date: "15 juin 2025",
      readTime: "7 min",
      icon: Eye,
      category: "Stratégies de base"
    }
  ];

  const categories = [...new Set(allArticles.map(article => article.category))];

  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
        <Header />
        <MobileCTABar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-5xl text-center">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border-blue-200">
              <BookOpen className="w-4 h-4 mr-2" />
              10 articles experts disponibles
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Maîtrisez les{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">
                marchés publics
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Guides pratiques, stratégies expertes et analyses approfondies pour maximiser vos chances de succès sur les appels d'offres publics. Rédigés par nos spécialistes.
            </p>
          </div>
        </section>

        {/* Newsletter */}
        <section className="pb-16 px-4">
          <div className="container mx-auto max-w-2xl">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Bell className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Restez informé des nouveaux articles</h3>
              </div>
              
              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                    required
                  />
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                    M'abonner
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              ) : (
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Merci ! Vous recevrez nos nouveaux articles par email.</span>
                </div>
              )}
              
              <p className="text-sm text-gray-500 mt-3 text-center">
                Un nouvel article expert chaque semaine dans votre boîte mail
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid - Chronologique décroissant */}
        <section className="py-16 px-4 bg-white/60">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Articles experts par ordre chronologique
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Retrouvez tous nos guides pratiques, du plus récent au plus ancien
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allArticles.map((article, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white backdrop-blur-sm h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <article.icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs text-blue-600 border-blue-300">
                        {article.category}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 leading-tight group-hover:text-blue-600 transition-colors flex-grow">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                      {article.description}
                    </p>
                    
                    <SafeLink to={article.url} className="mt-auto">
                      <Button variant="outline" size="sm" className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                        Lire l'article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </SafeLink>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Filter - Optional future enhancement */}
        <section className="py-16 px-4 bg-gradient-to-r from-slate-50 to-gray-100">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold mb-6">Parcourir par thématique</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 text-sm hover:bg-blue-50 cursor-pointer transition-colors">
                  {category}
                </Badge>
              ))}
            </div>
            <p className="text-gray-600 mt-4 text-sm">
              Filtrage par catégorie bientôt disponible
            </p>
          </div>
        </section>

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
                  <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    <Zap className="w-5 h-5 mr-2" />
                    Tester Charly gratuitement
                  </Button>
                </SafeLink>
                <SafeLink to="/tarifs">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    Découvrir nos offres
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
                  <Button variant="outline" size="sm">
                    Rejoindre la communauté
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Accompagnement personnalisé</h3>
                  <p className="text-sm text-gray-600 mb-4">Audit gratuit de votre stratégie AO</p>
                  <Button variant="outline" size="sm">
                    Réserver un audit gratuit
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