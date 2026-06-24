import { SectionHeader } from "./SectionHeader";

const faq = [
  {
    q: "On a déjà un compte Pappers, en quoi Eligibly est différent ?",
    a: <>Pappers vous donne la donnée brute, à filtrer manuellement. Eligibly est un <strong>CRM de prospection vertical pour cabinets d'expertise comptable</strong> : priorisation explicable, score commenté par lead, filtres amont systématiques (CAC mandaté, procédure collective, cessation, holding pure, serial entrepreneur), plan d'action concret. La valeur n'est pas le volume, c'est la priorisation et le temps gagné chaque matin.</>,
  },
  {
    q: "Quelle est la garantie associée au forfait ?",
    a: <><strong>Engagement de qualité par filtres amont.</strong> Aucun lead livré ne doit présenter de Commissaire aux Comptes mandaté, de procédure collective, de cessation, ni correspondre à une holding pure (10+ sociétés actives) ou à un serial entrepreneur (5+ sociétés actives). Si un lead non conforme est détecté, il est remplacé gratuitement. <strong>Pas de garantie de résultats sur le nombre de RDV</strong> : votre conversion dépend de votre exécution commerciale.</>,
  },
  {
    q: "Pouvez-vous garantir que le prospect n'a pas déjà un expert-comptable ?",
    a: <>Non, c'est impossible à garantir : il n'existe pas de base publique des mandats d'expertise comptable. Ce qu'Eligibly identifie, c'est l'<strong>absence de signaux visibles d'accompagnement</strong> (pas de CAC mandaté publié, pas de procédure collective). La présence ou non d'un expert-comptable est à vérifier lors du premier contact.</>,
  },
  {
    q: "Vos données sont-elles RGPD compliant ?",
    a: <>Oui. Toutes nos sources sont publiques (INPI/RNE, Sirene INSEE, BODACC, partenaires Pappers/Kaspr/Hunter). Base légale RGPD article 6.1.f (intérêt légitime B2B). Chaque email envoyé inclut obligatoirement un lien de désabonnement. Nous fournissons notre registre des traitements et acceptons un DPA sous-traitant article 28 sur demande.</>,
  },
  {
    q: "Comment se passe l'onboarding ?",
    a: <>Compte créé sous 24h après signature du contrat pilote. Première session de configuration ICP (30 min en visio) pour cadrer vos secteurs, zones géographiques, taille de cible et profil dirigeant. Vous recevez vos premiers leads sous 48h. Un bilan de pilote est programmé à J+14 pour décider de la suite.</>,
  },
  {
    q: "Pourquoi pas faire ça en interne avec un dev ?",
    a: <>Vous pouvez. Comptez : plusieurs mois de développement, abonnements aux sources (Pappers, Kaspr, Hunter), infrastructure cloud, et la maintenance continue. Eligibly consolide déjà ces sources, applique les filtres amont, calcule un score expliqué, et apprend de votre feedback pour <strong>290€ HT/mois</strong>, sans engagement long terme.</>,
  },
  {
    q: "Quels secteurs et zones géographiques couvrez-vous ?",
    a: <>Toute la France métropolitaine et DROM-COM. Verticales paramétrables : Tech/SaaS, Conseil, Santé libéral, Artisans/BTP, Restauration/Hôtellerie, Immobilier, Commerce. Vous configurez votre ICP en quelques minutes lors de l'onboarding.</>,
  },
  {
    q: "Que se passe-t-il après les 14 jours de pilote gratuit ?",
    a: <>Si l'outil vous est utile, vous passez au forfait Pro à 290€ HT/mois (résiliable à tout moment avec préavis 30 jours). Sinon vous arrêtez, sans frais. <strong>Aucune CB demandée pour le pilote</strong>, aucune obligation, vos données supprimées sur demande sous 30 jours.</>,
  },
  {
    q: "Avez-vous des références cabinets clients ?",
    a: <>Eligibly est en phase pilote avec ses premiers cabinets en France. Nous ne publions pas leurs noms par respect du secret professionnel et de la confidentialité commerciale. Nous pouvons organiser un appel avec un cabinet de référence sur demande, sous accord de confidentialité.</>,
  },
];

export const FAQEC = () => (
  <section id="faq" className="py-20 md:py-28">
    <div className="container">
      <SectionHeader
        eyebrow="FAQ"
        title={<>Ce que les cabinets <em className="text-terracotta">nous demandent.</em></>}
      />
      <div className="max-w-3xl mx-auto space-y-3">
        {faq.map((f, i) => (
          <details
            key={i}
            className="group bg-bg-card border border-border-soft rounded-xl overflow-hidden hover:border-border-warm transition-colors"
          >
            <summary className="cursor-pointer px-6 py-5 flex items-center justify-between gap-4 list-none font-medium text-ink">
              <span className="font-display text-[1.05rem]">{f.q}</span>
              <span className="w-7 h-7 rounded-full bg-terracotta-soft text-terracotta flex items-center justify-center flex-shrink-0 text-lg leading-none transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="px-6 pb-6 text-[0.95rem] text-ink-secondary leading-relaxed">
              {f.a}
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>
);