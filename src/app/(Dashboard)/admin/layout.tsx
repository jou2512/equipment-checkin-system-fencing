// app/admin/layout.tsx
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
import { AdminNavigationProvider } from "@/contexts/dashboard-navigation-context";
import { DashboardSidebar } from "@/components/navigation/side-bars/documentation/dashboard-sidebar";
import { ActivityLogSheet } from "@/components/activity-log/activity-log-sheet";
import { ModeToggle } from "@/components/shared/theme-toggle";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <AdminNavigationProvider>
      <SidebarProvider>
        <DashboardSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 justify-between px-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <AdminBreadcrumb />
            </div>
            <div className="ml-auto flex gap-2">
              <ModeToggle />
              <ActivityLogSheet />
            </div>
          </header>

          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <Suspense fallback={<div>Loading...</div>}>
              <main className="flex-1 overflow-y-auto p-8">{children}</main>
            </Suspense>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </AdminNavigationProvider>
  );
}
