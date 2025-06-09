"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useTransition, useCallback, Fragment } from "react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2 } from "lucide-react";

interface DocumentationSidebarNavItem {
  title: string;
  disabled?: boolean;
  external?: boolean;
  href?: string;
  items?: DocumentationSidebarNavItem[];
}

interface DocumentationSidebarProps {
  items: DocumentationSidebarNavItem[];
}

export function DocumentationSidebar({ items }: DocumentationSidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleNavigation = useCallback(
    (href: string, external?: boolean) => {
      if (external) {
        window.open(href, "_blank", "noopener,noreferrer");
        return;
      }

      setActiveItem(href);
      startTransition(() => {
        router.push(href);
      });
    },
    [router]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, href: string, external?: boolean) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleNavigation(href, external);
      }
    },
    [handleNavigation]
  );

  const renderNavItem = useCallback(
    (subItem: DocumentationSidebarNavItem, index: number) => {
      const isActive = pathname === subItem.href;
      const isLoading = isPending && activeItem === subItem.href;

      if (!subItem.disabled && subItem.href) {
        return (
          <button
            key={index}
            onClick={() => handleNavigation(subItem.href!, subItem.external)}
            onKeyDown={(e) => handleKeyDown(e, subItem.href!, subItem.external)}
            disabled={isPending}
            className={cn(
              "flex w-full items-center rounded-md p-2",
              "hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-ring focus-visible:ring-offset-2",
              {
                "bg-muted font-medium": isActive,
                "cursor-not-allowed opacity-60": isPending,
              }
            )}
            role="menuitem"
            aria-current={isActive ? "page" : undefined}
          >
            <span className="flex-grow truncate">
              {subItem.title}
              {subItem.external && (
                <span className="ml-1 text-muted-foreground">↗</span>
              )}
            </span>
            {isLoading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
          </button>
        );
      }

      return (
        <span
          key={index}
          className={cn(
            "flex w-full cursor-not-allowed items-center rounded-md p-2",
            "opacity-60"
          )}
          role="menuitem"
          aria-disabled="true"
        >
          {subItem.title}
        </span>
      );
    },
    [pathname, isPending, activeItem, handleNavigation, handleKeyDown]
  );

  return (
    <ScrollArea className="h-full py-6 pr-6 lg:py-8">
      <nav className="w-full" role="navigation" aria-label="Documentation">
        {items.map((item, index) => (
          <Fragment key={index}>
            <div className="pb-4">
              <h2
                className="mb-1 rounded-md px-2 py-1 text-sm font-semibold"
                id={`nav-group-${index}`}
              >
                {item.title}
              </h2>
              {item?.items?.length && (
                <div
                  className="grid grid-flow-row auto-rows-max text-sm"
                  role="menu"
                  aria-labelledby={`nav-group-${index}`}
                >
                  {item.items.map((subItem, subIndex) =>
                    renderNavItem(subItem, subIndex)
                  )}
                </div>
              )}
            </div>
            {index < items.length - 1 && <div className="mb-4 border-b" />}
          </Fragment>
        ))}
      </nav>
    </ScrollArea>
  );
}
