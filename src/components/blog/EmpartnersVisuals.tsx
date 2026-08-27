import { Star, Monitor, MousePointerClick, Inbox, Trophy, Phone, Mail, CalendarCheck, MapPin, Building2, ArrowRight, MessageCircle } from "lucide-react";

type Lang = "fr" | "en";

const t = (lang: Lang, fr: string, en: string) => (lang === "fr" ? fr : en);

const Frame = ({
  eyebrow,
  icon: Icon,
  title,
  children,
  note,
}: {
  eyebrow: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
  note?: string;
}) => (
  <div className="not-prose my-10 rounded-2xl border border-border bg-card/40 p-6 md:p-8">
    <div className="mb-6">
      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-primary/10 text-primary text-[0.65rem] font-semibold uppercase tracking-[0.14em] mb-3">
        <Icon className="w-3 h-3" /> {eyebrow}
      </div>
      <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight m-0">{title}</h3>
    </div>
    {children}
    {note && <p className="text-xs text-muted-foreground mt-5 mb-0">{note}</p>}
  </div>
);

// ---------- 1. Maquette du site (conception maison) ----------
export const EmpartnersSiteMockup = ({ lang = "fr" as Lang }) => (
  <Frame
    eyebrow={t(lang, "Site web — conception maison", "Website — built in-house")}
    icon={Monitor}
    title={t(lang, "Un site pensé comme un outil commercial", "A site designed as a sales tool")}
    note={t(
      lang,
      "Représentation schématique de la structure du site empartners.fr : hiérarchie, pages par forme juridique et parcours de conversion.",
      "Schematic representation of the empartners.fr structure: hierarchy, pages per legal form and conversion path."
    )}
  >
    <div className="rounded-xl border border-border bg-background overflow-hidden">
      {/* barre navigateur */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-muted/40">
        <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
        <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
        <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
        <div className="ml-3 flex-1 max-w-[280px] rounded-md bg-background border border-border px-2.5 py-1 text-[0.7rem] text-muted-foreground truncate">
          empartners.fr
        </div>
      </div>

      {/* header site */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border">
        <div className="font-display text-sm font-bold tracking-tight">EM Partners</div>
        <div className="hidden sm:flex items-center gap-4 text-[0.7rem] text-muted-foreground">
          <span>{t(lang, "Services", "Services")}</span>
          <span>SASU</span>
          <span>SARL</span>
          <span>{t(lang, "Tarifs", "Pricing")}</span>
          <span className="rounded-md bg-primary px-2.5 py-1 text-primary-foreground font-semibold">
            {t(lang, "Prendre rendez-vous", "Book a call")}
          </span>
        </div>
      </div>

      {/* hero site */}
      <div className="px-5 py-7 md:px-8 md:py-10">
        <div className="grid md:grid-cols-5 gap-6 items-center">
          <div className="md:col-span-3">
            <div className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary mb-2">
              {t(lang, "Expert-comptable en ligne", "Online chartered accountant")}
            </div>
            <div className="font-display text-lg md:text-2xl font-bold leading-tight mb-2.5">
              {t(lang, "Créez et pilotez votre société sans friction comptable", "Set up and run your company without accounting friction")}
            </div>
            <div className="text-xs text-muted-foreground leading-relaxed mb-4">
              {t(
                lang,
                "Accompagnement dédié aux dirigeants de SASU, SAS, EURL, SARL et SEL. Réponse sous 24 h ouvrées.",
                "Dedicated support for directors of SASU, SAS, EURL, SARL and SEL. Reply within 24 business hours."
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-[0.7rem] font-semibold text-primary-foreground">
                {t(lang, "Obtenir un devis", "Get a quote")} <ArrowRight className="w-3 h-3" />
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-[0.7rem] font-semibold">
                {t(lang, "Voir les tarifs", "See pricing")}
              </span>
            </div>
          </div>
          <div className="md:col-span-2 rounded-xl border border-border bg-muted/30 p-4">
            <div className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-2.5">
              {t(lang, "Formulaire court", "Short form")}
            </div>
            {[t(lang, "Nom", "Name"), "Email", t(lang, "Forme juridique", "Legal form")].map((f) => (
              <div key={f} className="mb-2 rounded-md border border-border bg-background px-2.5 py-1.5 text-[0.7rem] text-muted-foreground">
                {f}
              </div>
            ))}
            <div className="rounded-md bg-primary px-2.5 py-1.5 text-center text-[0.7rem] font-semibold text-primary-foreground">
              {t(lang, "Être rappelé", "Request a callback")}
            </div>
          </div>
        </div>
      </div>

      {/* pages par forme juridique */}
      <div className="border-t border-border px-5 py-5 md:px-8">
        <div className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-3">
          {t(lang, "Pages dédiées par forme juridique", "Dedicated pages per legal form")}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5">
          {["SASU", "SAS", "EURL", "SARL", "SEL"].map((s) => (
            <div key={s} className="rounded-lg border border-border bg-background px-3 py-2.5 text-center">
              <div className="text-xs font-bold">{s}</div>
              <div className="text-[0.6rem] text-muted-foreground mt-0.5">
                {t(lang, "coût · fiscalité", "cost · tax")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Frame>
);

// ---------- 2. Les CTA ----------
export const EmpartnersCtaVariants = ({ lang = "fr" as Lang }) => (
  <Frame
    eyebrow={t(lang, "Appels à l'action", "Calls to action")}
    icon={MousePointerClick}
    title={t(lang, "Quatre CTA, quatre niveaux d'engagement", "Four CTAs, four levels of commitment")}
    note={t(
      lang,
      "WhatsApp Business est le canal le plus fort : taux d'ouverture > 90 %, réponse en quelques minutes, aucune friction. Les autres CTA captent les intentions découverte, décision et urgence.",
      "WhatsApp Business is the strongest channel: > 90 % open rate, reply within minutes, zero friction. The other CTAs capture discovery, decision and urgency intent."
    )}
  >
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        {
          icon: MessageCircle,
          step: t(lang, "Canal fort", "Strong channel"),
          label: t(lang, "WhatsApp Business", "WhatsApp Business"),
          sub: t(lang, "Réponse en minutes · ouverture > 90 % · 0 friction", "Reply in minutes · > 90 % open rate · zero friction"),
          solid: true,
        },
        {
          icon: CalendarCheck,
          step: t(lang, "Découverte", "Discovery"),
          label: t(lang, "Réserver un échange de 20 min", "Book a 20-min call"),
          sub: t(lang, "Sans engagement, agenda en ligne", "No commitment, online calendar"),
          solid: false,
        },
        {
          icon: Mail,
          step: t(lang, "Décision", "Decision"),
          label: t(lang, "Recevoir un devis personnalisé", "Get a tailored quote"),
          sub: t(lang, "3 champs : activité, forme, CA estimé", "3 fields: activity, legal form, est. revenue"),
          solid: false,
        },
        {
          icon: Phone,
          step: t(lang, "Urgence", "Urgency"),
          label: t(lang, "Être rappelé sous 24 h", "Callback within 24h"),
          sub: t(lang, "Créations en cours, délais courts", "Ongoing incorporations, tight deadlines"),
          solid: false,
        },
      ].map(({ icon: Icon, step, label, sub, solid }) => (
        <div key={label} className="rounded-xl border border-border bg-background p-5 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon className="w-4 h-4 text-primary" />
            </div>
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-primary">{step}</span>
          </div>
          <div className="text-sm text-muted-foreground leading-snug mb-4">{sub}</div>
          <div
            className={
              solid
                ? "mt-auto rounded-md bg-primary px-3 py-2 text-center text-xs font-semibold text-primary-foreground"
                : "mt-auto rounded-md border border-primary/40 px-3 py-2 text-center text-xs font-semibold text-primary"
            }
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  </Frame>
);

// ---------- 3. Avis Google Business Profile ----------
const REVIEWS_FR = [
  {
    initials: "JL",
    name: "Julien L.",
    when: "il y a 2 semaines",
    text: "Création de ma SASU prise en charge de A à Z, statuts et immatriculation en moins de deux semaines. Réponses claires sur les charges sociales du président.",
  },
  {
    initials: "SM",
    name: "Sarah M.",
    when: "il y a 1 mois",
    text: "Reprise d'une comptabilité en retard sur deux exercices. Bilan sorti dans les délais, et un point mensuel qui me sert vraiment à piloter la trésorerie.",
  },
  {
    initials: "KB",
    name: "Karim B.",
    when: "il y a 2 mois",
    text: "Arbitrage rémunération / dividendes chiffré, avec les impacts fiscaux détaillés. C'est ce que j'attends d'un expert-comptable : des chiffres, pas des généralités.",
  },
];

const REVIEWS_EN = [
  {
    initials: "JL",
    name: "Julien L.",
    when: "2 weeks ago",
    text: "My SASU incorporation handled end to end, articles and registration in under two weeks. Clear answers on the president's social charges.",
  },
  {
    initials: "SM",
    name: "Sarah M.",
    when: "1 month ago",
    text: "Two years of late bookkeeping caught up. Accounts filed on time, and a monthly review I actually use to steer cash flow.",
  },
  {
    initials: "KB",
    name: "Karim B.",
    when: "2 months ago",
    text: "Salary vs dividends trade-off quantified, with detailed tax impact. That is what I expect from an accountant: numbers, not generalities.",
  },
];

export const EmpartnersGoogleReviews = ({ lang = "fr" as Lang }) => (
  <Frame
    eyebrow={t(lang, "Fiche Google Business Profile", "Google Business Profile")}
    icon={Star}
    title={t(lang, "La preuve sociale qui précède le premier appel", "The social proof that precedes the first call")}
    note={t(
      lang,
      "Exemples d'avis représentatifs du type de retours collectés. Les avis sont sollicités après livraison d'un livrable, jamais achetés.",
      "Representative examples of the type of feedback collected. Reviews are requested after a deliverable, never bought."
    )}
  >
    <div className="rounded-xl border border-border bg-background p-5 mb-4">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl font-bold text-primary leading-none">4,9</span>
            <span className="text-xs text-muted-foreground">/ 5</span>
          </div>
          <div className="flex gap-0.5 mt-1.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-3.5 h-3.5 text-primary fill-current" />
            ))}
          </div>
        </div>
        <div className="text-xs text-muted-foreground leading-relaxed">
          <div className="flex items-center gap-1.5 mb-1">
            <Building2 className="w-3.5 h-3.5 text-primary" />
            <span className="font-semibold text-foreground">EM Partners — {t(lang, "Expert-comptable", "Chartered accountant")}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t(lang, "Fiche vérifiée · NAP harmonisé sur les annuaires", "Verified listing · NAP aligned across directories")}</span>
          </div>
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-4">
      {(lang === "fr" ? REVIEWS_FR : REVIEWS_EN).map((r) => (
        <div key={r.name} className="rounded-xl border border-border bg-background p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-[0.7rem] font-bold text-primary">
              {r.initials}
            </div>
            <div className="min-w-0">
              <div className="text-xs font-semibold truncate">{r.name}</div>
              <div className="text-[0.65rem] text-muted-foreground">{r.when}</div>
            </div>
          </div>
          <div className="flex gap-0.5 mb-2.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-3 h-3 text-primary fill-current" />
            ))}
          </div>
          <p className="text-sm text-foreground/85 leading-snug m-0">{r.text}</p>
        </div>
      ))}
    </div>
  </Frame>
);

// ---------- 4. Leads reçus (digest matinal) ----------
const LEADS_FR = [
  { comp: "NOVA CONSEIL", form: "SASU", city: "Paris 11e", age: "J+4", score: 92, act: "Conseil IT" },
  { comp: "ATELIER MARGO", form: "SARL", city: "Montreuil", age: "J+9", score: 87, act: "Restauration" },
  { comp: "LB HOLDING OPS", form: "EURL", city: "Vincennes", age: "J+6", score: 81, act: "Négoce" },
  { comp: "SELARL DR. AMARI", form: "SEL", city: "Paris 15e", age: "J+12", score: 78, act: "Santé" },
  { comp: "GREENFLOW SAS", form: "SAS", city: "Saint-Denis", age: "J+3", score: 74, act: "E-commerce" },
];

const LEADS_EN = [
  { comp: "NOVA CONSEIL", form: "SASU", city: "Paris 11", age: "D+4", score: 92, act: "IT consulting" },
  { comp: "ATELIER MARGO", form: "SARL", city: "Montreuil", age: "D+9", score: 87, act: "Restaurant" },
  { comp: "LB HOLDING OPS", form: "EURL", city: "Vincennes", age: "D+6", score: 81, act: "Wholesale" },
  { comp: "SELARL DR. AMARI", form: "SEL", city: "Paris 15", age: "D+12", score: 78, act: "Healthcare" },
  { comp: "GREENFLOW SAS", form: "SAS", city: "Saint-Denis", age: "D+3", score: 74, act: "E-commerce" },
];

export const EmpartnersLeadsDigest = ({ lang = "fr" as Lang }) => (
  <Frame
    eyebrow={t(lang, "Digest matinal — leads reçus", "Morning digest — leads received")}
    icon={Inbox}
    title={t(lang, "Ce que le cabinet reçoit chaque matin", "What the firm receives every morning")}
    note={t(
      lang,
      "Extrait anonymisé et représentatif d'un digest : société, forme juridique, ancienneté d'immatriculation, score et zone. Les noms sont fictifs.",
      "Anonymised, representative digest extract: company, legal form, days since registration, score and area. Names are fictitious."
    )}
  >
    <div className="rounded-xl border border-border bg-background overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-b border-border bg-muted/30">
        <div className="text-xs font-semibold">
          {t(lang, "5 nouvelles immatriculations dans votre zone", "5 new registrations in your area")}
        </div>
        <div className="text-[0.65rem] text-muted-foreground">{t(lang, "Reçu à 07:00", "Delivered at 07:00")}</div>
      </div>
      <div className="divide-y divide-border">
        {(lang === "fr" ? LEADS_FR : LEADS_EN).map((l) => (
          <div key={l.comp} className="flex items-center gap-3 px-4 py-3">
            <div className="min-w-0 flex-1">
              <div className="text-xs font-semibold truncate">{l.comp}</div>
              <div className="text-[0.65rem] text-muted-foreground truncate">
                {l.form} · {l.act} · {l.city} · {l.age}
              </div>
            </div>
            <div className="shrink-0 rounded-md bg-primary/10 px-2 py-1 text-[0.7rem] font-bold text-primary">{l.score}</div>
          </div>
        ))}
      </div>
      <div className="px-4 py-3 border-t border-border bg-muted/20 text-[0.65rem] text-muted-foreground">
        {t(
          lang,
          "Filtres amont appliqués : hors CAC, holdings pures, procédures collectives et serial entrepreneurs.",
          "Upstream filters applied: excluding statutory auditors, pure holdings, insolvency proceedings and serial founders."
        )}
      </div>
    </div>
  </Frame>
);

// ---------- 5. Dossiers remportés ----------
const WON_FR = [
  { client: "SASU — conseil IT", delay: "9 jours", detail: "Création + mission mensuelle", canal: "Email + appel J+2" },
  { client: "SARL — restauration", delay: "14 jours", detail: "Bilan de reprise + social", canal: "LinkedIn" },
  { client: "EURL — négoce", delay: "6 jours", detail: "Mission annuelle", canal: "Appel direct" },
  { client: "SEL — santé", delay: "21 jours", detail: "Arbitrage rémunération", canal: "Recommandation + relance" },
];

const WON_EN = [
  { client: "SASU — IT consulting", delay: "9 days", detail: "Incorporation + monthly retainer", canal: "Email + call D+2" },
  { client: "SARL — restaurant", delay: "14 days", detail: "Catch-up accounts + payroll", canal: "LinkedIn" },
  { client: "EURL — wholesale", delay: "6 days", detail: "Annual engagement", canal: "Direct call" },
  { client: "SEL — healthcare", delay: "21 days", detail: "Compensation trade-off", canal: "Referral + follow-up" },
];

export const EmpartnersDealsWon = ({ lang = "fr" as Lang }) => (
  <Frame
    eyebrow={t(lang, "Dossiers remportés", "Deals won")}
    icon={Trophy}
    title={t(lang, "Du lead détecté à la lettre de mission signée", "From detected lead to signed engagement letter")}
    note={t(
      lang,
      "Exemples de dossiers signés, anonymisés. Délai = temps entre le premier contact et la signature de la lettre de mission.",
      "Examples of signed engagements, anonymised. Time = first contact to signed engagement letter."
    )}
  >
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
      {[
        { v: "3", l: t(lang, "leads qualifiés / semaine", "qualified leads / week") },
        { v: "~35 %", l: t(lang, "leads transformés en rendez-vous", "leads turned into meetings") },
        { v: "12 j", l: t(lang, "délai médian de signature", "median time to signature") },
        { v: t(lang, "Févr. 2026", "Feb. 2026"), l: t(lang, "activation du moteur", "engine activation") },
      ].map((s) => (
        <div key={s.l} className="rounded-xl border border-border bg-background p-4 text-center">
          <div className="font-display text-xl md:text-2xl font-bold text-primary leading-none">{s.v}</div>
          <div className="text-[0.65rem] text-muted-foreground mt-2 leading-snug">{s.l}</div>
        </div>
      ))}
    </div>

    <div className="rounded-xl border border-border bg-background overflow-hidden">
      <div className="hidden md:grid grid-cols-4 gap-3 px-4 py-2.5 border-b border-border bg-muted/30 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        <div>{t(lang, "Dossier", "Engagement")}</div>
        <div>{t(lang, "Mission", "Scope")}</div>
        <div>{t(lang, "Canal d'entrée", "Entry channel")}</div>
        <div>{t(lang, "Délai de signature", "Time to signature")}</div>
      </div>
      <div className="divide-y divide-border">
        {(lang === "fr" ? WON_FR : WON_EN).map((w) => (
          <div key={w.client} className="grid md:grid-cols-4 gap-1 md:gap-3 px-4 py-3 text-xs">
            <div className="font-semibold">{w.client}</div>
            <div className="text-muted-foreground">{w.detail}</div>
            <div className="text-muted-foreground">{w.canal}</div>
            <div className="font-semibold text-primary">{w.delay}</div>
          </div>
        ))}
      </div>
    </div>
  </Frame>
);
