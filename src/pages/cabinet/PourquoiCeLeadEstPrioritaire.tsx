import { LandingCabinetLayout } from "./LandingCabinetLayout";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Calendar, Euro, Briefcase, Linkedin, Mail } from "lucide-react";

const PourquoiCeLeadEstPrioritaire = () => (
  <LandingCabinetLayout
    seoTitle="Pourquoi ce lead est prioritaire — fiche type Eligibly | Score expliqué"
    seoDescription="Exemple concret de fiche lead cabinet : SASU conseil IT à Paris, capital 5 000 €, score 84/100. Signaux positifs, points à vérifier, canal d'approche recommandé et accroche prête à envoyer."
    canonicalPath="/pourquoi-ce-lead-est-prioritaire"
    eyebrow="Fiche lead — exemple"
    h1a="Pourquoi ce lead"
    h1b="est prioritaire"
    h1c="cette semaine ?"
    intro="Ce que vous recevez pour chaque société qualifiée : une fiche unique qui condense la donnée officielle, le contexte dirigeant, le score expliqué et l'accroche recommandée. Voici un exemple réel (données anonymisées)."
    bullets={[
      "Score 0-100 calculé sur 12 critères, chaque critère visible",
      "3 signaux positifs, 2 points à vérifier, 1 alerte éventuelle",
      "Canal d'approche recommandé + accroche prête à envoyer",
      "Contact dirigeant vérifié (email pro + LinkedIn)",
    ]}
    ctaPrimary="Recevoir une fiche réelle"
    ctaNote="3 fiches leads livrées sous 48 h pour votre zone."
  >
    <section className="py-14 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
          {/* Header lead */}
          <div className="p-6 md:p-8 border-b border-border bg-gradient-to-br from-primary/5 to-transparent">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-lg font-semibold">JD</div>
                <div>
                  <div className="font-display text-xl font-semibold text-foreground">Jean Dupont · Nova Conseil IT</div>
                  <div className="text-sm text-muted-foreground">SASU · Conseil informatique · Immatriculée il y a 6 jours</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Score cabinet</div>
                <div className="font-display text-4xl font-semibold text-primary tabular-nums">84<span className="text-xl text-muted-foreground">/100</span></div>
                <Badge className="mt-1 bg-emerald-50 text-emerald-700 border-0">Priorité haute</Badge>
              </div>
            </div>
          </div>

          {/* Data grid */}
          <div className="grid sm:grid-cols-2 gap-4 p-6 md:p-8 border-b border-border">
            {[
              { icon: Building2, label: "Forme juridique", value: "SASU — associé unique" },
              { icon: MapPin,    label: "Zone",             value: "Paris 11e (siège)" },
              { icon: Euro,      label: "Capital social",   value: "5 000 €" },
              { icon: Briefcase, label: "Code NAF",         value: "62.02A — Conseil systèmes informatiques" },
              { icon: Calendar,  label: "Immatriculation",  value: "20 juin 2026 (INPI · BODACC)" },
              { icon: Linkedin,  label: "Dirigeant",        value: "Jean Dupont — ex-CTO scale-up SaaS (5 ans)" },
            ].map((f, i) => (
              <div key={i} className="flex items-start gap-3">
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

          {/* Reasons */}
          <div className="p-6 md:p-8 space-y-4 border-b border-border">
            <div className="text-[0.7rem] uppercase tracking-[0.14em] text-primary font-semibold">Pourquoi ce score</div>
            <div className="space-y-2.5">
              <div className="flex gap-3 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" /><span><strong>Signal positif</strong> — SASU associé unique + capital 5 k€ : profil freelance premium, besoin BNC / TVA / bilan d'ouverture immédiat.</span></div>
              <div className="flex gap-3 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" /><span><strong>Signal positif</strong> — Dirigeant ex-CTO scale-up : maturité financière, comprend la valeur d'un conseil comptable.</span></div>
              <div className="flex gap-3 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" /><span><strong>Signal positif</strong> — Immatriculée il y a 6 jours : fenêtre d'acquisition de 3 semaines avant qu'un cabinet concurrent prenne le dossier.</span></div>
              <div className="flex gap-3 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" /><span><strong>Point à vérifier</strong> — Vérifier s'il opère via une holding personnelle (JD Holding SAS immatriculée en 2023).</span></div>
              <div className="flex gap-3 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" /><span><strong>Point à vérifier</strong> — Adresse de domiciliation : présence à Paris 11e ou boîte postale ?</span></div>
            </div>
          </div>

          {/* Recommandation */}
          <div className="p-6 md:p-8 bg-primary/[0.03]">
            <div className="text-[0.7rem] uppercase tracking-[0.14em] text-primary font-semibold mb-3">Approche recommandée</div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge className="bg-[hsl(210_100%_50%/0.10)] text-[hsl(210_100%_38%)] border-0"><Linkedin className="w-3 h-3 mr-1" />LinkedIn</Badge>
              <span className="text-xs text-muted-foreground">→ meilleur canal pour ce profil (dirigeant tech &lt; 40 ans)</span>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 text-sm text-foreground/85 leading-relaxed">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block mb-2">Accroche pré-rédigée (à personnaliser)</span>
              « Bonjour Jean, félicitations pour l'immatriculation de Nova Conseil IT. J'accompagne une douzaine de fondateurs SASU tech en Île-de-France sur le passage IS/TVA et l'articulation avec une holding perso — je vois que JD Holding existe déjà, on a peut-être des choses à s'échanger sur l'optimisation du flux dividende. Ouvert à un échange de 15 min la semaine prochaine ? »
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
              <Mail className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Fallback email : jean.dupont@novaconseil.fr (vérifié · délivrabilité 98 %)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </LandingCabinetLayout>
);

export default PourquoiCeLeadEstPrioritaire;