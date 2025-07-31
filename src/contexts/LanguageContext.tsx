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
    'hero.badge': 'Intelligence Artificielle • Marchés Publics',
    'hero.title': 'Découvrez les',
    'hero.title.highlight': 'marchés publics',
    'hero.title.end': 'qui vous correspondent',
    'hero.subtitle': 'Notre IA analyse 600+ sources officielles françaises et européennes pour identifier automatiquement les opportunités commerciales adaptées à votre activité.',
    'hero.cta.primary': 'Essayer gratuitement',
    'hero.cta.secondary': 'Voir la démo',
    'hero.stats.opportunities': '23 opportunités/jour en moyenne',
    'hero.stats.time': '95% de temps économisé',
    'hero.stats.precision': '98% de précision IA',
    
    // Features
    'features.title': 'Fonctionnalités',
    'features.title.highlight': 'clés',
    'features.subtitle': 'Une suite complète d\'outils IA pour transformer votre approche des marchés publics',
    'features.multisource.title': 'Connexion Multi-Sources',
    'features.multisource.desc': 'Accès automatisé à 600+ sources officielles françaises et européennes',
    'features.ai.title': 'Analyse IA Avancée',
    'features.ai.desc': 'Triple modèle IA (GPT-4, Claude, Mistral) pour une analyse exhaustive',
    'features.scoring.title': 'Scoring Intelligent',
    'features.scoring.desc': 'Évaluation automatique de la pertinence et du potentiel de chaque marché',
    'features.notifications.title': 'Notification Temps Réel',
    'features.notifications.desc': 'Alertes instantanées via Slack, email et intégrations personnalisées',
    
    // CTA Section
    'cta.title': 'Prêt à transformer votre veille commerciale ?',
    'cta.subtitle': 'Rejoignez plus de 2000+ professionnels qui utilisent déjà notre IA',
    'cta.primary': 'Commencer l\'essai gratuit',
    'cta.secondary': 'Planifier une démo',
    
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
    'hero.badge': 'Artificial Intelligence • Public Procurement',
    'hero.title': 'Discover the',
    'hero.title.highlight': 'public tenders',
    'hero.title.end': 'that match you',
    'hero.subtitle': 'Our AI analyzes 600+ official French and European sources to automatically identify business opportunities tailored to your activity.',
    'hero.cta.primary': 'Try for free',
    'hero.cta.secondary': 'Watch demo',
    'hero.stats.opportunities': '23 opportunities/day on average',
    'hero.stats.time': '95% time saved',
    'hero.stats.precision': '98% AI precision',
    
    // Features
    'features.title': 'Key',
    'features.title.highlight': 'features',
    'features.subtitle': 'A complete suite of AI tools to transform your approach to public procurement',
    'features.multisource.title': 'Multi-Source Connection',
    'features.multisource.desc': 'Automated access to 600+ official French and European sources',
    'features.ai.title': 'Advanced AI Analysis',
    'features.ai.desc': 'Triple AI model (GPT-4, Claude, Mistral) for comprehensive analysis',
    'features.scoring.title': 'Smart Scoring',
    'features.scoring.desc': 'Automatic evaluation of relevance and potential of each tender',
    'features.notifications.title': 'Real-Time Notifications',
    'features.notifications.desc': 'Instant alerts via Slack, email and custom integrations',
    
    // CTA Section
    'cta.title': 'Ready to transform your business intelligence?',
    'cta.subtitle': 'Join 2000+ professionals already using our AI',
    'cta.primary': 'Start free trial',
    'cta.secondary': 'Schedule a demo',
    
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