import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, CheckCircle2, Euro, Calendar, Building2, Rocket } from "lucide-react";
import React from "react";

export type HeroAO = {
  id: string;
  title: string;
  score: number;
  budget: string;
  deadline: string;
  duree: string;
  statut: "publié" | "à venir";
  source: string;
  compatibilite: {
    ca: string;
    secteur: string;
  };
};

interface Props {
  ao: HeroAO;
}

export const HeroAOCardMobile: React.FC<Props> = ({ ao }) => {
  const scoreColor = ao.score >= 80 ? "text-success" : ao.score >= 60 ? "text-warning" : "text-destructive";

  return (
    <Card className="border border-border bg-card shadow-card">
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-bold text-foreground leading-tight mb-2 line-clamp-2">
              {ao.title}
            </h1>
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant={ao.statut === "publié" ? "default" : "secondary"} className="text-[11px] px-2 py-0.5 font-medium">
                {ao.statut}
              </Badge>
              <Badge variant="outline" className="text-[11px] px-2 py-0.5 flex items-center gap-1">
                <FileText className="w-3 h-3" />
                {ao.source}
              </Badge>
            </div>
          </div>
          <div className="text-center bg-gradient-to-br from-muted/50 to-accent/10 rounded-lg p-2 min-w-[72px]">
            <div className={`flex items-center justify-center gap-1 ${scoreColor}`}>
              <span className="text-xl font-bold">{ao.score}%</span>
            </div>
            <div className="text-[10px] text-muted-foreground">Compatibilité</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="p-2 bg-muted/30 rounded-md">
            <div className="text-[10px] text-muted-foreground">Budget</div>
            <div className="text-sm font-semibold text-foreground">{ao.budget}</div>
          </div>
          <div className="p-2 bg-muted/30 rounded-md">
            <div className="text-[10px] text-muted-foreground">Échéance</div>
            <div className="text-sm font-semibold text-foreground">{ao.deadline}</div>
          </div>
          <div className="p-2 bg-muted/30 rounded-md">
            <div className="text-[10px] text-muted-foreground">Durée</div>
            <div className="text-sm font-semibold text-foreground">{ao.duree}</div>
          </div>
        </div>

        <div className="mb-3 p-2 rounded-md border border-success/20 bg-success/5">
          <div className="flex items-center gap-2 text-[13px] mb-1">
            <CheckCircle2 className="w-4 h-4 text-success" />
            <span className="text-foreground line-clamp-1">{ao.compatibilite.ca}</span>
          </div>
          <div className="flex items-center gap-2 text-[13px]">
            <CheckCircle2 className="w-4 h-4 text-success" />
            <span className="text-foreground line-clamp-1">{ao.compatibilite.secteur}</span>
          </div>
        </div>

        <Button className="w-full h-11 text-sm font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <Rocket className="w-4 h-4 mr-2" />
          Postuler avec Eligibly
        </Button>
      </CardContent>
    </Card>
  );
};

export default HeroAOCardMobile;
