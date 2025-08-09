import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, Mail, MessageSquare, Wand2 } from "lucide-react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

export const AOParams = () => {
  const [keywords, setKeywords] = useState("");
  const [budgetMin, setBudgetMin] = useState("");
  const [budgetMax, setBudgetMax] = useState("");
  const [sector, setSector] = useState("");
  const [requirements, setRequirements] = useState("");
  const [typeAO, setTypeAO] = useState<string | undefined>(undefined);
  const [region, setRegion] = useState<string | undefined>(undefined);
  const [frequency, setFrequency] = useState<string | undefined>("quotidienne");
  const [alerts, setAlerts] = useState<{ email: boolean; slack: boolean; teams: boolean }>({ email: true, slack: false, teams: false });

  const toggleAlert = (key: keyof typeof alerts) => {
    setAlerts((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const activeCount = [
    keywords,
    budgetMin || budgetMax,
    sector,
    requirements,
    typeAO,
    region,
    frequency !== "quotidienne" ? "freq" : "",
    alerts.slack || alerts.teams ? "alerts" : "",
  ].filter(Boolean).length;

  const ParamsPanel = () => (
    <Card className="border">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-primary" aria-hidden="true" />
          <CardTitle className="text-sm uppercase tracking-wide">Paramétrage des AO ciblés</CardTitle>
        </div>
        <CardDescription>Définissez vos critères pour des résultats ultra-pertinents</CardDescription>
      </CardHeader>
      <CardContent className="px-4 pb-4 pt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {/* Mots-clés */}
          <div className="space-y-1">
            <Label htmlFor="keywords">Mots-clés</Label>
            <Input id="keywords" placeholder="ex: cybersécurité, formation" value={keywords} onChange={(e) => setKeywords(e.target.value)} className="h-9" />
          </div>

          {/* Budget min/max */}
          <div className="space-y-1">
            <Label>Budget (K€)</Label>
            <div className="grid grid-cols-2 gap-2">
              <Input inputMode="numeric" pattern="[0-9]*" placeholder="Min" value={budgetMin} onChange={(e) => setBudgetMin(e.target.value)} className="h-9" />
              <Input inputMode="numeric" pattern="[0-9]*" placeholder="Max" value={budgetMax} onChange={(e) => setBudgetMax(e.target.value)} className="h-9" />
            </div>
          </div>

          {/* Secteur */}
          <div className="space-y-1">
            <Label htmlFor="sector">Secteur</Label>
            <Input id="sector" placeholder="ex: Education, Santé, IT" value={sector} onChange={(e) => setSector(e.target.value)} className="h-9" />
          </div>

          {/* Exigences techniques */}
          <div className="space-y-1">
            <Label htmlFor="requirements">Critères spécifiques</Label>
            <Input id="requirements" placeholder="ex: ISO14001, RGPD, hébergement FR" value={requirements} onChange={(e) => setRequirements(e.target.value)} className="h-9" />
          </div>

          {/* Type d'AO */}
          <div className="space-y-1">
            <Label>Type d'AO</Label>
            <Select value={typeAO} onValueChange={setTypeAO}>
              <SelectTrigger className="h-9">
                <SelectValue placeholder="Sélectionner" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nouveau">Nouveau</SelectItem>
                <SelectItem value="renouvellement">Renouvellement imminent</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Région */}
          <div className="space-y-1">
            <Label>Région</Label>
            <Select value={region} onValueChange={setRegion}>
              <SelectTrigger className="h-9">
                <SelectValue placeholder="Toute la France" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="idf">Île-de-France</SelectItem>
                <SelectItem value="na">Nouvelle-Aquitaine</SelectItem>
                <SelectItem value="ara">Auvergne-Rhône-Alpes</SelectItem>
                <SelectItem value="occ">Occitanie</SelectItem>
                <SelectItem value="paca">Provence-Alpes-Côte d'Azur</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Fréquence */}
          <div className="space-y-1">
            <Label>Fréquence de mise à jour</Label>
            <Select value={frequency} onValueChange={setFrequency}>
              <SelectTrigger className="h-9">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="quotidienne">Quotidienne</SelectItem>
                <SelectItem value="hebdomadaire">Hebdomadaire</SelectItem>
                <SelectItem value="mensuelle">Mensuelle</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Envoi des alertes */}
          <div className="space-y-1">
            <Label>Envoi des alertes</Label>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Checkbox id="alert-email" checked={alerts.email} onCheckedChange={() => toggleAlert("email")} />
                <Label htmlFor="alert-email" className="font-normal flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                  Email
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="alert-slack" checked={alerts.slack} onCheckedChange={() => toggleAlert("slack")} />
                <Label htmlFor="alert-slack" className="font-normal flex items-center gap-1.5">
                  <MessageSquare className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                  Slack
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="alert-teams" checked={alerts.teams} onCheckedChange={() => toggleAlert("teams")} />
                <Label htmlFor="alert-teams" className="font-normal flex items-center gap-1.5">
                  <MessageSquare className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                  Teams
                </Label>
              </div>
            </div>
          </div>

          {/* Action */}
          <div className="flex items-end justify-start sm:justify-end">
            <Button className="h-9" variant="accent">
              <Wand2 className="mr-2 h-4 w-4" aria-hidden="true" />
              Appliquer
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section aria-label="Paramétrage des AO ciblés" className="mb-4 md:mb-6">
      {/* Desktop: Hover to open */}
      <div className="hidden md:block">
        <HoverCard openDelay={100}>
          <HoverCardTrigger asChild>
            <Button variant="secondary" className="h-9">
              <SlidersHorizontal className="mr-2 h-4 w-4" aria-hidden="true" />
              Paramétrage des AO
              {activeCount > 0 && (
                <span className="ml-2 text-xs text-muted-foreground">({activeCount})</span>
              )}
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-[min(92vw,1100px)] p-0">
            <ParamsPanel />
          </HoverCardContent>
        </HoverCard>
      </div>

      {/* Mobile: Click to open */}
      <div className="md:hidden">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="secondary" className="h-10 w-full justify-between">
              <span className="flex items-center">
                <SlidersHorizontal className="mr-2 h-4 w-4" aria-hidden="true" />
                Paramétrage des AO
              </span>
              {activeCount > 0 && (
                <span className="text-xs text-muted-foreground">({activeCount})</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent align="center" className="w-[92vw] p-0">
            <ParamsPanel />
          </PopoverContent>
        </Popover>
      </div>
    </section>
  );
}
