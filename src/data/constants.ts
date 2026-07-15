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
  TrendingUp,
  FileSearch,
  FileText,
  CheckSquare,
  BarChart3,
  Lightbulb,
  BookOpen
} from "lucide-react";

// ============= STATISTIQUES AVEC SOURCES =============
export const COMPANY_STATS = {
  clients: "premiers utilisateurs",
  enterprises: "cabinets pilotes",
  sources: "sources publiques officielles",
  precision: "92%",
  timeSaved: "10h",
  leadsPerWeek: "150+",
  successRate: "+3x",
  marketValue: "310 000+ sociétés créées en France en 2024",
  weeklyLeads: "150+"
} as const;

// ============= SOURCES ET MÉTHODOLOGIE =============
export const STATS_SOURCES = {
  marketValue: {
    value: "310 000+",
    source: "INSEE — Créations d'entreprises",
    year: "2024",
    note: "SASU, SAS, EURL, SARL et SEL créées en France en 2024 (hors micro-entreprises)",
    url: "https://www.insee.fr/fr/statistiques/serie/010537345"
  },
  sources: {
    value: "Sources publiques",
    source: "Analyse Eligibly.ai",
    year: "2025",
    note: "Bases publiques d'immatriculation (SIRENE), annonces légales, signaux professionnels ouverts",
    methodology: "Ingestion quotidienne des données publiques d'immatriculation et enrichissement par signaux ouverts"
  },
  aiEfficiency: {
    value: "10h / semaine",
    source: "Retour des cabinets pilotes Eligibly",
    year: "2026",
    note: "Temps économisé par un chargé de développement en remplaçant la veille manuelle SIRENE/BODACC/LinkedIn",
    methodology: "Estimation moyenne sur 12 cabinets pilotes utilisant Eligibly en test bêta"
  },
  precision: {
    value: "92%",
    source: "Validation cabinets pilotes",
    year: "2026",
    note: "Taux de leads jugés pertinents par les cabinets sur les 1 000 premiers scorés",
    methodology: "Revue qualitative croisée par 12 cabinets sur les leads Top 200 hebdo"
  },
  weeklyLeads: {
    value: "150+",
    source: "Volumétrie moyenne cabinet pilote",
    year: "2026",
    note: "Nombre moyen de nouveaux entrepreneurs pertinents détectés chaque semaine par cabinet, sur zone type Île-de-France",
    methodology: "Moyenne observée après filtres ICP cabinet (zone, activité, forme juridique)"
  }
} as const;

// ============= FONCTIONNALITÉS CORE =============
export const CORE_FEATURES = [
  {
    key: "detection",
    icon: Database,
    description: "Détection continue des nouvelles entreprises immatriculées en France à partir des données publiques SIRENE et des annonces légales.",
    shortDesc: "Nouvelles SASU/SAS/EURL/SARL/SEL détectées chaque jour",
    details: ["SIRENE", "BODACC", "Annonces légales", "Registre du commerce", "Signaux professionnels ouverts"],
    color: "primary",
    stat: COMPANY_STATS.sources,
    benefit: "Couverture nationale complète des nouveaux entrepreneurs"
  },
  {
    key: "scoring",
    icon: Brain,
    description: "Chaque lead reçoit un score de priorité 0–100 fondé sur la forme juridique, l'activité, la localisation, le profil du dirigeant, le timing et les signaux business publics.",
    shortDesc: "Un score expliqué pour chaque lead",
    details: ["Forme juridique", "Activité", "Localisation", "Profil dirigeant", "Timing", "Signaux business"],
    color: "primary", 
    stat: COMPANY_STATS.precision,
    benefit: "Priorisation transparente : le cabinet comprend pourquoi ce lead vaut son temps"
  },
  {
    key: "fit",
    icon: Target,
    description: "Chaque lead est confronté à l'ICP du cabinet : zone géographique, activités cibles, formes juridiques acceptées, taille estimée, complexité probable.",
    shortDesc: "Fit cabinet, pas juste une ligne Excel",
    details: ["Zone géographique", "Activités cibles", "Formes juridiques", "Complexité probable", "Besoin estimé"],
    color: "primary",
    stat: COMPANY_STATS.weeklyLeads,
    benefit: "Focus sur les entrepreneurs qui correspondent vraiment au cabinet"
  },
  {
    key: "activation",
    icon: Zap,
    description: "Pour chaque lead, Eligibly recommande le meilleur canal d'approche et prépare le message : LinkedIn, email, appel, Instagram ou courrier à en-tête du cabinet.",
    shortDesc: "Canal recommandé + message préparé",
    details: ["LinkedIn", "Email", "Appel", "Instagram", "Courrier à en-tête"],
    color: "primary",
    stat: "5 canaux",
    benefit: "Une décision commerciale prête à exécuter, pas une ligne Excel"
  }
] as const;

