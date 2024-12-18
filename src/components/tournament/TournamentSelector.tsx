"use client";

import * as React from "react";
import { Check, ChevronsUpDown, Plus, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useTournamentStore } from "@/lib/store/tournament-store";
import { useTournaments } from "@/hooks/use-tournaments";
import { toast } from "@/hooks/use-toast";

export default function TournamentSelector() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { currentTournamentId, setCurrentTournamentId } = useTournamentStore();
  const { tournaments, isLoading, isError } = useTournaments();

  const handleTournamentSelect = (tournamentId: string) => {
    setCurrentTournamentId(tournamentId);
    setOpen(false);
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

  const currentTournament = tournaments.find(
    (t) => t.$id === currentTournamentId
  );

  return (
    <div className="flex items-center space-x-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[200px] justify-between">
            {currentTournament ? currentTournament.name : "Select tournament"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search tournament..." />
            <CommandList>
              <CommandEmpty>No tournament found.</CommandEmpty>
              <CommandGroup>
                {tournaments.map((tournament) => (
                  <CommandItem
                    key={tournament.$id}
                    onSelect={() =>
                      handleTournamentSelect(tournament.$id as string)
                    }
                  >
                    <Check
                      className={`mr-2 h-4 w-4 ${
                        currentTournamentId === tournament.$id
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                    {tournament.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <Button onClick={handleAddTournament}>
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
