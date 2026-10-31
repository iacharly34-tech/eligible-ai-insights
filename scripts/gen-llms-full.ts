import { writeFileSync } from "node:fs";
import { ROUTE_META } from "../src/lib/route-meta";
const skip = /^\/(cgu|mentions|confidentialite|connexion|espace|admin|rdv|en\b|404)/;
const groups: Record<string, string[]> = { "Offres et produit": [], "Pages métier et comparatifs": [], "Cas d'usage": [], "Articles et guides": [] };
for (const [p, m] of Object.entries(ROUTE_META).sort()) {
  if (skip.test(p)) continue;
  const line = `### [${m.title}](https://eligibly.ai${p === "/" ? "" : p})\n${m.description}\n`;
  const g = p.startsWith("/blog/") ? "Articles et guides" : p.includes("cas-usage") ? "Cas d'usage" : /produit|offre|tarif|demo|sales|^\/$|pourquoi-ce-lead|barometre-qualite/.test(p) ? "Offres et produit" : "Pages métier et comparatifs";
  groups[g].push(line);
}
let out = `# Eligibly — index complet\n\n> Eligibly est un service B2B français pour cabinets d'expertise comptable : détection quotidienne des sociétés nouvellement immatriculées (SASU, SAS, SARL, EURL, SEL) à partir des sources publiques INPI/RNE, INSEE Sirene et BODACC, scoring, canal d'activation recommandé et accroche. À partir de 10 € par lead, pilote de 14 jours sans carte bancaire. Deux offres : Marque & visibilité, Détection & prospection.\n\nFaits clés :\n- Public : experts-comptables et cabinets d'expertise comptable en France.\n- Alternative à PrimoLead et aux fichiers de SIRET : décision commerciale (score, raisons, canal, accroche) plutôt qu'une liste brute.\n- Leads non mutualisés, attribués par zone ; oppositions commerciales RNE respectées.\n- Contact : contact@eligibly.ai — démo : https://eligibly.ai/demo\n\n`;
for (const [g, l] of Object.entries(groups)) if (l.length) out += `## ${g}\n\n${l.join("\n")}\n`;
writeFileSync("public/llms-full.txt", out);
console.log(Object.values(groups).map((l) => l.length));
