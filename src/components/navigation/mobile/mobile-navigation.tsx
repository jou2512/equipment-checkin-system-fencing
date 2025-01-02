"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useRef, useEffect } from "react";
import {
  Home,
  User,
  Award,
  LogOut,
  LucideIcon,
  Package,
  CheckSquare,
  Projector,
  BarChart,
  List,
  Tag,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/hooks/use-auth";

// Navigation configurations remain the same, just reorganized for visual clarity
const NAVIGATION_CONFIG = {
  profile: [
    { href: "/profile", icon: Home, label: "Home", requireAuth: false },
    {
      href: "/profile/account",
      icon: User,
      label: "Profile",
      requireAuth: true,
    },
    { href: "/profile/join", icon: Award, label: "Join", requireAuth: true },
  ],
  tournament: {
    participant: [
      { href: "dashboard", icon: Home, label: "Home", requireAuth: true },
      {
        href: "check-ins",
        icon: CheckSquare,
        label: "My Check-ins",
        requireAuth: true,
      },
      {
        href: "/profile/account",
        icon: User,
        label: "Profile",
        requireAuth: true,
      },
    ],
    "checkin-staff": [
      {
        href: "equipment-submission",
        icon: Tag,
        label: "Check-In",
        requireAuth: true,
      },
      {
        href: "status-checking",
        icon: CheckSquare,
        label: "Check",
        requireAuth: true,
      },
      {
        href: "pickup-management",
        icon: Package,
        label: "Pickup",
        requireAuth: true,
      },
      {
        href: "dashboard",
        icon: BarChart,
        label: "Dashboard",
        requireAuth: true,
      },
      { href: "submissions", icon: List, label: "List", requireAuth: true },
      {
        href: "display-board",
        icon: Projector,
        label: "Display",
        requireAuth: true,
      },
      {
        href: "/profile/account",
        icon: User,
        label: "Profile",
        requireAuth: true,
      },
    ],
  },
  admin: [],
};

interface NavItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
}

function NavItem({ href, icon: Icon, label, isActive }: NavItemProps) {
  const params = useParams();

  const fullHref =
    params.tournamentId && label !== "Profile"
      ? `/tournament/${params.tournamentId}/${params.role}/${href}`
      : href;

  return (
    <Link
      href={fullHref}
      className={cn(
        "flex flex-col items-center p-2 transition-colors min-w-[72px]",
        isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
      )}
    >
      <Icon className="h-5 w-5" />
      <span className="text-xs mt-1 whitespace-nowrap">{label}</span>
    </Link>
  );
}

export function MobileNavigation() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const params = useParams();
  const { user, isLoading, signOut } = useAuth();

  // Scroll to active item on mount and route change
  useEffect(() => {
    if (scrollRef.current) {
      const activeItem = scrollRef.current.querySelector(
        '[data-active="true"]'
      );
      if (activeItem) {
        const container = scrollRef.current;
        const scrollLeft =
          activeItem.offsetLeft -
          container.offsetWidth / 2 +
          activeItem.clientWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  }, [pathname]);

  // Determine route type and role
  const getRouteTypeAndRole = () => {
    if (pathname.startsWith("/admin")) return { type: "admin", role: null };
    if (pathname.startsWith("/tournament")) {
      const role = params.role as string;
      return { type: "tournament", role };
    }
    return { type: "profile", role: null };
  };

  const { type: routeType, role } = getRouteTypeAndRole();

  if (routeType === "admin") return null;

  if (isLoading) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t z-50">
        <div className="flex justify-around items-center h-16 px-2">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-10 w-10 rounded-full" />
            ))}
        </div>
      </div>
    );
  }

  const navItems =
    routeType === "tournament" && role
      ? NAVIGATION_CONFIG[routeType][role] ||
        NAVIGATION_CONFIG[routeType].participant
      : NAVIGATION_CONFIG[routeType] || [];

  const visibleItems = navItems.filter(
    (item) => !item.requireAuth || (item.requireAuth && user)
  );

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t z-50">
      <div
        ref={scrollRef}
        className="overflow-x-auto flex items-center h-16 scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="flex px-4 min-w-min">
          {visibleItems.map((item) => (
            <div
              key={item.href}
              data-active={
                pathname ===
                `/tournament/${params.tournamentId}/${params.role}/${item.href}`
              }
            >
              <NavItem
                href={item.href}
                icon={item.icon}
                label={item.label}
                isActive={
                  pathname ===
                  `/tournament/${params.tournamentId}/${params.role}/${item.href}`
                }
              />
            </div>
          ))}
          {user && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => signOut.mutate()}
              disabled={signOut.isPending}
              className="flex flex-col items-center p-2 h-auto min-w-[72px] text-muted-foreground hover:text-primary"
            >
              <LogOut className="h-5 w-5" />
              <span className="text-xs mt-1 whitespace-nowrap">
                {signOut.isPending ? "Signing out..." : "Sign out"}
              </span>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}