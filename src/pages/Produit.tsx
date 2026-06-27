import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { MobileCTABar } from "@/components/MobileCTABar";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/SafeLink";
import { ArrowRight, Database, Filter, Sparkles, Bell, RefreshCw, CheckCircle2, Slack, Mail, Shield, Lock, FileText, Server } from "lucide-react";

const Produit = () => {
  return (
    <>
      <SEOHead />
      <StructuredData page="product" />
      <div className="min-h-screen bg-background">
        <Header />
        <MobileCTABar />

        <main>
          {/* Hero */}
          <section className="pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-6">Le produit</p>
              <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-8">
                Un moteur de détection qui livre <em className="italic text-primary font-medium">les bons leads</em>, là où votre cabinet travaille.
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
              Eligibly consolide les sources officielles, filtre selon votre ICP, score chaque société fraîchement immatriculée, et pousse les meilleures alertes dans votre canal de prédilection.
              </p>
              <SafeLink to="/demo">
                <Button size="lg" variant="tengo" className="group h-12 px-8">
                  Réserver une démo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </SafeLink>
            </div>
          </section>

          {/* 4 piliers */}
          <section className="py-20 md:py-28 px-4 bg-card/30">
            <div className="container mx-auto max-w-6xl">
              <div className="max-w-2xl mb-14">
                <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">Comment ça marche</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                  Quatre briques pour transformer les immatriculations en <em className="italic text-primary font-medium">rendez-vous qualifiés</em>.
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { icon: Database, t: "Consolidation des sources", d: "INPI, Sirene, BODACC, Pappers, RNCS, RNE. Toutes les SASU et SAS françaises fraîchement immatriculées, rafraîchies chaque nuit." },
                  { icon: Filter, t: "Filtres IA amont", d: "Verticale, capital, forme juridique, zone, dirigeant primo-entrepreneur, présence d'un CAC. Vous décrivez votre cabinet idéal, l'IA fait le reste." },
                  { icon: Sparkles, t: "Scoring expliqué", d: "Chaque société reçoit un score 0-100 avec les 3 raisons clés. Pas de boîte noire — votre équipe sait pourquoi un lead est prioritaire." },
                  { icon: Bell, t: "Alertes là où vous travaillez", d: "Vos canaux et outils de prédilection. Vous décidez du canal et du rythme. Pas un dashboard de plus." },
                ].map((p) => (
                  <div key={p.t} className="rounded-2xl border border-border bg-background p-7">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                      <p.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">{p.t}</h3>
                    <p className="text-muted-foreground leading-relaxed">{p.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Anatomie alerte */}
          <section className="py-20 md:py-28 px-4">
            <div className="container mx-auto max-w-5xl">
              <div className="max-w-2xl mb-12">
                <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">Anatomie d'une alerte</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                  Tout ce qu'il faut pour décrocher le téléphone, <em className="italic text-primary font-medium">rien de plus</em>.
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
                {[
                  ["Identité société", "Dénomination · SIREN · forme · capital · adresse · code NAF · date Kbis."],
                  ["Dirigeant", "Nom · email pro vérifié · LinkedIn · téléphone si disponible · primo-entrepreneur ou récidiviste."],
                  ["Signal cabinet", "Pas de CAC mandaté · pas d'expert-comptable déclaré · verticale tech/conseil/santé · score 0-100."],
                ].map(([t, d]) => (
                  <div key={t} className="bg-card p-7">
                    <h3 className="font-display text-lg font-semibold mb-2">{t}</h3>
                    <p className="text-[0.95rem] text-muted-foreground leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Intégrations */}
          <section className="py-20 md:py-28 px-4 bg-card/30">
            <div className="container mx-auto max-w-5xl text-center">
              <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">Intégrations natives</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-10">
                Vos alertes <em className="italic text-primary font-medium">arrivent où vous êtes déjà</em>.
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {["Slack", "Microsoft Teams", "Gmail / Outlook", "HubSpot", "Pipedrive", "Notion", "Webhook / API", "Google Sheets"].map((i) => (
                  <span key={i} className="px-4 py-2 rounded-full border border-border bg-background text-sm">{i}</span>
                ))}
              </div>
              <div className="mt-12 flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <Slack className="w-5 h-5 text-primary" /> <Mail className="w-5 h-5 text-primary" /> <RefreshCw className="w-5 h-5 text-primary" />
                <span>Livraison J+0 · rafraîchissement quotidien · pas de double saisie</span>
              </div>
            </div>
          </section>

          {/* Apprentissage */}
          <section className="py-20 md:py-28 px-4">
            <div className="container mx-auto max-w-5xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">Apprentissage continu</p>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-6">
                    Le moteur s'affine <em className="italic text-primary font-medium">à chaque retour</em> de vos associés.
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    À chaque alerte qualifiée ou écartée par votre équipe, l'IA ajuste ses filtres et son scoring sur votre profil de cabinet. Au bout de 4 semaines, 80 % des alertes correspondent réellement à votre ICP.
                  </p>
                  <ul className="space-y-3">
                    {["Feedback en un clic dans vos canaux", "Modèle propre à votre cabinet, pas mutualisé", "Vos données restent vos données (RGPD, hébergement UE)"].map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[0.95rem]">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-border bg-card p-8">
                  <div className="space-y-4 text-sm">
                    {[
                      ["Semaine 1", "62 % d'alertes pertinentes"],
                      ["Semaine 2", "71 %"],
                      ["Semaine 4", "80 %"],
                      ["Semaine 8", "87 %"],
                    ].map(([w, v]) => (
                      <div key={w}>
                        <div className="flex justify-between mb-1.5"><span className="text-muted-foreground">{w}</span><span className="font-semibold">{v}</span></div>
                        <div className="h-2 rounded-full bg-muted overflow-hidden"><div className="h-full bg-primary" style={{ width: v }} /></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 md:py-28 px-4 bg-card/30">
            <div className="container mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
                Voir le produit <em className="italic text-primary font-medium">sur vos vrais leads</em>.
              </h2>
              <p className="text-muted-foreground mb-10">30 minutes. On paramètre votre zone et votre verticale, et on regarde ensemble les SASU & SAS du matin.</p>
              <SafeLink to="/demo">
                <Button size="lg" variant="tengo" className="group h-12 px-8">
                  Réserver ma démo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </SafeLink>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Produit;
