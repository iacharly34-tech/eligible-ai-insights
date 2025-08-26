import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  Building2, 
  Calendar, 
  Euro, 
  FileText, 
  Trophy,
  ExternalLink,
  Download,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Lightbulb,
  Star
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface IncompatibleAOData {
  id: string;
  title: string;
  acheteur: string;
  budget: number;
  lieu: string;
  echeance: string;
  score: number;
  etat: "Incompatible";
  raisons: string[];
  suggestion: {
    type: "ALTERNATIVE";
    id: string;
    title: string;
    budget: number;
    compat_score: number;
    motif: string;
  };
}

interface IncompatibleAOCardProps {
  ao: IncompatibleAOData;
  onViewAlternative?: (alternativeId: string) => void;
}

export const IncompatibleAOCard = ({ ao, onViewAlternative }: IncompatibleAOCardProps) => {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const formatBudget = (budget: number) => {
    if (budget >= 1000000) {
      return `${(budget / 1000000).toFixed(1)}M€`;
    } else if (budget >= 1000) {
      return `${(budget / 1000).toFixed(0)}K€`;
    }
    return `${budget}€`;
  };

  return (
    <Card className="border border-destructive/30 hover:shadow-lg transition-all duration-300 bg-card relative overflow-hidden">
      {/* Indicateur visuel d'incompatibilité */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive to-destructive/70"></div>
      
      <CardContent className="p-4">
        {/* En-tête avec titre et badge d'état */}
        <div className="mb-3">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-foreground leading-tight mb-2 line-clamp-2">
                {ao.title}
              </h3>
              <div className="flex items-center gap-2 flex-wrap">
                <Badge className="bg-destructive text-destructive-foreground text-xs px-2 py-1 font-medium">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  Incompatible (risque d'éviction)
                </Badge>
                <Badge variant="outline" className="text-xs px-2 py-1">
                  {ao.acheteur}
                </Badge>
              </div>
            </div>
            
            {/* Score avec indication visuelle */}
            <div className="text-center bg-gradient-to-br from-destructive/10 to-destructive/5 rounded-lg p-3 min-w-[80px] border border-destructive/20">
              <div className="flex items-center justify-center gap-1 mb-1 text-destructive">
                <AlertCircle className="w-4 h-4" />
                <span className="text-2xl font-bold">{ao.score}%</span>
              </div>
              <div className="text-xs text-muted-foreground font-medium">
                Score IA
              </div>
            </div>
          </div>
        </div>

        {/* Informations de base - Attractive au premier regard */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2 p-2 bg-muted/30 rounded-md">
            <Euro className="w-4 h-4 text-primary flex-shrink-0" />
            <div className="text-sm min-w-0">
              <div className="text-xs text-muted-foreground">Budget</div>
              <div className="font-semibold text-foreground">{formatBudget(ao.budget)}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-2 bg-muted/30 rounded-md">
            <Calendar className="w-4 h-4 text-accent flex-shrink-0" />
            <div className="text-sm min-w-0">
              <div className="text-xs text-muted-foreground">Échéance</div>
              <div className="font-semibold text-foreground">{ao.echeance}</div>
            </div>
          </div>
        </div>

        {/* Section "Pourquoi c'est tentant" */}
        <div className="mb-4 p-3 bg-gradient-to-r from-success/5 to-success/10 rounded-lg border border-success/20">
          <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
            <Star className="w-4 h-4 text-success" />
            Pourquoi c'est tentant
          </h4>
          <div className="text-sm text-muted-foreground">
            Localisation {ao.lieu} ✓ • Budget dans votre cible ✓ • Secteur conforme ✓
          </div>
        </div>

        {/* Section "Voir pourquoi" - Collapsible */}
        <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
          <CollapsibleTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full mb-4 text-sm border-destructive/30 hover:bg-destructive/5 transition-colors"
            >
              <AlertCircle className="w-4 h-4 mr-2" />
              Voir les critères bloquants
              {isExpanded ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="space-y-4">
            {/* Pourquoi Charly dit non */}
            <div className="p-3 bg-destructive/5 rounded-lg border border-destructive/20">
              <h4 className="text-sm font-semibold text-destructive mb-3">
                Pourquoi Charly dit non :
              </h4>
              <div className="space-y-2">
                {ao.raisons.map((raison, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm">
                    <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{raison}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Alternative proposée */}
            <div className="p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/20">
              <h4 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                Alternative proposée (1 clic)
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="font-semibold text-foreground text-sm">{ao.suggestion.title}</div>
                  <div className="text-sm text-muted-foreground">
                    Budget: {formatBudget(ao.suggestion.budget)} • Score: {ao.suggestion.compat_score}%
                  </div>
                </div>
                <div className="text-xs text-muted-foreground italic bg-muted/30 p-2 rounded">
                  Charly recommande cette alternative mieux alignée avec vos forces: {ao.suggestion.motif}
                </div>
                <Button 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground"
                  onClick={() => onViewAlternative?.(ao.suggestion.id)}
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Voir cette alternative
                </Button>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Actions - Maintenues pour cohérence */}
        {!isExpanded && (
          <div className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full bg-card hover:bg-muted/50 border-border text-muted-foreground"
              disabled
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Ouvrir l'AO (non recommandé)
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};