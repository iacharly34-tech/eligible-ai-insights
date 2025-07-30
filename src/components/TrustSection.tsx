import { Badge } from "@/components/ui/badge";

export const TrustSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-xl text-muted-foreground font-medium">Ils nous font confiance</h3>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="flex items-center space-x-2">
            <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
              <span className="text-xs font-medium text-muted-foreground">Citron</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
              <span className="text-xs font-medium text-muted-foreground">OpenClassrooms</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
              <span className="text-xs font-medium text-muted-foreground">Carrefour</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
              <span className="text-xs font-medium text-muted-foreground">Axioval</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
              <span className="text-xs font-medium text-muted-foreground">Cercle des Langues</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
              <span className="text-xs font-medium text-muted-foreground">VESTACK</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
              <span className="text-xs font-medium text-muted-foreground">Theodo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};