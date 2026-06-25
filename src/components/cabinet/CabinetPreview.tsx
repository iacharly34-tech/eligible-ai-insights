import { Button } from "@/components/ui/button";
import { Check, Phone } from "lucide-react";

const bullets = [
  { t: "Identité dirigeant", d: "nom, fonction, LinkedIn matchés par notre IA." },
  { t: "Contactabilité", d: "email pro vérifié, téléphone direct quand disponible." },
  { t: "Signaux primo", d: "entrepreneur indépendant vs multi-sociétés." },
  { t: "Filtres IA amont", d: "CAC, procédure, cessation, holding, serial systématiquement écartés." },
  { t: "Alerte livrée", d: "directement dans Slack, Teams, HubSpot ou votre boîte mail." },
];

export const CabinetPreview = () => {
  return (
    <section id="preview" className="py-20 md:py-28 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">
              Aperçu produit
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight mb-5">
              À quoi ressemble <em className="italic text-primary font-medium">une alerte Eligibly</em>.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-2">
              Chaque matin à 7h00, vos leads PREMIUM scorés par l'IA arrivent dans Slack, Teams ou votre boîte mail. Pour chacun : score expliqué, signaux positifs, points à vérifier.
            </p>
            <p className="text-sm font-medium text-foreground mb-6">
              Scoring IA expliqué, pas boîte noire.
            </p>
            <ul className="space-y-3">
              {bullets.map((b) => (
                <li key={b.t} className="flex gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground/85">
                    <span className="font-semibold text-foreground">{b.t}</span> · {b.d}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-border bg-card shadow-2xl shadow-foreground/5 overflow-hidden">
              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/15 text-primary flex items-center justify-center text-lg font-semibold">
                      SM
                    </div>
                    <div>
                      <p className="font-display text-xl font-semibold text-foreground">Sophie Martin</p>
                      <p className="text-sm text-muted-foreground">Présidente · SAS LumeTech</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-display italic text-3xl font-semibold text-primary leading-none">82</p>
                    <span className="inline-block mt-1 text-[0.65rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                      PREMIUM
                    </span>
                  </div>
                </div>

                <div className="rounded-lg bg-primary/5 border-l-[3px] border-primary p-4 mb-5">
                  <p className="text-[0.7rem] uppercase tracking-[0.14em] text-primary font-semibold mb-2">
                    Pourquoi ce lead est prioritaire
                  </p>
                  <p className="text-sm text-foreground/85 leading-relaxed">
                    Primo-entrepreneur confirmé, secteur SaaS aligné ICP cabinet, email pro vérifié et URL LinkedIn matchée. Société récente sans CAC mandaté ni signal de procédure. Score amplifié par le profil primo (×1.4).
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
                  {[
                    ["Immatriculation", "12 juin 2026"],
                    ["Capital", "5 000 €"],
                    ["Secteur", "NAF 5829C · Édition logiciels"],
                    ["Siège", "Paris 11e"],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-md bg-muted/60 px-3 py-2">
                      <p className="text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground font-medium">{k}</p>
                      <p className="text-foreground font-medium">{v}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 gap-2"><Phone className="w-4 h-4" />Préparer mon appel</Button>
                  <Button variant="outline" className="flex-1">Pousser dans HubSpot</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};