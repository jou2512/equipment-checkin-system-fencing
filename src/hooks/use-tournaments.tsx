// src/hooks/use-tournaments.tsx
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { account, databases } from "@/lib/appwrite/config";
import { useTournamentStore } from "@/lib/store/tournament-store";
import { toast } from "./use-toast";
import {
  COLLECTION_IDS,
  DATABASE_IDS,
  Tournament,
  TournamentActiveWeaponsType,
} from "@/lib/appwrite/types";

// Hook for managing tournaments
export function useTournaments() {
  const queryClient = useQueryClient();

  // Fetch tournaments
  const {
    data: tournaments = [],
    isLoading,
    isError,
    ...all
  } = useQuery<Tournament[]>({
    queryKey: ["tournaments"],
    queryFn: async () => {
      const response = await databases.listDocuments(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.TOURNAMENTS
      );
      return response.documents as Tournament[];
    },
    staleTime: Infinity, // 5 minutes
  });

  // Fetch a single tournament
  const getTournament = (tournamentId: string) =>
    useQuery<Tournament>({
      queryKey: ["tournament", tournamentId],
      queryFn: async () => {
        const response = await databases.getDocument(
          DATABASE_IDS.CHECKING_SYSTEM,
          COLLECTION_IDS.TOURNAMENTS,
          tournamentId
        );
        return response as Tournament;
      },
      enabled: !!tournamentId, // Prevent query from running without a valid ID
      staleTime: Infinity, // Cache result until explicitly invalidated
    });

  // Tournament creation mutation
  const addTournament = useMutation({
    mutationFn: async (tournament: Tournament) => {
      const tournamentId = tournament.name
        .trim()
        .toLowerCase()
        .replace(/ /g, "-");

      try {
        // Create the tournament document
        const createdTournament = await databases.createDocument(
          DATABASE_IDS.CHECKING_SYSTEM,
          COLLECTION_IDS.TOURNAMENTS,
          tournamentId,
          tournament
        );

        // Get current user details
        const currentUser = await account.get();

        // Create team using direct fetch
        const teamResponse = await fetch("/api/teams/create", {
          method: "POST",
          headers: {
            Authorization: "Bearer honoiscool",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tournamentId,
            tournamentName: tournament.name,
            userId: currentUser.$id,
            userEmail: currentUser.email,
            userName: currentUser.name,
            userPhone: currentUser.phone || undefined,
          }),
        });

        const teamData = await teamResponse.json();

        if (!teamData.success) {
          throw new Error(teamData.error || "Team creation failed");
        }

        return {
          tournament: createdTournament,
          team: (
            teamData as {
              success: boolean;
              team: {
                $id: string;
                $createdAt: string;
                $updatedAt: string;
                name: string;
                total: number;
                prefs: {
                  [x: string]: any;
                };
              };
            }
          ).team,
        };
      } catch (error) {
        // Cleanup on failure
        try {
          await databases.deleteDocument(
            DATABASE_IDS.CHECKING_SYSTEM,
            COLLECTION_IDS.TOURNAMENTS,
            tournamentId
          );
        } catch {}

        try {
          await fetch(`/api/teams/${tournamentId}`, {
            method: "DELETE",
            headers: {
              Authorization: "Bearer honoiscool",
            },
          });
        } catch {}

        throw error;
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["tournaments"],
      });

      toast({
        className: "bg-green-100",
        title: "Tournament Created",
        description: "Tournament and team have been successfully created.",
      });

      return data;
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Failed to Create Tournament",
        description:
          error instanceof Error
            ? error.message
            : "Failed to create tournament and team structure. Please try again.",
      });
      console.error("Tournament creation failed:", error);
    },
  });

  const updateTournament = useMutation({
    mutationFn: async ({
      tournamentId,
      updatedData,
    }: {
      tournamentId: string;
      updatedData: Partial<
        Omit<Tournament, "$id" | "$createdAT" | "$updatedAt">
      >;
    }) => {
      await databases.updateDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.TOURNAMENTS,
        tournamentId,
        updatedData
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tournaments"],
      });
      toast({
        className: "bg-green-100",
        title: "Tournament Updated",
        description: `The tournament has been successfully updated.`,
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Failed to Update the tournament.",
        description:
          error instanceof Error ? error.message : "Operation failed",
      });
      console.error("Failed to Update tournament:", error);
    },
  });

  // Remove a tournament
  const deleteTournament = useMutation({
    mutationFn: async (tournamentId: string) => {
      await databases.deleteDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.TOURNAMENTS,
        tournamentId
      );
      try {
        await fetch(`/api/teams/${tournamentId}`, {
          method: "DELETE",
          headers: {
            Authorization: "Bearer honoiscool",
          },
        });
      } catch {}
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tournaments"],
      });
      toast({
        className: "bg-green-100",
        title: "Tournament Deleted",
        description: `The Tournament has been successfully deleted.`,
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Failed to Delete the tournament.",
        description:
          error instanceof Error ? error.message : "Operation failed",
      });
      console.error("Failed to Delete tournament:", error);
    },
  });

  const SelectedTournament = () => {
    const { currentTournamentId } = useTournamentStore();

    const {
      data: data,
      isLoading,
      error,
    } = useQuery({
      queryKey: ["tournament", currentTournamentId],
      queryFn: async () => {
        if (!currentTournamentId) return null;
        return await databases.getDocument(
          DATABASE_IDS.CHECKING_SYSTEM,
          COLLECTION_IDS.TOURNAMENTS,
          currentTournamentId
        );
      },
      enabled: !!currentTournamentId, // Only fetch if an ID is selected
    });
    const tournament = data ? (data as Tournament) : null;
    return {
      tournament,
      isLoading,
      error,
    };
  };

  const Weapons = (
    tournament?: Tournament | null
  ): {
    hasMultiple: boolean;
    weapons: TournamentActiveWeaponsType[];
  } => {
    const weapons = (tournament?.activeWeapons ||
      []) as TournamentActiveWeaponsType[];

    return {
      hasMultiple: weapons.length > 1,
      weapons,
    };
  };

  return {
    tournaments,
    isLoading,
    isError,
    all,
    addTournament,
    updateTournament,
    deleteTournament,
    getTournament, // Return the single tournament query function
    SelectedTournament, // Return the data and loading of the current tournament
    Weapons,
  };
}
