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
  Rocket
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
  return (
    <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
      <CardContent className="p-3">
        {/* Header avec score - Ultra compact */}
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <div className="flex items-center gap-1 mb-1">
              <Badge 
                variant={ao.statut === "publié" ? "default" : "secondary"}
                className="text-xs px-1.5 py-0.5 h-4"
              >
                {ao.statut}
              </Badge>
              <Badge variant="outline" className="text-xs px-1.5 py-0.5 h-4">
                {ao.source}
              </Badge>
            </div>
            <h4 className="font-bold text-gray-800 text-sm leading-tight">
              {ao.title}
            </h4>
          </div>
          <div className="text-right ml-2">
            <div className="text-2xl font-bold text-green-600">{ao.score}%</div>
            <div className="text-xs text-gray-600">Score</div>
          </div>
        </div>

        {/* Informations essentielles - Ultra compact */}
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div className="flex items-center gap-1">
            <Euro className="w-3 h-3 text-gray-500" />
            <div className="text-xs">
              <span className="font-medium">{ao.budget}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-gray-500" />
            <div className="text-xs">
              <span className="font-medium">{ao.deadline}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            <Building2 className="w-3 h-3 text-gray-500" />
            <div className="text-xs">
              <span className="font-medium">{ao.duree}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            <Trophy className="w-3 h-3 text-gray-500" />
            <div className="text-xs">
              <span className="font-medium">{ao.titulaire}</span>
            </div>
          </div>
        </div>

        {/* Critères de notation - Ultra compact */}
        <div className="mb-2">
          <div className="flex justify-between items-center mb-1">
            <div className="text-xs font-medium">Critères</div>
            <div className="flex gap-2 text-xs">
              <span>Prix: {ao.criteres.prix}%</span>
              <span>Qualité: {ao.criteres.qualite}%</span>
              <span>Performance: {ao.criteres.performance}%</span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 relative">
            <div className="bg-red-500 h-1.5 rounded-l-full absolute" style={{width: `${ao.criteres.prix}%`}}></div>
            <div className="bg-green-500 h-1.5 absolute" style={{width: `${ao.criteres.qualite}%`, left: `${ao.criteres.prix}%`}}></div>
            <div className="bg-blue-500 h-1.5 rounded-r-full absolute" style={{width: `${ao.criteres.performance}%`, left: `${ao.criteres.prix + ao.criteres.qualite}%`}}></div>
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

        {/* Analyse de compatibilité - Ultra compact */}
        <div className="mb-2">
          <div className="text-xs font-medium text-blue-600 mb-1">📋 Compatibilité Charly</div>
          <div className="grid grid-cols-1 gap-0.5 text-xs">
            <div className="text-green-600">✓ {ao.compatibilite.ca}</div>
            <div className="text-green-600">✓ {ao.compatibilite.secteur}</div>
            <div className="text-green-600">✓ {ao.compatibilite.references}</div>
            <div className="text-green-600">✓ {ao.compatibilite.environnement}</div>
            <div className="text-green-600">✓ {ao.compatibilite.usages}</div>
          </div>
        </div>

        {/* Actions - Ultra compact */}
        <div className="space-y-1.5">
          {/* CTA Principal - Postuler avec Eligibly */}
          <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white flex items-center gap-1.5 py-1.5 text-xs h-8">
            <Rocket className="w-3 h-3" />
            Postuler avec Eligibly
          </Button>
          
          {/* Actions secondaires */}
          <div className="flex gap-1.5">
            {ao.dceDisponible && (
              <Button variant="outline" size="sm" className="flex-1 flex items-center gap-1 text-xs py-1 h-7">
                <Download className="w-3 h-3" />
                DCE
              </Button>
            )}
            <Button variant="outline" size="sm" className="flex-1 flex items-center gap-1 text-xs py-1 h-7">
              <ExternalLink className="w-3 h-3" />
              AO officiel
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};