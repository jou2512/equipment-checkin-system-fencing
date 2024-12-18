"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { ChevronsUpDown, Plus, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import {
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useTournamentStore } from "@/lib/store/tournament-store";
import { toast } from "@/hooks/use-toast";
import { Tournament } from "@/lib/appwrite/types";
import { useTournaments } from "@/hooks/use-tournaments";
import { Button } from "@/components/ui/button";

export function TournamentSwitcher() {
  const { isMobile } = useSidebar();
  const router = useRouter();
  const [isInitializing, setIsInitializing] = useState(true);

  // Access tournament management hooks and store
  const {
    currentTournamentId,
    setCurrentTournamentId,
    clearCurrentTournament,
  } = useTournamentStore();
  const {
    tournaments,
    isLoading,
    isError,
    SelectedTournament: useSelectedTournament,
  } = useTournaments();

  // Get current tournament details
  const { tournament: currentTournament, isLoading: isLoadingCurrent } =
    useSelectedTournament();

  // Initialize component and handle initial data loading
  useEffect(() => {
    const initializeComponent = async () => {
      try {
        if (!isLoading && tournaments?.length > 0 && !currentTournamentId) {
          // Automatically select the first tournament if none is selected
          setCurrentTournamentId(tournaments[0].$id as string);
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Initialization Error",
          description:
            "Failed to initialize tournament selection. Please refresh the page.",
        });
      } finally {
        setIsInitializing(false);
      }
    };

    initializeComponent();
  }, [isLoading, tournaments, currentTournamentId, setCurrentTournamentId]);

  // Handle tournament selection
  const handleTournamentSelect = async (tournament: Tournament) => {
    try {
      setCurrentTournamentId(tournament.$id as string);
      toast({
        title: "Tournament Selected",
        description: `Switched to ${tournament.name}`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Selection Error",
        description: "Failed to switch tournaments. Please try again.",
      });
    }
  };

  // Navigate to tournament creation
  const handleAddTournament = () => {
    router.push("/admin/tournament-setup");
  };

  // Handle loading and error states
  if (isInitializing || isLoading) {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" disabled>
            <Loader2 className="mr-2 size-4 animate-spin" />
            <span>Loading tournaments...</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  }

  if (isError) {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            size="lg"
            className="bg-red-600"
            onClick={() => window.location.reload()}
          >
            Error loading tournaments. Click to retry.
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  }

  // Render nothing if no tournaments are available
  if (!tournaments || tournaments.length === 0) {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarContent className="p-3">
            <div className="text-center">
              <span className="block mb-2">No tournament created yet</span>
              <Button
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition duration-300 focus:outline-none"
                onClick={handleAddTournament}
              >
                Create a Tournament
              </Button>
            </div>
          </SidebarContent>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              {isLoadingCurrent ? (
                <div className="flex items-center space-x-2">
                  <Loader2 className="size-4 animate-spin" />
                  <span>Loading tournament...</span>
                </div>
              ) : (
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {currentTournament
                      ? currentTournament.name
                      : "Select a Tournament"}
                  </span>
                  {currentTournament && (
                    <span className="truncate text-xs text-muted-foreground">
                      Weapons:{" "}
                      {currentTournament.activeWeapons?.join(", ") || "None"}
                    </span>
                  )}
                </div>
              )}
              <ChevronsUpDown className="ml-auto size-4 text-muted-foreground" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Available Tournaments
            </DropdownMenuLabel>

            {tournaments.map((tournament, index) => (
              <DropdownMenuItem
                key={tournament.$id}
                onSelect={() => handleTournamentSelect(tournament)}
                className={`
                  gap-2 p-2 cursor-pointer
                  ${
                    currentTournamentId === tournament.$id
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-secondary"
                  }
                `}
              >
                <div className="flex flex-col">
                  <span className="font-medium">{tournament.name}</span>
                  <span className="text-xs text-muted-foreground">
                    Weapons: {tournament.activeWeapons?.join(", ") || "None"}
                  </span>
                </div>
                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}

            <DropdownMenuSeparator />

            <DropdownMenuItem
              onSelect={handleAddTournament}
              className="gap-2 p-2 cursor-pointer hover:bg-secondary"
            >
              <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                <Plus className="size-4" />
              </div>
              <div className="font-medium text-muted-foreground">
                Create New Tournament
              </div>
              <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
