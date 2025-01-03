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

export default function TournamentSelector() {
  const router = useRouter();
  const { currentTournamentId, setCurrentTournamentId } = useTournamentStore();
  const { tournaments, isLoading, isError } = useTournaments();

  const handleTournamentSelect = (tournamentId: string) => {
    setCurrentTournamentId(tournamentId);
    const selectedTournament = tournaments.find((t) => t.$id === tournamentId);
    if (selectedTournament) {
      toast({
        title: "Tournament Selected",
        description: `Switched to ${selectedTournament.name}`,
      });
    }
  };

  const handleAddTournament = () => {
    router.push("/admin/tournament-setup");
  };

  if (isLoading) {
    return (
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading tournaments...
      </Button>
    );
  }

  if (isError) {
    return (
      <Button variant="destructive" onClick={() => window.location.reload()}>
        Error loading tournaments. Click to retry.
      </Button>
    );
  }

  if (!tournaments || tournaments.length === 0) {
    return <Button onClick={handleAddTournament}>Create a Tournament</Button>;
  }

  return (
    <div className="flex items-center space-x-2">
      <Select
        value={currentTournamentId}
        onValueChange={handleTournamentSelect}
      >
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select tournament" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {tournaments.map((tournament) => (
              <SelectItem key={tournament.$id} value={tournament.$id}>
                <div className="flex items-center">
                  <Check
                    className={`mr-2 h-4 w-4 ${
                      currentTournamentId === tournament.$id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />
                  {tournament.name}
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button onClick={handleAddTournament}>
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
