interface Props {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
}

export const SectionHeader = ({ eyebrow, title, lede, align = "left" }: Props) => (
  <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-12`}>
    <span className="inline-block text-xs uppercase tracking-[0.2em] text-terracotta font-medium mb-4">
      {eyebrow}
    </span>
    <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] text-ink mb-5">
      {title}
    </h2>
    {lede && <p className="text-lg text-ink-secondary leading-relaxed">{lede}</p>}
  </div>
);