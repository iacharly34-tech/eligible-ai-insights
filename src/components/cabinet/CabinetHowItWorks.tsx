import { ArrowRight } from "lucide-react";

const steps = [
  { n: "01", title: "Consolidation", body: "Agrégation quotidienne des sources publiques (INPI, Sirene, BODACC) et enrichissement contacts via partenaires (Pappers, Kaspr, Hunter)." },
  { n: "02", title: "Filtres IA amont", body: "Exclusion automatique par nos modèles : CAC mandaté, procédures collectives, cessation, holdings pures (10+ sociétés), serial entrepreneurs (5+ sociétés)." },
  { n: "03", title: "Scoring IA expliqué", body: "Pour chaque lead : pourquoi il est prioritaire, signaux positifs, points à vérifier. Pas de boîte noire — chaque score est commenté." },
  { n: "04", title: "Alertes livrées", body: "Push automatique chaque matin dans Slack, Teams, HubSpot, Pipedrive ou votre boîte mail. Vos retours réentraînent le scoring sur ce qui signe chez vous." },
];

export const CabinetHowItWorks = () => {
  return (
    <section id="how" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-14">
          <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">Comment ça marche</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            De la donnée brute à <em className="italic text-primary font-medium">une alerte dans Slack</em>, en 4 étapes.
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