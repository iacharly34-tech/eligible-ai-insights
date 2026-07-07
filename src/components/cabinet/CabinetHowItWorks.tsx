import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  Layers,
  Filter,
  Sparkles,
  Brain,
  Send,
  Check,
  X,
  Mail,
  Linkedin,
  Building2,
  TrendingUp,
  AlertCircle,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
} from "lucide-react";
import { useLang } from "@/hooks/useLang";

const STEPS_FR = [
  {
    n: "01",
    icon: Database,
    title: "Collecte temps réel",
    short: "Registres publics",
    output: "Flux brut",
    desc: "Nous récupérons en continu les immatriculations, modifications statutaires et publications légales depuis les registres officiels (INPI, Sirene, BODACC).",
  },
  {
    n: "02",
    icon: Layers,
    title: "Dédoublonnage",
    short: "Base unifiée",
    output: "Base unifiée",
    desc: "Nous normalisons SIREN, dénomination et dirigeant, puis fusionnons les doublons entre sources pour obtenir une seule fiche de référence par société.",
  },
  {
    n: "03",
    icon: Filter,
    title: "Exclusions amont",
    short: "Vivier adressable",
    output: "Vivier adressable",
    desc: "Nous écartons automatiquement les sociétés avec CAC mandaté, procédures collectives, cessations, holdings pures, serial entrepreneurs ou immatriculées il y a plus de 90 jours. Chaque exclusion est tracée.",
  },
  {
    n: "04",
    icon: Sparkles,
    title: "Enrichissement multi-canaux",
    short: "Fiche 360°",
    output: "Fiche complète multi-canaux",
    desc: "Nous agrégeons les coordonnées du dirigeant (email pro vérifié, téléphone, LinkedIn, adresse du siège), la verticale, le capital et les indicateurs de maturité du projet sur une même fiche.",
  },
  {
    n: "05",
    icon: Brain,
    title: "Scoring explicable",
    short: "Lead priorisé",
    output: "Lead priorisé",
    desc: "Nous calculons un score 0–100 selon votre ICP cabinet et affichons les 3 raisons clés : signaux positifs, points à vérifier, niveau de priorité. Aucune boîte noire.",
  },
  {
    n: "06",
    icon: Send,
    title: "Livraison + recommandation d'accroche",
    short: "Action commerciale",
    output: "Action commerciale",
    desc: "Nous poussons le lead dans vos canaux (email, Slack, Teams, WhatsApp) avec une accroche personnalisée (email + LinkedIn) prête à envoyer. Vos retours qualifié / écarté affinent en continu le modèle de votre cabinet.",
  },
];

const STEPS_EN = [
  { n: "01", icon: Database, title: "Real-time collection", short: "Public registries", output: "Raw feed", desc: "We continuously pull new registrations, statutory changes and legal notices from official registries (INPI, Sirene, BODACC)." },
  { n: "02", icon: Layers, title: "Deduplication", short: "Unified base", output: "Unified base", desc: "We normalize SIREN, legal name and director, then merge cross-source duplicates into a single reference record per company." },
  { n: "03", icon: Filter, title: "Upstream exclusions", short: "Addressable pool", output: "Addressable pool", desc: "We automatically discard companies with a mandated auditor, in insolvency, dissolved, pure holdings, serial founders or registered over 90 days ago. Every exclusion is logged." },
  { n: "04", icon: Sparkles, title: "Multi-channel enrichment", short: "360° profile", output: "Full multi-channel profile", desc: "We pull together the founder's contact details (verified work email, phone, LinkedIn, registered address), vertical, capital and project maturity into a single profile." },
  { n: "05", icon: Brain, title: "Explainable scoring", short: "Prioritized lead", output: "Prioritized lead", desc: "We compute a 0–100 score against your firm's ICP and surface the 3 key reasons: positive signals, points to verify, priority level. No black box." },
  { n: "06", icon: Send, title: "Delivery + outreach recommendation", short: "Sales action", output: "Sales action", desc: "We push the lead into your channels (email, Slack, Teams, WhatsApp) with a tailored outreach (email + LinkedIn) ready to send. Your qualified / discarded feedback keeps refining your firm's own model." },
];

