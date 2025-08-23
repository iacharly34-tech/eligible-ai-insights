import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, CheckCircle, HelpCircle } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection = () => {
  const { language } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems: FAQItem[] = language === 'en' ? [
    {
      question: "How to win a public tender?",
      answer: "To win a public tender, you need to carefully analyze the requirements, demonstrate your competence, and submit a competitive proposal. Eligibly helps you evaluate your chances before investing time and resources."
    },
    {
      question: "What is the difference between public tenders and government contracts?",
      answer: "Public tenders are the process of soliciting bids, while government contracts are the resulting agreements. Eligibly analyzes both procurement opportunities and contract requirements."
    },
    {
      question: "How does Eligibly help with public tenders?",
      answer: "Eligibly uses AI to analyze tender documents, predict your success probability, and identify key requirements. Our platform saves time by helping you focus on the most promising opportunities."
    },
    {
      question: "Can Eligibly analyze international public tenders?",
      answer: "Yes, Eligibly supports analysis of public tenders from multiple countries and jurisdictions, helping you expand your business internationally."
    }
  ] : [
    {
      question: "Comment gagner un appel d'offres public (AO) ?",
      answer: "Pour gagner un appel d'offres public, il faut analyser soigneusement les exigences, démontrer votre compétence et soumettre une proposition competitive. Eligibly vous aide à évaluer vos chances avant d'investir du temps et des ressources."
    },
    {
      question: "Quelle est la différence entre AO et marché public ?",
      answer: "Les appels d'offres (AO) sont la procédure de mise en concurrence, tandis que les marchés publics sont les contrats qui en résultent. Eligibly analyse les deux aspects pour optimiser vos candidatures."
    },
    {
      question: "Comment Eligibly aide sur les appels d'offres publics ?",
      answer: "Eligibly utilise l'IA pour analyser les documents d'appels d'offres publics, prédire votre probabilité de succès et identifier les exigences clés. Notre plateforme fait gagner du temps en vous aidant à vous concentrer sur les AO les plus prometteurs."
    },
    {
      question: "Eligibly peut-il analyser les marchés publics européens ?",
      answer: "Oui, Eligibly supporte l'analyse des appels d'offres publics et marchés publics de plusieurs pays européens, vous aidant à développer votre activité à l'international."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="section-spacing bg-muted/30">
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'en' 
              ? 'Frequently Asked Questions about Public Tenders' 
              : 'Questions fréquentes sur les appels d\'offres publics'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'en'
              ? 'Everything you need to know about using Eligibly for public tender analysis and government contracts.'
              : 'Tout ce que vous devez savoir sur l\'utilisation d\'Eligibly pour l\'analyse des appels d\'offres publics et marchés publics.'}
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  aria-expanded={openItems.includes(index)}
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="font-medium text-foreground pr-4">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <div className="flex items-start gap-3 pt-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            {language === 'en' 
              ? 'Still have questions about public tenders or Eligibly?' 
              : 'Vous avez encore des questions sur les appels d\'offres publics ou Eligibly ?'}{' '}
            <a 
              href={language === 'en' ? '/en/contact' : '/contact'} 
              className="text-primary hover:underline font-medium"
            >
              {language === 'en' ? 'Contact our experts' : 'Contactez nos experts'}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};