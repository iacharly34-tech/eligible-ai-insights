import { useMemo, useState } from "react";
import {
  Calculator,
  TrendingUp,
  Users,
  Sparkles,
  ArrowRight,
  Cpu,
  MessageSquare,
  UserCog,
  ShieldCheck,
  Target,
  Info,
  Wand2,
  BookOpen,
  ChevronDown,
} from "lucide-react";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/SafeLink";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Simulateur ROI IA cabinet d'expertise comptable.
// Hypothèses volontairement PRUDENTES (fourchette basse des études OEC Paris 2025,
// CSOEC « Parlons Data & IA », Cegid, Shine, CREOP 2026 + retours pilotes Eligibly).
// Toutes les recettes additionnelles (conseil, closing, dev commercial) sont
// pondérées par une marge nette réaliste — on ne compte pas le CA en gain.

const fmt = (n: number) =>
  new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(Math.max(0, Math.round(n)));

const COUT_OUTILS_IA_PAR_COLLAB = 480; // €/an — suites production + LLM interne
const ELIGIBLY_ANNUEL = 290 * 12; // 3 480 €/an
const SEMAINES = 45; // semaines travaillées / an
const ETP_HEURES = 1607;

// Marges nettes appliquées aux recettes additionnelles (le gain n'est pas du CA)
const MARGE_HONORAIRES = 0.35; // 35 % marge nette sur mission comptable
const MARGE_DEV = 0.30; // 30 % marge nette sur nouveau dossier

// Cadrage réaliste : plafonds à 100 % d'intensité — fourchette basse des études
const MAX_PROD_HEURES = 0.35; // 35 % des heures saisie automatisables (vs 60 % théorique)
const MAX_CONSEIL_HONO = 0.12; // +12 % d'honoraires
const MAX_CONSEIL_PARC = 0.25; // sur 25 % du parc
const MAX_RELATION_H = 2.5; // h/sem/collab libérées
const MAX_RH_COUT = 6000; // € coût moyen remplacement
const MAX_RH_TAUX = 0.10; // 10 pts turnover évités
const MAX_GOUV_INCIDENT = 25000 * 0.08; // 8 % de proba × 25 k€
const MAX_GOUV_CLOSING_PARC = 0.015; // 1,5 % du parc mid-market
const MAX_GOUV_CLOSING_UPLIFT = 0.15; // +15 % honoraires
const MAX_DEV_DOSSIERS_MOIS = 2.5; // dossiers nets/mois à 100 %

type ScenarioKey = "prudente" | "realiste" | "ambitieuse";

const SCENARIOS: Record<
  ScenarioKey,
  {
    label: string;
    tagline: string;
    intensites: {
      iProduction: number;
      iConseil: number;
      iRelation: number;
      iRH: number;
      iGouvernance: number;
      iDev: number;
    };
  }
> = {
  prudente: {
    label: "Prudente",
    tagline: "Pilotes ciblés, adoption progressive",
    intensites: { iProduction: 25, iConseil: 15, iRelation: 20, iRH: 10, iGouvernance: 20, iDev: 25 },
  },
  realiste: {
    label: "Réaliste",
    tagline: "Cabinet engagé, roadmap 12 mois",
    intensites: { iProduction: 50, iConseil: 35, iRelation: 45, iRH: 25, iGouvernance: 35, iDev: 55 },
  },
  ambitieuse: {
    label: "Ambitieuse",
    tagline: "Cabinet IA-first, tous les axes activés",
    intensites: { iProduction: 80, iConseil: 65, iRelation: 75, iRH: 55, iGouvernance: 70, iDev: 80 },
  },
};

