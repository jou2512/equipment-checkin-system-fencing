import { type LucideIcon } from "lucide-react";

interface AdminRouteItem {
  title: string;
  url: string;
  icon: LucideIcon;
  description?: string;
  isActive?: boolean;
  disabled?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
}
export interface AdminRouteGroup {
  title: string;
  items: AdminRouteItem[];
}
