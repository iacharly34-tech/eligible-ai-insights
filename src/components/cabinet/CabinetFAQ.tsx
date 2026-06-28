import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Lock, FileText } from "lucide-react";
import { useLang } from "@/hooks/useLang";

const FAQS_FR = [
  { q: "On achète déjà des leads chez un fournisseur, c'est pas la même chose ?", a: "Non. Les fournisseurs de leads vous vendent un contact à l'unité, souvent mutualisé entre 3 à 5 cabinets, sans expliciter pourquoi ce lead est prioritaire pour vous. Eligibly est un outil de production de leads : votre cabinet possède la source, vous paramétrez vos critères ICP, et vous recevez chaque jour les leads PREMIUM correspondant à votre profil idéal, avec un score expliqué, pour un abonnement adapté à votre volume et à la taille de votre cabinet. Vous gagnez en autonomie, en volume et en qualité." },
  { q: "Si je m'abonne à Eligibly, je peux arrêter mes autres fournisseurs de leads ?", a: "La majorité de nos cabinets pilotes le font après 2 à 3 mois. Eligibly produit en autonomie vos leads PREMIUM quotidiens, ce qui couvre largement le besoin d'un cabinet de 5 à 30 collaborateurs. Notre recommandation : conservez vos autres canaux les 2 premiers mois en parallèle, comparez la qualité et le coût par rendez-vous, puis arrêtez ceux qui ne tiennent pas la comparaison." },
  { q: "Comment je reçois mes leads ?", a: "Chaque matin (jours ouvrés), vous recevez par email un digest avec les top 3 à 5 leads PREMIUM du jour, score expliqué et plan d'action inclus. Un clic sur la fiche du lead vous ouvre la plateforme Eligibly pour qualifier et démarrer la prospection. Pour les cabinets qui préfèrent recevoir le digest dans Slack ou Microsoft Teams, l'intégration est disponible sur demande." },
  { q: "Combien de leads je vais recevoir par jour ?", a: "Le volume dépend de votre ICP (secteurs ciblés, zone géographique, forme juridique cible) et du flux d'immatriculations réel. À titre indicatif, les cabinets pilotes reçoivent entre quelques leads et une quinzaine par jour selon leur paramétrage. Engagement de moyens par filtres amont — pas de garantie chiffrée sur le volume, qui dépend du marché réel et de la fraîcheur des immatriculations." },
  { q: "Mes leads sont-ils exclusifs ou mutualisés avec d'autres cabinets ?", a: "Exclusivement à vous. Chaque cabinet dispose d'un workspace logiquement isolé. Vos critères ICP vous sont propres, vos leads aussi. Aucun lead n'est partagé entre cabinets." },
  { q: "En quoi Eligibly diffère d'un annuaire d'entreprises classique ?", a: "Un annuaire généraliste vous fournit la donnée brute, à charge pour vous de la filtrer, la scorer et la qualifier manuellement. Eligibly est un moteur d'alertes verticalisé pour les cabinets d'expertise comptable : filtres IA amont automatiques, scoring IA expliqué par lead, et livraison directe dans votre canal de prédilection." },
  { q: "Quelle est la garantie associée à l'abonnement ?", a: "Engagement de qualité par filtres amont : tout lead non conforme à nos critères de filtrage est remplacé gratuitement. En revanche, aucune garantie chiffrée sur le nombre de rendez-vous : votre conversion dépend de votre exécution commerciale." },
  { q: "Pouvez-vous garantir que le prospect n'a pas déjà un expert-comptable ?", a: "Non. Il n'existe pas de base publique exhaustive des mandats d'expertise comptable. Nous ciblons les sociétés fraîchement immatriculées (≤ 90 jours) pour maximiser la fenêtre où le primo-entrepreneur n'a pas encore tranché." },
  { q: "Vos données sont-elles conformes au RGPD ?", a: "Oui, de manière native. Sources publiques officielles (INPI, Sirene, BODACC) et partenaires d'enrichissement contractuels conformes RGPD. Base légale : article 6.1.f (intérêt légitime B2B). Hébergement UE, chiffrement en transit et au repos. Droit d'opposition opérationnel sous 48 heures." },
  { q: "Où et comment sont hébergées mes données ?", a: "Toutes les données sont hébergées sur des serveurs en France et en Europe. Aucun transfert hors UE. Chaque cabinet dispose d'un workspace isolé : vos feedbacks et votre historique de scoring ne sont jamais partagés." },
  { q: "Quel est votre processus de collecte et de traitement des données ?", a: "Six étapes documentées et contrôlées : collecte sur sources officielles, dédoublonnage, exclusions amont, enrichissement, scoring IA explicable, livraison. Aucun scraping sauvage. Chaque traitement est tracé et auditable." },
  { q: "Comment se passe l'onboarding ?", a: "Un rendez-vous visio de 45 minutes pour cadrer votre ICP. Votre workspace est livré sous 48 heures avec votre premier lot de leads. Bilan à J+14 pour ajuster le filtrage et le scoring." },
  { q: "Combien coûte un lead Eligibly ?", a: "À partir de 10 € par lead qualifié. Le tarif final dépend de votre volume mensuel cible et de la taille de votre cabinet : plus le volume est élevé, plus le coût unitaire baisse. Devis personnalisé sous 24 h ouvrées après un échange de cadrage de 20 minutes." },
  { q: "Sur quels modèles d'IA repose Eligibly ? Est-ce une boîte noire ?", a: "Non, jamais. Notre stack est documentée : modèles open-weights hébergés en UE (Mistral, Llama, Qwen) pour le scoring et la génération d'accroches, modèles propriétaires pour le matching ICP. Chaque décision de scoring est explicable — 3 raisons positives, 1 à 2 points à vérifier, pondération visible. Aucun appel d'API hors UE sur vos données. Vous pouvez auditer la logique de filtrage et de scoring sur demande." },
  { q: "Quels touchpoints recevez-vous pour chaque lead ?", a: "Pour chaque lead PREMIUM : email professionnel vérifié, téléphone professionnel quand disponible, profil LinkedIn du dirigeant, adresse postale du siège, et une recommandation d'accroche IA personnalisée (email + LinkedIn) prête à envoyer. Vous choisissez le canal d'attaque le plus pertinent pour votre cabinet." },
];