export const AIGainsSimulator = () => {
  // Contexte cabinet
  const [collabs, setCollabs] = useState(8);
  const [hoursSaisiePerCollab, setHoursSaisiePerCollab] = useState(12);
  const [tjm, setTjm] = useState(450);
  const [clientsActifs, setClientsActifs] = useState(180);
  const [honorairesMoyen, setHonorairesMoyen] = useState(2400);
  const [ltvNouveauClient, setLtvNouveauClient] = useState(6500);

  // Intensité IA sur chacun des 6 axes (0-100 %)
  const [iProduction, setIProduction] = useState(50);
  const [iConseil, setIConseil] = useState(35);
  const [iRelation, setIRelation] = useState(45);
  const [iRH, setIRH] = useState(25);
  const [iGouvernance, setIGouvernance] = useState(35);
  const [iDev, setIDev] = useState(55);

  const [scenario, setScenario] = useState<ScenarioKey | null>("realiste");
  const [pulse, setPulse] = useState(false);
  const [methodoOpen, setMethodoOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const STEPS = [
    { n: 1, label: "Scénario de départ" },
    { n: 2, label: "Votre cabinet" },
    { n: 3, label: "Intensité IA par axe" },
    { n: 4, label: "Résultats" },
  ] as const;
  const totalSteps = STEPS.length;

  const applyScenario = (key: ScenarioKey) => {
    const s = SCENARIOS[key].intensites;
    setIProduction(s.iProduction);
    setIConseil(s.iConseil);
    setIRelation(s.iRelation);
    setIRH(s.iRH);
    setIGouvernance(s.iGouvernance);
    setIDev(s.iDev);
    setScenario(key);
    setPulse(true);
    setTimeout(() => setPulse(false), 900);
  };

  const clearScenario = () => setScenario(null);

  const gains = useMemo(() => {
    const tauxHoraire = tjm / 7; // €/h facturé

    // ─── Axe 1 · Production ────────────────────────────────
    // Max 35 % des heures saisie/lettrage réellement récupérables (net des
    // temps de contrôle/révision qui restent humains).
    const hProdSem = collabs * hoursSaisiePerCollab * MAX_PROD_HEURES * (iProduction / 100);
    const eurProd = hProdSem * SEMAINES * tauxHoraire;

    // ─── Axe 2 · Conseil & pilotage ────────────────────────
    // Max : +12 % d'honoraires sur 25 % du parc × marge nette 35 %.
    const eurConseil =
      clientsActifs * MAX_CONSEIL_PARC * honorairesMoyen * MAX_CONSEIL_HONO *
      MARGE_HONORAIRES * (iConseil / 100);

    // ─── Axe 3 · Relation client ──────────────────────────
    // Max : 2,5 h/sem/collab libérées (emails, RAG, transcriptions RDV).
    const hRelSem = collabs * MAX_RELATION_H * (iRelation / 100);
    const eurRel = hRelSem * SEMAINES * tauxHoraire;

    // ─── Axe 4 · RH & organisation ────────────────────────
    // Max : -10 pts turnover, coût moyen remplacement 6 000 €.
    const eurRH = collabs * MAX_RH_COUT * MAX_RH_TAUX * (iRH / 100);

    // ─── Axe 5 · Gouvernance & conformité ─────────────────
    // Max : évitement incident RGPD (25 k€ × 8 % proba) + +15 % d'honoraires
    // sur 1,5 % du parc mid-market × marge 35 %.
    const eurGouvIncident = MAX_GOUV_INCIDENT * (iGouvernance / 100);
    const eurGouvClosing =
      clientsActifs * MAX_GOUV_CLOSING_PARC * honorairesMoyen * MAX_GOUV_CLOSING_UPLIFT *
      MARGE_HONORAIRES * (iGouvernance / 100);
    const eurGouv = eurGouvIncident + eurGouvClosing;

    // ─── Axe 6 · Développement commercial (Eligibly) ───────
    // Max : 2,5 dossiers nets signés/mois × LTV 3 ans × marge 30 %.
    const nouveauxDossiersAn = MAX_DEV_DOSSIERS_MOIS * 12 * (iDev / 100);
    const eurDev = nouveauxDossiersAn * ltvNouveauClient * MARGE_DEV;

    // ─── Coûts IA annuels ─────────────────────────────────
    const coutOutils = collabs * COUT_OUTILS_IA_PAR_COLLAB;
    const coutEligibly = iDev > 0 ? ELIGIBLY_ANNUEL : 0;
    const coutTotal = coutOutils + coutEligibly;

    // ─── Totaux ───────────────────────────────────────────
    const totalHSem = hProdSem + hRelSem;
    const totalBrut = eurProd + eurConseil + eurRel + eurRH + eurGouv + eurDev;
    const totalNet = totalBrut - coutTotal;
    const roiRatio = coutTotal > 0 ? totalBrut / coutTotal : 0;
    const paybackMois = totalBrut > 0 ? (coutTotal / totalBrut) * 12 : 0;

    // ─── Split : Économies IA vs Opportunités commerciales Eligibly ───
    // 1) Économies IA = axes 1 à 5 (temps + marges internes) − coût outils/formations IA
    const economiesBrut = eurProd + eurConseil + eurRel + eurRH + eurGouv;
    const economiesNet = economiesBrut - coutOutils;
    // 2) Opportunités commerciales = axe 6 (Eligibly) − coût Eligibly
    const opportunitesBrut = eurDev;
    const opportunitesNet = opportunitesBrut - coutEligibly;

    return {
      hProdSem,
      eurProd,
      eurConseil,
      hRelSem,
      eurRel,
      eurRH,
      eurGouv,
      nouveauxDossiersAn,
      eurDev,
      coutTotal,
      coutOutils,
      coutEligibly,
      economiesBrut,
      economiesNet,
      opportunitesBrut,
      opportunitesNet,
      totalBrut,
      totalNet,
      roiRatio,
      paybackMois,
      totalHSem,
      etpEquivalent: (totalHSem * SEMAINES) / ETP_HEURES,
    };
  }, [
    collabs,
    hoursSaisiePerCollab,
    tjm,
    clientsActifs,
    honorairesMoyen,
    ltvNouveauClient,
    iProduction,
    iConseil,
    iRelation,
    iRH,
    iGouvernance,
    iDev,
  ]);

  return (
    <section className="not-prose my-12 rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
      {/* Bandeau haut */}
      <header className="px-6 py-8 md:px-10 md:py-10 bg-gradient-to-br from-primary/90 to-primary text-primary-foreground text-center">
        <div className="flex items-center justify-center gap-2 text-[0.68rem] uppercase tracking-[0.18em] font-semibold mb-3 opacity-90">
          <Calculator className="w-3.5 h-3.5" /> Simulateur ROI IA · Cabinet d'expertise comptable
        </div>
        <h3 className="font-display text-2xl md:text-4xl font-semibold tracking-tight leading-tight">
          Combien votre cabinet gagne en 12 mois avec l'IA ?
        </h3>
        <p className="mt-2 text-sm md:text-base opacity-90 max-w-2xl mx-auto">
          Répondez en 4 étapes. Hypothèses prudentes, marges nettes appliquées.
        </p>
      </header>

      {/* Corps wizard */}
      <div className="grid md:grid-cols-[240px_1fr] bg-muted/20">
        {/* Sidebar étapes */}
        <aside className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-border bg-card">
          <div className="text-sm font-semibold text-foreground mb-4">Étapes</div>
          <ol className="space-y-1.5">
            {STEPS.map((s) => {
              const active = currentStep === s.n;
              const done = currentStep > s.n;
              return (
                <li key={s.n}>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(s.n)}
                    className={`w-full text-left flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all ${
                      active
                        ? "bg-primary/10 ring-1 ring-primary/40"
                        : "hover:bg-muted/60"
                    }`}
                  >
                    <span
                      className={`shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full text-[0.72rem] font-bold tabular-nums transition-colors ${
                        active
                          ? "bg-primary text-primary-foreground"
                          : done
                          ? "bg-primary/80 text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {done ? <Check className="w-3.5 h-3.5" /> : s.n}
                    </span>
                    <span
                      className={`text-sm leading-snug ${
                        active ? "text-foreground font-semibold" : "text-muted-foreground"
                      }`}
                    >
                      {s.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <button
            type="button"
            onClick={() => setMethodoOpen(true)}
            className="mt-6 w-full inline-flex items-center justify-center gap-1.5 text-[0.72rem] font-medium text-primary hover:text-primary/80 border border-primary/30 hover:border-primary/60 rounded-full px-3 py-1.5 transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5" /> Méthodologie & formules
          </button>
        </aside>

        {/* Contenu étape */}
        <div className="p-6 md:p-10">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 min-h-[420px]">
            {currentStep === 1 && (
              <div>
                <h4 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-1">
                  Choisissez un scénario de départ
                </h4>
                <p className="text-sm text-muted-foreground mb-6">
                  Trois presets calibrés sur les études OEC/CSOEC 2025. Vous pourrez ajuster ensuite.
                </p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {(Object.keys(SCENARIOS) as ScenarioKey[]).map((key) => {
                    const s = SCENARIOS[key];
                    const active = scenario === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => applyScenario(key)}
                        className={`text-left rounded-xl border-2 px-4 py-4 transition-all ${
                          active
                            ? "border-primary bg-primary/5 shadow-sm"
                            : "border-border bg-background hover:border-primary/50 hover:bg-primary/[0.03]"
                        }`}
                      >
                        <div className={`text-base font-semibold mb-1 ${active ? "text-primary" : "text-foreground"}`}>
                          {s.label}
                        </div>
                        <div className="text-xs text-muted-foreground leading-snug">
                          {s.tagline}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h4 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-1">
                  Votre cabinet
                </h4>
                <p className="text-sm text-muted-foreground mb-6">
                  Ajustez les 6 paramètres qui décrivent votre structure actuelle.
                </p>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                  <Slider label="Collaborateurs concernés" value={collabs} min={1} max={80} step={1}
                    onChange={(v) => { setCollabs(v); clearScenario(); }} suffix=" pers."
                    icon={<Users className="w-3.5 h-3.5" />}
                    tooltip="Effectif total (associés + collaborateurs + assistants) concerné par le déploiement IA." />
                  <Slider label="Heures/sem sur saisie & tenue" value={hoursSaisiePerCollab} min={0} max={35} step={1}
                    onChange={(v) => { setHoursSaisiePerCollab(v); clearScenario(); }} suffix=" h"
                    tooltip="Temps hebdo par collaborateur passé à saisir, lettrer, rapprocher (avant IA)." />
                  <Slider label="TJM moyen facturé" value={tjm} min={200} max={1200} step={25}
                    onChange={(v) => { setTjm(v); clearScenario(); }} suffix=" €"
                    tooltip="Taux journalier moyen facturé — sert à valoriser les heures libérées (taux horaire = TJM / 7)." />
                  <Slider label="Clients actifs" value={clientsActifs} min={10} max={800} step={10}
                    onChange={(v) => { setClientsActifs(v); clearScenario(); }} suffix=""
                    tooltip="Nombre de dossiers récurrents suivis par le cabinet." />
                  <Slider label="Honoraires moyens / an" value={honorairesMoyen} min={800} max={12000} step={100}
                    onChange={(v) => { setHonorairesMoyen(v); clearScenario(); }} suffix=" €"
                    tooltip="Panier moyen annuel par client — base pour l'upsell conseil/pilotage." />
                  <Slider label="LTV nouveau dossier" value={ltvNouveauClient} min={2000} max={30000} step={500}
                    onChange={(v) => { setLtvNouveauClient(v); clearScenario(); }} suffix=" €"
                    tooltip="Valeur générée sur 3 ans par un dossier signé via prospection IA." />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h4 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-1">
                  Intensité IA par axe
                </h4>
                <p className="text-sm text-muted-foreground mb-6">
                  0 % = pas déployé · 100 % = pleinement industrialisé. Cliquez sur ⓘ pour la formule de chaque axe.
                </p>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                  <Slider label="1 · Production comptable" value={iProduction} min={0} max={100} step={5}
                    onChange={(v) => { setIProduction(v); clearScenario(); }} suffix=" %"
                    icon={<Cpu className="w-3.5 h-3.5" />}
                    tooltip="Plafond prudent : 35 % des heures de saisie/lettrage réellement automatisables. Gain € = heures libérées × TJM/7." />
                  <Slider label="2 · Conseil & pilotage" value={iConseil} min={0} max={100} step={5}
                    onChange={(v) => { setIConseil(v); clearScenario(); }} suffix=" %"
                    icon={<TrendingUp className="w-3.5 h-3.5" />}
                    tooltip="Plafond : +12 % d'honoraires sur 25 % du parc via offres pilotage, marge nette 35 % (fourchette basse CSOEC)." />
                  <Slider label="3 · Relation client" value={iRelation} min={0} max={100} step={5}
                    onChange={(v) => { setIRelation(v); clearScenario(); }} suffix=" %"
                    icon={<MessageSquare className="w-3.5 h-3.5" />}
                    tooltip="Plafond prudent : 2,5 h/sem/collab libérées sur emails, CR et Q&A clients." />
                  <Slider label="4 · RH & organisation" value={iRH} min={0} max={100} step={5}
                    onChange={(v) => { setIRH(v); clearScenario(); }} suffix=" %"
                    icon={<UserCog className="w-3.5 h-3.5" />}
                    tooltip="Plafond : -10 pts de turnover × 6 000 € de coût moyen de remplacement × effectif concerné." />
                  <Slider label="5 · Gouvernance & conformité" value={iGouvernance} min={0} max={100} step={5}
                    onChange={(v) => { setIGouvernance(v); clearScenario(); }} suffix=" %"
                    icon={<ShieldCheck className="w-3.5 h-3.5" />}
                    tooltip="Plafond : évitement RGPD (25 k€ × 8 %) + +15 % honoraires sur 1,5 % du parc mid-market × 35 % marge." />
                  <Slider label="6 · Développement (Eligibly)" value={iDev} min={0} max={100} step={5}
                    onChange={(v) => { setIDev(v); clearScenario(); }} suffix=" %"
                    icon={<Target className="w-3.5 h-3.5" />} highlight
                    tooltip="Plafond prudent : 2,5 nouveaux dossiers nets/mois × LTV 3 ans × 30 % marge nette." />
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div>
                <div className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground font-semibold mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-primary" /> Résultat annuel
                  {scenario && (
                    <span className="ml-auto text-[0.65rem] normal-case tracking-normal bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                      {SCENARIOS[scenario].label}
                    </span>
                  )}
                </div>

                {/* Deux cartes côte à côte : Économies IA vs Opportunités commerciales Eligibly */}
                <div className={`grid md:grid-cols-2 gap-4 mb-6 transition-all ${pulse ? "ring-2 ring-primary/30 rounded-xl" : ""}`}>
                  {/* 1 · Économies IA */}
                  <div className="rounded-xl border border-border bg-muted/30 p-5">
                    <div className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground font-semibold mb-2">
                      <Cpu className="w-3.5 h-3.5" /> 1 · Économies IA
                    </div>
                    <div className="text-[0.72rem] text-muted-foreground mb-2 leading-snug">
                      Temps économisé (axes 1-5) − investissement outils &amp; formations IA
                    </div>
                    <div className={`font-display text-3xl md:text-4xl font-semibold text-foreground tabular-nums leading-none ${pulse ? "animate-pulse" : ""}`}>
                      +{fmt(gains.economiesNet)} €
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2 text-[0.7rem]">
                      <div className="rounded-md bg-background border border-border px-2 py-1.5">
                        <div className="text-[0.6rem] uppercase tracking-wider text-muted-foreground">Temps économisé</div>
                        <div className="font-display italic font-semibold tabular-nums text-sm text-foreground">+{fmt(gains.economiesBrut)} €</div>
                      </div>
                      <div className="rounded-md bg-background border border-border px-2 py-1.5">
                        <div className="text-[0.6rem] uppercase tracking-wider text-muted-foreground">Outils &amp; formations</div>
                        <div className="font-display italic font-semibold tabular-nums text-sm text-foreground">−{fmt(gains.coutOutils)} €</div>
                      </div>
                    </div>
                    <div className="mt-2 text-[0.7rem] text-muted-foreground">
                      ~{fmt(gains.totalHSem)} h/sem libérées · {gains.etpEquivalent.toFixed(1)} ETP
                    </div>
                  </div>

                  {/* 2 · Opportunités commerciales Eligibly */}
                  <div className="rounded-xl border-2 border-primary/40 bg-primary/5 p-5">
                    <div className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.14em] text-primary font-semibold mb-2">
                      <Target className="w-3.5 h-3.5" /> 2 · Opportunités commerciales · Eligibly
                    </div>
                    <div className="text-[0.72rem] text-muted-foreground mb-2 leading-snug">
                      Nouveaux dossiers signés grâce au moteur IA Eligibly (marge nette 3 ans)
                    </div>
                    <div className={`font-display text-3xl md:text-4xl font-semibold text-primary tabular-nums leading-none ${pulse ? "animate-pulse" : ""}`}>
                      +{fmt(gains.opportunitesNet)} €
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2 text-[0.7rem]">
                      <div className="rounded-md bg-background border border-border px-2 py-1.5">
                        <div className="text-[0.6rem] uppercase tracking-wider text-muted-foreground">Marge nouveaux dossiers</div>
                        <div className="font-display italic font-semibold tabular-nums text-sm text-foreground">+{fmt(gains.opportunitesBrut)} €</div>
                      </div>
                      <div className="rounded-md bg-background border border-border px-2 py-1.5">
                        <div className="text-[0.6rem] uppercase tracking-wider text-muted-foreground">Abonnement Eligibly</div>
                        <div className="font-display italic font-semibold tabular-nums text-sm text-foreground">−{fmt(gains.coutEligibly)} €</div>
                      </div>
                    </div>
                    <div className="mt-2 text-[0.7rem] text-muted-foreground">
                      ~{fmt(gains.nouveauxDossiersAn)} nouveaux dossiers/an
                    </div>
                  </div>
                </div>

                {/* Total consolidé */}
                <div className="mb-6 pb-6 border-b border-border flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <div className="text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground font-semibold">Gain net total annuel</div>
                    <div className="font-display text-2xl md:text-3xl font-semibold text-foreground tabular-nums leading-none mt-1">
                      +{fmt(gains.totalNet)} €
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[0.72rem]">
                    <span className="rounded-md bg-primary text-primary-foreground px-2.5 py-1 font-display italic font-semibold tabular-nums">
                      ROI {gains.roiRatio > 0 ? `×${gains.roiRatio.toFixed(1)}` : "—"}
                    </span>
                    <span className="text-muted-foreground">
                      Payback {gains.paybackMois > 0 ? `${gains.paybackMois.toFixed(1)} mois` : "—"}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setDetailOpen(!detailOpen)}
                  className="w-full flex items-center justify-between gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors mb-3"
                >
                  <span>Détail par axe</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${detailOpen ? "rotate-180" : ""}`} />
                </button>

                {detailOpen && (
                  <div className="space-y-2 mb-6">
                    <ResultLight icon={<Cpu className="w-4 h-4 text-primary" />} title="Production" value={`+${fmt(gains.eurProd)} €`} sub={`${fmt(gains.hProdSem)} h/sem libérées`} />
                    <ResultLight icon={<TrendingUp className="w-4 h-4 text-primary" />} title="Conseil & pilotage" value={`+${fmt(gains.eurConseil)} €`} sub="+12 % honoraires × 25 % parc" />
                    <ResultLight icon={<MessageSquare className="w-4 h-4 text-primary" />} title="Relation client" value={`+${fmt(gains.eurRel)} €`} sub={`${fmt(gains.hRelSem)} h/sem libérées`} />
                    <ResultLight icon={<UserCog className="w-4 h-4 text-primary" />} title="RH & organisation" value={`+${fmt(gains.eurRH)} €`} sub="Rétention & recrutement" />
                    <ResultLight icon={<ShieldCheck className="w-4 h-4 text-primary" />} title="Gouvernance" value={`+${fmt(gains.eurGouv)} €`} sub="RGPD + closing" />
                    <ResultLight icon={<Target className="w-4 h-4 text-primary" />} title="Développement · Eligibly" value={`+${fmt(gains.eurDev)} €`} sub={`~${fmt(gains.nouveauxDossiersAn)} dossiers/an`} highlight />
                  </div>
                )}

                <SafeLink to="/demo">
                  <Button variant="tengo" className="w-full h-11 text-sm font-semibold group">
                    Recevoir mon plan ROI personnalisé
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </SafeLink>
              </div>
            )}
          </div>

          {/* Navigation Précédent / Suivant */}
          <div className="mt-6 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setCurrentStep((n) => Math.max(1, n - 1))}
              disabled={currentStep === 1}
              className="inline-flex items-center gap-2 h-10 px-4 rounded-lg border border-border bg-card text-sm font-medium text-foreground hover:border-primary/50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Précédent
            </button>
            <div className="text-xs text-muted-foreground">
              Étape {currentStep} / {totalSteps}
            </div>
            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={() => setCurrentStep((n) => Math.min(totalSteps, n + 1))}
                className="inline-flex items-center gap-2 h-10 px-5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Suivant <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <SafeLink to="/demo">
                <Button variant="tengo" className="h-10 px-5 text-sm font-semibold">
                  Mon plan ROI
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </SafeLink>
            )}
          </div>
        </div>
      </div>

      <MethodologyDialog open={methodoOpen} onOpenChange={setMethodoOpen} />
    </section>
  );
};

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  suffix?: string;
  hint?: string;
  icon?: React.ReactNode;
  highlight?: boolean;
  tooltip?: string;
}

