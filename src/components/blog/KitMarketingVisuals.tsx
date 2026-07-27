import { Users, Eye, Target, Clock, Calendar, TrendingUp, Globe, Star, Search, Sparkles, Share2, MessageSquare, Send, Handshake, Gift, Presentation, Quote, UserPlus } from "lucide-react";

// ---------- 1. Timeline "Le bon timing" (J0 / J+7 / J+30) ----------
export const KitTimingTimeline = () => (
  <div className="not-prose my-10 rounded-2xl border border-border bg-card/40 p-6 md:p-8">
    <div className="mb-6">
      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-primary/10 text-primary text-[0.65rem] font-semibold uppercase tracking-[0.14em] mb-3">
        <Clock className="w-3 h-3" /> Le bon timing
      </div>
      <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight">Les premières semaines comptent</h3>
    </div>

    <div className="grid grid-cols-3 gap-3 md:gap-6 mb-6">
      {[
        { k: "J0", label: "Immatriculation" },
        { k: "J+7", label: "Phase active de choix" },
        { k: "J+30", label: "Souvent trop tard" },
      ].map((s, i) => (
        <div key={s.k} className="rounded-xl border border-border bg-background px-3 py-4 text-center">
          <div className={`font-display text-2xl md:text-3xl font-bold ${i === 2 ? "text-muted-foreground" : "text-primary"}`}>{s.k}</div>
          <div className="text-xs text-muted-foreground mt-1.5 leading-snug">{s.label}</div>
        </div>
      ))}
    </div>

    <div className="relative h-1 rounded-full bg-primary/15 mb-8">
      <div className="absolute inset-y-0 left-0 w-2/3 rounded-full bg-primary" />
      {[0, 50, 100].map((left, i) => (
        <div
          key={i}
          className={`absolute -top-1.5 h-4 w-4 rounded-full border-2 border-background ${i < 2 ? "bg-primary" : "bg-primary/40"}`}
          style={{ left: `calc(${left}% - 8px)` }}
        />
      ))}
    </div>

    <div className="grid md:grid-cols-3 gap-3 md:gap-4">
      {[
        { icon: Users, t: "Le choix se joue dans les premières semaines." },
        { icon: Clock, t: "Arriver tôt augmente vos chances de contact." },
        { icon: Target, t: "Eligibly aide à agir dans cette fenêtre." },
      ].map(({ icon: Icon, t }, i) => (
        <div key={i} className="rounded-xl border border-border bg-background p-4">
          <div className="flex items-start gap-3">
            <div className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon className="w-4 h-4 text-primary" />
            </div>
            <p className="text-sm text-foreground/85 leading-snug m-0">{t}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ---------- 2. Preuve terrain Empartners ----------
export const KitEmpartnersStats = () => (
  <div className="not-prose my-10 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-transparent p-6 md:p-8">
    <div className="mb-6">
      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-primary/10 text-primary text-[0.65rem] font-semibold uppercase tracking-[0.14em] mb-3">
        <TrendingUp className="w-3 h-3" /> Preuve terrain — Empartners
      </div>
      <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight">Un trafic modeste. Une acquisition déjà active.</h3>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {[
        { icon: Users, value: "3", unit: "leads qualifiés / semaine" },
        { icon: Calendar, value: "3 mois", unit: "de site en ligne" },
        { icon: TrendingUp, value: "Centaines", unit: "de visites / semaine" },
      ].map(({ icon: Icon, value, unit }, i) => (
        <div key={i} className="rounded-xl border border-border bg-background p-5 text-center">
          <div className="mx-auto w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <div className="font-display text-3xl md:text-4xl font-bold text-primary leading-none">{value}</div>
          <div className="text-xs text-muted-foreground mt-2 leading-snug">{unit}</div>
        </div>
      ))}
    </div>
    <p className="text-sm text-muted-foreground italic mt-5 mb-0 border-l-2 border-primary pl-4">
      Le marketing prépare la demande. Le timing crée le rendez-vous.
    </p>
  </div>
);

// ---------- 3. Grille 12 piliers ----------
const PILLARS = [
  { n: "01", label: "Site web", icon: Globe },
  { n: "02", label: "Avis Google", icon: Star },
  { n: "03", label: "SEO", icon: Search },
  { n: "04", label: "Visibilité LLM", icon: Sparkles },
  { n: "05", label: "Réseaux sociaux", icon: Share2 },
  { n: "06", label: "Formulaires", icon: MessageSquare },
  { n: "07", label: "Outbound", icon: Send },
  { n: "08", label: "Prescripteurs", icon: Handshake },
  { n: "09", label: "Lead magnets", icon: Gift },
  { n: "10", label: "Webinaires", icon: Presentation },
  { n: "11", label: "Témoignages", icon: Quote },
  { n: "12", label: "Parrainage", icon: UserPlus },
];

export const KitPillars12 = () => (
  <div className="not-prose my-10 rounded-2xl border border-border bg-card/40 p-6 md:p-8">
    <div className="mb-6">
      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-primary/10 text-primary text-[0.65rem] font-semibold uppercase tracking-[0.14em] mb-3">
        <Target className="w-3 h-3" /> Les 12 piliers du marketing
      </div>
      <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight">Un système d'acquisition complet, pas une action isolée</h3>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {PILLARS.map(({ n, label, icon: Icon }) => (
        <div key={n} className="rounded-xl border border-border bg-background p-4 flex items-start gap-3">
          <div className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="w-4 h-4 text-primary" />
          </div>
          <div className="min-w-0">
            <div className="text-[0.65rem] font-semibold text-primary/70 tracking-widest">{n}</div>
            <div className="text-sm font-semibold text-foreground leading-snug truncate">{label}</div>
          </div>
        </div>
      ))}
    </div>
    <p className="text-xs text-muted-foreground mt-5 mb-0 flex items-center gap-2">
      <Target className="w-3.5 h-3.5 text-primary" />
      <span>Visibilité, preuve, conversion et action.</span>
    </p>
  </div>
);

// ---------- 4. Regroupement 4 catégories ----------
export const KitFourCategories = () => (
  <div className="not-prose my-10 rounded-2xl border border-border bg-card/40 p-6 md:p-8">
    <div className="mb-6">
      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-primary/10 text-primary text-[0.65rem] font-semibold uppercase tracking-[0.14em] mb-3">
        <Sparkles className="w-3 h-3" /> Synthèse
      </div>
      <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight">12 leviers, 4 fonctions</h3>
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      {[
        { title: "Visibilité", body: "Site, SEO, LLM, réseaux sociaux" },
        { title: "Conversion", body: "Avis Google, formulaires, contenus" },
        { title: "Réseau", body: "Prescripteurs, témoignages, parrainage" },
        { title: "Action", body: "Outbound, timing d'immatriculation, suivi" },
      ].map((c) => (
        <div key={c.title} className="rounded-xl border border-border bg-background p-5">
          <div className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-primary mb-1.5">{c.title}</div>
          <div className="text-sm text-foreground/85 leading-snug">{c.body}</div>
        </div>
      ))}
    </div>
  </div>
);