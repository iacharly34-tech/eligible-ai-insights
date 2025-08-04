import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  BookOpen,
  Video,
  FileText,
  Calendar,
  ArrowRight,
  Download,
  Clock,
  User,
  Search,
  Filter,
  Mail,
  Play,
  Bookmark,
  TrendingUp
} from "lucide-react";

const Ressources = () => {
  const articles = [
    {
      category: "Guide",
      title: "Comment répondre efficacement à un appel d'offres public",
      description: "Les 10 étapes clés pour maximiser vos chances de succès dans les marchés publics.",
      readTime: "12 min",
      author: "Équipe Eligibly.ai",
      date: "15 jan 2024",
      featured: true
    },
    {
      category: "Analyse",
      title: "Tendances 2024 des marchés publics en France",
      description: "Découvrez les secteurs en croissance et les nouvelles opportunités à saisir.",
      readTime: "8 min",
      author: "Marie Dubois",
      date: "10 jan 2024",
      featured: false
    },
    {
      category: "Tutoriel",
      title: "Optimiser son scoring IA : bonnes pratiques",
      description: "Comment configurer votre IA pour détecter les meilleures opportunités.",
      readTime: "15 min",
      author: "Thomas Martin",
      date: "5 jan 2024",
      featured: false
    }
  ];

  const guides = [
    {
      title: "Guide complet des marchés publics 2024",
      description: "Tout savoir sur la réglementation, les procédures et les bonnes pratiques.",
      pages: "120 pages",
      format: "PDF",
      icon: FileText
    },
    {
      title: "Modèles de réponse aux appels d'offres",
      description: "Templates prêts à l'emploi pour vos réponses d'appels d'offres.",
      pages: "50 pages",
      format: "DOCX",
      icon: Download
    },
    {
      title: "Checklist validation dossier",
      description: "Liste de vérification pour s'assurer de la conformité de vos dossiers.",
      pages: "15 pages",
      format: "PDF",
      icon: BookOpen
    }
  ];

  const videos = [
    {
      title: "Prise en main rapide d'Eligibly.ai",
      description: "Découvrez les fonctionnalités principales en 10 minutes.",
      duration: "10:32",
      views: "2.1k vues",
      thumbnail: "tutorial"
    },
    {
      title: "Configurer ses alertes IA",
      description: "Comment personnaliser vos alertes pour ne rien manquer.",
      duration: "7:45",
      views: "1.8k vues",
      thumbnail: "config"
    },
    {
      title: "Analyser les résultats de scoring",
      description: "Interpréter et optimiser les scores de votre IA.",
      duration: "12:18",
      views: "1.5k vues",
      thumbnail: "analysis"
    }
  ];

  const webinars = [
    {
      title: "Les secrets d'une veille commerciale efficace",
      date: "25 jan 2024",
      time: "14h00 - 15h30",
      speaker: "Expert Eligibly.ai",
      status: "upcoming"
    },
    {
      title: "IA et marchés publics : retour d'expérience client",
      date: "18 jan 2024",
      time: "11h00 - 12h00",
      speaker: "Client témoignage",
      status: "replay"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-emerald-50/40">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200">
              Centre de ressources
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Tout pour réussir vos{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">
                marchés publics
              </span>
            </h1>
            
            <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed">
              Guides, tutoriels, analyses et bonnes pratiques pour maximiser 
              votre performance commerciale dans les marchés publics.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  placeholder="Rechercher une ressource..." 
                  className="pl-10 pr-4 h-12 bg-white/80 backdrop-blur-sm border-0 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">Article à la une</h2>
            <p className="text-foreground/70">Notre sélection de la semaine</p>
          </div>
          
          <Card className="hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-12 text-white flex items-center">
                  <div>
                    <Badge className="mb-4 bg-white/20 text-white border-white/30">
                      {articles[0].category}
                    </Badge>
                    <h3 className="text-3xl font-bold mb-4 leading-tight">
                      {articles[0].title}
                    </h3>
                    <p className="text-blue-100 mb-6 text-lg">
                      {articles[0].description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-blue-200 mb-6">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {articles[0].readTime}
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {articles[0].author}
                      </div>
                    </div>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                      Lire l'article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-12 flex items-center justify-center">
                  <div className="w-40 h-40 bg-white/50 rounded-2xl flex items-center justify-center">
                    <BookOpen className="w-20 h-20 text-blue-600" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Derniers articles</h2>
              <p className="text-foreground/70">Conseils et analyses d'experts</p>
            </div>
            <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
              Voir tous les articles
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-white/90 text-gray-700">
                      {article.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-foreground/60">
                      <div className="flex items-center gap-3">
                        <span>{article.readTime}</span>
                        <span>{article.date}</span>
                      </div>
                      <Bookmark className="w-4 h-4 hover:text-primary cursor-pointer" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guides & Templates */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Guides et{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">templates</span>
            </h2>
            <p className="text-foreground/70">Ressources pratiques à télécharger</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <guide.icon className="w-8 h-8 text-white" />
                  </div>
                   <h3 className="text-xl font-bold text-foreground mb-3">{guide.title}</h3>
                  <p className="text-foreground/70 mb-6">{guide.description}</p>
                  <div className="flex items-center justify-center gap-4 text-sm text-foreground/60 mb-6">
                    <span>{guide.pages}</span>
                    <span>•</span>
                    <span>{guide.format}</span>
                  </div>
                  <Button className="w-full bg-gradient-cta hover:shadow-lg text-white group">
                    <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Télécharger
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Tutoriels{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">vidéo</span>
            </h2>
            <p className="text-foreground/70">Apprenez à utiliser Eligibly.ai efficacement</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white group-hover:scale-110 transition-transform cursor-pointer" />
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                     <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-foreground/70 mb-4 text-sm">{video.description}</p>
                    <div className="text-xs text-foreground/60">{video.views}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Restez informé des dernières actualités
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Recevez nos conseils d'experts et analyses de marché directement dans votre boîte mail
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <Input 
                  placeholder="Votre email professionnel" 
                  className="bg-white/90 backdrop-blur-sm border-0 h-12"
                />
                <Button className="bg-white text-primary hover:bg-gray-100 h-12 px-6">
                  S'abonner
                </Button>
              </div>
              <p className="text-white/60 text-sm mt-4">
                Pas de spam. Désabonnement en un clic.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ressources;