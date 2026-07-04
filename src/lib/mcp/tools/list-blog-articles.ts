import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const ARTICLES = [
  { slug: "creations-entreprises-france-2025", title: "Créations d'entreprises en France 2025", url: "https://eligibly.ai/blog/creations-entreprises-france-2025" },
  { slug: "cout-acquisition-client-cabinet-comptable", title: "Coût d'acquisition client pour un cabinet comptable", url: "https://eligibly.ai/blog/cout-acquisition-client-cabinet-comptable" },
  { slug: "icp-cabinet-expertise-comptable", title: "ICP d'un cabinet d'expertise comptable", url: "https://eligibly.ai/blog/icp-cabinet-expertise-comptable" },
  { slug: "barometre-acquisition-cabinet-ec-2026", title: "Baromètre acquisition cabinet EC 2026", url: "https://eligibly.ai/blog/barometre-acquisition-cabinet-ec-2026" },
  { slug: "observatoire-sasu-sas-juin-2026", title: "Observatoire SASU/SAS — juin 2026", url: "https://eligibly.ai/blog/observatoire-sasu-sas-juin-2026" },
  { slug: "playbook-prospection-cabinet-ec-2026", title: "Playbook prospection cabinet EC 2026", url: "https://eligibly.ai/blog/playbook-prospection-cabinet-ec-2026" },
  { slug: "lexique-marketing-expert-comptable", title: "Lexique marketing expert-comptable", url: "https://eligibly.ai/blog/lexique-marketing-expert-comptable" },
];

export default defineTool({
  name: "list_blog_articles",
  title: "List blog articles",
  description: "List Eligibly's published blog articles (title, slug, url) about acquisition, prospection and marketing for accounting firms.",
  inputSchema: {
    search: z.string().optional().describe("Optional case-insensitive substring to filter titles/slugs."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ search }) => {
    const q = search?.trim().toLowerCase();
    const items = q
      ? ARTICLES.filter((a) => a.title.toLowerCase().includes(q) || a.slug.includes(q))
      : ARTICLES;
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { articles: items },
    };
  },
});