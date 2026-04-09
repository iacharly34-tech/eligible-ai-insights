import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Target, Euro, FileCheck, Clock, XCircle, Eye } from "lucide-react";
import { useState } from "react";

interface AOAnalysisBannerProps {
  totalBudget: string;
  publishedAOCount: number;
  upcomingAOCount: number;
  rejectedAOCount: number;
  averageDeadline: number;
}

const scoringCriteria = [
  { title: "Taille d'entreprise", description: "Évaluation du CA requis vs votre CA actuel" },
  { title: "Code NAF/CPV", description: "Correspondance entre secteur d'activité et marché" },
  { title: "Références projet", description: "Adéquation entre vos références et celles demandées" },
  { title: "Critères RSE", description: "Conformité environnementale et sociale" },
  { title: "Zone géographique", description: "Proximité et capacité d'intervention" },
  { title: "Délais de livraison", description: "Compatibilité avec vos capacités de production" },
  { title: "Certifications requises", description: "Possession des labels et certifications demandés" },
  { title: "Capacité financière", description: "Seuils de chiffre d'affaires et garanties" },
  { title: "Expérience sectorielle", description: "Historique dans le domaine d'activité" },
  { title: "Compétences techniques", description: "Maîtrise des technologies requises" },
  { title: "Équipe projet", description: "Dimensionnement et compétences de l'équipe" },
  { title: "Sous-traitance", description: "Capacité de gestion de la sous-traitance" },
  { title: "Innovation", description: "Capacité d'innovation et R&D" },
  { title: "Partenariats", description: "Écosystème de partenaires et fournisseurs" },
  { title: "Conformité juridique", description: "Respect des obligations légales et réglementaires" },
  { title: "Qualité process", description: "Certification qualité et méthodes de travail" },
  { title: "Support client", description: "Niveau de service et maintenance proposé" },
  { title: "Flexibilité", description: "Capacité d'adaptation aux évolutions du marché" }
];

export const AOAnalysisBanner = ({ 
  totalBudget, 
  publishedAOCount, 
  upcomingAOCount, 
  rejectedAOCount, 
  averageDeadline 
}: AOAnalysisBannerProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const indicators = [
    {
      icon: "💰",
      value: totalBudget,
      label: "Budget total accessible",
      description: "Montant total des marchés accessibles pour vous aujourd'hui.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: "📑",
      value: publishedAOCount,
      label: "AO publiés compatibles",
      description: "Appels d'offres ouverts où vous pouvez candidater dès maintenant.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: "🔮",
      value: upcomingAOCount,
      label: "AO à venir sous 30 jours",
      description: "Marchés détectés avant publication officielle, pour vous préparer en avance.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: "🚫",
      value: rejectedAOCount,
      label: "AO écartés par Charly",
      description: "Opportunités non pertinentes filtrées pour vous faire gagner du temps.",
      color: "text-destructive",
      bgColor: "bg-red-50"
    },
    {
      icon: "⏳",
      value: `${averageDeadline} jours`,
      label: "Délai moyen restant",
      description: "Temps moyen restant avant la clôture des AO compatibles.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <Card className="bg-gradient-to-br from-primary/5 via-accent/5 to-background border-primary/20 shadow-xl mb-8">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-3 flex items-center justify-center gap-2">
            🚀 Votre potentiel marché avec Charly
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Une vision claire de vos opportunités pour optimiser votre stratégie commerciale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {indicators.map((indicator, index) => (
            <div 
              key={index}
              className={`text-center p-6 rounded-xl border-2 border-transparent hover:border-primary/30 transition-all duration-300 hover:scale-105 ${indicator.bgColor} group`}
            >
              <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                {indicator.icon}
              </div>
              <div className={`text-3xl font-bold mb-2 ${indicator.color}`}>
                {indicator.value}
              </div>
              <div className="text-sm font-semibold text-foreground mb-2">
                {indicator.label}
              </div>
              <div className="text-xs text-muted-foreground leading-relaxed">
                {indicator.description}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="lg"
                className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 shadow-lg"
              >
                <Eye className="w-5 h-5" />
                🔎 Voir comment Charly calcule vos scores
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Méthode de scoring Charly - 18 critères
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-3 mt-4">
                {scoringCriteria.map((criteria, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                    <Badge variant="outline" className="min-w-8 h-6 text-xs">
                      {index + 1}
                    </Badge>
                    <div>
                      <h4 className="font-semibold text-sm text-foreground">{criteria.title}</h4>
                      <p className="text-sm text-muted-foreground">{criteria.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};