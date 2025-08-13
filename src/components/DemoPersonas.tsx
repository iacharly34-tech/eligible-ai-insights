import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ProcessDemo } from "./ProcessDemo";
import { AOParams } from "./AOParams";
import { 
  UserCheck, 
  Target, 
  TrendingUp, 
  BookOpen,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Persona {
  id: string;
  title: string;
  icon: any;
  description: string;
  benefits: string[];
  actions: string[];
}

const personas: Persona[] = [
  {
    id: "acheteur",
    title: "",
    icon: UserCheck,
    description: "",
    benefits: [],
    actions: []
  },
  {
    id: "chef-projet",
    title: "",
    icon: Target,
    description: "",
    benefits: [],
    actions: []
  },
  {
    id: "commercial",
    title: "",
    icon: TrendingUp,
    description: "",
    benefits: [],
    actions: []
  },
  {
    id: "consultant",
    title: "",
    icon: BookOpen,
    description: "",
    benefits: [],
    actions: []
  }
];

export const DemoPersonas = () => {
  const { t } = useLanguage();
  const [selectedPersona, setSelectedPersona] = useState<string>("acheteur");

  const i18nPersonas: Persona[] = [
    {
      id: "acheteur",
      title: t('product.demo.persona.acheteur.title'),
      icon: UserCheck,
      description: t('product.demo.persona.acheteur.desc'),
      benefits: [t('product.demo.persona.acheteur.b1'), t('product.demo.persona.acheteur.b2'), t('product.demo.persona.acheteur.b3')],
      actions: [t('product.demo.persona.acheteur.a1'), t('product.demo.persona.acheteur.a2'), t('product.demo.persona.acheteur.a3')]
    },
    {
      id: "chef-projet",
      title: t('product.demo.persona.chef.title'),
      icon: Target,
      description: t('product.demo.persona.chef.desc'),
      benefits: [t('product.demo.persona.chef.b1'), t('product.demo.persona.chef.b2'), t('product.demo.persona.chef.b3')],
      actions: [t('product.demo.persona.chef.a1'), t('product.demo.persona.chef.a2'), t('product.demo.persona.chef.a3')]
    },
    {
      id: "commercial",
      title: t('product.demo.persona.commercial.title'),
      icon: TrendingUp,
      description: t('product.demo.persona.commercial.desc'),
      benefits: [t('product.demo.persona.commercial.b1'), t('product.demo.persona.commercial.b2'), t('product.demo.persona.commercial.b3')],
      actions: [t('product.demo.persona.commercial.a1'), t('product.demo.persona.commercial.a2'), t('product.demo.persona.commercial.a3')]
    },
    {
      id: "consultant",
      title: t('product.demo.persona.consultant.title'),
      icon: BookOpen,
      description: t('product.demo.persona.consultant.desc'),
      benefits: [t('product.demo.persona.consultant.b1'), t('product.demo.persona.consultant.b2'), t('product.demo.persona.consultant.b3')],
      actions: [t('product.demo.persona.consultant.a1'), t('product.demo.persona.consultant.a2'), t('product.demo.persona.consultant.a3')]
    }
  ];

  const selectedPersonaData = i18nPersonas.find(p => p.id === selectedPersona) || i18nPersonas[0];
  const IconComponent = selectedPersonaData.icon;

  // Mobile and desktop share the same unified demo layout.

  return (
    <section 
      id="demo" 
      className="py-10 px-4 bg-gradient-subtle"
    >
      <div className="container mx-auto max-w-7xl w-full">
        {/* Header Section */}
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 font-medium">
            {t('product.demo.badge')}
          </Badge>
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            {t('product.demo.title')}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            {t('product.demo.subtitle')}
          </p>
        </div>

        {/* Persona Navigation */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {i18nPersonas.map((persona) => {
              const PersonaIcon = persona.icon;
              const isSelected = selectedPersona === persona.id;
              
              return (
                <button
                  key={persona.id}
                  onClick={() => setSelectedPersona(persona.id)}
                  className={`group p-5 rounded-xl border-2 text-left transition-all duration-300 transform hover:scale-105 ${
                    isSelected 
                      ? 'border-primary bg-gradient-to-br from-primary/5 to-primary/10 shadow-glow' 
                      : 'border-border bg-card hover:border-primary/30 hover:bg-primary/5'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isSelected ? 'bg-primary text-white' : 'bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary'
                    }`}>
                      <PersonaIcon className="w-6 h-6" />
                    </div>
                    {isSelected && (
                      <CheckCircle className="w-5 h-5 text-primary animate-scale-in" />
                    )}
                  </div>
                  <h3 className={`font-semibold text-sm leading-tight transition-colors duration-300 ${
                    isSelected ? 'text-primary' : 'text-foreground group-hover:text-primary'
                  }`}>
                    {persona.title}
                  </h3>
                </button>
              );
            })}
          </div>
        </div>

        {/* Full-width Integrated Demo Section - Optimized Layout */}
        <div className="mb-12">
          <Card className="border-border shadow-luxury bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              
              {/* Paramétrage des AO ciblés au niveau produit uniquement */}
              <div className="mb-8">
                <AOParams />
              </div>
              
              {/* Persona Content Blocks - Horizontal Above Demo */}
              <div className="mb-8">
                <div className="grid lg:grid-cols-3 gap-4 max-w-full mx-auto">
                  {/* Persona Description */}
                  <Card className="border-border shadow-card bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-foreground text-sm leading-tight line-clamp-2">{selectedPersonaData.title}</h3>
                          <Badge variant="outline" className="mt-1 text-xs border-primary/30 text-primary">{t('product.demo.profileSelected')}</Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
                        {selectedPersonaData.description}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Benefits Block */}
                  <Card className="border-success/30 shadow-card bg-gradient-to-br from-success/5 to-success/10">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        {t('product.demo.benefits')}
                      </h4>
                      <ul className="space-y-2">
                        {selectedPersonaData.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-success rounded-full mt-1.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-xs leading-relaxed line-clamp-2">{benefit}</span>
                          </li>
                        ))}
                        {selectedPersonaData.benefits.length > 3 && (
                          <li className="text-success text-xs font-medium">+{selectedPersonaData.benefits.length - 3} autres bénéfices</li>
                        )}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Actions Block */}
                  <Card className="border-primary/30 shadow-card bg-gradient-to-br from-primary/5 to-primary/10">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4 text-primary" />
                        {t('product.demo.actions')}
                      </h4>
                      <ul className="space-y-2">
                        {selectedPersonaData.actions.map((action, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <ArrowRight className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground text-xs leading-relaxed line-clamp-2">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Demo Content - Full Width and Optimized Height */}
              <div className="bg-gradient-to-br from-muted/10 to-muted/20 rounded-xl p-0 sm:p-6">
                <ProcessDemo />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Global CTA */}
        <div className="text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white shadow-luxury max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              {t('product.demo.cta.title')}
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              {t('product.demo.cta.subtitle')}
            </p>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:shadow-glow font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 text-lg"
            >
              {t('product.demo.cta.button')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};