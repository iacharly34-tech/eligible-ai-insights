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
  clients: "500+",
  enterprises: "150+", 
  sources: "200+",
  precision: "94%",
  timeSaved: "6h",
  opportunitiesPerDay: "15+",
  successRate: "+35%",
  marketValue: "80Md€",
  dailyTenders: "300+"
} as const;

// ============= FONCTIONNALITÉS CORE =============
export const CORE_FEATURES = [
  {
    icon: Database,
    title: "Surveillance Multi-Sources",
    description: "Accès automatisé à plus de 200 sources officielles françaises et européennes",
    shortDesc: "200+ sources surveillées automatiquement",
    details: ["BOAMP", "Marchés Publics", "TED eTendering", "PLACE", "Profils acheteurs", "Sites régionaux"],
    color: "primary",
    stat: COMPANY_STATS.sources,
    benefit: "Couverture exhaustive du marché français et européen"
  },
  {
    icon: Brain,
    title: "Analyse IA Intelligente",
    description: "Analyse sémantique avancée pour détecter les opportunités les plus pertinentes",
    shortDesc: "IA avancée pour une détection précise",
    details: ["Analyse sémantique", "Scoring intelligent", "Filtrage automatique", "Apprentissage continu"],
    color: "primary", 
    stat: COMPANY_STATS.precision,
    benefit: "Précision maximale dans la détection d'opportunités"
  },
  {
    icon: Target,
    title: "Détection Ciblée",
    description: "Identification automatique des appels d'offres correspondant à votre expertise",
    shortDesc: "Ciblage précis selon vos critères métier",
    details: ["Critères personnalisés", "Matching intelligent", "Score de compatibilité", "Priorisation automatique"],
    color: "primary",
    stat: COMPANY_STATS.opportunitiesPerDay,
    benefit: "Focus sur les marchés à fort potentiel"
  },
  {
    icon: Zap,
    title: "Alertes Instantanées",
    description: "Notifications en temps réel via vos canaux de communication préférés",
    shortDesc: "Notifications multi-canaux en temps réel",
    details: ["Slack", "Email", "Microsoft Teams", "Mobile", "API", "Webhooks"],
    color: "primary",
    stat: "Instantané",
    benefit: "Réactivité maximale sur les nouvelles opportunités"
  }
] as const;

// ============= BÉNÉFICES MESURABLES =============
export const MEASURABLE_BENEFITS = [
  {
    icon: Clock,
    title: "Économisez du temps précieux",
    description: `Automatisez votre veille et économisez ${COMPANY_STATS.timeSaved} par semaine`,
    stat: COMPANY_STATS.timeSaved,
    color: "primary",
    details: "Fini la veille manuelle chronophage"
  },
  {
    icon: Target,
    title: "Augmentez votre taux de succès",
    description: `${COMPANY_STATS.successRate} d'amélioration du taux de réponse aux appels d'offres`,
    stat: COMPANY_STATS.successRate,
    color: "primary",
    details: "Ciblez mieux, gagnez plus"
  },
  {
    icon: Globe,
    title: "Surveillez tout le marché",
    description: `${COMPANY_STATS.sources} sources officielles surveillées automatiquement`,
    stat: COMPANY_STATS.sources,
    color: "primary",
    details: "Couverture complète France & Europe"
  },
  {
    icon: Star,
    title: "Détectez plus d'opportunités",
    description: `${COMPANY_STATS.opportunitiesPerDay} opportunités qualifiées détectées quotidiennement`,
    stat: COMPANY_STATS.opportunitiesPerDay,
    color: "primary",
    details: "Identification intelligente et personnalisée"
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
    subtitle: `Rejoignez les ${COMPANY_STATS.enterprises} entreprises qui utilisent notre IA pour détecter automatiquement les meilleures opportunités de marchés publics avec ${COMPANY_STATS.precision} de précision.`,
    features: [
      `${COMPANY_STATS.opportunitiesPerDay} opportunités qualifiées détectées quotidiennement`,
      `${COMPANY_STATS.precision} de précision grâce à notre IA avancée`,
      `${COMPANY_STATS.timeSaved} économisées par semaine en automatisation`
    ]
  },
  product: {
    title: "Notre plateforme IA complète",
    subtitle: "Découvrez comment notre intelligence artificielle révolutionne la veille commerciale des marchés publics avec une efficacité et une précision remarquables."
  },
  solutions: {
    title: "Une solution adaptée à chaque profil métier", 
    subtitle: "Notre IA s'adapte aux besoins spécifiques de votre secteur et optimise votre performance commerciale sur les marchés publics."
  }
} as const;