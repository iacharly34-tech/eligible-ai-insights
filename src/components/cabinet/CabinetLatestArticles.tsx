import { SafeLink } from "@/components/SafeLink";
import { ArrowRight } from "lucide-react";

/** Les 3 dernières publications, en dur (maillage interne vers le blog depuis la home). */
const LATEST = [
  {
    href: "/blog/cas-client-empartners",
    kicker: "Cas client",
    title: "EM Partners : présence digitale complète et leads entrants depuis février 2026",
    excerpt:
      "Site, fiche Google (5,0/5 sur 95 avis), indexation dans les assistants IA et digest quotidien de leads : le détail de ce qui a été construit.",
  },
  {
    href: "/blog/barometre-immatriculations-juillet-2026",
    kicker: "Baromètre mensuel",
    title: "Baromètre des immatriculations — juillet 2026",
    excerpt:
      "Volumes SASU/SAS/EURL/SARL/SEL, dynamique par région et par secteur, lecture opérationnelle pour cadrer votre prospection.",
  },
  {
    href: "/blog/guide-demarchage-client-expert-comptable",
    kicker: "Kit marketing",
    title: "Kit marketing 2026 pour experts-comptables : 12 axes et une checklist",
    excerpt:
      "Prescripteurs, lead magnets, IA, séquences multicanal : ce qui produit réellement des rendez-vous en cabinet.",
  },
];

export const CabinetLatestArticles = () => (
  <section aria-labelledby="derniers-articles" className="border-t border-border/60 py-16 md:py-20">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <h2 id="derniers-articles" className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
          Dernières analyses pour les cabinets
        </h2>
        <SafeLink to="/ressources" className="text-sm text-primary underline underline-offset-4">
          Toutes les ressources cabinet EC
        </SafeLink>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {LATEST.map((a) => (
          <article key={a.href} className="rounded-xl border border-border p-6 hover:border-primary/40 transition-colors">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">{a.kicker}</p>
            <h3 className="font-display text-lg font-semibold leading-snug mt-2">
              <SafeLink to={a.href}>{a.title}</SafeLink>
            </h3>
            <p className="text-sm text-muted-foreground mt-3">{a.excerpt}</p>
            <SafeLink to={a.href} className="mt-4 inline-flex items-center text-sm text-primary">
              Lire l'analyse <ArrowRight className="w-3 h-3 ml-1" />
            </SafeLink>
          </article>
        ))}
      </div>
    </div>
  </section>
);
