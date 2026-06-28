import { ArticleShell } from "./ArticleShell";

const TERMS: { term: string; def: string; ec: string }[] = [
  { term: "ICP — Ideal Customer Profile", def: "Le profil de client idéal : critères objectifs (taille, secteur, zone, maturité) qui qualifient un prospect comme prioritaire.", ec: "En cabinet EC : SASU/SAS de < 90 jours, capital > 5 k€, secteurs où vous avez déjà 3+ clients satisfaits, zone < 30 km du cabinet." },
  { term: "Lead", def: "Un contact identifié comme potentiellement intéressant — pas encore qualifié, pas encore client.", ec: "Une SASU fraîchement immatriculée dans votre zone et votre verticale. Sans qualification, c'est juste une ligne dans une base." },
  { term: "Lead qualifié (SQL)", def: "Un lead dont on a vérifié qu'il correspond à l'ICP et qu'il a un besoin actif. Prêt à être contacté par le commercial.", ec: "SASU qui coche ICP + pas de CAC mandaté + dirigeant joignable + sans expert-comptable identifié." },
  { term: "MQL — Marketing Qualified Lead", def: "Lead qui a manifesté un intérêt (téléchargement, formulaire) mais pas encore prêt à acheter.", ec: "Un dirigeant qui télécharge votre guide « créer sa SASU » : intérêt, pas encore besoin signé." },
  { term: "Scoring", def: "Note (0-100) attribuée à chaque lead pour prioriser le travail commercial. Combinaison de signaux ICP + comportementaux.", ec: "Eligibly score chaque lead sur votre ICP : un 87 passe avant un 62 dans la file d'appels du matin." },
  { term: "CAC — Coût d'Acquisition Client", def: "Total dépensé pour acquérir un client (marketing + commercial + outils), divisé par le nombre de nouveaux clients signés.", ec: "Si vous dépensez 6 000 €/an en leads achetés + Adwords pour signer 10 clients, votre CAC = 600 €/client." },
  { term: "CPL — Coût Par Lead", def: "Combien vous coûte un lead non qualifié.", ec: "Une plateforme qui vous facture 80 € le lead = 80 € de CPL. À comparer à votre taux de RDV : 5 % → 1 600 € le RDV." },
  { term: "Pipeline", def: "L'ensemble des opportunités commerciales en cours, segmentées par étape (lead → contacté → RDV → proposition → signé).", ec: "Votre pipeline cabinet : 40 leads → 12 appels passés → 5 RDV → 2 propositions → 1 signature ce mois." },
  { term: "Funnel de conversion", def: "Représentation en entonnoir du pipeline, montrant les taux de passage entre chaque étape.", ec: "Outil pour repérer où vous perdez le plus de monde : si seulement 10 % de vos appels donnent un RDV, le souci est dans le script, pas dans le volume." },
  { term: "Touchpoint", def: "Chaque point de contact possible avec un prospect : email, téléphone, LinkedIn, courrier, événement, recommandation.", ec: "Pour un dirigeant SASU : email pro, téléphone, LinkedIn, et adresse postale du siège. Multi-touchpoints = vous adaptez le canal au profil." },
  { term: "Outbound", def: "Démarche commerciale sortante : vous allez chercher le prospect (email, appel, LinkedIn) au lieu d'attendre qu'il vienne.", ec: "L'inverse de la cooptation passive. Outbound = vous décidez qui contacter, quand, et comment." },
  { term: "Inbound", def: "Le prospect vient à vous via votre contenu, votre SEO ou la recommandation. Cycle plus long, taux de signature plus élevé.", ec: "Votre site qui ressort sur « expert-comptable SASU Lyon » + un guide téléchargeable = générateur d'inbound." },
  { term: "Séquence (cadence)", def: "Suite ordonnée de touchpoints sur 7 à 21 jours pour transformer un lead en RDV.", ec: "J1 email perso → J3 LinkedIn → J6 appel → J10 email court → J14 stop. Codifiée pour ne rien oublier." },
  { term: "Conversion", def: "Passage d'une étape du pipeline à la suivante.", ec: "Taux de conversion appel→RDV : 18 %. Taux de conversion RDV→signature : 30 %." },
  { term: "Taux de transformation", def: "Synonyme de conversion globale : leads entrants → clients signés.", ec: "100 leads ce mois → 4 clients = 4 % de transformation. Benchmark cabinet EC : 3 à 6 %." },
  { term: "Cycle de vente", def: "Durée moyenne entre le 1ᵉʳ contact et la signature.", ec: "En cabinet EC : 7 à 21 jours sur une SASU primo, 60 à 90 jours sur une PME existante." },
  { term: "LTV — Lifetime Value", def: "Valeur cumulée d'un client sur toute sa durée de vie chez vous.", ec: "Client SASU = 1 800 €/an × 6 ans moyens = 10 800 € de LTV. À comparer au CAC pour mesurer la rentabilité." },
  { term: "Verticale", def: "Spécialisation par secteur d'activité (tech, santé, BTP, e-commerce).", ec: "Cabinet verticalisé tech = expertise CIR, BSPCE, levée de fonds. Le marketing devient beaucoup plus précis." },
  { term: "Persona", def: "Représentation détaillée d'un type d'acheteur : poste, motivations, freins, parcours.", ec: "Persona « primo-entrepreneur SASU » : 28-40 ans, sort du salariat, cherche réassurance et accompagnement, sensible au prix mensuel." },
  { term: "Lead nurturing", def: "Maintenir le lien avec un lead pas encore prêt, via du contenu pertinent, jusqu'à ce qu'il soit mûr.", ec: "Newsletter mensuelle « les bonnes pratiques du dirigeant SASU » pour rester top of mind." },
  { term: "CRM", def: "Logiciel qui centralise contacts, opportunités, échanges et historiques (HubSpot, Pipedrive, Salesforce).", ec: "Indispensable dès 3 commerciaux pour ne pas perdre de leads et mesurer le pipeline." },
  { term: "CTA — Call To Action", def: "Bouton ou phrase qui demande au prospect une action précise (« réserver un appel », « télécharger »).", ec: "Sur votre page d'accueil cabinet : « Prendre RDV bilan gratuit 30 min » > « En savoir plus »." },
  { term: "Landing page", def: "Page web mono-objectif conçue pour convertir un trafic spécifique.", ec: "« Expert-comptable SASU à Lyon » : une page dédiée, un seul CTA, un seul message — convertit 3 à 5× mieux que la page d'accueil." },
  { term: "Boîte noire (IA)", def: "Modèle d'IA dont on ne peut pas expliquer les décisions. À éviter pour les décisions commerciales engageantes.", ec: "Eligibly = jamais de boîte noire. Chaque score IA est accompagné de ses 3 raisons positives et de ses points à vérifier." },
  { term: "Open-weights", def: "Modèles d'IA dont les poids sont publics et auditables (Mistral, Llama, Qwen).", ec: "Garantit l'absence de vendor lock-in et l'hébergement en UE. Stack utilisée par Eligibly pour le scoring et la génération d'accroches." },
  { term: "Outbound qualifié", def: "Outbound piloté par la donnée et le scoring : on contacte uniquement les leads à forte probabilité de conversion.", ec: "L'inverse de l'appel à froid massif. C'est ce qu'Eligibly automatise pour les cabinets EC." },
  { term: "Taux d'ouverture / réponse", def: "Métriques clés d'une séquence email : combien ouvrent, combien répondent.", ec: "Benchmark email outbound 2026 : ouverture 35-50 %, réponse 8-12 % sur des séquences personnalisées multi-touchpoints." },
  { term: "Personalisation à l'échelle", def: "Capacité à envoyer 100 emails personnalisés en 10 minutes grâce à l'IA, au lieu d'un template générique.", ec: "Eligibly génère pour chaque lead une accroche email + LinkedIn personnalisée à partir de ses signaux propres." },
  { term: "Signal d'achat", def: "Indice qu'un prospect est prêt à acheter : levée de fonds, recrutement, immatriculation, déménagement.", ec: "L'immatriculation d'une SASU est le signal d'achat n°1 pour un cabinet EC : sans expert-comptable jusqu'à preuve du contraire." },
  { term: "ROI commercial", def: "Retour sur investissement d'une action commerciale : € générés / € dépensés.", ec: "Eligibly à 300 €/mois → 1 client signé/an (LTV 10 800 €) = ROI 3× dès la 1ère année, 30× sur 6 ans." },
];

