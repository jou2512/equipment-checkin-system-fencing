// apps/landing/src/lib/types/documentation-sidebar.ts

export interface SidebarNavItem {
  title: string;
  disabled?: boolean;
  external?: boolean;
  href?: string;
  items?: SidebarNavItem[]; // Nested structure
}
