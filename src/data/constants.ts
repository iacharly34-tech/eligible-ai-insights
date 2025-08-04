import { 
  Database, 
  Brain, 
  Target, 
  Zap, 
  Clock, 
  Globe, 
  Award, 
  Star,
  Shield,
  TrendingUp
} from "lucide-react";

// ============= STATISTIQUES UNIFIÉES =============
export const COMPANY_STATS = {
  clients: "2000+",
  enterprises: "500+", 
  sources: "600+",
  precision: "98%",
  timeSaved: "95%",
  opportunitiesPerDay: "23",
  successRate: "47%"
} as const;

// ============= FONCTIONNALITÉS CORE =============
export const CORE_FEATURES = [
  {
    icon: Database,
    title: "Connexion Multi-Sources",
    description: "Accès automatisé à 600+ sources officielles françaises et européennes",
    shortDesc: "600+ sources surveillées automatiquement",
    details: ["BOAMP", "Marchés Publics", "TED eTendering", "Simap", "Find a Tender", "Vergabe24"],
    color: "blue",
    stat: COMPANY_STATS.sources,
    benefit: "Coverage exhaustive du marché français et européen"
  },
  {
    icon: Brain,
    title: "Analyse IA Avancée",
    description: "Triple modèle IA (GPT-4, Claude, Mistral) pour une analyse exhaustive et précise",
    shortDesc: "IA multi-modèles pour une précision maximale",
    details: ["Analyse sémantique", "Scoring intelligent", "Recommandations expertes", "Machine Learning"],
    color: "purple", 
    stat: COMPANY_STATS.precision,
    benefit: "Analyse fine grâce aux modèles multi-LLM"
  },
  {
    icon: Target,
    title: "Scoring Intelligent",
    description: "Évaluation automatique de la pertinence et du potentiel de chaque marché public",
    shortDesc: "Priorisation automatique des meilleures opportunités",
    details: ["Critères personnalisés", "Algorithme adaptatif", "Score de compatibilité", "Ranking automatique"],
    color: "green",
    stat: COMPANY_STATS.opportunitiesPerDay,
    benefit: "Détection intelligente des marchés à fort potentiel"
  },
  {
    icon: Zap,
    title: "Notifications Temps Réel",
    description: "Alertes instantanées via Slack, email et intégrations personnalisées",
    shortDesc: "Alertes multi-canaux instantanées",
    details: ["Slack", "Email", "Microsoft Teams", "API", "Webhooks", "SMS"],
    color: "orange",
    stat: "Temps réel",
    benefit: "Réactivité maximale sur les opportunités"
  }
] as const;

// ============= BÉNÉFICES MESURABLES =============
export const MEASURABLE_BENEFITS = [
  {
    icon: Clock,
    title: `${COMPANY_STATS.timeSaved} de temps économisé`,
    description: "Automatisation complète de la veille manuelle",
    stat: COMPANY_STATS.timeSaved,
    color: "blue"
  },
  {
    icon: Globe,
    title: `${COMPANY_STATS.sources} sources surveillées`,
    description: "Coverage exhaustive du marché français et européen",
    stat: COMPANY_STATS.sources,
    color: "green"
  },
  {
    icon: Star,
    title: `${COMPANY_STATS.opportunitiesPerDay} opportunités premium/jour`,
    description: "Détection intelligente des marchés à fort potentiel",
    stat: COMPANY_STATS.opportunitiesPerDay,
    color: "purple"
  },
  {
    icon: Brain,
    title: `${COMPANY_STATS.precision} de précision IA`,
    description: "Analyse fine grâce aux modèles multi-LLM",
    stat: COMPANY_STATS.precision,
    color: "orange"
  }
] as const;

