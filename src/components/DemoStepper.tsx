import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Upload, 
  Link, 
  CheckCircle, 
  Brain, 
  ArrowRight,
  Calendar,
  FileText
} from 'lucide-react';

interface DemoStepperProps {
  onComplete?: (data: any) => void;
}

export const DemoStepper: React.FC<DemoStepperProps> = ({ onComplete }) => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({
    sector: '',
    country: '',
    source: '',
    sourceType: 'url'
  });
  const [result, setResult] = useState<any>(null);

  const steps = [
    {
      title: "Votre contexte",
      subtitle: "Sélectionnez votre secteur et votre pays",
      help: "Pas sûr ? Utilisez nos données d'exemple"
    },
    {
      title: "Vos données", 
      subtitle: "Collez un lien d'appel d'offres ou importez un PDF",
      help: "Taille max 10 Mo, PDF ou URL publique"
    },
    {
      title: "Analyse",
      subtitle: "Analyse en cours...",
      help: "Notre IA examine votre opportunité"
    },
    {
      title: "Résultat",
      subtitle: "Votre estimation de succès",
      help: "Ouvrez les détails pour voir les recommandations"
    }
  ];

  const analysisSteps = [
    "Extraction des critères",
    "Évaluation de la pertinence", 
    "Estimation de la valeur"
  ];

  const handleNext = async () => {
    if (currentStep === 1 && formData.source) {
      setCurrentStep(2);
      setIsAnalyzing(true);
      setProgress(0);

      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setIsAnalyzing(false);
            setResult({
              score: 87,
              opportunities: 3,
              value: "2.3M€"
            });
            setCurrentStep(3);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 800);
    } else if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleUseExample = () => {
    setFormData({
      sector: 'tech',
      country: 'france',
      source: 'https://example.com/appel-offres-plateforme-digitale',
      sourceType: 'url'
    });
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.sector && formData.country;
      case 1:
        return formData.source;
      default:
        return true;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="stepper mb-6">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`dot ${index <= currentStep ? 'active' : ''}`}
          />
        ))}
      </div>

      <Card className="demo-step">
        <CardContent className="p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-1">
              {steps[currentStep].title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {steps[currentStep].subtitle}
            </p>
            {steps[currentStep].help && (
              <p className="text-xs text-muted-foreground mt-1">
                💡 {steps[currentStep].help}
              </p>
            )}
          </div>

          {currentStep === 0 && (
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium">Secteur d'activité</Label>
                <Select 
                  value={formData.sector} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, sector: value }))}
                >
                  <SelectTrigger className="demo-input">
                    <SelectValue placeholder="Sélectionnez votre secteur" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Technologies & Innovation</SelectItem>
                    <SelectItem value="btp">BTP & Construction</SelectItem>
                    <SelectItem value="services">Services aux entreprises</SelectItem>
                    <SelectItem value="sante">Santé & Social</SelectItem>
                    <SelectItem value="energie">Énergie & Environnement</SelectItem>
                    <SelectItem value="transport">Transport & Logistique</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium">Pays</Label>
                <Select 
                  value={formData.country} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, country: value }))}
                >
                  <SelectTrigger className="demo-input">
                    <SelectValue placeholder="Sélectionnez votre pays" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="france">France</SelectItem>
                    <SelectItem value="belgique">Belgique</SelectItem>
                    <SelectItem value="suisse">Suisse</SelectItem>
                    <SelectItem value="luxembourg">Luxembourg</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                variant="outline" 
                onClick={handleUseExample}
                className="w-full"
              >
                👋 Voir une démo avec un exemple
              </Button>
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <Button
                  variant={formData.sourceType === 'url' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFormData(prev => ({ ...prev, sourceType: 'url', source: '' }))}
                >
                  <Link className="w-4 h-4 mr-2" />
                  URL
                </Button>
                <Button
                  variant={formData.sourceType === 'file' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFormData(prev => ({ ...prev, sourceType: 'file', source: '' }))}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  PDF
                </Button>
              </div>

              {formData.sourceType === 'url' ? (
                <div>
                  <Label className="text-sm font-medium">URL de l'appel d'offres</Label>
                  <Input
                    className="demo-input"
                    placeholder="https://exemple.com/appel-offres"
                    value={formData.source}
                    onChange={(e) => setFormData(prev => ({ ...prev, source: e.target.value }))}
                  />
                </div>
              ) : (
                <div>
                  <Label className="text-sm font-medium">Fichier PDF</Label>
                  <div className="border-2 border-dashed border-border rounded-xl p-6 text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Glissez votre PDF ici ou cliquez pour sélectionner
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Taille max: 10 Mo
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {currentStep === 2 && (
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Brain className="w-8 h-8 text-primary animate-pulse" />
                </div>
              </div>
              
              <div className="demo-progress">
                <span style={{ width: `${progress}%` }} />
              </div>
              
              <div className="space-y-2">
                {analysisSteps.map((step, index) => (
                  <div key={index} className="flex items-center justify-center gap-2 text-sm">
                    {progress > (index + 1) * 33 ? (
                      <CheckCircle className="w-4 h-4 text-success" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border-2 border-muted" />
                    )}
                    <span className={progress > (index + 1) * 33 ? 'text-foreground' : 'text-muted-foreground'}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep === 3 && result && (
            <div className="space-y-4">
              <div className="result-card">
                <div className="result-metric bg-success/10">
                  <div className="text-2xl font-bold text-success">{result.score}%</div>
                  <div className="text-xs text-success">Score de pertinence</div>
                </div>
                <div className="result-metric bg-blue-50">
                  <div className="text-2xl font-bold text-blue-600">{result.opportunities}</div>
                  <div className="text-xs text-primary">Opportunités détectées</div>
                </div>
                <div className="result-metric bg-purple-50">
                  <div className="text-2xl font-bold text-purple-600">{result.value}</div>
                  <div className="text-xs text-purple-700">Valeur estimée</div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Button variant="tengo" className="cta-button">
                  <FileText className="w-4 h-4 mr-2" />
                  Voir le détail
                </Button>
                <Button variant="outline" className="cta-button">
                  <Calendar className="w-4 h-4 mr-2" />
                  Demander une démo complète
                </Button>
              </div>
            </div>
          )}

          {currentStep < 2 && (
            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
              >
                Précédent
              </Button>
              <Button
                onClick={handleNext}
                disabled={!isStepValid()}
                className="cta-button"
              >
                {currentStep === 1 ? 'Analyser maintenant' : 'Suivant'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {currentStep < 3 && (
        <div className="text-center mt-4">
          <Badge variant="outline" className="text-xs">
            ⏱ &lt; 2 min • Étape {currentStep + 1} sur {steps.length}
          </Badge>
        </div>
      )}
    </div>
  );
};