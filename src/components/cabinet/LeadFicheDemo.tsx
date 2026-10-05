import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, Calendar, Euro, Briefcase, User, Mail as MailIcon, Linkedin, Phone, Send, Check, X } from "lucide-react";
import lead from "@/data/exemple-fiche-lead.json";
import chiffres from "@/data/chiffres-verifies.json";

type Status = "nouveau" | "contacte" | "ecarte";

const daysSince = (iso: string) => {
  const d = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  return Math.max(0, d);
};
const fmt = (iso: string) => new Date(iso).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" });

const CANAL_LABEL: Record<string, { label: string; icon: typeof Linkedin }> = {
  courrier_siege: { label: "Courrier au siège", icon: Send },
  linkedin_dirigeant: { label: "LinkedIn du dirigeant", icon: Linkedin },
  email_professionnel: { label: "Email professionnel", icon: MailIcon },
  telephone: { label: "Téléphone", icon: Phone },
};

/** Fiche lead interactive construite sur un exemple 100 % fictif. */
export const LeadFicheDemo = () => {
  const [status, setStatus] = useState<Status>("nouveau");
  const [showLetter, setShowLetter] = useState(false);
  const s = lead.societe;
  const age = daysSince(s.date_creation);
  const freshness = age <= 30 ? "Très récent" : age <= 90 ? "Dans la fenêtre de 90 jours" : "Hors fenêtre de 90 jours";
  const tech = chiffres.verticales.Tech;

  return (
    <div className="rounded-2xl border border-border bg-card shadow-xs overflow-hidden">
      <div className="px-6 md:px-8 py-2.5 bg-accent/15 border-b border-border text-xs font-semibold text-foreground">
        Exemple fictif — société, dirigeant, SIREN et adresse sont inventés.
      </div>

      {/* En-tête */}
      <div className="p-6 md:p-8 border-b border-border flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="font-display text-xl md:text-2xl font-semibold text-foreground">{s.denomination}</div>
          <div className="text-sm text-muted-foreground mt-1">{s.forme} · {s.activite} · {s.ville}</div>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant="outline">Créée le {fmt(s.date_creation)}</Badge>
            <Badge variant="outline">Récence : {age} j — {freshness}</Badge>
            {status === "contacte" && <Badge className="bg-secondary text-secondary-foreground border-0">Contacté</Badge>}
            {status === "ecarte" && <Badge variant="destructive">Écarté</Badge>}
          </div>
        </div>
        <div className="text-right">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Score Eligibly</div>
          <div className="font-display text-4xl font-semibold text-primary tabular-nums">{lead.score}<span className="text-xl text-muted-foreground">/100</span></div>
          <Badge className="mt-1 bg-primary text-primary-foreground border-0">{lead.niveau}</Badge>
        </div>
      </div>

      {/* Données */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 md:p-8 border-b border-border">
        {[
          { icon: Building2, label: "Forme juridique", value: s.forme },
          { icon: Briefcase, label: "Activité (NAF)", value: s.activite },
          { icon: Euro, label: "Capital", value: s.capital },
          { icon: MapPin, label: "Siège", value: `${s.ville} — adresse vérifiée pour courrier` },
          { icon: User, label: "Dirigeant", value: `${lead.dirigeant.nom_affiche}, ${lead.dirigeant.qualite}, ${lead.dirigeant.age} ans` },
          { icon: Calendar, label: "Premier bilan", value: fmt(lead.accroche.premier_bilan) },
        ].map((f) => (
          <div key={f.label} className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <f.icon className="w-4 h-4 text-primary" aria-hidden="true" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{f.label}</div>
              <div className="text-sm text-foreground font-medium">{f.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Qualité */}
      <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8 border-b border-border">
        <div>
          <div className="text-[0.7rem] uppercase tracking-[0.14em] text-primary font-semibold mb-3">Profil du dirigeant</div>
          <p className="text-sm text-foreground font-medium">{lead.dirigeant.profil}</p>
          <p className="text-sm text-muted-foreground mt-1">{lead.dirigeant.explication_profil}</p>
          <div className="text-[0.7rem] uppercase tracking-[0.14em] text-primary font-semibold mt-6 mb-3">Pourquoi ce score</div>
          <ul className="space-y-2">
            {lead.signaux_positifs.filter((x) => !x.startsWith("Créée il y a")).map((x) => (
              <li key={x} className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />{x}</li>
            ))}
            {lead.points_a_verifier.map((x) => (
              <li key={x} className="flex gap-2 text-sm text-muted-foreground"><span className="w-4 text-center font-bold text-accent-foreground">!</span>{x}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[0.7rem] uppercase tracking-[0.14em] text-primary font-semibold mb-3">Points de contact trouvés</div>
          <ul className="space-y-2">
            {Object.entries(lead.canaux).map(([k, v]) => {
              const c = CANAL_LABEL[k];
              const ok = v !== "non trouvé";
              return (
                <li key={k} className={`flex items-center gap-2 text-sm ${ok ? "text-foreground" : "text-muted-foreground line-through"}`}>
                  {c && <c.icon className="w-4 h-4" aria-hidden="true" />}{c?.label ?? k} — {v}
                </li>
              );
            })}
          </ul>
          <div className="text-[0.7rem] uppercase tracking-[0.14em] text-primary font-semibold mt-6 mb-3">Marqueurs</div>
          <p className="text-sm text-foreground">Domicilié chez un cabinet comptable : {lead.marqueurs.domicilie_chez_un_cabinet_comptable ? "oui" : "non"}</p>
          <p className="text-sm text-foreground">Société de domiciliation : {lead.marqueurs.domiciliation ? "oui" : "non"}</p>
        </div>
      </div>

      {/* Accroche + actions */}
      <div className="p-6 md:p-8 bg-primary/[0.03]">
        <div className="text-[0.7rem] uppercase tracking-[0.14em] text-primary font-semibold mb-3">Angle d'approche</div>
        <p className="rounded-lg border border-border bg-card p-4 text-sm text-foreground/85 leading-relaxed">{lead.accroche.texte}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Button size="sm" onClick={() => setShowLetter((v) => !v)}><Send className="w-4 h-4" />{showLetter ? "Masquer le courrier" : "Générer le courrier"}</Button>
          <Button size="sm" variant="outline" onClick={() => setStatus("contacte")}><Check className="w-4 h-4" />Marquer comme contacté</Button>
          <Button size="sm" variant="ghost" onClick={() => setStatus(status === "ecarte" ? "nouveau" : "ecarte")}><X className="w-4 h-4" />{status === "ecarte" ? "Réintégrer" : "Écarter ce lead"}</Button>
        </div>
        {showLetter && (
          <div className="mt-4 rounded-lg border border-border bg-background p-5 text-sm leading-relaxed text-foreground">
            <p className="text-muted-foreground text-xs mb-3">Aperçu — courrier adressé au siège ({s.ville})</p>
            <p>Madame, Monsieur,</p>
            <p className="mt-2">Félicitations pour la création de {s.denomination.replace(" (exemple)", "")}. Votre premier exercice clôturera le {fmt(lead.accroche.premier_bilan)} : les choix faits d'ici là — IS ou IR, rémunération du dirigeant, organisation comptable — conditionneront ce premier bilan.</p>
            <p className="mt-2">Notre cabinet accompagne des créateurs dans votre secteur. Je vous propose un échange de 20 minutes pour faire le point.</p>
            <p className="mt-4 text-xs text-muted-foreground">Information : vos coordonnées proviennent des registres publics (RNE, Sirene). Vous pouvez vous opposer à tout nouvel envoi en nous écrivant.</p>
          </div>
        )}
      </div>

      {/* Qualité mesurée */}
      <div className="p-6 md:p-8 border-t border-border">
        <div className="text-[0.7rem] uppercase tracking-[0.14em] text-primary font-semibold mb-3">Qualité mesurée sur la verticale Tech (septembre 2026)</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { v: tech.dirigeant_identifie, l: "dirigeant identifié" },
            { v: tech.adresse_courrier_valide, l: "adresse courrier valide" },
            { v: tech.linkedin_dirigeant, l: "LinkedIn retrouvé" },
            { v: tech.deja_chez_un_cabinet, l: "déjà domiciliées chez un cabinet (signalées)" },
          ].map((k) => (
            <div key={k.l}>
              <div className="font-display text-2xl font-semibold text-foreground tabular-nums">{k.v} %</div>
              <div className="text-xs text-muted-foreground">{k.l}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-3">Source : {chiffres._meta.source}. Périmètre : {chiffres._meta.perimetre}. Mesures ponctuelles, non extrapolables à un volume par cabinet.</p>
      </div>
    </div>
  );
};
