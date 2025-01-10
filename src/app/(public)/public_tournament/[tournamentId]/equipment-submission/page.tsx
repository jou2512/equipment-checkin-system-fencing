// src/app/public_tournament/[tournamentId]/[role]/equipment-submission/page.tsx (for check-in staff)
"use client";

import MobileCheckInPage from "@/components/tournament/MobileCheckIn";
import { useParams } from "next/navigation";

export default function EquipmentSubmissionPage() {
  const params = useParams();

  return (
    <MobileCheckInPage
      options={{
        useParams: true,
        useStore: false,
        enableSearch: false,
        enableStaffSearch: false,
        enableNotifications: false,
      }}
    />
  );
}