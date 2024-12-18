// components/admin/admin-breadcrumb.tsx
"use client";

import { useMemo } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { ADMIN_ROUTE_TITLES } from "@/config/admin-routes";
import { useAdminNavigationContext } from "@/contexts/dashboard-navigation-context";

export function AdminBreadcrumb() {
  const { currentPath } = useAdminNavigationContext();

  const segments = useMemo(() => {
    const parts = currentPath.split("/").filter(Boolean);
    return parts.reduce((acc, part, index) => {
      const path = "/" + parts.slice(0, index + 1).join("/");
      acc.push({
        title: ADMIN_ROUTE_TITLES[path] || part,
        href: path,
        isCurrentPage: index === parts.length - 1,
      });
      return acc;
    }, [] as Array<{ title: string; href: string; isCurrentPage: boolean }>);
  }, [currentPath]);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, index) => (
          <BreadcrumbItem key={segment.href}>
            {!segment.isCurrentPage ? (
              <>
                <BreadcrumbLink
                  href={segment.href}
                  className="text-sm font-medium"
                >
                  {segment.title}
                </BreadcrumbLink>
                <BreadcrumbSeparator />
              </>
            ) : (
              <BreadcrumbPage className="text-sm font-medium">
                {segment.title}
              </BreadcrumbPage>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
