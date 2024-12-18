// components/admin/admin-nav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AdminNavItem,
  AdminNavSection,
  adminNavConfig,
} from "@/config/admin-navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface AdminNavProps {
  isCollapsed?: boolean;
}

export function AdminNav({ isCollapsed }: AdminNavProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4">
      {adminNavConfig.map((section, index) => (
        <div key={section.title} className="flex flex-col gap-2">
          {!isCollapsed && (
            <h4 className="text-sm font-semibold text-muted-foreground px-2">
              {section.title}
            </h4>
          )}
          <nav className="grid gap-1">
            {section.items.map((item, itemIndex) => (
              <TooltipProvider key={item.href}>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.disabled ? "#" : item.href}
                      className={cn(
                        "group relative flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                        pathname === item.href &&
                          "bg-accent text-accent-foreground",
                        item.disabled && "pointer-events-none opacity-60"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && (
                        <>
                          <span className="flex-1 truncate">{item.title}</span>
                          {item.badge && (
                            <Badge variant="secondary" className="ml-auto">
                              {item.badge}
                            </Badge>
                          )}
                        </>
                      )}
                    </Link>
                  </TooltipTrigger>
                  {isCollapsed && (
                    <TooltipContent
                      side="right"
                      className="flex items-center gap-4"
                    >
                      {item.title}
                      {item.description && (
                        <span className="text-muted-foreground">
                          {item.description}
                        </span>
                      )}
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            ))}
          </nav>
          {index < adminNavConfig.length - 1 && !isCollapsed && (
            <Separator className="my-2" />
          )}
        </div>
      ))}
    </div>
  );
}
