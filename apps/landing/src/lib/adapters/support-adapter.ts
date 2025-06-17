// apps/landing/src/lib/adapters/support-adapter.ts
import { SupportFormData } from "@/lib/validation/support-schema";

export async function sendSupportEmail(data: SupportFormData): Promise<void> {
  // FIXME: Implement actual support email logic using Resend, SendGrid, etc.
  console.log("Sending support email with data:", data);

  // Simulate delay
  await new Promise((res) => setTimeout(res, 1000));

  // Simulate error for testing:
  // throw new Error("Simulated email failure");
}
