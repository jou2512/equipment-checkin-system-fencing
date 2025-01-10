// src/app/(public)/public_tournament/layout.tsx
"use client";

import { Suspense } from "react";
import { LoadingState } from "@/components/ui/loading-state";
import { Sword } from "lucide-react";

function TournamentLayoutSkeleton() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="container max-w-7xl mx-auto space-y-6">
        {/* Header Skeleton */}
        <div className="h-12 w-64 bg-muted/10 rounded-lg animate-pulse" />

        {/* Content Area Skeleton */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-48 rounded-lg bg-muted/10 animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PublicTournamentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <Suspense fallback={<TournamentLayoutSkeleton />}>{children}</Suspense>
    </div>
  );
}
