// lib/config/admin-navigation.ts
import { 
  LayoutDashboard, 
  Package, 
  Settings, 
  ClipboardCheck,
  Presentation,
  Users,
  Shield,
  LucideIcon
} from "lucide-react";

export interface AdminNavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  description?: string;
  disabled?: boolean;
  external?: boolean;
  badge?: string;
}

export interface AdminNavSection {
  title: string;
  items: AdminNavItem[];
}

export const adminNavConfig: AdminNavSection[] = [
  {
    title: "Overview",
    items: [
      {
        title: "Dashboard",
        href: "/admin",
        icon: LayoutDashboard,
        description: "Tournament and equipment status overview"
      }
    ]
  },
  {
    title: "Tournament Management",
    items: [
      {
        title: "Equipment Submission",
        href: "/admin/equipment-submission",
        icon: Package,
        description: "Handle equipment check-ins"
      },
      {
        title: "Equipment Management",
        href: "/admin/equipment-management",
        icon: Settings,
        description: "Configure equipment types and requirements"
      },
      {
        title: "Material Check",
        href: "/admin/material-check",
        icon: ClipboardCheck,
        description: "Perform equipment checks"
      },
      {
        title: "Status Display",
        href: "/admin/status-display",
        icon: Presentation,
        description: "Monitor check-in statuses"
      }
    ]
  },
  {
    title: "System",
    items: [
      {
        title: "Tournament Setup",
        href: "/admin/tournament-setup",
        icon: Settings,
        description: "Configure tournament settings"
      },
      {
        title: "User Management",
        href: "/admin/users",
        icon: Users,
        description: "Manage system users",
        disabled: true
      },
      {
        title: "Security",
        href: "/admin/security",
        icon: Shield,
        description: "Security settings and logs",
        disabled: true
      }
    ]
  }
];