const labels = {
  fr: {
    eyebrow: "La chaîne de production d'un lead",
    h2a: "De la donnée publique brute à une",
    h2b: "alerte qualifiée",
    h2c: ", six étapes contrôlées.",
    sub: "Chaque lead reçu par votre cabinet passe par la même chaîne, documentée et auditable. À chaque étape, une transformation, un livrable concret.",
    pBarStart: "Flux brut",
    pBarEnd: "Action commerciale",
    seeDeliverable: "Voir le livrable",
    prev: "Étape précédente",
    next: "Étape suivante",
    pause: "Pause",
    play: "Lecture auto",
    stage: "Étape",
    foot: "Sources de référence : registres publics officiels (registre national des entreprises, base Sirene, bulletin officiel des annonces civiles et commerciales). Enrichissements opérés via partenaires contractuels conformes RGPD, sans transfert hors UE.",
    // Step view labels
    rawHeader: "Flux brut — 4 entrées",
    duplicate: "Doublon",
    dedupHeader: "Base unifiée — 3 fiches",
    dupRemoved: "1 doublon supprimé",
    addressable: "Vivier adressable",
    kept: "conservés",
    enrichHeader: "Fiche complète — INNOV TECH SASU",
    enrichFields: [
      { label: "Email pro vérifié", value: "contact@innovtech.fr" },
      { label: "LinkedIn dirigeant", value: "Jean Dupont — CEO" },
      { label: "Capital social", value: "10 000 €" },
      { label: "Verticale", value: "Conseil en stratégie digitale" },
      { label: "Maturité projet", value: "Immatriculation < 7 jours · Actif" },
    ],
    scoreHeader: (s: number) => `Lead priorisé — Score ${s}/100`,
    scoreReasons: [
      { type: "positif", text: "SASU < 7 jours · Capital 10K+ · Dirigeant seul" },
      { type: "verif", text: "Vérifier le besoin comptable (holding familiale ?)" },
      { type: "prio", text: "Priorité haute — 3 concurrents déjà en lice" },
    ],
    delivHeader: "Alerte livrée — Canal de prédilection",
    delivered: "Délivrée",
    delivTitle: "Nouveau lead qualifié — INNOV TECH SASU",
    delivSub: "Score 87/100 · Priorité haute",
    delivMeta: ["SASU · 10 000 € · Conseil stratégie digitale", "contact@innovtech.fr", "Jean Dupont — CEO"],
    delivKeyReasons: "3 raisons clés",
    delivTags: ["SASU < 7 jours", "Capital 10K+", "3 concurrents en lice"],
    delivBtnA: "Contacter",
    delivBtnB: "Écarter",
  },
  en: {
    eyebrow: "The lead production line",
    h2a: "From raw public data to a",
    h2b: "qualified alert",
    h2c: ", six controlled steps.",
    sub: "Every lead reaching your firm goes through the same documented, auditable chain. At each step: a transformation, a concrete deliverable.",
    pBarStart: "Raw feed",
    pBarEnd: "Sales action",
    seeDeliverable: "See deliverable",
    prev: "Previous step",
    next: "Next step",
    pause: "Pause",
    play: "Auto play",
    stage: "Step",
    foot: "Reference sources: official public registries (national company registry, Sirene base, official bulletin of civil and commercial announcements). Enrichments performed via GDPR-compliant contractual partners, with no transfer outside the EU.",
    rawHeader: "Raw feed — 4 entries",
    duplicate: "Duplicate",
    dedupHeader: "Unified base — 3 records",
    dupRemoved: "1 duplicate removed",
    addressable: "Addressable pool",
    kept: "kept",
    enrichHeader: "Full profile — INNOV TECH SASU",
    enrichFields: [
      { label: "Verified work email", value: "contact@innovtech.fr" },
      { label: "Founder LinkedIn", value: "Jean Dupont — CEO" },
      { label: "Share capital", value: "€10,000" },
      { label: "Vertical", value: "Digital strategy consulting" },
      { label: "Project maturity", value: "Registered < 7 days · Active" },
    ],
    scoreHeader: (s: number) => `Prioritized lead — Score ${s}/100`,
    scoreReasons: [
      { type: "positif", text: "SASU < 7 days · Capital €10K+ · Solo founder" },
      { type: "verif", text: "Verify accounting need (family holding?)" },
      { type: "prio", text: "High priority — 3 competitors already in play" },
    ],
    delivHeader: "Alert delivered — Preferred channel",
    delivered: "Delivered",
    delivTitle: "New qualified lead — INNOV TECH SASU",
    delivSub: "Score 87/100 · High priority",
    delivMeta: ["SASU · €10,000 · Digital strategy consulting", "contact@innovtech.fr", "Jean Dupont — CEO"],
    delivKeyReasons: "3 key reasons",
    delivTags: ["SASU < 7 days", "Capital €10K+", "3 competitors in play"],
    delivBtnA: "Contact",
    delivBtnB: "Discard",
  },
};

