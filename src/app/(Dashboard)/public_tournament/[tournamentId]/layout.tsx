// src/app/tournament/[tournamentId]/[role]/layout.tsx
"use client";

import { useParams, useRouter } from "next/navigation";
import {
  TOURNAMENT_ROLES,
  TournamentRoleType,
} from "@/hooks/use-tournament-invitations";

import { ParticipantNavigation } from "@/components/navigation/mobile/participant-nav";
import { CheckinStaffNavigation } from "@/components/navigation/mobile/checkin-staff-nav";
import { useTournamentStore } from "@/lib/store/tournament-store";

export default function TournamentLayout({
  children,
}: {
  children: React.ReactNode;
  }) {

  return (
    <div className="flex flex-col h-screen">
      <ParticipantNavigation />
      <main className="flex-grow overflow-y-auto">{children}</main>
    </div>
  );
}
