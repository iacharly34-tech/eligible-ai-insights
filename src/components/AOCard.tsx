import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  Calendar, 
  Euro, 
  FileText, 
  MapPin, 
  Trophy,
  ExternalLink,
  Download,
  Rocket,
  Star,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

interface AOData {
  id: string;
  title: string;
  score: number;
  budget: string;
  estimationInterne: string;
  deadline: string;
  duree: string;
  titulaire: string;
  statut: "publié" | "à venir";
  source: string;
  criteres: {
    prix: number;
    qualite: number;
    performance: number;
  };
  penalites: string;
  acheteur: {
    nom: string;
    contact: string;
    responsable?: string;
    criteresSpecifiques: string[];
  };
  compatibilite: {
    ca: string;
    secteur: string;
    references: string;
    environnement: string;
    usages: string;
  };
  dceDisponible: boolean;
  lienOfficiel: string;
}

interface AOCardProps {
  ao: AOData;
  isDetailed?: boolean;
}

export const AOCard = ({ ao, isDetailed = false }: AOCardProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-warning";
    return "text-destructive";
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <Star className="w-4 h-4 fill-current" />;
    if (score >= 60) return <AlertCircle className="w-4 h-4" />;
    return <AlertCircle className="w-4 h-4" />;
  };

  return (
    <Card className="border border-border hover:shadow-card transition-all duration-300 hover:scale-[1.02] bg-card">
      <CardContent className="p-4">
        {/* Titre principal mis en valeur */}
        <div className="mb-3">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-foreground leading-tight mb-2 line-clamp-2">
                {ao.title}
              </h3>
              <div className="flex items-center gap-2 flex-wrap">
                <Badge 
                  variant={ao.statut === "publié" ? "default" : "secondary"}
                  className="text-xs px-2 py-1 font-medium"
                >
                  {ao.statut}
                </Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 flex items-center gap-1">
                  <FileText className="w-3 h-3" />
                  {ao.source}
                </Badge>
              </div>
            </div>
            
            {/* Score avec icône et légende */}
            <div className="text-center bg-gradient-to-br from-muted/50 to-accent/10 rounded-lg p-3 min-w-[80px]">
              <div className={`flex items-center justify-center gap-1 mb-1 ${getScoreColor(ao.score)}`}>
                {getScoreIcon(ao.score)}
                <span className="text-2xl font-bold">{ao.score}%</span>
              </div>
              <div className="text-xs text-muted-foreground font-medium">
                Score de compatibilité IA
              </div>
            </div>
          </div>
        </div>

        {/* Critères acheteur - Remonté et mis en valeur */}
        <div className="mb-4 p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-border/50">
          <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-primary" />
            Critères d'évaluation
          </h4>
          <div className="grid grid-cols-3 gap-2 text-xs mb-2">
            <div className="text-center">
              <div className="font-bold text-destructive">{ao.criteres.prix}%</div>
              <div className="text-muted-foreground">Prix</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-success">{ao.criteres.qualite}%</div>
              <div className="text-muted-foreground">Qualité</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-accent">{ao.criteres.performance}%</div>
              <div className="text-muted-foreground">Performance</div>
            </div>
          </div>
          <div className="w-full bg-muted rounded-full h-2 relative overflow-hidden">
            <div className="bg-destructive h-2 rounded-l-full absolute transition-all" style={{width: `${ao.criteres.prix}%`}}></div>
            <div className="bg-success h-2 absolute transition-all" style={{width: `${ao.criteres.qualite}%`, left: `${ao.criteres.prix}%`}}></div>
            <div className="bg-accent h-2 rounded-r-full absolute transition-all" style={{width: `${ao.criteres.performance}%`, left: `${ao.criteres.prix + ao.criteres.qualite}%`}}></div>
          </div>
        </div>

        {/* Informations pratiques - Compactes et uniformisées */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2 p-2 bg-muted/30 rounded-md">
            <Euro className="w-4 h-4 text-primary flex-shrink-0" />
            <div className="text-sm min-w-0">
              <div className="text-xs text-muted-foreground">Budget</div>
              <div className="font-semibold text-foreground truncate">{ao.budget}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-2 bg-muted/30 rounded-md">
            <Calendar className="w-4 h-4 text-accent flex-shrink-0" />
            <div className="text-sm min-w-0">
              <div className="text-xs text-muted-foreground">Échéance</div>
              <div className="font-semibold text-foreground truncate">{ao.deadline}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-2 bg-muted/30 rounded-md">
            <Building2 className="w-4 h-4 text-success flex-shrink-0" />
            <div className="text-sm min-w-0">
              <div className="text-xs text-muted-foreground">Durée</div>
              <div className="font-semibold text-foreground truncate">{ao.duree}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-2 bg-muted/30 rounded-md">
            <Trophy className="w-4 h-4 text-warning flex-shrink-0" />
            <div className="text-sm min-w-0">
              <div className="text-xs text-muted-foreground">Titulaire</div>
              <div className="font-semibold text-foreground truncate">{ao.titulaire}</div>
            </div>
          </div>
        </div>


        {isDetailed && (
          <>
            {/* Informations sur l'acheteur */}
            <div className="mb-4 p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-4 h-4 text-blue-600" />
                <span className="font-medium text-blue-800">Acheteur public</span>
              </div>
              <div className="text-sm space-y-1">
                <div><span className="font-medium">Organisme:</span> {ao.acheteur.nom}</div>
                <div><span className="font-medium">Contact:</span> {ao.acheteur.contact}</div>
                {ao.acheteur.responsable && (
                  <div><span className="font-medium">Responsable:</span> {ao.acheteur.responsable}</div>
                )}
                <div className="mt-2">
                  <span className="font-medium">Critères spécifiques:</span>
                  <div className="mt-1">
                    {ao.acheteur.criteresSpecifiques.map((critere, index) => (
                      <Badge key={index} variant="outline" className="text-xs mr-1 mb-1">
                        {critere}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Pénalités */}
            <div className="mb-4 text-sm">
              <span className="font-medium">Pénalités:</span> 
              <span className="text-gray-600 ml-1">{ao.penalites}</span>
            </div>
          </>
        )}

        {/* Analyse de compatibilité - Toujours visible et claire */}
        <div className="mb-4 p-3 bg-gradient-to-r from-success/5 to-cyan-soft/5 rounded-lg border border-success/20">
          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-success" />
            Analyse de compatibilité
          </h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
              <span className="text-foreground">{ao.compatibilite.ca}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
              <span className="text-foreground">{ao.compatibilite.secteur}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
              <span className="text-foreground">{ao.compatibilite.references}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
              <span className="text-foreground">{ao.compatibilite.environnement}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
              <span className="text-foreground">{ao.compatibilite.usages}</span>
            </div>
          </div>
        </div>

        {/* Actions - Redesignées avec plus d'impact */}
        <div className="space-y-3">
          {/* CTA Principal - Plus visible */}
          <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold flex items-center justify-center gap-2 py-3 text-sm h-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <Rocket className="w-4 h-4" />
            Postuler avec Eligibly
          </Button>
          
          {/* Actions secondaires - Horizontales sur desktop */}
          <div className="grid grid-cols-2 gap-2">
            {ao.dceDisponible && (
              <Button variant="outline" className="flex items-center justify-center gap-2 py-2 text-sm border-border hover:bg-muted/50 transition-colors">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Télécharger</span> DCE
              </Button>
            )}
            <Button variant="outline" className="flex items-center justify-center gap-2 py-2 text-sm border-border hover:bg-muted/50 transition-colors">
              <ExternalLink className="w-4 h-4" />
              AO officiel
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};