/* ─── Visual previews for each step ─── */

function CollecteView({ t }: { t: typeof labels.fr; lang?: "fr" | "en" }) {
  const rows = [
    { siren: "123 456 789", name: "INNOV TECH SASU", date: "27/06/2026", forme: "SASU" },
    { siren: "987 654 321", name: "INNOV TECH SASU", date: "27/06/2026", forme: "SASU", dup: true },
    { siren: "456 789 123", name: "CONSULTING PRO SAS", date: "27/06/2026", forme: "SAS" },
    { siren: "789 123 456", name: "DIGITAL SERVICES SASU", date: "26/06/2026", forme: "SASU" },
  ];
  return (
    <div className="w-full max-w-md">
      <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
        <div className="px-4 py-3 border-b border-border flex items-center gap-2">
          <Database className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-foreground">{t.rawHeader}</span>
        </div>
        <div className="divide-y divide-border">
          {rows.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12 }}
              className={`px-4 py-2.5 flex items-center justify-between text-sm ${r.dup ? "bg-warning/5" : ""}`}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-muted-foreground w-24">{r.siren}</span>
                <span className="font-medium text-foreground">{r.name}</span>
                {r.dup && (
                  <span className="text-[0.65rem] px-1.5 py-0.5 rounded-full bg-warning/15 text-warning font-semibold">
                    {t.duplicate}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{r.forme}</span>
                <span>{r.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DedoublonnageView({ t }: { t: typeof labels.fr; lang?: "fr" | "en" }) {
  return (
    <div className="w-full max-w-md">
      <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
        <div className="px-4 py-3 border-b border-border flex items-center gap-2">
          <Layers className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-foreground">{t.dedupHeader}</span>
          <span className="ml-auto text-[0.65rem] px-2 py-0.5 rounded-full bg-success/15 text-success font-semibold">
            {t.dupRemoved}
          </span>
        </div>
        <div className="divide-y divide-border">
          {[
            { siren: "123 456 789", name: "INNOV TECH SASU", date: "27/06/2026", forme: "SASU", status: "ok" },
            { siren: "456 789 123", name: "CONSULTING PRO SAS", date: "27/06/2026", forme: "SAS", status: "ok" },
            { siren: "789 123 456", name: "DIGITAL SERVICES SASU", date: "26/06/2026", forme: "SASU", status: "ok" },
          ].map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="px-4 py-3 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-success" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground font-mono">{r.siren} · {r.forme}</div>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">{r.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExclusionsView({ t, lang = "fr" }: { t: typeof labels.fr; lang?: "fr" | "en" }) {
  const items = lang === "en"
    ? [
        { name: "INNOV TECH SASU", siren: "123 456 789", reason: null, kept: true },
        { name: "CONSULTING PRO SAS", siren: "456 789 123", reason: "Mandated auditor", kept: false },
        { name: "DIGITAL SERVICES SASU", siren: "789 123 456", reason: null, kept: true },
        { name: "HOLDING FAMILY SAS", siren: "111 222 333", reason: "Pure holding (12 companies)", kept: false },
        { name: "STARTUP STUDIO SAS", siren: "444 555 666", reason: "Serial founder (8 companies)", kept: false },
      ]
    : [
        { name: "INNOV TECH SASU", siren: "123 456 789", reason: null, kept: true },
        { name: "CONSULTING PRO SAS", siren: "456 789 123", reason: "CAC mandaté", kept: false },
        { name: "DIGITAL SERVICES SASU", siren: "789 123 456", reason: null, kept: true },
        { name: "HOLDING FAMILY SAS", siren: "111 222 333", reason: "Holding pure (12 sociétés)", kept: false },
        { name: "STARTUP STUDIO SAS", siren: "444 555 666", reason: "Serial entrepreneur (8 sociétés)", kept: false },
      ];
  const keptCount = items.filter((i) => i.kept).length;
  return (
    <div className="w-full max-w-md">
      <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
        <div className="px-4 py-3 border-b border-border flex items-center gap-2">
          <Filter className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-foreground">{t.addressable}</span>
          <span className="ml-auto text-[0.65rem] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">
            {keptCount} / {items.length} {t.kept}
          </span>
        </div>
        <div className="divide-y divide-border">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`px-4 py-2.5 flex items-center justify-between ${!item.kept ? "bg-muted/30" : ""}`}
            >
              <div className="flex items-center gap-3">
                {item.kept ? (
                  <Check className="w-4 h-4 text-success" />
                ) : (
                  <X className="w-4 h-4 text-destructive/60" />
                )}
                <div>
                  <div className={`text-sm font-medium ${item.kept ? "text-foreground" : "text-muted-foreground line-through"}`}>
                    {item.name}
                  </div>
                  {!item.kept && item.reason && (
                    <div className="text-[0.65rem] text-destructive/70">{item.reason}</div>
                  )}
                </div>
              </div>
              <span className={`text-xs font-mono ${item.kept ? "text-muted-foreground" : "text-muted-foreground"}`}>
                {item.siren}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EnrichissementView({ t }: { t: typeof labels.fr; lang?: "fr" | "en" }) {
  const icons = [Mail, Linkedin, Building2, TrendingUp, Check];
  const fields = t.enrichFields.map((f, i) => ({ ...f, icon: icons[i], delay: i * 0.15 }));
  return (
    <div className="w-full max-w-sm">
      <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
        <div className="px-4 py-3 border-b border-border flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-foreground">{t.enrichHeader}</span>
        </div>
        <div className="p-4 space-y-3">
          {fields.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: f.delay, type: "spring", stiffness: 200 }}
              className="flex items-center gap-3 p-2.5 rounded-lg bg-background border border-border/60"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <f.icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="text-[0.65rem] uppercase tracking-wider text-muted-foreground font-semibold">{f.label}</div>
                <div className="text-sm font-medium text-foreground">{f.value}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScoringView({ t }: { t: typeof labels.fr; lang?: "fr" | "en" }) {
  const score = 87;
  const reasons = t.scoreReasons;
  return (
    <div className="w-full max-w-sm">
      <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
        <div className="px-4 py-3 border-b border-border flex items-center gap-2">
          <Brain className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-foreground">{t.scoreHeader(score)}</span>
        </div>
        <div className="p-5 flex flex-col items-center gap-4">
          {/* Circular score */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative w-28 h-28 rounded-full border-4 border-primary/20 flex items-center justify-center"
          >
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="6" className="text-primary/10" />
              <motion.circle
                cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="6"
                className="text-primary"
                strokeLinecap="round"
                strokeDasharray={264}
                initial={{ strokeDashoffset: 264 }}
                animate={{ strokeDashoffset: 264 - (264 * score) / 100 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              />
            </svg>
            <div className="text-center">
              <motion.span
                className="text-3xl font-display font-bold text-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {score}
              </motion.span>
              <span className="text-xs text-muted-foreground block">/ 100</span>
            </div>
          </motion.div>

          {/* Reasons */}
          <div className="w-full space-y-2">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.2 }}
                className={`flex items-start gap-2 p-2.5 rounded-lg text-sm ${
                  r.type === "positif" ? "bg-success/10 text-success-foreground" :
                  r.type === "verif" ? "bg-warning/10 text-warning-foreground" :
                  "bg-primary/10 text-primary-foreground"
                }`}
              >
                {r.type === "positif" ? <Check className="w-4 h-4 shrink-0 mt-0.5 text-success" /> :
                 r.type === "verif" ? <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-warning" /> :
                 <TrendingUp className="w-4 h-4 shrink-0 mt-0.5 text-primary" />}
                <span className={`text-xs font-medium ${
                  r.type === "positif" ? "text-success" :
                  r.type === "verif" ? "text-warning" :
                  "text-primary"
                }`}>{r.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LivraisonView({ t }: { t: typeof labels.fr; lang?: "fr" | "en" }) {
  return (
    <div className="w-full max-w-sm">
      <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
        <div className="px-4 py-3 border-b border-border flex items-center gap-2">
          <Send className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-foreground">{t.delivHeader}</span>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="ml-auto text-[0.65rem] px-2 py-0.5 rounded-full bg-success/15 text-success font-semibold flex items-center gap-1"
          >
            <Check className="w-3 h-3" /> {t.delivered}
          </motion.span>
        </div>
        <div className="p-4">
          <div className="rounded-lg bg-background border border-border/60 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-foreground">{t.delivTitle}</div>
                <div className="text-xs text-muted-foreground">{t.delivSub}</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-bold text-primary">IT</span>
              </div>
            </div>
            <div className="space-y-1.5 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5" />
                <span>{t.delivMeta[0]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" />
                <span>{t.delivMeta[1]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5" />
                <span>{t.delivMeta[2]}</span>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pt-2 border-t border-border/60"
            >
              <div className="text-[0.65rem] uppercase tracking-wider text-muted-foreground font-semibold mb-1.5">{t.delivKeyReasons}</div>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[0.65rem] px-2 py-1 rounded-full bg-success/15 text-success font-medium">{t.delivTags[0]}</span>
                <span className="text-[0.65rem] px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">{t.delivTags[1]}</span>
                <span className="text-[0.65rem] px-2 py-1 rounded-full bg-warning/10 text-warning font-medium">{t.delivTags[2]}</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-2 pt-1"
            >
              <button type="button" aria-label={t.delivBtnA} className="flex-1 text-xs font-semibold bg-primary text-primary-foreground px-3 py-2 rounded-lg hover:opacity-90 transition-opacity">
                {t.delivBtnA}
              </button>
              <button type="button" aria-label={t.delivBtnB} className="text-xs font-medium border border-border bg-background px-3 py-2 rounded-lg hover:bg-muted transition-colors">
                {t.delivBtnB}
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

const stepViews = [CollecteView, DedoublonnageView, ExclusionsView, EnrichissementView, ScoringView, LivraisonView];

/* ─── Main component ─── */

export const CabinetHowItWorks = () => {
  const lang = useLang();
  const t = labels[lang];
  const steps = lang === "en" ? STEPS_EN : STEPS_FR;
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const [direction, setDirection] = useState(1);

  const goNext = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % steps.length);
  }, [steps.length]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + steps.length) % steps.length);
  }, [steps.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(goNext, 3500);
    return () => clearInterval(id);
  }, [autoPlay, goNext]);

  const CurrentView = stepViews[active];
  const step = steps[active];
  const progress = ((active + 1) / steps.length) * 100;

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60, scale: 0.96 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60, scale: 0.96 }),
  };

  return (
    <section id="how" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">
            {t.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            {t.h2a} <em className="italic text-primary font-medium">{t.h2b}</em>{t.h2c}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {t.sub}
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="h-1 w-full bg-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
          <div className="flex justify-between mt-2 text-[0.65rem] text-muted-foreground uppercase tracking-wider">
            <span>{t.pBarStart}</span>
            <span>{t.pBarEnd}</span>
          </div>
        </div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Steps */}
          <div className="space-y-2">
            {steps.map((s, i) => {
              const isActive = i === active;
              const isPast = i < active;
              return (
                <motion.button
                  key={i}
                  onClick={() => {
                    setDirection(i > active ? 1 : -1);
                    setActive(i);
                  }}
                  className={`w-full text-left rounded-xl border transition-all duration-300 p-4 flex items-start gap-4 ${
                    isActive
                      ? "border-primary/40 bg-primary/5 shadow-elegant"
                      : "border-border bg-card hover:border-primary/20 hover:bg-muted/30"
                  }`}
                  whileHover={{ scale: isActive ? 1 : 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : isPast
                      ? "bg-success/10 text-success"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {isPast && !isActive ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <s.icon className="w-4 h-4" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={`font-display text-sm font-semibold ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                        {s.n}. {s.title}
                      </span>
                      {isActive && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-[0.6rem] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary font-semibold uppercase tracking-wider"
                        >
                          {s.output}
                        </motion.span>
                      )}
                    </div>
                    <p className={`text-sm leading-relaxed ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                      {s.desc}
                    </p>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-3 flex items-center gap-2 text-xs text-primary font-medium"
                      >
                        <span>{t.seeDeliverable}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              );
            })}

            {/* Controls */}
            <div className="flex items-center gap-3 pt-4">
              <button
                onClick={goPrev}
                className="text-xs font-medium border border-border bg-background px-3 py-2 rounded-lg hover:bg-muted transition-colors"
              >
                {t.prev}
              </button>
              <button
                onClick={goNext}
                className="text-xs font-medium bg-primary text-primary-foreground px-3 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                {t.next}
              </button>
              <button
                onClick={() => setAutoPlay((p) => !p)}
                className={`ml-auto text-xs font-medium px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors ${
                  autoPlay ? "bg-success/10 text-success" : "border border-border bg-background hover:bg-muted"
                }`}
              >
                {autoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                {autoPlay ? t.pause : t.play}
              </button>
              <button
                onClick={() => { setActive(0); setDirection(1); }}
                className="text-xs font-medium border border-border bg-background px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Reset"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right: Live preview */}
          <div className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-border bg-background/50 backdrop-blur-sm p-6 md:p-8 min-h-[420px] flex flex-col items-center justify-center relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/3 rounded-full blur-3xl" />
              </div>

              {/* Step badge */}
              <div className="absolute top-4 left-4">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-[0.65rem] px-2 py-1 rounded-full bg-primary/10 text-primary font-semibold uppercase tracking-wider">
                    {t.stage} {step.n} — {step.output}
                  </span>
                </motion.div>
              </div>

              {/* Animated preview */}
              <div className="relative z-10 w-full flex items-center justify-center py-8">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={active}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <CurrentView t={t} lang={lang} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Caption under preview */}
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="relative z-10 text-center mt-4"
              >
                <p className="text-xs text-muted-foreground max-w-xs">
                  {step.desc}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-12 text-xs text-muted-foreground max-w-3xl">
          {t.foot}
        </p>
      </div>
    </section>
  );
};
