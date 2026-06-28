const problems = [
  {
    n: "01",
    title: "Des contacts déjà sollicités",
    body: "Les annuaires et places de marché distribuent largement les mêmes informations. Résultat : le dirigeant est contacté par plusieurs cabinets en quelques jours, et votre message passe inaperçu.",
  },
  {
    n: "02",
    title: "Un ciblage qui n'évolue pas",
    body: "Sans boucle de retour, votre sourcing reste figé. Les secteurs porteurs, les profils de dirigeants qui convertissent le mieux, les signaux récents : rien ne remonte pour affiner votre cible.",
  },
  {
    n: "03",
    title: "Un temps de qualification mal investi",
    body: "Vos équipes consacrent une part significative de leur semaine à croiser des listes, vérifier les sirets et éliminer les doublons. Du temps de haute valeur perdu en tâches mécaniques.",
  },
];

export const CabinetProblems = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">
            Les frictions opérationnelles
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            La prospection cabinet, encore trop <em className="italic text-primary font-medium">manuelle</em> et peu maîtrisée.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Trois freins reviennent chez les cabinets qui dépendent de flux externes ou de recherches manuelles pour alimenter leur pipeline.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <article
              key={p.n}
              className="group rounded-2xl border border-border bg-card p-7 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-foreground/5 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-display italic font-semibold flex items-center justify-center mb-5">
                {p.n}
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-[0.95rem]">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};