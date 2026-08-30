import { SafeLink } from "@/components/SafeLink";
import { ArrowRight, Radar, Megaphone, CheckCircle2 } from "lucide-react";
import { useLang, localizedHref } from "@/hooks/useLang";

const copy = {
  fr: {
    eyebrow: "Deux offres complémentaires",
    h2a: "La visibilité d'abord, ",
    h2em: "le démarchage ensuite",
    h2b: ".",
    sub: "Un cabinet invisible qui démarche paie deux fois : le prospect vérifie systématiquement le nom du cabinet sur Google, LinkedIn et désormais dans ChatGPT ou Perplexity avant de répondre. Sans preuve en ligne, le taux de réponse de l'outbound s'effondre. Nous traitons les deux couches dans le bon ordre.",
    offers: [
      {
        step: "Couche 1",
        title: "Marque & visibilité",
        icon: Megaphone,
        desc: "Nous construisons la couche de crédibilité que vos prospects consultent avant de vous répondre : site indexable, fiche Google, balisage structuré, présence LinkedIn, annuaires et référencement dans les assistants IA.",
        bullets: [
          "Site cabinet indexable et balisé (JSON-LD, pages métier)",
          "Fiche Google optimisée et collecte d'avis structurée",
          "Visibilité dans ChatGPT, Perplexity, Gemini, Claude",
          "Mesure : positions, backlinks, preuve sociale",
        ],
        href: "/marque-et-visibilite-expert-comptable",
        cta: "Voir l'offre marque & visibilité",
      },
      {
        step: "Couche 2",
        title: "Détection & prospection",
        icon: Radar,
        desc: "Le produit Eligibly. Une fois le cabinet crédible en ligne, il détecte chaque matin les sociétés fraîchement immatriculées sur votre zone et votre ICP, les score et vous livre un plan d'activation multicanal.",
        bullets: [
          "Sources officielles : INPI, Sirene, BODACC, RNE",
          "Filtres ICP amont + scoring 0-100 expliqué",
          "Digest matinal et fiches prêtes à appeler",
          "Activation LinkedIn, email, appel, WhatsApp",
        ],
        href: "/tarifs",
        cta: "Voir les tarifs de la détection",
      },
    ],
    seqTitle: "Pourquoi cet ordre n'est pas négociable",
    seq: [
      "Un dirigeant fraîchement immatriculé reçoit en moyenne plusieurs sollicitations de cabinets la même semaine. Le tri se fait sur la vérification en ligne.",
      "Sans site indexable ni avis, votre message d'approche est traité comme un cold call anonyme : réponse rare, rendez-vous plus rares encore.",
      "Avec la couche de visibilité en place, le même message d'approche est confirmé par une recherche de 30 secondes. Le taux de réponse change de catégorie.",
    ],
  },
  en: {
    eyebrow: "Two complementary offers",
    h2a: "Visibility first, ",
    h2em: "outbound next",
    h2b: ".",
    sub: "An invisible firm that prospects pays twice: founders systematically check the firm's name on Google, LinkedIn and now in ChatGPT or Perplexity before replying. Without online proof, outbound reply rates collapse. We handle both layers in the right order.",
    offers: [
      {
        step: "Layer 1",
        title: "Brand & visibility",
        icon: Megaphone,
        desc: "We build the credibility layer prospects check before replying: indexable website, Google profile, structured markup, LinkedIn presence, directories and AI-assistant coverage.",
        bullets: [
          "Indexable, structured firm website (JSON-LD, service pages)",
          "Optimised Google profile and structured review collection",
          "Coverage in ChatGPT, Perplexity, Gemini, Claude",
          "Measurement: rankings, backlinks, social proof",
        ],
        href: "/marque-et-visibilite-expert-comptable",
        cta: "See the brand offer",
      },
      {
        step: "Layer 2",
        title: "Lead detection & outreach",
        icon: Radar,
        desc: "Once the firm is credible online, Eligibly detects newly registered companies in your area and ICP every morning, scores them and delivers a multichannel activation plan.",
        bullets: [
          "Official sources: INPI, Sirene, BODACC, RNE",
          "Upstream ICP filters + explained 0-100 scoring",
          "Morning digest and call-ready profiles",
          "Activation via LinkedIn, email, phone, WhatsApp",
        ],
        href: "/tarifs",
        cta: "See outbound pricing",
      },
    ],
    seqTitle: "Why this order is not negotiable",
    seq: [
      "A newly registered founder receives several firm solicitations in the same week. Selection happens through online verification.",
      "Without an indexable site or reviews, your outreach reads as an anonymous cold call: rare replies, rarer meetings.",
      "With the visibility layer in place, the same message is confirmed by a 30-second search. Reply rates move to another category.",
    ],
  },
};

export const ProduitOffres = ({ compact = false }: { compact?: boolean }) => {
  const lang = useLang();
  const t = copy[lang];

  return (
    <section className={`${compact ? "py-16 md:py-20" : "py-20 md:py-28"} px-4 border-y border-border bg-card/30`}>

      <div className="container mx-auto max-w-6xl">
        <div className={`max-w-3xl ${compact ? "mb-10" : "mb-14"}`}>
          <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">{t.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-5">
            {t.h2a}<em className="italic text-primary font-medium">{t.h2em}</em>{t.h2b}
          </h2>
          <p className="text-muted-foreground leading-relaxed">{t.sub}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.offers.map((o) => {
            const Icon = o.icon;
            return (
              <div key={o.title} className="rounded-2xl border border-border bg-background p-7 flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </span>
                  <span className="text-[0.7rem] uppercase tracking-[0.16em] font-semibold text-primary">{o.step}</span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-3">{o.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{o.desc}</p>
                <ul className="space-y-2.5 mb-7">
                  {o.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
                <SafeLink
                  to={localizedHref(o.href, lang)}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                >
                  {o.cta}
                  <ArrowRight className="w-4 h-4" />
                </SafeLink>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-background p-7">
          <h3 className="font-display text-lg font-semibold tracking-tight mb-5">{t.seqTitle}</h3>
          <ol className="grid md:grid-cols-3 gap-6">
            {t.seq.map((s, i) => (
              <li key={s} className="text-sm text-muted-foreground leading-relaxed">
                <span className="block font-display text-2xl font-semibold text-primary/40 tabular-nums mb-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
