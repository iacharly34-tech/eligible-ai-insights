import { useState, type ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Building2,
  MapPin,
  Calendar,
  Euro,
  Briefcase,
  User,
  Mail as MailIcon,
  Linkedin,
  Phone,
  Send,
  Check,
  X,
  Clock3,
  Target,
  ShieldCheck,
  AlertTriangle,
  type LucideIcon,
} from "lucide-react";
import lead from "@/data/exemple-fiche-lead.json";
import chiffres from "@/data/chiffres-verifies.json";

type Status = "nouveau" | "contacte" | "ecarte";

const daysSince = (iso: string) => {
  const d = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  return Math.max(0, d);
};
const fmt = (iso: string) => new Date(iso).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" });

const CANAL_LABEL: Record<string, { label: string; icon: LucideIcon }> = {
  courrier_siege: { label: "Courrier au siège", icon: Send },
  linkedin_dirigeant: { label: "LinkedIn du dirigeant", icon: Linkedin },
  email_professionnel: { label: "Email professionnel", icon: MailIcon },
  telephone: { label: "Téléphone", icon: Phone },
};

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-primary">
      {children}
    </div>
  );
}

function InfoTile({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: ReactNode }) {
  return (
    <div className="grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-3 rounded-lg border border-border bg-background p-3">
      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-primary/10">
        <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <div className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">{label}</div>
        <div className="mt-0.5 text-sm font-medium leading-snug text-foreground">{value}</div>
      </div>
    </div>
  );
}

function DecisionMetric({ icon: Icon, label, value, detail }: { icon: LucideIcon; label: string; value: ReactNode; detail?: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="mb-2 flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
        {label}
      </div>
      <div className="font-display text-xl font-semibold leading-none text-foreground">{value}</div>
      {detail && <div className="mt-1 text-xs leading-snug text-muted-foreground">{detail}</div>}
    </div>
  );
}

function QualityMetric({ value, label }: { value: number; label: string }) {
  return (
    <div className="rounded-lg bg-background p-3">
      <div className="font-display text-2xl font-semibold tabular-nums text-foreground">{value} %</div>
      <div className="mt-0.5 text-xs leading-snug text-muted-foreground">{label}</div>
    </div>
  );
}

