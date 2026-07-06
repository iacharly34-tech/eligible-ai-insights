import { Helmet } from "react-helmet-async";
import { LandingCabinetLayout } from "./LandingCabinetLayout";

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Eligibly",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Lead generation software for accounting firms",
  operatingSystem: "Web",
  description:
    "Logiciel vertical de génération de leads pour cabinets d'expertise comptable : détection quotidienne de SASU/SAS/EURL immatriculées, filtrage ICP, scoring expliqué et canaux d'activation.",
  url: "https://eligibly.ai/leads-experts-comptables",
  offers: {
    "@type": "Offer",
    price: "290",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  },
  provider: { "@type": "Organization", name: "Eligibly", url: "https://eligibly.ai" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Cabinets d'expertise comptable (3 à 80 collaborateurs)",
  },
  featureList: [
    "Détection quotidienne SASU/SAS/EURL immatriculées",
    "Filtres amont : CAC, procédures collectives, holdings pures, serial entrepreneurs",
    "Score 0–100 expliqué (3 raisons clés)",
    "Enrichissement dirigeant (email, LinkedIn)",
    "Recommandation de canal d'approche (LinkedIn, email, appel, courrier)",
    "Digest quotidien email · Slack · Teams · CSV · CRM",
    "Sources officielles INPI · Sirene · BODACC, hébergement France",
  ],
};

