// src/app/tournament/[tournamentId]/[role]/equipment-submission/page.tsx (for check-in staff)
"use client";

import MobileCheckInPage from "@/components/tournament/MobileCheckIn";
import { useParams } from "next/navigation";

export default function EquipmentSubmissionPage() {
  const params = useParams();
  const role = params?.role as string;

  return (
    <MobileCheckInPage
      options={{
        useParams: true,
        useStore: false,
        enableSearch: role === "checkin-staff",
        enableStaffSearch: role === "checkin-staff",
        enableNotifications: role === "checkin-staff",
      }}
    />
  );
}