const Slider = ({ label, value, min, max, step, onChange, suffix = "", hint, icon, highlight, tooltip }: SliderProps) => (
  <div className={highlight ? "rounded-lg border border-primary/30 bg-primary/5 px-3 py-2.5" : ""}>
    {/* Label + valeur sur la même ligne */}
    <div className="flex items-baseline justify-between gap-3 mb-2">
      <div className="flex items-center gap-1.5 min-w-0 text-[0.82rem] font-medium text-foreground/85">
        {icon && <span className="text-primary/70 shrink-0">{icon}</span>}
        <span className="leading-snug">{label}</span>
        {tooltip && (
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button type="button" aria-label="Méthode de calcul" className="shrink-0 text-muted-foreground/60 hover:text-primary transition-colors">
                  <Info className="w-3 h-3" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-xs text-xs leading-snug">
                {tooltip}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <div className="font-display font-semibold text-foreground tabular-nums whitespace-nowrap text-base shrink-0">
        {fmt(value)}
        <span className="text-xs text-muted-foreground font-normal ml-0.5">{suffix}</span>
      </div>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full accent-primary cursor-pointer"
      aria-label={label}
    />
    {hint && <p className="mt-1.5 text-[0.7rem] text-muted-foreground leading-snug">{hint}</p>}
  </div>
);

const KpiBadge = ({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) => (
  <div className={`rounded-lg px-3 py-2 ${accent ? "bg-primary text-primary-foreground" : "bg-background/10 text-background"}`}>
    <div className={`text-[0.62rem] uppercase tracking-wider ${accent ? "text-primary-foreground/80" : "text-background/60"}`}>
      {label}
    </div>
    <div className="font-display italic font-semibold tabular-nums text-base leading-tight">{value}</div>
  </div>
);

const SectionHeading = ({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description?: string;
}) => (
  <div>
    <div className="flex items-center gap-2.5">
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/15 text-primary text-[0.72rem] font-bold tabular-nums">
        {step}
      </span>
      <h4 className="font-display text-lg md:text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h4>
    </div>
    {description && (
      <p className="text-xs text-muted-foreground mt-1.5 ml-[2.125rem] leading-relaxed">
        {description}
      </p>
    )}
  </div>
);

const ResultLine = ({
  icon,
  title,
  detail,
  value,
  highlight = false,
}: {
  icon: React.ReactNode;
  title: string;
  detail: string;
  value: string;
  highlight?: boolean;
}) => (
  <div className={`flex items-start justify-between gap-4 ${highlight ? "bg-primary/10 -mx-2 px-2 py-2 rounded-md" : ""}`}>
    <div className="flex items-start gap-2.5 min-w-0">
      <div className="mt-0.5 shrink-0">{icon}</div>
      <div className="min-w-0">
        <div className="text-sm font-medium text-background">{title}</div>
        <div className="text-[0.72rem] text-background/70 leading-snug">{detail}</div>
      </div>
    </div>
    <div className="font-display italic text-lg font-semibold text-primary tabular-nums whitespace-nowrap">
      {value}
    </div>
  </div>
);

const ResultLight = ({
  icon,
  title,
  value,
  sub,
  highlight = false,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  sub: string;
  highlight?: boolean;
}) => (
  <div className={`flex items-start justify-between gap-3 rounded-lg border px-3 py-2.5 ${highlight ? "border-primary/30 bg-primary/[0.03]" : "border-border bg-card/50"}`}>
    <div className="flex items-start gap-2 min-w-0">
      <div className="mt-0.5 shrink-0">{icon}</div>
      <div className="min-w-0">
        <div className="text-sm font-medium text-foreground">{title}</div>
        <div className="text-[0.72rem] text-muted-foreground leading-snug">{sub}</div>
      </div>
    </div>
    <div className="font-display italic text-base font-semibold text-primary tabular-nums whitespace-nowrap">
      {value}
    </div>
  </div>
);

const METHODO_AXES: Array<{
  n: string;
  title: string;
  params: string[];
  formula: string;
}> = [
  {
    n: "1",
    title: "Production comptable",
    params: [
      "Plafond : 35 % des heures de saisie/lettrage automatisables (net des contrôles humains)",
      "Curseur : intensité IA (0-100 %)",
    ],
    formula:
      "gain € = collabs × h_saisie/sem × 35 % × (intensité/100) × 45 sem × (TJM / 7)",
  },
  {
    n: "2",
    title: "Conseil & pilotage",
    params: [
      "Plafond : +12 % d'honoraires sur 25 % du parc",
      "Marge nette appliquée : 35 %",
    ],
    formula:
      "gain € = clients × 25 % × honoraires × 12 % × 35 % × (intensité/100)",
  },
  {
    n: "3",
    title: "Relation client",
    params: [
      "Plafond : 2,5 h/sem/collab libérées (emails, RAG, transcriptions RDV)",
    ],
    formula:
      "gain € = collabs × 2,5 h × (intensité/100) × 45 sem × (TJM / 7)",
  },
  {
    n: "4",
    title: "RH & organisation",
    params: [
      "Plafond : -10 pts de turnover",
      "Coût moyen de remplacement : 6 000 € (recrutement + onboarding)",
    ],
    formula: "gain € = collabs × 6 000 € × 10 % × (intensité/100)",
  },
  {
    n: "5",
    title: "Gouvernance & conformité",
    params: [
      "Évitement RGPD : 25 000 € × 8 % de probabilité",
      "Closing mid-market : +15 % d'honoraires sur 1,5 % du parc × marge 35 %",
    ],
    formula:
      "gain € = 2 000 × (intensité/100) + clients × 1,5 % × honoraires × 15 % × 35 % × (intensité/100)",
  },
  {
    n: "6",
    title: "Développement commercial (Eligibly)",
    params: [
      "Plafond : 2,5 nouveaux dossiers nets signés par mois",
      "Marge nette appliquée à la LTV 3 ans : 30 %",
    ],
    formula:
      "gain € = 2,5 × 12 × (intensité/100) × LTV × 30 %",
  },
];

const MethodologyDialog = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="font-display text-2xl">Méthodologie & formules</DialogTitle>
        <DialogDescription>
          Hypothèses volontairement prudentes — fourchette basse des études OEC Paris 2025, CSOEC
          « Parlons Data & IA », Cegid, Shine, CREOP 2026 et retours pilotes Eligibly. Toutes les
          recettes additionnelles sont pondérées par une marge nette (jamais du CA brut).
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-5 mt-2">
        <section>
          <h4 className="font-semibold text-sm text-foreground mb-2">Paramètres cabinet</h4>
          <ul className="text-xs text-muted-foreground space-y-1.5 list-disc pl-5">
            <li><strong className="text-foreground">Collaborateurs</strong> — effectif concerné par l'IA.</li>
            <li><strong className="text-foreground">Heures/sem/collab sur saisie</strong> — base pour l'automatisation production.</li>
            <li><strong className="text-foreground">TJM facturé</strong> — valorise les heures libérées (taux horaire = TJM/7).</li>
            <li><strong className="text-foreground">Clients actifs</strong> — parc pour l'upsell conseil & closing.</li>
            <li><strong className="text-foreground">Honoraires moyens/client/an</strong> — base des uplifts conseil et gouvernance.</li>
            <li><strong className="text-foreground">LTV nouveau dossier (3 ans)</strong> — valeur générée par un dossier signé via Eligibly.</li>
          </ul>
        </section>

        <section>
          <h4 className="font-semibold text-sm text-foreground mb-2">Les 6 axes d'intensité IA</h4>
          <div className="space-y-3">
            {METHODO_AXES.map((a) => (
              <div key={a.n} className="rounded-lg border border-border bg-muted/40 p-3">
                <div className="text-sm font-semibold text-foreground mb-1.5">
                  Axe {a.n} · {a.title}
                </div>
                <ul className="text-[0.72rem] text-muted-foreground space-y-1 list-disc pl-4 mb-2">
                  {a.params.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
                <code className="block text-[0.72rem] font-mono bg-background border border-border rounded px-2 py-1.5 text-foreground/90 leading-relaxed">
                  {a.formula}
                </code>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h4 className="font-semibold text-sm text-foreground mb-2">Coûts intégrés</h4>
          <ul className="text-xs text-muted-foreground space-y-1.5 list-disc pl-5">
            <li>Suite outils IA (production + LLM interne) : <strong className="text-foreground">480 €/collab/an</strong></li>
            <li>Abonnement Eligibly : <strong className="text-foreground">290 € HT/mois × 12 = 3 480 €/an</strong> (comptabilisé uniquement si l'axe 6 &gt; 0)</li>
          </ul>
        </section>

        <section>
          <h4 className="font-semibold text-sm text-foreground mb-2">Formules d'agrégation</h4>
          <div className="space-y-2 text-xs">
            <code className="block font-mono bg-muted border border-border rounded px-2 py-1.5 text-foreground/90">
              gain_brut = Σ gains des 6 axes
            </code>
            <code className="block font-mono bg-muted border border-border rounded px-2 py-1.5 text-foreground/90">
              coûts = collabs × 480 € + (axe6 &gt; 0 ? 3 480 € : 0)
            </code>
            <code className="block font-mono bg-muted border border-border rounded px-2 py-1.5 text-foreground/90">
              gain_net = gain_brut − coûts
            </code>
            <code className="block font-mono bg-muted border border-border rounded px-2 py-1.5 text-foreground/90">
              ROI = gain_brut / coûts
            </code>
            <code className="block font-mono bg-muted border border-border rounded px-2 py-1.5 text-foreground/90">
              payback (mois) = (coûts / gain_brut) × 12
            </code>
            <code className="block font-mono bg-muted border border-border rounded px-2 py-1.5 text-foreground/90">
              ETP libérés = (h_prod/sem + h_relation/sem) × 45 / 1 607
            </code>
          </div>
        </section>

        <p className="text-[0.7rem] text-muted-foreground italic leading-relaxed">
          Estimation indicative. Le ROI réel dépend de l'exécution (change management, refacturation
          effective du temps libéré, montée en compétences). À valider lors d'un audit personnalisé.
        </p>
      </div>
    </DialogContent>
  </Dialog>
);