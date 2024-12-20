import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { databases } from "@/lib/appwrite/config";
import { useTournamentStore } from "@/lib/store/tournament-store";
import { toast } from "./use-toast";
import { COLLECTION_IDS, DATABASE_IDS, Tournament, TournamentActiveWeaponsType } from "@/lib/appwrite/types";

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

  // Add a tournament
  const addTournament =
    useMutation({
      mutationFn: async (tournament: Tournament) => {
        return await databases.createDocument(
          DATABASE_IDS.CHECKING_SYSTEM,
          COLLECTION_IDS.TOURNAMENTS,
          tournament.name.trim().toLowerCase().replace(/ /g, "-"),
          tournament
        );
      },

      onSuccess: (data) => {
        queryClient.invalidateQueries({
          queryKey: ["tournaments"],
        });
        toast({
          className: "bg-green-100",
          title: "Tournament Created",
          description: `Tournament has been successfully created.`,
        });
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Failed to add tournament",
          description:
            error instanceof Error ? error.message : "Operation failed",
        });
        console.error("Failed to add tournament:", error);
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
  const deleteTournament =
    useMutation({
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

    const { data: data, isLoading, error } = useQuery({
      queryKey: ["tournament", currentTournamentId],
      queryFn: async () => {
        if (!currentTournamentId) return null;
        return await databases.getDocument(
          DATABASE_IDS.CHECKING_SYSTEM,
          COLLECTION_IDS.TOURNAMENTS,
          currentTournamentId
        );
      },
      enabled: !!currentTournamentId // Only fetch if an ID is selected
    });
    const tournament = data ? data as Tournament : null
    return {
      tournament,
      isLoading,
      error,
    };
  }

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