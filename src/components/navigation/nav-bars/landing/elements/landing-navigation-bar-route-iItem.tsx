"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LandingNavigationBarRouteItem } from "@/lib/types/landing-navigation-bar";

export function LandingNavigationBarRouteItems({
  items,
}: {
  items: LandingNavigationBarRouteItem[];
}) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-4">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href ? "text-foreground" : "text-foreground/60"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
