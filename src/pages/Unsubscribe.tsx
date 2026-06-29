import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

type State = "loading" | "ready" | "already" | "invalid" | "success" | "error";

export default function Unsubscribe() {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");
  const [state, setState] = useState<State>("loading");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!token) {
      setState("invalid");
      return;
    }
    fetch(
      `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
      { headers: { apikey: SUPABASE_KEY } },
    )
      .then(async (r) => {
        const data = await r.json().catch(() => ({}));
        if (r.ok && data.valid === true) setState("ready");
        else if (data.reason === "already_unsubscribed") setState("already");
        else setState("invalid");
      })
      .catch(() => setState("error"));
  }, [token]);

  const confirm = async () => {
    if (!token) return;
    setSubmitting(true);
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/handle-email-unsubscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: SUPABASE_KEY },
        body: JSON.stringify({ token }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) setState("success");
      else if (data.reason === "already_unsubscribed") setState("already");
      else setState("error");
    } catch {
      setState("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="max-w-md w-full rounded-2xl border border-border/50 bg-card p-8 text-center">
        <h1 className="text-2xl font-bold font-display tracking-tight mb-3">
          Se désinscrire des emails Eligibly
        </h1>
        {state === "loading" && (
          <p className="text-sm text-muted-foreground">Vérification du lien…</p>
        )}
        {state === "ready" && (
          <>
            <p className="text-sm text-muted-foreground mb-6">
              Confirmez pour ne plus recevoir d'emails de notre part.
            </p>
            <Button onClick={confirm} disabled={submitting} className="w-full">
              {submitting ? "Désinscription…" : "Confirmer la désinscription"}
            </Button>
          </>
        )}
        {state === "already" && (
          <p className="text-sm text-muted-foreground">
            Vous êtes déjà désinscrit. Aucun email supplémentaire ne vous sera envoyé.
          </p>
        )}
        {state === "success" && (
          <p className="text-sm text-foreground">
            ✅ C'est fait. Vous ne recevrez plus nos emails.
          </p>
        )}
        {state === "invalid" && (
          <p className="text-sm text-muted-foreground">
            Ce lien est invalide ou expiré.
          </p>
        )}
        {state === "error" && (
          <p className="text-sm text-muted-foreground">
            Une erreur est survenue. Réessayez plus tard ou écrivez-nous à
            contact@eligibly.ai.
          </p>
        )}
      </div>
    </main>
  );
}