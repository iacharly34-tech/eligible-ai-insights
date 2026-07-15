import { useLang } from "@/hooks/useLang";
import { Sun, TrendingUp, Target, Zap, ArrowRight } from "lucide-react";

const copy = {
  fr: {
    eyebrow: "Le cockpit du matin",
    h2a: "7 h 02.",
    h2b: "Votre journée d'acquisition",
    h2c: "est déjà prête.",
    sub: "Chaque matin à 7 h, un digest atterrit dans Slack, Teams ou votre boîte mail. Il tient en un écran : Top 3 à contacter aujourd'hui, funnel de la semaine, ROI depuis le début du mois. Aucune app à ouvrir, aucun tableau à trier.",
    topTitle: "Top 3 à contacter aujourd'hui",
    top: [
      { name: "Nova Conseil IT", meta: "SASU · Paris 11e · 5 000 €", score: 92, channel: "LinkedIn · fenêtre J+3" },
      { name: "Atelier Bois du Rhône", meta: "SAS · Lyon 7e · 10 000 €", score: 88, channel: "Email · bilan d'ouverture" },
      { name: "Clinique du Sport 33", meta: "SELAS · Bordeaux · 8 000 €", score: 86, channel: "Appel · script BNC/SEL" },
    ],
    funnelTitle: "Funnel — semaine en cours",
    funnel: [
      { k: "Immatriculations détectées", v: "12 480" },
      { k: "Après filtres amont", v: "1 240" },
      { k: "Après scoring ICP", v: "84" },
      { k: "Livrés dans votre digest", v: "18" },
      { k: "Contactés par vos équipes", v: "14" },
      { k: "RDV pris", v: "3" },
    ],
    roiTitle: "ROI — mois en cours",
    roi: [
      { k: "Leads livrés", v: "72" },
      { k: "RDV pris", v: "11" },
      { k: "Nouveaux clients signés", v: "3" },
      { k: "ARPU moyen", v: "2 400 €/an" },
      { k: "Payback abonnement", v: "< 6 semaines" },
    ],
    footNote: "Digest livré 6 j / 7, ~90 s de lecture. Reçu par les associés, redistribué aux collabs acquisition.",
  },
  en: {
    eyebrow: "The morning cockpit",
    h2a: "7:02 a.m.",
    h2b: "Your acquisition day",
    h2c: "is already prepped.",
    sub: "Every morning at 7, a digest lands in Slack, Teams or your inbox. One screen: today's Top 3, this week's funnel, month-to-date ROI. No app to open, no spreadsheet to sort.",
    topTitle: "Today's Top 3",
    top: [
      { name: "Nova Conseil IT", meta: "SASU · Paris 11 · €5,000", score: 92, channel: "LinkedIn · D+3 window" },
      { name: "Atelier Bois du Rhône", meta: "SAS · Lyon 7 · €10,000", score: 88, channel: "Email · opening review" },
      { name: "Clinique du Sport 33", meta: "SELAS · Bordeaux · €8,000", score: 86, channel: "Call · BNC/SEL script" },
    ],
    funnelTitle: "Funnel — this week",
    funnel: [
      { k: "Registrations detected", v: "12,480" },
      { k: "After upstream filters", v: "1,240" },
      { k: "After ICP scoring", v: "84" },
      { k: "Delivered to your digest", v: "18" },
      { k: "Contacted by your team", v: "14" },
      { k: "Meetings booked", v: "3" },
    ],
    roiTitle: "ROI — month to date",
    roi: [
      { k: "Leads delivered", v: "72" },
      { k: "Meetings booked", v: "11" },
      { k: "New clients signed", v: "3" },
      { k: "Average ARPU", v: "€2,400/yr" },
      { k: "Subscription payback", v: "< 6 weeks" },
    ],
    footNote: "Delivered 6 days/week, ~90-second read. Sent to partners, forwarded to acquisition leads.",
  },
} as const;

export const CabinetCockpit = () => {
  const lang = useLang();
  const t = copy[lang];
  return (
    <section id="cockpit" className="py-20 md:py-28 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">{t.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            {t.h2a} <em className="italic text-primary font-medium">{t.h2b}</em> {t.h2c}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{t.sub}</p>
        </div>

        {/* Mock cockpit */}
        <div className="rounded-2xl border border-border bg-card shadow-lg overflow-hidden max-w-5xl mx-auto">
          {/* Header bar */}
          <div className="px-5 md:px-6 py-3.5 border-b border-border bg-gradient-to-r from-primary/5 to-transparent flex items-center gap-3">
            <Sun className="w-4 h-4 text-primary" aria-hidden="true" />
            <div className="font-display text-sm font-semibold text-foreground">Eligibly — Digest du matin</div>
            <span className="ml-auto text-[11px] text-muted-foreground font-mono tabular-nums">07:02 · Slack #acquisition</span>
          </div>

          <div className="grid lg:grid-cols-[1.3fr_1fr_1fr] divide-y lg:divide-y-0 lg:divide-x divide-border">
            {/* Top 3 */}
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-4 h-4 text-primary" aria-hidden="true" />
                <h3 className="font-display text-sm font-semibold text-foreground uppercase tracking-wide">{t.topTitle}</h3>
              </div>
              <ul className="space-y-3">
                {t.top.map((l, i) => (
                  <li key={i} className="rounded-lg border border-border bg-background p-3.5 hover:border-primary/40 transition-colors">
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-foreground truncate">{l.name}</div>
                        <div className="text-[11px] text-muted-foreground truncate">{l.meta}</div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-[9px] text-muted-foreground uppercase tracking-wider">Score</div>
                        <div className="font-display text-base font-semibold text-primary tabular-nums leading-none">{l.score}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-foreground/70">
                      <ArrowRight className="w-3 h-3 text-primary" aria-hidden="true" />
                      {l.channel}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Funnel */}
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-4 h-4 text-primary" aria-hidden="true" />
                <h3 className="font-display text-sm font-semibold text-foreground uppercase tracking-wide">{t.funnelTitle}</h3>
              </div>
              <ul className="space-y-2.5">
                {t.funnel.map((f, i) => {
                  const max = 12480;
                  const num = parseInt(f.v.replace(/[^0-9]/g, ""), 10) || 0;
                  const pct = Math.max(3, Math.round((num / max) * 100));
                  return (
                    <li key={i}>
                      <div className="flex items-baseline justify-between text-[11px] mb-1">
                        <span className="text-muted-foreground truncate pr-2">{f.k}</span>
                        <span className="font-mono font-semibold text-foreground tabular-nums shrink-0">{f.v}</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-primary/60" style={{ width: `${pct}%` }} />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* ROI */}
            <div className="p-5 md:p-6 bg-primary/[0.03]">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-4 h-4 text-primary" aria-hidden="true" />
                <h3 className="font-display text-sm font-semibold text-foreground uppercase tracking-wide">{t.roiTitle}</h3>
              </div>
              <dl className="space-y-3.5">
                {t.roi.map((r, i) => (
                  <div key={i} className="flex items-baseline justify-between gap-3 pb-2.5 border-b border-border/60 last:border-0 last:pb-0">
                    <dt className="text-[11px] text-muted-foreground leading-tight">{r.k}</dt>
                    <dd className="font-display text-base font-semibold text-foreground tabular-nums shrink-0">{r.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="px-5 md:px-6 py-3 border-t border-border bg-muted/40 text-[11px] text-muted-foreground">
            {t.footNote}
          </div>
        </div>
      </div>
    </section>
  );
};