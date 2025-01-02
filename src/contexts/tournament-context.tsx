// src/contexts/tournament-context.tsx
import { createContext, useContext, ReactNode } from "react";
import { useTournamentStore } from "@/lib/store/tournament-store";
import { useTournaments } from "@/hooks/use-tournaments";
import { Tournament } from "@/lib/appwrite/types";

interface TournamentContextType {
  currentTournament: Tournament | null;
  isLoading: boolean;
  error: Error | null;
}

const TournamentContext = createContext<TournamentContextType | undefined>(
  undefined
);

export function TournamentProvider({ children }: { children: ReactNode }) {
  const { currentTournamentId } = useTournamentStore();
  const { SelectedTournament } = useTournaments();
  const { tournament, isLoading, error } = SelectedTournament();

  return (
    <TournamentContext.Provider
      value={{
        currentTournament: tournament,
        isLoading,
        error,
      }}
    >
      {children}
    </TournamentContext.Provider>
  );
}

export function useTournamentContext() {
  const context = useContext(TournamentContext);
  if (context === undefined) {
    throw new Error(
      "useTournamentContext must be used within a TournamentProvider"
    );
  }
  return context;
}
