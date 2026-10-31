import { LandingCabinetLayout } from "@/pages/cabinet/LandingCabinetLayout";
import { SafeLink } from "@/components/SafeLink";

const channels = [
  { c: "Recommandation client", v: "Faible, non pilotable", d: "Variable", cost: "Quasi nul", dep: "Satisfaction du portefeuille" },
  { c: "Prescripteurs (avocats, banques, CCI, incubateurs)", v: "Faible à moyen", d: "6 à 12 mois", cost: "Temps relationnel", dep: "Forte (un tiers décide)" },
  { c: "Fiche Google & référencement local", v: "Borné par la zone", d: "3 à 6 mois", cost: "Temps + éventuel prestataire", dep: "Algorithme Google" },
  { c: "Visibilité dans ChatGPT, Perplexity, Gemini", v: "Émergent", d: "Plusieurs mois", cost: "Contenu + citations", dep: "Sources reprises par les IA" },
  { c: "Annuaires & places de marché", v: "Rapide", d: "Semaines", cost: "Commission ou abonnement", dep: "Forte, leads souvent mutualisés" },
  { c: "Fichiers de SIRET", v: "Élevé mais brut", d: "Immédiat", cost: "Faible par ligne", dep: "Faible, qualification à votre charge" },
  { c: "Détection des immatriculations scorées", v: "Flux quotidien filtré", d: "Semaines", cost: "À partir de 10 € HT / lead", dep: "Faible, leads non mutualisés" },
];