export default function LexiqueMarketingExpertComptable() {
  return (
    <ArticleShell
      badge="Lexique"
      title="Lexique marketing pour experts-comptables — 30 mots à connaître"
      subtitle="ICP, scoring, pipeline, touchpoints, CAC, MQL, séquence outbound… Le vocabulaire du marketing B2B traduit dans le quotidien d'un cabinet d'expertise comptable. À garder sous la main pour vos comités d'associés."
      date="2026-06-28"
      readTime="8 min de lecture"
      url="/blog/lexique-marketing-expert-comptable"
      description="Glossaire des 30 termes marketing essentiels pour piloter la prospection en cabinet d'expertise comptable : ICP, scoring, pipeline, touchpoints, CAC, MQL, outbound, séquence, signal d'achat, ROI commercial."
      category="Lexique"
      sources={[
        { label: "HubSpot — Glossary of marketing terms", url: "https://www.hubspot.com/marketing-statistics" },
        { label: "Ordre des Experts-Comptables — Étude Marché 2025", url: "https://www.experts-comptables.fr" },
        { label: "Atlas — Baromètre acquisition cabinets EC 2025", url: "https://atlas-network.com" },
      ]}
      related={[
        { title: "Playbook 2026 — La prospection en cabinet d'expertise comptable", href: "/blog/playbook-prospection-cabinet-ec-2026" },
        { title: "Construire l'ICP d'un cabinet d'expertise comptable", href: "/blog/icp-cabinet-expertise-comptable" },
      ]}
    >
      <p>
        Le marketing B2B a son jargon : ICP, scoring, pipeline, MQL, touchpoints, séquence outbound…
        Ces mots, parfaitement clairs pour un growth manager d'une scale-up, le sont beaucoup moins
        pour un associé de cabinet d'expertise comptable. C'est dommage : derrière chaque terme se
        cache un concept simple, utile, et directement actionnable pour développer un portefeuille.
      </p>
      <p>
        Ce lexique reprend les 30 mots qui reviennent le plus souvent quand on parle prospection,
        acquisition et pilotage commercial. Pour chaque entrée : la définition standard, puis sa
        traduction concrète dans le quotidien d'un cabinet EC. À imprimer avant votre prochain
        comité d'associés.
      </p>

      <h2>Les 30 termes essentiels</h2>
      <p>
        Triés par ordre alphabétique de famille (ciblage → mesure → exécution). Chaque entrée
        comprend une définition générique et un exemple appliqué à un cabinet d'expertise comptable.
      </p>

      {TERMS.map((t) => (
        <div key={t.term} className="my-6 rounded-xl border border-border bg-card/40 p-5">
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">{t.term}</h3>
          <p className="text-sm text-foreground/80 mb-2"><strong className="text-foreground">Définition.</strong> {t.def}</p>
          <p className="text-sm text-foreground/80 italic"><strong className="not-italic text-primary">En cabinet EC.</strong> {t.ec}</p>
        </div>
      ))}

      <h2>Comment utiliser ce lexique en pratique</h2>
      <p>
        Trois usages que nous voyons fonctionner chez les cabinets partenaires&nbsp;:
      </p>
      <ul>
        <li><strong>Comité d'associés mensuel.</strong> Imposez 3 mots de vocabulaire commun : ICP, taux de conversion, CAC. Tout le monde parle de la même chose, les décisions vont plus vite.</li>
        <li><strong>Onboarding d'un nouveau collaborateur commercial.</strong> Ce lexique remplace 2 heures de formation théorique. Donnez-le à lire la veille du démarrage.</li>
        <li><strong>Cadrage d'un prestataire ou d'un outil.</strong> Avant d'écouter une démo d'éditeur, alignez-vous sur ce que vous appelez « lead qualifié » et « pipeline ». Vous éviterez 80 % des malentendus commerciaux.</li>
      </ul>

      <h2>Le mot qu'il faut surtout retenir</h2>
      <p>
        Si vous ne deviez retenir qu'un seul terme, ce serait <strong>ICP</strong>.
        L'ICP — Ideal Customer Profile — est la pierre angulaire de toute démarche commerciale
        moderne. Sans ICP clair, vous mesurez mal, vous priorisez mal, vous dépensez mal.
        Avec un ICP écrit, partagé et actualisé chaque trimestre, votre cabinet devient capable
        de mesurer ce qu'il fait — et donc de l'améliorer.
      </p>
      <p>
        Pour aller plus loin sur la méthode, lisez notre article&nbsp;
        <a href="/blog/icp-cabinet-expertise-comptable">Construire l'ICP d'un cabinet d'expertise comptable en 5 étapes</a>.
      </p>
    </ArticleShell>
  );
}