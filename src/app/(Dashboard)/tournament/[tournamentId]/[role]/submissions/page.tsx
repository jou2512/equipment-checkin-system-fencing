"use client";

import MobileSubmissionsPage from "@/components/tournament/MobileSubmissionsPage";

export default function StaffSubmissionsPage() {
  return (
    <MobileSubmissionsPage
      options={{
        useParams: false,
        useStore: true,
        enableDelete: true,
        pageSize: 100,
        enableNumberSearch: true,
        enableSelection: true,
      }}
    />
  );
}