const FAQS_EN_EXTRA_REMOVED = [
];

const FAQS_EN = [
  { q: "We already buy leads from a provider — isn't that the same?", a: "No. Lead providers sell you a contact at a unit price, often shared across 3 to 5 firms, with no explanation of why the lead is a priority for you. Eligibly is a lead production tool: your firm owns the source, you configure your ICP, and you receive every day the PREMIUM leads matching your ideal profile, with an explained score, for a subscription tailored to your volume and firm size." },
  { q: "If I subscribe to Eligibly, can I drop my other lead providers?", a: "Most of our pilot firms do, after 2–3 months. Eligibly produces your daily PREMIUM leads autonomously — enough for a firm of 5–30 staff. Our recommendation: keep your other channels in parallel for the first two months, compare quality and cost per meeting, then drop those that don't hold up." },
  { q: "How do I receive my leads?", a: "Every business morning, you get an email digest with the top 3 to 5 PREMIUM leads of the day, with an explained score and an action plan. One click on a lead opens the Eligibly workspace to qualify and start outreach. For firms that prefer to receive the digest in Slack or Microsoft Teams, the integration is available on request." },
  { q: "How many leads will I receive per day?", a: "The volume depends on your ICP (industries, area, target legal form) and the real flow of registrations. As a benchmark, pilot firms receive between a handful and around fifteen leads per day depending on their settings. Best-effort commitment via upstream filters — no quantitative guarantee on volume, which depends on the real market and the freshness of registrations." },
  { q: "Are my leads exclusive, or shared with other firms?", a: "Exclusively yours. Each firm has a logically isolated workspace. Your ICP is yours, your leads are yours. No lead is shared between firms." },
  { q: "How is Eligibly different from a regular business directory?", a: "A general directory gives you raw data — you filter, score and qualify manually. Eligibly is a vertical alert engine for accounting firms: automatic upstream AI filters, explained AI scoring per lead, and direct delivery in your preferred channel." },
  { q: "What guarantee comes with the subscription?", a: "Quality commitment via upstream filters: any lead not matching our filtering criteria is replaced free of charge. No quantitative guarantee on the number of meetings: conversion depends on your sales execution." },
  { q: "Can you guarantee the prospect doesn't already have an accountant?", a: "No. There is no exhaustive public registry of accountant mandates. We target newly registered companies (≤ 90 days) to maximize the window in which the first-time founder hasn't decided yet." },
  { q: "Is your data GDPR-compliant?", a: "Yes, by design. Official public sources (INPI, Sirene, BODACC) and contractual GDPR-compliant enrichment partners. Legal basis: GDPR Art. 6.1.f (legitimate B2B interest). EU hosting, encryption in transit and at rest. Right to object handled within 48 hours." },
  { q: "Where and how is my data hosted?", a: "All data is hosted on servers located in France and the EU. No transfer outside the EU. Each firm has an isolated workspace: your feedback and scoring history are never shared." },
  { q: "What is your data collection and processing process?", a: "Six documented and controlled steps: collection from official sources, deduplication, upstream exclusions, enrichment, explainable AI scoring, delivery. No rogue scraping. Every operation is logged and auditable." },
  { q: "How does onboarding work?", a: "A 45-minute video call to scope your ICP. Your workspace ships within 48 hours with your first batch of leads. Review at D+14 to fine-tune filtering and scoring." },
  { q: "Why isn't your price shown on the site?", a: "Our pricing is tailored to your firm — target volume, area, vertical. We share it after a 20-minute scoping call, out of respect for our active clients and to confirm that expected value is clear on both sides. Written proposal within 24 business hours." },
];

const copy = {
  fr: { eyebrow: "FAQ", h2a: "Les questions", h2b: "qu'on nous pose", faqs: FAQS_FR },
  en: { eyebrow: "FAQ", h2a: "The questions", h2b: "we get asked", faqs: FAQS_EN },
} as const;

export const CabinetFAQ = () => {
  const lang = useLang();
  const t = copy[lang];
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">{t.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            {t.h2a} <em className="italic text-primary font-medium">{t.h2b}</em>.
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {t.faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-display italic text-lg font-medium text-foreground hover:text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-[0.95rem]">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};