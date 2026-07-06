import { useMemo, useState } from "react";
import { Calculator, Clock, Wallet, TrendingUp, Users, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/SafeLink";

// Simulateur indicatif — hypothèses fondées sur les fourchettes citées dans l'article
// (Shine, OEC, CSOEC, Cegid, CREOP, retours pilotes Eligibly).

const fmt = (n: number) =>
  new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(Math.max(0, Math.round(n)));

export const AIGainsSimulator = () => {
  const [collabs, setCollabs] = useState(8);
  const [hoursSaisiePerCollab, setHoursSaisiePerCollab] = useState(12); // h/sem sur saisie/lettrage
  const [tjm, setTjm] = useState(450); // €/jour facturé (base cabinet)
  const [clientsActifs, setClientsActifs] = useState(180);
  const [honorairesMoyen, setHonorairesMoyen] = useState(2400); // €/an/client
  const [ltvNouveauClient, setLtvNouveauClient] = useState(8000); // €/dossier sur 3 ans
  const [maturiteIA, setMaturiteIA] = useState(50); // 0-100 : facteur d'application des gains

  const gains = useMemo(() => {
    const factor = maturiteIA / 100;
    const tauxHoraire = tjm / 7; // €/h facturé
    const semaines = 45; // semaines travaillées/an

    // Axe 1 — Production : 45% (mid 30-60%) des heures saisie gagnées
    const hProdSem = collabs * hoursSaisiePerCollab * 0.45 * factor;
    const eurProd = hProdSem * semaines * tauxHoraire;

    // Axe 2 — Conseil : +20% d'honoraires sur 30% du parc (upsell pilotage)
    const eurConseil = clientsActifs * 0.3 * honorairesMoyen * 0.2 * factor;

    // Axe 3 — Relation client : ~3h/sem/collab gagnées (emails, RAG, transcriptions)
    const hRelSem = collabs * 3 * factor;
    const eurRel = hRelSem * semaines * tauxHoraire;

    // Axe 6 — Dev commercial : 5 nouveaux dossiers/mois (mid 3-8) × LTV
    const nouveauxDossiersAn = 5 * 12 * factor;
    const eurDev = nouveauxDossiersAn * ltvNouveauClient;

    const totalHSem = hProdSem + hRelSem;
    const totalEur = eurProd + eurConseil + eurRel + eurDev;

    return {
      hProdSem,
      eurProd,
      eurConseil,
      hRelSem,
      eurRel,
      nouveauxDossiersAn,
      eurDev,
      totalHSem,
      totalEur,
      etpEquivalent: (totalHSem * semaines) / 1607, // 1607h = ETP légal FR
    };
  }, [collabs, hoursSaisiePerCollab, tjm, clientsActifs, honorairesMoyen, ltvNouveauClient, maturiteIA]);

  return (
    <section className="not-prose my-12 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-card to-card overflow-hidden">
      <div className="p-6 md:p-8 border-b border-border/60 bg-card/60">
        <div className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.14em] text-primary font-semibold mb-3">
          <Calculator className="w-3.5 h-3.5" /> Simulateur — Gains IA cabinet
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-2">
          Combien votre cabinet peut gagner en 12 mois ?
        </h3>
        <p className="text-sm text-muted-foreground">
          Estimation indicative, basée sur les fourchettes des études OEC, CSOEC, Cegid, Shine et retours pilotes.
          Ajustez les curseurs à votre réalité — les gains se recalculent en direct.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-0">
        {/* Inputs */}
        <div className="p-6 md:p-8 space-y-6 border-b md:border-b-0 md:border-r border-border/60">
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
          <Slider
            label="Maturité IA déployée"
            value={maturiteIA}
            min={10}
            max={100}
            step={5}
            onChange={setMaturiteIA}
            suffix=" %"
            hint="0% = statu quo · 100% = tous les axes couverts"
          />
        </div>

        {/* Results */}
        <div className="p-6 md:p-8 bg-foreground text-background">
          <div className="text-[0.7rem] uppercase tracking-[0.14em] text-background/70 font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-primary" /> Gains annuels estimés
          </div>

          <div className="mb-6 pb-6 border-b border-background/15">
            <div className="text-xs text-background/70 mb-1">Total gain annuel potentiel</div>
            <div className="font-display text-4xl md:text-5xl font-semibold text-primary tabular-nums leading-none">
              {fmt(gains.totalEur)} €
            </div>
            <div className="mt-2 text-xs text-background/70">
              soit ~{fmt(gains.totalHSem)} h/semaine libérées · équivalent à {gains.etpEquivalent.toFixed(1)} ETP
            </div>
          </div>

          <div className="space-y-4">
            <ResultLine
              icon={<Clock className="w-4 h-4 text-primary" />}
              title="Axe 1 · Production"
              detail={`${fmt(gains.hProdSem)} h/sem gagnées sur saisie/lettrage`}
              value={`+${fmt(gains.eurProd)} €`}
            />
            <ResultLine
              icon={<TrendingUp className="w-4 h-4 text-primary" />}
              title="Axe 2 · Conseil & pilotage"
              detail="+20 % d'honoraires sur 30 % du parc"
              value={`+${fmt(gains.eurConseil)} €`}
            />
            <ResultLine
              icon={<Clock className="w-4 h-4 text-primary" />}
              title="Axe 3 · Relation client"
              detail={`${fmt(gains.hRelSem)} h/sem libérées (emails, RAG, CR)`}
              value={`+${fmt(gains.eurRel)} €`}
            />
            <ResultLine
              icon={<Wallet className="w-4 h-4 text-primary" />}
              title="Axe 6 · Développement commercial"
              detail={`~${fmt(gains.nouveauxDossiersAn)} nouveaux dossiers signés / an`}
              value={`+${fmt(gains.eurDev)} €`}
              highlight
            />
          </div>

          <div className="mt-6 pt-5 border-t border-background/15">
            <SafeLink to="/demo">
              <Button variant="tengo" className="w-full h-11 text-sm font-semibold group">
                Chiffrer mon plan sur mesure
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </SafeLink>
            <p className="mt-3 text-[0.7rem] text-background/60 leading-relaxed">
              Estimation indicative. Hypothèses : 45 sem./an, +45 % de gain saisie (Shine),
              +20 % honoraires sur 30 % du parc (CSOEC), 5 dossiers/mois via prospection IA
              (retour pilotes Eligibly). Les gains RH et gouvernance ne sont pas monétisés ici.
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
}

const Slider = ({ label, value, min, max, step, onChange, suffix = "", hint, icon }: SliderProps) => (
  <div>
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