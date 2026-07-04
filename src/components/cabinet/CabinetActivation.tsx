import { Linkedin, Mail, Phone, Instagram, Send, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SafeLink } from "@/components/SafeLink";
import { useLang, localizedHref } from "@/hooks/useLang";

type Lead = {
  ini: string;
  co: string;
  forme: string;
  ville: string;
  activite: string;
  capital: string;
  score: number;
  channel: "linkedin" | "email" | "call" | "instagram" | "mail";
  hook: string;
};

const LEADS_FR: Lead[] = [
  { ini: "SM", co: "Nova Conseil IT",        forme: "SASU", ville: "Paris 11e",     activite: "Conseil informatique",         capital: "5 000 €",  score: 92, channel: "linkedin",  hook: "Message LinkedIn : “Vu votre immat, félicitations…”" },
  { ini: "LR", co: "Atelier Bois du Rhône",  forme: "SAS",  ville: "Lyon 7e",       activite: "Menuiserie sur mesure",        capital: "10 000 €", score: 88, channel: "email",     hook: "Email d'accroche : bilan d'ouverture offert" },
  { ini: "AD", co: "Clinique du Sport 33",   forme: "SELAS",ville: "Bordeaux",      activite: "Santé — médecine sportive",    capital: "8 000 €",  score: 86, channel: "call",      hook: "Appel J+3 : script « BNC vs SEL »" },
  { ini: "KM", co: "Studio Kaya",            forme: "SASU", ville: "Marseille 6e",  activite: "Design & branding",            capital: "3 000 €",  score: 84, channel: "instagram", hook: "DM Instagram : storytelling créatif" },
  { ini: "TB", co: "Boulangerie Théo B.",    forme: "SARL", ville: "Nantes",        activite: "Boulangerie artisanale",       capital: "12 000 €", score: 81, channel: "mail",      hook: "Courrier en-tête cabinet + carte de visite" },
  { ini: "EF", co: "Elise Fabre Coaching",   forme: "EURL", ville: "Lille",         activite: "Coaching pro & bilan",         capital: "1 000 €",  score: 79, channel: "linkedin",  hook: "Invitation LinkedIn + note perso" },
  { ini: "JV", co: "Jardin Vertical Sud",    forme: "SAS",  ville: "Montpellier",   activite: "Paysagiste — végétalisation",  capital: "7 500 €",  score: 77, channel: "email",     hook: "Email : sequence 3 touches sur 10 j" },
  { ini: "RN", co: "Restaurant N°17",        forme: "SASU", ville: "Toulouse",      activite: "Restauration — bistronomie",   capital: "15 000 €", score: 75, channel: "call",      hook: "Appel matin — pitch « TVA & pourboires »" },
  { ini: "PA", co: "Plomberie Alaoui",       forme: "SARL", ville: "Strasbourg",    activite: "Plomberie & chauffage",        capital: "6 000 €",  score: 73, channel: "mail",      hook: "Lettre en-tête : offre BNC/BIC artisan" },
  { ini: "CV", co: "Céline V. Kiné",         forme: "SEL",  ville: "Rennes",        activite: "Kinésithérapie libérale",      capital: "2 000 €",  score: 71, channel: "instagram", hook: "DM Instagram + lien Calendly" },
];

const LEADS_EN: Lead[] = LEADS_FR.map((l) => ({ ...l }));

type ChannelMeta = { icon: typeof Linkedin; label: string; tone: string };
const CHANNEL_META: Record<Lead["channel"], ChannelMeta> = {
  linkedin:  { icon: Linkedin,  label: "LinkedIn",  tone: "bg-[hsl(210_100%_50%/0.10)] text-[hsl(210_100%_38%)]" },
  email:     { icon: Mail,      label: "Email",     tone: "bg-primary/10 text-primary" },
  call:      { icon: Phone,     label: "Appel",     tone: "bg-emerald-50 text-emerald-700" },
  instagram: { icon: Instagram, label: "Instagram", tone: "bg-[hsl(320_70%_50%/0.10)] text-[hsl(320_60%_45%)]" },
  mail:      { icon: Send,      label: "Courrier",  tone: "bg-amber-50 text-amber-700" },
};
const CHANNEL_META_EN: Record<Lead["channel"], ChannelMeta> = {
  ...CHANNEL_META,
  call: { ...CHANNEL_META.call, label: "Call" },
  mail: { ...CHANNEL_META.mail, label: "Letter" },
};

