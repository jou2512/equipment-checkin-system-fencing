// app/layout.tsx
import { cn } from "@/lib/utils";
import { ClientProviders } from "@/providers/client-providers";
import "../globals.css";

// Metadata configuration
export const metadata = {
  title: {
    default: "FECS - Fencing Equipment Check System",
    template: "%s | FECS",
  },
  description: "Professional equipment checking system for fencing tournaments",
  keywords: ["fencing", "equipment", "tournament", "check system"],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          "flex flex-col"
        )}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
