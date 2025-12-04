import React, { useState, useEffect, memo } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Settings, Shield, BarChart3, Users } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { secureStorage } from '@/utils/security';
import { useLanguage } from '@/contexts/LanguageContext';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const COOKIE_CONSENT_KEY = 'cookie-consent-eligibly';
const COOKIE_PREFERENCES_KEY = 'cookie-preferences-eligibly';

export const CookieConsent = memo(() => {
  const { t } = useLanguage();
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
    
    if (prefs.analytics) {
      console.log('Analytics cookies accepted');
    }
  };

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    if (key === 'necessary') return;
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t shadow-lg">
        <Card className="max-w-6xl mx-auto p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="font-semibold text-lg">{t('cookies.title')}</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                {t('cookies.description')}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                {t('cookies.gdpr')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 min-w-fit">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSettings(true)}
                className="flex items-center gap-2"
              >
                <Settings className="h-4 w-4" aria-hidden="true" />
                {t('cookies.customize')}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleAcceptNecessary}
              >
                {t('cookies.necessaryOnly')}
              </Button>
              <Button
                size="sm"
                onClick={handleAcceptAll}
                className="bg-primary hover:bg-primary/90"
              >
                {t('cookies.acceptAll')}
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Settings Modal */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" aria-hidden="true" />
              {t('cookies.settings')}
            </DialogTitle>
          </DialogHeader>

          <Tabs defaultValue="cookies" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="cookies">{t('cookies.tabCookies')}</TabsTrigger>
              <TabsTrigger value="policy">{t('cookies.tabPolicy')}</TabsTrigger>
            </TabsList>

            <TabsContent value="cookies" className="space-y-6">
              {/* Necessary Cookies */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-green-600" aria-hidden="true" />
                    <div>
                      <h4 className="font-medium">{t('cookies.necessary.title')}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t('cookies.necessary.desc')}
                      </p>
                    </div>
                  </div>
                  <Switch checked={true} disabled />
                </div>
                <p className="text-xs text-muted-foreground pl-8">
                  {t('cookies.necessary.details')}
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-5 w-5 text-blue-600" aria-hidden="true" />
                    <div>
                      <h4 className="font-medium">{t('cookies.analytics.title')}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t('cookies.analytics.desc')}
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={preferences.analytics}
                    onCheckedChange={(value) => updatePreference('analytics', value)}
                  />
                </div>
                <p className="text-xs text-muted-foreground pl-8">
                  {t('cookies.analytics.details')}
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-purple-600" aria-hidden="true" />
                    <div>
                      <h4 className="font-medium">{t('cookies.marketing.title')}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t('cookies.marketing.desc')}
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={preferences.marketing}
                    onCheckedChange={(value) => updatePreference('marketing', value)}
                  />
                </div>
                <p className="text-xs text-muted-foreground pl-8">
                  {t('cookies.marketing.details')}
                </p>
              </div>

              {/* Preference Cookies */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Settings className="h-5 w-5 text-orange-600" aria-hidden="true" />
                    <div>
                      <h4 className="font-medium">{t('cookies.preferences.title')}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t('cookies.preferences.desc')}
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={preferences.preferences}
                    onCheckedChange={(value) => updatePreference('preferences', value)}
                  />
                </div>
                <p className="text-xs text-muted-foreground pl-8">
                  {t('cookies.preferences.details')}
                </p>
              </div>
            </TabsContent>

            <TabsContent value="policy" className="space-y-4">
              <div className="prose prose-sm max-w-none">
                <h4>{t('cookies.policy.title')}</h4>
                <p>{t('cookies.policy.intro')}</p>
                
                <h5>{t('cookies.policy.purposes')}</h5>
                <ul>
                  <li>{t('cookies.policy.purpose1')}</li>
                  <li>{t('cookies.policy.purpose2')}</li>
                  <li>{t('cookies.policy.purpose3')}</li>
                  <li>{t('cookies.policy.purpose4')}</li>
                </ul>

                <h5>{t('cookies.policy.rights')}</h5>
                <p>{t('cookies.policy.rightsText')}</p>

                <h5>{t('cookies.policy.retention')}</h5>
                <p>{t('cookies.policy.retentionText')}</p>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end gap-2 mt-6">
            <Button variant="outline" onClick={() => setShowSettings(false)}>
              {t('cookies.cancel')}
            </Button>
            <Button onClick={handleSavePreferences}>
              {t('cookies.save')}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
});