import { Helmet } from "react-helmet-async";

/**
 * Balisage structuré des pages clés (/produit, /tarifs).
 * - SoftwareApplication : catégorie BusinessApplication, offre pilote 14 j sans CB, à partir de 10 €/lead.
 * - FAQPage : questions réellement posées par les cabinets (fenêtre 90 jours, sources officielles, exclusivité).
 */

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Pourquoi une fenêtre de contact de 90 jours après l'immatriculation ?",
    a: "Un dirigeant qui vient d'immatriculer sa société choisit son expert-comptable dans les premières semaines : il doit ouvrir un compte bancaire pro, cadrer sa TVA, sa rémunération et son exercice. Passé 90 jours, la mission est le plus souvent déjà attribuée et le coût d'acquisition explose. Eligibly ordonne les leads en fonction de cette fenêtre : date de Kbis, ancienneté du signal, priorité de rappel.",
  },
  {
    q: "D'où viennent les données ? Sont-elles conformes au RGPD ?",
    a: "Les sociétés proviennent exclusivement de sources officielles françaises : INPI (Registre national des entreprises), INSEE Sirene et BODACC. L'enrichissement (email professionnel, profil LinkedIn du dirigeant) porte sur des données professionnelles, avec base légale d'intérêt légitime, information et droit d'opposition. Hébergement en Union européenne, aucune revente à des tiers.",
  },
  {
    q: "Les leads sont-ils exclusifs ou mutualisés entre plusieurs cabinets ?",
    a: "Les leads ne sont pas mutualisés : un lead livré à votre cabinet n'est pas livré simultanément à un cabinet concurrent sur la même zone et le même ICP. C'est la différence de fond avec l'achat de fichiers SIRET ou de leads revendus plusieurs fois.",
  },
  {
    q: "Que contient concrètement un lead ?",
    a: "Identité société (dénomination, SIREN, forme juridique, capital, adresse, code NAF, date d'immatriculation), dirigeant (nom, email professionnel, LinkedIn, téléphone si disponible, primo-entrepreneur ou récidiviste), signaux cabinet (absence de CAC mandaté, verticale, procédure, holding), score 0-100 avec ses trois raisons clés et le canal d'approche recommandé.",
  },
  {
    q: "Comment le tarif est-il calculé ?",
    a: "À partir de 10 € le lead qualifié. Le tarif final est établi sur devis après un cadrage de 20 minutes, selon le volume mensuel visé, la zone géographique et la taille du cabinet : plus le volume est élevé, plus le coût unitaire baisse. Engagement mensuel, résiliable.",
  },
  {
    q: "Comment démarrer sans engagement ?",
    a: "Le pilote dure 14 jours, sans carte bancaire : paramétrage de votre ICP par notre équipe, digest quotidien à 7h, puis bilan chiffré (leads livrés, taux de réponse, rendez-vous obtenus) avant toute décision.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Eligibly",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Sales Intelligence",
  operatingSystem: "Web",
  url: "https://eligibly.ai/produit",
  description:
    "Eligibly détecte chaque SASU/SAS/EURL/SARL/SEL fraîchement immatriculée en France à partir des sources officielles (INPI, INSEE Sirene, BODACC), la score sur l'ICP du cabinet d'expertise comptable et livre chaque matin à 7h un digest avec plan d'action dans la fenêtre de contact de 90 jours.",
  inLanguage: "fr-FR",
  publisher: { "@type": "Organization", name: "Eligibly", url: "https://eligibly.ai" },
  featureList: [
    "Consolidation des sources officielles INPI, INSEE Sirene et BODACC",
    "Filtres amont : forme juridique, capital, zone, verticale, CAC, procédure, holding",
    "Scoring 0-100 expliqué (3 raisons par lead)",
    "Canal d'approche recommandé (WhatsApp, LinkedIn, email, appel, courrier)",
    "Digest quotidien livré à 7h par email, Slack, Teams ou webhook",
  ],
  offers: {
    "@type": "Offer",
    name: "Pilote 14 jours gratuit, sans carte bancaire",
    price: "10",
    priceCurrency: "EUR",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "10",
      priceCurrency: "EUR",
      unitText: "lead qualifié",
      minPrice: "10",
    },
    description:
      "Pilote de 14 jours gratuit et sans carte bancaire, puis à partir de 10 € le lead qualifié. Tarif final sur devis selon le volume mensuel et la taille du cabinet.",
    availability: "https://schema.org/InStock",
    url: "https://eligibly.ai/tarifs",
    eligibleRegion: { "@type": "Country", name: "France" },
  },
};

/** Preuves écrites en dur dans le HTML — jamais en compteur animé. */
export const CabinetProofBlock = () => (
  <section aria-label="Preuves et sources Eligibly" className="border-t border-border/60 bg-muted/30 py-10">
    <div className="container mx-auto max-w-5xl px-4">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        Ce sur quoi repose Eligibly
      </h2>
      <dl className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <dt className="text-sm font-semibold text-foreground">Conçu avec 4 cabinets partenaires en France</dt>
          <dd className="mt-1 text-sm text-muted-foreground">
            Filtres, scoring et format du digest définis avec leurs associés et collaborateurs.
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-foreground">Sources officielles uniquement</dt>
          <dd className="mt-1 text-sm text-muted-foreground">
            INPI (Registre national des entreprises), INSEE Sirene, BODACC — rafraîchis chaque nuit.
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-foreground">Fenêtre de contact : 90 jours</dt>
          <dd className="mt-1 text-sm text-muted-foreground">
            Priorisation des leads sur la date d'immatriculation, période où la mission se décide.
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-foreground">Données non mutualisées</dt>
          <dd className="mt-1 text-sm text-muted-foreground">
            Un lead livré à votre cabinet n'est pas revendu à un cabinet concurrent sur la même zone.
          </dd>
        </div>
      </dl>
    </div>
  </section>
);

export const ProduitJsonLd = () => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(softwareJsonLd)}</script>
    <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
  </Helmet>
);

export const TarifsJsonLd = () => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
  </Helmet>
);