// ============= FONCTIONNALITÉS AVANCÉES (Sales Assistant) =============
export const RESPONSE_FEATURES = [
  {
    key: "lead_feed",
    icon: FileSearch,
    title: "Lead Feed hebdomadaire",
    description: "Chaque semaine, le cabinet reçoit les nouvelles SASU, SAS, EURL, SARL de sa zone, filtrées par activité et niveau de potentiel.",
    details: ["Nouvelles immatriculations", "Filtres zone / activité / forme", "Livraison hebdo", "Export CSV / CRM"],
    stat: "150+",
    statLabel: "leads / semaine"
  },
  {
    key: "priority_score",
    icon: Lightbulb,
    title: "Score de priorité expliqué",
    description: "Chaque lead reçoit un score 0–100 avec ses raisons : forme juridique, activité, localisation, profil dirigeant, complexité probable, timing, signaux business.",
    details: ["Score 0–100", "Raisons du score", "Besoin probable", "Timing", "Signaux publics"],
    stat: "92%",
    statLabel: "leads jugés pertinents"
  },
  {
    key: "channel_recommendation",
    icon: FileText,
    title: "Canal d'approche recommandé",
    description: "LinkedIn pour les fondateurs B2B et consultants premium, Instagram pour restaurants et beauté, email pour les prospects avec adresse pro fiable, appel pour les leads très prioritaires, courrier à en-tête pour les professions traditionnelles.",
    details: ["LinkedIn", "Instagram", "Email", "Appel", "Courrier à en-tête"],
    stat: "5 canaux",
    statLabel: "recommandés par scoring"
  },
  {
    key: "compliance",
    icon: CheckSquare,
    title: "Conformité prospection B2B",
    description: "Données issues de sources publiques officielles, opt-out géré, blacklist cabinet, historique des sources, durée de conservation limitée. Cadre prospection B2B CNIL respecté.",
    details: ["Sources publiques", "Opt-out immédiat", "Blacklist cabinet", "Traçabilité", "Cadre CNIL B2B"],
    stat: "RGPD",
    statLabel: "prospection B2B conforme"
  },
  {
    key: "message_assistant",
    icon: BookOpen,
    title: "Message d'approche préparé",
    description: "Eligibly propose un message personnalisé par lead et par canal : ligne d'ouverture, contexte, valeur cabinet, appel à l'action. Le cabinet valide, envoie, garde le contrôle éditorial.",
    details: ["Personnalisation par lead", "Adapté au canal", "Validation obligatoire", "Modèles cabinet"],
    stat: "0",
    statLabel: "envoi automatique sans validation"
  },
  {
    key: "pipeline",
    icon: BarChart3,
    title: "Pilotage du pipeline",
    description: "Suivi des leads consultés, contactés, en discussion, gagnés. KPIs orientés business : taux de réponse, RDV générés, lettres de mission signées, revenu potentiel généré, temps économisé.",
    details: ["Leads contactés", "Taux de réponse", "RDV générés", "Lettres de mission", "Revenu potentiel"],
    stat: "KPI",
    statLabel: "business, pas fichier"
  }
] as const;

