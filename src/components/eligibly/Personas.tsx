import { SectionHeader } from "./SectionHeader";

const personas = [
  {
    letter: "A",
    title: "Cabinets en croissance organique",
    body: <>Vous tournez à <strong>10–40 collaborateurs</strong>. Le bouche-à-oreille ne suffit plus pour soutenir la croissance. Vous voulez un canal d'acquisition régulier sur des entrepreneurs à fort potentiel, sans recruter un commercial à temps plein.</>,
  },
  {
    letter: "B",
    title: "Cabinets en cours de structuration commerciale",
    body: <>Vous avez désigné un <strong>responsable développement</strong> ou un associé en charge de la prospection. Il a besoin d'un outil vertical qui livre des leads qualifiés chaque matin, pas d'un CRM à configurer pendant 6 mois.</>,
  },
  {
    letter: "C",
    title: "Cabinets spécialisés sur une verticale",
    body: <>Vous êtes positionné sur un secteur précis (tech, conseil, santé, artisan, immobilier). Vous voulez recevoir uniquement les <strong>primo-entrepreneurs de votre verticale</strong> et de votre zone géographique, déjà filtrés sur la qualité.</>,
  },
  {
    letter: "D",
    title: "Cabinets en sortie de portfolio / cession",
    body: <>Vous venez de céder un portefeuille de clients (départ associé, transmission, réorganisation) et vous devez <strong>reconstituer un flux</strong> de nouveaux dossiers rapidement, avec une promesse claire à vos équipes.</>,
  },
];

export const Personas = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <SectionHeader
        eyebrow="À qui ça s'adresse"
        title={<>Pensé pour les cabinets <em className="text-terracotta">qui veulent prospecter sérieusement.</em></>}
        lede="Eligibly outille quatre profils de cabinets d'expertise comptable qui partagent un besoin : structurer leur acquisition sans recruter un commercial dédié."
      />

      <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
        {personas.map((p) => (
          <article key={p.letter} className="bg-bg-card border border-border-soft rounded-2xl p-7 flex gap-5 hover:border-sapin/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-sapin-soft text-sapin flex items-center justify-center font-display text-xl flex-shrink-0">
              {p.letter}
            </div>
            <div>
              <h3 className="font-display text-lg text-ink mb-2.5">{p.title}</h3>
              <p className="text-[0.95rem] text-ink-secondary leading-relaxed">{p.body}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);