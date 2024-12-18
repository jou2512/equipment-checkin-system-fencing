// lib/contexts/admin-navigation-context.tsx
import { useAdminNavigation } from "@/hooks/use-dashboard-navigation";
import { AdminNavigationContextValue } from "@/lib/types/navigation";
import { createContext, useContext, useMemo, type ReactNode } from "react";

const AdminNavigationContext =
  createContext<AdminNavigationContextValue | null>(null);

interface AdminNavigationProviderProps {
  children: ReactNode;
}

export function AdminNavigationProvider({
  children,
}: AdminNavigationProviderProps) {
  const navigation = useAdminNavigation();

  const contextValue = useMemo<AdminNavigationContextValue>(
    () => ({
      currentPath: navigation.currentPath,
      previousPath: navigation.previousPath,
      isTransitioning: navigation.isTransitioning,
      navigateTo: navigation.navigateTo,
      prefetchRoute: navigation.prefetchRoute,
      clearCache: navigation.clearCache,
    }),
    [navigation]
  );

  return (
    <AdminNavigationContext.Provider value={contextValue}>
      {children}
    </AdminNavigationContext.Provider>
  );
}

export function useAdminNavigationContext() {
  const context = useContext(AdminNavigationContext);
  if (!context) {
    throw new Error(
      "useAdminNavigationContext must be used within AdminNavigationProvider"
    );
  }
  return context;
}
