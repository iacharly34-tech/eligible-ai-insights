import { LandingCabinetLayout } from "./LandingCabinetLayout";

const ProspectionCabinetComptable = () => (
  <LandingCabinetLayout
    seoTitle="Prospection cabinet comptable : la méthode 2026 | Eligibly"
    seoDescription="Comment structurer une prospection régulière et rentable pour un cabinet d'expertise comptable en 2026 : sourcing, scoring, séquences multicanal, gouvernance et indicateurs."
    canonicalPath="/prospection-cabinet-comptable"
    eyebrow="Prospection cabinet EC"
    h1a="La prospection cabinet,"
    h1b="ce n'est plus du démarchage"
    h1c=", c'est un système."
    intro="Trois heures de veille manuelle par semaine, un fichier acheté au SIRET, une relance mail improvisée : ça ne suffit plus. Voici la méthode que nous appliquons chez nos cabinets partenaires — sourcing, priorisation, séquences multicanal et gouvernance."
    bullets={[
      "Un ICP écrit, partagé entre associés, et opérationnel dans le sourcing",
      "Un score expliqué pour arbitrer chaque lead en 30 secondes",
      "5 canaux d'activation (LinkedIn, email, appel, Instagram, courrier)",
      "Un rituel hebdomadaire de 45 minutes qui remplace la veille éparpillée",
    ]}
    ctaPrimary="Voir la méthode en action"
    ctaNote="Démo produit — 20 minutes avec un associé Eligibly."
    sections={[
      {
        title: "Étape 1 — Définir un ICP qui trie tout seul",
        body: (
          <p>L'ICP (Ideal Customer Profile) est la première brique. Sans ICP écrit, chaque lead devient une opinion personnelle et le pipeline s'engorge de contacts flous. Un bon ICP cabinet combine des critères durs (forme juridique, code NAF, capital, zone géographique, âge de la société) et des exclusions explicites (verticales refusées, zones non-couvertes, concurrents en portefeuille). Eligibly convertit cet ICP en filtres opérationnels sur le flux d'immatriculations.</p>
        ),
      },
      {
        title: "Étape 2 — Prioriser au lieu de trier",
        body: (
          <p>Un cabinet reçoit 100 à 300 leads compatibles par semaine dans une zone métropolitaine active. Trier manuellement est impossible. Le scoring 0–100 d'Eligibly range automatiquement les leads en trois piles : priorité haute (contact sous 48 h), moyenne (semaine), veille (mensuel). Chaque score est expliqué : les associés savent pourquoi un lead est en tête.</p>
        ),
      },
      {
        title: "Étape 3 — Activer sur le bon canal",
        body: (
          <p>Un dirigeant tech de 32 ans à Paris ne se contacte pas comme un artisan boulanger à Angers. Eligibly recommande pour chaque lead le canal le plus adapté : LinkedIn pour les profils digitaux, email pour les scale-ups B2B, appel court pour la restauration, Instagram DM pour les créateurs, courrier en-tête pour les artisans locaux. La première accroche est pré-rédigée, à personnaliser en 30 secondes.</p>
        ),
      },
      {
        title: "Étape 4 — Boucler avec le feedback",
        body: (
          <p>Chaque lead qualifié / écarté par vos associés renvoie un signal au moteur de scoring. Au bout de 4 à 6 semaines, le modèle de votre cabinet s'écarte du modèle générique et reflète vos préférences réelles : verticales qui convertissent, tailles de dossier idéales, zones à privilégier. C'est une boucle d'apprentissage propre à votre cabinet, non partagée.</p>
        ),
      },
    ]}
    faq={[
      { q: "Combien de temps par semaine mobilise la méthode ?", a: "45 minutes en rituel hebdomadaire par associé qui prospecte activement. La liste priorisée arrive le lundi matin, chaque associé traite ses 10-15 leads prioritaires dans la semaine." },
      { q: "Faut-il un CRM en place ?", a: "Non. Eligibly fonctionne avec un simple export CSV ou email quotidien. Si vous avez déjà HubSpot, Pipedrive ou Axonaut, nous poussons directement dans votre pipeline." },
      { q: "Est-ce compatible RGPD ?", a: "Oui. Base légale intérêt légitime pour la prospection B2B, données issues de registres publics, hébergement UE, registre des traitements documenté, DPA disponible sur demande." },
    ]}
    related={[
      { label: "Leads pour experts-comptables", href: "/leads-experts-comptables" },
      { label: "Canaux d'activation multicanal", href: "/canaux-activation" },
      { label: "Playbook prospection cabinet EC 2026", href: "/blog/playbook-prospection-cabinet-ec-2026" },
    ]}
  />
);

export default ProspectionCabinetComptable;