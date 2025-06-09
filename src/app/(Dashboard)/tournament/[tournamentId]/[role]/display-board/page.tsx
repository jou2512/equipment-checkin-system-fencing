"use client";

import MobileStatusDisplay from "@/components/tournament/MobileStatusDisplay";

export default function StaffStatusDisplay() {
  return (
    <MobileStatusDisplay
      options={{
        useParams: false,
        useStore: true,
        enableAutoScroll: true,
        refetchInterval: 15000,
        limit: 100,
        scroll: {
          speed: 2, // Faster scroll speed
          interval: 30, // More frequent updates
          behavior: "reset", // Reset to top when reaching bottom
        },
      }}
    />
  );
}