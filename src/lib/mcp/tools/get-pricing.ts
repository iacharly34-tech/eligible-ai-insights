import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_pricing",
  title: "Get Eligibly pricing",
  description: "Return Eligibly's current public pricing for accounting firms (single plan + free pilot).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const pricing = {
      plan: "Eligibly Cabinet",
      price_eur_ht_per_month: 290,
      billing: "monthly",
      pilot: { free: true, duration_days: 14, credit_card_required: false },
      commitment: "Sans engagement",
      url: "https://eligibly.ai/tarifs",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(pricing, null, 2) }],
      structuredContent: pricing,
    };
  },
});