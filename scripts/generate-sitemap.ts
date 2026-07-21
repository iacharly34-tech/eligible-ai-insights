// Auto-generated sitemap. Runs on predev and prebuild.
// Writes public/sitemap.xml with today's lastmod for every listed route.

import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://eligibly.ai";
const today = new Date().toISOString().slice(0, 10);

interface Entry {
  path: string;
  changefreq?: "daily" | "weekly" | "monthly" | "yearly";
  priority?: string;
}

// Kept in sync with src/App.tsx — only public, indexable routes for the
// current cabinet-EC positioning. Legacy AO routes are intentionally excluded.
const entries: Entry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/produit", changefreq: "monthly", priority: "0.9" },
  { path: "/solutions", changefreq: "monthly", priority: "0.8" },
  { path: "/tarifs", changefreq: "monthly", priority: "0.9" },
  { path: "/ressources", changefreq: "weekly", priority: "0.7" },
  { path: "/a-propos", changefreq: "monthly", priority: "0.6" },
  { path: "/demo", changefreq: "monthly", priority: "0.9" },
  { path: "/inscription", changefreq: "monthly", priority: "0.7" },
  { path: "/newsletter", changefreq: "monthly", priority: "0.5" },
  { path: "/connexion", changefreq: "yearly", priority: "0.3" },
  { path: "/simulateur-roi-ia-cabinet", changefreq: "monthly", priority: "0.85" },
  // Landing SEO cabinet EC
  { path: "/leads-experts-comptables", changefreq: "weekly", priority: "0.9" },
  { path: "/prospection-cabinet-comptable", changefreq: "monthly", priority: "0.8" },
  { path: "/canaux-activation", changefreq: "monthly", priority: "0.7" },
  { path: "/pourquoi-ce-lead-est-prioritaire", changefreq: "monthly", priority: "0.7" },
  { path: "/alternatives-primolead-experts-comptables", changefreq: "monthly", priority: "0.85" },
  { path: "/cabinet/glossaire", changefreq: "monthly", priority: "0.7" },
  { path: "/cabinet/cas-usage", changefreq: "monthly", priority: "0.75" },
  { path: "/cabinet/cas-usage/cabinet-8-collaborateurs-departement", changefreq: "monthly", priority: "0.7" },
  { path: "/cabinet/cas-usage/cabinet-specialise-restauration", changefreq: "monthly", priority: "0.7" },
  { path: "/cabinet/cas-usage/cabinet-full-remote-startups-ecommerce", changefreq: "monthly", priority: "0.7" },
  { path: "/mentions-legales", changefreq: "yearly", priority: "0.2" },
  { path: "/confidentialite", changefreq: "yearly", priority: "0.2" },
  { path: "/cgu", changefreq: "yearly", priority: "0.2" },
  // Blog article added récemment
  { path: "/blog/moderniser-cabinet-expertise-comptable-ia", changefreq: "monthly", priority: "0.7" },
  // English
  { path: "/en", changefreq: "weekly", priority: "0.8" },
  { path: "/en/product", changefreq: "monthly", priority: "0.6" },
  { path: "/en/solutions", changefreq: "monthly", priority: "0.6" },
  { path: "/en/pricing", changefreq: "monthly", priority: "0.6" },
  { path: "/en/resources", changefreq: "weekly", priority: "0.5" },
  { path: "/en/about", changefreq: "monthly", priority: "0.4" },
  { path: "/en/demo", changefreq: "monthly", priority: "0.6" },
  { path: "/en/login", changefreq: "yearly", priority: "0.3" },
  { path: "/en/legal", changefreq: "yearly", priority: "0.2" },
  { path: "/en/privacy", changefreq: "yearly", priority: "0.2" },
  { path: "/en/terms", changefreq: "yearly", priority: "0.2" },
  // Blog (cabinet EC)
  { path: "/blog/creations-entreprises-france-2025", changefreq: "monthly", priority: "0.7" },
  { path: "/blog/cout-acquisition-client-cabinet-comptable", changefreq: "monthly", priority: "0.7" },
  { path: "/blog/icp-cabinet-expertise-comptable", changefreq: "monthly", priority: "0.7" },
  { path: "/blog/barometre-acquisition-cabinet-ec-2026", changefreq: "monthly", priority: "0.7" },
  { path: "/blog/observatoire-sasu-sas-juin-2026", changefreq: "monthly", priority: "0.7" },
  { path: "/blog/playbook-prospection-cabinet-ec-2026", changefreq: "monthly", priority: "0.7" },
  { path: "/blog/lexique-marketing-expert-comptable", changefreq: "monthly", priority: "0.6" },
  { path: "/blog/fichier-siret-vs-plan-action-comptable", changefreq: "monthly", priority: "0.7" },
  { path: "/blog/barometre-immatriculations-juillet-2026", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/moderniser-cabinet-etat-lieux-2026", changefreq: "monthly", priority: "0.8" },
  { path: "/blog/5-leviers-croissance-cabinet-expertise-comptable", changefreq: "monthly", priority: "0.7" },
];

function toXml(items: Entry[]) {
  const urls = items
    .map((e) =>
      [
        "  <url>",
        `    <loc>${BASE_URL}${e.path}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
        e.priority ? `    <priority>${e.priority}</priority>` : null,
        "  </url>",
      ]
        .filter(Boolean)
        .join("\n"),
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

writeFileSync(resolve("public/sitemap.xml"), toXml(entries));
console.log(`✓ sitemap.xml regenerated (${entries.length} URLs, lastmod=${today})`);