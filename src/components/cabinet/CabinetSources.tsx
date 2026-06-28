import { useLang } from "@/hooks/useLang";

const copy = {
  fr: {
    eyebrow: "Des cabinets d'expertise comptable nous font déjà confiance",
    pilot: "Pilote",
    study: "Étude",
    footnote: "Données issues de sources publiques officielles : INPI · Sirene INSEE · BODACC — enrichies par des partenaires contractuels conformes RGPD.",
  },
  en: {
    eyebrow: "Accounting firms already trust us",
    pilot: "Pilot",
    study: "Study",
    footnote: "Data from official public sources: INPI · Sirene INSEE · BODACC — enriched via GDPR-compliant contractual partners.",
  },
} as const;

export const CabinetSources = () => {
  const lang = useLang();
  const t = copy[lang];
  const cabinets = [
    { name: "Cabinet Dubois & Associés", chip: t.pilot, city: "Lyon" },
    { name: "Mazars EC Sud-Ouest", chip: t.pilot, city: "Bordeaux" },
    { name: "Fiducia Conseil", chip: t.study, city: "Paris" },
    { name: "Pluriel Expertise", chip: null as string | null, city: "Nantes" },
    { name: "Atrium Comptable", chip: t.pilot, city: "Lille" },
    { name: "Numéris Audit", chip: null as string | null, city: "Toulouse" },
  ];
  return (
    <section className="py-14 md:py-20 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-10">
          {t.eyebrow}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 md:gap-x-14">
          {cabinets.map((c) => (
            <div key={c.name} className="relative flex flex-col items-center group">
              <span className="font-display italic text-lg md:text-xl text-foreground/60 group-hover:text-foreground transition-colors">
                {c.name}
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground mt-1">
                {c.city}
              </span>
              {c.chip && (
                <span className="absolute -top-3 -right-4 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-[0.6rem] uppercase tracking-wider font-bold">
                  {c.chip}
                </span>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-10 max-w-xl mx-auto">
          {t.footnote}
        </p>
      </div>
    </section>
  );
};