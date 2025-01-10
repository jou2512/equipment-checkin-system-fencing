"use client";

import MobileSubmissionDetailsPage from "@/components/tournament/MobileSubmissionDetailsPage";

export default function StaffSubmissionDetails() {
  return (
    <MobileSubmissionDetailsPage
      options={{
        useParams: false,
        useStore: true,
        enableEdit: true,
        enableStatusUpdate: true,
        enableHistory: false,
      }}
    />
  );
}