const copy = {
  fr: {
    eyebrow: "Activation multicanal",
    h2a: "Un lead ne vaut rien",
    h2b: "sans plan d'attaque",
    h2c: ".",
    sub: "Pour chaque société immatriculée cette semaine, Eligibly recommande le meilleur canal d'approche et prépare la première touche. Vos associés cliquent, envoient, appellent — sans passer trois heures à décider par où commencer.",
    channels: [
      { key: "linkedin",  title: "LinkedIn",     desc: "Invitation + note personnalisée sur les 3 signaux du lead." },
      { key: "email",     title: "Email",        desc: "Séquence 3 touches, angle bilan d'ouverture ou création." },
      { key: "call",      title: "Appel",        desc: "Script court adapté à la forme juridique et à l'activité." },
      { key: "instagram", title: "Instagram DM", desc: "Pour les créateurs, artisans, professions du soin & design." },
      { key: "mail",      title: "Courrier",     desc: "Lettre en-tête du cabinet + carte de visite, taux d'ouverture 90%." },
    ],
    leadsHeader: "Extrait de la sélection de la semaine — 10 sociétés fraîchement immatriculées",
    priorityHint: "Priorisées par score ICP cabinet.",
    cta: "Recevoir 3 leads de test",
    ctaNote: "Envoyés sous 48 h — sans engagement, sans CB.",
    channelLabel: "Canal recommandé",
  },
  en: {
    eyebrow: "Multichannel activation",
    h2a: "A lead is worthless",
    h2b: "without a play",
    h2c: ".",
    sub: "For each company registered this week, Eligibly recommends the best channel and drafts the first touch. Your partners click, send, call — instead of spending three hours deciding where to start.",
    channels: [
      { key: "linkedin",  title: "LinkedIn",     desc: "Invite + personal note on the lead's 3 signals." },
      { key: "email",     title: "Email",        desc: "3-touch sequence, opening-review or launch angle." },
      { key: "call",      title: "Call",         desc: "Short script tuned to legal form and activity." },
      { key: "instagram", title: "Instagram DM", desc: "For creators, artisans, care & design professions." },
      { key: "mail",      title: "Letter",       desc: "Firm letterhead + business card, 90% open rate." },
    ],
    leadsHeader: "Sample of this week's selection — 10 newly registered companies",
    priorityHint: "Ranked by firm ICP score.",
    cta: "Get 3 sample leads",
    ctaNote: "Delivered within 48 h — no commitment, no card.",
    channelLabel: "Recommended channel",
  },
} as const;

export const CabinetActivation = () => {
  const lang = useLang();
  const t = copy[lang];
  const leads = lang === "en" ? LEADS_EN : LEADS_FR;
  const meta = lang === "en" ? CHANNEL_META_EN : CHANNEL_META;

  return (
    <section id="activation" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">{t.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            {t.h2a} <em className="italic text-primary font-medium">{t.h2b}</em>{t.h2c}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{t.sub}</p>
        </div>

        {/* 5 channels */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-14">
          {t.channels.map((c) => {
            const m = meta[c.key as keyof typeof meta];
            const Icon = m.icon;
            return (
              <div key={c.key} className="rounded-xl border border-border bg-card p-5 hover:-translate-y-0.5 hover:shadow-md transition-all">
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${m.tone} mb-3`}>
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="font-display font-semibold text-foreground text-base">{c.title}</div>
                <div className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{c.desc}</div>
              </div>
            );
          })}
        </div>

        {/* 10 leads table */}
        <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
          <div className="px-5 md:px-6 py-4 border-b border-border bg-muted/30 flex flex-wrap items-center gap-3">
            <Sparkles className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
            <div className="font-display text-sm md:text-base font-semibold text-foreground">
              {t.leadsHeader}
            </div>
            <Badge variant="outline" className="ml-auto text-[0.65rem] border-primary/30 text-primary bg-primary/5">
              {t.priorityHint}
            </Badge>
          </div>

          <div className="divide-y divide-border">
            {leads.map((l, i) => {
              const m = meta[l.channel];
              const Icon = m.icon;
              return (
                <div key={i} className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1.4fr_1.4fr_auto_auto] items-center gap-3 md:gap-4 px-5 md:px-6 py-3.5 hover:bg-muted/20 transition-colors">
                  <div className="w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-xs font-semibold shrink-0">
                    {l.ini}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-foreground truncate">
                      {l.co} <span className="text-muted-foreground font-normal">· {l.forme}</span>
                    </div>
                    <div className="text-[11px] text-muted-foreground truncate">
                      {l.ville} · {l.activite} · {l.capital}
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-2 min-w-0">
                    <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md ${m.tone} text-[11px] font-semibold shrink-0`}>
                      <Icon className="w-3 h-3" aria-hidden="true" />
                      {m.label}
                    </span>
                    <span className="text-[11px] text-muted-foreground truncate">{l.hook}</span>
                  </div>
                  <span className={`md:hidden inline-flex items-center justify-center w-7 h-7 rounded-md ${m.tone}`}>
                    <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                  <div className="text-right shrink-0">
                    <div className="text-[9px] text-muted-foreground uppercase tracking-wider">Score</div>
                    <div className="font-display text-lg font-semibold text-primary tabular-nums leading-none">{l.score}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <SafeLink to={localizedHref("/demo", lang)}>
            <Button variant="tengo" className="h-12 px-6 text-sm font-semibold group">
              {t.cta}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>
          </SafeLink>
          <p className="text-xs text-muted-foreground">{t.ctaNote}</p>
        </div>
      </div>
    </section>
  );
};