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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/SafeLink";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
      {/* Header */}
      <header className="px-6 py-6 md:px-8 md:py-7 border-b border-border bg-gradient-to-br from-primary/8 via-card to-card">
        <div className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.16em] text-primary font-semibold mb-3">
          <Calculator className="w-3.5 h-3.5" /> Simulateur ROI IA · Cabinet d'expertise comptable
        </div>
        <h3 className="font-display text-[1.6rem] md:text-3xl font-semibold tracking-tight leading-tight mb-2">
          Combien votre cabinet gagne réellement en 12 mois selon l'intensité IA déployée ?
        </h3>
        <p className="text-sm text-muted-foreground max-w-3xl leading-relaxed">
          Réglez 6 curseurs d'intensité (production, conseil, relation, RH, gouvernance, développement).
          Le simulateur applique des <strong className="text-foreground/90">hypothèses prudentes</strong> (fourchette
          basse des études OEC / CSOEC / Cegid / CREOP) et pondère les recettes additionnelles par une
          marge nette réaliste — pas de CA brut.
        </p>
      </header>

      {/* Scénarios */}
      <div className="px-6 py-5 md:px-8 border-b border-border bg-muted/30">
        <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground font-semibold mb-3">
          <Wand2 className="w-3.5 h-3.5" /> Scénarios pré-remplis
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {(Object.keys(SCENARIOS) as ScenarioKey[]).map((key) => {
            const s = SCENARIOS[key];
            const active = scenario === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => applyScenario(key)}
                className={`text-left rounded-xl border p-3.5 transition-all ${
                  active
                    ? "border-primary bg-primary/10 shadow-sm"
                    : "border-border bg-background hover:border-primary/50 hover:bg-primary/5"
                }`}
              >
                <div className={`text-sm font-semibold ${active ? "text-primary" : "text-foreground"}`}>
                  {s.label}
                </div>
                <div className="text-[0.72rem] text-muted-foreground leading-snug mt-0.5">{s.tagline}</div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.05fr_1fr]">
        {/* Inputs */}
        <div className="p-6 md:p-8 space-y-8 border-b lg:border-b-0 lg:border-r border-border">
          <div>
            <SectionHeading step="1" title="Votre cabinet" description="Taille, économie et portefeuille." />
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-6 mt-5">
              <Slider
            label="Nombre de collaborateurs"
            value={collabs}
            min={1}
            max={80}
            step={1}
            onChange={(v) => { setCollabs(v); clearScenario(); }}
            suffix=" pers."
            icon={<Users className="w-3.5 h-3.5" />}
            hint="Effectif total (associés + collaborateurs + assistants) concerné par l'IA."
          />
          <Slider
            label="Heures/semaine/collab sur saisie & tenue"
            value={hoursSaisiePerCollab}
            min={0}
            max={35}
            step={1}
            onChange={(v) => { setHoursSaisiePerCollab(v); clearScenario(); }}
            suffix=" h"
            hint="Temps hebdo par collaborateur passé à saisir, lettrer, rapprocher (avant IA)."
          />
          <Slider
            label="TJM moyen facturé"
            value={tjm}
            min={200}
            max={1200}
            step={25}
            onChange={(v) => { setTjm(v); clearScenario(); }}
            suffix=" €"
            hint="Taux journalier moyen facturé — sert à valoriser les heures libérées."
          />
          <Slider
            label="Clients actifs au portefeuille"
            value={clientsActifs}
            min={10}
            max={800}
            step={10}
            onChange={(v) => { setClientsActifs(v); clearScenario(); }}
            suffix=""
            hint="Nombre de dossiers récurrents suivis par le cabinet."
          />
          <Slider
            label="Honoraires moyens / client / an"
            value={honorairesMoyen}
            min={800}
            max={12000}
            step={100}
            onChange={(v) => { setHonorairesMoyen(v); clearScenario(); }}
            suffix=" €"
            hint="Panier moyen annuel par client — base pour l'upsell conseil/pilotage."
          />
          <Slider
            label="LTV nouveau dossier (3 ans)"
            value={ltvNouveauClient}
            min={2000}
            max={30000}
            step={500}
            onChange={(v) => { setLtvNouveauClient(v); clearScenario(); }}
            suffix=" €"
            hint="Valeur générée sur 3 ans par un dossier signé via prospection IA."
          />
            </div>
          </div>

          <div>
            <SectionHeading
              step="2"
              title="Intensité IA par axe de modernisation"
              description="0 % = aucun déploiement · 100 % = axe pleinement industrialisé. Passez la souris sur ⓘ pour la méthode."
            />
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-6 mt-5">
              <Slider
                label="Axe 1 · Production comptable"
                value={iProduction}
                min={0}
                max={100}
                step={5}
                onChange={(v) => { setIProduction(v); clearScenario(); }}
                suffix=" %"
                icon={<Cpu className="w-3.5 h-3.5" />}
                hint="OCR factures, pré-lettrage, révision analytique automatisée"
                tooltip="Plafond prudent : 35 % des heures de saisie/lettrage réellement automatisables (net du temps de contrôle humain). Gain € = heures libérées × TJM/7."
              />
              <Slider
                label="Axe 2 · Conseil & pilotage"
                value={iConseil}
                min={0}
                max={100}
                step={5}
                onChange={(v) => { setIConseil(v); clearScenario(); }}
                suffix=" %"
                icon={<TrendingUp className="w-3.5 h-3.5" />}
                hint="Dashboards temps réel, détection d'anomalies, rapports narratifs LLM"
                tooltip="Plafond : +12 % d'honoraires sur 25 % du parc via offres pilotage, pondéré par 35 % de marge nette (fourchette basse CSOEC)."
              />
              <Slider
                label="Axe 3 · Relation client"
                value={iRelation}
                min={0}
                max={100}
                step={5}
                onChange={(v) => { setIRelation(v); clearScenario(); }}
                suffix=" %"
                icon={<MessageSquare className="w-3.5 h-3.5" />}
                hint="Assistant RAG, résumés d'emails, transcription RDV, portail conversationnel"
                tooltip="Plafond prudent : 2,5 h/sem/collab libérées sur emails, CR et Q&A clients. Gain € = h × TJM/7."
              />
              <Slider
                label="Axe 4 · RH & organisation"
                value={iRH}
                min={0}
                max={100}
                step={5}
                onChange={(v) => { setIRH(v); clearScenario(); }}
                suffix=" %"
                icon={<UserCog className="w-3.5 h-3.5" />}
                hint="Fiches de poste réécrites, formation IA, rétention collaborateurs confirmés"
                tooltip="Plafond : -10 pts de turnover × 6 000 € de coût moyen de remplacement (recrutement + onboarding) × effectif concerné."
              />
              <Slider
                label="Axe 5 · Gouvernance & conformité"
                value={iGouvernance}
                min={0}
                max={100}
                step={5}
                onChange={(v) => { setIGouvernance(v); clearScenario(); }}
                suffix=" %"
                icon={<ShieldCheck className="w-3.5 h-3.5" />}
                hint="Charte IA, cartographie outils, conformité RGPD/CNIL, secret professionnel"
                tooltip="Plafond : évitement RGPD (25 k€ × 8 % de proba) + +15 % d'honoraires sur 1,5 % du parc mid-market × 35 % marge."
              />
              <Slider
                label="Axe 6 · Développement commercial (Eligibly)"
                value={iDev}
                min={0}
                max={100}
                step={5}
                onChange={(v) => { setIDev(v); clearScenario(); }}
                suffix=" %"
                icon={<Target className="w-3.5 h-3.5" />}
                hint="Détection SASU/SAS temps réel, scoring, canal recommandé, accroche préparée"
                highlight
                tooltip="Plafond prudent : 2,5 nouveaux dossiers nets signés/mois × LTV 3 ans × 30 % de marge nette (retours pilotes Eligibly)."
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="p-6 md:p-8 bg-foreground text-background lg:sticky lg:top-4 lg:self-start">
          <div className="text-[0.7rem] uppercase tracking-[0.14em] text-background/70 font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-primary" /> ROI annuel — gains nets après coûts IA
            {scenario && (
              <span className="ml-auto text-[0.65rem] normal-case tracking-normal bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">
                Scénario {SCENARIOS[scenario].label}
              </span>
            )}
          </div>

          <div
            className={`mb-6 pb-6 border-b border-background/15 rounded-xl transition-all ${
              pulse ? "ring-2 ring-primary/60 ring-offset-4 ring-offset-foreground -mx-2 px-2" : ""
            }`}
          >
            <div className="text-xs text-background/70 mb-1">Gain net annuel (après coûts outils IA + Eligibly)</div>
            <div className={`font-display text-4xl md:text-5xl font-semibold text-primary tabular-nums leading-none ${pulse ? "animate-pulse" : ""}`}>
              +{fmt(gains.totalNet)} €
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3 text-[0.72rem]">
              <KpiBadge label="Gain brut" value={`${fmt(gains.totalBrut)} €`} />
              <KpiBadge label="Coûts IA" value={`-${fmt(gains.coutTotal)} €`} />
              <KpiBadge
                label="ROI"
                value={gains.roiRatio > 0 ? `×${gains.roiRatio.toFixed(1)}` : "—"}
                accent
              />
            </div>
            <div className="mt-3 text-xs text-background/70">
              ~{fmt(gains.totalHSem)} h/semaine libérées · équivalent {gains.etpEquivalent.toFixed(1)} ETP ·
              payback en {gains.paybackMois > 0 ? `${gains.paybackMois.toFixed(1)} mois` : "—"}
            </div>
          </div>

          <div className="space-y-4">
            <ResultLine
              icon={<Cpu className="w-4 h-4 text-primary" />}
              title="Axe 1 · Production"
              detail={`${fmt(gains.hProdSem)} h/sem gagnées sur saisie/lettrage`}
              value={`+${fmt(gains.eurProd)} €`}
            />
            <ResultLine
              icon={<TrendingUp className="w-4 h-4 text-primary" />}
              title="Axe 2 · Conseil & pilotage"
              detail="+25 % d'honoraires sur 40 % du parc"
              value={`+${fmt(gains.eurConseil)} €`}
            />
            <ResultLine
              icon={<MessageSquare className="w-4 h-4 text-primary" />}
              title="Axe 3 · Relation client"
              detail={`${fmt(gains.hRelSem)} h/sem libérées (emails, RAG, CR)`}
              value={`+${fmt(gains.eurRel)} €`}
            />
            <ResultLine
              icon={<UserCog className="w-4 h-4 text-primary" />}
              title="Axe 4 · RH & organisation"
              detail="Rétention & économie recrutement"
              value={`+${fmt(gains.eurRH)} €`}
            />
            <ResultLine
              icon={<ShieldCheck className="w-4 h-4 text-primary" />}
              title="Axe 5 · Gouvernance & conformité"
              detail="Évitement incident RGPD + closing mid-market"
              value={`+${fmt(gains.eurGouv)} €`}
            />
            <ResultLine
              icon={<Target className="w-4 h-4 text-primary" />}
              title="Axe 6 · Développement commercial · Eligibly"
              detail={`~${fmt(gains.nouveauxDossiersAn)} nouveaux dossiers signés / an`}
              value={`+${fmt(gains.eurDev)} €`}
              highlight
            />
            <div className="mt-2 pt-3 border-t border-background/15 flex items-center justify-between gap-4">
              <div className="text-sm font-semibold uppercase tracking-[0.12em] text-background/80">
                Total gain brut / an
              </div>
              <div className="font-display italic text-2xl font-semibold text-primary tabular-nums">
                +{fmt(gains.totalBrut)} €
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="text-xs text-background/70">− Coûts outils IA + Eligibly</div>
              <div className="font-display italic text-sm text-background/80 tabular-nums">
                −{fmt(gains.coutTotal)} €
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 pt-2 border-t border-background/15">
              <div className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                Total net / an
              </div>
              <div className="font-display italic text-3xl font-semibold text-primary tabular-nums">
                +{fmt(gains.totalNet)} €
              </div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-background/15">
            <SafeLink to="/demo">
              <Button variant="tengo" className="w-full h-11 text-sm font-semibold group">
                Recevoir mon plan ROI personnalisé
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </SafeLink>
            <p className="mt-3 text-[0.7rem] text-background/60 leading-relaxed">
              Estimation prudente. Plafonds à 100 % : saisie −35 %, conseil +12 % sur 25 % du parc
              (marge 35 %), relation client 2,5 h/sem/collab, turnover −10 pts (6 k€/remplacement),
              RGPD 25 k€ × 8 % + closing mid-market 1,5 % du parc, développement 2,5 dossiers/mois
              (marge 30 %). Coûts intégrés : {fmt(COUT_OUTILS_IA_PAR_COLLAB)} €/collab/an d'outils IA
              + 3 480 €/an Eligibly quand l'axe 6 &gt; 0. Sources : OEC Paris 2025, CSOEC, Cegid,
              Shine, CREOP 2026, pilotes Eligibly.
            </p>
          </div>
        </div>
      </div>

      <MethodologyDialog open={methodoOpen} onOpenChange={setMethodoOpen} />

      {/* Sticky mobile summary */}
      <div className="lg:hidden sticky bottom-0 left-0 right-0 bg-foreground text-background border-t-2 border-primary/40 px-4 py-3 shadow-2xl z-10 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="text-[0.6rem] uppercase tracking-wider text-background/60">Gain net / an</div>
          <div className="font-display text-xl font-semibold text-primary tabular-nums leading-tight truncate">
            +{fmt(gains.totalNet)} €
          </div>
        </div>
        <div className="text-[0.6rem] text-background/70 leading-tight text-right">
          ROI {gains.roiRatio > 0 ? `×${gains.roiRatio.toFixed(1)}` : "—"}
          <br />
          {gains.etpEquivalent.toFixed(1)} ETP
        </div>
        <SafeLink to="/demo">
          <Button variant="tengo" size="sm" className="shrink-0 h-9 text-xs font-semibold">
            Plan ROI
          </Button>
        </SafeLink>
      </div>
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
  <div className={highlight ? "rounded-lg border border-primary/30 bg-primary/5 p-3" : ""}>
    <div className="flex items-baseline justify-between gap-2 mb-2">
      <label className="text-sm font-medium text-foreground flex items-center gap-1.5 min-w-0">
        {icon}
        <span className="truncate">{label}</span>
        {tooltip && (
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button type="button" aria-label="Méthode de calcul" className="shrink-0 text-muted-foreground hover:text-primary transition-colors">
                  <Info className="w-3.5 h-3.5" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-xs text-xs leading-snug">
                {tooltip}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </label>
      <span className="font-display italic text-primary font-semibold tabular-nums text-base shrink-0">
        {fmt(value)}
        {suffix}
      </span>
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
    {hint && <p className="mt-1.5 text-[0.7rem] text-muted-foreground italic leading-snug">{hint}</p>}
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
  description: string;
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
    <p className="text-xs text-muted-foreground mt-1.5 ml-[2.125rem] leading-relaxed">
      {description}
    </p>
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