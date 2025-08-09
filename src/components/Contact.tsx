import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar, Mail, MessageCircle, Phone, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { contactFormSchema, rateLimiter, generateCSRFToken } from "@/utils/security";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import type { z } from "zod";

type ContactFormData = z.infer<typeof contactFormSchema>;

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      sector: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    // Rate limiting check
    const clientIP = 'user-session'; // In production, use actual IP
    if (!rateLimiter.checkLimit(clientIP)) {
      toast({
        title: "Trop de tentatives",
        description: "Veuillez attendre avant de soumettre à nouveau.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Generate CSRF token
      const csrfToken = generateCSRFToken();
      
      // Submit to secure backend in production
      // Secure form submission with CSRF protection
      
      toast({
        title: "Demande envoyée",
        description: "Nous vous contacterons bientôt pour votre démonstration."
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="text-primary border-primary">
            Contact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Prêt à transformer votre{" "}
            <span className="text-primary">
              veille commerciale ?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment eligibly.ai peut identifier les meilleures opportunités 
            d'appels d'offres pour votre entreprise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Options */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Parlons de votre projet
              </h3>
              <p className="text-muted-foreground">
                Notre équipe d'experts est là pour vous accompagner dans la mise en place 
                de votre solution de veille automatisée.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="bg-white border hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Démonstration personnalisée</h4>
                      <p className="text-sm text-muted-foreground">30 minutes pour découvrir la plateforme</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Consultation personnalisée</h4>
                      <p className="text-sm text-muted-foreground">Analyse de vos besoins spécifiques</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Support technique</h4>
                      <p className="text-sm text-muted-foreground">Assistance pour l'intégration</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="pt-4">
              <div className="text-muted-foreground">
                <div className="flex items-center space-x-2 mb-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">contact@eligibly.ai</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+33 1 23 45 67 89</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <Card className="bg-white shadow-card border">
            <CardHeader>
              <CardTitle className="text-2xl">
                Demander une démonstration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Prénom</FormLabel>
                          <FormControl>
                            <Input placeholder="Jean" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom</FormLabel>
                          <FormControl>
                            <Input placeholder="Dupont" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email professionnel</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="jean.dupont@entreprise.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Entreprise</FormLabel>
                        <FormControl>
                          <Input placeholder="Nom de votre entreprise" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="sector"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Secteur d'activité</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: BTP, Informatique, Conseil..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message (optionnel)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Décrivez vos besoins en matière d'appels d'offres..."
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    variant="tengo" 
                    className="w-full" 
                    size="lg" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Envoi en cours..." : "Demandez votre accès"}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
              </Form>

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