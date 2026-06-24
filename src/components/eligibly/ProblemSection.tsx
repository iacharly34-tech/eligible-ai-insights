import { SectionHeader } from "./SectionHeader";

const problems = [
  {
    n: "1",
    title: "Le bruit noie le signal",
    body: "Les annuaires généralistes ne distinguent pas les leads potentiellement adressables des autres : commissaire aux comptes déjà mandaté, procédures collectives, holdings pures, serial entrepreneurs. Vos collaborateurs filtrent à la main, lead par lead.",
  },
  {
    n: "2",
    title: "Pas de priorisation explicable",
    body: "Une liste à plat ne dit pas qui contacter en premier, ni pourquoi. Sans score expliqué ni signaux qualifiés, chaque collaborateur improvise son propre tri. Le portefeuille du cabinet n'apprend rien.",
  },
  {
    n: "3",
    title: "Pas de plan d'action",
    body: "Aucun angle préparé, aucune relance proposée, aucune trace de ce qui marche pour votre cabinet. Le travail commercial est à refaire à chaque nouveau lead.",
  },
];

export const ProblemSection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <SectionHeader
        eyebrow="Le constat"
        title={<>Les annuaires vous donnent la liste. <em className="text-terracotta">Pas la priorisation.</em></>}
        lede="Vos collaborateurs passent du temps à filtrer manuellement Pappers, l'annuaire-entreprises et LinkedIn. Sans méthode partagée, sans score, sans angle d'attaque préparé."
      />
      <div className="grid md:grid-cols-3 gap-5 md:gap-6">
        {problems.map((p) => (
          <article key={p.n} className="bg-bg-card border border-border-soft rounded-2xl p-7 hover:border-terracotta/40 hover:shadow-card transition-all">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-terracotta-soft text-terracotta font-display text-lg mb-5">
              {p.n}
            </span>
            <h3 className="font-display text-xl text-ink mb-3">{p.title}</h3>
            <p className="text-ink-secondary leading-relaxed text-[0.95rem]">{p.body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);