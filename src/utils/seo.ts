export const updateMetaDescription = (description: string) => {
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }
};

export const updatePageTitle = (title: string) => {
  document.title = title;
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', title);
  }
};

export const updateCanonicalUrl = (url: string) => {
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', url);
  }
};

export const SEO_CONTENT = {
  home: {
    title: "eligibly.ai - IA pour appels d'offres publics | Veille automatisée",
    description: "Plateforme IA qui identifie automatiquement les meilleures opportunités d'appels d'offres publics. 600+ sources surveillées, alertes personnalisées, 94% de précision.",
    url: "https://eligibly.ai/"
  },
  produit: {
    title: "Produit eligibly.ai - Plateforme IA pour marchés publics",
    description: "Découvrez notre solution IA complète : surveillance multi-sources, scoring intelligent, alertes en temps réel pour optimiser vos réponses aux appels d'offres.",
    url: "https://eligibly.ai/produit"
  },
  solutions: {
    title: "Solutions eligibly.ai - IA adaptée à votre secteur",
    description: "Solutions IA personnalisées par secteur d'activité pour optimiser votre veille commerciale et remporter plus de marchés publics.",
    url: "https://eligibly.ai/solutions"
  },
  tarifs: {
    title: "Tarifs eligibly.ai - Plans et pricing de notre IA",
    description: "Découvrez nos offres transparentes pour accéder à notre plateforme IA de veille des marchés publics. Essai 7 jours sans engagement.",
    url: "https://eligibly.ai/tarifs"
  },
  ressources: {
    title: "Ressources eligibly.ai - Guides et documentation IA",
    description: "Ressources, guides et documentation pour optimiser votre utilisation de notre IA de veille des marchés publics. Études de cas et bonnes pratiques.",
    url: "https://eligibly.ai/ressources"
  },
  apropos: {
    title: "À propos d'eligibly.ai - Notre mission et équipe IA",
    description: "Découvrez eligibly.ai, la startup française qui révolutionne la veille des marchés publics grâce à l'intelligence artificielle.",
    url: "https://eligibly.ai/a-propos"
  },
  demo: {
    title: "Démo eligibly.ai - Testez notre IA",
    description: "Réservez votre démonstration personnalisée de notre plateforme IA pour les marchés publics. Essai 7 jours inclus.",
    url: "https://eligibly.ai/demo"
  },
  connexion: {
    title: "Connexion eligibly.ai - Accès à votre compte IA",
    description: "Connectez-vous à votre compte eligibly.ai pour accéder à votre tableau de bord IA et gérer vos alertes de marchés publics.",
    url: "https://eligibly.ai/connexion"
  },
  mentionslegales: {
    title: "Mentions légales - eligibly.ai",
    description: "Mentions légales et informations juridiques d'eligibly.ai, plateforme IA pour les marchés publics.",
    url: "https://eligibly.ai/mentions-legales"
  },
  confidentialite: {
    title: "Politique de confidentialité - eligibly.ai",
    description: "Politique de confidentialité et protection des données personnelles sur eligibly.ai, conforme RGPD.",
    url: "https://eligibly.ai/confidentialite"
  },
  cgu: {
    title: "Conditions générales d'utilisation - eligibly.ai",
    description: "Conditions générales d'utilisation de la plateforme IA eligibly.ai pour les marchés publics.",
    url: "https://eligibly.ai/cgu"
  }
} as const;

export const SEO_CONTENT_EN = {
  home: {
    title: 'eligibly.ai – AI for public tenders | Predictive scoring',
    description: 'UK public procurement AI: detect tenders, predictive win scoring, smart alerts. 200+ sources monitored. Try free.',
    url: 'https://eligibly.ai/en'
  },
  produit: {
    title: 'Product – AI platform for public procurement | eligibly.ai',
    description: 'Full AI suite: multi‑source monitoring, predictive scoring, smart alerts to optimise your bids and responses.',
    url: 'https://eligibly.ai/en/product'
  },
  solutions: {
    title: 'Solutions – Sector‑ready AI for public procurement',
    description: 'Tailored AI per sector and role to detect UK public tenders, qualify faster and improve win rates.',
    url: 'https://eligibly.ai/en/solutions'
  },
  tarifs: {
    title: 'Pricing – Plans for AI tender monitoring | eligibly.ai',
    description: 'Transparent pricing. Start free, scale as you grow. 7‑day trial, no commitment.',
    url: 'https://eligibly.ai/en/pricing'
  },
  ressources: {
    title: 'Resource centre – Guides & insights | eligibly.ai',
    description: 'Guides, tutorials and best practices to succeed in UK public procurement with AI.',
    url: 'https://eligibly.ai/en/resources'
  },
  apropos: {
    title: 'About eligibly.ai – Mission & AI team',
    description: 'We help UK organisations win more public tenders with predictive AI and high‑quality market intelligence.',
    url: 'https://eligibly.ai/en/about'
  },
  demo: {
    title: 'Book a live demo – eligibly.ai',
    description: '30‑minute personalised demo: see predictive scoring, tender detection and alerts in action.',
    url: 'https://eligibly.ai/en/demo'
  },
  connexion: {
    title: 'Sign in – eligibly.ai',
    description: 'Access your eligibly.ai dashboard and manage tender alerts and scoring.',
    url: 'https://eligibly.ai/en/login'
  },
  mentionslegales: {
    title: 'Legal information – eligibly.ai',
    description: 'Legal information for eligibly.ai, the AI platform for public procurement.',
    url: 'https://eligibly.ai/en/legal'
  },
  confidentialite: {
    title: 'Privacy policy – eligibly.ai',
    description: 'How we protect your personal data. GDPR‑compliant.',
    url: 'https://eligibly.ai/en/privacy'
  },
  cgu: {
    title: 'Terms & Conditions – eligibly.ai',
    description: 'Terms for using the eligibly.ai platform for public procurement.',
    url: 'https://eligibly.ai/en/terms'
  }
} as const;