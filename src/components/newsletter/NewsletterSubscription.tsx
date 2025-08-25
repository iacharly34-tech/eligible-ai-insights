import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';

interface SubscriptionFormData {
  email: string;
  firstName: string;
  lastName: string;
  company?: string;
  sector?: string;
}

const sectors = [
  'Public',
  'Privé', 
  'Association',
  'Santé',
  'Éducation',
  'Technologie',
  'Finance',
  'Industrie',
  'Services',
  'Autre'
];

export const NewsletterSubscription = () => {
  const [formData, setFormData] = useState<SubscriptionFormData>({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    sector: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof SubscriptionFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([
          {
            email: formData.email,
            first_name: formData.firstName,
            last_name: formData.lastName,
            company: formData.company,
            sector: formData.sector,
            source: 'website_subscription',
            status: 'active'
          }
        ]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Déjà abonné",
            description: "Cette adresse email est déjà inscrite à notre newsletter.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "🎉 Merci ! Vous êtes inscrit.",
          description: "Votre première analyse arrive bientôt dans votre boîte mail.",
        });
        
        // Reset form
        setFormData({
          email: '',
          firstName: '',
          lastName: '',
          company: '',
          sector: ''
        });
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'inscription. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto border-0 shadow-lg">
      <CardHeader className="text-center space-y-4">
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-foreground">
            📩 Recevez chaque semaine nos analyses exclusives
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            pour anticiper les appels d'offres et détecter les meilleures opportunités.
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="firstName">Prénom *</Label>
              <Input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Nom *</Label>
              <Input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email professionnel *</Label>
            <Input
              id="email"
              type="email"
              placeholder="ex : julie@startup.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Entreprise</Label>
            <Input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="sector">Secteur</Label>
            <Select onValueChange={(value) => handleInputChange('sector', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez votre secteur" />
              </SelectTrigger>
              <SelectContent>
                {sectors.map((sector) => (
                  <SelectItem key={sector} value={sector}>
                    {sector}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="text-center space-y-3">
            <p className="text-xs text-muted-foreground">
              Zéro spam. Désinscription en un clic.
            </p>
            <Button 
              type="submit" 
              className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Inscription...' : "🚀 Recevoir mes analyses"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};