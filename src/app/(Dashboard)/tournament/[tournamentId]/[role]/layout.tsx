// src/app/tournament/[tournamentId]/[role]/layout.tsx
"use client";

import { useParams } from "next/navigation";
import {
  TOURNAMENT_ROLES,
  TournamentRoleType,
} from "@/hooks/use-tournament-invitations";

import { ParticipantNavigation } from "@/components/navigation/mobile/participant-nav";
import { CheckinStaffNavigation } from "@/components/navigation/mobile/checkin-staff-nav";

export default function TournamentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const role = params.role as TournamentRoleType;

  // Render different navigation based on role
  const NavigationComponent =
    {
      participant: ParticipantNavigation,
      "checkin-staff": CheckinStaffNavigation,
    }[role] || ParticipantNavigation;

  return (
    <div className="flex flex-col h-screen">
      <NavigationComponent />
      <main className="flex-grow overflow-y-auto">{children}</main>
    </div>
  );
}
