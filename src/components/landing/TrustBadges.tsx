import { useLanguage } from "@/contexts/LanguageContext";
import { Video, SlidersHorizontal, ShieldCheck } from "lucide-react";

const badges = {
  fr: [
    { icon: Video, bold: "Démo", text: "live" },
    { icon: SlidersHorizontal, bold: "Setup", text: "personnalisé" },
    { icon: ShieldCheck, bold: "Sans", text: "engagement" },
  ],
  en: [
    { icon: Video, bold: "Live", text: "demo" },
    { icon: SlidersHorizontal, bold: "Personalized", text: "setup" },
    { icon: ShieldCheck, bold: "No", text: "commitment" },
  ],
};

export const TrustBadges = () => {
  const { language } = useLanguage();
  const items = badges[language];

  return (
    <div className="flex items-center justify-center gap-6 sm:gap-8 flex-wrap">
      {items.map((badge, i) => (
        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
          <badge.icon className="w-4 h-4 text-primary/70" />
          <span>
            <span className="font-semibold text-foreground/80">{badge.bold}</span>{" "}
            {badge.text}
          </span>
          {i < items.length - 1 && (
            <span className="hidden sm:inline text-border/60 ml-4">|</span>
          )}
        </div>
      ))}
    </div>
  );
};
