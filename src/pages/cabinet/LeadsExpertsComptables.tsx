import { LandingCabinetLayout } from "./LandingCabinetLayout";

const LeadsExpertsComptables = () => (
  <LandingCabinetLayout
    seoTitle="Leads pour experts-comptables — sociétés fraîchement immatriculées | Eligibly"
    seoDescription="Recevez chaque semaine 100 à 300 sociétés SASU, SAS, EURL et SARL immatriculées dans votre zone, filtrées ICP, scorées et prêtes à contacter. Sources INPI · Sirene · BODACC."
    canonicalPath="/leads-experts-comptables"
    eyebrow="Leads experts-comptables"
    h1a="Vos prochains clients"
    h1b="viennent d'immatriculer"
    h1c="leur société."
    intro="Chaque semaine, Eligibly livre 100 à 300 sociétés fraîchement immatriculées dans votre zone, filtrées sur vos critères ICP, scorées et prêtes à être contactées. Sans fichier générique, sans doublon, sans dossier déjà signé ailleurs."
    bullets={[
      "Sources officielles INPI · Sirene · BODACC — hébergement France, conformité RGPD",
      "Filtres amont : CAC mandaté, procédures collectives, holdings pures, serial créateurs exclus",
      "Score expliqué et canal d'approche recommandé pour chaque lead",
      "Livraison email + Slack + Teams + export CSV / CRM",
    ]}
    ctaPrimary="Demander 3 leads test"
    ctaNote="Livrés sous 48 h — sans engagement ni CB."
    sections={[
      {
        title: "Un lead qualifié, ce n'est pas juste un SIRET",
        body: (
          <>
            <p>Les fichiers d'immatriculation vendus au SIRET livrent une donnée brute : nom de société, code NAF, date d'immatriculation, adresse. À votre équipe de trier, dédupliquer, vérifier la solvabilité, éliminer les holdings pures et croiser avec les publications BODACC. Un temps de qualification qui absorbe 3 à 5 heures par semaine et par collaborateur.</p>
            <p>Eligibly livre l'étape d'après : chaque société entrante passe par 6 filtres amont (CAC obligatoire, procédure collective, dissolution, holding pure, serial entrepreneur, ancienneté &gt; 90 jours). Ce qui reste : un vivier adressable, priorisé selon vos critères de cabinet.</p>
          </>
        ),
      },
      {
        title: "Ce que vous recevez, concrètement",
        body: (
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Fiche société</strong> : dénomination, SIREN, forme juridique, capital, code NAF, date d'immatriculation, adresse du siège.</li>
            <li><strong>Fiche dirigeant</strong> : nom, fonction, email professionnel vérifié, profil LinkedIn quand disponible, historique de mandats.</li>
            <li><strong>Score 0–100</strong> avec les 3 raisons clés : signaux positifs, points à vérifier, priorité.</li>
            <li><strong>Recommandation d'approche</strong> : canal (LinkedIn, email, appel, Instagram, courrier) et accroche prête à personnaliser.</li>
          </ul>
        ),
      },
      {
        title: "Pour qui c'est fait",
        body: (
          <p>Cabinets d'expertise comptable de 3 à 80 collaborateurs qui veulent structurer un flux d'acquisition régulier sans dépendre d'un annuaire mutualisé ni recruter un business developer à plein temps. Particulièrement adapté aux cabinets verticalisés (freelances tech, professions libérales, restauration, artisanat, e-commerce, holdings patrimoniales).</p>
        ),
      },
    ]}
    faq={[
      { q: "Quelle est la différence avec un fichier de SIRET type PrimoLead ?", a: "Un fichier de SIRET vous livre une liste brute filtrée par département et forme juridique. Eligibly vous livre la même donnée, mais scorée par pertinence pour votre cabinet, enrichie du contact dirigeant, et accompagnée d'une accroche prête à envoyer. Moins de tri, plus d'action." },
      { q: "D'où viennent les données ?", a: "Registres officiels français : INPI (registre national des entreprises), Sirene (INSEE), BODACC (bulletin officiel). Enrichissements dirigeant via partenaires contractuels conformes RGPD, sans transfert hors UE." },
      { q: "Vous garantissez des RDV ?", a: "Non. Nous garantissons la qualité de la donnée (remplacement gratuit des leads non conformes aux filtres amont). Le taux de conversion en RDV puis en lettre de mission dépend de votre exécution commerciale. C'est un engagement de moyens, pas de résultat." },
      { q: "Les leads sont-ils exclusifs à mon cabinet ?", a: "Oui. Un lead livré à votre cabinet n'est pas re-livré à un autre cabinet la même semaine dans votre zone géographique. Pas de mutualisation." },
    ]}
    related={[
      { label: "Prospection cabinet comptable : la méthode 2026", href: "/prospection-cabinet-comptable" },
      { label: "Pourquoi ce lead est prioritaire (fiche type)", href: "/pourquoi-ce-lead-est-prioritaire" },
      { label: "Canaux d'activation : LinkedIn, email, appel, courrier", href: "/canaux-activation" },
      { label: "Fichier de SIRET vs plan d'action (analyse)", href: "/blog/fichier-siret-vs-plan-action-comptable" },
    ]}
  />
);

export default LeadsExpertsComptables;