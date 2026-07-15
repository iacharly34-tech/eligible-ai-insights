import { Helmet } from "react-helmet-async";
import { Linkedin, Mail, Phone, Send, Sparkles, Bot, ArrowRight, CheckCircle2, Receipt, Wallet, Users2, LineChart, FileText, Building2, ShoppingCart, Utensils, Scale } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTABar } from "@/components/MobileCTABar";
import { CTAFooter } from "@/components/CTAFooter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SafeLink } from "@/components/SafeLink";
import { useLang, localizedHref } from "@/hooks/useLang";

const CHANNELS = [
  { icon: Linkedin, title: "LinkedIn", desc: "Invitation + note personnalisée basée sur 3 signaux du lead (activité, capital, dirigeant). Fenêtre optimale J+3 à J+10." },
  { icon: Mail, title: "Email", desc: "Séquence 3 touches automatisée : accroche, valeur, relance. Angles pré-écrits : bilan d'ouverture, TVA, paie 1er salarié." },
  { icon: Phone, title: "Téléphone", desc: "Script court adapté à la forme juridique et au NAF. Objections anticipées, ouverture par un signal concret (récente immat, capital)." },
  { icon: Send, title: "Courrier", desc: "Lettre en-tête cabinet + carte de visite. Taux d'ouverture 90 %, différenciant pour restauration, artisans, professions libérales." },
];

