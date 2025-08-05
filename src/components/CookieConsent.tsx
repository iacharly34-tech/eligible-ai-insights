import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X, Settings, Shield, BarChart3, Users } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { secureStorage } from '@/utils/security';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const COOKIE_CONSENT_KEY = 'cookie-consent-eligibly';
const COOKIE_PREFERENCES_KEY = 'cookie-preferences-eligibly';

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    const consent = secureStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Délai pour éviter le flash de contenu
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      const savedPrefs = secureStorage.getItem(COOKIE_PREFERENCES_KEY, preferences);
      setPreferences(savedPrefs);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    saveConsent(allAccepted);
  };

  const handleAcceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    saveConsent(necessaryOnly);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
    setShowSettings(false);
  };

  const saveConsent = (prefs: CookiePreferences) => {
    secureStorage.setItem(COOKIE_CONSENT_KEY, {
      timestamp: new Date().toISOString(),
      preferences: prefs,
    });
    secureStorage.setItem(COOKIE_PREFERENCES_KEY, prefs);
    setPreferences(prefs);
    setShowBanner(false);
    
    // Déclencher les scripts analytiques si acceptés
    if (prefs.analytics) {
      // Ici on pourrait initialiser Google Analytics, etc.
      console.log('Analytics cookies accepted');
    }
  };

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    if (key === 'necessary') return; // Les cookies nécessaires ne peuvent pas être désactivés
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Bannière de consentement */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t shadow-lg">
        <Card className="max-w-6xl mx-auto p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Gestion des cookies</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
                Certains cookies sont nécessaires au fonctionnement du site, d'autres nous aident 
                à analyser le trafic et à personnaliser le contenu.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Conforme au RGPD - Vous pouvez modifier vos préférences à tout moment.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 min-w-fit">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSettings(true)}
                className="flex items-center gap-2"
              >
                <Settings className="h-4 w-4" />
                Personnaliser
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleAcceptNecessary}
              >
                Nécessaires uniquement
              </Button>
              <Button
                size="sm"
                onClick={handleAcceptAll}
                className="bg-primary hover:bg-primary/90"
              >
                Accepter tout
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Modal de paramètres détaillés */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Paramètres de confidentialité
            </DialogTitle>
          </DialogHeader>

          <Tabs defaultValue="cookies" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="cookies">Cookies</TabsTrigger>
              <TabsTrigger value="policy">Politique</TabsTrigger>
            </TabsList>

            <TabsContent value="cookies" className="space-y-6">
              {/* Cookies nécessaires */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-green-600" />
                    <div>
                      <h4 className="font-medium">Cookies nécessaires</h4>
                      <p className="text-sm text-muted-foreground">
                        Requis pour le bon fonctionnement du site
                      </p>
                    </div>
                  </div>
                  <Switch checked={true} disabled />
                </div>
                <p className="text-xs text-muted-foreground pl-8">
                  Cookies de session, sécurité, préférences de langue, panier d'achat
                </p>
              </div>

              {/* Cookies analytiques */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    <div>
                      <h4 className="font-medium">Cookies analytiques</h4>
                      <p className="text-sm text-muted-foreground">
                        Nous aident à comprendre l'usage du site
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={preferences.analytics}
                    onCheckedChange={(value) => updatePreference('analytics', value)}
                  />
                </div>
                <p className="text-xs text-muted-foreground pl-8">
                  Google Analytics (anonymisé), mesures d'audience, pages visitées
                </p>
              </div>

              {/* Cookies marketing */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-purple-600" />
                    <div>
                      <h4 className="font-medium">Cookies marketing</h4>
                      <p className="text-sm text-muted-foreground">
                        Pour personnaliser les publicités
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={preferences.marketing}
                    onCheckedChange={(value) => updatePreference('marketing', value)}
                  />
                </div>
                <p className="text-xs text-muted-foreground pl-8">
                  Réseaux sociaux, publicités ciblées, remarketing
                </p>
              </div>

              {/* Cookies de préférences */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Settings className="h-5 w-5 text-orange-600" />
                    <div>
                      <h4 className="font-medium">Cookies de préférences</h4>
                      <p className="text-sm text-muted-foreground">
                        Mémorisent vos choix personnels
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={preferences.preferences}
                    onCheckedChange={(value) => updatePreference('preferences', value)}
                  />
                </div>
                <p className="text-xs text-muted-foreground pl-8">
                  Thème sombre/clair, région, préférences d'affichage
                </p>
              </div>
            </TabsContent>

            <TabsContent value="policy" className="space-y-4">
              <div className="prose prose-sm max-w-none">
                <h4>Notre engagement pour votre vie privée</h4>
                <p>
                  Eligibly.ai respecte votre vie privée et s'engage à protéger vos données personnelles
                  conformément au Règlement Général sur la Protection des Données (RGPD).
                </p>
                
                <h5>Finalités du traitement</h5>
                <ul>
                  <li>Fonctionnement technique du site (cookies nécessaires)</li>
                  <li>Analyse de l'audience et amélioration du service</li>
                  <li>Personnalisation de l'expérience utilisateur</li>
                  <li>Communication marketing (avec votre consentement)</li>
                </ul>

                <h5>Vos droits</h5>
                <p>
                  Vous disposez d'un droit d'accès, de rectification, d'effacement, de portabilité 
                  et d'opposition concernant vos données. Contactez-nous à : contact@eligibly.ai
                </p>

                <h5>Durée de conservation</h5>
                <p>
                  Les cookies sont conservés pour une durée maximale de 13 mois. 
                  Votre consentement est valable 13 mois et peut être retiré à tout moment.
                </p>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end gap-2 mt-6">
            <Button variant="outline" onClick={() => setShowSettings(false)}>
              Annuler
            </Button>
            <Button onClick={handleSavePreferences}>
              Enregistrer les préférences
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};