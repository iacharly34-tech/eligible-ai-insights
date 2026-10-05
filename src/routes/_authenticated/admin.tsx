import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import { adminOverview, createCabinet, toggleCabinet, addZone, removeZone, inviteMember, reassignLead } from "@/lib/admin.functions";
import { EspaceShell, useMe, fmtDate, VERTICALES } from "@/components/espace/EspaceShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/_authenticated/admin")({ component: AdminPage });

function AdminPage() {
  const { data: me } = useMe();
  const qc = useQueryClient();
  const overview = useServerFn(adminOverview);
  const fCreate = useServerFn(createCabinet), fToggle = useServerFn(toggleCabinet), fAdd = useServerFn(addZone),
    fRemove = useServerFn(removeZone), fInvite = useServerFn(inviteMember), fReassign = useServerFn(reassignLead);
  const { data, isLoading } = useQuery({ queryKey: ["admin"], queryFn: () => overview(), enabled: !!me?.isAdmin });
  const [nom, setNom] = useState("");

  const run = async (p: Promise<unknown>, ok: string) => {
    try { await p; toast.success(ok); qc.invalidateQueries({ queryKey: ["admin"] }); }
    catch (e) { toast.error(e instanceof Error ? e.message : "Erreur"); }
  };

  if (me && !me.isAdmin) return <EspaceShell><p>Accès réservé à l'administration Eligibly.</p></EspaceShell>;
  if (isLoading || !data) return <EspaceShell><p className="text-muted-foreground">Chargement…</p></EspaceShell>;

  const card = "rounded-xl border border-border bg-card p-6";
  const sel = "h-9 rounded-md border border-input bg-background px-2 text-sm";

  return (
    <EspaceShell>
      <h1 className="font-display text-2xl font-semibold text-foreground">Administration</h1>

      <section className={`${card} mt-6`}>
        <h2 className="font-semibold mb-3">Nouveau cabinet</h2>
        <form className="flex gap-2 max-w-lg" onSubmit={(e) => { e.preventDefault(); run(fCreate({ data: { nom } }), "Cabinet créé").then(() => setNom("")); }}>
          <Input value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Nom du cabinet" aria-label="Nom du cabinet" />
          <Button type="submit" disabled={nom.trim().length < 2}>Créer</Button>
        </form>
      </section>

      <div className="grid lg:grid-cols-2 gap-4 mt-4">
        {data.cabinets.map((c: any) => {
          const zones = data.zones.filter((z: any) => z.cabinet_id === c.id);
          const members = data.members.filter((m: any) => m.cabinet_id === c.id);
          return (
            <section key={c.id} className={card}>
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">{c.nom} {!c.actif && <span className="text-xs text-muted-foreground">(inactif)</span>}</h2>
                <Button size="sm" variant="ghost" onClick={() => run(fToggle({ data: { id: c.id, actif: !c.actif } }), "Mis à jour")}>{c.actif ? "Désactiver" : "Activer"}</Button>
              </div>

              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-4 mb-2">Zones (département × verticale)</div>
              <div className="flex flex-wrap gap-2">
                {zones.length === 0 && <span className="text-sm text-muted-foreground">Aucune zone</span>}
                {zones.map((z: any) => (
                  <span key={z.id} className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-xs">
                    {z.departement} · {z.verticale}
                    <button aria-label="Retirer la zone" className="text-muted-foreground hover:text-destructive" onClick={() => run(fRemove({ data: { id: z.id } }), "Zone retirée")}>×</button>
                  </span>
                ))}
              </div>
              <form className="flex gap-2 mt-2" onSubmit={(e) => {
                e.preventDefault();
                const f = new FormData(e.currentTarget);
                run(fAdd({ data: { cabinet_id: c.id, departement: String(f.get("dep")).trim().toUpperCase(), verticale: f.get("vert") as any } }), "Zone ajoutée");
              }}>
                <Input name="dep" placeholder="Dép. (ex. 75)" className="w-28" aria-label="Département" />
                <select name="vert" className={sel} aria-label="Verticale">{VERTICALES.map((v) => <option key={v}>{v}</option>)}</select>
                <Button size="sm" type="submit" variant="outline">Ajouter</Button>
              </form>

              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-4 mb-2">Utilisateurs</div>
              <ul className="text-sm space-y-1">
                {members.length === 0 && <li className="text-muted-foreground">Aucun</li>}
                {members.map((m: any) => <li key={m.user_id}>{m.email ?? m.user_id}</li>)}
              </ul>
              <form className="flex gap-2 mt-2" onSubmit={(e) => {
                e.preventDefault();
                const email = String(new FormData(e.currentTarget).get("email"));
                run(fInvite({ data: { cabinet_id: c.id, email, redirectTo: `${window.location.origin}/connexion` } }), "Invitation envoyée");
              }}>
                <Input name="email" type="email" placeholder="email@cabinet.fr" aria-label="Email à inviter" />
                <Button size="sm" type="submit" variant="outline">Inviter</Button>
              </form>
            </section>
          );
        })}
      </div>

      <section className={`${card} mt-4`}>
        <h2 className="font-semibold mb-3">Leads non attribués ({data.unassigned.length})</h2>
        {data.unassigned.length === 0 ? <p className="text-sm text-muted-foreground">Aucun.</p> : (
          <div className="overflow-x-auto"><table className="w-full text-sm">
            <tbody>
              {data.unassigned.map((l: any) => (
                <tr key={l.siren} className="border-b border-border last:border-0">
                  <td className="py-2 pr-3">{l.denomination}{l.opposition_rne && <span className="ml-2 text-xs text-destructive">opposition RNE — masqué</span>}</td>
                  <td className="py-2 pr-3 text-muted-foreground">{l.departement} · {l.verticale}</td>
                  <td className="py-2 pr-3 tabular-nums">{l.score} {l.niveau}</td>
                  <td className="py-2 pr-3 text-muted-foreground">{fmtDate(l.detecte_le)}</td>
                  <td className="py-2">
                    <select className={sel} aria-label="Attribuer à" defaultValue="" onChange={(e) => e.target.value && run(fReassign({ data: { siren: l.siren, cabinet_id: e.target.value } }), "Lead attribué")}>
                      <option value="">Attribuer à…</option>
                      {data.cabinets.map((c: any) => <option key={c.id} value={c.id}>{c.nom}</option>)}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table></div>
        )}
      </section>

      <section className={`${card} mt-4`}>
        <h2 className="font-semibold mb-3">Derniers lots reçus du pipeline</h2>
        {data.runs.length === 0 ? <p className="text-sm text-muted-foreground">Aucun lot reçu.</p> : (
          <ul className="text-sm space-y-1">
            {data.runs.map((r: any) => <li key={r.id}>{new Date(r.at).toLocaleString("fr-FR")} — reçus {r.recus}, insérés {r.inseres}, mis à jour {r.mis_a_jour}, supprimés {r.supprimes}</li>)}
          </ul>
        )}
      </section>
    </EspaceShell>
  );
}
