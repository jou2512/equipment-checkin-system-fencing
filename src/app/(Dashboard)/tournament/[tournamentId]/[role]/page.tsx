// src/app/tournament/[tournamentId]/[role]/page.tsx
"use client";

import { useParams } from "next/navigation";
import ParticipantDashboard from "./components/participant-dashboard";
import { CheckinStaffDashboard } from "./components/checkin-staff-dashboard";

export default function TournamentRoleDashboard() {
  const params = useParams();
  const role = params.role as string;

  // Mapping of roles to their respective dashboard components
  const DashboardComponents = {
    participant: ParticipantDashboard,
    "checkin-staff": CheckinStaffDashboard,
  };

  // Select the appropriate dashboard component based on role
  const DashboardComponent = DashboardComponents[role] || ParticipantDashboard;

  return <DashboardComponent />;
}
