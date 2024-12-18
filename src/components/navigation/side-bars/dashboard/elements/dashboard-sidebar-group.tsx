// components/nav-main.tsx
"use client";

import { useCallback, useState } from "react";
import { ChevronRight, type LucideIcon } from "lucide-react";
import { LoadingState } from "@/components/ui/loading-state";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useAdminNavigationContext } from "@/contexts/dashboard-navigation-context";

interface DashboardSidebarGroupProps {
  items: Array<{
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
    disabled?: boolean;
    items?: Array<{
      title: string;
      url: string;
    }>;
  }>;
  groupTitle?: string;
}

/**
 * Enhanced DashboardSidebarGroup component with loading states and navigation feedback
 */
export function DashboardSidebarGroup({
  items,
  groupTitle = "Platform",
}: DashboardSidebarGroupProps) {
  const { currentPath, navigateTo, isTransitioning } =
    useAdminNavigationContext();
  const [loadingItem, setLoadingItem] = useState<string | null>(null);

  /**
   * Handle navigation with loading states
   */
  const handleNavigation = useCallback(
    async (url: string, disabled?: boolean) => {
      if (disabled || url === currentPath) return;

      try {
        setLoadingItem(url);
        await navigateTo(url);
      } finally {
        setLoadingItem(null);
      }
    },
    [currentPath, navigateTo]
  );

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{groupTitle}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible key={item.url} asChild defaultOpen={item.isActive}>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild={!item.disabled}
                tooltip={item.title}
                onClick={() => handleNavigation(item.url, item.disabled)}
                className={cn(
                  "relative cursor-pointer transition-all duration-200",
                  item.disabled && "opacity-60 cursor-not-allowed",
                  currentPath === item.url &&
                    "bg-accent text-accent-foreground",
                  loadingItem === item.url && "opacity-80"
                )}
              >
                <div className="flex items-center w-full">
                  <item.icon className="mr-2 h-4 w-4" />
                  <span className="flex-1">{item.title}</span>
                  {loadingItem === item.url && (
                    <LoadingState size="sm" className="absolute right-2" />
                  )}
                </div>
              </SidebarMenuButton>

              {item.items?.length ? (
                <>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuAction
                      className={cn(
                        "transition-transform duration-200",
                        "data-[state=open]:rotate-90"
                      )}
                    >
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </SidebarMenuAction>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.url}>
                          <SidebarMenuSubButton
                            onClick={() => handleNavigation(subItem.url)}
                            className={cn(
                              "relative cursor-pointer",
                              currentPath === subItem.url &&
                                "bg-accent text-accent-foreground",
                              loadingItem === subItem.url && "opacity-80"
                            )}
                          >
                            <span className="flex-1">{subItem.title}</span>
                            {loadingItem === subItem.url && (
                              <LoadingState
                                size="sm"
                                className="absolute right-2"
                              />
                            )}
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              ) : null}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
