// types/nav.ts
export interface SidebarNavItem {
  title: string;
  disabled?: boolean;
  external?: boolean;
  href?: string;
  icon?: string;
  label?: string;
  items?: SidebarNavItem[];
}