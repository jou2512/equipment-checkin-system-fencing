"use client";

import * as React from "react";
import { useEffect, useState, useCallback } from "react";
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
import { useHotkeys } from "react-hotkeys-hook";
import { cn } from "@/lib/utils";

export function TournamentSwitcher() {
  const { isMobile } = useSidebar();
  const router = useRouter();
  const [isInitializing, setIsInitializing] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const {
    currentTournamentId,
    setCurrentTournamentId,
    clearCurrentTournament,
  } = useTournamentStore();

  const {
    tournaments,
    isLoading,
    isError,
    all,
    SelectedTournament: useSelectedTournament,
  } = useTournaments();

  const { tournament: currentTournament, isLoading: isLoadingCurrent } =
    useSelectedTournament();

  // Initialize component
  useEffect(() => {
    const initializeComponent = async () => {
      try {
        if (!isLoading && tournaments?.length > 0) {
          // If no tournament is selected, select the first one
          if (!currentTournamentId) {
            setCurrentTournamentId(tournaments[0].$id as string);
          }
          // Validate current tournament selection
          else if (!tournaments.some((t) => t.$id === currentTournamentId)) {
            setCurrentTournamentId(tournaments[0].$id as string);
            toast({
              title: "Tournament Reset",
              description:
                "Selected tournament no longer exists. Switched to default.",
            });
          }
        }
      } catch (error) {
        console.error("Tournament initialization error:", error);
        toast({
          variant: "destructive",
          title: "Initialization Error",
          description:
            "Failed to initialize tournament selection. Please refresh.",
          action: (
            <Button size="sm" onClick={() => window.location.reload()}>
              Refresh
            </Button>
          ),
        });
      } finally {
        setIsInitializing(false);
      }
    };

    initializeComponent();
  }, [isLoading, tournaments, currentTournamentId, setCurrentTournamentId]);

  // Handle tournament selection
  const handleTournamentSelect = useCallback(
    async (tournament: Tournament) => {
      try {
        setCurrentTournamentId(tournament.$id as string);
        setIsOpen(false);
        toast({
          title: "Tournament Selected",
          description: `Switched to ${tournament.name}`,
        });
      } catch (error) {
        console.error("Tournament selection error:", error);
        toast({
          variant: "destructive",
          title: "Selection Error",
          description: "Failed to switch tournaments. Please try again.",
          action: (
            <Button
              size="sm"
              onClick={() => handleTournamentSelect(tournament)}
            >
              Retry
            </Button>
          ),
        });
      }
    },
    [setCurrentTournamentId]
  );

  // Handle tournament creation
  const handleAddTournament = useCallback(() => {
    setIsOpen(false);
    router.push("/admin/tournament-setup");
  }, [router]);

  // Keyboard shortcuts
  useHotkeys("cmd+n, ctrl+n", (event) => {
    event.preventDefault();
    handleAddTournament();
  });

  useHotkeys("1,2,3,4,5,6,7,8,9", (event) => {
    const index = parseInt(event.key) - 1;
    if (tournaments && tournaments[index]) {
      handleTournamentSelect(tournaments[index]);
    }
  });

  // Error retry handler
  const handleRetry = async () => {
    try {
      await all.refetch();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Refresh Failed",
        description: "Could not refresh tournament list. Please try again.",
      });
    }
  };

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
            variant="destructive"
            onClick={handleRetry}
          >
            <span>Error loading tournaments</span>
            <Button size="sm" variant="ghost" className="ml-2">
              Retry
            </Button>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  }

  if (!tournaments?.length) {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarContent className="p-3">
            <div className="text-center space-y-2">
              <span className="block text-muted-foreground">
                No tournaments available
              </span>
              <Button onClick={handleAddTournament} className="w-full">
                <Plus className="mr-2 size-4" />
                Create Tournament
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
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className={cn(
                "data-[state=open]:bg-sidebar-accent",
                "data-[state=open]:text-sidebar-accent-foreground",
                "focus-visible:ring-2",
                "focus-visible:ring-ring"
              )}
            >
              {isLoadingCurrent ? (
                <div className="flex items-center space-x-2">
                  <Loader2 className="size-4 animate-spin" />
                  <span>Loading tournament...</span>
                </div>
              ) : (
                <div className="grid flex-1 gap-1 text-left">
                  <span className="truncate font-medium">
                    {currentTournament?.name || "Select Tournament"}
                  </span>
                  {currentTournament?.activeWeapons &&
                    currentTournament.activeWeapons.length > 0 && (
                      <span className="truncate text-xs text-muted-foreground">
                        {currentTournament.activeWeapons.join(", ")}
                      </span>
                    )}
                </div>
              )}
              <ChevronsUpDown className="ml-auto size-4 shrink-0 opacity-50" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-[200px]"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Available Tournaments
            </DropdownMenuLabel>

            {tournaments.map((tournament, index) => (
              <DropdownMenuItem
                key={tournament.$id as string}
                onSelect={() => handleTournamentSelect(tournament)}
                className={cn(
                  "gap-2 p-2",
                  "focus:bg-accent focus:text-accent-foreground",
                  "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
                  currentTournamentId === (tournament.$id as string) &&
                    "bg-accent text-accent-foreground"
                )}
              >
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="truncate font-medium">
                    {tournament.name}
                  </span>
                  {currentTournament?.activeWeapons &&
                    currentTournament.activeWeapons.length > 0 && (
                      <span className="truncate text-xs text-muted-foreground">
                        {currentTournament.activeWeapons.join(", ")}
                      </span>
                    )}
                </div>
                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}

            <DropdownMenuSeparator />

            <DropdownMenuItem
              onSelect={handleAddTournament}
              className="gap-2 p-2"
            >
              <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                <Plus className="size-4" />
              </div>
              <span className="font-medium">Create New Tournament</span>
              <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
