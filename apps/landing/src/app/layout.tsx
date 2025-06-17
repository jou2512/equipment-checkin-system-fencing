import type React from "react";
// Server-safe utilities aus dem main entry point
import { cn } from "@fecs/ui";
import { ClientProviders } from "@/providers/client-providers";
import "./globals.css";
import { ClientLayoutWrapper } from "@/components/layouts/client-layout-wrapper";

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

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          "flex flex-col"
        )}
      >
        {<ClientProviders>
          <div className="relative flex min-h-screen flex-col">
            <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
          </div>
        </ClientProviders>}
      </body>
    </html>
  );
}
