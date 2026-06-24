import { ArrowRight } from "lucide-react";

const steps = [
  { n: "01", title: "Consolidation", body: "Agrégation quotidienne des sources publiques (INPI, Sirene, BODACC) et enrichissement contacts via partenaires (Pappers, Kaspr, Hunter)." },
  { n: "02", title: "Filtres amont", body: "Exclusion systématique : CAC mandaté, procédures collectives, cessation, holdings pures (10+ sociétés), serial entrepreneurs (5+ sociétés)." },
  { n: "03", title: "Priorisation expliquée", body: "Score commenté par lead : pourquoi ce lead, signaux positifs, points à vérifier. Plan d'action : préparer l'appel, générer une relance." },
  { n: "04", title: "Apprentissage", body: "Votre feedback (RDV pris, signatures, refus, non pertinents) ajuste la priorisation à ce qui signe réellement chez vous, au fil des mois." },
];

export const CabinetHowItWorks = () => {
  return (
    <section id="how" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-14">
          <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">Comment ça marche</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            De la donnée brute à <em className="italic text-primary font-medium">un appel préparé</em>, en 4 étapes.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="rounded-2xl border border-border bg-card p-6 h-full">
                <p className="font-display italic text-4xl font-semibold text-primary/70 mb-4">{s.n}</p>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 w-5 h-5 text-primary/40" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};