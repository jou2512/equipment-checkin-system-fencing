// components/docs-sidebar-nav.tsx
"use client"

import { useRouter, usePathname } from "next/navigation";
import { useState, useTransition } from "react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

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

  const handleNavigation = (href: string) => {
    startTransition(() => {
      router.push(href);
    });
  };

  return (
    <ScrollArea className="h-full py-6 pr-6 lg:py-8">
      <div className="w-full">
        {items.map((item, index) => (
          <div key={index} className="pb-4">
            <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
              {item.title}
            </h4>
            {item?.items?.length && (
              <div className="grid grid-flow-row auto-rows-max text-sm">
                {item.items.map((subItem, subIndex) => {
                  const isActive = pathname === subItem.href;

                  if (!subItem.disabled && subItem.href) {
                    return (
                      <button
                        key={subIndex}
                        onClick={() => handleNavigation(subItem.href!)}
                        disabled={isPending}
                        className={cn(
                          "flex w-full items-center rounded-md p-2 hover:underline",
                          {
                            "bg-muted": isActive,
                            "cursor-not-allowed opacity-60": isPending,
                          }
                        )}
                      >
                        {subItem.title}
                        {isPending && isActive && (
                          <span className="ml-2">Loading...</span>
                        )}
                      </button>
                    );
                  }

                  return (
                    <span
                      key={subIndex}
                      className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60"
                    >
                      {subItem.title}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
