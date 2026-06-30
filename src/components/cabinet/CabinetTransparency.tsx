import { useLang } from "@/hooks/useLang";
import { Building2, MapPin, Banknote, Calendar, Users, Signal } from "lucide-react";

const copy = {
  fr: {
    eyebrow: "Transparence du scoring",
    h2a: "Voici ce qu'on regarde,",
    h2b: "et pourquoi.",
    sub: "Pas de boîte noire. Le score d'un lead est la somme pondérée de critères publics et de vos retours. Vous voyez le détail, vous pouvez le contester, vous pouvez le rejouer.",
    criteriaTitle: "Les 6 critères pris en compte",
    criteria: [
      { icon: Building2, label: "Forme juridique & objet social", w: "20%", body: "SASU, SAS, SEL — alignées avec votre ICP. NAF principale et activité déclarée à l'INPI." },
      { icon: Banknote,  label: "Capital social & associés", w: "15%", body: "Montant du capital, nombre d'associés, présence d'une holding ou d'un investisseur connu." },
      { icon: MapPin,    label: "Zone géographique", w: "15%", body: "Adresse du siège, département, distance avec vos bureaux. Pondéré selon vos zones prioritaires." },
      { icon: Calendar,  label: "Fraîcheur d'immatriculation", w: "20%", body: "Plus la société est récente (≤ 90 jours BODACC), plus le score monte. Au-delà, il décroît." },
      { icon: Users,     label: "Profil du dirigeant", w: "15%", body: "Historique entrepreneurial public, mandats antérieurs, indices de récurrence (serial founder)." },
      { icon: Signal,    label: "Retours de vos associés", w: "15%", body: "Chaque lead accepté ou rejeté réajuste les poids sur votre cabinet — pas sur les autres." },
    ],
    exampleTitle: "Exemple lisible — un lead réel anonymisé",
    exampleCo: "Nova SaaS SASU",
    exampleMeta: "Paris 11e · capital 5 000 € · NAF 62.01Z · immatriculée il y a 12 jours",
    exampleScore: "Score 94 / 100",
    breakdown: [
      { k: "Forme juridique SASU + NAF 62.01Z conforme à votre ICP",       v: "+20" },
      { k: "Capital 5 k€, 1 associé — profil entrepreneur individuel",       v: "+12" },
      { k: "Siège Paris 11e — dans vos 3 départements prioritaires",         v: "+15" },
      { k: "Immatriculée depuis 12 jours — pic d'opportunité",               v: "+20" },
      { k: "Dirigeant : 2e société (1re cédée en 2023)",                     v: "+13" },
      { k: "Profil proche de 7 clients acceptés ces 90 derniers jours",       v: "+14" },
    ],
    note: "Total brut : 94. Les critères, les poids et les retours sont consultables dans votre espace. Vous pouvez désactiver un critère ou changer son poids à tout moment.",
  },
  en: {
    eyebrow: "Scoring transparency",
    h2a: "Here's what we look at,",
    h2b: "and why.",
    sub: "No black box. A lead's score is the weighted sum of public criteria and your own feedback. You see the breakdown, you can challenge it, you can replay it.",
    criteriaTitle: "The 6 criteria we use",
    criteria: [
      { icon: Building2, label: "Legal form & business purpose", w: "20%", body: "SASU, SAS, SEL — aligned with your ICP. Primary NAICS and activity registered at INPI." },
      { icon: Banknote,  label: "Share capital & partners", w: "15%", body: "Capital amount, number of partners, presence of a holding company or known investor." },
      { icon: MapPin,    label: "Geographic area", w: "15%", body: "Registered address, county, distance to your offices. Weighted by your priority zones." },
      { icon: Calendar,  label: "Registration freshness", w: "20%", body: "The more recent (≤ 90 days BODACC), the higher the score. Beyond that, it decays." },
      { icon: Users,     label: "Founder profile", w: "15%", body: "Public entrepreneurial history, prior mandates, serial-founder signals." },
      { icon: Signal,    label: "Your partners' feedback", w: "15%", body: "Every accepted or rejected lead re-tunes the weights for your firm — not anyone else's." },
    ],
    exampleTitle: "Readable example — one anonymised real lead",
    exampleCo: "Nova SaaS Inc.",
    exampleMeta: "Paris 11e · €5,000 capital · NAICS 5112 · registered 12 days ago",
    exampleScore: "Score 94 / 100",
    breakdown: [
      { k: "Legal form SASU + NAICS 5112 match your ICP",                    v: "+20" },
      { k: "€5k capital, 1 partner — solo-founder profile",                 v: "+12" },
      { k: "HQ Paris 11e — within your 3 priority counties",                v: "+15" },
      { k: "Registered 12 days ago — peak opportunity window",              v: "+20" },
      { k: "Founder: second company (first one sold in 2023)",              v: "+13" },
      { k: "Profile close to 7 clients accepted in the last 90 days",       v: "+14" },
    ],
    note: "Raw total: 94. Criteria, weights and feedback are visible in your workspace. You can disable any criterion or change its weight at any time.",
  },
} as const;

export const CabinetTransparency = () => {
  const lang = useLang();
  const t = copy[lang];
  return (
    <section id="transparence" className="py-20 md:py-28 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">
            {t.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            {t.h2a} <em className="italic text-primary font-medium">{t.h2b}</em>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{t.sub}</p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-start">
          {/* Criteria */}
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-5">
              {t.criteriaTitle}
            </h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {t.criteria.map((c, i) => {
                const Icon = c.icon;
                return (
                  <li key={i} className="rounded-xl border border-border bg-card p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                      </div>
                      <span className="text-[11px] font-semibold text-primary tabular-nums">{c.w}</span>
                    </div>
                    <div className="font-medium text-foreground text-sm mb-1">{c.label}</div>
                    <p className="text-[0.85rem] text-muted-foreground leading-relaxed">{c.body}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Example */}
          <div className="rounded-2xl border border-border bg-card shadow-elegant overflow-hidden">
            <div className="px-6 py-5 border-b border-border bg-muted/30">
              <p className="text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground font-semibold mb-2">
                {t.exampleTitle}
              </p>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-display text-lg font-semibold text-foreground">{t.exampleCo}</div>
                  <div className="text-xs text-muted-foreground mt-1">{t.exampleMeta}</div>
                </div>
                <div className="font-display text-2xl font-semibold text-primary tabular-nums whitespace-nowrap">
                  {t.exampleScore}
                </div>
              </div>
            </div>
            <ul className="divide-y divide-border">
              {t.breakdown.map((row, i) => (
                <li key={i} className="px-6 py-3 flex items-start justify-between gap-4 text-sm">
                  <span className="text-foreground/90 leading-snug">{row.k}</span>
                  <span className="font-semibold text-primary tabular-nums">{row.v}</span>
                </li>
              ))}
            </ul>
            <div className="px-6 py-4 bg-muted/20 text-xs text-muted-foreground leading-relaxed">
              {t.note}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};