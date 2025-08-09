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
    title: "Eligible.ai - IA pour appels d'offres publics | Veille automatisée",
    description: "Plateforme IA qui identifie automatiquement les meilleures opportunités d'appels d'offres publics. 600+ sources surveillées, alertes personnalisées, 94% de précision.",
    url: "https://eligible.ai/"
  },
  produit: {
    title: "Produit Eligible.ai - Plateforme IA pour marchés publics",
    description: "Découvrez notre solution IA complète : surveillance multi-sources, scoring intelligent, alertes en temps réel pour optimiser vos réponses aux appels d'offres.",
    url: "https://eligible.ai/produit"
  },
  solutions: {
    title: "Solutions Eligible.ai - IA adaptée à votre secteur",
    description: "Solutions IA personnalisées par secteur d'activité pour optimiser votre veille commerciale et remporter plus de marchés publics.",
    url: "https://eligible.ai/solutions"
  },
  tarifs: {
    title: "Tarifs Eligible.ai - Plans et pricing de notre IA",
    description: "Découvrez nos offres transparentes pour accéder à notre plateforme IA de veille des marchés publics. Essai 7 jours sans engagement.",
    url: "https://eligible.ai/tarifs"
  },
  ressources: {
    title: "Ressources Eligible.ai - Guides et documentation IA",
    description: "Ressources, guides et documentation pour optimiser votre utilisation de notre IA de veille des marchés publics. Études de cas et bonnes pratiques.",
    url: "https://eligible.ai/ressources"
  },
  apropos: {
    title: "À propos d'Eligible.ai - Notre mission et équipe IA",
    description: "Découvrez Eligible.ai, la startup française qui révolutionne la veille des marchés publics grâce à l'intelligence artificielle.",
    url: "https://eligible.ai/a-propos"
  },
  demo: {
    title: "Démo Eligible.ai - Testez notre IA",
    description: "Réservez votre démonstration personnalisée de notre plateforme IA pour les marchés publics. Essai 7 jours inclus.",
    url: "https://eligible.ai/demo"
  },
  connexion: {
    title: "Connexion Eligible.ai - Accès à votre compte IA",
    description: "Connectez-vous à votre compte Eligible.ai pour accéder à votre tableau de bord IA et gérer vos alertes de marchés publics.",
    url: "https://eligible.ai/connexion"
  },
  mentionslegales: {
    title: "Mentions légales - Eligible.ai",
    description: "Mentions légales et informations juridiques d'Eligible.ai, plateforme IA pour les marchés publics.",
    url: "https://eligible.ai/mentions-legales"
  },
  confidentialite: {
    title: "Politique de confidentialité - Eligible.ai",
    description: "Politique de confidentialité et protection des données personnelles sur Eligible.ai, conforme RGPD.",
    url: "https://eligible.ai/confidentialite"
  },
  cgu: {
    title: "Conditions générales d'utilisation - Eligible.ai",
    description: "Conditions générales d'utilisation de la plateforme IA Eligible.ai pour les marchés publics.",
    url: "https://eligible.ai/cgu"
  }
} as const;