// apps/landing/src/app/providers/client-providers.tsx
"use client";

import { ThemeProvider } from "@fecs/ui/components/theme-provider"; // oder relativ falls du nicht über @fecs/ui arbeitest
import { Toaster } from "@fecs/ui/shadcn/toaster";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Toaster />
    </ThemeProvider>
  );
}