const NEEDS = [
  { icon: Receipt, k: "Régime TVA & franchise en base" },
  { icon: Wallet, k: "Rémunération du dirigeant" },
  { icon: Users2, k: "Paie du 1er salarié" },
  { icon: LineChart, k: "Prévisionnel & business plan" },
  { icon: FileText, k: "Facturation & logiciel de gestion" },
  { icon: Building2, k: "Compte pro & liaison bancaire" },
  { icon: ShoppingCart, k: "Caisse & e-commerce" },
  { icon: Utensils, k: "Restauration & licence" },
  { icon: Scale, k: "Pacte d'associés & holding" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Sales Assistant Eligibly",
  description: "Copilote IA de prospection pour cabinets d'expertise comptable : 4 canaux, 9 besoins détectés, plan d'action prêt à envoyer.",
  brand: { "@type": "Brand", name: "Eligibly" },
  offers: { "@type": "Offer", price: "290", priceCurrency: "EUR", url: "https://eligibly.ai/sales-assistant" },
};

const SalesAssistant = () => {
  const lang = useLang();
  const seoTitle = "Sales Assistant Eligibly — Copilote IA de prospection pour cabinets EC";
  const seoDescription = "4 canaux (LinkedIn · Email · Téléphone · Courrier), 9 besoins détectés par lead, plan d'action prêt à envoyer. 290 € HT/mois, pilote 14 jours sans CB.";
  const canonical = "https://eligibly.ai/sales-assistant";

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <MobileCTABar />

        <main id="main-content" tabIndex={-1} className="focus:outline-none" role="main">
          {/* Hero */}
          <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-hero overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" aria-hidden="true" />
            <div className="container mx-auto relative px-4 max-w-4xl">
              <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 px-3 py-1.5 text-xs sm:text-sm mb-6 inline-flex">
                <Bot className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
                Sales Assistant
              </Badge>
              <h1 className="font-display text-[2.25rem] sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-foreground font-semibold">
                Le copilote IA qui{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent italic font-display inline-block">transforme un SIRET</span>{" "}
                en premier appel.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                Pour chaque lead livré, Eligibly recommande le meilleur canal, anticipe les 9 besoins probables du dirigeant et rédige la première touche. Vos associés cliquent, envoient, appellent — sans passer trois heures à décider par où commencer.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <SafeLink to={localizedHref("/demo", lang)}>
                  <Button variant="tengo" className="h-12 px-6 text-sm font-semibold group">
                    Démarrer le pilote 14 jours
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Button>
                </SafeLink>
                <p className="text-xs text-muted-foreground">290 € HT/mois · sans carte bancaire · sans engagement</p>
              </div>
            </div>
          </section>

          {/* 4 channels */}
          <section className="py-20 md:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="max-w-3xl mb-14">
                <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">4 canaux d'activation</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
                  Un lead. <em className="italic text-primary font-medium">Quatre façons</em> de l'ouvrir.
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Pour chaque société livrée, Eligibly recommande le canal le plus adapté à la forme juridique, à l'activité, au profil du dirigeant et à sa présence en ligne. Vous recevez la première touche déjà rédigée.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {CHANNELS.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.title} className="rounded-2xl border border-border bg-card p-6 hover:-translate-y-0.5 hover:shadow-md transition-all">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                      </div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2">{c.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Copilote IA */}
          <section className="py-20 md:py-24 bg-muted/30 border-y border-border">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">Copilote IA</p>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
                    Le copilote qui <em className="italic text-primary font-medium">écrit à votre place</em>.
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Le Sales Assistant ne se contente pas de recommander un canal. Il rédige la première touche en s'appuyant sur les signaux collectés : NAF, capital, dirigeant, éventuels associés, activité déclarée, ancienneté (&lt; 30 j, 30-90 j, &gt; 90 j).
                  </p>
                  <ul className="mt-6 space-y-3">
                    {[
                      "Ton adapté à votre cabinet (formel, chaleureux, technique) — paramétrable une fois.",
                      "Angle d'entrée déterminé par le signal le plus fort (bilan d'ouverture, TVA, paie, holding).",
                      "Variantes A/B générées pour tester rapidement ce qui fonctionne dans votre bassin.",
                      "Historique de 9 types d'interactions (envoyé, ouvert, cliqué, répondu, RDV, gagné, perdu, à recontacter, exclu).",
                    ].map((it) => (
                      <li key={it} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                        <span className="text-foreground/85">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
                  <div className="px-5 py-3 border-b border-border bg-primary/5 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                    <span className="text-xs font-semibold text-foreground">Première touche générée · LinkedIn</span>
                  </div>
                  <div className="p-5 space-y-3 text-sm text-foreground/90 leading-relaxed">
                    <p>Bonjour Sophie,</p>
                    <p>J'ai vu que vous veniez d'immatriculer <strong>Nova Conseil IT</strong> à Paris — bravo pour le lancement.</p>
                    <p>Trois sujets tombent souvent la première année pour une SASU de conseil : arbitrage rémunération dirigeant vs dividendes, franchise en base TVA (et bascule), et facturation multi-clients. Si utile, je peux vous partager la trame que nous utilisons avec nos clients IT.</p>
                    <p>Bien à vous,<br />— [Prénom], expert-comptable</p>
                  </div>
                  <div className="px-5 py-3 border-t border-border bg-muted/40 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span>Signaux : SASU · Conseil · Capital 5 k€ · Dirigeant issu ESN</span>
                    <span className="font-mono">v2 · 128 mots</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 9 needs */}
          <section className="py-20 md:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="max-w-3xl mb-12">
                <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">9 besoins probables détectés</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
                  Vous savez <em className="italic text-primary font-medium">de quoi parler</em> avant le premier appel.
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Chaque lead livré est accompagné des besoins comptables les plus probables, déduits des signaux légaux (forme juridique, capital, NAF, associés). Pas de discours générique : un angle par entreprise.
                </p>
              </div>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {NEEDS.map((n, i) => {
                  const Icon = n.icon;
                  return (
                    <li key={n.k} className="rounded-xl border border-border bg-card p-4 flex items-center gap-3 hover:border-primary/40 transition-colors">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-muted-foreground tabular-nums">0{i + 1}</div>
                        <div className="text-sm font-medium text-foreground leading-snug">{n.k}</div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>

          <CTAFooter
            title="Prêt à voir votre premier digest ?"
            subtitle="Pilote 14 jours, 290 € HT/mois ensuite. Sans carte bancaire, sans engagement."
            primaryButtonText="Démarrer le pilote"
            secondaryButtonText="Voir la démo produit"
          />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SalesAssistant;