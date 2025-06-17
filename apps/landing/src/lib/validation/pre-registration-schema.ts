// apps/landing/src/lib/validation/pre-registration-schema.ts

import { z } from "zod";

export const PreRegistrationSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  nationalityCode: z
    .string()
    .length(3, "Nationality code must be 3 letters")
    .regex(/^[A-Z]{3}$/, "Nationality code must be uppercase"),
  weapon: z.enum(["epee", "foil", "sabre"]),
  agreeTerms: z.boolean().refine((val) => val, "You must agree to the terms"),
  clubName: z.string().optional(),
});

export type PreRegistrationFormData = z.infer<typeof PreRegistrationSchema>;
