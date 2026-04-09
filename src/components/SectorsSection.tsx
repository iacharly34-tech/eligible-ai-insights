import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Laptop, Stethoscope, Hammer, Users, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const SectorsSection = () => {
  const { t } = useLanguage();
  
  const sectors = [
    {
      icon: Hammer,
      name: "BTP & Construction",
      description: "Marchés de travaux, rénovation, infrastructure",
      color: "bg-orange-500"
    },
    {
      icon: Laptop,
      name: "Numérique & IT",
      description: "Prestations informatiques, développement, maintenance",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      name: "Conseil & Services",
      description: "Audit, formation, accompagnement",
      color: "bg-success/100"
    },
    {
      icon: Stethoscope,
      name: "Santé & Social",
      description: "Équipements médicaux, services à la personne",
      color: "bg-red-500"
    },
    {
      icon: Building2,
      name: "Industrie",
      description: "Fournitures, équipements industriels",
      color: "bg-purple-500"
    },
    {
      icon: Globe,
      name: "Environnement",
      description: "Développement durable, énergie verte",
      color: "bg-teal-500"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 space-y-4">
          <Badge variant="outline" className="text-primary border-primary">
            Secteurs d'activité
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Adapté à votre{" "}
            <span className="text-primary">secteur d'activité</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Que vous soyez une entreprise du bâtiment, un cabinet de conseil ou un acteur du numérique, 
            Eligibly s'adapte à vos enjeux spécifiques et vous aide à identifier les opportunités 
            les plus pertinentes pour votre activité.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {sectors.map((sector, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 border bg-card"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${sector.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <sector.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-sm sm:text-base group-hover:text-primary transition-colors mb-1 sm:mb-2">
                      {sector.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {sector.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-2xl p-6 sm:p-8 shadow-card max-w-4xl mx-auto">
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
            Votre secteur n'apparaît pas dans la liste ?
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
            Notre IA s'adapte à tous les secteurs d'activité. Découvrez comment Eligibly 
            peut transformer votre recherche d'opportunités, quel que soit votre domaine.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Badge variant="secondary" className="text-xs sm:text-sm px-3 py-1">
              +50 secteurs couverts
            </Badge>
            <Badge variant="secondary" className="text-xs sm:text-sm px-3 py-1">
              Personnalisation IA
            </Badge>
            <Badge variant="secondary" className="text-xs sm:text-sm px-3 py-1">
              Support dédié
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};