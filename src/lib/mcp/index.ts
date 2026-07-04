import { defineMcp } from "@lovable.dev/mcp-js";
import listBlogArticles from "./tools/list-blog-articles";
import getPricing from "./tools/get-pricing";
import submitLead from "./tools/submit-lead";

export default defineMcp({
  name: "eligibly-mcp",
  title: "Eligibly MCP",
  version: "0.1.0",
  instructions:
    "Tools for Eligibly, the prospecting CRM for French accounting firms targeting freshly registered SASU/SAS. Use `get_pricing` for current pricing, `list_blog_articles` to surface Eligibly's published resources, and `submit_lead` to book a demo or the free 14-day pilot.",
  tools: [listBlogArticles, getPricing, submitLead],
});