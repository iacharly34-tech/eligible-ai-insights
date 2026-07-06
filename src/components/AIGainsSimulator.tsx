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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/SafeLink";

// Simulateur ROI IA cabinet d'expertise comptable — hypothèses issues des études
// OEC Paris (2025), CSOEC « Parlons Data & IA », Cegid, Shine, CREOP (2026)
// et retours pilotes Eligibly.

const fmt = (n: number) =>
  new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(Math.max(0, Math.round(n)));

const COUT_OUTILS_IA_PAR_COLLAB = 480; // €/an — moyenne suites production + LLM interne
const ELIGIBLY_ANNUEL = 290 * 12; // 3 480 €/an
const SEMAINES = 45;
const ETP_HEURES = 1607;

export const AIGainsSimulator = () => {
  // Contexte cabinet
  const [collabs, setCollabs] = useState(8);
  const [hoursSaisiePerCollab, setHoursSaisiePerCollab] = useState(12);
  const [tjm, setTjm] = useState(450);
  const [clientsActifs, setClientsActifs] = useState(180);
  const [honorairesMoyen, setHonorairesMoyen] = useState(2400);
  const [ltvNouveauClient, setLtvNouveauClient] = useState(8000);

  // Intensité IA sur chacun des 6 axes (0-100 %)
  const [iProduction, setIProduction] = useState(60);
  const [iConseil, setIConseil] = useState(40);
  const [iRelation, setIRelation] = useState(50);
  const [iRH, setIRH] = useState(30);
  const [iGouvernance, setIGouvernance] = useState(40);
  const [iDev, setIDev] = useState(70);

  const gains = useMemo(() => {
    const tauxHoraire = tjm / 7; // €/h facturé

    // ─── Axe 1 · Production ────────────────────────────────
    // Gain max = 60 % des heures saisie/lettrage (source Shine 2024)
    const hProdSem = collabs * hoursSaisiePerCollab * 0.6 * (iProduction / 100);
    const eurProd = hProdSem * SEMAINES * tauxHoraire;

    // ─── Axe 2 · Conseil & pilotage ────────────────────────
    // Max : +25 % d'honoraires sur 40 % du parc (offre pilotage — CSOEC)
    const eurConseil = clientsActifs * 0.4 * honorairesMoyen * 0.25 * (iConseil / 100);

    // ─── Axe 3 · Relation client ──────────────────────────
    // Max : 5 h/sem/collab libérées (emails, RAG, transcriptions RDV)
    const hRelSem = collabs * 5 * (iRelation / 100);
    const eurRel = hRelSem * SEMAINES * tauxHoraire;

    // ─── Axe 4 · RH & organisation ────────────────────────
    // Max : -15 % turnover, économie recrutement ≈ 8 000 € × 15 % × collabs
    const eurRH = collabs * 8000 * 0.15 * (iRH / 100);

    // ─── Axe 5 · Gouvernance & conformité ─────────────────
    // Max : évite 1 incident RGPD (CNIL 2024, coût médian 25 000 €) × proba
    // + +30 % de closing sur segment mid-market (2 % du parc, honoraires × 2)
    const eurGouvIncident = 25000 * 0.2 * (iGouvernance / 100);
    const eurGouvClosing = clientsActifs * 0.02 * honorairesMoyen * 0.3 * (iGouvernance / 100);
    const eurGouv = eurGouvIncident + eurGouvClosing;

    // ─── Axe 6 · Développement commercial (Eligibly) ───────
    // Max : 8 nouveaux dossiers/mois × LTV (retour pilotes Eligibly)
    const nouveauxDossiersAn = 8 * 12 * (iDev / 100);
    const eurDev = nouveauxDossiersAn * ltvNouveauClient;

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
    <section className="not-prose my-12 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-card to-card overflow-hidden">
      <div className="p-6 md:p-8 border-b border-border/60 bg-card/60">
        <div className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.14em] text-primary font-semibold mb-3">
          <Calculator className="w-3.5 h-3.5" /> Simulateur ROI IA — Cabinet d'expertise comptable
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-2">
          Combien votre cabinet gagne en 12 mois selon l'intensité IA sur chaque axe ?
        </h3>
        <p className="text-sm text-muted-foreground">
          Réglez l'intensité d'IA déployée sur chacun des 6 axes de modernisation (production, conseil, relation
          client, RH, gouvernance, développement commercial). Le simulateur calcule le gain financier annuel,
          le retour sur investissement et le temps libéré — en direct. Hypothèses issues des études OEC Paris,
          CSOEC, Cegid, Shine, CREOP et retours pilotes Eligibly.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.15fr_1fr] gap-0">
        {/* Inputs */}
        <div className="p-6 md:p-8 space-y-8 border-b lg:border-b-0 lg:border-r border-border/60">
          <div>
            <div className="text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground font-semibold mb-4">
              1 · Votre cabinet
            </div>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5">
              <Slider
            label="Nombre de collaborateurs"
            value={collabs}
            min={1}
            max={80}
            step={1}
            onChange={setCollabs}
            suffix=" pers."
            icon={<Users className="w-3.5 h-3.5" />}
          />
          <Slider
            label="Heures/semaine/collab sur saisie & tenue"
            value={hoursSaisiePerCollab}
            min={0}
            max={35}
            step={1}
            onChange={setHoursSaisiePerCollab}
            suffix=" h"
          />
          <Slider
            label="TJM moyen facturé"
            value={tjm}
            min={200}
            max={1200}
            step={25}
            onChange={setTjm}
            suffix=" €"
          />
          <Slider
            label="Clients actifs au portefeuille"
            value={clientsActifs}
            min={10}
            max={800}
            step={10}
            onChange={setClientsActifs}
            suffix=""
          />
          <Slider
            label="Honoraires moyens / client / an"
            value={honorairesMoyen}
            min={800}
            max={12000}
            step={100}
            onChange={setHonorairesMoyen}
            suffix=" €"
          />
          <Slider
            label="LTV nouveau dossier (3 ans)"
            value={ltvNouveauClient}
            min={2000}
            max={30000}
            step={500}
            onChange={setLtvNouveauClient}
            suffix=" €"
          />
            </div>
          </div>

          <div>
            <div className="text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground font-semibold mb-4">
              2 · Intensité IA par axe de modernisation
            </div>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5">
              <Slider
                label="Axe 1 · Production comptable"
                value={iProduction}
                min={0}
                max={100}
                step={5}
                onChange={setIProduction}
                suffix=" %"
                icon={<Cpu className="w-3.5 h-3.5" />}
                hint="OCR factures, pré-lettrage, révision analytique automatisée"
              />
              <Slider
                label="Axe 2 · Conseil & pilotage"
                value={iConseil}
                min={0}
                max={100}
                step={5}
                onChange={setIConseil}
                suffix=" %"
                icon={<TrendingUp className="w-3.5 h-3.5" />}
                hint="Dashboards temps réel, détection d'anomalies, rapports narratifs LLM"
              />
              <Slider
                label="Axe 3 · Relation client"
                value={iRelation}
                min={0}
                max={100}
                step={5}
                onChange={setIRelation}
                suffix=" %"
                icon={<MessageSquare className="w-3.5 h-3.5" />}
                hint="Assistant RAG, résumés d'emails, transcription RDV, portail conversationnel"
              />
              <Slider
                label="Axe 4 · RH & organisation"
                value={iRH}
                min={0}
                max={100}
                step={5}
                onChange={setIRH}
                suffix=" %"
                icon={<UserCog className="w-3.5 h-3.5" />}
                hint="Fiches de poste réécrites, formation IA, rétention collaborateurs confirmés"
              />
              <Slider
                label="Axe 5 · Gouvernance & conformité"
                value={iGouvernance}
                min={0}
                max={100}
                step={5}
                onChange={setIGouvernance}
                suffix=" %"
                icon={<ShieldCheck className="w-3.5 h-3.5" />}
                hint="Charte IA, cartographie outils, conformité RGPD/CNIL, secret professionnel"
              />
              <Slider
                label="Axe 6 · Développement commercial (Eligibly)"
                value={iDev}
                min={0}
                max={100}
                step={5}
                onChange={setIDev}
                suffix=" %"
                icon={<Target className="w-3.5 h-3.5" />}
                hint="Détection SASU/SAS temps réel, scoring, canal recommandé, accroche préparée"
                highlight
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="p-6 md:p-8 bg-foreground text-background">
          <div className="text-[0.7rem] uppercase tracking-[0.14em] text-background/70 font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-primary" /> ROI annuel — gains nets après coûts IA
          </div>

          <div className="mb-6 pb-6 border-b border-background/15">
            <div className="text-xs text-background/70 mb-1">Gain net annuel (après coûts outils IA + Eligibly)</div>
            <div className="font-display text-4xl md:text-5xl font-semibold text-primary tabular-nums leading-none">
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
              Estimation indicative. Hypothèses max (à 100 %) : gain saisie 60 % (Shine),
              +25 % honoraires sur 40 % du parc (CSOEC), 5 h/sem/collab en relation client,
              -15 % turnover (OEC), évitement RGPD 25 k€ (CNIL), 8 dossiers/mois via prospection
              IA verticale (pilotes Eligibly). Coûts intégrés : {fmt(COUT_OUTILS_IA_PAR_COLLAB)} €/collab/an
              d'outils IA + 3 480 €/an Eligibly quand l'axe 6 &gt; 0.
            </p>
          </div>
        </div>
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
}

const Slider = ({ label, value, min, max, step, onChange, suffix = "", hint, icon, highlight }: SliderProps) => (
  <div className={highlight ? "rounded-lg border border-primary/30 bg-primary/5 p-3" : ""}>
    <div className="flex items-baseline justify-between mb-2">
      <label className="text-sm font-medium text-foreground flex items-center gap-1.5">
        {icon}
        {label}
      </label>
      <span className="font-display italic text-primary font-semibold tabular-nums text-base">
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
      className="w-full accent-primary"
      aria-label={label}
    />
    {hint && <p className="mt-1 text-[0.7rem] text-muted-foreground italic">{hint}</p>}
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