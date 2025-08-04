import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// French translations (default)
const translations = {
  fr: {
    // Navigation
    'nav.product': 'Produit',
    'nav.solutions': 'Solutions',
    'nav.pricing': 'Tarifs',
    'nav.resources': 'Ressources',
    'nav.about': 'À propos',
    'nav.login': 'Se connecter',
    'nav.demo': 'Démo gratuite',
    
    // Hero Section
    'hero.badge': 'Plateforme IA • Marchés Publics • Alertes Automatisées',
    'hero.title': 'Gagnez enfin plus',
    'hero.title.highlight': 'd\'appels d\'offres',
    'hero.title.end': 'avec notre IA spécialisée',
    'hero.subtitle': 'La plateforme préférée des professionnels pour détecter, analyser et remporter les marchés publics. Notre IA scrute 600+ sources officielles 24h/24 pour vous trouver les meilleures opportunités.',
    'hero.cta.primary': 'Commencer gratuitement',
    'hero.cta.secondary': 'Voir une démo',
    'hero.stats.opportunities': '+600 appels d\'offres remontés/jour',
    'hero.stats.time': '10x plus rapide pour analyser',
    'hero.stats.precision': '+50 000 renouvellements détectés',
    
    // Features
    'features.title': 'Pourquoi choisir',
    'features.title.highlight': 'notre plateforme',
    'features.subtitle': 'Arrêtez de perdre du temps et des opportunités. Notre IA fait le travail de veille pour vous pendant que vous vous concentrez sur gagner.',
    'features.multisource.title': 'Détection Automatique 24h/24',
    'features.multisource.desc': 'Notre IA scrute en permanence 600+ sources officielles pour identifier chaque nouvel appel d\'offres correspondant à vos critères',
    'features.ai.title': 'Analyse Intelligente Instantanée',
    'features.ai.desc': 'Fini la lecture fastidieuse : notre IA analyse chaque marché en quelques secondes et vous présente uniquement les informations clés',
    'features.scoring.title': 'Priorisation par Potentiel',
    'features.scoring.desc': 'Un score de pertinence automatique pour chaque opportunité vous aide à investir votre temps sur les marchés les plus prometteurs',
    'features.notifications.title': 'Alertes Personnalisées',
    'features.notifications.desc': 'Recevez instantanément par email ou Slack uniquement les marchés qui vous intéressent vraiment, quand ils sortent',
    
    // CTA Section
    'cta.title': 'Arrêtez de rater des opportunités !',
    'cta.subtitle': 'Rejoignez des centaines d\'experts qui gagnent plus de marchés publics grâce à notre IA',
    'cta.primary': 'Essayer gratuitement',
    'cta.secondary': 'Demander une démo',
    
    // Footer
    'footer.company': 'Société',
    'footer.product': 'Produit',
    'footer.support': 'Support',
    'footer.legal': 'Légal',
    'footer.copyright': '© 2024 Eligibly.ai. Tous droits réservés.',
    
    // Accessibility
    'accessibility.skipToContent': 'Aller au contenu principal',
    'accessibility.home': 'Accueil eligibly.ai',
    'accessibility.navigation.main': 'Navigation principale',
    'accessibility.navigation.mobile': 'Navigation mobile',
    'accessibility.menu.open': 'Ouvrir le menu',
    'accessibility.menu.close': 'Fermer le menu',
    'accessibility.login': 'Se connecter à eligibly.ai',
    'accessibility.demo': 'Essayer la démo gratuite',
    'accessibility.images.logo': 'Logo eligibly.ai',
    'accessibility.images.hero': 'Interface eligibly.ai - Scoring IA des appels d\'offres publics',
    'accessibility.images.dashboard': 'Tableau de bord eligibly.ai',
    'accessibility.images.feature': 'Illustration de la fonctionnalité',
  },
  en: {
    // Navigation
    'nav.product': 'Product',
    'nav.solutions': 'Solutions',
    'nav.pricing': 'Pricing',
    'nav.resources': 'Resources',
    'nav.about': 'About',
    'nav.login': 'Sign in',
    'nav.demo': 'Free demo',
    
    // Hero Section
    'hero.badge': 'AI • LLM • Public Procurement Technology',
    'hero.title': 'Discover',
    'hero.title.highlight': 'public tenders',
    'hero.title.end': 'with advanced LLM and generative AI',
    'hero.subtitle': 'Our artificial intelligence platform leverages advanced language models (GPT-4, Claude, Mistral) to automatically analyse 600+ official sources and identify business opportunities tailored to your sector.',
    'hero.cta.primary': 'Try AI for free',
    'hero.cta.secondary': 'Watch LLM demo',
    'hero.stats.opportunities': '23 AI-detected opportunities/day',
    'hero.stats.time': '95% time saved with LLM technology',
    'hero.stats.precision': '98% AI model accuracy',
    
    // Features
    'features.title': 'Advanced AI',
    'features.title.highlight': 'technologies',
    'features.subtitle': 'A comprehensive suite of artificial intelligence tools and large language models (LLM) to transform your approach to public procurement',
    'features.multisource.title': 'AI-Powered Multi-Source Aggregation',
    'features.multisource.desc': 'AI-driven automated connection to 600+ official French and European public procurement platforms',
    'features.ai.title': 'Multi-Model LLM Analysis',
    'features.ai.desc': 'Advanced artificial intelligence architecture combining GPT-4, Claude and Mistral for semantic analysis and natural language processing of tenders',
    'features.scoring.title': 'Machine Learning Scoring',
    'features.scoring.desc': 'Machine learning algorithms for predictive evaluation of relevance and commercial potential for each public tender',
    'features.notifications.title': 'Real-Time AI Alerts',
    'features.notifications.desc': 'Intelligent AI-based notification system with Slack, email and bespoke API integrations',
    
    // CTA Section
    'cta.title': 'Ready to transform your intelligence with AI?',
    'cta.subtitle': 'Join over 2,000 professionals already using our advanced language models',
    'cta.primary': 'Test LLM for free',
    'cta.secondary': 'Schedule AI demo',
    
    // Footer
    'footer.company': 'Company',
    'footer.product': 'Product',
    'footer.support': 'Support',
    'footer.legal': 'Legal',
    'footer.copyright': '© 2024 Eligibly.ai. All rights reserved.',
    
    // Accessibility
    'accessibility.skipToContent': 'Skip to main content',
    'accessibility.home': 'eligibly.ai Home',
    'accessibility.navigation.main': 'Main navigation',
    'accessibility.navigation.mobile': 'Mobile navigation',
    'accessibility.menu.open': 'Open menu',
    'accessibility.menu.close': 'Close menu',
    'accessibility.login': 'Login to eligibly.ai',
    'accessibility.demo': 'Try free demo',
    'accessibility.images.logo': 'eligibly.ai Logo',
    'accessibility.images.hero': 'eligibly.ai Interface - AI Scoring for Public Tenders',
    'accessibility.images.dashboard': 'eligibly.ai Dashboard',
    'accessibility.images.feature': 'Feature illustration',
  }
} as const;

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage first, then browser language, default to French
    const saved = localStorage.getItem('eligibly-language') as Language;
    if (saved && (saved === 'fr' || saved === 'en')) {
      return saved;
    }
    
    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('en')) {
      return 'en';
    }
    
    return 'fr'; // Default to French
  });

  useEffect(() => {
    localStorage.setItem('eligibly-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};