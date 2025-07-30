import { useState, useEffect } from "react";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
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
import aiCharacterMale from "@/assets/ai-character-male.png";
import aiCharacterFemale from "@/assets/ai-character-female.png";
import aiCharacterNeutral from "@/assets/ai-character-neutral.png";
import aiCharacterTechMale from "@/assets/ai-character-tech-male.png";
import aiCharacterTechFemale from "@/assets/ai-character-tech-female.png";
import aiCharacterFuturistic from "@/assets/ai-character-futuristic.png";

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
    { name: "BOAMP", desc: "Bulletin officiel", logo: "🏛️", url: "https://www.boamp.fr" },
    { name: "Marchés Publics", desc: "Plateforme nationale", logo: "🇫🇷", url: "https://www.marches-publics.gouv.fr" },
    { name: "PLACE", desc: "Plateforme des achats", logo: "💼", url: "https://www.economie.gouv.fr/daj/place" },
    { name: "AWS DUME", desc: "Dossiers uniques", logo: "📋", url: "https://www.economie.gouv.fr/daj/dume" },
    { name: "e-Marchés", desc: "Solutions régionales", logo: "🌍", url: "https://www.e-marches.com" },
    { name: "Achat Public", desc: "Marchés territoriaux", logo: "🏘️", url: "https://www.achatpublic.com" }
  ];

  const europeSource = [
    { name: "TED eTendering", desc: "Tenders Electronic Daily", logo: "🇪🇺", url: "https://ted.europa.eu" },
    { name: "Simap", desc: "Système suisse", logo: "🇨🇭", url: "https://www.simap.ch" },
    { name: "Find a Tender", desc: "Royaume-Uni", logo: "🇬🇧", url: "https://www.find-tender.service.gov.uk" },
    { name: "Vergabe24", desc: "Allemagne", logo: "🇩🇪", url: "https://www.vergabe24.de" },
    { name: "Mercell", desc: "Plateforme nordique", logo: "🌊", url: "https://www.mercell.com" },
    { name: "eNotices", desc: "Notices européennes", logo: "📢", url: "https://enotices.eu" }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-emerald-50/40">
      {/* Header - Clean minimal style like Loris.ai */}
      <Header />

      {/* Hero Section - Split Layout like Loris.ai */}
      <section className="pt-20 pb-16 px-4 relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Animated Background - Style Loris.ai */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-teal-50/30 to-cyan-50/20"></div>
          
          {/* Large floating geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-gradient-to-br from-emerald-200/15 to-teal-200/10 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-gradient-to-br from-cyan-200/12 to-blue-200/8 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite_2s]"></div>
          <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-gradient-to-br from-teal-300/8 to-emerald-200/6 rounded-full blur-2xl animate-[pulse_10s_ease-in-out_infinite_4s]"></div>
        </div>

        <div className="container mx-auto relative z-10">
          {/* Main Content - Split Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transformez votre{" "}
                <span className="bg-gradient-highlight bg-clip-text text-transparent">
                  veille commerciale
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Notre IA analyse automatiquement 600+ sources de marchés publics français et européens, 
                identifie les opportunités premium et vous alerte en temps réel.
              </p>

              {/* Value Propositions */}
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>600+ sources surveillées en temps réel</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Analyse IA avec 92% de précision</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Alertes instantanées via Slack/Email</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-cta hover:shadow-glow text-white text-lg px-8 py-4 h-auto group transition-all duration-300 hover:scale-105"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Voir la démo interactive
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4 h-auto border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Accès gratuit 7 jours
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-2 opacity-60">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-sm">Conforme RGPD</span>
              </div>
            </div>

            {/* Right Column - Charly AI Assistant avec notifications intelligentes et équilibrées */}
            <div className="relative">
              {/* Main Charly illustration - AGRANDI et centré */}
              <div className="relative flex justify-center">
                <img 
                  src={aiCharacterTechMale}
                  alt="Charly - Assistant IA Eligible.ai" 
                  className="w-full h-auto max-w-xl transform scale-110"
                />
              </div>

              {/* BULLE 1 - Email Priority (apparition immédiate) */}
              <div className="absolute -top-8 right-16 bg-card/95 backdrop-blur-sm rounded-2xl shadow-luxury border border-primary/20 p-5 max-w-xs animate-fade-in hidden xl:block">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-sm">Email reçu</h3>
                    <p className="text-xs text-muted-foreground">Il y a 2 minutes</p>
                  </div>
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                </div>
                <div className="bg-primary/10 rounded-lg p-3 border border-primary/20">
                  <div className="text-sm font-medium text-primary">🎯 Nouvelle opportunité!</div>
                  <div className="text-xs text-primary/70">2,4M€ • Score: 98%</div>
                </div>
              </div>

              {/* BULLE 2 - Slack (apparition avec délai) */}
              <div className="absolute bottom-12 -left-8 bg-card rounded-xl shadow-elegant border border-border p-4 max-w-xs hidden lg:block" 
                   style={{ animation: 'fade-in 0.6s ease-out 1.5s both' }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Slack</div>
                    <div className="text-xs text-muted-foreground">#marchés-publics</div>
                  </div>
                </div>
                <div className="text-sm text-foreground bg-purple-50 rounded-lg p-2">
                  🚨 <strong>Charly:</strong> Opportunité détectée!
                </div>
              </div>

              {/* BULLE 3 - Carte IA Score (apparition avec délai plus long) */}
              <div className="absolute top-1/2 right-8 bg-card/98 backdrop-blur-sm rounded-2xl shadow-luxury border border-border/50 p-6 max-w-sm hidden xl:block"
                   style={{ animation: 'fade-in 0.6s ease-out 3s both' }}>
                
                {/* Header simplifié */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-cta rounded-lg flex items-center justify-center">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">Eligible.ai</h3>
                      <p className="text-xs text-muted-foreground">IA Analysis</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span className="text-xs text-success font-medium">Live</span>
                  </div>
                </div>

                {/* Stats principaux seulement */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <div className="text-lg font-bold text-primary">2,4M€</div>
                    <div className="text-xs text-primary/70">Marché détecté</div>
                  </div>
                  <div className="bg-success/10 rounded-lg p-3">
                    <div className="text-lg font-bold text-success">98%</div>
                    <div className="text-xs text-success/70">Score match</div>
                  </div>
                </div>

                {/* Opportunité simplifiée */}
                <div className="bg-success/10 rounded-lg p-4 border border-success/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-success" />
                    <span className="text-sm font-medium text-success">Opportunité Premium</span>
                  </div>
                  <h4 className="font-medium text-foreground text-sm mb-1">Système de gestion documentaire</h4>
                  <p className="text-xs text-muted-foreground">Ministère de l'Éducation Nationale</p>
                </div>
              </div>

              {/* Bulle mobile discrète (optionnelle, apparition hover) */}
              <div className="absolute bottom-1/4 right-2 bg-card rounded-lg shadow-md border border-border p-3 max-w-xs opacity-0 hover:opacity-100 transition-opacity duration-500 hidden xl:block">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-success rounded-lg flex items-center justify-center">
                    <Phone className="w-3 h-3 text-success-foreground" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-foreground">Mobile</div>
                    <div className="text-xs text-muted-foreground">Notification push</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charly AI Assistant Section - Style "Découvrez Tom" */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/15 to-cyan-soft/15 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Découvrez{" "}
                  <span className="bg-gradient-highlight bg-clip-text text-transparent">
                    Charly
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Votre assistant IA commercial qui analyse, détecte et vous alerte des meilleures 
                  opportunités de marchés publics 24h/24, avec une précision inégalée.
                </p>
              </div>

              {/* Benefits List - Style pills/badges */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-cta rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Analyse IA en temps réel</h3>
                    <p className="text-gray-400 text-sm">Traitement intelligent de 600+ sources officielles</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Alertes intelligentes instantanées</h3>
                    <p className="text-gray-400 text-sm">Notifications personnalisées selon vos critères</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-soft to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Détection automatique d'opportunités</h3>
                    <p className="text-gray-400 text-sm">Scoring précis et recommandations expertes</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Surveillance 24h/24, 7j/7</h3>
                    <p className="text-gray-400 text-sm">Veille continue sans intervention manuelle</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-cta hover:shadow-glow text-white px-8 py-4 h-auto group transition-all duration-300 hover:scale-105"
                >
                  Essayer gratuitement
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-4 h-auto border-2 border-white/20 text-white hover:bg-white/10 transition-all duration-300"
                >
                  Réserver une démo
                </Button>
              </div>
            </div>

            {/* Right Column - Charly Illustration */}
            <div className="relative">
              {/* Gradient background card for Charly */}
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-12 backdrop-blur-sm border border-white/10 relative">
                {/* Charly Image - Center */}
                <div className="flex justify-center">
                  <img 
                    src={aiCharacterTechMale} 
                    alt="Charly - Assistant IA Eligible.ai" 
                    className="w-full h-auto max-w-sm"
                  />
                </div>
              </div>
              
              {/* Floating Cards - Outside the image */}
              {/* Top Right Card - Refonte visuelle */}
              <div className="absolute -top-8 -right-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-6 max-w-sm animate-fade-in">
                {/* Header avec logo et badge Live */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-cta rounded-xl flex items-center justify-center shadow-lg">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base">Eligible.ai</h3>
                      <p className="text-sm text-gray-600">IA Analysis</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-green-100 px-2.5 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-green-700">Live</span>
                  </div>
                </div>
                
                {/* Statistiques clés - Bloc mis en avant */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100/80 rounded-xl p-4 mb-4 border border-gray-200/60">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">2,4M€</div>
                      <div className="text-xs font-medium text-gray-600">Marché détecté</div>
                    </div>
                    <div className="text-center border-l border-gray-300 pl-4">
                      <div className="text-2xl font-bold text-emerald-600 mb-1">98%</div>
                      <div className="text-xs font-medium text-gray-600">Score match</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Left Card - Refonte visuelle */}
              <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-5 max-w-sm animate-fade-in">
                <div className="bg-gradient-to-r from-green-50/90 to-emerald-50/90 rounded-xl p-4 border border-green-200/60">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-green-600 rounded-lg flex items-center justify-center">
                        <Award className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-green-800">Opportunité Premium</span>
                    </div>
                    <Badge className="bg-green-600 text-white text-xs font-medium px-2 py-1">Nouveau</Badge>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-base mb-2">Système de gestion documentaire</h4>
                  <p className="text-sm text-gray-700 font-medium">Ministère de l'Éducation Nationale</p>
                </div>
              </div>
              
              {/* Right Side Card */}
              <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 hidden xl:block animate-fade-in">
                <div className="text-center">
                  <div className="w-10 h-10 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-2">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Assistant</p>
                  <h3 className="text-sm font-bold text-gray-900">Charly</h3>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-2 mt-2">
                    <div className="text-xs font-medium text-green-700">En analyse</div>
                    <div className="text-lg font-bold text-green-600">94%</div>
                  </div>
                </div>
              </div>
              
              {/* Left Side Notification */}
              <div className="absolute top-1/4 -left-12 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 hidden xl:block animate-fade-in">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-orange-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-xs text-gray-900">Nouvelle alerte</div>
                    <div className="text-xs text-gray-500">Il y a 2 min</div>
                  </div>
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
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Fonctionnalités</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Une plateforme complète pour votre{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">
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
                <Card className="group hover:shadow-glow transition-all duration-500 hover:scale-105 border-0 bg-white/50 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform ${
                      feature.color === 'blue' ? 'bg-gradient-to-r from-accent to-primary' :
                      feature.color === 'purple' ? 'bg-gradient-primary' :
                      feature.color === 'green' ? 'bg-gradient-to-r from-cyan-soft to-accent' :
                      'bg-gradient-highlight'
                    }`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
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
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Démonstration</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Processus automatisé{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">
                en action
              </span>
            </h2>
          </div>
          
          <MacBookSimulation />
        </div>
      </section>

      {/* Sources Section */}
      <section id="sources" className="py-20 px-4 relative">
        {/* Subtle background animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full animate-[float_8s_ease-in-out_infinite]"></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-r from-blue-400/5 to-green-400/5 rounded-full animate-[float_12s_ease-in-out_infinite_reverse]"></div>
          <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30" viewBox="0 0 100 100">
            <path d="M20,50 Q50,20 80,50 T140,50" stroke="url(#gradientStroke)" strokeWidth="0.2" fill="none" opacity="0.3">
              <animate attributeName="d" values="M20,50 Q50,20 80,50 T140,50;M20,50 Q50,80 80,50 T140,50;M20,50 Q50,20 80,50 T140,50" dur="10s" repeatCount="indefinite"/>
            </path>
            <defs>
              <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981"/>
                <stop offset="100%" stopColor="#3b82f6"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container mx-auto relative z-10">
          <ScrollReveal className="text-center mb-16">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Badge className="bg-cyan-soft/10 text-cyan-soft border-cyan-soft/20">Sources de données</Badge>
              <div className="flex items-center gap-2 bg-cyan-soft/10 text-cyan-soft px-3 py-1 rounded-full text-sm border border-cyan-soft/20 animate-pulse">
                <div className="w-2 h-2 bg-cyan-soft rounded-full animate-ping"></div>
                Mise à jour en temps réel
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Couverture{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">
                exhaustive
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Surveillance automatique de toutes les plateformes officielles 
              de marchés publics, mises à jour en temps réel.
            </p>
            
            {/* Enhanced Tabs */}
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-full p-1 flex shadow-inner border border-gray-200">
                <button
                  onClick={() => setActiveTab('france')}
                  className={`px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 font-medium ${
                    activeTab === 'france' 
                      ? 'bg-white shadow-lg text-blue-600 font-semibold transform scale-105' 
                      : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
                  }`}
                >
                  🇫🇷 France
                  {activeTab === 'france' && <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>}
                </button>
                <button
                  onClick={() => setActiveTab('europe')}
                  className={`px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 font-medium ${
                    activeTab === 'europe' 
                      ? 'bg-white shadow-lg text-blue-600 font-semibold transform scale-105' 
                      : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
                  }`}
                >
                  🇪🇺 Europe
                  {activeTab === 'europe' && <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>}
                </button>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Enhanced Sources Grid with Smooth Transition */}
          <div className="relative">
            <div 
              key={activeTab}
              className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 animate-[fadeInUp_0.6s_ease-out]"
            >
              {(activeTab === 'france' ? francesources : europeSource).map((source, index) => (
                <ScrollReveal key={`${activeTab}-${index}`} delay={index * 50}>
                  <Card 
                    className="group relative hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-gray-200/80 bg-white/80 backdrop-blur-sm cursor-pointer overflow-hidden"
                    onClick={() => window.open(source.url, '_blank')}
                  >
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 to-green-400/0 group-hover:from-blue-400/10 group-hover:to-green-400/10 transition-all duration-500 rounded-lg"></div>
                    
                    <CardContent className="p-6 text-center relative z-10">
                      <div className="text-3xl mb-3 transform group-hover:scale-125 transition-transform duration-300">
                        {source.logo}
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {source.name}
                      </h3>
                      <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {source.desc}
                      </p>
                      
                      {/* Enhanced link icon with animation */}
                      <div className="mt-4 flex justify-center">
                        <div className="relative">
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-all duration-300 group-hover:scale-125" />
                          <div className="absolute inset-0 bg-blue-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300"></div>
                        </div>
                      </div>
                      
                      {/* Subtle shine effect on hover */}
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
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