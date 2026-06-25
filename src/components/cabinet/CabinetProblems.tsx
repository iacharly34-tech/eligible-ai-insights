const problems = [
  {
    n: "01",
    title: "Le bruit noie le signal",
    body: "Les annuaires comme Pappers ne distinguent pas les leads adressables des autres : commissaire aux comptes déjà mandaté, procédures collectives, holdings pures, serial entrepreneurs. Vos collaborateurs filtrent à la main, lead par lead, sans IA pour les aider.",
  },
  {
    n: "02",
    title: "Pas de priorisation explicable",
    body: "Une liste à plat ne dit pas qui contacter en premier, ni pourquoi. Sans score expliqué ni signaux qualifiés, chaque collaborateur improvise son propre tri. Le portefeuille du cabinet n'apprend rien.",
  },
  {
    n: "03",
    title: "Pas de plan d'action",
    body: "Aucun angle préparé, aucune relance proposée, aucune trace de ce qui marche pour votre cabinet. Le travail commercial est à refaire à chaque nouveau lead.",
  },
];

export const CabinetProblems = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-14">
          <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">
            Le problème
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            Prospecter des cabinets EC, c'est <em className="italic text-primary font-medium">surtout du filtrage manuel</em>.
          </h2>
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