// ============= CTA STANDARDISÉS =============
export const STANDARD_CTAS = {
  primary: {
    text: "Essai gratuit 7 jours",
    description: "Testez toutes les fonctionnalités sans engagement"
  },
  secondary: {
    text: "Démonstration personnalisée", 
    description: "Découvrez notre solution adaptée à vos besoins"
  },
  demo: {
    text: "Voir une démonstration",
    description: "Présentation interactive de la plateforme"
  }
} as const;

// ============= SOURCES DE DONNÉES =============
export const DATA_SOURCES = {
  france: [
    { name: "BOAMP", desc: "Bulletin officiel des annonces de marchés publics", logo: "🏛️", url: "https://www.boamp.fr", official: true },
    { name: "Marchés Publics", desc: "Plateforme nationale des marchés publics", logo: "🇫🇷", url: "https://www.marches-publics.gouv.fr", official: true },
    { name: "PLACE", desc: "Plateforme des achats de l'État", logo: "💼", url: "https://www.economie.gouv.fr/daj/place", official: true },
    { name: "AWS DUME", desc: "Document unique de marché européen", logo: "📋", url: "https://www.economie.gouv.fr/daj/dume", official: true },
    { name: "e-Marchés", desc: "Solutions de dématérialisation régionales", logo: "🌍", url: "https://www.e-marches.com", official: false },
    { name: "Achat Public", desc: "Marchés publics territoriaux", logo: "🏘️", url: "https://www.achatpublic.com", official: false }
  ],
  europe: [
    { name: "TED eTendering", desc: "Tenders Electronic Daily - Journal officiel UE", logo: "🇪🇺", url: "https://ted.europa.eu", official: true },
    { name: "Simap", desc: "Système d'information sur les marchés publics suisses", logo: "🇨🇭", url: "https://www.simap.ch", official: true },
    { name: "Find a Tender", desc: "Service gouvernemental britannique", logo: "🇬🇧", url: "https://www.find-tender.service.gov.uk", official: true },
    { name: "Vergabe24", desc: "Plateforme allemande des marchés publics", logo: "🇩🇪", url: "https://www.vergabe24.de", official: true },
    { name: "Mercell", desc: "Plateforme nordique des appels d'offres", logo: "🌊", url: "https://www.mercell.com", official: false },
    { name: "eNotices", desc: "Système européen de notification", logo: "📢", url: "https://enotices.eu", official: true }
  ]
} as const;

// ============= TRUST INDICATORS =============
export const TRUST_INDICATORS = [
  {
    icon: Shield,
    text: "Conforme RGPD",
    description: "Protection maximale de vos données"
  },
  {
    icon: Clock,
    text: "Sans engagement", 
    description: "Annulation possible à tout moment"
  },
  {
    icon: Award,
    text: "Support dédié",
    description: "Accompagnement personnalisé inclus"
  }
] as const;

// ============= HERO MESSAGES =============
export const HERO_MESSAGES = {
  home: {
    title: "Transformez votre veille commerciale avec l'",
    highlight: "Intelligence Artificielle",
    end: "des marchés publics",
    subtitle: `Rejoignez les ${COMPANY_STATS.enterprises} entreprises qui font confiance à notre IA pour identifier automatiquement les meilleures opportunités de marchés publics avec ${COMPANY_STATS.precision} de précision.`,
    features: [
      `${COMPANY_STATS.opportunitiesPerDay} opportunités premium détectées par jour`,
      `${COMPANY_STATS.precision} de précision grâce à notre IA multi-modèles`,
      `${COMPANY_STATS.timeSaved} de temps économisé en automatisation`
    ]
  },
  product: {
    title: "Notre plateforme IA complète",
    subtitle: "Découvrez comment notre intelligence artificielle révolutionne la veille commerciale des marchés publics avec une précision et une rapidité inégalées."
  },
  solutions: {
    title: "Une solution pour chaque profil métier", 
    subtitle: "Notre IA s'adapte aux besoins spécifiques de votre secteur et de votre rôle pour maximiser votre performance commerciale."
  }
} as const;