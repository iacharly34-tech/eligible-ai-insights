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
      <CardContent className="p-6">
        {/* Header avec score */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge 
                variant={ao.statut === "publié" ? "default" : "secondary"}
                className="text-xs"
              >
                {ao.statut}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {ao.source}
              </Badge>
            </div>
            <h4 className="font-bold text-gray-800 mb-2 text-lg leading-tight">
              {ao.title}
            </h4>
          </div>
          <div className="text-right ml-4">
            <div className="text-4xl font-bold text-green-600">{ao.score}%</div>
            <div className="text-sm text-gray-600">Score Charly</div>
          </div>
        </div>

        {/* Informations essentielles */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center gap-2">
            <Euro className="w-4 h-4 text-gray-500" />
            <div>
              <span className="font-medium">Budget:</span> {ao.budget}
              {isDetailed && (
                <div className="text-xs text-gray-600">
                  Estimation Charly: {ao.estimationInterne}
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <div>
              <span className="font-medium">Deadline:</span> {ao.deadline}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-gray-500" />
            <div>
              <span className="font-medium">Durée:</span> {ao.duree}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-gray-500" />
            <div>
              <span className="font-medium">Titulaire:</span> {ao.titulaire}
            </div>
          </div>
        </div>

        {/* Critères de notation */}
        <div className="mb-4">
          <div className="text-sm font-medium mb-2">Critères de l'acheteur</div>
          <div className="w-full bg-gray-200 rounded-full h-3 relative">
            <div className="bg-red-500 h-3 rounded-l-full absolute" style={{width: `${ao.criteres.prix}%`}}></div>
            <div className="bg-green-500 h-3 absolute" style={{width: `${ao.criteres.qualite}%`, left: `${ao.criteres.prix}%`}}></div>
            <div className="bg-blue-500 h-3 rounded-r-full absolute" style={{width: `${ao.criteres.performance}%`, left: `${ao.criteres.prix + ao.criteres.qualite}%`}}></div>
          </div>
          <div className="flex justify-between text-xs mt-1">
            <span>Prix: {ao.criteres.prix}%</span>
            <span>Qualité: {ao.criteres.qualite}%</span>
            <span>Performance: {ao.criteres.performance}%</span>
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

        {/* Analyse de compatibilité */}
        <div className="space-y-1 text-sm mb-4">
          <div className="text-blue-600 font-medium mb-2">📋 Analyse Charly - Compatibilité</div>
          <div className="text-green-600">{ao.compatibilite.ca}</div>
          <div className="text-green-600">{ao.compatibilite.secteur}</div>
          <div className="text-green-600">{ao.compatibilite.references}</div>
          <div className="text-green-600">{ao.compatibilite.environnement}</div>
          <div className="text-green-600">{ao.compatibilite.usages}</div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          {/* CTA Principal - Postuler avec Eligibly */}
          <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white flex items-center gap-2">
            <Rocket className="w-4 h-4" />
            Postuler à cet appel d'offre avec Eligibly
          </Button>
          
          {/* Actions secondaires */}
          <div className="flex gap-2">
            {ao.dceDisponible && (
              <Button variant="outline" size="sm" className="flex-1 flex items-center gap-2">
                <Download className="w-4 h-4" />
                Télécharger DCE
              </Button>
            )}
            <Button variant="outline" size="sm" className="flex-1 flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Voir l'AO officiel
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};