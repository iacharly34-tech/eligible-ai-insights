import { LandingCabinetLayout } from "@/pages/cabinet/LandingCabinetLayout";

const ProspectionExpertComptable = () => (
  <LandingCabinetLayout
    seoTitle="Prospection expert-comptable : cadre, canaux et cadence (2026)"
    seoDescription="Prospection pour expert-comptable : cadre déontologique post-2014, sources de signaux (INPI, Sirene, BODACC), canaux (LinkedIn, email, appel, WhatsApp, courrier), cadence hebdomadaire et taux observés."
    canonicalPath="/prospection-expert-comptable"
    eyebrow="Prospection expert-comptable"
    h1a="Prospection"
    h1b="expert-comptable"
    h1c=": le cadre, les canaux, la cadence"
    intro="Prospecter en tant qu'expert-comptable est autorisé depuis 2014 et reste encadré. La difficulté n'est pas la légalité : c'est la régularité. Ce qui fonctionne, c'est un flux de signaux fiables, un canal choisi par lead et un rythme hebdomadaire tenable pour un associé déjà chargé."
    bullets={[
      "Cadre déontologique : ce qui est permis, ce qui reste interdit (sollicitation déloyale, démarchage intrusif)",
      "Signaux exploitables : immatriculations, changements de dirigeant, augmentations de capital, transferts de siège",
      "Fenêtre utile : un créateur choisit son cabinet dans les 30 à 90 jours suivant l'immatriculation",
      "Cadence réaliste : 2 h par semaine, 20 à 30 prises de contact, un canal par lead",
    ]}
    ctaPrimary="Demander 3 leads test"
    ctaNote="Livrés sous 48 h — sans engagement ni carte bancaire."
    sections={[
      {
        title: "Le cadre déontologique en clair",
        body: (
          <ul className="list-disc pl-5 space-y-2">
            <li>Le <strong>démarchage direct est autorisé</strong> depuis la réforme de 2014 (décret n° 2014-912).</li>
            <li>Restent proscrits : la <strong>sollicitation déloyale</strong>, le dénigrement d'un confrère, toute information trompeuse.</li>
            <li>Le <strong>secret professionnel</strong> et le <strong>RGPD</strong> encadrent les données utilisées : base légale d'intérêt légitime, droit d'opposition traité sans délai.</li>
            <li>En pratique : un message factuel, personnalisé, avec une sortie claire, ne pose aucun problème.</li>
          </ul>
        ),
      },
      {
        title: "Les signaux qui rendent un contact pertinent",
        body: (
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Immatriculation récente</strong> (0 à 90 jours) — le moment où le choix du cabinet se fait.</li>
            <li><strong>Changement de dirigeant ou de siège</strong> — souvent corrélé à un changement de cabinet.</li>
            <li><strong>Augmentation de capital, transformation</strong> — besoin juridique immédiat.</li>
            <li><strong>Premier recrutement</strong> — déclenche un besoin de paie.</li>
            <li><strong>À exclure</strong> : procédures collectives, holdings pures, dirigeants serial, dirigeant lui-même comptable.</li>
          </ul>
        ),
      },
      {
        title: "Quel canal pour quel lead",
        body: (
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>LinkedIn</strong> — dirigeants tech, conseil, startups. Taux de réponse élevé si le message est court et contextualisé.</li>
            <li><strong>Email</strong> — volume et traçabilité, à condition d'un objet spécifique à l'entreprise.</li>
            <li><strong>Appel</strong> — verticales de terrain (BTP, CHR, commerce) où LinkedIn est peu utilisé.</li>
            <li><strong>WhatsApp Business</strong> — très fort taux d'ouverture, à réserver aux dirigeants joignables en mobile pro.</li>
            <li><strong>Courrier en-tête</strong> — différenciant sur les dossiers à fort ARPU (holdings, professions libérales).</li>
          </ul>
        ),
      },
      {
        title: "Une semaine type, tenable",
        body: (
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Lundi 8h</strong> — lecture du digest : les 20 à 30 nouvelles sociétés de la zone, scorées.</li>
            <li><strong>Lundi 9h–10h</strong> — 20 prises de contact sur le canal recommandé, accroche prête à ajuster.</li>
            <li><strong>Mercredi</strong> — relance unique des non-réponses, autre canal.</li>
            <li><strong>Vendredi</strong> — qualification des réponses, rendez-vous positionnés, mise à jour du pipeline.</li>
          </ol>
        ),
      },
      {
        title: "Ce qu'il faut mesurer",
        body: (
          <ul className="list-disc pl-5 space-y-2">
            <li>Taux de réponse par canal et par verticale.</li>
            <li>Taux de mise en relation (réponse → rendez-vous).</li>
            <li>Taux de signature et honoraires récurrents moyens par client signé.</li>
            <li>Coût d'acquisition rapporté à la valeur annuelle du dossier.</li>
          </ul>
        ),
      },
    ]}
    faq={[
      { q: "Un expert-comptable peut-il prospecter directement ?", a: "Oui, depuis la réforme de 2014. Le démarchage est autorisé dès lors qu'il reste loyal, informatif et respectueux du secret professionnel et du RGPD." },
      { q: "Combien de temps consacrer à la prospection ?", a: "Deux heures par semaine, régulières, produisent plus qu'une journée par trimestre. La régularité compte davantage que le volume." },
      { q: "Faut-il recruter un commercial ?", a: "Pas nécessairement. Un business developer coûte 55 à 75 k€ chargés par an avec 6 à 9 mois de montée en charge. Un flux de leads scorés permet à un associé de tenir la cadence lui-même." },
      { q: "Quel taux de signature attendre ?", a: "Cela dépend de votre exécution et de votre visibilité en ligne. Les cabinets que nous accompagnons travaillent sur des hypothèses de 20 à 40 % de mise en relation vers rendez-vous." },
    ]}
    related={[
      { label: "Prospection cabinet comptable : la méthode complète", href: "/prospection-cabinet-comptable" },
      { label: "Canaux d'activation : WhatsApp, LinkedIn, email, appel", href: "/canaux-activation" },
      { label: "Comment trouver des clients pour un cabinet comptable", href: "/trouver-des-clients-cabinet-comptable" },
      { label: "Génération de leads pour experts-comptables", href: "/leads-experts-comptables" },
    ]}
  />
);

export default ProspectionExpertComptable;
