import { LandingCabinetLayout } from "@/pages/cabinet/LandingCabinetLayout";

const TrouverClientsCabinetComptable = () => (
  <LandingCabinetLayout
    seoTitle="Comment trouver des clients pour un cabinet comptable (2026)"
    seoDescription="Les 7 sources de nouveaux clients d'un cabinet d'expertise comptable, comparées : recommandation, référencement local, visibilité IA, prescripteurs, annuaires, achat de fichiers, détection d'immatriculations. Coût, délai, volume."
    canonicalPath="/trouver-des-clients-cabinet-comptable"
    eyebrow="Acquisition client"
    h1a="Comment trouver des clients pour un"
    h1b="cabinet comptable"
    intro="Sept sources possibles, des coûts et des délais très différents. Ce comparatif classe chaque canal sur ce qui compte réellement pour un cabinet : volume mensuel réaliste, délai avant le premier dossier signé, coût par client et dépendance à un tiers."
    bullets={[
      "7 sources comparées sur volume, délai, coût et prédictibilité",
      "Ce qui plafonne (recommandation) et ce qui se pilote (détection + visibilité)",
      "Hypothèse de valorisation utilisée : 250 € HT/mois d'honoraires récurrents par client signé",
      "Le piège des leads mutualisés, revendus à plusieurs cabinets la même semaine",
    ]}
    ctaPrimary="Demander 3 leads test"
    ctaNote="Livrés sous 48 h — sans engagement ni carte bancaire."
    sections={[
      {
        title: "Les 7 sources, comparées",
        body: (
          <ol className="list-decimal pl-5 space-y-3">
            <li><strong>Recommandation client</strong> — meilleure qualité, coût nul, mais volume plafonné et non pilotable. À entretenir, pas à attendre.</li>
            <li><strong>Prescripteurs</strong> (avocats, banquiers, CCI, incubateurs) — excellent taux de conversion, montée en charge lente, nécessite un suivi relationnel régulier.</li>
            <li><strong>Référencement local</strong> — capte une demande existante sur la zone. Délai 3 à 6 mois, volume borné par le marché local.</li>
            <li><strong>Visibilité dans les moteurs de réponse</strong> (ChatGPT, Perplexity, Gemini) — de plus en plus utilisée par les créateurs. Agit surtout comme multiplicateur de confiance.</li>
            <li><strong>Annuaires et places de marché</strong> — volume rapide, mais leads souvent mutualisés et très concurrentiels sur le prix.</li>
            <li><strong>Achat de fichiers de SIRET</strong> — bon marché, mais aucun filtre, aucun scoring : le travail de qualification reste entier.</li>
            <li><strong>Détection des immatriculations</strong> — flux quotidien, filtrable sur votre ICP, contacté dans la fenêtre de 90 jours. C'est la source la plus prédictible.</li>
          </ol>
        ),
      },
      {
        title: "Pourquoi la fenêtre de 90 jours décide de tout",
        body: (
          <p>
            Un créateur choisit son expert-comptable dans les 30 à 90 jours suivant l'immatriculation, souvent au premier cabinet qui l'a contacté
            avec une réponse concrète à sa situation. Passé ce délai, vous ne prospectez plus un créateur&nbsp;: vous tentez de déloger un confrère,
            un cycle bien plus long. D'où l'intérêt d'un flux quotidien plutôt que d'une campagne trimestrielle.
          </p>
        ),
      },
      {
        title: "Le calcul, avec des hypothèses explicites",
        body: (
          <ul className="list-disc pl-5 space-y-2">
            <li>2 leads qualifiés par semaine, soit environ 8 à 9 par mois.</li>
            <li>Taux de mise en relation et de signature à ajuster avec vos propres chiffres.</li>
            <li>Valorisation : <strong>250 € HT/mois</strong> d'honoraires récurrents par client signé, soit 3 000 € HT sur 12 mois.</li>
            <li>À partir de 10 € HT le lead qualifié, un seul dossier signé absorbe largement le coût annuel d'acquisition.</li>
          </ul>
        ),
      },
      {
        title: "Les erreurs qui coûtent le plus cher",
        body: (
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Attendre la recommandation</strong> comme seul canal : croissance subie, impossible à budgéter.</li>
            <li><strong>Acheter des leads mutualisés</strong> : le créateur reçoit cinq appels la même semaine, la discussion se réduit au prix.</li>
            <li><strong>Prospecter sans visibilité en ligne</strong> : le créateur vérifie systématiquement le cabinet avant de répondre.</li>
            <li><strong>Prospecter par à-coups</strong> : un mois d'arrêt suffit à vider le pipeline trois mois plus tard.</li>
          </ul>
        ),
      },
    ]}
    faq={[
      { q: "Quelle est la source de clients la plus rentable pour un cabinet comptable ?", a: "La recommandation reste la mieux convertie, mais son volume est plafonné. Pour une croissance pilotable, la détection des nouvelles immatriculations combinée à une visibilité locale et IA offre le meilleur rapport coût/prédictibilité." },
      { q: "Faut-il acheter des leads comptables ?", a: "Uniquement s'ils ne sont pas mutualisés. Un lead revendu à plusieurs cabinets ramène la discussion au prix et dégrade l'image du cabinet." },
      { q: "Combien de nouveaux clients viser par an ?", a: "Un cabinet de 5 à 10 collaborateurs vise généralement 20 à 40 nouveaux dossiers par an. À 2 leads qualifiés par semaine, l'objectif est atteignable sans recruter de commercial." },
      { q: "Le démarchage est-il autorisé pour un expert-comptable ?", a: "Oui depuis 2014, à condition que la sollicitation reste loyale et informative, dans le respect du secret professionnel et du RGPD." },
    ]}
    related={[
      { label: "Prospection expert-comptable : cadre, canaux et cadence", href: "/prospection-expert-comptable" },
      { label: "Combien coûte un nouveau client en cabinet EC ?", href: "/blog/cout-acquisition-client-cabinet-comptable" },
      { label: "Fichier de SIRET vs plan d'action", href: "/blog/fichier-siret-vs-plan-action-comptable" },
      { label: "Génération de leads pour experts-comptables", href: "/leads-experts-comptables" },
    ]}
  />
);

export default TrouverClientsCabinetComptable;
