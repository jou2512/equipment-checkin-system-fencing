"use client";

import { Suspense } from "react";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { AdminBreadcrumb } from "@/components/admin/admin-breadcrumb";
import { Toaster } from "@/components/ui/toaster";
import { ModeToggle } from "@/components/shared/theme-toggle";
import { LoadingState } from "@/components/ui/loading-state";
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
          {Array.from({ length: 6 }).map((_, i) => (
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
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-32 rounded-lg bg-muted/10" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Admin layout component that provides the structure for admin pages
 * Authentication and routing are handled by middleware
 */
export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden bg-background w-screen">
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <SidebarInset>
            {/* Header */}
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

            {/* Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
              <Suspense
                fallback={
                  <div className="flex-1 flex items-center justify-center">
                    <LoadingState size="lg" />
                  </div>
                }
              >
                <main className="flex-1 overflow-y-auto p-8">
                  <Suspense fallback={<AdminLoadingSkeleton />}>
                    {children}
                  </Suspense>
                </main>
              </Suspense>
            </div>
          </SidebarInset>
        </div>
      </div>
      <Toaster />
    </SidebarProvider>
  );
}
