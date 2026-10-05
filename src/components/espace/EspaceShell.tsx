import { Link, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import { getMe } from "@/lib/espace.functions";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";

export const useMe = () => {
  const fn = useServerFn(getMe);
  return useQuery({ queryKey: ["me"], queryFn: () => fn() });
};

export const EspaceShell = ({ children }: { children: ReactNode }) => {
  const { data: me } = useMe();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <Link to="/" className="font-display text-lg font-semibold text-foreground">Eligibly</Link>
            <nav className="flex gap-4 text-sm">
              <Link to="/espace" className="text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground font-semibold" }} activeOptions={{ exact: true }}>Mes leads</Link>
              {me?.isAdmin && <Link to="/admin" className="text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground font-semibold" }}>Administration</Link>}
            </nav>
          </div>
          <div className="flex items-center gap-3 text-sm">
            {me?.cabinetNom && <span className="text-muted-foreground hidden sm:inline">{me.cabinetNom}</span>}
            <Button size="sm" variant="ghost" onClick={async () => { await supabase.auth.signOut(); navigate({ to: "/connexion" }); }}>Déconnexion</Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
};

export const fmtDate = (iso?: string | null) =>
  iso ? new Date(iso).toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" }) : "—";
export const daysSince = (iso?: string | null) =>
  iso ? Math.max(0, Math.floor((Date.now() - new Date(iso).getTime()) / 86400000)) : null;

export const STATUTS = [
  { v: "nouveau", l: "Nouveau" },
  { v: "contacte", l: "Contacté" },
  { v: "rdv", l: "RDV pris" },
  { v: "signe", l: "Signé" },
  { v: "ecarte", l: "Écarté" },
] as const;

export const NIVEAU_LABEL: Record<string, string> = { PREMIUM: "Premium", STANDARD: "Standard", A_VERIFIER: "À vérifier" };
export const CANAL_LABEL: Record<string, string> = {
  email: "Email", courrier: "Courrier", linkedin: "LinkedIn", telephone: "Téléphone",
  telephone_cabinet: "Téléphone (cabinet)", rdv_en_ligne: "RDV en ligne", aucun: "Aucun",
};
export const VERTICALES = ["tech", "conseil", "commerce", "medical", "sci"] as const;
