import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown } from "lucide-react";

const faqs = {
  fr: [
    { q: "Qu'est-ce que le scoring prédictif d'Eligibly ?", a: "C'est un score de 0 à 100 qui estime votre probabilité de remporter un marché public, calculé par notre IA à partir de l'analyse du DCE, de vos compétences et des données d'attribution historiques." },
    { q: "Comment Eligibly se distingue d'un agrégateur classique (Doubletrade, etc.) ?", a: "Les agrégateurs listent des AO. Eligibly les qualifie pour vous : chaque AO est scoré par rapport à votre profil entreprise. Vous savez immédiatement où investir votre temps." },
    { q: "Combien de temps faut-il pour obtenir mes premiers résultats ?", a: "Moins de 5 minutes. Créez votre profil, et notre IA vous présente instantanément les AO les plus pertinents avec leur score de compatibilité." },
    { q: "Mes documents (DCE, mémoires techniques) sont-ils confidentiels ?", a: "Absolument. Vos données sont hébergées en France, chiffrées en transit et au repos. Elles ne sont jamais utilisées pour entraîner nos modèles IA." },
    { q: "Quelles sources sont surveillées ?", a: "Plus de 200 sources officielles : BOAMP, PLACE, TED, profils d'acheteurs régionaux, et plateformes de dématérialisation. Couverture France + Europe." },
    { q: "Puis-je essayer gratuitement ?", a: "Oui, 14 jours d'essai gratuit sans carte bancaire sur tous les plans. Vous accédez à toutes les fonctionnalités sans restriction." },
    { q: "Le scoring fonctionne-t-il pour tous les secteurs ?", a: "Oui. Notre IA est entraînée sur des marchés de tous secteurs : BTP, IT, conseil, santé, formation, etc. Le scoring s'adapte à votre domaine." },
    { q: "Comment fonctionne la collaboration d'équipe ?", a: "Vous pouvez inviter vos collègues, partager des analyses d'AO, attribuer des marchés à préparer et suivre l'avancement des réponses en temps réel." },
  ],
  en: [
    { q: "What is Eligibly's predictive scoring?", a: "It's a 0-100 score estimating your probability of winning a public tender, calculated by our AI from tender document analysis, your capabilities and historical award data." },
    { q: "How is Eligibly different from a classic aggregator?", a: "Aggregators list tenders. Eligibly qualifies them for you: each tender is scored against your company profile. You know instantly where to invest your time." },
    { q: "How fast can I get my first results?", a: "Under 5 minutes. Create your profile, and our AI instantly shows you the most relevant tenders with their compatibility score." },
    { q: "Are my documents confidential?", a: "Absolutely. Your data is hosted in France, encrypted in transit and at rest. It is never used to train our AI models." },
    { q: "Which sources are monitored?", a: "Over 200 official sources: BOAMP, PLACE, TED, regional buyer profiles, and dematerialization platforms. France + Europe coverage." },
    { q: "Can I try for free?", a: "Yes, 14-day free trial with no credit card on all plans. You get access to all features without restriction." },
    { q: "Does scoring work for all sectors?", a: "Yes. Our AI is trained on tenders across all sectors: construction, IT, consulting, healthcare, training, etc." },
    { q: "How does team collaboration work?", a: "You can invite colleagues, share tender analyses, assign tenders to prepare and track response progress in real time." },
  ],
};

export const FAQAccordion = () => {
  const { language } = useLanguage();
  const items = faqs[language];
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 sm:py-32 px-4" id="faq" aria-label="FAQ">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">FAQ</span>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-[1.1] tracking-tight">
            {language === "en" ? "Frequently asked questions" : "Questions fréquentes"}
          </h2>
        </div>

        <div className="divide-y divide-border/50">
          {items.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left hover:text-primary transition-colors group"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-sm pr-8 group-hover:text-primary transition-colors">{item.q}</span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-40 pb-6" : "max-h-0"}`}>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
