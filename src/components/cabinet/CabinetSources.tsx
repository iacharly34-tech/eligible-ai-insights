const sources = [
  "INPI / RNE",
  "Sirene · INSEE",
  "BODACC",
  "Pappers",
  "Kaspr",
  "Hunter.io",
];

export const CabinetSources = () => {
  return (
    <section className="py-12 md:py-16 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground font-medium mb-8">
          Données issues de sources publiques officielles et partenaires
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
          {sources.map((s) => (
            <span
              key={s}
              className="font-display italic text-lg md:text-xl text-foreground/70 hover:text-foreground transition-colors"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};