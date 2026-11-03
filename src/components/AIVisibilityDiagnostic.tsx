import { useEffect, useRef, useState } from "react";
import { Globe2, ArrowRight, Square, Download, SearchCheck, ShieldCheck, FileSearch, ExternalLink, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { publicSiteUrl, type AuditEvent } from "@/lib/ai-visibility/schema";
import logo from "@/assets/eligibly-logo-main.png";

type Result = Extract<AuditEvent, { type: "result" }>;
const assessmentLabels = { bases_solides: "Bases éditoriales solides", a_renforcer: "Bases à renforcer", insuffisant: "Contenu insuffisant", non_evaluable: "Évaluation impossible" };
const statusLabels = { point_fort: "Point fort", a_ameliorer: "À améliorer", non_verifie: "Non vérifié" };

export function AIVisibilityDiagnostic() {
  const [url, setUrl] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [consent, setConsent] = useState(false);
  const controller = useRef<AbortController | null>(null);

  useEffect(() => {
    let active = true;
    void supabase.auth.getSession().then(({ data }) => { if (active) setSignedIn(Boolean(data.session)); });
    return () => { active = false; controller.current?.abort(); };
  }, []);

  const run = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    let normalized: string;
    try { normalized = publicSiteUrl(url.trim()).href; } catch (e) { setError(e instanceof Error ? e.message : "URL invalide."); return; }
    const { data } = await supabase.auth.getSession();
    if (!data.session) { setSignedIn(false); setError("Connectez-vous pour lancer le diagnostic."); return; }
    setBusy(true); setResult(null); setProgress("Ouverture du diagnostic…");
    const abort = new AbortController(); controller.current = abort;
    try {
      const response = await fetch("/api/diagnostic-visibilite-ia", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${data.session.access_token}` }, body: JSON.stringify({ url: normalized }), signal: abort.signal });
      if (!response.ok) { const body = await response.json(); throw new Error(body.message ?? "Le diagnostic est indisponible."); }
      const reader = response.body?.getReader();
      if (!reader) throw new Error("La réponse du diagnostic est vide.");
      const decoder = new TextDecoder(); let buffer = ""; let complete = false;
      while (true) {
        const chunk = await reader.read();
        buffer += decoder.decode(chunk.value, { stream: !chunk.done });
        const lines = buffer.split("\n"); buffer = lines.pop() ?? "";
        for (const line of lines) {
          if (!line.trim()) continue;
          const event = JSON.parse(line) as AuditEvent;
          if (event.type === "progress") setProgress(event.text);
          if (event.type === "error") throw new Error(event.message);
          if (event.type === "result") { complete = true; setResult(event); }
        }
        if (chunk.done) break;
      }
      if (!complete) throw new Error("Le diagnostic s'est arrêté sans résultat exploitable.");
    } catch (e) { setError(abort.signal.aborted ? "Diagnostic interrompu." : e instanceof Error ? e.message : "Le diagnostic a échoué."); }
    finally { setBusy(false); controller.current = null; }
  };

  const download = () => {
    if (!result) return;
    const { report } = result;
    const text = [`Diagnostic Eligibly — ${result.siteUrl}`, new Date(result.checkedAt).toLocaleString("fr-FR"), assessmentLabels[report.assessment], report.summary, "\nCONSTATS", ...report.findings.map(f => `${f.area} — ${statusLabels[f.status]}\n${f.observation}\n${f.evidenceUrl ?? "Preuve non vérifiée"}`), "\nACTIONS", ...report.actions.map(a => `${a.priority} — ${a.title}\n${a.detail}\nExemple proposé : ${a.example}\nEffort : ${a.effort}`), "\nQUESTIONS À TESTER", ...report.prompts, "\nLIMITES", ...report.limitations, "\nSOURCES", ...result.sources.map(s => s.url)].join("\n\n");
    const blobUrl = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
    const a = document.createElement("a"); a.href = blobUrl; a.download = "diagnostic-visibilite-ia.txt"; a.click(); URL.revokeObjectURL(blobUrl);
  };

  return <div className="min-h-screen bg-editorial-paper text-foreground">
    <Header />
    <main id="main-content" className="container pt-28 pb-16">
      <div className="flex items-center gap-3 border-b border-editorial-ink/20 pb-5 mb-8">
        <img src={logo} alt="Eligibly" className="h-9 w-9 object-contain" />
        <span className="text-sm font-semibold text-editorial-ink">Marque & visibilité · Diagnostic IA</span>
      </div>
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,340px)] items-start">
        <div>
          <h1 className="font-display text-3xl md:text-4xl text-editorial-ink max-w-3xl leading-tight">Votre cabinet est-il prêt à être cité par les assistants IA ?</h1>
          <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">Une évaluation qualitative des contenus publics de votre site, avec preuves disponibles et améliorations prioritaires. Aucun score ne garantit une citation dans ChatGPT, Perplexity, Gemini ou Claude.</p>
          <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">Le scénario est concret : un créateur de SASU de conseil demande à un assistant quel expert-comptable choisir. L’assistant cite trois cabinets bien notés, avec une page dédiée à sa forme juridique ou un devis immédiat. Un cabinet à la fiche Google incomplète, sans avis récent, n’apparaît pas. Ce diagnostic repère ce qui manque à votre site pour figurer dans ce type de réponse.</p>
        </div>
        <figure>
          <img src={iaVisual.url} alt="Exemple illustratif : un assistant IA recommande trois cabinets à un créateur de SASU ; le cabinet à la fiche incomplète et sans avis récent est absent." width={1080} height={1350} loading="lazy" className="w-full rounded-lg border border-editorial-ink/20" />
          <figcaption className="mt-2 text-xs text-muted-foreground">Exemple illustratif, cabinets fictifs.</figcaption>
        </figure>
      </div>
      <form onSubmit={run} className="mt-8 border border-editorial-ink/20 bg-card rounded-lg p-5 md:p-7" aria-busy={busy}>
        <Label htmlFor="cabinet-site" className="text-editorial-ink">URL du site du cabinet</Label>
        <div className="mt-3 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1 min-w-0"><Globe2 className="absolute left-3 top-3.5 h-5 w-5 text-editorial-ink" aria-hidden /><Input id="cabinet-site" value={url} onChange={e => setUrl(e.target.value)} placeholder="https://www.votre-cabinet.fr" autoComplete="url" maxLength={2048} required disabled={busy} className="h-12 pl-10 bg-background" /></div>
          {busy ? <Button type="button" variant="outline" onClick={() => controller.current?.abort()} className="h-12 rounded-lg"><Square />Arrêter</Button> : signedIn ? <Button type="submit" disabled={!consent} className="h-12 rounded-lg bg-editorial-ink bg-none text-primary-foreground hover:bg-editorial-ink/90"><SearchCheck />Analyser le site</Button> : <Button asChild className="h-12 rounded-lg bg-editorial-ink bg-none text-primary-foreground"><a href="/connexion?retour=diagnostic">Se connecter pour analyser<ArrowRight /></a></Button>}
        </div>
        <label className="mt-4 flex items-start gap-3 text-sm text-muted-foreground"><input type="checkbox" checked={consent} disabled={busy} onChange={e => setConsent(e.target.checked)} className="mt-1 h-4 w-4" /><span>J’accepte la transmission de l’URL et des contenus publics consultés au service d’analyse IA. Ne fournissez aucun lien privé ou document client.</span></label>
        <p className="mt-3 text-xs text-muted-foreground">Accès avec votre compte cabinet · 3 diagnostics par heure · Aucun rapport enregistré par Eligibly.</p>
      </form>
      {busy && <div role="status" aria-live="polite" className="mt-6 flex items-center gap-3 text-editorial-ink"><Loader2 className="h-5 w-5 motion-safe:animate-spin" />{progress}</div>}
      {error && <p role="alert" className="mt-6 border-l-4 border-destructive bg-destructive/5 p-4 text-destructive break-words">{error}</p>}
      {!result && !busy && <div className="mt-10 grid md:grid-cols-3 gap-8 border-t border-editorial-ink/20 pt-7">
        {[{ Icon: FileSearch, title: "Contenus consultables", text: "Identité, missions, spécialités, ancrage local et réponses aux questions clients." }, { Icon: ShieldCheck, title: "Preuves distinguées", text: "Chaque constat sépare ce qui est documenté de ce qui reste non vérifié." }, { Icon: SearchCheck, title: "Priorités opérationnelles", text: "Actions éditoriales, exemples proposés et questions à tester dans les assistants." }].map(({ Icon, title, text }) => <div key={title}><Icon className="h-6 w-6 text-editorial-terracotta mb-3" /><h2 className="font-semibold text-editorial-ink">{title}</h2><p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p></div>)}
      </div>}
      {result && <section className="mt-10" aria-label="Résultat du diagnostic">
        <div className="border-y border-editorial-ink/20 py-6 flex flex-col md:flex-row gap-5 justify-between items-start">
          <div className="min-w-0"><p className="text-xs text-muted-foreground break-all">{result.siteUrl} · {new Date(result.checkedAt).toLocaleString("fr-FR")}</p><h2 className="font-display text-2xl text-editorial-ink mt-2">{assessmentLabels[result.report.assessment]}</h2><p className="text-sm mt-2">Confiance de l’analyse : {result.report.confidence} · Pas de mesure de citation</p></div>
          <Button variant="outline" onClick={download} className="rounded-lg shrink-0"><Download />Exporter le rapport</Button>
        </div>
        <p className="my-6 leading-relaxed max-w-4xl">{result.report.summary}</p>
        <h3 className="text-xl font-display text-editorial-ink mb-4">Constats documentés</h3>
        <div className="grid md:grid-cols-2 gap-4">{result.report.findings.map((f, i) => <article key={i} className="border border-border bg-card p-5 rounded-lg min-w-0"><p className="text-xs font-semibold text-editorial-terracotta">{statusLabels[f.status]}</p><h4 className="font-semibold mt-2">{f.area}</h4><p className="text-sm leading-relaxed mt-2 break-words">{f.observation}</p>{f.evidenceUrl && <a href={f.evidenceUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex gap-2 items-center text-sm text-editorial-ink underline">Consulter la preuve<ExternalLink className="h-3 w-3" /></a>}</article>)}</div>
        <h3 className="text-xl font-display text-editorial-ink mt-10 mb-4">Plan d’amélioration</h3>
        <div>{result.report.actions.map((a, i) => <article key={i} className="grid md:grid-cols-[70px_1fr] gap-3 border-t border-editorial-ink/20 py-6"><span className="font-display text-2xl text-editorial-terracotta">{a.priority}</span><div className="min-w-0"><h4 className="font-semibold">{a.title}</h4><p className="mt-2 leading-relaxed text-sm">{a.detail}</p><blockquote className="mt-3 border-l-2 border-editorial-mustard pl-4 text-sm"><span className="font-semibold">Exemple proposé : </span>{a.example}</blockquote><p className="mt-3 text-xs text-muted-foreground">Effort indicatif : {a.effort}</p></div></article>)}</div>
        <div className="grid md:grid-cols-2 gap-8 mt-8 border-t border-editorial-ink/20 pt-6"><div><h3 className="font-semibold text-editorial-ink">Questions à tester manuellement</h3><ul className="mt-3 list-disc pl-5 space-y-3 text-sm">{result.report.prompts.map((p, i) => <li key={i}>{p}</li>)}</ul></div><div><h3 className="font-semibold text-editorial-ink">Périmètre et limites</h3><ul className="mt-3 list-disc pl-5 space-y-3 text-sm">{result.report.limitations.map((p, i) => <li key={i}>{p}</li>)}</ul></div></div>
        <h3 className="font-semibold text-editorial-ink mt-8">Sources retournées par la recherche</h3><ul className="mt-3 space-y-2">{result.sources.map(s => <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="text-sm underline text-editorial-ink break-all">{s.title}</a></li>)}</ul>
      </section>}
      <div className="mt-10 border-t border-editorial-ink/20 pt-5 flex flex-wrap gap-5 text-sm"><a href="/visibilite-expert-comptable" className="underline text-editorial-ink">Méthode de visibilité du cabinet</a><a href="/marque-et-visibilite-expert-comptable" className="underline text-editorial-ink">Offre Marque & visibilité</a></div>
    </main><Footer />
  </div>;
}