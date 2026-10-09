import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const inquirySchema = z.object({
  organization: z.string().trim().min(1, "Organization is required").max(150),
  contact_name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  fleet_size: z.string().trim().max(40).optional().or(z.literal("")),
  project_needs: z.string().trim().min(10, "Tell us a little more (10+ characters)").max(2000),
  website: z.string().max(0).optional(), // honeypot
});

export type Inquiry = z.infer<typeof inquirySchema>;

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((d) => inquirySchema.parse(d))
  .handler(async ({ data }) => {
    if (data.website) return { ok: true };
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { website: _w, ...row } = data;
    const { error } = await supabaseAdmin.from("partnership_inquiries").insert({
      ...row,
      phone: row.phone || null,
      fleet_size: row.fleet_size || null,
    });
    if (error) throw new Error("Could not submit inquiry");
    return { ok: true };
  });
