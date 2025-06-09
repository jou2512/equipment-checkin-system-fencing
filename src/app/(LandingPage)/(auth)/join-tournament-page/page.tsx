
"use client";

import { Suspense } from "react";
import TournamentJoinForm from "@/components/profile/tournament-join-form";

export default function TournamentJoinPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container mx-auto px-4 py-8 mb-16">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Join Tournament
        </h1>
        <TournamentJoinForm />
      </div>
    </Suspense>
  );
}
