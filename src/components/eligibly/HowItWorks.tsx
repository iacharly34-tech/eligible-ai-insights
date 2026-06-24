import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    n: "1",
    title: "Consolidation",
    body: "Agrégation quotidienne des sources publiques (INPI, Sirene, BODACC) et enrichissement contacts via partenaires (Pappers, Kaspr, Hunter).",
  },
  {
    n: "2",
    title: "Filtres amont",
    body: "Exclusion systématique : CAC mandaté, procédures collectives, cessation, holdings pures (10+ sociétés), serial entrepreneurs (5+ sociétés).",
  },
  {
    n: "3",
    title: "Priorisation expliquée",
    body: "Score commenté par lead : pourquoi ce lead, signaux positifs, points à vérifier. Plan d'action : préparer l'appel, générer une relance.",
  },
  {
    n: "4",
    title: "Apprentissage",
    body: "Votre feedback (RDV pris, signatures, refus, non pertinents) ajuste la priorisation à ce qui signe réellement chez vous, au fil des mois.",
  },
];

export const HowItWorks = () => (
  <section id="how" className="py-20 md:py-28">
    <div className="container">
      <SectionHeader
        eyebrow="Comment ça marche"
        title={<>Un CRM vertical, <em className="text-terracotta">pas une liste à retravailler.</em></>}
        lede="De la consolidation des sources publiques au plan d'action par lead, Eligibly outille la prospection des cabinets EC en quatre étapes."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {steps.map((s) => (
          <div key={s.n} className="bg-bg-card border border-border-soft rounded-2xl p-6 relative hover:border-sapin/40 transition-colors">
            <span className="font-display text-5xl text-terracotta/30 absolute top-4 right-5 leading-none">
              {s.n}
            </span>
            <h4 className="font-display text-lg text-ink mb-3 mt-2">{s.title}</h4>
            <p className="text-sm text-ink-secondary leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);