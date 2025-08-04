import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink, Info } from "lucide-react";
import { STATS_SOURCES } from "@/data/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const StatsSources = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-border/30 pt-8 mt-16">
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Info className="w-4 h-4" />
          Sources et méthodologie des statistiques
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </Button>

        {isOpen && (
          <div className="mt-6 animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(STATS_SOURCES).map(([key, source]) => (
                <Card key={key} className="border border-border/50 bg-card/50">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs">
                        {source.value}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{source.year}</span>
                    </div>
                    
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      {source.source}
                    </h4>
                    
                    <p className="text-xs text-muted-foreground mb-3">
                      {source.note}
                    </p>
                    
                    {"methodology" in source && source.methodology && (
                      <div className="text-xs text-muted-foreground mb-3 p-2 bg-muted/30 rounded">
                        <strong>Méthodologie :</strong> {source.methodology}
                      </div>
                    )}
                    
                    {"url" in source && source.url && (
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                      >
                        Voir la source
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-muted/20 rounded-lg border border-border/30">
              <h4 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                <Info className="w-4 h-4 text-primary" />
                Notes importantes
              </h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Les statistiques internes Eligibly.ai sont basées sur des données anonymisées clients</li>
                <li>• Les chiffres de précision IA suivent les standards de l'industrie pour les systèmes de détection automatique</li>
                <li>• Les sources officielles sont mises à jour régulièrement selon les publications gouvernementales</li>
                <li>• Toutes les métriques sont calculées sur une base annuelle glissante (période de 12 mois)</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};