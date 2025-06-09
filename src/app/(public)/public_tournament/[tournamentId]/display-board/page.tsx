"use client";

import MobileStatusDisplay from "@/components/tournament/MobileStatusDisplay";

// PublicStatusDisplay.tsx
export default function PublicStatusDisplay() {
  return (
    <MobileStatusDisplay
      options={{
        useParams: true,
        useStore: false,
        enableAutoScroll: true,
        refetchInterval: 20000,
        limit: 200,
        scroll: {
          speed: 1, // Slower scroll speed
          interval: 50, // Update every 50ms
          behavior: "reset",
        },
      }}
    />
  );
}
