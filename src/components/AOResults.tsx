import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AOCard } from "./AOCard";
import { 
  CheckCircle, 
  Filter, 
  Search,
  TrendingUp,
  Eye
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const mockAOData = [
  {
    id: "ao-001",
    title: "Fourniture de matériel informatique pour établissements scolaires",
    score: 94,
    budget: "150K€",
    estimationInterne: "145K€ ±5%",
    deadline: "15/02/2025",
    duree: "24 mois",
    titulaire: "À déterminer",
    statut: "publié" as const,
    source: "BOAMP",
    criteres: { prix: 30, qualite: 60, performance: 10 },
    penalites: "Oui - 0.5% par jour de retard",
    acheteur: {
      nom: "Rectorat de l'Académie de Lyon",
      contact: "marches@ac-lyon.fr",
      responsable: "Marie Dubois - Responsable achats",
      criteresSpecifiques: ["ISO14001", "Label origine France", "Support 24h/7j"]
    },
    compatibilite: {
      ca: "✅ Marché adapté (150K€ compatible avec votre CA 5M€)",
      secteur: "✅ Secteur IT - 100% compatible",
      references: "✅ Expérience requise en éducation (✓ dans vos références)",
      environnement: "✅ Critère environnemental - ISO14001 requis (✓ certifié)",
      usages: "✅ Solutions Cloud/SaaS demandées (✓ votre expertise)"
    },
    dceDisponible: true,
    lienOfficiel: "https://www.boamp.fr/avis/detail/25-12345"
  },
  {
    id: "ao-002",
    title: "Développement d'une plateforme e-learning",
    score: 89,
    budget: "320K€",
    estimationInterne: "285K€ ±8%",
    deadline: "28/02/2025",
    duree: "36 mois",
    titulaire: "À déterminer",
    statut: "publié" as const,
    source: "PLACE",
    criteres: { prix: 25, qualite: 65, performance: 10 },
    penalites: "Oui - 1% par jour de retard (max 10%)",
    acheteur: {
      nom: "Université de Bordeaux",
      contact: "dsi@u-bordeaux.fr",
      responsable: "Jean Martin - DSI",
      criteresSpecifiques: ["RGPD", "Accessibilité WCAG", "Hébergement France"]
    },
    compatibilite: {
      ca: "✅ Marché important (320K€ excellent pour votre développement)",
      secteur: "✅ Développement web - expertise parfaite",
      references: "✅ Portfolio universitaire solide (✓ 3 projets similaires)",
      environnement: "✅ Eco-conception demandée (✓ votre spécialité)",
      usages: "✅ Stack React/Node.js requise (✓ votre technologie)"
    },
    dceDisponible: true,
    lienOfficiel: "https://www.marches-publics.gouv.fr/avis/detail/25-67890"
  },
  {
    id: "ao-003",
    title: "Migration infrastructure cloud",
    score: 82,
    budget: "85K€",
    estimationInterne: "92K€ ±6%",
    deadline: "20/03/2025",
    duree: "12 mois",
    titulaire: "À déterminer",
    statut: "à venir" as const,
    source: "AWS DUME",
    criteres: { prix: 40, qualite: 50, performance: 10 },
    penalites: "Non mentionnées",
    acheteur: {
      nom: "Mairie de Lille",
      contact: "informatique@mairie-lille.fr",
      criteresSpecifiques: ["Certification Azure", "Sécurité renforcée", "Formation incluse"]
    },
    compatibilite: {
      ca: "✅ Marché adapté pour compléter votre planning",
      secteur: "⚠️ Infrastructure - partiellement compatible",
      references: "✅ Références publiques (✓ 2 mairies)",
      environnement: "✅ Pas de contrainte environnementale spécifique",
      usages: "✅ Migration Azure (✓ certification équipe)"
    },
    dceDisponible: false,
    lienOfficiel: "https://www.aws.amazon.com/marketplace/pp/B01234567"
  }
];

interface AOResultsProps {
  isExpanded?: boolean;
  onToggleExpand?: () => void;
  startIndex?: number;
  forceDetailed?: boolean;
  hideHeader?: boolean;
}

export const AOResults = ({ isExpanded = false, onToggleExpand, startIndex = 0, forceDetailed = false, hideHeader = false }: AOResultsProps) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [showDetailed, setShowDetailed] = useState(false);
  const { t } = useLanguage();

  const displayedAOs = isExpanded ? mockAOData.slice(startIndex) : mockAOData.slice(startIndex, startIndex + 1);

  return (
    <div className="space-y-6">
      {/* Header avec statistiques */}
      {!hideHeader && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <div>
              <h3 className="font-bold text-gray-800 text-lg">{t('ao.results.title')}</h3>
              <p className="text-sm text-gray-600">
                {mockAOData.length} {t('ao.results.found')} • {t('ao.results.avgScore')}: 88%
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge className="bg-green-600 text-white">
              {mockAOData.filter(ao => ao.score >= 90).length} {t('ao.results.excellent')}
            </Badge>
            <Badge variant="outline">
              {mockAOData.filter(ao => ao.score >= 80 && ao.score < 90).length} {t('ao.results.good')}
            </Badge>
          </div>
        </div>
      )}

      {/* Filtres et options d'affichage */}
      {isExpanded && (
        <Card className="border border-gray-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  {t('ao.results.filters')}
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  {t('ao.results.search')}
                </Button>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant={showDetailed ? "default" : "outline"}
                  size="sm"
                  onClick={() => setShowDetailed(!showDetailed)}
                  className="flex items-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  {t('ao.results.detailedView')}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Liste des AO */}
      <div className="space-y-4">
        {displayedAOs.map((ao) => (
          <AOCard 
            key={ao.id} 
            ao={ao} 
            isDetailed={forceDetailed || (showDetailed && isExpanded)}
          />
        ))}
      </div>

      {/* Bouton d'expansion */}
      {!isExpanded && onToggleExpand && (
        <div className="text-center">
            <Button 
              onClick={onToggleExpand}
              className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2 mx-auto"
            >
              <TrendingUp className="w-4 h-4" />
              {t('ao.results.viewAll')} ({mockAOData.length})
            </Button>
        </div>
      )}

      {/* Statistiques détaillées en mode étendu */}
      {isExpanded && (
        <Card className="border border-gray-200 bg-gradient-to-r from-purple-50 to-blue-50">
          <CardContent className="p-6">
            <h4 className="font-bold text-gray-800 mb-4">📊 {t('ao.results.fullAnalysis')}</h4>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-600">
                  {mockAOData.reduce((sum, ao) => sum + parseInt(ao.budget.replace(/[^\d]/g, '')), 0) / 1000}K€
                </div>
                <div className="text-sm text-gray-600">{t('ao.results.totalBudget')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {Math.round(mockAOData.reduce((sum, ao) => sum + ao.score, 0) / mockAOData.length)}%
                </div>
                <div className="text-sm text-gray-600">{t('ao.results.avgCompatibility')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {mockAOData.filter(ao => ao.statut === "publié").length}
                </div>
                <div className="text-sm text-gray-600">{t('ao.results.publishedCount')}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};