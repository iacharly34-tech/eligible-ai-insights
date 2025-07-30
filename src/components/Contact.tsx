import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar, Mail, MessageCircle, Phone, ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="text-white border-white/20 bg-white/10">
            Contact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Prêt à transformer votre{" "}
            <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              veille commerciale ?
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Découvrez comment eligible.ai peut identifier les meilleures opportunités 
            d'appels d'offres pour votre entreprise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Options */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Parlons de votre projet
              </h3>
              <p className="text-blue-100">
                Notre équipe d'experts est là pour vous accompagner dans la mise en place 
                de votre solution de veille automatisée.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Démonstration personnalisée</h4>
                      <p className="text-sm text-blue-100">30 minutes pour découvrir la plateforme</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Consultation gratuite</h4>
                      <p className="text-sm text-blue-100">Analyse de vos besoins spécifiques</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Support technique</h4>
                      <p className="text-sm text-blue-100">Assistance pour l'intégration</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="pt-4">
              <div className="text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">contact@eligible.ai</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+33 1 23 45 67 89</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <Card className="bg-white/95 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl">
                Demander une démonstration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Prénom</label>
                  <Input placeholder="Jean" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nom</label>
                  <Input placeholder="Dupont" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email professionnel</label>
                <Input type="email" placeholder="jean.dupont@entreprise.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Entreprise</label>
                <Input placeholder="Nom de votre entreprise" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Secteur d'activité</label>
                <Input placeholder="Ex: BTP, Informatique, Conseil..." />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message (optionnel)</label>
                <Textarea 
                  placeholder="Décrivez vos besoins en matière d'appels d'offres..."
                  rows={4}
                />
              </div>

              <Button variant="hero" className="w-full" size="lg">
                Demander une démo
                <ArrowRight className="w-4 h-4" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe. 
                Aucun spam, promis ! 🤝
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};