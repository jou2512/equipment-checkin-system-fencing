"use client";
import { useState, useCallback } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useTournamentStore } from "@/lib/store/tournament-store";
import { useTournaments } from "@/hooks/use-tournaments";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

import {
  ItemConfig,
  Tournament,
  TournamentActiveWeaponsType,
  EquipmentType,
  COLLECTION_IDS,
  DATABASE_IDS,
} from "@/lib/appwrite/types";

// Components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Trash2, Edit, Plus } from "lucide-react";
import { databases } from "@/lib/appwrite/config";

// Validation schema for tournament configuration
const tournamentConfigSchema = z.object({
  name: z.string().min(1, "Tournament name is required"),
  activeWeapons: z
    .array(z.enum(["epee", "foil", "sabre"]))
    .min(1, "At least one weapon must be selected"),
  itemConfigs: z
    .array(
      z.object({
        itemName: z.string(),
        maxQuantity: z.number().min(1).max(10),
        required: z.boolean(),
      })
    )
    .min(1, "At least one item configuration is required"),
});

type TournamentConfig = z.infer<typeof tournamentConfigSchema>;

export default function TournamentSetupPage() {
  // Global state and hooks
  const queryClient = useQueryClient();
  const { currentTournamentId, setCurrentTournamentId } = useTournamentStore();
  const {
    tournaments,
    isLoading,
    addTournament,
    updateTournament,
    deleteTournament,
    SelectedTournament,
  } = useTournaments();

  // Local state
  const [formState, setFormState] = useState<TournamentConfig>({
    name: "",
    activeWeapons: [],
    itemConfigs: [],
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);
  // Add these state declarations to your component:
  const [newItem, setNewItem] = useState<Partial<ItemConfig>>({
    itemName: "",
    maxQuantity: 1,
    required: false,
  });
  // Current tournament data for editing
  const { tournament: currentTournament, isLoading: isLoadingCurrent } =
    SelectedTournament();

  // Reset form to initial state
  const resetForm = useCallback(() => {
    setFormState({
      name: "",
      activeWeapons: [],
      itemConfigs: [],
    });
    setEditingId(null);
    setValidationError(null);
  }, []);

  // Load tournament data for editing
  const startEditing = useCallback((tournament: Tournament) => {
    setFormState({
      name: tournament.name,
      activeWeapons: tournament.activeWeapons as TournamentActiveWeaponsType[],
      itemConfigs: (tournament.itemConfigs || []) as ItemConfig[],
    });
    setEditingId(tournament.$id as string);
  }, []);

  const { data: equipmentTypes } = useQuery<EquipmentType[]>({
    queryKey: ["equipmentTypes"],
    queryFn: async () => {
      const response = await databases.listDocuments(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.EQUIPMENTTYPES
      );
      return response.documents as EquipmentType[];
    },
  });

  // Handle form submission
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Form submitted");

      try {
        // Validate form data first
        const validatedData = tournamentConfigSchema.parse(formState);

        if (editingId) {
          // Call updateTournament with correct mutation variables structure
          await updateTournament.mutateAsync({
            tournamentId: editingId,
            updatedData: {
              name: validatedData.name,
              activeWeapons: validatedData.activeWeapons,
              itemConfigs: validatedData.itemConfigs,
            },
          });

          toast({
            title: "Success",
            description: "Tournament updated successfully",
          });
        } else {
          // Call addTournament with the tournament data
          const result = await addTournament.mutateAsync({
            name: validatedData.name,
            activeWeapons: validatedData.activeWeapons,
            itemConfigs: validatedData.itemConfigs,
          });

          // Set as current tournament if it's the first one
          if (!currentTournamentId && result.tournament.$id) {
            setCurrentTournamentId(result.tournament.$id);
          }

          toast({
            title: "Success",
            description: "Tournament created successfully",
          });
        }

        // Reset form after successful submission
        resetForm();
        queryClient.invalidateQueries({ queryKey: ["tournaments"] });
      } catch (error) {
        if (error instanceof z.ZodError) {
          setValidationError(error.errors.map((e) => e.message).join(", "));
          toast({
            variant: "destructive",
            title: "Validation Error",
            description: error.errors.map((e) => e.message).join(", "),
          });
        } else {
          console.error("Submission error:", error);
          toast({
            variant: "destructive",
            title: "Error",
            description:
              error instanceof Error ? error.message : "An error occurred",
          });
        }
      }
    },
    [
      formState,
      editingId,
      addTournament,
      updateTournament,
      currentTournamentId,
      setCurrentTournamentId,
      queryClient,
      resetForm,
    ]
  );

  // Handle tournament deletion
  const handleDelete = useCallback(
    async (id: string) => {
      try {
        await deleteTournament.mutateAsync(id)

        // Clear current tournament if it was deleted
        if (currentTournamentId === id) {
          setCurrentTournamentId("");
        }

        setDeleteConfirmId(null);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to delete tournament",
        });
      }
    },
    [currentTournamentId, deleteTournament, setCurrentTournamentId]
  );

  // Item management handlers
  // Add these handlers to your component:
  const handleAddItem = useCallback(() => {
    // Validate required fields using ItemConfig type
    if (!newItem.itemName) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please select an equipment type",
      });
      return;
    }

    // Validate maxQuantity against ItemConfig constraints
    if (
      !newItem.maxQuantity ||
      newItem.maxQuantity < 1 ||
      newItem.maxQuantity > 10
    ) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Maximum quantity must be between 1 and 10",
      });
      return;
    }

    // Check for duplicates
    if (
      formState.itemConfigs.some((item) => item.itemName === newItem.itemName)
    ) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "This equipment type is already added",
      });
      return;
    }

    // Add new item
    setFormState((prev) => ({
      ...prev,
      itemConfigs: [
        ...prev.itemConfigs,
        {
          itemName: newItem.itemName as string,
          maxQuantity: newItem.maxQuantity as number,
          required: newItem.required ?? false,
        },
      ],
    }));

    // Reset form
    setNewItem({
      itemName: "",
      maxQuantity: 1,
      required: false,
    });
  }, [newItem, formState.itemConfigs]);

  const handleRemoveItem = useCallback((itemName: string) => {
    setFormState((prev) => ({
      ...prev,
      itemConfigs: prev.itemConfigs.filter(
        (item) => item.itemName !== itemName
      ),
    }));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Tournament Form */}
      <div className="lg:col-span-2">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Tournament Details */}
          <Card>
            <CardHeader>
              <CardTitle>
                {editingId ? "Edit Tournament" : "Create Tournament"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Tournament Name</Label>
                  <Input
                    id="name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    placeholder="Enter tournament name"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Active Weapons</Label>
                  <div className="flex gap-4">
                    {(["epee", "foil", "sabre"] as const).map((weapon) => (
                      <div key={weapon} className="flex items-center space-x-2">
                        <Checkbox
                          id={weapon}
                          checked={formState.activeWeapons.includes(weapon)}
                          onCheckedChange={(checked) => {
                            setFormState((prev) => ({
                              ...prev,
                              activeWeapons: checked
                                ? [...prev.activeWeapons, weapon]
                                : prev.activeWeapons.filter(
                                    (w) => w !== weapon
                                  ),
                            }));
                          }}
                        />
                        <Label htmlFor={weapon}>
                          {weapon.charAt(0).toUpperCase() + weapon.slice(1)}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Item Configuration */}
          <Card>
            <CardHeader>
              <CardTitle>Equipment Configuration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                {/* Equipment Type Selection */}
                <div className="flex flex-col xl:flex-row xl:space-x-4 space-y-2 xl:space-y-0">
                  <div className="flex-grow">
                    <Label>Equipment Type</Label>
                    <Select
                      value={newItem.itemName}
                      onValueChange={(equipmentName) => {
                        const selectedType = equipmentTypes?.find(
                          (type) => type.name === equipmentName
                        );
                        if (selectedType) {
                          setNewItem((prev) => ({
                            ...prev,
                            itemName: selectedType.name,
                          }));
                        }
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Equipment Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {equipmentTypes?.map((type) =>
                          formState.itemConfigs.some(
                            (item) => item.itemName === type.name
                          ) ? null : (
                            <SelectItem key={type.$id} value={type.name}>
                              {type.name}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Quantity and Required Controls */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
                    <div>
                      <Label>Max Quantity</Label>
                      <Input
                        type="number"
                        min={1}
                        max={10}
                        value={newItem.maxQuantity}
                        onChange={(e) => {
                          const value = parseInt(e.target.value) || 0;
                          setNewItem((prev) => ({
                            ...prev,
                            maxQuantity: Math.min(Math.max(value, 1), 10),
                          }));
                        }}
                        className="w-full lg:w-24"
                      />
                    </div>

                    <div className="flex items-center space-x-2 sm:pt-5">
                      <Checkbox
                        id="newItemRequired"
                        checked={newItem.required}
                        onCheckedChange={(checked) => {
                          setNewItem((prev) => ({
                            ...prev,
                            required: !!checked,
                          }));
                        }}
                      />
                      <Label htmlFor="newItemRequired">Required</Label>
                    </div>

                    <Button
                      type="button"
                      onClick={handleAddItem}
                      disabled={!newItem.itemName || !newItem.maxQuantity}
                      className="w-full sm:col-span-2 lg:col-span-1 lg:mt-5"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Item
                    </Button>
                  </div>
                </div>

                {/* Configured Items List */}
                <div className="space-y-2 mt-4">
                  <Label>Configured Items</Label>
                  {formState.itemConfigs.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      No items configured yet
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {formState.itemConfigs.map((item) => (
                        <div
                          key={item.itemName}
                          className="flex justify-between items-center p-2 border rounded"
                        >
                          <div>
                            <span className="font-medium">{item.itemName}</span>
                            <span className="text-sm text-muted-foreground ml-2">
                              Max: {item.maxQuantity}
                              {item.required && " (Required)"}
                            </span>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleRemoveItem(item.itemName)}
                            aria-label={`Remove ${item.itemName}`}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button type="submit">
              {editingId ? "Update Tournament" : "Create Tournament"}
            </Button>
            {editingId && (
              <Button type="button" variant="destructive" onClick={resetForm}>
                Cancel
              </Button>
            )}
          </div>
        </form>
      </div>

      {/* Tournaments List */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Tournaments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tournaments?.map((tournament) => (
                <div
                  key={tournament.$id}
                  className="flex justify-between items-center p-4 border rounded-lg"
                >
                  <div>
                    <h3 className="font-medium">{tournament.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {(
                        tournament.activeWeapons as TournamentActiveWeaponsType[]
                      )?.join(", ")}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => startEditing(tournament)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        setDeleteConfirmId(tournament.$id as string)
                      }
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog
        open={!!deleteConfirmId}
        onOpenChange={() => setDeleteConfirmId(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              tournament and all associated data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteConfirmId && handleDelete(deleteConfirmId)}
              className="bg-destructive text-destructive-foreground"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Validation Error Dialog */}
      {validationError && (
        <AlertDialog
          open={!!validationError}
          onOpenChange={() => setValidationError(null)}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Validation Error</AlertDialogTitle>
              <AlertDialogDescription>{validationError}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction onClick={() => setValidationError(null)}>
                OK
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
}
