import React, { createContext, useContext, useState, useEffect } from 'react';
import { secureStorage } from '@/utils/security';

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
    'nav.demo': 'Demander une démo',
    
    // Hero Section
    'hero.badge': 'Seule plateforme • IA prédictive • Marchés Publics',
    'hero.title': 'La seule IA qui',
    'hero.title.highlight': 'prédit vos chances',
    'hero.title.end': 'avant de candidater',
    'hero.subtitle': 'Eligibly.ai est la première plateforme d\'intelligence artificielle prédictive qui analyse vos chances de succès sur chaque marché public. Rejoignez nos premiers utilisateurs.',
    'hero.cta.primary': 'Rejoindre l\'accès anticipé',
    'hero.cta.secondary': 'Voir la démonstration',
    'hero.stats.opportunities': '+200 appels d\'offres analysés quotidiennement dans votre secteur',
    'hero.stats.time': '10x plus rapide pour qualifier un marché',
    'hero.stats.precision': "Aide à la décision: placez l'investissement au bon niveau grâce au pourcentage de succès",
    
    // Features
    'features.title': 'Fonctionnalités',
    'features.title.highlight': 'essentielles',
    'features.subtitle': 'Une plateforme complète pour optimiser votre approche des marchés publics et maximiser vos chances de succès.',
    'features.multisource.title': 'IA prédictive exclusive',
    'features.multisource.desc': 'La seule plateforme qui prédit vos chances avant même de candidater et prémâche certains critères clés (prix optimal, engagements environnementaux, etc.) pour maximiser vos chances.',
    'features.ai.title': 'Analyse de compatibilité automatique',
    'features.ai.desc': 'Analyse votre profil vs les critères de chaque marché pour évaluer la compatibilité et prioriser les dossiers à traiter',
    'features.scoring.title': 'Score prédictif de réussite',
    'features.scoring.desc': 'Affiche un pourcentage de succès pour placer le curseur d’investissement commercial exactement où il faut — un véritable outil d’aide à la décision.',
    'features.notifications.title': 'Alertes intelligentes prédictives',
    'features.notifications.desc': 'Alertes avec présélection volontaire pour éviter la surcharge d’informations et vous garder concentré sur vos objectifs de conversion',
    
    // Market Stats Section
    'market.title': 'Le terrain des',
    'market.title.highlight': 'opportunités publiques',
    'market.subtitle': 'Un secteur majeur de l\'économie française avec de nombreuses opportunités pour les entreprises',
    'market.stats.volume': '200 milliards d\'euros',
    'market.stats.volume.desc': 'de dépense publique par an en France',
    'market.stats.tenders': '157 000',
    'market.stats.tenders.desc': 'appels d\'offres publiés chaque année',
    'market.stats.candidates': '2,5',
    'market.stats.candidates.desc': 'entreprises candidates en moyenne par AO',
    'market.benefits.title': 'Des garanties uniques',
    'market.benefits.payment': 'Garantie de paiement',
    'market.benefits.contracts': 'Contrats pluriannuels',
    'market.benefits.growth': 'Croissance stable',
    
    // CTA Section
    'cta.title': 'Décidez plus vite, gagnez plus',
    'cta.subtitle': 'Gagnez en compétitivité et accélérez vos décisions grâce à notre IA prédictive des marchés publics.',
    'cta.primary': 'Accès anticipé',
    'cta.secondary': 'Découvrez votre score de succès en direct',
    
    // Footer
    'footer.company': 'Société',
    'footer.product': 'Produit',
    'footer.support': 'Support',
    'footer.legal': 'Légal',
    'footer.copyright': '© 2025 Eligibly.ai. Tous droits réservés.',
    
    // Accessibility
    'accessibility.skipToContent': 'Aller au contenu principal',
    'accessibility.home': 'Accueil eligibly.ai',
    'accessibility.navigation.main': 'Navigation principale',
    'accessibility.navigation.mobile': 'Navigation mobile',
    'accessibility.menu.open': 'Ouvrir le menu',
    'accessibility.menu.close': 'Fermer le menu',
    'accessibility.login': 'Se connecter à eligibly.ai',
    'accessibility.demo': 'Demander une démo',
    'accessibility.images.logo': 'Logo eligibly.ai',
    'accessibility.images.hero': 'Interface eligibly.ai - Scoring IA des appels d\'offres publics',
    'accessibility.images.dashboard': 'Tableau de bord eligibly.ai',
    'accessibility.images.feature': 'Illustration de la fonctionnalité',
    'accessibility.language.switch': 'Changer la langue vers',
    
    // Dashboard
    'dashboard.title': 'Dashboard Eligibly.ai',
    'dashboard.subtitle': 'Suivi en temps réel',
    'dashboard.live': 'Live',
    'dashboard.opportunities.detected': 'Opportunités détectées',
    'dashboard.ai.precision': 'Précision IA',
    'dashboard.recent.opportunities': 'Opportunités récentes',
    'dashboard.score': 'Score',
    'dashboard.lastAnalysis': 'Dernière analyse: il y a 2 min',
    'dashboard.weeklyGrowth': '+6% cette semaine',
    'dashboard.opportunity1.title': 'Système de gestion documentaire',
    'dashboard.opportunity1.client': 'Ministère de l\'Éducation',
    'dashboard.opportunity2.title': 'Infrastructure cloud',
    'dashboard.opportunity2.client': 'Région Île-de-France',
    'dashboard.opportunity3.title': 'Plateforme e-learning',
    'dashboard.opportunity3.client': 'Université de Lyon',
    
    // CGU Page
    'cgu.title': 'Conditions Générales d\'Utilisation',
    'cgu.lastUpdate': 'Dernière mise à jour',
    
    // Product Page
    'product.badge': 'Intelligence Artificielle • Marchés Publics',
    'product.hero.title': 'La plateforme IA la plus avancée pour les marchés publics',
    'product.hero.subtitle': 'Découvrez comment notre intelligence artificielle révolutionne la détection et l\'analyse des appels d\'offres pour maximiser vos chances de succès.',
    'product.features.title': 'Fonctionnalités',
    'product.features.title.highlight': 'clés',
    'product.features.subtitle': 'Une suite complète d\'outils IA pour transformer votre approche des marchés publics',
    'product.benefits.title': 'Résultats',
    'product.benefits.title.highlight': 'mesurables',
    
    // Solutions Page  
    'solutions.badge': 'Solutions sur mesure',
    'solutions.hero.title': 'Une solution pour chaque',
    'solutions.hero.title.highlight': 'profil métier',
    'solutions.hero.subtitle': 'Notre IA s\'adapte aux besoins spécifiques de votre secteur et de votre rôle pour maximiser votre performance commerciale.',
    'solutions.commercial.title': 'Équipes Commerciales',
    'solutions.commercial.subtitle': 'Vendeurs & Business Developers',
    'solutions.commercial.description': 'Détectez automatiquement les opportunités qui correspondent parfaitement à votre offre et maximisez votre taux de conversion.',
    'solutions.commercial.cta': 'Booster mes ventes',
    'solutions.consultant.title': 'Consultants & AMO',
    'solutions.consultant.subtitle': 'Assistance à Maîtrise d\'Ouvrage',
    'solutions.consultant.description': 'Accompagnez vos clients avec une expertise data-driven et une veille exhaustive des marchés publics de votre secteur.',
    'solutions.consultant.cta': 'Enrichir mon expertise',
    'solutions.public.title': 'Acheteurs Publics',
    'solutions.public.subtitle': 'Collectivités & Administrations',
    'solutions.public.description': 'Optimisez vos achats publics grâce à l\'intelligence de marché et aux benchmarks automatisés de notre IA.',
    'solutions.public.cta': 'Optimiser mes achats',
    'solutions.usecases.title': 'Cas d\'usage',
    'solutions.usecases.title.highlight': 'clients',
    'solutions.usecases.subtitle': 'Découvrez comment nos clients transforment leur performance commerciale',
    
    // Pricing Page
    'pricing.badge': 'Tarifs transparents',
    'pricing.hero.title': 'Choisissez votre',
    'pricing.hero.title.highlight': 'plan parfait',
    'pricing.hero.subtitle': 'Des tarifs simples et transparents. Commencez dès aujourd\'hui, évoluez selon vos besoins. Sans engagement.',
    'pricing.guarantee.title': 'Garantie satisfait ou remboursé 30 jours',
    'pricing.guarantee.subtitle': 'Nous sommes convaincus que notre IA révolutionnera votre veille commerciale. Si vous n\'êtes pas satisfait, nous vous remboursons intégralement.',
    'pricing.faq.title': 'Questions',
    'pricing.faq.title.highlight': 'fréquentes',
    
    // Resources Page
    'resources.badge': 'Centre de ressources',
    'resources.hero.title': 'Tout pour réussir vos',
    'resources.hero.title.highlight': 'marchés publics',
    'resources.hero.subtitle': 'Guides, tutoriels, analyses et bonnes pratiques pour maximiser votre performance commerciale dans les marchés publics.',
    'resources.featured.title': 'Article à la une',
    'resources.featured.subtitle': 'Notre sélection de la semaine',
    'resources.articles.title': 'Derniers articles',
    'resources.articles.subtitle': 'Conseils et analyses d\'experts',
    'resources.guides.title': 'Guides et',
    'resources.guides.title.highlight': 'templates',
    'resources.guides.subtitle': 'Ressources pratiques à télécharger',
    'resources.videos.title': 'Tutoriels',
    'resources.videos.title.highlight': 'vidéo',
    'resources.videos.subtitle': 'Apprenez à utiliser Eligibly.ai efficacement',
    
    // About Page
    'about.badge': 'À propos d\'Eligibly.ai',
    'about.hero.title': 'Notre mission :',
    'about.hero.title.highlight': 'démocratiser l\'IA',
    'about.hero.subtitle': 'Nous développons les outils d\'intelligence artificielle les plus avancés pour révolutionner la façon dont les entreprises appréhendent les marchés publics.',
    'about.vision.title': 'Notre',
    'about.vision.title.highlight': 'vision',
    'about.values.title': 'Nos',
    'about.values.title.highlight': 'valeurs',
    'about.values.subtitle': 'Les principes qui guident chacune de nos décisions et innovations',
    'about.team.title': 'Notre',
    'about.team.title.highlight': 'équipe',
    'about.team.subtitle': 'Des experts passionnés par l\'IA et les marchés publics',
    'about.security.title': 'Sécurité et',
    'about.security.title.highlight': 'conformité',
    'about.security.subtitle': 'Vos données sont notre priorité absolue. Nous respectons les plus hauts standards de sécurité.',
    
    // Demo Page
    'demo.badge': 'Démonstration personnalisée',
    'demo.hero.title': 'Découvrez votre',
    'demo.hero.title.highlight': 'potentiel IA',
    'demo.hero.subtitle': 'Réservez votre démonstration personnalisée de 30 minutes et découvrez comment notre IA peut transformer votre approche des marchés publics.',
    'demo.form.title': 'Réservez votre démonstration',
    'demo.form.subtitle': 'Complétez ce formulaire et nos experts vous contacteront sous 2h',
    'demo.benefits.title': 'Ce que vous découvrirez',
    'demo.program.title': 'Au programme de votre démo',
    
    // Login Page
    'login.title': 'Connexion à votre espace',
    'login.subtitle': 'Accédez à votre dashboard Eligibly.ai',
    'login.welcome.title': 'Bienvenue dans votre',
    'login.welcome.title.highlight': 'espace IA',
    'login.welcome.subtitle': 'Accédez à votre tableau de bord personnalisé et découvrez les opportunités détectées par Charly, l\'assistant IA d\'Eligibly.',
    'login.demo.title': 'Découvrez d\'abord notre plateforme',
    'login.demo.subtitle': 'Testez toutes les fonctionnalités pendant 7 jours, sans engagement',
    
    // Common elements
    'common.getStarted': 'Commencer',
    'common.bookDemo': 'Réserver une démo',
    'common.learnMore': 'En savoir plus',
    'common.download': 'Télécharger',
    'common.readMore': 'Lire la suite',
    'common.viewAll': 'Voir tout',
    'common.tryFree': 'Essayer',
    'common.contact': 'Nous contacter',
    'common.login': 'Se connecter',
    'common.signUp': 'S\'inscrire',
    'common.readArticle': 'Lire l\'article',
    'common.watchDemo': 'Voir la démo',
    'common.schedule': 'Planifier',
    'common.subscribe': 'S\'abonner',
  },
  en: {
    // Navigation
    'nav.product': 'Product',
    'nav.solutions': 'Solutions',
    'nav.pricing': 'Pricing',
    'nav.resources': 'Resources',
    'nav.about': 'About',
    'nav.login': 'Sign in',
    'nav.demo': 'Request a demo',
    
    // Hero Section
    'hero.badge': 'Only platform • Predictive AI • Public Procurement',
    'hero.title': 'The only AI that',
    'hero.title.highlight': 'predicts your chances',
    'hero.title.end': 'before you apply',
    'hero.subtitle': 'Eligibly.ai is the first predictive artificial intelligence platform that analyses your chances of success on every public tender. Join our early adopters.',
    'hero.cta.primary': 'Join early access',
    'hero.cta.secondary': 'Watch demonstration',
    'hero.stats.opportunities': '+200 public tenders analysed daily in your sector',
    'hero.stats.time': '10x faster to qualify a tender',
    'hero.stats.precision': 'Decision support: invest exactly where it matters with your success percentage',
    
    // Features
    'features.title': 'Essential',
    'features.title.highlight': 'features',
    'features.subtitle': 'A comprehensive platform to optimise your approach to public procurement and maximise your chances of success.',
    'features.multisource.title': 'Exclusive predictive AI',
    'features.multisource.desc': 'The only platform that predicts your chances before you apply and pre‑checks key criteria (optimal pricing, environmental commitments, etc.) to maximise your odds.',
    'features.ai.title': 'Automatic compatibility analysis',
    'features.ai.desc': 'Analyses your profile against each tender’s criteria to assess fit and prioritise the right bids',
    'features.scoring.title': 'Predictive success score',
    'features.scoring.desc': 'Displays a success percentage to set your commercial investment exactly where it matters — a true decision‑support tool',
    'features.notifications.title': 'Predictive smart alerts',
    'features.notifications.desc': 'Opt‑in predictive alerts to avoid information overload and keep you focused on conversions',
    
    // Market Stats Section
    'market.title': 'The',
    'market.title.highlight': 'public opportunity landscape',
    'market.subtitle': 'A major sector of the French economy with numerous opportunities for businesses',
    'market.stats.volume': '200 billion euros',
    'market.stats.volume.desc': 'in public spending per year in France',
    'market.stats.tenders': '157,000',
    'market.stats.tenders.desc': 'tenders published each year',
    'market.stats.candidates': '2.5',
    'market.stats.candidates.desc': 'candidate companies on average per tender',
    'market.benefits.title': 'Unique guarantees',
    'market.benefits.payment': 'Payment guarantee',
    'market.benefits.contracts': 'Multi‑year contracts',
    'market.benefits.growth': 'Stable growth',
    
    // CTA Section
    'cta.title': 'Decide faster, win more',
    'cta.subtitle': 'Gain a competitive edge and make faster decisions with our predictive tender AI.',
    'cta.primary': 'Free early access',
    'cta.secondary': 'See your live success score',
    
    // Footer
    'footer.company': 'Company',
    'footer.product': 'Product',
    'footer.support': 'Support',
    'footer.legal': 'Legal',
    'footer.copyright': '© 2025 Eligibly.ai. All rights reserved.',
    
    // Accessibility
    'accessibility.skipToContent': 'Skip to main content',
    'accessibility.home': 'eligibly.ai Home',
    'accessibility.navigation.main': 'Main navigation',
    'accessibility.navigation.mobile': 'Mobile navigation',
    'accessibility.menu.open': 'Open menu',
    'accessibility.menu.close': 'Close menu',
    'accessibility.login': 'Login to eligibly.ai',
    'accessibility.demo': 'Request a demo',
    'accessibility.images.logo': 'eligibly.ai Logo',
    'accessibility.images.hero': 'eligibly.ai Interface - AI Scoring for Public Tenders',
    'accessibility.images.dashboard': 'eligibly.ai Dashboard',
    'accessibility.images.feature': 'Feature illustration',
    'accessibility.language.switch': 'Switch language to',
    
    // Dashboard
    'dashboard.title': 'Eligibly.ai dashboard',
    'dashboard.subtitle': 'Real‑time monitoring',
    'dashboard.live': 'Live',
    'dashboard.opportunities.detected': 'Opportunities detected',
    'dashboard.ai.precision': 'AI precision',
    'dashboard.recent.opportunities': 'Recent opportunities',
    'dashboard.score': 'Score',
    'dashboard.lastAnalysis': 'Last analysis: 2 min ago',
    'dashboard.weeklyGrowth': '+6% this week',
    'dashboard.opportunity1.title': 'Document management system',
    'dashboard.opportunity1.client': 'Ministry of Education',
    'dashboard.opportunity2.title': 'Cloud infrastructure',
    'dashboard.opportunity2.client': 'Île‑de‑France Region',
    'dashboard.opportunity3.title': 'E‑learning platform',
    'dashboard.opportunity3.client': 'University of Lyon',
    
    // CGU Page
    'cgu.title': 'Terms & Conditions',
    'cgu.lastUpdate': 'Last update',
    
    // Product Page
    'product.badge': 'Artificial Intelligence • Public Procurement',
    'product.hero.title': 'The most advanced AI platform for public procurement',
    'product.hero.subtitle': 'Discover how our artificial intelligence revolutionises the detection and analysis of public tenders to maximise your chances of success.',
    'product.features.title': 'Key',
    'product.features.title.highlight': 'features',
    'product.features.subtitle': 'A complete suite of AI tools to transform your approach to public procurement',
    'product.benefits.title': 'Measurable',
    'product.benefits.title.highlight': 'results',
    
    // Solutions Page  
    'solutions.badge': 'Tailored solutions',
    'solutions.hero.title': 'A solution for every',
    'solutions.hero.title.highlight': 'professional profile',
    'solutions.hero.subtitle': 'Our AI adapts to the specific needs of your sector and role to maximise your commercial performance.',
    'solutions.commercial.title': 'Sales teams',
    'solutions.commercial.subtitle': 'Sales & Business Developers',
    'solutions.commercial.description': 'Automatically detect opportunities that perfectly match your offering and maximise your conversion rate.',
    'solutions.commercial.cta': 'Boost my sales',
    'solutions.consultant.title': 'Consultants & AMO',
    'solutions.consultant.subtitle': 'Project management assistance',
    'solutions.consultant.description': 'Support your clients with data‑driven expertise and comprehensive monitoring of public markets in your sector.',
    'solutions.consultant.cta': 'Enrich my expertise',
    'solutions.public.title': 'Public buyers',
    'solutions.public.subtitle': 'Local authorities & administrations',
    'solutions.public.description': 'Optimise your public procurement through market intelligence and automated benchmarks from our AI.',
    'solutions.public.cta': 'Optimise my procurement',
    'solutions.usecases.title': 'Client',
    'solutions.usecases.title.highlight': 'use cases',
    'solutions.usecases.subtitle': 'Discover how our clients transform their commercial performance',
    
    // Pricing Page
    'pricing.badge': 'Transparent pricing',
    'pricing.hero.title': 'Choose your',
    'pricing.hero.title.highlight': 'perfect plan',
    'pricing.hero.subtitle': 'Simple and transparent pricing. Start free, scale according to your needs. No commitment.',
    'pricing.guarantee.title': '30‑day money‑back guarantee',
    'pricing.guarantee.subtitle': 'We are convinced that our AI will revolutionise your commercial monitoring. If you are not satisfied, we will refund you in full.',
    'pricing.faq.title': 'Frequently',
    'pricing.faq.title.highlight': 'asked questions',
    
    // Resources Page
    'resources.badge': 'Resource centre',
    'resources.hero.title': 'Everything to succeed in your',
    'resources.hero.title.highlight': 'public procurement',
    'resources.hero.subtitle': 'Guides, tutorials, analyses and best practices to maximise your commercial performance in public procurement.',
    'resources.featured.title': 'Featured article',
    'resources.featured.subtitle': 'Our selection of the week',
    'resources.articles.title': 'Latest articles',
    'resources.articles.subtitle': 'Expert advice and analysis',
    'resources.guides.title': 'Guides and',
    'resources.guides.title.highlight': 'templates',
    'resources.guides.subtitle': 'Practical resources to download',
    'resources.videos.title': 'Video',
    'resources.videos.title.highlight': 'tutorials',
    'resources.videos.subtitle': 'Learn to use Eligibly.ai effectively',
    
    // About Page
    'about.badge': 'About Eligibly.ai',
    'about.hero.title': 'Our mission:',
    'about.hero.title.highlight': 'democratise AI',
    'about.hero.subtitle': 'We develop the most advanced artificial intelligence tools to revolutionise how organisations approach public procurement.',
    'about.vision.title': 'Our',
    'about.vision.title.highlight': 'vision',
    'about.values.title': 'Our',
    'about.values.title.highlight': 'values',
    'about.values.subtitle': 'The principles that guide each of our decisions and innovations',
    'about.team.title': 'Our',
    'about.team.title.highlight': 'team',
    'about.team.subtitle': 'Experts passionate about AI and public procurement',
    'about.security.title': 'Security and',
    'about.security.title.highlight': 'compliance',
    'about.security.subtitle': 'Your data is our absolute priority. We adhere to the highest security standards.',
    
    // Demo Page
    'demo.badge': 'Personalised demonstration',
    'demo.hero.title': 'Discover your',
    'demo.hero.title.highlight': 'AI potential',
    'demo.hero.subtitle': 'Book your personalised 30‑minute demonstration and discover how our AI can transform your approach to public procurement.',
    'demo.form.title': 'Book your demonstration',
    'demo.form.subtitle': 'Complete this form and our experts will contact you within 2 hours',
    'demo.benefits.title': 'What you will discover',
    'demo.program.title': 'Demo programme',
    'demo.hero.detail.duration': '30 minutes sharp',
    'demo.hero.detail.slots': 'Slots available today',
    'demo.hero.detail.nocommit': 'No commitment',
    'demo.form.firstName': 'First name *',
    'demo.form.lastName': 'Last name *',
    'demo.form.email': 'Work email *',
    'demo.form.company': 'Company *',
    'demo.form.role': 'Role *',
    'demo.form.role.placeholder': 'Select your role',
    'demo.form.role.commercial': 'Sales / Business development',
    'demo.form.role.direction': 'Leadership / CEO',
    'demo.form.role.marketing': 'Marketing / Communications',
    'demo.form.role.consultant': 'Consultant / AMO',
    'demo.form.role.buyer': 'Public buyer',
    'demo.form.role.other': 'Other',
    'demo.form.sector': 'Sector',
    'demo.form.sector.placeholder': 'Choose your sector',
    'demo.form.sector.tech': 'Technology / Digital',
    'demo.form.sector.construction': 'Construction',
    'demo.form.sector.business': 'Business services',
    'demo.form.sector.health': 'Health / Medical',
    'demo.form.sector.energy': 'Energy / Environment',
    'demo.form.sector.transport': 'Transport / Logistics',
    'demo.form.sector.other': 'Other',
    'demo.form.teamSize': "Team size",
    'demo.form.teamSize.placeholder': 'Your team size',
    'demo.form.teamSize.1-10': '1–10 people',
    'demo.form.teamSize.11-50': '11–50 people',
    'demo.form.teamSize.51-200': '51–200 people',
    'demo.form.teamSize.200+': '200+ people',
    'demo.form.challenges': 'Your current challenges (optional)',
    'demo.form.challenges.placeholder': 'Describe your main challenges…',
    'demo.form.newsletter': 'Receive expert tips by email (optional)',
    'demo.form.submit': 'Book my demonstration',
    'demo.form.privacy': 'By submitting this form, you agree to be contacted by our team. Your data is protected under our ',
    'demo.form.privacy.link': 'privacy policy',
    
    // Login Page
    'login.title': 'Access your workspace',
    'login.subtitle': 'Access your Eligibly.ai dashboard',
    'login.welcome.title': 'Welcome to your',
    'login.welcome.title.highlight': 'AI workspace',
    'login.welcome.subtitle': 'Access your personalised dashboard and discover opportunities detected by Charly, the Eligibly AI assistant.',
    'login.demo.title': 'Discover our platform first',
    'login.demo.subtitle': 'Try all features for 7 days, no commitment',
    
    // Common elements
    'common.getStarted': 'Get started free',
    'common.bookDemo': 'Book a demo',
    'common.learnMore': 'Learn more',
    'common.download': 'Download',
    'common.readMore': 'Read more',
    'common.viewAll': 'View all',
    'common.tryFree': 'Try free',
    'common.contact': 'Contact us',
    'common.login': 'Sign in',
    'common.signUp': 'Sign up',
    'common.readArticle': 'Read article',
    'common.watchDemo': 'Watch demo',
    'common.schedule': 'Schedule',
    'common.subscribe': 'Subscribe',
  }
} as const;

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage first, then browser language, default to French
    const saved = secureStorage.getItem('eligibly-language') as Language;
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
    secureStorage.setItem('eligibly-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    const result = translations[language][key as keyof typeof translations[typeof language]] || key;
    return result;
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