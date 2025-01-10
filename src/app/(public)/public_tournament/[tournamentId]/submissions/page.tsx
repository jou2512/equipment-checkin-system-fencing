"use client";

import MobileSubmissionsPage from "@/components/tournament/MobileSubmissionsPage";

export default function PublicSubmissionsPage() {
  return (
    <MobileSubmissionsPage
      options={{
        useParams: true,
        useStore: false,
        enableDelete: false,
        pageSize: 100,
        enableNumberSearch: true,
        enableSelection: false,
      }}
    />
  );
}