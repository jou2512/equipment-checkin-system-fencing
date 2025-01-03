// src/app/tournament/[tournamentId]/[role]/dashboard/page.tsx
"use client";

import { useParams, useRouter } from "next/navigation";
import { CheckinStaffDashboard } from "../components/checkin-staff-dashboard";
import ParticipantDashboard from "../components/participant-dashboard";
export default function DashboardPage() {
  const params = useParams();
  const router = useRouter();
  
  if (!params?.role) {
    router.push("/404");
    return null;
  }
  
  const role = params.role as string;

  const DashboardComponents = {
    participant: ParticipantDashboard,
    "checkin-staff": CheckinStaffDashboard,
  };

    // @ts-ignore
  const DashboardComponent = DashboardComponents[role] || ParticipantDashboard;

  return <DashboardComponent />;
}
