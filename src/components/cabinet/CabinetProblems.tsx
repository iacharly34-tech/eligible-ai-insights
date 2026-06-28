const problems = [
  {
    n: "01",
    title: "Les leads mutualisés",
    body: "Le même lead est vendu à 3-5 cabinets en parallèle. Vous arrivez en 4e, le primo-entrepreneur a déjà signé ailleurs ou ne répond plus. La moitié sont déjà accompagnés.",
  },
  {
    n: "02",
    title: "Aucun apprentissage",
    body: "Votre fournisseur vous envoie le même type de lead toute l'année. Aucune adaptation à votre ICP, vos retours, ni aux secteurs où vous convertissez réellement.",
  },
  {
    n: "03",
    title: "25 h/semaine perdues à filtrer",
    body: "Vos collaborateurs passent 1 h/jour à scroller les annuaires d'immatriculations pour qualifier. Pour un cabinet de 5 personnes : 25 h/semaine qui ne facturent pas.",
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
            Acheter ses leads, c'est <em className="italic text-primary font-medium">perdre le contrôle</em> de sa prospection.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Trois frictions reviennent systématiquement chez les cabinets 5-30 collaborateurs qui dépensent 500 à 1 500 €/mois en leads achetés.
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