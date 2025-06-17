// apps/landing/src/lib/validation/support-schema.ts
import { z } from "zod";

export const SupportFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type SupportFormData = z.infer<typeof SupportFormSchema>;
