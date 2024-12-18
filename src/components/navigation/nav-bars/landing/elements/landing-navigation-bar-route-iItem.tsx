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
    <div className="mr-4 hidden md:flex absolute left-1/2 transform -translate-x-1/2">
      <nav className="flex items-center gap-6 text-lg">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === item.href ? "text-foreground" : "text-foreground/60"
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
