import { SidebarNavItem } from "@/lib/types/documentation-sidebar";


interface DocsConfig {
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/documentation",
        },
        {
          title: "Installation",
          href: "/documentation/installation",
        },
      ],
    },
    {
      title: "Features",
      items: [
        {
          title: "Equipment Check Flow",
          href: "/documentation/equipment-check-flow",
        },
        {
          title: "Status Tracking",
          href: "/documentation/status-tracking",
        },
      ],
    },
    {
      title: "API Reference",
      items: [
        {
          title: "Introduction",
          href: "/documentation/api-reference",
        },
        {
          title: "Authentication",
          href: "/documentation/api-reference/authentication",
        },
      ],
    },
  ],
};