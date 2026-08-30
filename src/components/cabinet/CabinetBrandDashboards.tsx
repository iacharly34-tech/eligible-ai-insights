import { BarChart3, Link2, Star, Info } from "lucide-react";

/**
 * Tableaux de bord de maturité de marque (visibilité search, santé des backlinks, preuve sociale).
 * Données d'illustration explicitement étiquetées : le suivi réel se branche sur Search Console,
 * un outil de backlinks et la fiche Google Business du cabinet.
 */

const searchSeries = [8, 11, 14, 13, 19, 24, 29, 34, 41, 46, 52, 58];
const searchLabels = ["S", "O", "N", "D", "J", "F", "M", "A", "M", "J", "J", "A"];

const refDomains = [
  { label: "Presse & médias métier", count: 6, quality: "Fort" },
  { label: "Institutions & ordres", count: 3, quality: "Fort" },
  { label: "Annuaires spécialisés", count: 11, quality: "Moyen" },
  { label: "Partenaires & prescripteurs", count: 8, quality: "Moyen" },
];

export const CabinetBrandDashboards = () => {
  const max = Math.max(...searchSeries);
  const points = searchSeries
    .map((v, i) => `${(i / (searchSeries.length - 1)) * 100},${40 - (v / max) * 36}`)
    .join(" ");

  return (
    <section id="tableaux-de-bord" className="py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-3">
          Suivi de maturité de marque
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
          Trois tableaux de bord, sept indicateurs, aucune vanity metric
        </h2>
        <p className="mt-3 text-muted-foreground max-w-3xl leading-relaxed">
          Un cabinet n'a pas besoin d'un reporting de vingt pages. Il a besoin de savoir si sa visibilité
          progresse, si son autorité se construit et si sa preuve sociale tient le rythme. Les trois vues
          ci-dessous sont le format que nous utilisons en revue mensuelle.
        </p>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {/* Visibilité search */}
          <Card icon={<BarChart3 className="w-4 h-4" />} title="Visibilité recherche">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-display text-3xl font-semibold text-foreground tabular-nums">58</span>
              <span className="text-xs text-muted-foreground">requêtes en top 10</span>
            </div>
            <svg viewBox="0 0 100 40" className="w-full h-20" role="img" aria-label="Progression des requêtes en top 10 sur 12 mois">
              <polyline
                points={points}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1.6"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <div className="flex justify-between text-[0.62rem] text-muted-foreground mt-1">
              {searchLabels.map((l, i) => (
                <span key={i}>{l}</span>
              ))}
            </div>
            <Metrics
              rows={[
                ["Impressions / mois", "14 200"],
                ["Clics / mois", "760"],
                ["Position moyenne", "8,4"],
                ["Citations assistants IA", "4 / 5 tests"],
              ]}
            />
          </Card>

          {/* Backlinks */}
          <Card icon={<Link2 className="w-4 h-4" />} title="Santé des backlinks">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-display text-3xl font-semibold text-foreground tabular-nums">28</span>
              <span className="text-xs text-muted-foreground">domaines référents</span>
            </div>
            <div className="space-y-3">
              {refDomains.map((d) => (
                <div key={d.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-foreground/85">{d.label}</span>
                    <span className="text-muted-foreground tabular-nums">{d.count}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${(d.count / 11) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <Metrics
              rows={[
                ["Liens en dofollow", "71 %"],
                ["Liens toxiques à désavouer", "0"],
                ["Ancres de marque", "62 %"],
                ["Nouveaux domaines / trimestre", "+5"],
              ]}
            />
          </Card>

          {/* Preuve sociale */}
          <Card icon={<Star className="w-4 h-4" />} title="Preuve sociale">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-display text-3xl font-semibold text-foreground tabular-nums">5,0</span>
              <span className="text-xs text-muted-foreground">/ 5 sur 95 avis</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              Chiffres réels de la fiche Google Business d'EM Partners (Charenton-le-Pont), cabinet partenaire
              dont nous avons construit la présence digitale depuis février 2026.
            </p>
            <Metrics
              rows={[
                ["Avis obtenus / mois", "2 à 4"],
                ["Taux de réponse aux avis", "100 %"],
                ["Délai de réponse médian", "< 48 h"],
                ["Avis mentionnant une verticale", "38 %"],
              ]}
            />
          </Card>
        </div>

        <p className="mt-6 flex items-start gap-2 text-xs text-muted-foreground max-w-3xl">
          <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" aria-hidden="true" />
          <span>
            Sauf mention contraire, les valeurs affichées sont des données d'illustration représentatives d'un
            cabinet de 5 à 20 collaborateurs après douze mois de travail structuré. Le tableau de bord réel se
            branche sur votre Search Console, votre outil de backlinks et votre fiche Google Business.
          </span>
        </p>
      </div>
    </section>
  );
};

const Card = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
    <div className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">
      {icon}
      {title}
    </div>
    {children}
  </div>
);

const Metrics = ({ rows }: { rows: [string, string][] }) => (
  <dl className="mt-5 pt-4 border-t border-border space-y-2">
    {rows.map(([k, v]) => (
      <div key={k} className="flex justify-between gap-3 text-xs">
        <dt className="text-muted-foreground">{k}</dt>
        <dd className="text-foreground font-medium tabular-nums">{v}</dd>
      </div>
    ))}
  </dl>
);