// ============= BÉNÉFICES MESURABLES =============
export const MEASURABLE_BENEFITS = [
  {
    icon: Clock,
    title: "Économisez du temps de veille",
    description: `Fini la veille manuelle SIRENE / annonces légales / LinkedIn : ${COMPANY_STATS.timeSaved} économisées par semaine pour votre chargé de développement.`,
    stat: COMPANY_STATS.timeSaved,
    color: "primary",
    details: "10 h / semaine récupérées"
  },
  {
    icon: Target,
    title: "Multipliez votre taux de réponse",
    description: `Priorisation et message adapté au canal : ${COMPANY_STATS.successRate} de taux de réponse par rapport à une prospection sur fichier brut.`,
    stat: COMPANY_STATS.successRate,
    color: "primary",
    details: "Le bon message, au bon lead, sur le bon canal"
  },
  {
    icon: Globe,
    title: "Couverture nationale des nouveaux entrepreneurs",
    description: `Toutes les SASU, SAS, EURL, SARL immatriculées en France sont candidates ; ne sortent du filtre que celles qui matchent l'ICP du cabinet.`,
    stat: COMPANY_STATS.sources,
    color: "primary",
    details: "Sources publiques SIRENE + annonces légales"
  },
  {
    icon: Star,
    title: "Détectez plus de leads pertinents",
    description: `${COMPANY_STATS.leadsPerWeek} nouveaux entrepreneurs pertinents détectés chaque semaine, scorés et priorisés pour votre cabinet.`,
    stat: COMPANY_STATS.leadsPerWeek,
    color: "primary",
    details: "Chaque lead scoré, expliqué, activable"
  }
] as const;

// ============= CTA STANDARDISÉS =============
export const STANDARD_CTAS = {
  primary: {
    text: "Pilote gratuit 14 jours",
    description: "Testez Eligibly sur votre zone, sans carte bancaire, sans engagement"
  },
  secondary: {
    text: "Réserver une démo",
    description: "20 minutes pour voir Eligibly sur les données réelles de votre zone"
  },
  demo: {
    text: "Voir une démonstration",
    description: "Démo interactive : 10 leads scorés en direct"
  }
} as const;

// ============= SOURCES DE DONNÉES =============
export const DATA_SOURCES = {
  france: [
    { name: "SIRENE", desc: "Base des entreprises françaises — INSEE", logo: "🏛️", url: "https://www.sirene.fr", official: true },
    { name: "BODACC", desc: "Bulletin officiel des annonces civiles et commerciales", logo: "📢", url: "https://www.bodacc.fr", official: true },
    { name: "INPI", desc: "Registre national du commerce et des sociétés", logo: "📋", url: "https://data.inpi.fr", official: true },
    { name: "Data.gouv.fr", desc: "Créations d'entreprises — données ouvertes", logo: "🇫🇷", url: "https://www.data.gouv.fr", official: true },
    { name: "Annonces légales", desc: "Journaux d'annonces légales et publications officielles", logo: "🗞️", url: "https://actulegales.fr", official: true },
    { name: "Signaux publics", desc: "LinkedIn public, sites web, présence en ligne", logo: "🌐", url: "https://www.linkedin.com", official: false }
  ],
  europe: []
} as const;

// ============= TRUST INDICATORS =============
export const TRUST_INDICATORS = [
  {
    icon: Shield,
    text: "Conforme RGPD",
    description: "Prospection B2B conforme au cadre CNIL, opt-out immédiat"
  },
  {
    icon: Clock,
    text: "Sans engagement",
    description: "14 jours de pilote gratuit, résiliation à tout moment"
  },
  {
    icon: Award,
    text: "Support cabinet dédié",
    description: "Onboarding, calibrage ICP et suivi par un référent Eligibly"
  }
] as const;

// ============= HERO MESSAGES =============
export const HERO_MESSAGES = {
  home: {
    title: "Vos prochains clients sont ",
    highlight: "fraîchement immatriculés",
    end: "",
    subtitle: `Chaque semaine, recevez les nouveaux entrepreneurs à fort potentiel pour votre cabinet : priorisés par score, avec le canal d'approche recommandé — LinkedIn, email, appel, Instagram ou courrier à en-tête.`,
    features: [
      `${COMPANY_STATS.leadsPerWeek} nouveaux entrepreneurs pertinents détectés chaque semaine`,
      `${COMPANY_STATS.precision} de leads jugés pertinents par les cabinets pilotes`,
      `${COMPANY_STATS.timeSaved} de veille manuelle économisées par semaine`
    ]
  },
  product: {
    title: "Détection, scoring, activation multicanale",
    subtitle: "Eligibly détecte les nouveaux entrepreneurs à fort potentiel pour votre cabinet, priorise chaque lead avec un score expliqué, et prépare l'approche commerciale adaptée au canal — LinkedIn, email, appel, Instagram ou courrier à en-tête."
  },
  solutions: {
    title: "Une approche adaptée à chaque type de cabinet",
    subtitle: "Que votre cabinet vise les fondateurs tech, les commerces locaux, les artisans ou les grands comptes, Eligibly calibre les filtres, le scoring et les canaux d'approche pour votre ICP."
  }
} as const;