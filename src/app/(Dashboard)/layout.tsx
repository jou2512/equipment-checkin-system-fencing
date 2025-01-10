"use client";

import { Suspense } from "react";
import { usePathname } from "next/navigation";
import { LoadingState } from "@/components/ui/loading-state";
import { cn } from "@/lib/utils";
import { MobileNavigation } from "@/components/navigation/mobile/mobile-navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

/**
 * Loading skeleton for dashboard content
 * Displays appropriate UI based on route type
 */
function DashboardLoadingSkeleton({ isAdminRoute }: { isAdminRoute: boolean }) {
  return (
    <div className="flex min-h-screen bg-background">
      {isAdminRoute ? (
        // Admin dashboard skeleton
        <div className="flex h-screen w-full">
          {/* Admin sidebar skeleton */}
          <div className="hidden lg:flex w-64 flex-col border-r animate-pulse">
            <div className="h-16 border-b bg-muted/10" />
            <div className="flex-1 p-4 space-y-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-10 rounded-md bg-muted/10" />
              ))}
            </div>
          </div>

          {/* Admin content skeleton */}
          <div className="flex-1">
            <div className="h-16 border-b bg-muted/10 flex items-center px-4">
              <div className="w-32 h-4 bg-muted/10 rounded" />
            </div>
            <div className="p-8 space-y-6">
              <div className="w-48 h-8 bg-muted/10 rounded" />
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="h-32 rounded-lg bg-muted/10" />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Regular dashboard skeleton
        <div className="flex flex-col w-full">
          <div className="flex-1 container mx-auto p-6 space-y-6">
            <div className="h-8 w-48 bg-muted/10 rounded" />
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-40 rounded-lg bg-muted/10" />
              ))}
            </div>
          </div>
          {/* Mobile navigation skeleton */}
          <div className="h-16 border-t bg-background fixed bottom-0 left-0 right-0 md:hidden">
            <div className="flex justify-around px-4 py-2">
              {Array.from({ length: 5 }).map((_, i) => (
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
 * Main dashboard layout component
 * Handles layout structure and navigation for all dashboard routes
 */
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  return (
    <div
      className={cn(
        "flex min-h-screen bg-background",
        isAdminRoute ? "flex-row" : "flex-col"
      )}
    >
      <Suspense
        fallback={<DashboardLoadingSkeleton isAdminRoute={!!isAdminRoute} />}
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
