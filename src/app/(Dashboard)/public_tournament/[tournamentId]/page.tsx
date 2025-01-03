// src/app/tournament/[tournamentId]/[role]/page.tsx
"use client";

import { useParams, usePathname, useRouter } from "next/navigation";

export default function TournamentRoleDashboard() {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  router.push(pathname + "/display-board");
  return null;
}
