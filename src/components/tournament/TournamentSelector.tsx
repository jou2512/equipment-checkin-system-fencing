"use client";

import * as React from "react";
import { Check, Plus, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTournamentStore } from "@/lib/store/tournament-store";
import { useTournaments } from "@/hooks/use-tournaments";
import { toast } from "@/hooks/use-toast";
import { useCallback, useEffect, useMemo } from "react";

export default function TournamentSelector() {
  const router = useRouter();
  const { currentTournamentId, setCurrentTournamentId } = useTournamentStore();
  const { tournaments, isLoading, isError, all } = useTournaments();

  // Memoize current tournament to prevent unnecessary re-renders
  const currentTournament = useMemo(
    () => tournaments?.find((t) => t.$id === currentTournamentId),
    [tournaments, currentTournamentId]
  );

  // Set initial tournament if none selected
  useEffect(() => {
    if (!currentTournamentId && tournaments?.length > 0) {
      setCurrentTournamentId(tournaments[0].$id as string);
    }
  }, [tournaments, currentTournamentId, setCurrentTournamentId]);

  // Memoize handlers to prevent unnecessary re-renders
  const handleTournamentSelect = useCallback(
    (tournamentId: string) => {
      setCurrentTournamentId(tournamentId);
      const selectedTournament = tournaments?.find(
        (t) => t.$id === tournamentId
      );
      if (selectedTournament) {
        toast({
          title: "Tournament Selected",
          description: `Switched to ${selectedTournament.name}`,
        });
      }
    },
    [tournaments, setCurrentTournamentId]
  );

  const handleAddTournament = useCallback(() => {
    router.push("/admin/tournament-setup");
  }, [router]);

  const handleRetry = useCallback(async () => {
    try {
      await all.refetch();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to reload tournaments. Please try again.",
      });
    }
  }, [all.refetch]);

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center space-x-2">
        <Button disabled variant="outline" className="w-[200px] justify-start">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading...
        </Button>
        <Button disabled>
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="flex items-center space-x-2">
        <Button
          variant="destructive"
          className="w-[200px]"
          onClick={handleRetry}
        >
          Error loading tournaments
        </Button>
        <Button onClick={handleAddTournament}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  // Empty state
  if (!tournaments || tournaments.length === 0) {
    return (
      <div className="flex items-center space-x-2">
        <Button variant="outline" className="w-[200px]" disabled>
          No tournaments available
        </Button>
        <Button onClick={handleAddTournament}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <Select
        value={currentTournamentId as string | undefined}
        onValueChange={handleTournamentSelect}
      >
        <SelectTrigger className="w-[200px]">
          <SelectValue
            placeholder="Select tournament"
            defaultValue={currentTournament?.name}
          >
            {currentTournament?.name || "Select tournament"}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {tournaments.map((tournament) => (
              <SelectItem
                key={tournament.$id}
                value={tournament.$id as string}
                className="relative pl-8"
              >
                <Check
                  className={`absolute left-2 h-4 w-4 transition-opacity ${
                    currentTournamentId === tournament.$id
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                  aria-hidden="true"
                />
                <span className="truncate">{tournament.name}</span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button
        onClick={handleAddTournament}
        variant="outline"
        title="Add new tournament"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
