"use client";

import { useQuery } from "@tanstack/react-query";
import { databases, COLLECTION_IDS, DATABASE_ID } from "@/lib/appwrite/config";
import { useTournamentStore } from "@/lib/store/tournament-store";
import type { TournamentConfig } from "@/lib/store/tournament-store";
import { Query } from "appwrite";

export function TournamentSelector() {
  const { currentTournament, setCurrentTournament, clearCurrentTournament } =
    useTournamentStore();

  // Query for active epee tournaments
  const { data: tournaments, isLoading } = useQuery<TournamentConfig[]>({
    queryKey: ["tournaments", "epee"],
    queryFn: async () => {
      try {
        const response = await databases.listDocuments(
          DATABASE_ID,
          COLLECTION_IDS.tournaments,
          [
            // Only fetch tournaments that include epee as an active weapon
            Query.search("activeWeapons", "epee"),
            // Optionally add more filters like date range, status, etc.
          ]
        );
        return response.documents as unknown as TournamentConfig[];
      } catch (error) {
        console.error("Error fetching tournaments:", error);
        throw error;
      }
    },
  });

  return (
    <div className="mb-8">
      <label
        htmlFor="tournament-select"
        className="block text-sm font-medium mb-2"
      >
        Select Tournament
      </label>
      <div className="flex gap-4 items-center">
        <select
          id="tournament-select"
          className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={currentTournament?.id || ""}
          onChange={(e) => {
            const selected = tournaments?.find((t) => t.id === e.target.value.id);
            if (selected) {
              setCurrentTournament(selected);
            } else {
                console.log(tournaments);
                console.log(console.log(tournaments));
                clearCurrentTournament();
            }
          }}
        >
          <option value="">Select a tournament...</option>
          {tournaments?.map((tournament) => (
            <option key={tournament.id} value={tournament.id}>
              {tournament.name}
            </option>
          ))}
        </select>
        {isLoading && (
          <div className="text-sm text-gray-500">Loading tournaments...</div>
        )}
      </div>
    </div>
  );
}
