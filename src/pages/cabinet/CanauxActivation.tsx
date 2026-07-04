import { LandingCabinetLayout } from "./LandingCabinetLayout";
import { Linkedin, Mail, Phone, Instagram, Send } from "lucide-react";

const CHANNELS = [
  { icon: Linkedin,  title: "LinkedIn",     when: "Dirigeants digitaux, freelances, tech, conseil.", how: "Invitation avec note perso sur les 3 signaux du lead (forme, capital, verticale). Taux d'acceptation observé : 45–60 %." },
  { icon: Mail,      title: "Email",        when: "Scale-ups B2B, professions libérales, activités formalisées.", how: "Séquence 3 touches sur 10 jours : bilan d'ouverture, question ouverte, relance courte. Taux d'ouverture 55 %+." },
  { icon: Phone,     title: "Appel court",  when: "Restauration, retail, artisanat, professions où l'email est faible.", how: "Script 90 secondes adapté à la forme juridique. Meilleur créneau : mardi/jeudi 10h ou 14h." },
  { icon: Instagram, title: "Instagram DM", when: "Créateurs, artisans, design, professions du soin, coach.", how: "DM avec référence à l'univers visuel + lien Calendly. Peu concurrentiel — 80 % de vue, 25 % de réponse." },
  { icon: Send,      title: "Courrier en-tête", when: "Artisans locaux, TPE traditionnelles, professions médicales.", how: "Lettre A4 sur en-tête du cabinet + carte de visite. Taux d'ouverture proche de 90 %, effet mémoriel fort." },
];

const CanauxActivation = () => (
  <LandingCabinetLayout
    seoTitle="Canaux d'activation : LinkedIn, email, appel, Instagram, courrier | Eligibly"
    seoDescription="Pour chaque lead cabinet, Eligibly recommande le meilleur canal d'approche : LinkedIn, email, appel, Instagram DM ou courrier en-tête. Méthode, timing et taux de conversion observés."
    canonicalPath="/canaux-activation"
    eyebrow="Activation multicanal"
    h1a="Le bon lead, sur le"
    h1b="bon canal, au bon moment"
    h1c="."
    intro="Contacter un chef d'entreprise du BTP comme un fondateur de SaaS est le meilleur moyen d'être ignoré. Pour chaque lead, Eligibly recommande le canal le plus efficace selon la verticale, la forme juridique et le profil du dirigeant."
    bullets={[
      "5 canaux testés en cabinet : LinkedIn, email, appel, Instagram, courrier",
      "Une accroche pré-rédigée par lead, personnalisable en 30 secondes",
      "Le meilleur moment de contact selon l'activité",
      "Un tracking des retours pour affiner le modèle de votre cabinet",
    ]}
    ctaPrimary="Recevoir 3 leads test"
    ctaNote="Chaque lead livré avec son canal recommandé et son accroche."
    sections={CHANNELS.map((c) => ({
      title: c.title,
      body: (
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <c.icon className="w-5 h-5 text-primary" aria-hidden="true" />
          </div>
          <div className="space-y-2">
            <p><strong className="text-foreground">Quand l'utiliser :</strong> <span className="text-muted-foreground">{c.when}</span></p>
            <p><strong className="text-foreground">Comment :</strong> <span className="text-muted-foreground">{c.how}</span></p>
          </div>
        </div>
      ),
    }))}
    faq={[
      { q: "Puis-je choisir un seul canal ?", a: "Oui. Vous pouvez filtrer les leads livrés par canal recommandé si votre cabinet est structuré autour d'une seule modalité (par exemple email uniquement)." },
      { q: "Les accroches sont-elles génériques ?", a: "Non. Chaque accroche cite les 2-3 signaux réels du lead : forme juridique, capital, verticale, date d'immatriculation. Rien d'inventé." },
      { q: "Le courrier papier fonctionne encore ?", a: "Oui, particulièrement pour les artisans, TPE traditionnelles et professions médicales. Le courrier en-tête cabinet + carte de visite ouvre à 85–92 % dans nos cabinets pilotes." },
    ]}
    related={[
      { label: "Leads experts-comptables", href: "/leads-experts-comptables" },
      { label: "Pourquoi ce lead est prioritaire", href: "/pourquoi-ce-lead-est-prioritaire" },
      { label: "Prospection cabinet comptable — méthode", href: "/prospection-cabinet-comptable" },
    ]}
  />
);

export default CanauxActivation;