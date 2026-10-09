import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTABar } from "@/components/MobileCTABar";
import { CTAFooter } from "@/components/CTAFooter";
import { Badge } from "@/components/ui/badge";
import { SafeLink } from "@/components/SafeLink";
import data from "@/data/chiffres-verifies.json";

type Row = {
  volume: number;
  dirigeant_identifie: number;
  adresse_courrier_valide: number;
  email_fiable: number;
  telephone: number;
  linkedin_dirigeant: number;
  leads_prioritaires: number;
  deja_chez_un_cabinet: number | null;
};

const rows = Object.entries(data.verticales as Record<string, Row>);
const total = rows.reduce((s, [, r]) => s + r.volume, 0);
const pct = (v: number | null) => (v === null ? "n.m." : `${v} %`);

const BarometreQualiteLeads = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <MobileCTABar />
    <main id="main-content" className="pt-24 pb-14 sm:pt-28">
      <div className="container mx-auto px-4 space-y-10">
        <header className="max-w-3xl space-y-4">
          <Badge variant="outline" className="border-primary/30 bg-primary/5 text-primary">
            Mesure du pipeline — septembre 2026
          </Badge>
          <h1 className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
            Baromètre qualité des leads : ce que contient réellement une création d’entreprise détectée
          </h1>
          <p className="text-lg text-muted-foreground">
            {total.toLocaleString("fr-FR")} sociétés analysées sur 5 verticales. Taux de dirigeant identifié,
            d’adresse courrier valide, d’e-mail fiable, de téléphone et de part déjà accompagnée par un cabinet.
            Ces mesures sont publiées telles quelles, y compris quand elles sont faibles.
          </p>
        </header>

        <section aria-labelledby="tableau" className="space-y-3">
          <h2 id="tableau" className="font-display text-2xl font-semibold text-foreground">Résultats par verticale</h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-card">
            <table className="w-full min-w-[820px] text-sm">
              <thead className="bg-muted/60 text-left text-foreground">
                <tr>
                  {["Verticale", "Sociétés", "Dirigeant identifié", "Adresse courrier", "E-mail fiable", "Téléphone", "LinkedIn dirigeant", "Leads prioritaires", "Déjà chez un cabinet"].map((h) => (
                    <th key={h} scope="col" className="px-4 py-3 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map(([name, r]) => (
                  <tr key={name} className="border-t border-border text-muted-foreground">
                    <th scope="row" className="px-4 py-3 text-left font-medium text-foreground">{name}</th>
                    <td className="px-4 py-3">{r.volume}</td>
                    <td className="px-4 py-3">{pct(r.dirigeant_identifie)}</td>
                    <td className="px-4 py-3">{pct(r.adresse_courrier_valide)}</td>
                    <td className="px-4 py-3">{pct(r.email_fiable)}</td>
                    <td className="px-4 py-3">{pct(r.telephone)}</td>
                    <td className="px-4 py-3">{pct(r.linkedin_dirigeant)}</td>
                    <td className="px-4 py-3 font-semibold text-foreground">{pct(r.leads_prioritaires)}</td>
                    <td className="px-4 py-3">{pct(r.deja_chez_un_cabinet)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground">
            Source : {data._meta.source}. Périmètre : {data._meta.perimetre}. n.m. = non mesuré. {data._meta.avertissement}
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {[
            { t: "Le courrier reste le canal le plus fiable", d: "Plus de 90 % des sociétés ont une adresse courrier valide sur chaque verticale, contre 2 à 18 % d’e-mails fiables. Un premier contact écrit et personnalisé n’est pas un choix par défaut : c’est le canal le plus couvert." },
            { t: "Un quart des créations seulement est prioritaire", d: "Entre 14 et 27 % des sociétés détectées ressortent comme prioritaires. Le scoring sert à écarter les autres, pas à gonfler un volume." },
            { t: "Une partie est déjà accompagnée", d: "Jusqu’à 21 % des créations tech sont déjà chez un cabinet. Ces sociétés sont signalées pour éviter un démarchage inutile." },
          ].map((c) => (
            <article key={c.t} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </article>
          ))}
        </section>

        <section className="rounded-xl border border-border bg-muted/40 p-6 space-y-2">
          <h2 className="font-display text-xl font-semibold text-foreground">Santé et premier bilan</h2>
          <p className="text-sm text-muted-foreground">
            Praticiens de santé : au moins un point de contact trouvé pour {data.sante_points_de_contact.au_moins_un_point_de_contact},
            page de rendez-vous en ligne pour {data.sante_points_de_contact.page_rdv_en_ligne}, téléphone pour {data.sante_points_de_contact.telephone}.
            Date de clôture du premier exercice connue pour {data.accroche_premier_bilan.date_cloture_premier_exercice_connue} des sociétés.
          </p>
          <p className="text-sm">
            <SafeLink to="/pourquoi-ce-lead-est-prioritaire" className="font-medium text-primary underline-offset-4 hover:underline">
              Voir comment ces données apparaissent dans une fiche lead (exemple fictif)
            </SafeLink>
            {" · "}
            <SafeLink to="/produit" className="font-medium text-primary underline-offset-4 hover:underline">
              L’offre Détection &amp; prospection
            </SafeLink>
          </p>
        </section>
      </div>
    </main>
    <CTAFooter />
    <Footer />
  </div>
);

export default BarometreQualiteLeads;
