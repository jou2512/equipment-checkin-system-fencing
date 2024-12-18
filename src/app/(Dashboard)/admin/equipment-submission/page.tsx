"use client";

import { useState } from "react";
import { useTournamentStore } from "@/lib/store/tournament-store";
import { useCheckInStore } from "@/lib/store/check-in-store";
import { useTournaments } from "@/hooks/use-tournaments";
import { toast } from "@/hooks/use-toast";
import {
  CheckInCheckInStatus,
  TournamentActiveWeaponsType,
  ItemConfig,
  Tournament,
  CheckIn,
  Checkinitem,
  TournamentActiveWeapons,
  CheckInCheckInStatusType,
} from "@/lib/appwrite/types";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useCheckIns } from "@/hooks/use-checkIn";
import TournamentSelector from "@/components/tournament/TournamentSelector";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

// Create Zod enum schemas from the existing types
const CheckInStatusSchema = z.nativeEnum(CheckInCheckInStatus);
const WeaponTypeSchema = z.nativeEnum(TournamentActiveWeapons);

// Schema for individual item check, derived from Checkinitem type
const ItemCheckSchema = z.object({
  itemName: z
    .string()
    .min(1, "Item name is required")
    .max(64, "Item name cannot exceed 64 characters"),
  quantity: z
    .number()
    .int()
    .min(0, "Quantity cannot be negative")
    .max(10, "Quantity cannot exceed 10"),
  status: CheckInStatusSchema.default(CheckInCheckInStatus.PENDING),
}) satisfies z.ZodType<Partial<Checkinitem>>;

// Schema for the check-in submission, derived from CheckIn type
export const CheckInSubmissionSchema = z.object({
  tournaments: z.string().min(1, "Tournament ID is required"),
  fencerName: z.string().max(64, "Name cannot exceed 64 characters").optional(),
  nationalityCode: z
    .string()
    .max(32, "Nationality code cannot exceed 32 characters")
    .regex(/^[A-Z]{3}$/, "Nationality code must be 3 uppercase letters")
    .optional(),
  weaponType: z.string().max(10, "Weapon type cannot exceed 10 characters"),
  itemChecks: z
    .array(ItemCheckSchema)
    .min(1, "At least one item must be included")
    .refine(
      (items) => items.some((item) => item.quantity > 0),
      "At least one item must have a quantity greater than 0"
    ),
  eventKey: z.string().max(32, "Event key cannot exceed 32 characters"),
  CheckInStatus: CheckInStatusSchema.default(CheckInCheckInStatus.PENDING),
  pickupConfirmed: z.boolean().default(false),
}) satisfies z.ZodType<Partial<CheckIn>>;

// Helper type for validation errors
export type ValidationError = {
  message: string;
  path?: (string | number)[];
};

// Helper function to format validation errors
export function formatValidationErrors(error: z.ZodError): string {
  return error.errors
    .map((err) => {
      const path = err.path.join(" → ");
      return path ? `${path}: ${err.message}` : err.message;
    })
    .join("\n");
}

// Type for the validated check-in data
export type ValidatedCheckInData = z.infer<typeof CheckInSubmissionSchema>;

// Validate required items separately (since it's tournament-specific)
export function validateRequiredItems(
  itemQuantities: Record<string, number>,
  itemConfigs: Array<{ $id?: string; itemName: string; required: boolean }>
): ValidationError | null {
  const missingRequired = itemConfigs.filter(
    (item) => item.required && !itemQuantities[item.$id as string]
  );

  if (missingRequired.length > 0) {
    return {
      message: `Please specify quantities for required items: ${missingRequired
        .map((i) => i.itemName)
        .join(", ")}`
    };
  }

  return null;
}

