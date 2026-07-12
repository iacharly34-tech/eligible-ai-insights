import { useLang } from "@/hooks/useLang";

const copy = {
  fr: {
    eyebrow: "Les frictions opérationnelles",
    h2a: "La prospection cabinet, encore trop",
    h2b: "manuelle",
    h2c: "et peu maîtrisée.",
    sub: "Trois freins reviennent chez les cabinets qui dépendent de flux externes ou de recherches manuelles pour alimenter leur pipeline.",
    items: [
      { n: "01", title: "Des contacts déjà sollicités", body: "Les annuaires et places de marché distribuent largement les mêmes informations. Résultat : le dirigeant est contacté par plusieurs cabinets en quelques jours, et votre message passe inaperçu." },
      { n: "02", title: "Un ciblage qui n'évolue pas", body: "Sans boucle de retour, votre sourcing reste figé. Les secteurs porteurs, les profils de dirigeants qui convertissent le mieux, les signaux récents : rien ne remonte pour affiner votre cible." },
      { n: "03", title: "Un temps de qualification mal investi", body: "Vos équipes consacrent une part significative de leur semaine à croiser des listes, vérifier les sirets et éliminer les doublons. Du temps de haute valeur perdu en tâches mécaniques." },
    ],
  },
  en: {
    eyebrow: "Operational frictions",
    h2a: "Firm-led prospecting is still too",
    h2b: "manual",
    h2c: "and hard to scale.",
    sub: "Three recurring frictions hit firms that rely on third-party feeds or manual research to feed their pipeline.",
    items: [
      { n: "01", title: "Contacts already over-solicited", body: "Directories and marketplaces distribute the same information widely. The founder gets contacted by several firms within days, and your message goes unnoticed." },
      { n: "02", title: "Targeting that never evolves", body: "Without a feedback loop, your sourcing stays static. Promising sectors, founder profiles that convert best, recent signals: nothing flows back to sharpen your ICP." },
      { n: "03", title: "Qualification time poorly spent", body: "Your teams spend a significant share of their week cross-checking lists, verifying registration IDs and removing duplicates. High-value time lost on mechanical tasks." },
    ],
  },
} as const;

export const CabinetProblems = () => {
  const lang = useLang();
  const t = copy[lang];
  return (
    <section className="py-20 md:py-28 border-b border-border/60">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[0.9fr_1.6fr] gap-12 lg:gap-20">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">
              {t.eyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-[1.15]">
              {t.h2a} <span className="text-primary">{t.h2b}</span> {t.h2c}
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
              {t.sub}
            </p>
          </div>

          <ol className="divide-y divide-border border-t border-border">
            {t.items.map((p) => (
              <li key={p.n} className="grid grid-cols-[auto_1fr] gap-6 py-7">
                <div className="font-display text-sm font-semibold text-primary tabular-nums pt-1 w-8">
                  {p.n}
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-[0.95rem] max-w-2xl">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};