/** Fiche lead interactive construite sur un exemple 100 % fictif. */
export const LeadFicheDemo = () => {
  const [status, setStatus] = useState<Status>("nouveau");
  const [showLetter, setShowLetter] = useState(false);
  const s = lead.societe;
  const age = daysSince(s.date_creation);
  const freshness = age <= 30 ? "Très récent" : age <= 90 ? "Dans la fenêtre de 90 jours" : "Hors fenêtre de 90 jours";
  const tech = chiffres.verticales.Tech;
  const availableChannels = Object.entries(lead.canaux).filter(([, value]) => value !== "non trouvé");
  const recommendedChannel = CANAL_LABEL[availableChannels[0]?.[0] ?? "courrier_siege"]?.label ?? "Courrier au siège";
  const statusLabel: Record<Status, string> = { nouveau: "À traiter", contacte: "Contacté", ecarte: "Écarté" };

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
      <div className="border-b border-border bg-accent/10 px-4 py-2.5 text-xs font-semibold leading-snug text-foreground sm:px-5">
        Exemple fictif — société, dirigeant, SIREN et adresse sont inventés.
      </div>

      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-b border-border p-4 sm:p-5 lg:p-6">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="min-w-0 font-display text-xl font-semibold leading-tight text-foreground sm:text-2xl">
              {s.denomination}
            </h2>
            <Badge variant={status === "ecarte" ? "destructive" : "outline"}>{statusLabel[status]}</Badge>
          </div>
          <p className="mt-1 text-sm leading-snug text-muted-foreground">
            {s.forme} · {s.activite} · {s.ville}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge variant="outline">Créée le {fmt(s.date_creation)}</Badge>
            <Badge variant="outline">Récence : {age} j</Badge>
          </div>
        </div>
        <div className="shrink-0 text-right">
          <div className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Score</div>
          <div className="font-display text-4xl font-semibold leading-none tabular-nums text-primary">
            {lead.score}<span className="text-lg text-muted-foreground">/100</span>
          </div>
          <Badge className="mt-2 border-0 bg-primary text-primary-foreground">{lead.niveau}</Badge>
        </div>
      </div>

      <div className="grid gap-3 border-b border-border bg-muted/25 p-4 sm:grid-cols-2 lg:grid-cols-4 lg:p-5">
        <DecisionMetric icon={Target} label="Priorité" value={lead.niveau} detail="Score expliqué" />
        <DecisionMetric icon={Clock3} label="Timing" value={`${age} jours`} detail={freshness} />
        <DecisionMetric icon={Send} label="Canal" value={recommendedChannel} detail="Action recommandée" />
        <DecisionMetric icon={Calendar} label="Échéance" value={fmt(lead.accroche.premier_bilan)} detail="Premier bilan" />
      </div>

      <div className="grid gap-0 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]">
        <div className="space-y-6 border-b border-border p-4 sm:p-5 lg:border-b-0 lg:border-r lg:p-6">
          <section>
            <SectionTitle>Pourquoi ce score</SectionTitle>
            <ul className="space-y-2.5">
              {lead.signaux_positifs.filter((x) => !x.startsWith("Créée il y a")).map((x) => (
                <li key={x} className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-2 text-sm leading-relaxed text-foreground">
                  <Check className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                  <span>{x}</span>
                </li>
              ))}
              {lead.points_a_verifier.map((x) => (
                <li key={x} className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-2 text-sm leading-relaxed text-muted-foreground">
                  <AlertTriangle className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <SectionTitle>Profil du dirigeant</SectionTitle>
            <div className="rounded-lg border border-border bg-background p-4">
              <p className="text-sm font-semibold leading-relaxed text-foreground">{lead.dirigeant.profil}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{lead.dirigeant.explication_profil}</p>
            </div>
          </section>

          <section>
            <SectionTitle>Angle d'approche</SectionTitle>
            <p className="rounded-lg border border-border bg-primary/[0.04] p-4 text-sm leading-relaxed text-foreground">
              {lead.accroche.texte}
            </p>
          </section>

          {showLetter && (
            <section className="rounded-lg border border-border bg-background p-4 text-sm leading-relaxed text-foreground">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Aperçu — courrier adressé au siège ({s.ville})</p>
              <p>Madame, Monsieur,</p>
              <p className="mt-2">Félicitations pour la création de {s.denomination.replace(" (exemple)", "")}. Votre premier exercice clôturera le {fmt(lead.accroche.premier_bilan)} : les choix faits d'ici là — IS ou IR, rémunération du dirigeant, organisation comptable — conditionneront ce premier bilan.</p>
              <p className="mt-2">Notre cabinet accompagne des créateurs dans votre secteur. Je vous propose un échange de 20 minutes pour faire le point.</p>
              <p className="mt-4 text-xs text-muted-foreground">Information : vos coordonnées proviennent des registres publics (RNE, Sirene). Vous pouvez vous opposer à tout nouvel envoi en nous écrivant.</p>
            </section>
          )}
        </div>

        <aside className="space-y-6 bg-muted/15 p-4 sm:p-5 lg:p-6">
          <section>
            <SectionTitle>Données clés</SectionTitle>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <InfoTile icon={Building2} label="Forme juridique" value={s.forme} />
              <InfoTile icon={Briefcase} label="Activité NAF" value={s.activite} />
              <InfoTile icon={Euro} label="Capital" value={s.capital} />
              <InfoTile icon={User} label="Dirigeant" value={`${lead.dirigeant.nom_affiche}, ${lead.dirigeant.qualite}, ${lead.dirigeant.age} ans`} />
              <InfoTile icon={MapPin} label="Siège" value={`${s.ville} — courrier vérifié`} />
              <InfoTile icon={Calendar} label="Premier bilan" value={fmt(lead.accroche.premier_bilan)} />
            </div>
          </section>

          <section>
            <SectionTitle>Points de contact</SectionTitle>
            <ul className="divide-y divide-border rounded-lg border border-border bg-background">
              {Object.entries(lead.canaux).map(([k, v]) => {
                const c = CANAL_LABEL[k];
                const ok = v !== "non trouvé";
                const Icon = c?.icon;
                return (
                  <li key={k} className={cn("grid grid-cols-[1.25rem_minmax(0,1fr)_auto] items-center gap-2 px-3 py-2.5 text-sm", ok ? "text-foreground" : "text-muted-foreground")}>
                    {Icon && <Icon className="h-4 w-4 text-primary" aria-hidden="true" />}
                    <span className={cn("min-w-0", !ok && "line-through")}>{c?.label ?? k}</span>
                    <span className={cn("text-right text-xs font-medium", ok ? "text-foreground" : "text-muted-foreground")}>{v}</span>
                  </li>
                );
              })}
            </ul>
          </section>

          <section>
            <SectionTitle>Conformité & marqueurs</SectionTitle>
            <div className="space-y-2 rounded-lg border border-border bg-background p-4 text-sm leading-relaxed text-foreground">
              <p className="flex items-start gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />Adresse courrier vérifiée pour activation postale.</p>
              <p>Domicilié chez un cabinet comptable : <span className="font-semibold">{lead.marqueurs.domicilie_chez_un_cabinet_comptable ? "oui" : "non"}</span></p>
              <p>Société de domiciliation : <span className="font-semibold">{lead.marqueurs.domiciliation ? "oui" : "non"}</span></p>
            </div>
          </section>
        </aside>
      </div>

      <div className="border-t border-border bg-background p-4 sm:p-5 lg:p-6">
        <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
          <div>
            <SectionTitle>Actions cabinet</SectionTitle>
            <p className="text-sm text-muted-foreground">Le statut de la fiche et l’accroche restent visibles pendant le traitement.</p>
          </div>
          <div className="grid gap-2 sm:flex sm:flex-wrap sm:justify-end">
            <Button className="w-full sm:w-auto" onClick={() => setShowLetter((v) => !v)}>
              <Send className="h-4 w-4" />{showLetter ? "Masquer le courrier" : "Générer le courrier"}
            </Button>
            <Button className="w-full sm:w-auto" variant="outline" onClick={() => setStatus("contacte")}>
              <Check className="h-4 w-4" />Marquer contacté
            </Button>
            <Button className="w-full sm:w-auto" variant="ghost" onClick={() => setStatus(status === "ecarte" ? "nouveau" : "ecarte")}>
              <X className="h-4 w-4" />{status === "ecarte" ? "Réintégrer" : "Écarter"}
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-muted/25 p-4 sm:p-5 lg:p-6">
        <SectionTitle>Qualité mesurée sur la verticale Tech — septembre 2026</SectionTitle>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <QualityMetric value={tech.dirigeant_identifie} label="dirigeant identifié" />
          <QualityMetric value={tech.adresse_courrier_valide} label="adresse courrier valide" />
          <QualityMetric value={tech.linkedin_dirigeant} label="LinkedIn retrouvé" />
          <QualityMetric value={tech.deja_chez_un_cabinet} label="déjà domiciliées chez un cabinet" />
        </div>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">Source : {chiffres._meta.source}. Périmètre : {chiffres._meta.perimetre}. Mesures ponctuelles, non extrapolables à un volume par cabinet.</p>
      </div>
    </div>
  );
};
