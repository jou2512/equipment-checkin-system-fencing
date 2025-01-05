// src/app/(Dashboard)/admin/layout.tsx
"use client";

import { Suspense, useEffect } from "react";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { AdminBreadcrumb } from "@/components/admin/admin-breadcrumb";
import { Toaster } from "@/components/ui/toaster";
import { AdminNavigationProvider } from "@/contexts/dashboard-navigation-context";
import { ActivityLogSheet } from "@/components/activity-log/activity-log-sheet";
import { ModeToggle } from "@/components/shared/theme-toggle";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { LoadingState } from "@/components/ui/loading-state";
import { useAuth } from "@/hooks/use-auth";
import { DashboardSidebar } from "@/components/navigation/side-bars/dashboard/dashboard-sidebar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

/**
 * Loading skeleton component for admin layout
 */
function AdminLoadingSkeleton() {
  return (
    <div className="flex h-screen bg-background">
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
  );
}

/**
 * Error boundary component for admin layout
 */
function AdminErrorBoundary({ error }: { error: Error }) {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      variant: "destructive",
      title: "Error",
      description: error.message,
    });
  }, [error, toast]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold text-destructive">
          Something went wrong
        </h1>
        <p className="text-muted-foreground">{error.message}</p>
      </div>
    </div>
  );
}

/**
 * Admin layout component
 * Handles authentication, routing, and layout structure for admin pages
 */
export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();
  const { toast } = useToast();
  const { user, isLoading, error } = useAuth();

  // Authentication check for admin access
  useEffect(() => {
    if (!isLoading && !user) {
      toast({
        variant: "destructive",
        title: "Access Denied",
        description: "Please sign in to access the admin area",
      });
      router.push("/login");
      return;
    }

    // Check for admin role in preferences
    if (user && !user.labels.includes("admin")) {
      toast({
        variant: "destructive",
        title: "Unauthorized",
        description: "You don't have permission to access this area",
      });
      router.push("/profile");
    }
  }, [user, isLoading, router, toast]);

  // Handle loading state
  if (isLoading) {
    return <AdminLoadingSkeleton />;
  }

  // Handle authentication error
  if (error) {
    return <AdminErrorBoundary error={error} />;
  }

  // Handle unauthorized access
  if (!user || !user.labels.includes("admin")) {
    return null;
  }

  return (
    <AdminNavigationProvider>
      <SidebarProvider>
        <div className="flex h-screen overflow-hidden bg-background w-screen">
          <DashboardSidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <SidebarInset>
              {/* Header Section */}
              <header className="flex h-16 shrink-0 items-center gap-2 justify-between border-b px-4">
                <div className="flex items-center gap-2">
                  <SidebarTrigger className="-ml-1" />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  <AdminBreadcrumb />
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <ModeToggle />
                </div>
              </header>

              {/* Main Content Section */}
              <div className="flex-1 flex flex-col overflow-hidden">
                <Suspense
                  fallback={
                    <div className="flex items-center justify-center h-full">
                      <LoadingState size="lg" />
                    </div>
                  }
                >
                  <main className="flex-1 overflow-y-auto p-8">{children}</main>
                </Suspense>
              </div>
            </SidebarInset>
          </div>
        </div>
        <Toaster />
      </SidebarProvider>
    </AdminNavigationProvider>
  );
}
