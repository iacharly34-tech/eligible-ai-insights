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
    'hero.badge': 'Intelligence Artificielle • LLM • Marchés Publics',
    'hero.title': 'Découvrez les',
    'hero.title.highlight': 'marchés publics',
    'hero.title.end': 'grâce aux LLM et à l\'IA générative',
    'hero.subtitle': 'Notre plateforme intelligence artificielle utilise modèles de langage avancés (GPT-4, Claude, Mistral) pour analyser automatiquement 600+ sources officielles et identifier opportunités commerciales adaptées à votre secteur.',
    'hero.cta.primary': 'Essayer l\'IA gratuitement',
    'hero.cta.secondary': 'Voir la démo LLM',
    'hero.stats.opportunities': '23 opportunités détectées par IA/jour',
    'hero.stats.time': '95% de temps économisé grâce aux LLM',
    'hero.stats.precision': '98% de précision des modèles IA',
    
    // Features
    'features.title': 'Technologies',
    'features.title.highlight': 'IA avancées',
    'features.subtitle': 'Suite complète outils intelligence artificielle et modèles de langage (LLM) pour transformer votre approche marchés publics',
    'features.multisource.title': 'Agrégation Multi-Sources IA',
    'features.multisource.desc': 'Connexion automatisée alimentée par IA à 600+ plateformes officielles marchés publics françaises et européennes',
    'features.ai.title': 'Analyse LLM Multi-Modèles',
    'features.ai.desc': 'Architecture intelligence artificielle avancée combinant GPT-4, Claude et Mistral pour analyse sémantique et traitement langage naturel appels offres',
    'features.scoring.title': 'Scoring par Machine Learning',
    'features.scoring.desc': 'Algorithmes apprentissage automatique pour évaluation prédictive pertinence et potentiel commercial chaque marché public',
    'features.notifications.title': 'Alertes IA Temps Réel',
    'features.notifications.desc': 'Système notification intelligent basé sur IA avec intégrations Slack, email et API personnalisées',
    
    // CTA Section
    'cta.title': 'Prêt à transformer votre veille avec l\'IA ?',
    'cta.subtitle': 'Rejoignez plus de 2 000 professionnels qui utilisent déjà nos modèles de langage avancés',
    'cta.primary': 'Tester les LLM gratuitement',
    'cta.secondary': 'Planifier une démo IA',
    
    // Footer
    'footer.company': 'Société',
    'footer.product': 'Produit',
    'footer.support': 'Support',
    'footer.legal': 'Légal',
    'footer.copyright': '© 2024 Eligibly.ai. Tous droits réservés.',
    
    // Accessibility
    'accessibility.menu.open': 'Ouvrir le menu',
    'accessibility.menu.close': 'Fermer le menu',
    'accessibility.home': 'Page d\'accueil Eligibly.ai',
    'accessibility.demo': 'Demander une démonstration gratuite',
    'accessibility.login': 'Se connecter à votre compte',
    'accessibility.language.switch': 'Changer de langue',
    'accessibility.navigation.main': 'Navigation principale',
    'accessibility.navigation.mobile': 'Navigation mobile',
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
    'accessibility.menu.open': 'Open menu',
    'accessibility.menu.close': 'Close menu',
    'accessibility.home': 'Eligibly.ai homepage',
    'accessibility.demo': 'Request a free demonstration',
    'accessibility.login': 'Sign in to your account',
    'accessibility.language.switch': 'Switch language',
    'accessibility.navigation.main': 'Main navigation',
    'accessibility.navigation.mobile': 'Mobile navigation',
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