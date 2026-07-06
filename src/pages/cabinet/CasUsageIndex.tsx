import { LandingCabinetLayout } from "./LandingCabinetLayout";

const cases = [
  {
    href: "/cabinet/cas-usage/cabinet-8-collaborateurs-departement",
    title: "Cabinet généraliste de 8 collaborateurs — 30 prospects qualifiés / semaine dans son département",
    desc: "Structurer un flux régulier de leads créateurs sur une zone géographique unique, sans recruter de business developer.",
  },
  {
    href: "/cabinet/cas-usage/cabinet-specialise-restauration",
    title: "Cabinet spécialisé restauration — détecter les nouvelles SAS/SARL à fort potentiel paie + juridique",
    desc: "Cibler une verticale à fort ARPU (paie multi-établissements, licence III/IV, juridique) via filtres NAF + capital.",
  },
  {
    href: "/cabinet/cas-usage/cabinet-full-remote-startups-ecommerce",
    title: "Cabinet full-remote — cibler startups et e-commerçants à fort besoin d'accompagnement",
    desc: "Prospecter à l'échelle nationale sur SASU tech + e-commerce, avec approche LinkedIn + email prioritaire.",
  },
];

const CasUsageIndex = () => (
  <LandingCabinetLayout
    seoTitle="Cas d'usage — Eligibly pour cabinets d'expertise comptable"
    seoDescription="Trois cas d'usage détaillés : cabinet généraliste 8 collaborateurs, cabinet spécialisé restauration, cabinet full-remote startups/e-commerce. Configuration, signaux, plan d'action."
    canonicalPath="/cabinet/cas-usage"
    eyebrow="Cas d'usage cabinets"
    h1a="Comment les cabinets EC"
    h1b="utilisent Eligibly"
    intro="Trois cas d'usage concrets — configuration, filtres, signaux détectés, exemple de plan d'action semaine type et résultat attendu. Chaque cas est réel dans sa structure ; les chiffres sont des ordres de grandeur observés, pas des garanties."
    bullets={[
      "Cabinet généraliste 8 collaborateurs — flux départemental",
      "Cabinet spécialisé restauration — vertical NAF ciblé",
      "Cabinet full-remote — startups et e-commerçants",
    ]}
    ctaPrimary="Configurer mon cas d'usage"
    sections={[
      {
        title: "Choisir un cas d'usage",
        body: (
          <div className="grid gap-4">
            {cases.map((c) => (
              <a key={c.href} href={c.href} className="block rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:-translate-y-0.5 transition-all">
                <div className="font-display text-lg font-semibold text-foreground">{c.title} →</div>
                <div className="text-sm text-muted-foreground mt-2 leading-relaxed">{c.desc}</div>
              </a>
            ))}
          </div>
        ),
      },
    ]}
    related={[
      { label: "Génération de leads pour experts-comptables", href: "/leads-experts-comptables" },
      { label: "Alternatives à PrimoLead", href: "/alternatives-primolead-experts-comptables" },
      { label: "Glossaire prospection cabinet EC", href: "/cabinet/glossaire" },
    ]}
  />
);

export default CasUsageIndex;