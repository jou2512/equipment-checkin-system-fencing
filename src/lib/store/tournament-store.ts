import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type TournamentState = {
  currentTournamentId: string | null; // Only store the selected tournament's ID
  setCurrentTournamentId: (tournamentId: string) => void;
  clearCurrentTournament: () => void;
};

export const useTournamentStore = create<TournamentState>()(
  devtools(
    persist(
      (set) => ({
        currentTournamentId: null,

        // Set the current tournament by ID
        setCurrentTournamentId: (tournamentId: string) => {
          set({ currentTournamentId: tournamentId });
        },

        // Clear the current tournament selection
        clearCurrentTournament: () => {
          set({ currentTournamentId: null });
        },
      }),
      {
        name: "tournament-storage",
        partialize: (state) => ({
          currentTournamentId: state.currentTournamentId, // Persist only the selected ID
        }),
      }
    ),
    { name: "tournament-store" }
  )
);
