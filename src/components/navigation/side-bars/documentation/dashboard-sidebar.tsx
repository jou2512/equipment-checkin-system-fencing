// components/admin/app-sidebar.tsx
"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { ADMIN_ROUTES } from "@/config/admin-routes";
import { NavUser } from "../../nav-user";
import { DashboardSidebarGroup } from "../dashboard/elements/dashboard-sidebar-group";
import { TournamentSwitcher } from "../../tournament-switcher";

export interface DashboardSidebarProps extends React.ComponentProps<typeof Sidebar> {
  // Add any additional props if needed
}

export function DashboardSidebar({ ...props }: DashboardSidebarProps) {
  const pathname = usePathname();

  // Update active states based on current path
  const routes = React.useMemo(() => {
    return ADMIN_ROUTES.map((group) => ({
      ...group,
      items: group.items.map((item) => ({
        ...item,
        isActive: pathname === item.url,
      })),
    }));
  }, [pathname]);

  const userData = {
    name: "Admin",
    email: "joel22@gmx.ch",
    avatar: "/avatars/shadcn.jpg",
  };

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <TournamentSwitcher />
      </SidebarHeader>
      <SidebarContent>
        {routes.map((group) => (
          <DashboardSidebarGroup key={group.title} items={group.items} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
    </Sidebar>
  );
}
