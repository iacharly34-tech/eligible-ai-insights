import { SectionHeader } from "./SectionHeader";

const meta = [
  { label: "Immatriculation", value: "16 juin 2026 (J+8)" },
  { label: "Capital", value: "5 000 €" },
  { label: "Secteur", value: "Édition logiciels (NAF 5829C)" },
  { label: "Siège", value: "Paris 11e" },
];

const bullets = [
  { label: "Identité dirigeant", body: "nom, fonction, LinkedIn matchés" },
  { label: "Contactabilité", body: "email pro vérifié, téléphone direct quand disponible" },
  { label: "Signaux primo", body: "entrepreneur indépendant vs multi-sociétés" },
  { label: "Filtres amont", body: "CAC, procédure, cessation, holding, serial systématiquement écartés" },
  { label: "Plan d'action", body: "préparer mon appel, générer une relance, marquer non pertinent" },
];

export const LeadPreview = () => (
  <section id="preview" className="py-20 md:py-28 bg-cream/40">
    <div className="container">
      <SectionHeader
        eyebrow="Aperçu du produit"
        title={<>À quoi ressemble <em className="text-terracotta">une fiche lead</em> dans Eligibly.</>}
        lede="Chaque matin, vous ouvrez Eligibly et vous voyez vos leads PREMIUM triés. Pour chacun : score expliqué, signaux positifs, points à vérifier, plan d'action. Tout ce qu'il faut pour décrocher le téléphone en confiance."
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div>
          <h3 className="font-display text-2xl md:text-3xl text-ink mb-5 leading-snug">
            Score expliqué, pas score boîte noire.
          </h3>
          <p className="text-ink-secondary leading-relaxed mb-7">
            Le score n'est pas un nombre opaque. Chaque lead arrive avec son rationale :
            pourquoi il est prioritaire pour votre ICP, quels signaux le rendent
            intéressant, quels points sont à confirmer lors du premier contact.
          </p>
          <ul className="space-y-3.5">
            {bullets.map((b) => (
              <li key={b.label} className="flex gap-3 text-[0.95rem] text-ink-secondary">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" />
                <span>
                  <strong className="text-ink font-medium">{b.label}</strong> · {b.body}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 bg-cream-deep/50 rounded-3xl rotate-1 -z-10" />
          <div className="bg-bg-card rounded-2xl border border-border-warm/60 shadow-luxury overflow-hidden">
            <div className="px-6 pt-5 pb-3 border-b border-border-soft">
              <span className="text-[10px] uppercase tracking-[0.18em] text-ink-muted font-medium">Fiche lead</span>
            </div>

            <div className="px-6 pt-5 pb-5 flex items-start justify-between gap-4 border-b border-border-soft">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-sapin text-cream flex items-center justify-center font-medium">SM</div>
                <div>
                  <div className="font-display text-lg text-ink">Sophie Martin</div>
                  <div className="text-sm text-ink-muted">Présidente · SAS LumeTech</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-display text-4xl text-terracotta leading-none">82</div>
                <span className="text-[10px] tracking-[0.16em] font-semibold text-sapin mt-1 block">PREMIUM</span>
              </div>
            </div>

            <div className="grid grid-cols-2 px-6 py-5 gap-y-4 gap-x-6 border-b border-border-soft">
              {meta.map((m) => (
                <div key={m.label}>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-ink-muted mb-1 font-medium">{m.label}</div>
                  <div className="text-sm text-ink font-medium">{m.value}</div>
                </div>
              ))}
            </div>

            <div className="px-6 py-5 bg-terracotta-soft/60 border-b border-border-soft">
              <div className="text-[10px] uppercase tracking-[0.16em] text-terracotta-deep font-semibold mb-2">
                Pourquoi ce lead est prioritaire
              </div>
              <p className="text-sm text-ink leading-relaxed">
                Primo-entrepreneur confirmé, secteur SaaS aligné ICP cabinet, email pro
                vérifié et URL LinkedIn matchée. Société récente sans CAC mandaté ni
                signal de procédure. Score amplifié par le profil primo (×1.4).
              </p>
            </div>

            <div className="px-6 py-4 flex gap-3 flex-wrap">
              <button className="px-4 py-2.5 rounded-lg bg-terracotta text-cream text-sm font-medium hover:bg-terracotta-deep transition-colors">
                Préparer mon appel
              </button>
              <button className="px-4 py-2.5 rounded-lg border border-border-warm text-ink text-sm font-medium hover:border-terracotta hover:text-terracotta transition-colors">
                Voir la fiche complète
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);