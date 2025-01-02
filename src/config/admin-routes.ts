// lib/config/admin-routes.ts
import { AdminRouteGroup } from "@/lib/types/dashboard-sidebar";
import { 
  SquareTerminal, 
  Settings,
  CheckSquare,
  Projector,
  LifeBuoy,
  Send,
  FileCog,
  List,
  Tag,
  FileKey} from "lucide-react";

export const ADMIN_ROUTES: AdminRouteGroup[] = [
  {
    title: "Platform",
    items: [
      {
        title: "Dashboard",
        url: "/admin",
        icon: SquareTerminal,
        isActive: true
      },
      {
        title: "Event Setup",
        url: "/admin/tournament-setup",
        icon: Settings
      },
      {
        title: "Item CheckIn",
        url: "/admin/equipment-submission",
        icon: Tag
      },
      {
        title: "Submissions",
        url: "/admin/submissions",
        icon: List
      },
      {
        title: "General Configurations",
        url: "/admin/equipment-management",
        icon: FileCog
      },
      {
        title: "Status Checking",
        url: "/admin/status-checking",
        icon: CheckSquare
      },
      {
        title: "Status Display",
        url: "/admin/status-display",
        icon: Projector
      },
      {
        title: "Permissions",
        url: "/admin/permissions",
        icon: FileKey 
      }
    ]
  },
  {
    title: "Support",
    items: [
      {
        title: "Support",
        url: "/admin/support",
        icon: LifeBuoy,
        disabled: true
      },
      {
        title: "Feedback",
        url: "/admin/feedback",
        icon: Send,
        disabled: true
      }
    ]
  }
];

// Type-safe route mapping
export const ADMIN_ROUTE_TITLES: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/tournament-setup": "Tournament Setup",
  "/admin/equipment-submission": "Equipment Submission",
  "/admin/status-checking": "Status Checking",
  "/admin/status-display": "Status Display",
} as const;