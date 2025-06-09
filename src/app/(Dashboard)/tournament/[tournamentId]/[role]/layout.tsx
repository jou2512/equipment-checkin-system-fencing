"use client";

import { Suspense } from "react";
import { useParams } from "next/navigation";
import { ParticipantNavigation } from "@/components/navigation/mobile/participant-nav";
import { CheckinStaffNavigation } from "@/components/navigation/mobile/checkin-staff-nav";

type TournamentRole = "participant" | "checkin-staff";

interface TournamentLayoutProps {
  children: React.ReactNode;
}

/**
 * Loading skeleton for tournament layout
 * 
 * This component displays a placeholder UI while the actual tournament content is being loaded.
 * It includes a navigation skeleton at the bottom and content placeholders in the main area.
 * 
 * @returns {JSX.Element} A React component representing the loading skeleton for the tournament layout.
 */
function TournamentLoadingSkeleton() {
  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Navigation Skeleton */}
      <div className="h-16 border-t fixed bottom-0 left-0 right-0 bg-background md:relative">
        <div className="flex justify-around items-center h-full px-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-full bg-muted/10 animate-pulse"
            />
          ))}
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="flex-1 p-4 space-y-4">
        <div className="h-8 w-48 bg-muted/10 rounded animate-pulse" />
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-32 rounded-lg bg-muted/10 animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
}


/**
 * Get navigation component based on role
 */
function getNavigationComponent(role: TournamentRole) {
  const navigationComponents: Record<TournamentRole, React.ComponentType> = {
    participant: ParticipantNavigation,
    "checkin-staff": CheckinStaffNavigation,
  };

  return navigationComponents[role] || ParticipantNavigation;
}

/**
 * Tournament layout component
 * Handles layout structure and role-based navigation for tournament routes
 */
export default function TournamentLayout({ children }: TournamentLayoutProps) {
  const params = useParams();
  const role = params?.role as TournamentRole;

  // Get the appropriate navigation component for the role
  const NavigationComponent = getNavigationComponent(role);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Main Content */}
      <Suspense fallback={<TournamentLoadingSkeleton />}>
        <main className="flex-1 overflow-y-auto pb-16 md:pb-0">{children}</main>
      </Suspense>

      {/* Role-based Navigation */}
      <NavigationComponent />
    </div>
  );
}
