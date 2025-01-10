// src/app/tournament/[tournamentId]/[role]/page.tsx
"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function TournamentRoleDashboard() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Navigating to the display-board page
    router.push(`${pathname}/display-board`)
  }, [router, pathname]);

  return null;
}
