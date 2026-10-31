import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { listDemoRequests, updateDemoStatus } from "@/lib/demo.functions";
import { formatParis } from "@/lib/demo-booking";

const STATUTS: Record<string, string> = { nouveau: "Nouveau", relance: "Relancé", rdv_pris: "RDV pris", signe: "Signé", perdu: "Perdu" };

export function DemoRequestsAdmin() {
  const qc = useQueryClient();
  const fList = useServerFn(listDemoRequests), fUpdate = useServerFn(updateDemoStatus);
  const { data = [], isLoading } = useQuery({ queryKey: ["admin-demo"], queryFn: () => fList() });
  const counts = Object.keys(STATUTS).map((k) => [k, data.filter((r: any) => r.statut === k).length] as const);

  const change = async (id: string, statut: string) => {
    try { await fUpdate({ data: { id, statut: statut as any } }); toast.success("Statut mis à jour"); qc.invalidateQueries({ queryKey: ["admin-demo"] }); }
    catch (e) { toast.error(e instanceof Error ? e.message : "Erreur"); }
  };

  return (
    <section className="rounded-xl border border-border bg-card p-6 mt-4">
      <h2 className="font-semibold mb-1">Demandes de démo</h2>
      <p className="text-xs text-muted-foreground mb-3">
        E-mail de confirmation avec lien de réservation à l'envoi, relances automatiques à J+2 et J+5 tant qu'aucun RDV n'est pris.
      </p>
      <div className="flex flex-wrap gap-3 text-sm mb-4">
        {counts.map(([k, n]) => <span key={k} className="rounded-md bg-muted px-2 py-1">{STATUTS[k]} : <strong className="tabular-nums">{n}</strong></span>)}
      </div>
      {isLoading ? <p className="text-sm text-muted-foreground">Chargement…</p> : data.length === 0 ? <p className="text-sm text-muted-foreground">Aucune demande.</p> : (
        <div className="overflow-x-auto"><table className="w-full text-sm">
          <thead><tr className="text-left text-muted-foreground border-b border-border">
            <th className="py-2 pr-3 font-medium">Contact</th><th className="py-2 pr-3 font-medium">Cabinet</th>
            <th className="py-2 pr-3 font-medium">Reçue</th><th className="py-2 pr-3 font-medium">RDV</th><th className="py-2 font-medium">Statut</th>
          </tr></thead>
          <tbody>
            {data.map((r: any) => (
              <tr key={r.id} className="border-b border-border last:border-0 align-top">
                <td className="py-2 pr-3">{r.full_name}<div className="text-xs text-muted-foreground">{r.email}{r.phone ? ` · ${r.phone}` : ""}</div></td>
                <td className="py-2 pr-3">{r.company}<div className="text-xs text-muted-foreground">{[r.taille_cabinet, r.departements && `Dép. ${r.departements}`].filter(Boolean).join(" · ")}</div></td>
                <td className="py-2 pr-3 text-muted-foreground whitespace-nowrap">{new Date(r.created_at).toLocaleDateString("fr-FR")}<div className="text-xs">{r.followup_count} relance(s)</div></td>
                <td className="py-2 pr-3">{r.rdv_at ? formatParis(r.rdv_at) : <span className="text-muted-foreground">—</span>}</td>
                <td className="py-2">
                  <select aria-label={`Statut de ${r.full_name}`} className="h-9 rounded-md border border-input bg-background px-2 text-sm" value={r.statut} onChange={(e) => change(r.id, e.target.value)}>
                    {Object.entries(STATUTS).map(([k, l]) => <option key={k} value={k}>{l}</option>)}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table></div>
      )}
    </section>
  );
}
