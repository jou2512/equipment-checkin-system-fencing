"use client";

import type React from "react";
// Importieren Sie Client Components aus dem client-only Entry Point
import { ThemeProvider, Toaster } from "@fecs/ui/client-only";

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
