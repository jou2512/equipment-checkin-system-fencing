// src/app/(public)/public_tournament/[tournamentId]/layout.tsx
"use client";

import { Suspense } from "react";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LoadingState } from "@/components/ui/loading-state";
import { Tag, List, Projector, LucideIcon } from "lucide-react";

const PUBLIC_ROUTES = [
  {
    href: "equipment-submission",
    icon: Tag,
    label: "Check-In",
  },
  {
    href: "submissions",
    icon: List,
    label: "List",
  },
  {
    href: "display-board",
    icon: Projector,
    label: "Display",
  },
];

interface NavItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
}

function NavItem({ href, icon: Icon, label, isActive }: NavItemProps) {
  const params = useParams();
  const tournamentId = params?.tournamentId
  const fullHref = `/public_tournament/${tournamentId}/${href}`;

  return (
    <Link
      href={fullHref}
      className={cn(
        "flex items-center px-4 py-2 rounded-md transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"
      )}
    >
      <Icon className="h-5 w-5 mr-3" />
      <span>{label}</span>
    </Link>
  );
}

function PublicNavigation() {
  const pathname = usePathname();
  const params = useParams();
  const tournamentId = params?.tournamentId;

  const isRouteActive = (route: string) => {
    return pathname === `/public_tournament/${tournamentId}/${route}`;
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-col space-y-1 w-64 p-4">
        {PUBLIC_ROUTES.map((item) => (
          <NavItem
            key={item.href}
            {...item}
            isActive={isRouteActive(item.href)}
          />
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t z-50">
        <div className="flex justify-around items-center h-16">
          {PUBLIC_ROUTES.map((item) => {
            const isActive = isRouteActive(item.href);
            const fullHref = `/public_tournament/${tournamentId}/${item.href}`;

            return (
              <Link
                key={item.href}
                href={fullHref}
                className={cn(
                  "flex flex-col items-center p-2 min-w-[72px]",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

function PublicLayoutSkeleton() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar Skeleton */}
      <div className="hidden md:flex w-64 border-r animate-pulse">
        <div className="w-full p-4 space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-10 rounded-md bg-muted/10" />
          ))}
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="flex-1 p-4">
        <div className="h-8 w-48 bg-muted/10 rounded mb-6" />
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-40 rounded-lg bg-muted/10" />
          ))}
        </div>
      </div>

      {/* Mobile Navigation Skeleton */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t">
        <div className="flex justify-around items-center h-16 px-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-10 h-10 rounded-full bg-muted/10" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PublicTournamentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Navigation */}
      <PublicNavigation />

      {/* Main Content */}
      <main className="flex-1 pb-16 md:pb-0">
        <Suspense
          fallback={
            <PublicLayoutSkeleton />
          }
        >
          {children}
        </Suspense>
      </main>
    </div>
  );
}
