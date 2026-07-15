import { useLang } from "@/hooks/useLang";
import { Receipt, Wallet, Users2, LineChart, FileText, Building2, ShoppingCart, Utensils, Scale, RefreshCw, Bell } from "lucide-react";

const copy = {
  fr: {
    eyebrow: "Ce qu'on détecte, lead par lead",
    h2a: "9 besoins probables,",
    h2b: "avant même votre premier appel",
    h2c: ".",
    sub: "Pour chaque société immatriculée, Eligibly croise la forme juridique, le capital, le NAF, la présence associés/salariés et l'activité déclarée pour anticiper les missions comptables à venir. Enrichissement dirigeant via Pappers + Kaspr, hébergement France, conforme RGPD.",
    needsTitle: "Les 9 besoins probables détectés",
    needs: [
      { icon: Receipt,      k: "Régime TVA & franchise en base",        v: "Signaux : CA prévisionnel, forme juridique, activité (BIC/BNC)." },
      { icon: Wallet,       k: "Rémunération du dirigeant",             v: "Signaux : SASU vs EURL, capital, présence associés." },
      { icon: Users2,       k: "Paie du 1er salarié",                    v: "Signaux : offres d'emploi liées, activité de service." },
      { icon: LineChart,    k: "Prévisionnel & business plan",           v: "Signaux : recherche de financement, création ex-nihilo, capital modeste." },
      { icon: FileText,     k: "Facturation & logiciel de gestion",      v: "Signaux : activité BtoB, prestations récurrentes, capital > 5 k€." },
      { icon: Building2,    k: "Compte pro & liaison bancaire",          v: "Signaux : société toute jeune (< 30 j), pas encore de mouvement." },
      { icon: ShoppingCart, k: "Gestion de caisse & e-commerce",         v: "Signaux : NAF commerce détail, e-shop détecté, activité BtoC." },
      { icon: Utensils,     k: "Verticale restauration / CHR",           v: "Signaux : NAF 56.xx, licence, ouverture d'établissement." },
      { icon: Scale,        k: "Aspects juridiques (pacte, statuts)",    v: "Signaux : SAS multi-associés, holding détectée, arrivée d'investisseur." },
    ],
    reevalTitle: "Signaux de réévaluation en continu",
    reevalSub: "Un lead écarté aujourd'hui peut redevenir prioritaire demain. Eligibly le surveille et vous alerte.",
    reevalItems: [
      "Changement de dirigeant ou d'objet social",
      "Augmentation de capital ou entrée d'associé",
      "Recrutement du premier salarié (URSSAF)",
      "Ouverture d'un second établissement",
      "Sortie d'un CAC ou fin de procédure",
    ],
  },
  en: {
    eyebrow: "What we detect, lead by lead",
    h2a: "9 likely needs,",
    h2b: "before your first call",
    h2c: ".",
    sub: "For each newly registered company, Eligibly cross-references legal form, capital, industry code, partners/employees and declared activity to anticipate upcoming accounting missions. Founder enrichment via Pappers + Kaspr, France hosting, GDPR compliant.",
    needsTitle: "The 9 likely needs detected",
    needs: [
      { icon: Receipt,      k: "VAT regime & franchise threshold",       v: "Signals: forecast revenue, legal form, activity (BIC/BNC)." },
      { icon: Wallet,       k: "Founder compensation setup",             v: "Signals: SASU vs EURL, capital, presence of partners." },
      { icon: Users2,       k: "First employee payroll",                 v: "Signals: related job postings, service activity." },
      { icon: LineChart,    k: "Financial forecast & business plan",     v: "Signals: fundraising activity, greenfield launch, modest capital." },
      { icon: FileText,     k: "Invoicing & billing software",           v: "Signals: B2B activity, recurring services, capital > €5k." },
      { icon: Building2,    k: "Business account & bank link",           v: "Signals: freshly registered (< 30 d), no transactions yet." },
      { icon: ShoppingCart, k: "POS & e-commerce",                       v: "Signals: retail NAICS, detected e-shop, B2C activity." },
      { icon: Utensils,     k: "Restaurant / hospitality vertical",      v: "Signals: NAICS 722, license, venue opening." },
      { icon: Scale,        k: "Legal (shareholder agreement, articles)",v: "Signals: multi-partner SAS, holding detected, investor entry." },
    ],
    reevalTitle: "Continuous re-evaluation signals",
    reevalSub: "A lead you discard today may become priority tomorrow. Eligibly watches and pings you.",
    reevalItems: [
      "Change of director or business purpose",
      "Capital increase or new partner",
      "First employee hire (URSSAF)",
      "Opening of a second establishment",
      "Auditor removal or end of proceedings",
    ],
  },
} as const;

export const CabinetSignals = () => {
  const lang = useLang();
  const t = copy[lang];
  return (
    <section id="signaux" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">{t.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            {t.h2a} <em className="italic text-primary font-medium">{t.h2b}</em>{t.h2c}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{t.sub}</p>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-start">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-5">{t.needsTitle}</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {t.needs.map((n, i) => {
                const Icon = n.icon;
                return (
                  <li key={i} className="rounded-xl border border-border bg-card p-4 hover:border-primary/40 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-mono text-muted-foreground tabular-nums">0{i + 1}</span>
                          <div className="font-medium text-foreground text-sm leading-snug">{n.k}</div>
                        </div>
                        <p className="text-[0.8rem] text-muted-foreground leading-relaxed">{n.v}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <RefreshCw className="w-4 h-4 text-primary" aria-hidden="true" />
              <h3 className="font-display text-lg font-semibold text-foreground">{t.reevalTitle}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{t.reevalSub}</p>
            <ul className="space-y-3">
              {t.reevalItems.map((it, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <Bell className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-foreground/85 leading-snug">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};