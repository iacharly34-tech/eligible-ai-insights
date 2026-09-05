import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { ROUTE_META } from "@/lib/route-meta";

/** Source unique de vérité : les routes réellement rendues côté serveur. */
const ARTICLES = Object.entries(ROUTE_META)
  .filter(([path]) => path.startsWith("/blog/"))
  .map(([path, meta]) => ({
    slug: path.replace("/blog/", ""),
    title: meta.title,
    description: meta.description,
    url: `https://eligibly.ai${path}`,
  }))
  .sort((a, b) => a.slug.localeCompare(b.slug));

export default defineTool({
  name: "list_blog_articles",
  title: "List blog articles",
  description: "List Eligibly's published blog articles (title, slug, description, url) about acquisition, prospection and marketing for accounting firms.",
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
      structuredContent: { articles: items, count: items.length },
    };
  },
});
