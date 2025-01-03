// src/app/(dashboard)/layout.tsx
"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { LoadingState } from "@/components/ui/loading-state";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/use-auth";
import { MobileNavigation } from "@/components/navigation/mobile/mobile-navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

/**
 * Loading skeleton for dashboard layout
 * Displays appropriate loading UI based on route type
 */
function DashboardLoadingSkeleton({ isAdminRoute }: { isAdminRoute: boolean }) {
  return (
    <div className="flex min-h-screen bg-background">
      {isAdminRoute ? (
        // Admin loading skeleton
        <div className="flex h-screen w-full">
          {/* Sidebar skeleton */}
          <div className="hidden lg:flex w-64 flex-col border-r animate-pulse">
            <div className="h-16 border-b bg-muted/10" />
            <div className="flex-1 p-4 space-y-4">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="h-10 rounded-md bg-muted/10" />
                ))}
            </div>
          </div>

          {/* Main content skeleton */}
          <div className="flex-1">
            <div className="h-16 border-b bg-muted/10 flex items-center px-4">
              <div className="w-32 h-4 bg-muted/10 rounded" />
            </div>
            <div className="p-8 space-y-6">
              <div className="w-48 h-8 bg-muted/10 rounded" />
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="h-32 rounded-lg bg-muted/10" />
                  ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Profile/regular route loading skeleton
        <div className="flex flex-col w-full">
          <div className="flex-1 container mx-auto p-6 space-y-6">
            <div className="h-8 w-48 bg-muted/10 rounded" />
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="h-40 rounded-lg bg-muted/10" />
                ))}
            </div>
          </div>
          {/* Mobile navigation skeleton */}
          <div className="h-16 border-t bg-background fixed bottom-0 left-0 right-0 md:hidden">
            <div className="flex justify-around px-4 py-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-muted/10" />
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Error boundary component for dashboard layout
 * Displays error messages and provides feedback
 */
function DashboardErrorBoundary({ error }: { error: Error }) {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      variant: "destructive",
      title: "Error",
      description: error.message,
    });
  }, [error, toast]);

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="text-center space-y-4 max-w-md">
        <h1 className="text-2xl font-bold text-destructive">
          Something went wrong
        </h1>
        <p className="text-muted-foreground">{error.message}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

/**
 * Main dashboard layout component
 * Handles routing, authentication, and layout structure for all dashboard routes
 */
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();
  const { user, isLoading, error } = useAuth();

  const isAdminRoute = pathname?.startsWith("/admin");
  const isOpenRoute = pathname?.startsWith("/public_");

  // Handle loading state
  if (isLoading) {
    return <DashboardLoadingSkeleton isAdminRoute={isAdminRoute ?? true} />;
  }

  // Handle authentication error
  if (error) {
    return <DashboardErrorBoundary error={error} />;
  }

  // Handle unauthorized access
  if (
    (!user ||
    isAdminRoute && !user.labels.includes("admin")) && !isOpenRoute)
  {
    router.push("/login");
    return null;
  }

  return (
    <div
      className={cn(
        "flex min-h-screen bg-background",
        isAdminRoute ? "flex-row" : "flex-col"
      )}
    >
      <Suspense
        fallback={
          <div className="flex items-center justify-center flex-1">
            <LoadingState size="lg" />
          </div>
        }
      >
        {/* Main content */}
        <main
          className={cn(
            "flex-1",
            !isAdminRoute && "pb-16 md:pb-0" // Add padding for mobile navigation
          )}
        >
          {children}
        </main>

        {/* Show mobile navigation only for non-admin routes */}
        {!isAdminRoute && <MobileNavigation />}
      </Suspense>
    </div>
  );
}
