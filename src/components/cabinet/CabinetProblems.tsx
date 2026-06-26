const problems = [
  {
    n: "01",
    title: "Le ROI flou",
    body: "« Je paye 500 à 1 500 €/mois en leads achetés, mais je ne sais pas combien de RDV ni de signatures réelles ça me génère. » Vous suivez un coût mensuel, pas un coût par client signé.",
  },
  {
    n: "02",
    title: "La dépendance fournisseur",
    body: "Votre plateforme d'achat peut augmenter ses prix, couper vos leads, livrer moins de volume. Vous êtes pieds et poings liés à un canal que vous ne maîtrisez pas.",
  },
  {
    n: "03",
    title: "Les leads mutualisés",
    body: "Le même lead est vendu à 3-5 cabinets en parallèle. Vous arrivez en 4e, le primo-entrepreneur a déjà signé ailleurs ou ne répond plus. La moitié sont déjà accompagnés.",
  },
  {
    n: "04",
    title: "Aucun apprentissage",
    body: "On vous envoie le même type de lead toute l'année. La plateforme ne s'adapte ni à votre ICP, ni à vos retours, ni aux secteurs où vous convertissez le mieux.",
  },
  {
    n: "05",
    title: "25 h/semaine perdues à filtrer",
    body: "Vos collaborateurs passent 1 h/jour sur Pappers à qualifier des leads. Pour un cabinet de 5 personnes, ça représente 25 h/semaine qui ne facturent pas.",
  },
];

export const CabinetProblems = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">
            Les douleurs
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            Acheter ses leads, c'est <em className="italic text-primary font-medium">perdre le contrôle</em> de sa prospection.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            5 douleurs reviennent chez les cabinets 5-30 collaborateurs qui dépensent 500-1500 €/mois en leads achetés.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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