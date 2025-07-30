import { useState, useEffect } from "react";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Database, 
  Brain, 
  Target, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle, 
  Star,
  ExternalLink,
  Play,
  BarChart3,
  Search,
  Filter,
  Award,
  Globe,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { MacBookSimulation } from "@/components/MacBookSimulation";

const NewIndex = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'france' | 'europe'>('france');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Database,
      title: "Connexion Multi-Sources",
      description: "Accès automatisé à 600+ sources officielles françaises et européennes",
      color: "blue"
    },
    {
      icon: Brain,
      title: "Analyse IA Avancée",
      description: "Triple modèle IA (GPT-4, Claude, Mistral) pour une analyse exhaustive",
      color: "purple"
    },
    {
      icon: Target,
      title: "Scoring Intelligent",
      description: "Évaluation automatique de la pertinence et du potentiel de chaque marché",
      color: "green"
    },
    {
      icon: Zap,
      title: "Notification Temps Réel",
      description: "Alertes instantanées via Slack, email et intégrations personnalisées",
      color: "orange"
    }
  ];

  const francesources = [
    { name: "BOAMP", desc: "Bulletin officiel", logo: "🏛️" },
    { name: "Marchés Publics", desc: "Plateforme nationale", logo: "🇫🇷" },
    { name: "PLACE", desc: "Plateforme des achats", logo: "💼" },
    { name: "AWS DUME", desc: "Dossiers uniques", logo: "📋" },
    { name: "e-Marchés", desc: "Solutions régionales", logo: "🌍" },
    { name: "Achat Public", desc: "Marchés territoriaux", logo: "🏘️" }
  ];

  const europeSource = [
    { name: "TED eTendering", desc: "Tenders Electronic Daily", logo: "🇪🇺" },
    { name: "Simap", desc: "Système suisse", logo: "🇨🇭" },
    { name: "Find a Tender", desc: "Royaume-Uni", logo: "🇬🇧" },
    { name: "Vergabe24", desc: "Allemagne", logo: "🇩🇪" },
    { name: "Mercell", desc: "Plateforme nordique", logo: "🌊" },
    { name: "eNotices", desc: "Notices européennes", logo: "📢" }
  ];

  const benefits = [
    {
      title: "95% de temps économisé",
      description: "Automatisation complète de la veille manuelle",
      icon: Clock,
      stat: "95%"
    },
    {
      title: "600+ sources surveillées",
      description: "Coverage exhaustive du marché français et européen",
      icon: Globe,
      stat: "600+"
    },
    {
      title: "23 opportunités premium/jour",
      description: "Détection intelligente des marchés à fort potentiel",
      icon: Star,
      stat: "23"
    },
    {
      title: "92% de précision IA",
      description: "Analyse fine grâce aux modèles multi-LLM",
      icon: Brain,
      stat: "92%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Eligible.ai
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Fonctionnalités</a>
            <a href="#sources" className="text-gray-600 hover:text-blue-600 transition-colors">Sources</a>
            <a href="#benefits" className="text-gray-600 hover:text-blue-600 transition-colors">Avantages</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:flex">
              Se connecter
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Démo gratuite
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200">
                IA • Marchés Publics • Automation
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Transformez votre{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-pulse">
                  veille commerciale
                </span>{" "}
                en avantage concurrentiel
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
                Notre IA analyse automatiquement 600+ sources de marchés publics français et européens, 
                identifie les opportunités premium et vous alerte en temps réel.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 h-auto group"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Voir la démo interactive
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4 h-auto border-2 hover:bg-gray-50"
                >
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Accès gratuit 7 jours
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Conforme RGPD</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">ISO 27001</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">500+ entreprises</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700">Fonctionnalités</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Une plateforme complète pour votre{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                croissance
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De la détection à la notification, notre IA gère l'intégralité 
              de votre veille commerciale avec une précision inégalée.
            </p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/50 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${
                      feature.color === 'blue' ? 'from-blue-500 to-blue-600' :
                      feature.color === 'purple' ? 'from-purple-500 to-purple-600' :
                      feature.color === 'green' ? 'from-green-500 to-green-600' :
                      'from-orange-500 to-orange-600'
                    } rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-700">Démonstration</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Processus automatisé{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                en action
              </span>
            </h2>
          </div>
          
          <MacBookSimulation />
        </div>
      </section>

      {/* Sources Section */}
      <section id="sources" className="py-20 px-4">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700">Sources de données</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Couverture{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                exhaustive
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Surveillance automatique de toutes les plateformes officielles 
              de marchés publics, mises à jour en temps réel.
            </p>
            
            {/* Tabs */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 rounded-full p-1 flex">
                <button
                  onClick={() => setActiveTab('france')}
                  className={`px-6 py-3 rounded-full transition-all ${
                    activeTab === 'france' 
                      ? 'bg-white shadow-md text-blue-600 font-semibold' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  🇫🇷 France
                </button>
                <button
                  onClick={() => setActiveTab('europe')}
                  className={`px-6 py-3 rounded-full transition-all ${
                    activeTab === 'europe' 
                      ? 'bg-white shadow-md text-blue-600 font-semibold' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  🇪🇺 Europe
                </button>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Sources Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {(activeTab === 'france' ? francesources : europeSource).map((source, index) => (
              <ScrollReveal key={`${activeTab}-${index}`} delay={index * 50}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-3">{source.logo}</div>
                    <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {source.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {source.desc}
                    </p>
                    <ExternalLink className="w-4 h-4 text-gray-400 mx-auto mt-3 group-hover:text-blue-600 transition-colors" />
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-700">Résultats concrets</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pourquoi choisir{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Eligible.ai
              </span>
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {benefit.stat}
                    </div>
                    <h3 className="text-xl font-bold mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Prêt à transformer votre{" "}
            <span className="text-yellow-300">veille commerciale</span> ?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Rejoignez les 500+ entreprises qui font confiance à notre IA 
            pour identifier les meilleures opportunités de marchés publics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-10 py-4 h-auto font-semibold"
            >
              <Play className="w-5 h-5 mr-2" />
              Démarrer l'essai gratuit
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-10 py-4 h-auto"
            >
              <Phone className="w-5 h-5 mr-2" />
              Parler à un expert
            </Button>
          </div>
          
          <p className="text-white/70 mt-6 text-sm">
            ✓ Sans engagement • ✓ Setup en 5 minutes • ✓ Support dédié
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Eligible.ai</span>
              </div>
              <p className="text-gray-400 mb-6">
                L'intelligence artificielle au service de votre développement commercial.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Produit</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Fonctionnalités</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tarifs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Intégrations</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Entreprise</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carrières</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Presse</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  contact@eligible.ai
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +33 1 23 45 67 89
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Paris, France
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Eligible.ai. Tous droits réservés.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                CGU
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewIndex;