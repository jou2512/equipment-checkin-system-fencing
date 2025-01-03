import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { account, databases, teams } from "@/lib/appwrite/config";
import { useTournamentStore } from "@/lib/store/tournament-store";
import { toast } from "./use-toast";
import { COLLECTION_IDS, DATABASE_IDS, Tournament, TournamentActiveWeaponsType } from "@/lib/appwrite/types";
import { RoleType } from "./use-permissions";

// Hook for managing tournaments
export function useTournaments() {
  const queryClient = useQueryClient();

  // Fetch tournaments
  const {
    data: tournaments = [],
    isLoading,
    isError,
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
      // Generate a consistent ID for both tournament and team
      console.log(tournament.name)
      const tournamentId = tournament.name
        .trim()
        .toLowerCase()
        .replace(/ /g, "-");
      console.log(tournamentId)
      try {
        // Create the tournament document first
        const createdTournament = await databases.createDocument(
          DATABASE_IDS.CHECKING_SYSTEM,
          COLLECTION_IDS.TOURNAMENTS,
          tournamentId,
          tournament
        );
      console.log(createdTournament);

        // Create the corresponding team
        const team = await teams.create(
          tournamentId, // Team ID matches tournament ID
          tournament.name
        );
      console.log(team);

        // Get current user (creator) details
        const currentUser = await account.get();
      console.log(currentUser);

        await teams.createMembership(
          team.$id,
          ["tournament-admin"] as RoleType[],
          currentUser.email,
          currentUser.$id,
          currentUser.phone || undefined,
          undefined,
          `${currentUser.name || "Tournament"} Admin`
        );

        // Return both tournament and team info
        return {
          tournament: createdTournament,
          team,
        };
      } catch (error) {
        // If any step fails, attempt cleanup
        try {
          // Try to delete tournament if it was created
          await databases.deleteDocument(
            DATABASE_IDS.CHECKING_SYSTEM,
            COLLECTION_IDS.TOURNAMENTS,
            tournamentId
          );
        } catch {} // Ignore cleanup errors

        try {
          // Try to delete team if it was created
          await teams.delete(tournamentId);
        } catch {} // Ignore cleanup errors

        // Re-throw the original error
        throw error;
      }
    },

    onSuccess: (data) => {
      // Invalidate both tournaments and teams queries
      queryClient.invalidateQueries({
        queryKey: ["tournaments"],
      });

      toast({
        className: "bg-green-100",
        title: "Tournament Created",
        description: "Tournament and team have been successfully created.",
      });

      // Return the created tournament ID for potential redirection
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
    addTournament,
    updateTournament,
    deleteTournament,
    getTournament, // Return the single tournament query function
    SelectedTournament, // Return the data and loading of the current tournament
    Weapons,
  };
}