const LeadsExpertsComptables = () => (
  <>
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(softwareJsonLd)}</script>
    </Helmet>
    <LandingCabinetLayout
      seoTitle="Génération de leads pour experts-comptables — Eligibly"
      seoDescription="Logiciel de génération de leads vertical pour cabinets d'expertise comptable. Détection SASU/SAS immatriculées, scoring expliqué, canaux d'activation. Sources INPI · Sirene · BODACC. Pilote 14 j sans CB."
      canonicalPath="/leads-experts-comptables"
      eyebrow="Génération de leads experts-comptables"
      h1a="Génération de leads pour"
      h1b="experts-comptables"
      intro="Eligibly est un logiciel vertical de génération de leads B2B pour les cabinets d'expertise comptable. Chaque semaine, il livre 100 à 300 sociétés fraîchement immatriculées dans votre zone, filtrées sur vos critères ICP, scorées et prêtes à être contactées."
      bullets={[
        "Sources officielles INPI · Sirene · BODACC — hébergement France, conformité RGPD",
        "Filtres amont : CAC mandaté, procédures collectives, holdings pures, serial créateurs exclus",
        "Score expliqué (3 raisons clés) et canal d'approche recommandé pour chaque lead",
        "Livraison email + Slack + Teams + export CSV / CRM, digest quotidien",
      ]}
      ctaPrimary="Demander 3 leads test"
      ctaNote="Livrés sous 48 h — sans engagement ni CB."
      sections={[
        {
          title: "Les douleurs métier d'un cabinet qui prospecte en 2026",
          body: (
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Le bouche-à-oreille plafonne.</strong> Il apporte des dossiers de qualité mais reste imprévisible : impossible de piloter un budget de croissance dessus.</li>
              <li><strong>Les fichiers SIRET génériques saturent.</strong> Les mêmes créateurs sont contactés par 10 cabinets la même semaine.</li>
              <li><strong>Les annuaires mutualisés</strong> (leads revendus à plusieurs cabinets) tuent le closing et abîment la marque.</li>
              <li><strong>Recruter un business developer</strong> coûte 55–75 k€/an chargés, avec 6 à 9 mois de rampe.</li>
              <li><strong>Les créateurs signent vite.</strong> Une SASU fraîchement immatriculée choisit son expert-comptable en 30 à 60 jours.</li>
            </ul>
          ),
        },
        {
          title: "Les signaux détectés par Eligibly",
          body: (
            <>
              <p>Chaque nuit, Eligibly agrège et croise les publications officielles françaises pour détecter les événements pertinents pour un cabinet EC :</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Immatriculations récentes</strong> (SASU, SAS, EURL, SARL) — fenêtre 0 à 90 jours.</li>
                <li><strong>Nominations et changements de dirigeants</strong> (BODACC A).</li>
                <li><strong>Augmentations de capital, transferts de siège, transformations</strong> (BODACC A).</li>
                <li><strong>Radiations, dissolutions, procédures collectives</strong> — utilisés en filtre d'exclusion, jamais en cible.</li>
                <li><strong>Signaux d'activité</strong> : site web actif, ouverture d'un compte pro, embauche du premier salarié.</li>
              </ul>
            </>
          ),
        },
        {
          title: "Sources de données",
          body: (
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>INPI</strong> — Registre national des entreprises (données légales, dirigeants, statuts).</li>
              <li><strong>Sirene / INSEE</strong> — Répertoire SIRET/SIREN, codes NAF, adresses.</li>
              <li><strong>BODACC</strong> — Bulletin officiel des annonces civiles et commerciales.</li>
              <li><strong>Infogreffe</strong> — Publications légales complémentaires.</li>
              <li><strong>Enrichissement dirigeant</strong> : email professionnel vérifié + profil LinkedIn via partenaires contractuels conformes RGPD, sans transfert hors UE.</li>
            </ul>
          ),
        },
        {
          title: "Comment fonctionne le scoring",
          body: (
            <>
              <p>Chaque lead reçoit un score de 0 à 100 combinant trois familles de signaux :</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li><strong>Ajustement ICP</strong> — capital social, code NAF, forme juridique, département, profil du dirigeant.</li>
                <li><strong>Signaux d'intention</strong> — ancienneté d'immatriculation, présence web, embauche récente, absence de CAC, absence d'holding parent.</li>
                <li><strong>Filtres d'exclusion</strong> — procédures collectives, serial entrepreneur, dirigeant déjà expert-comptable, holding pure, doublons.</li>
              </ol>
              <p>Chaque score est accompagné des <strong>3 raisons clés</strong> qui l'ont produit. Pas de boîte noire.</p>
            </>
          ),
        },
        {
          title: "Canaux d'activation recommandés",
          body: (
            <p>Pour chaque lead, Eligibly recommande le canal d'approche le plus adapté (LinkedIn, email direct, appel, Instagram DM, courrier à en-tête) et pré-rédige une accroche personnalisée. Le temps de qualification passe de 3 h à 15 min par semaine et par ETP.</p>
          ),
        },
        {
          title: "Méthodologie RGPD & déontologie OEC",
          body: (
            <ul className="list-disc pl-5 space-y-2">
              <li>Toutes les données proviennent de <strong>registres publics français</strong> ou d'enrichissements légitimes (base légale : intérêt légitime — art. 6.1.f RGPD).</li>
              <li><strong>Hébergement France</strong>. Aucun transfert hors UE.</li>
              <li><strong>Droit d'opposition</strong> traité sous 48 h. Registre des traitements tenu à jour.</li>
              <li>Compatible avec le <strong>Code de déontologie de l'Ordre des Experts-Comptables</strong> : démarchage informatif, mentions professionnelles complètes.</li>
            </ul>
          ),
        },
        {
          title: "Ce qu'Eligibly ne fait pas (limites assumées)",
          body: (
            <ul className="list-disc pl-5 space-y-2">
              <li>Pas de garantie de RDV ni de lettre de mission — engagement de moyens sur la qualité de la donnée.</li>
              <li>Pas de scraping LinkedIn en violation des CGU.</li>
              <li>Pas de rachat/revente de fichiers tiers non traçables.</li>
              <li>Pas de couverture des créations &gt; 90 jours.</li>
            </ul>
          ),
        },
        {
          title: "Ce que vous recevez, concrètement",
          body: (
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Fiche société</strong> : dénomination, SIREN, forme juridique, capital, code NAF, date d'immatriculation, adresse.</li>
              <li><strong>Fiche dirigeant</strong> : nom, fonction, email professionnel vérifié, profil LinkedIn, historique de mandats.</li>
              <li><strong>Score 0–100</strong> avec les 3 raisons clés.</li>
              <li><strong>Recommandation d'approche</strong> : canal + accroche prête à personnaliser.</li>
            </ul>
          ),
        },
      ]}
      faq={[
        { q: "Eligibly est-il un logiciel de génération de leads pour experts-comptables ?", a: "Oui. Eligibly est un logiciel vertical de génération et de scoring de leads B2B conçu spécifiquement pour les cabinets d'expertise comptable français. Il détecte les SASU/SAS/EURL fraîchement immatriculées, applique vos filtres ICP, score chaque lead et recommande un canal d'approche." },
        { q: "Est-ce une alternative à PrimoLead ?", a: "Oui. PrimoLead est un fichier de créateurs d'entreprises filtré par département et forme juridique. Eligibly va plus loin : filtres amont, scoring expliqué, enrichissement dirigeant et recommandation d'accroche. Comparatif détaillé sur /alternatives-primolead-experts-comptables." },
        { q: "D'où viennent les données ?", a: "Registres officiels français : INPI, Sirene (INSEE), BODACC. Enrichissements dirigeant via partenaires contractuels conformes RGPD, sans transfert hors UE." },
        { q: "Vous garantissez des RDV ?", a: "Non. Nous garantissons la qualité de la donnée (remplacement gratuit des leads non conformes). Le taux de conversion en RDV puis en lettre de mission dépend de votre exécution commerciale. Engagement de moyens, pas de résultat." },
        { q: "Les leads sont-ils exclusifs à mon cabinet ?", a: "Oui. Un lead livré à votre cabinet n'est pas re-livré à un autre cabinet la même semaine dans votre zone géographique." },
        { q: "Combien ça coûte ?", a: "290 € HT / mois, tarif unique tout inclus. Pilote de 14 jours gratuit sans carte bancaire. Résiliable mensuellement." },
        { q: "Quels cabinets utilisent Eligibly ?", a: "Cabinets EC de 3 à 80 collaborateurs. Cas d'usage détaillés sur /cabinet/cas-usage." },
      ]}
      related={[
        { label: "Alternatives à PrimoLead pour cabinets EC", href: "/alternatives-primolead-experts-comptables" },
        { label: "Cas d'usage cabinets (index)", href: "/cabinet/cas-usage" },
        { label: "Glossaire prospection cabinet EC", href: "/cabinet/glossaire" },
        { label: "Prospection cabinet comptable : la méthode 2026", href: "/prospection-cabinet-comptable" },
        { label: "Pourquoi ce lead est prioritaire (fiche type)", href: "/pourquoi-ce-lead-est-prioritaire" },
        { label: "Canaux d'activation : LinkedIn, email, appel, courrier", href: "/canaux-activation" },
      ]}
    />
  </>
);

export default LeadsExpertsComptables;