"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState, useEffect } from "react";
import { AdminNavigationProvider } from "@/contexts/dashboard-navigation-context";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { useInitAuth } from "@/hooks/use-auth";
import { TournamentProvider } from "@/contexts/tournament-context";

interface ClientProvidersProps {
  children: React.ReactNode;
}

function AuthInitializer({ children }: { children: React.ReactNode }) {
  useInitAuth();
  return <>{children}</>;
}

export function ClientProviders({ children }: ClientProvidersProps) {
  const [queryClient] = useState(() => new QueryClient());


  // NOTE The Client Provider is FInished
  return (
    <QueryClientProvider client={queryClient}>
      <AdminNavigationProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthInitializer>
            <TournamentProvider>
              {children}
              <Toaster />
              <ReactQueryDevtools initialIsOpen={false} />
            </TournamentProvider>
          </AuthInitializer>
        </ThemeProvider>
      </AdminNavigationProvider>
    </QueryClientProvider>
  );
}
