import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "submit_lead",
  title: "Submit a demo/pilot lead",
  description: "Submit a lead requesting a demo or the free 14-day pilot of Eligibly. Sends the request to the Eligibly team.",
  inputSchema: {
    full_name: z.string().min(2).describe("Contact full name."),
    email: z.string().email().describe("Professional email address."),
    firm_name: z.string().min(1).describe("Accounting firm name."),
    phone: z.string().optional().describe("Optional phone number."),
    message: z.string().optional().describe("Optional context or question."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: true },
  handler: async ({ full_name, email, firm_name, phone, message }) => {
    const supabaseUrl = process.env.SUPABASE_URL;
    if (!supabaseUrl) {
      return { content: [{ type: "text", text: "Server not configured (SUPABASE_URL missing)." }], isError: true };
    }
    try {
      const res = await fetch(`${supabaseUrl}/functions/v1/submit-lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ full_name, email, firm_name, phone, message, source: "mcp" }),
      });
      const text = await res.text();
      if (!res.ok) {
        return { content: [{ type: "text", text: `Lead submission failed (${res.status}): ${text}` }], isError: true };
      }
      return {
        content: [{ type: "text", text: "Lead submitted. Eligibly's team will get in touch shortly." }],
        structuredContent: { ok: true },
      };
    } catch (err) {
      return { content: [{ type: "text", text: `Lead submission error: ${(err as Error).message}` }], isError: true };
    }
  },
});