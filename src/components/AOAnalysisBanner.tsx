import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Info, BarChart3, Euro, FileCheck, Target } from "lucide-react";
import { useState } from "react";

interface AOAnalysisBannerProps {
  totalBudget: string;
  averageScore: number;
  publishedAOCount: number;
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

export const AOAnalysisBanner = ({ totalBudget, averageScore, publishedAOCount }: AOAnalysisBannerProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 shadow-lg mb-6">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-foreground mb-2">
            📊 Analyse complète
          </h2>
          <p className="text-muted-foreground text-sm">
            Voici votre potentiel sur les opportunités détectées
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="text-center p-4 bg-card rounded-lg border hover:shadow-md transition-shadow cursor-help">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Euro className="w-5 h-5 text-primary" />
                    <Info className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{totalBudget}</div>
                  <div className="text-sm text-muted-foreground">Budget total disponible</div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Somme des montants estimés des AO encore ouverts</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="text-center p-4 bg-card rounded-lg border hover:shadow-md transition-shadow cursor-help">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <BarChart3 className="w-5 h-5 text-success" />
                    <Info className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-success">{averageScore}%</div>
                  <div className="text-sm text-muted-foreground">Score moyen de compatibilité</div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Matching évalué sur 18 critères (taille, NAF/CPV, références, RSE, zone, délais...)</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="text-center p-4 bg-card rounded-lg border hover:shadow-md transition-shadow cursor-help">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <FileCheck className="w-5 h-5 text-accent" />
                    <Info className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-accent">{publishedAOCount}</div>
                  <div className="text-sm text-muted-foreground">AO publiés (candidature possible)</div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Nombre d'AO encore ouverts où votre score ≥ seuil d'éligibilité</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="text-center">
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                Voir ma méthode de scoring
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