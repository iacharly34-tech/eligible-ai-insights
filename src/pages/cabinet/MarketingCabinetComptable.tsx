import { LandingCabinetLayout } from "@/pages/cabinet/LandingCabinetLayout";

const MarketingCabinetComptable = () => (
  <LandingCabinetLayout
    seoTitle="Marketing cabinet comptable : le plan 2026 en 12 axes"
    seoDescription="Plan marketing pour cabinet comptable : positionnement et ICP, site qui convertit, fiche Google et avis, référencement local, visibilité IA, LinkedIn, outbound, prescripteurs, contenus de preuve. Priorités, budget et KPIs."
    canonicalPath="/marketing-cabinet-comptable"
    eyebrow="Plan marketing"
    h1a="Marketing"
    h1b="cabinet comptable"
    h1c=": le plan en 12 axes"
    intro="Un plan marketing de cabinet tient sur deux couches : une couche visibilité, qui fait qu'on vous trouve et qu'on vous vérifie, et une couche acquisition, qui va chercher la demande qui ne vous cherche pas encore. Voici les 12 axes, dans l'ordre de priorité."
    bullets={[
      "Ordre de priorité assumé : positionnement, puis preuves, puis contenu, puis outbound",
      "Deux couches complémentaires : visibilité (on vous vérifie) et acquisition (vous allez chercher)",
      "Budget et charge de travail indiqués axe par axe",
      "KPIs de pilotage : leads, mise en relation, signature, honoraires récurrents",
    ]}
    ctaPrimary="Demander un diagnostic marketing"
    ctaNote="Réponse sous 48 h — sans engagement."
    sections={[
      {
        title: "Couche 1 — Visibilité (axes 1 à 7)",
        body: (
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Positionnement et ICP</strong> : quelles entreprises, quelles verticales, quel ticket moyen. Tout le reste en découle.</li>
            <li><strong>Identité et discours</strong> : une promesse vérifiable, pas un slogan interchangeable.</li>
            <li><strong>Site qui convertit</strong> : pages missions, pages verticales, preuve sociale, formulaire court, rendu serveur.</li>
            <li><strong>Fiche Google Business Profile</strong> : catégorie, zone, photos, publications mensuelles.</li>
            <li><strong>Collecte d'avis en process</strong> : demande systématique en fin de mission. Premier différenciateur local.</li>
            <li><strong>Référencement local</strong> : cohérence NAP, pages par ville et par mission, netlinking de proximité.</li>
            <li><strong>Visibilité dans les moteurs de réponse</strong> : contenu lisible sans JavaScript, données structurées, pages factuelles et sourcées.</li>
          </ol>
        ),
      },
      {
        title: "Couche 2 — Acquisition (axes 8 à 12)",
        body: (
          <ol className="list-decimal pl-5 space-y-2" start={8}>
            <li><strong>LinkedIn de l'associé</strong> : un post utile par semaine, pas de communication corporate creuse.</li>
            <li><strong>Outbound sur immatriculations récentes</strong> : détection quotidienne, scoring ICP, contact dans la fenêtre de 90 jours.</li>
            <li><strong>Canal prescripteur</strong> : avocats, banquiers, incubateurs, CCI — suivi relationnel régulier et traçable.</li>
            <li><strong>Lead magnets et webinaires</strong> : checklist création, simulateur, guide fiscal de verticale.</li>
            <li><strong>Témoignages et parrainage</strong> : formaliser la recommandation au lieu de l'espérer.</li>
          </ol>
        ),
      },
      {
        title: "Dans quel ordre démarrer, concrètement",
        body: (
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Mois 1</strong> : positionnement, fiche Google, process d'avis, 5 pages missions.</li>
            <li><strong>Mois 2</strong> : pages verticales, socle technique, LinkedIn de l'associé.</li>
            <li><strong>Mois 3</strong> : démarrage de l'outbound sur les immatriculations, séquences par canal.</li>
            <li><strong>Mois 4 et suivants</strong> : contenus de preuve, prescripteurs, mesure et arbitrage budgétaire.</li>
          </ul>
        ),
      },
      {
        title: "Ce qu'il faut mesurer, et rien de plus",
        body: (
          <ul className="list-disc pl-5 space-y-2">
            <li>Leads qualifiés par semaine (objectif de départ réaliste : 2).</li>
            <li>Taux de mise en relation, puis taux de signature.</li>
            <li>Honoraires récurrents par client signé — hypothèse de travail : 250 € HT/mois.</li>
            <li>Coût d'acquisition rapporté à la valeur annuelle du dossier.</li>
          </ul>
        ),
      },
    ]}
    faq={[
      { q: "Quel budget marketing pour un cabinet comptable ?", a: "Les cabinets structurés consacrent généralement 2 à 5 % de leur chiffre d'affaires à l'acquisition. L'ordre de dépense compte plus que le montant : fiche Google et avis avant publicité." },
      { q: "Faut-il une agence ou faire en interne ?", a: "La collecte d'avis, LinkedIn et la relation prescripteur se font en interne. Le site, le socle technique et le référencement gagnent à être externalisés." },
      { q: "Le marketing est-il compatible avec la déontologie ?", a: "Oui. La publicité et le démarchage sont autorisés depuis 2014, sous réserve d'une information loyale, sans sollicitation déloyale ni dénigrement." },
      { q: "Combien de temps avant les premiers résultats ?", a: "La fiche Google et les avis agissent en 4 à 8 semaines. L'outbound sur immatriculations produit des rendez-vous dès les premières semaines. Le référencement demande 3 à 6 mois." },
    ]}
    related={[
      { label: "Conseil en référencement pour expert-comptable", href: "/conseil-referencement-expert-comptable" },
      { label: "Marque & visibilité expert-comptable", href: "/marque-et-visibilite-expert-comptable" },
      { label: "Kit marketing 2026 pour experts-comptables", href: "/blog/guide-demarchage-client-expert-comptable" },
      { label: "Comment trouver des clients pour un cabinet comptable", href: "/trouver-des-clients-cabinet-comptable" },
    ]}
  />
);

export default MarketingCabinetComptable;
