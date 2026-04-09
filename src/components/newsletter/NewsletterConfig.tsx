import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { NewsletterSubscription } from './NewsletterSubscription';
import { Settings, Mail, Zap } from 'lucide-react';

export const NewsletterConfig = () => {
  const [zapierWebhook, setZapierWebhook] = useState(
    localStorage.getItem('newsletter_zapier_webhook') || ''
  );
  const [testEmail, setTestEmail] = useState('');
  const [isTestingWebhook, setIsTestingWebhook] = useState(false);
  const { toast } = useToast();

  const handleSaveConfig = () => {
    localStorage.setItem('newsletter_zapier_webhook', zapierWebhook);
    toast({
      title: "Configuration sauvegardée",
      description: "Votre webhook Zapier a été configuré avec succès.",
    });
  };

  const handleTestWebhook = async () => {
    if (!zapierWebhook) {
      toast({
        title: "Erreur",
        description: "Veuillez configurer un webhook Zapier d'abord.",
        variant: "destructive",
      });
      return;
    }

    if (!testEmail) {
      toast({
        title: "Erreur",
        description: "Veuillez saisir un email de test.",
        variant: "destructive",
      });
      return;
    }

    setIsTestingWebhook(true);

    try {
      await fetch(zapierWebhook, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          type: "newsletter_test",
          timestamp: new Date().toISOString(),
          firstName: "Test",
          lastName: "User",
          email: testEmail,
          company: "Test Company",
          sector: "Test",
          source: "eligibly.ai - test"
        }),
      });

      toast({
        title: "Test envoyé",
        description: "Vérifiez votre Zap Zapier pour confirmer la réception.",
      });
    } catch (error) {
      console.error('Error testing webhook:', error);
      toast({
        title: "Erreur",
        description: "Erreur lors du test du webhook.",
        variant: "destructive",
      });
    } finally {
      setIsTestingWebhook(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <Badge variant="outline" className="text-primary border-primary">
          <Settings className="w-4 h-4 mr-2" />
          Configuration Newsletter
        </Badge>
        <h1 className="text-3xl font-bold">
          Automatisation des emails de remerciement
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Configurez Zapier pour envoyer automatiquement des emails de remerciement 
          aux nouveaux abonnés newsletter et aux demandes de contact.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Configuration Zapier
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="webhook">URL du webhook Zapier</Label>
              <Input
                id="webhook"
                type="url"
                placeholder="https://hooks.zapier.com/hooks/catch/..."
                value={zapierWebhook}
                onChange={(e) => setZapierWebhook(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Créez un Zap avec un trigger "Webhook" et connectez-le à Gmail/Outlook pour envoyer des emails.
              </p>
            </div>

            <Button onClick={handleSaveConfig} className="w-full">
              Sauvegarder la configuration
            </Button>

            <div className="border-t pt-4">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Test du webhook
              </h4>
              <div className="space-y-3">
                <Input
                  type="email"
                  placeholder="email@test.com"
                  value={testEmail}
                  onChange={(e) => setTestEmail(e.target.value)}
                />
                <Button 
                  onClick={handleTestWebhook} 
                  disabled={isTestingWebhook}
                  variant="outline"
                  className="w-full"
                >
                  {isTestingWebhook ? 'Test en cours...' : 'Tester le webhook'}
                </Button>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">💡 Comment configurer :</h4>
              <ol className="text-sm text-blue-800 space-y-1">
                <li>1. Créez un nouveau Zap sur Zapier</li>
                <li>2. Trigger : "Webhook by Zapier" → "Catch Hook"</li>
                <li>3. Action : "Gmail" ou "Outlook" → "Send Email"</li>
                <li>4. Personnalisez votre email de remerciement</li>
                <li>5. Copiez l'URL du webhook ici</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        {/* Aperçu du formulaire */}
        <Card>
          <CardHeader>
            <CardTitle>Aperçu du formulaire newsletter</CardTitle>
          </CardHeader>
          <CardContent>
            <NewsletterSubscription zapierWebhook={zapierWebhook} />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Données reçues par Zapier</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-secondary p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Format des données envoyées :</h4>
            <pre className="text-sm text-foreground overflow-auto">
{`{
  "type": "newsletter_subscription" | "contact_form",
  "timestamp": "2024-01-01T12:00:00Z",
  "firstName": "Jean",
  "lastName": "Dupont", 
  "email": "jean@exemple.com",
  "company": "Entreprise",
  "sector": "Technologie",
  "source": "eligibly.ai"
}`}
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};