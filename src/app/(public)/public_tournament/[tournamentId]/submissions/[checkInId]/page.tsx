"use client";

import MobileSubmissionDetailsPage from "@/components/tournament/MobileSubmissionDetailsPage";

// PublicSubmissionDetails.tsx
export default function PublicSubmissionDetails() {
  return (
    <MobileSubmissionDetailsPage
      options={{
        useParams: true,
        useStore: false,
        enableEdit: false,
        enableStatusUpdate: false,
        enableHistory: false,
      }}
    />
  );
}