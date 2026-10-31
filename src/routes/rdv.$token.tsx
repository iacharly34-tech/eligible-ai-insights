import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { getBooking, bookSlot } from "@/lib/demo.functions";
import { formatParis } from "@/lib/demo-booking";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CalendarCheck } from "lucide-react";

export const Route = createFileRoute("/rdv/$token")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Réserver votre démo — Eligibly" },
      { name: "description", content: "Choisissez un créneau de 20 minutes pour votre démonstration Eligibly." },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: RdvPage,
});

const dayKey = (iso: string) => new Date(iso).toLocaleDateString("fr-FR", { timeZone: "Europe/Paris", weekday: "long", day: "numeric", month: "long" });
const hour = (iso: string) => new Date(iso).toLocaleTimeString("fr-FR", { timeZone: "Europe/Paris", hour: "2-digit", minute: "2-digit" });

function RdvPage() {
  const { token } = Route.useParams();
  const fGet = useServerFn(getBooking), fBook = useServerFn(bookSlot);
  const valid = /^[0-9a-f-]{36}$/i.test(token);
  const { data, isLoading, refetch } = useQuery({ queryKey: ["rdv", token], queryFn: () => fGet({ data: { token } }), enabled: valid });
  const [day, setDay] = useState<string | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [changing, setChanging] = useState(false);

  const byDay = useMemo(() => {
    const m = new Map<string, string[]>();
    for (const s of data && data.found ? data.slots : []) { const k = dayKey(s); m.set(k, [...(m.get(k) ?? []), s]); }
    return m;
  }, [data]);
  const days = [...byDay.keys()];
  const activeDay = day ?? days[0];

  const confirm = async () => {
    if (!slot) return;
    setBusy(true); setErr(null);
    try { await fBook({ data: { token, slot } }); setChanging(false); setSlot(null); await refetch(); }
    catch (e) { setErr(e instanceof Error ? e.message : "Réservation impossible"); await refetch(); }
    finally { setBusy(false); }
  };

  let body: React.ReactNode;
  if (!valid || (data && !data.found)) body = <p className="text-muted-foreground">Ce lien de réservation n'est pas valide. Écrivez-nous en réponse à notre e-mail.</p>;
  else if (isLoading || !data || !data.found) body = <p className="text-muted-foreground">Chargement des créneaux…</p>;
  else if (data.rdvAt && !changing) body = (
    <div className="rounded-xl border border-border bg-card p-6">
      <CalendarCheck className="h-8 w-8 text-primary mb-3" aria-hidden />
      <p className="text-lg font-semibold text-foreground">Rendez-vous confirmé : {formatParis(data.rdvAt)}</p>
      <p className="text-sm text-muted-foreground mt-2">Heure de Paris · 20 minutes. Une confirmation vous a été envoyée par e-mail.</p>
      <Button variant="outline" className="mt-4" onClick={() => setChanging(true)}>Changer de créneau</Button>
    </div>
  );
  else body = (
    <div className="rounded-xl border border-border bg-card p-6">
      <h2 className="font-semibold text-foreground mb-3">1. Choisissez un jour</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {days.map((d) => (
          <Button key={d} size="sm" variant={d === activeDay ? "default" : "outline"} onClick={() => { setDay(d); setSlot(null); }} className="capitalize">{d}</Button>
        ))}
      </div>
      <h2 className="font-semibold text-foreground mb-3">2. Choisissez une heure (Paris)</h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-6">
        {(byDay.get(activeDay) ?? []).map((s) => (
          <Button key={s} size="sm" variant={s === slot ? "default" : "outline"} onClick={() => setSlot(s)} aria-pressed={s === slot}>{hour(s)}</Button>
        ))}
      </div>
      {err && <p className="text-sm text-destructive mb-3" role="alert">{err}</p>}
      <Button disabled={!slot || busy} onClick={confirm} size="lg">{busy ? "Réservation…" : slot ? `Confirmer : ${formatParis(slot)}` : "Sélectionnez un créneau"}</Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Démo Eligibly · 20 min</p>
        <h1 className="font-display text-3xl font-semibold text-foreground mb-2">
          {data && data.found ? `${data.firstName}, choisissez votre créneau` : "Réservez votre démonstration"}
        </h1>
        <p className="text-muted-foreground mb-8">Nous parcourons ensemble les sociétés récemment créées sur votre zone, leur score et l'angle d'approche proposé.</p>
        {body}
      </main>
      <Footer />
    </div>
  );
}
