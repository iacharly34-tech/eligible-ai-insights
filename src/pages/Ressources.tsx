import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { SafeLink } from "@/components/SafeLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  BookOpen,
  Video,
  FileText,
  Calendar,
  ArrowRight,
  Mail,
  Play,
  TrendingUp,
  Bell,
  Sparkles,
  CheckCircle,
  Zap,
  Users,
  Target
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

  const upcomingContent = [
    {
      icon: BookOpen,
      title: "Guides pratiques AO",
      description: "Méthodologies complètes pour répondre aux appels d'offres",
      eta: "Mars 2025"
    },
    {
      icon: Video,
      title: "Webinaires experts",
      description: "Sessions live avec des spécialistes des marchés publics",
      eta: "Avril 2025"
    },
    {
      icon: FileText,
      title: "Templates & Modèles",
      description: "Mémoires techniques, DPGF et documents prêts à utiliser",
      eta: "Mai 2025"
    },
    {
      icon: TrendingUp,
      title: "Analyses sectorielles",
      description: "Tendances et opportunités par secteur d'activité",
      eta: "Juin 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-emerald-50/40">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200">
            <Sparkles className="w-4 h-4 mr-2" />
            Bientôt disponible
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ne manquez pas le{" "}
            <span className="bg-gradient-highlight bg-clip-text text-transparent">
              contenu à venir
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Nous préparons une bibliothèque complète de ressources pour vous aider à exceller 
            dans les marchés publics. Guides, webinaires, templates et analyses exclusives.
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
                <span className="font-medium">Merci ! Vous serez notifié dès la sortie.</span>
              </div>
            )}
            
            <p className="text-sm text-gray-500 mt-3">
              Recevez un email dès qu'une nouvelle ressource est disponible
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Content Preview */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ce qui vous attend
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les ressources exclusives que nous préparons pour transformer 
              votre approche des marchés publics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingContent.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gradient-cta rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <Badge variant="outline" className="text-xs text-purple-600 border-purple-300">
                          {item.eta}
                        </Badge>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">En préparation</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-purple-100">Guides pratiques</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-purple-100">Webinaires experts</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-purple-100">Templates prêts</div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <SafeLink to="/demo">
                <Button variant="secondary" size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  <Play className="w-5 h-5 mr-2" />
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
          <h2 className="text-3xl font-bold mb-6">Une question spécifique ?</h2>
          <p className="text-xl text-gray-600 mb-8">
            En attendant nos ressources, notre équipe est là pour vous accompagner
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Support Email</h3>
                <p className="text-sm text-gray-600 mb-4">Réponse sous 24h</p>
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
                <p className="text-sm text-gray-600 mb-4">Échanges entre pros</p>
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
                <h3 className="font-semibold mb-2">Consultation</h3>
                <p className="text-sm text-gray-600 mb-4">Conseil personnalisé</p>
                <Button variant="outline" size="sm">
                  Prendre RDV
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ressources;