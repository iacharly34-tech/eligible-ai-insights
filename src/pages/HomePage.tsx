import React, { useState, useEffect } from "react";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { updateMetaDescription, updatePageTitle, updateCanonicalUrl, SEO_CONTENT } from "@/utils/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SafeLink } from "@/components/SafeLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  ArrowRight, 
  Target, 
  CheckCircle, 
  Star,
  ExternalLink,
  Play,
  BarChart3,
  Phone,
  Mail,
  MapPin,
  Brain,
  Zap,
  Clock,
  TrendingUp,
  Award,
  Shield
} from "lucide-react";

import aiCharacterTechMale from "@/assets/charly-character-cutout.png";
import { processCharlyImage } from "@/utils/processCharlyImage";

import { 
  COMPANY_STATS, 
  CORE_FEATURES, 
  MEASURABLE_BENEFITS, 
  STANDARD_CTAS, 
  DATA_SOURCES, 
  TRUST_INDICATORS,
  HERO_MESSAGES 
} from "@/data/constants";
import { StatsSources } from "@/components/StatsSources";
import { SectorsSection } from "@/components/SectorsSection";
import { PrivacySection } from "@/components/PrivacySection";
import { AboutUsSection } from "@/components/AboutUsSection";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'france' | 'europe'>('france');
  const [charlyImageUrl, setCharlyImageUrl] = useState<string>(aiCharacterTechMale);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
    
    // SEO optimizations
    updatePageTitle(SEO_CONTENT.home.title);
    updateMetaDescription(SEO_CONTENT.home.description);
    updateCanonicalUrl(SEO_CONTENT.home.url);
    
    // Process Charly image to remove background
    const loadCharlyImage = async () => {
      try {
        const processedImageUrl = await processCharlyImage();
        setCharlyImageUrl(processedImageUrl);
      } catch (error) {
        // Fallback to original image - silent in production
      }
    };
    
    loadCharlyImage();
  }, []);

  // Utilisation des données centralisées au lieu des définitions locales

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-emerald-50/40">
      {/* Header - Clean minimal style like Loris.ai */}
      <Header />

      <main id="main-content" tabIndex={-1} className="focus:outline-none" role="main">
        {/* Hero Section - Split Layout like Loris.ai */}
        <section className="pt-20 pb-16 px-4 relative overflow-hidden min-h-[85vh] flex items-center" aria-label={t('hero.badge')}>
        {/* Animated Background - Style Loris.ai */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-teal-50/30 to-cyan-50/20"></div>
          
          {/* Large floating geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-gradient-to-br from-emerald-200/15 to-teal-200/10 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-gradient-to-br from-cyan-200/12 to-blue-200/8 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite_2s]"></div>
          <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-gradient-to-br from-teal-300/8 to-emerald-200/6 rounded-full blur-2xl animate-[pulse_10s_ease-in-out_infinite_4s]"></div>
        </div>

        <div className="container mx-auto relative z-10 px-4 sm:px-6">
          {/* Main Content - Split Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className={`space-y-6 sm:space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {t('hero.title')}{" "}
                <span className="bg-gradient-highlight bg-clip-text text-transparent">
                  {t('hero.title.highlight')}
                </span>{" "}
                {t('hero.title.end')}
              </h1>
              
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                {t('hero.subtitle')}
              </p>

              {/* Value Propositions */}
              <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{t('hero.stats.opportunities')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{t('hero.stats.time')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{t('hero.stats.precision')}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <SafeLink to="/demo" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    className="bg-gradient-cta hover:shadow-glow text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto group transition-all duration-300 hover:scale-105 w-full"
                    role="button"
                    aria-label={t('accessibility.demo')}
                  >
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                    {t('hero.cta.primary')}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </SafeLink>
                
                <SafeLink to="/produit" className="w-full sm:w-auto">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 w-full"
                    role="button"
                    aria-label="Découvrir la solution"
                  >
                    <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Découvrir la solution
                  </Button>
                </SafeLink>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-2 opacity-60">
                <Shield className="w-4 h-4 text-success" />
                <span className="text-sm text-muted-foreground">{t('common.getStarted')}</span>
              </div>
            </div>

            {/* Right Column - Eligibly.ai Unique Dashboard */}
            <div className="relative w-full mt-8 lg:mt-0">
              {/* Dashboard Container - Unique Eligibly Design */}
              <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                
                {/* Header Dashboard - Eligibly Style */}
                <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 px-4 sm:px-6 py-4 sm:py-5 text-white">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-2xl font-bold flex items-center gap-2 sm:gap-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Target className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <span className="truncate">Charly AI Assistant</span>
                      </h3>
                      <p className="text-blue-100 mt-1 text-sm sm:text-base">Détection intelligente d'opportunités</p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 sm:px-4 py-1 sm:py-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs sm:text-sm font-semibold">Analyse en cours</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body Dashboard - Elegible.ai Original Layout */}
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  {/* Métriques principales - Design Eligibly */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4">
                    <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-white text-center">
                      <div className="text-xl sm:text-3xl font-bold">23</div>
                      <div className="text-xs opacity-90 mt-1">Nouvelles opportunités</div>
                      <div className="text-xs opacity-75 mt-1 hidden sm:block">+4 depuis hier</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-white text-center">
                      <div className="text-xl sm:text-3xl font-bold">96%</div>
                      <div className="text-xs opacity-90 mt-1">Score IA moyen</div>
                      <div className="text-xs opacity-75 mt-1 hidden sm:block">+2% ce mois</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-white text-center">
                      <div className="text-xl sm:text-3xl font-bold">4.2M€</div>
                      <div className="text-xs opacity-90 mt-1">Valeur totale</div>
                      <div className="text-xs opacity-75 mt-1 hidden sm:block">Cette semaine</div>
                    </div>
                  </div>

                  {/* Section Opportunités - Unique Eligibly Style */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                        <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Target className="w-4 h-4 text-purple-600" />
                        </div>
                        Opportunités prioritaires
                      </h4>
                      <Badge className="bg-purple-100 text-purple-700 text-xs px-3 py-1">
                        Recommandé par Charly
                      </Badge>
                    </div>
                    
                    <div className="space-y-3">
                      {/* Opportunité 1 - Design original Eligibly */}
                      <div className="bg-white rounded-2xl p-5 border-l-4 border-l-green-500 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                                2,4M€
                              </div>
                              <div className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                                🎯 Match parfait • 94%
                              </div>
                            </div>
                            <h5 className="font-bold text-gray-900 mb-2">Plateforme de gestion documentaire</h5>
                            <p className="text-sm text-gray-600 mb-2">🏛️ Ministère de l'Éducation Nationale</p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
                                <Clock className="w-3 h-3" />
                                Échéance: 15/03/2026
                              </span>
                              <span className="text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
                                ✨ Recommandation Charly
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Opportunité 2 - Design original Eligibly */}
                      <div className="bg-white rounded-2xl p-5 border-l-4 border-l-blue-500 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                                890K€
                              </div>
                              <div className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">
                                🔄 Renouvellement • 91%
                              </div>
                            </div>
                            <h5 className="font-bold text-gray-900 mb-2">Infrastructure cloud hybride</h5>
                            <p className="text-sm text-gray-600 mb-2">🌍 Région Île-de-France</p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
                                <Clock className="w-3 h-3" />
                                Échéance: 28/02/2026
                              </span>
                              <span className="text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">
                                👍 Bonne compatibilité
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Stats - Design unique Eligibly */}
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-4 border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <Brain className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Charly AI en action</div>
                          <div className="text-xs text-gray-500">Dernière analyse: il y a 3 min</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-600">+12 opportunités détectées</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

      {/* Charly AI Assistant Section - Style "Découvrez Tom" */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden" aria-label="Découvrez Charly, votre assistant IA">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/15 to-cyan-soft/15 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Rencontrez{" "}
                  <span className="bg-gradient-highlight bg-clip-text text-transparent">
                    Charly by Eligibly
                  </span>
                  , votre assistant aux marchés publics
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  Créé par l'équipe Eligibly, Charly est votre assistant IA spécialisé dans les marchés publics. 
                  Il analyse en continu les opportunités avec notre expertise et vous recommande les meilleures chances de succès.
                </p>
              </div>

              {/* Benefits List - Style pills/badges */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-cta rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{t('features.ai.title')}</h3>
                    <p className="text-gray-400 text-sm">{t('features.ai.desc')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{t('features.notifications.title')}</h3>
                    <p className="text-gray-400 text-sm">{t('features.notifications.desc')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-soft to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{t('features.multisource.title')}</h3>
                    <p className="text-gray-400 text-sm">{t('features.multisource.desc')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{t('features.scoring.title')}</h3>
                    <p className="text-gray-400 text-sm">{t('features.scoring.desc')}</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 relative z-20">
                <SafeLink to="/demo">
                  <Button 
                    size="lg" 
                    className="bg-gradient-cta hover:shadow-glow text-white px-8 py-4 h-auto group transition-all duration-300 hover:scale-105 shadow-xl w-full"
                  >
                    {t('cta.primary')}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </SafeLink>
                
                <SafeLink to="/produit">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="px-8 py-4 h-auto border-2 border-white/20 text-white hover:bg-white/10 transition-all duration-300 bg-background/10 backdrop-blur-md shadow-xl w-full"
                  >
                    Découvrir la solution
                  </Button>
                </SafeLink>
              </div>
            </div>

            {/* Right Column - Charly Illustration */}
            <div className="relative">
              {/* Gradient background card for Charly */}
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-12 backdrop-blur-sm border border-white/10 relative">
                {/* Charly Image - Center */}
                <div className="flex justify-center">
                <img 
                  src={charlyImageUrl} 
                  alt="Charly, l'assistant IA d'Eligibly.ai dans sa présentation complète montrant l'interface d'analyse des marchés publics" 
                  className="w-full h-auto max-w-sm"
                  role="img"
                  loading="lazy"
                  decoding="async"
                />
                </div>
              </div>
              
              {/* Floating Cards - Outside the image */}
              {/* Top Right Card - Refonte visuelle */}
              <div className="absolute -top-4 -right-12 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-4 max-w-xs animate-fade-in">
                {/* Header avec logo et badge Live */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-cta rounded-xl flex items-center justify-center shadow-lg">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base">Eligibly.ai</h3>
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
              <div className="absolute -bottom-4 -left-12 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-4 max-w-xs animate-fade-in">
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
              <div className="absolute top-1/2 -right-16 transform -translate-y-1/2 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 hidden xl:block animate-fade-in">
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
              <div className="absolute top-1/4 -left-16 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 hidden xl:block animate-fade-in">
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

      {/* Market Statistics Section - Inspired by marchepublic.app */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-100" aria-label="Statistiques du marché public français">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Marché français</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('market.title')}{" "}
              <span className="bg-gradient-highlight bg-clip-text text-transparent">
                {t('market.title.highlight')}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('market.subtitle')}
            </p>
          </ScrollReveal>
          
          {/* Key Statistics */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ScrollReveal delay={100}>
              <Card className="text-center p-8 border-0 bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-500">
                <div className="text-5xl font-bold text-primary mb-4">{t('market.stats.volume')}</div>
                <p className="text-gray-600 font-medium">{t('market.stats.volume.desc')}</p>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <Card className="text-center p-8 border-0 bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-500">
                <div className="text-5xl font-bold text-accent mb-4">{t('market.stats.tenders')}</div>
                <p className="text-gray-600 font-medium">{t('market.stats.tenders.desc')}</p>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <Card className="text-center p-8 border-0 bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-500">
                <div className="text-5xl font-bold text-cyan-soft mb-4">{t('market.stats.candidates')}</div>
                <p className="text-gray-600 font-medium">{t('market.stats.candidates.desc')}</p>
              </Card>
            </ScrollReveal>
          </div>
          
          {/* Market Benefits */}
          <ScrollReveal delay={400}>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-8 text-gray-800">{t('market.benefits.title')}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-sm border border-gray-200/50">
                  <Shield className="w-6 h-6 text-green-600" />
                  <span className="font-medium text-gray-700">{t('market.benefits.payment')}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-sm border border-gray-200/50">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <span className="font-medium text-gray-700">{t('market.benefits.contracts')}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-sm border border-gray-200/50">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                  <span className="font-medium text-gray-700">{t('market.benefits.growth')}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
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
            {CORE_FEATURES.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="group hover:shadow-glow transition-all duration-500 hover:scale-105 border-0 bg-white/50 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform bg-gradient-primary">
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
              {(activeTab === 'france' ? DATA_SOURCES.france : DATA_SOURCES.europe).map((source, index) => (
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
                Eligibly.ai
              </span>
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MEASURABLE_BENEFITS.map((benefit, index) => (
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
            {t('cta.title')}
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            {t('cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-10 py-4 h-auto font-semibold"
            >
              <Play className="w-5 h-5 mr-2" />
              {t('cta.primary')}
            </Button>
            <button 
              className="flex items-center justify-center gap-2 rounded-xl text-lg font-semibold px-10 py-4"
              style={{ 
                backgroundColor: '#ffffff',
                color: '#8b5cf6',
                border: '2px solid #ffffff'
              }}
            >
              <Phone className="w-5 h-5" style={{ color: '#8b5cf6' }} />
              <span style={{ color: '#8b5cf6' }}>{t('cta.secondary')}</span>
            </button>
          </div>
          
          <p className="text-white/70 mt-6 text-sm">
            ✓ Sans engagement • ✓ Setup en 5 minutes • ✓ Support dédié
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <AboutUsSection />

      {/* Sectors Section */}
      <SectorsSection />

      {/* Privacy Section */}
      <PrivacySection />

      {/* Sources des statistiques */}
      <StatsSources />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;