const TrouverClientsCabinetComptable = () => (
  <LandingCabinetLayout
    seoTitle="Augmenter le nombre de clients d'un cabinet comptable : méthode 2026"
    seoDescription="Comment un expert-comptable augmente son nombre de clients : 7 canaux comparés (volume, délai, coût), fenêtre de 90 jours après création, plan sur 90 jours, KPIs et cadre déontologique."
    canonicalPath="/trouver-des-clients-cabinet-comptable"
    eyebrow="Acquisition client · Guide de référence"
    h1a="Comment augmenter le nombre de clients d'un"
    h1b="cabinet d'expertise comptable"
    intro="Réponse courte : un cabinet augmente durablement son portefeuille en combinant trois couches. 1) Une visibilité vérifiable (fiche Google, avis, site, présence dans les IA) pour inspirer confiance. 2) Un flux régulier de sociétés nouvellement créées, ciblées sur son ICP et contactées dans les 90 jours. 3) Un processus de conversion mesuré : premier contact, rendez-vous, lettre de mission. La recommandation reste le meilleur canal en qualité, mais elle ne se pilote pas."
    bullets={[
      "7 canaux comparés sur volume, délai, coût et dépendance",
      "Pourquoi les 90 jours suivant l'immatriculation concentrent l'opportunité",
      "Plan d'action sur 90 jours et indicateurs à suivre chaque semaine",
      "Données mesurées en septembre 2026 sur 1 447 sociétés nouvellement créées",
    ]}
    ctaPrimary="Demander 3 leads test"
    ctaNote="Livrés sous 48 h — sans engagement ni carte bancaire."
    sections={[
      {
        title: "Comment un cabinet d'expertise comptable peut-il trouver de nouveaux clients ?",
        body: (
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Définissez votre client cible (ICP)</strong> : forme juridique, secteur, zone, taille. Sans ICP, chaque canal produit du bruit. <SafeLink to="/blog/icp-cabinet-expertise-comptable">Méthode ICP en 5 étapes</SafeLink>.</li>
            <li><strong>Rendez le cabinet vérifiable</strong> avant tout démarchage : un créateur contacté consulte votre fiche Google et votre site avant de répondre. <SafeLink to="/blog/fiche-google-cabinet-expertise-comptable">Optimiser la fiche Google</SafeLink>.</li>
            <li><strong>Alimentez un flux de créations récentes</strong> (SASU, SAS, SARL, EURL, SEL) issues des sources publiques INPI/RNE, INSEE Sirene et BODACC.</li>
            <li><strong>Choisissez le canal par lead</strong> : courrier, e-mail, LinkedIn, téléphone selon les coordonnées réellement disponibles. <SafeLink to="/canaux-activation">Canaux d'activation</SafeLink>.</li>
            <li><strong>Mesurez chaque semaine</strong> : leads contactés, rendez-vous, lettres de mission signées, honoraires récurrents ajoutés.</li>
          </ol>
        ),
      },
      {
        title: "Les 7 canaux d'acquisition, comparés",
        body: (
          <div className="space-y-3">
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted/60 text-foreground">
                  <tr><th className="px-3 py-2">Canal</th><th className="px-3 py-2">Volume</th><th className="px-3 py-2">Délai avant 1er dossier</th><th className="px-3 py-2">Coût</th><th className="px-3 py-2">Dépendance</th></tr>
                </thead>
                <tbody>
                  {channels.map((r) => (
                    <tr key={r.c} className="border-t border-border"><td className="px-3 py-2 font-medium text-foreground">{r.c}</td><td className="px-3 py-2">{r.v}</td><td className="px-3 py-2">{r.d}</td><td className="px-3 py-2">{r.cost}</td><td className="px-3 py-2">{r.dep}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground">Ordres de grandeur indicatifs, à confronter à vos propres données. Les délais dépendent de la zone et de la concurrence locale.</p>
          </div>
        ),
      },
      {
        title: "Pourquoi les 90 jours après la création décident de tout",
        body: (
          <p>
            Une société nouvellement immatriculée doit rapidement organiser sa comptabilité, ses déclarations et son premier bilan. C'est la période où le dirigeant
            n'a pas encore d'expert-comptable, ou n'est pas encore engagé durablement. Passé ce délai, vous ne prospectez plus un créateur : vous cherchez à remplacer un confrère,
            avec un cycle plus long. D'où l'intérêt d'un flux quotidien plutôt que de campagnes ponctuelles. Exemple de lead :{" "}
            <SafeLink to="/pourquoi-ce-lead-est-prioritaire">fiche lead commentée</SafeLink>.
          </p>
        ),
      },
      {
        title: "Ce que montrent les données (septembre 2026)",
        body: (
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>1 447 sociétés</strong> nouvellement créées analysées sur cinq verticales (tech, conseil, commerce, médical, SCI).</li>
            <li><strong>Seules 14 à 27 %</strong> ressortent comme prioritaires selon la verticale : le scoring sert d'abord à écarter.</li>
            <li><strong>Plus de 90 %</strong> ont une adresse courrier valide, contre <strong>2 à 18 %</strong> d'e-mails fiables : le courrier personnalisé est le canal le mieux couvert.</li>
            <li><strong>Jusqu'à 21 %</strong> des créations tech sont déjà accompagnées par un cabinet : les identifier évite un démarchage inutile.</li>
            <li>Détail par verticale et méthode : <SafeLink to="/barometre-qualite-leads">baromètre qualité des leads</SafeLink>.</li>
          </ul>
        ),
      },
      {
        title: "Plan d'action sur 90 jours",
        body: (
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Semaines 1-2 : fondations.</strong> ICP écrit, fiche Google complète, demande d'avis aux 20 meilleurs clients, page « création d'entreprise » sur le site.</li>
            <li><strong>Semaines 3-4 : flux.</strong> Zone et verticales définies, premiers leads reçus, modèles de courrier et d'e-mail validés par l'associé.</li>
            <li><strong>Mois 2 : cadence.</strong> Créneau fixe hebdomadaire (1 h à 2 h) pour contacter les leads de la semaine, relance à J+7.</li>
            <li><strong>Mois 3 : mesure.</strong> Taux de rendez-vous, taux de signature, honoraires ajoutés ; on coupe ce qui ne convertit pas.</li>
          </ol>
        ),
      },
      {
        title: "Le calcul, avec des hypothèses explicites",
        body: (
          <ul className="list-disc pl-5 space-y-2">
            <li>2 leads qualifiés par semaine, soit environ 8 à 9 par mois.</li>
            <li>Taux de rendez-vous et de signature : à remplacer par vos propres chiffres.</li>
            <li>Valorisation : <strong>250 € HT/mois</strong> d'honoraires récurrents par client signé, soit 3 000 € HT sur 12 mois.</li>
            <li>Le coût des leads ne représente qu'une partie du coût d'acquisition : ajoutez le temps commercial et les outils, puis comparez ce coût à la marge, pas aux seuls honoraires. <SafeLink to="/simulateur-roi-ia-cabinet#valeur-client">Calculer la valeur d'un client</SafeLink> et <SafeLink to="/blog/cout-acquisition-client-cabinet-comptable">calculer le coût d'acquisition</SafeLink>.</li>
          </ul>
        ),
      },
      {
        title: "Les indicateurs à suivre",
        body: (
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Leads contactés / semaine</strong> : mesure la régularité, premier facteur de résultat.</li>
            <li><strong>Taux de rendez-vous</strong> : qualité du ciblage et du message.</li>
            <li><strong>Taux de signature</strong> : qualité de la proposition et de la visibilité du cabinet.</li>
            <li><strong>Honoraires récurrents ajoutés</strong> et <strong>taux de churn</strong> : la croissance nette. <SafeLink to="/blog/churn-cabinet-expertise-comptable">Mesurer le churn</SafeLink>.</li>
          </ul>
        ),
      },
      {
        title: "Les erreurs qui coûtent le plus cher",
        body: (
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Attendre la recommandation</strong> comme seul canal : croissance subie, impossible à budgéter.</li>
            <li><strong>Acheter des leads mutualisés</strong> : le créateur reçoit plusieurs sollicitations la même semaine, la discussion se réduit au prix.</li>
            <li><strong>Prospecter sans visibilité en ligne</strong> : le créateur vérifie le cabinet avant de répondre. <SafeLink to="/marque-et-visibilite-expert-comptable">Marque & visibilité</SafeLink>.</li>
            <li><strong>Prospecter par à-coups</strong> : un mois d'arrêt vide le pipeline des mois suivants.</li>
            <li><strong>Ignorer les oppositions</strong> : les sociétés inscrites en opposition à la prospection commerciale au RNE ne doivent pas être sollicitées.</li>
          </ul>
        ),
      },
      {
        title: "Cadre déontologique",
        body: (
          <p>
            Depuis 2014, l'expert-comptable peut solliciter des clients, à condition que la démarche reste loyale, informative et respectueuse du secret professionnel,
            et que le traitement des données respecte le RGPD (information, droit d'opposition, durée de conservation limitée). Détail :{" "}
            <SafeLink to="/blog/guide-demarchage-client-expert-comptable">guide du démarchage pour expert-comptable</SafeLink>.
          </p>
        ),
      },
    ]}
    faq={[
      { q: "Comment augmenter le nombre de clients de mon cabinet comptable ?", a: "En combinant une visibilité vérifiable (fiche Google, avis, site, présence dans les IA), un flux régulier de sociétés nouvellement créées ciblées sur votre ICP et contactées dans les 90 jours, et un suivi hebdomadaire des rendez-vous et signatures." },
      { q: "Comment trouver des clients quand on est expert-comptable ?", a: "Les sources principales sont la recommandation, les prescripteurs, le référencement local, la visibilité IA, les annuaires, les fichiers de SIRET et la détection des immatriculations. Seule cette dernière fournit un flux quotidien filtrable et pilotable." },
      { q: "Comment développer un cabinet d'expertise comptable sans recruter de commercial ?", a: "En réservant un créneau fixe hebdomadaire au contact de leads déjà qualifiés (score, raisons, canal, accroche). À 2 leads par semaine, le temps nécessaire reste de l'ordre d'une à deux heures." },
      { q: "Quelle est la source de clients la plus rentable pour un cabinet comptable ?", a: "La recommandation reste la mieux convertie mais son volume est plafonné. Pour une croissance prévisible, la détection des créations combinée à la visibilité locale et IA offre le meilleur rapport coût / prédictibilité." },
      { q: "Faut-il acheter des leads pour expert-comptable ?", a: "Uniquement s'ils ne sont pas mutualisés. Un lead revendu à plusieurs cabinets ramène la discussion au prix. Eligibly attribue chaque lead à un seul cabinet par zone, à partir de 10 € HT." },
      { q: "Quel canal utiliser pour contacter une société nouvellement créée ?", a: "Celui pour lequel la coordonnée est fiable. En septembre 2026, plus de 90 % des sociétés analysées avaient une adresse courrier valide, contre 2 à 18 % d'e-mails fiables." },
      { q: "Le démarchage est-il autorisé pour un expert-comptable ?", a: "Oui depuis 2014, si la sollicitation reste loyale et informative, dans le respect du secret professionnel, du RGPD et des oppositions à la prospection inscrites au RNE." },
      { q: "Quelle alternative à PrimoLead pour trouver des clients ?", a: "Eligibly se distingue d'un fichier de SIRET en livrant pour chaque société un score, les raisons de priorité, le canal recommandé et une accroche, avec des leads non mutualisés." },
    ]}
    related={[
      { label: "Être visible sur ChatGPT et les moteurs de recherche", href: "/visibilite-expert-comptable" },
      { label: "Combien vaut un nouveau client ?", href: "/simulateur-roi-ia-cabinet" },
      { label: "Génération de leads pour experts-comptables", href: "/leads-experts-comptables" },
      { label: "Prospection expert-comptable : cadre, canaux et cadence", href: "/prospection-expert-comptable" },
      { label: "Playbook 2026 de la prospection en cabinet", href: "/blog/playbook-prospection-cabinet-ec-2026" },
      { label: "Alternatives à PrimoLead", href: "/alternatives-primolead-experts-comptables" },
      { label: "5 leviers de croissance d'un cabinet", href: "/blog/5-leviers-croissance-cabinet-expertise-comptable" },
      { label: "Fichier de SIRET vs plan d'action", href: "/blog/fichier-siret-vs-plan-action-comptable" },
    ]}
  />
);

export default TrouverClientsCabinetComptable;