export default function ItemSubmissionPage() {
  // Global state management
  const { currentTournamentId } = useTournamentStore();
  const { setCurrentCheckInId } = useCheckInStore();
  const { createCheckIn } = useCheckIns();
  const { SelectedTournament } = useTournaments();
  const { tournament: currentTournament, isLoading: isLoadingTournament } =
    SelectedTournament();

  // Local state
  const [validationError, setValidationError] = useState<string | null>(null);
  const [fencerName, setFencerName] = useState("");
  const [fencerNationality, setFencerNationality] = useState("");
  const [submissionComplete, setSubmissionComplete] = useState(false);
  const [checkNumber, setCheckNumber] = useState<Number | null>(null);
  const [itemQuantities, setItemQuantities] = useState<Record<string, number>>(
    {}
  );

  // Handle item quantity updates
  const updateItemQuantity = (itemId: string, quantity: number) => {
    setItemQuantities((prev) => ({
      ...prev,
      [itemId]: quantity,
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!currentTournament) {
      setValidationError("No tournament selected");
      return;
    }

    try {
      // Create item checks array
      const itemChecks = (
        (currentTournament.itemConfigs as ItemConfig[]) || []
      ).map((item) => ({
        itemName: item.itemName,
        quantity: itemQuantities[item.$id as string] || 0,
        status: CheckInCheckInStatus.PENDING,
      }));

      // Prepare data for validation
      const checkInData = {
        tournaments: currentTournament.$id as string,
        fencerName: fencerName || undefined,
        nationalityCode: fencerNationality || undefined,
        weaponType: (
          currentTournament.activeWeapons as TournamentActiveWeaponsType[]
        )[0],
        itemChecks,
        eventKey: currentTournament.name.toLowerCase(),
        CheckInStatus: CheckInCheckInStatus.PENDING,
        pickupConfirmed: false,
      };

      // First validate required items
      const requiredItemsError = validateRequiredItems(
        itemQuantities,
        currentTournament.itemConfigs as ItemConfig[]
      );

      if (requiredItemsError) {
        setValidationError(requiredItemsError.message);
        return;
      }

      // Then validate the entire submission
      const validatedData = await CheckInSubmissionSchema.parseAsync(
        checkInData
      );

      // If validation passes, create check-in
      const result = await createCheckIn.mutateAsync(validatedData);

      // Set current check-in ID in store
      if (result.$id) {
        setCurrentCheckInId(result.$id);
        setCheckNumber(result.checkNumber);
      }

      // Show success state
      setSubmissionComplete(true);

      // Reset form
      setFencerName("");
      setFencerNationality("");
      setItemQuantities({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        setValidationError(formatValidationErrors(error));
      } else {
        setValidationError(
          error instanceof Error ? error.message : "Failed to create check-in"
        );
      }
    }
  };

  // Render quantity selector
  const QuantitySelector = ({ item }: { item: ItemConfig }) => {
    const currentQuantity = itemQuantities[item.$id as string] || 0;

    return (
      <div className="flex items-center space-x-2">
        <div className="grid grid-cols-5 gap-1">
          {[...Array(item.maxQuantity + 1)].map((_, index) => (
            <Button
              key={`${item.$id}_${index}`}
              size="lg"
              variant={currentQuantity === index ? "default" : "outline"}
              onClick={() => updateItemQuantity(item.$id as string, index)}
              className="w-10 h-10 p-0"
            >
              {index}
            </Button>
          ))}
        </div>
        <span className="text-sm text-gray-500">Max: {item.maxQuantity}</span>
      </div>
    );
  };

  if (isLoadingTournament) {
    return (
      <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/3 text-xl font-semibold">
        Loading...
      </div>
    );
  }

  if (!currentTournament && !isLoadingTournament) {
    return (
      <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/3">
        <p className="text-lg">Please select a tournament first</p>
        <div className="mt-4">
          <TournamentSelector />
        </div>
      </div>
    );
  }

  if (submissionComplete) {
    return (
      <Dialog open={submissionComplete} onOpenChange={setSubmissionComplete}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Check-in Successful</DialogTitle>
            <DialogDescription>
              <div className="space-y-4">
                <p>Your check-in has been processed.</p>
                <div className="bg-gray-100 p-4 rounded">
                  <h3 className="font-bold text-xl">
                    Check Number: {`${checkNumber}`}
                  </h3>
                </div>
                <h4 className="font-semibold">Submitted Items:</h4>
                <ul className="list-disc pl-5">
                  {((currentTournament as Tournament).itemConfigs as ItemConfig[])?.map(
                    (item) => {
                      const quantity = itemQuantities[item.$id as string] || 0;
                      return quantity > 0 ? (
                        <li key={item.$id}>
                          {item.itemName}: {quantity}
                        </li>
                      ) : null;
                    }
                  )}
                </ul>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">Item Submission</h1>

      <Card>
        <CardHeader>
          <CardTitle>{(currentTournament as Tournament).name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Active Weapons:{" "}
            {(
              (currentTournament as Tournament)
                .activeWeapons as TournamentActiveWeaponsType[]
            ).join(", ")}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Fencer Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fencerName">Fencer Name</Label>
            <Input
              id="fencerName"
              value={fencerName}
              onChange={(e) => setFencerName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fencerNationality">Nationality Code</Label>
            <Input
              id="fencerNationality"
              value={fencerNationality}
              onChange={(e) =>
                setFencerNationality(e.target.value.toUpperCase())
              }
              maxLength={3}
              placeholder="e.g., USA, GER"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Item Quantities</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {((currentTournament as Tournament).itemConfigs as ItemConfig[])?.map(
            (item) => (
              <div
                key={item.$id}
                className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0"
              >
                <div className="flex-grow">
                  <h3 className="font-medium">{item.itemName}</h3>
                  {item.required && (
                    <span className="text-xs text-red-500">Required Item</span>
                  )}
                </div>
                <QuantitySelector item={item} />
              </div>
            )
          )}
        </CardContent>
      </Card>

      <Button
        onClick={handleSubmit}
        disabled={createCheckIn.isPending}
        className="w-full"
      >
        {createCheckIn.isPending ? "Submitting..." : "Submit Check-in"}
      </Button>
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
