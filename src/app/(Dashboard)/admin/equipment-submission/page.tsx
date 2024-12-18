"use client";

import { useEffect, useState } from "react";
import { useTournamentStore } from "@/lib/store/tournament-store";
import { useCheckInStore } from "@/lib/store/check-in-store";
import { useTournaments } from "@/hooks/use-tournaments";
import { useCheckIns } from "@/hooks/use-checkIn";
import { toast } from "@/hooks/use-toast";
import {
  CheckInCheckInStatus,
  TournamentActiveWeaponsType,
  ItemConfig,
  Tournament,
  CheckIn,
  Checkinitem,
  TournamentActiveWeapons,
} from "@/lib/appwrite/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Checkbox } from "@/components/ui/checkbox";
import TournamentSelector from "@/components/tournament/TournamentSelector";
import { z } from "zod";
import { Check, QrCode } from "lucide-react";

// Feature flags at the top of the file for easy modification
const FEATURES = {
  NOTIFICATIONS: false, // Toggle notification features
};

// Validation Schemas
const CheckInStatusSchema = z.nativeEnum(CheckInCheckInStatus);
const WeaponTypeSchema = z.nativeEnum(TournamentActiveWeapons);

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
});

const CheckInSubmissionSchema = z.object({
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
});

type ValidationError = {
  message: string;
  path?: (string | number)[];
};

function formatValidationErrors(error: z.ZodError): string {
  return error.errors
    .map((err) => {
      const path = err.path.join(" → ");
      return path ? `${path}: ${err.message}` : err.message;
    })
    .join("\n");
}

function validateRequiredItems(
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
        .join(", ")}`,
    };
  }

  return null;
}

type ValidatedCheckInData = z.infer<typeof CheckInSubmissionSchema>;

export default function ItemSubmissionPage() {
  // State for progressive disclosure
  const [currentStep, setCurrentStep] = useState<
    "weapon" | "details" | "items" | "notifications" | "review" | "success"
  >("weapon");
  const [selectedWeapon, setSelectedWeapon] =
    useState<TournamentActiveWeaponsType | null>(null);

  // Existing state
  const { currentTournamentId } = useTournamentStore();
  const { setCurrentCheckInId } = useCheckInStore();
  const { createCheckIn } = useCheckIns();
  const { SelectedTournament } = useTournaments();
  const { tournament: currentTournament, isLoading: isLoadingTournament } =
    SelectedTournament();

  const [fencerName, setFencerName] = useState("");
  const [fencerNationality, setFencerNationality] = useState("");
  const [itemQuantities, setItemQuantities] = useState<Record<string, number>>(
    {}
  );
  const [validationError, setValidationError] = useState<string | null>(null);
  const [submissionData, setSubmissionData] = useState<any>(null);

  // New state for notifications
  const [phoneNumber, setPhoneNumber] = useState("");
  const [notificationPreferences, setNotificationPreferences] = useState({
    status: false,
    pickup: false,
  });


  const resetForm = () => {
    setCurrentStep(hasMultipleWeapons() ? "weapon" : "details");
    setSelectedWeapon(null);
    setFencerName("");
    setFencerNationality("");
    setItemQuantities({});
    setSubmissionData(null);
  };

  // Helper function to check if tournament has multiple weapons
  const hasMultipleWeapons = () => {
    return (
      currentTournament?.activeWeapons &&
      (currentTournament.activeWeapons as TournamentActiveWeaponsType[])
        .length > 1
    );
  };

  // Initialize form based on tournament weapons
  useEffect(() => {
    if (currentTournament) {
      const weapons =
        currentTournament.activeWeapons as TournamentActiveWeaponsType[];
      if (weapons.length === 1) {
        setSelectedWeapon(weapons[0]);
        setCurrentStep("details");
      } else {
        setSelectedWeapon(null);
        setCurrentStep("weapon");
      }
    }
  }, [currentTournament]);

  const handleWeaponSelect = (weapon: TournamentActiveWeaponsType) => {
    setSelectedWeapon(weapon);
    setCurrentStep("details");
  };

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
        weaponType: selectedWeapon,
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
      setSubmissionData(result);
      setCurrentStep("success");

      if (result.$id) {
        setCurrentCheckInId(result.$id);
      }
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

  // Review data formatting
  const getReviewData = () => {
    return {
      fencer: {
        name: fencerName || "Not provided",
        nationality: fencerNationality || "Not provided",
        weapon: selectedWeapon,
        phone: FEATURES.NOTIFICATIONS
          ? phoneNumber || "Not provided"
          : undefined,
      },
      equipment: ((currentTournament?.itemConfigs as ItemConfig[]) || [])
        .map((item) => ({
          name: item.itemName,
          quantity: itemQuantities[item.$id as string] || 0,
          required: item.required,
        }))
        .filter((item) => item.quantity > 0 || item.required),
      notifications: FEATURES.NOTIFICATIONS
        ? {
            status: notificationPreferences.status,
            pickup: notificationPreferences.pickup,
          }
        : undefined,
    };
  };

  // Loading state
  if (isLoadingTournament) {
    return (
      <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/3 text-xl font-semibold">
        Loading...
      </div>
    );
  }

  // No tournament selected
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

  // Success view (no longer a modal)
  if (currentStep === "success" && submissionData) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Submission Successful</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-green-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                Check Number: {submissionData.checkNumber}
              </h2>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Fencer:</span>{" "}
                  {submissionData.fencerName || "Not provided"}
                </p>
                <p>
                  <span className="font-semibold">Nationality:</span>{" "}
                  {submissionData.nationalityCode || "Not provided"}
                </p>
                <p>
                  <span className="font-semibold">Weapon:</span>{" "}
                  {submissionData.weaponType}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Submitted Items:</h3>
              <ul className="space-y-2">
                {submissionData.itemChecks.map(
                  (item: any) =>
                    item.quantity > 0 && (
                      <li key={item.itemName} className="flex justify-between">
                        <span>{item.itemName}</span>
                        <span className="font-medium">{item.quantity}</span>
                      </li>
                    )
                )}
              </ul>
            </div>

            <Button className="w-full mt-6" onClick={resetForm}>
              Start New Submission
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">Equipment Submission</h1>

      {/* Weapon Selection */}
      {currentStep === "weapon" && hasMultipleWeapons() && (
        <Card>
          <CardHeader>
            <CardTitle>Select Weapon</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              {(
                currentTournament?.activeWeapons as TournamentActiveWeaponsType[]
              ).map((weapon) => (
                <Button
                  key={weapon}
                  onClick={() => handleWeaponSelect(weapon)}
                  className="h-24"
                  variant={selectedWeapon === weapon ? "default" : "outline"}
                >
                  {weapon.charAt(0).toUpperCase() + weapon.slice(1)}
                </Button>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <Button variant="outline" onClick={() => window.history.back()}>
                Back to Tournament Selection
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Fencer Details */}
      {currentStep === "details" && (
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
                placeholder="Enter fencer's name"
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
            <div className="flex justify-between mt-4">
              {hasMultipleWeapons() && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedWeapon(null);
                    setCurrentStep("weapon");
                  }}
                >
                  Back to Weapon Selection
                </Button>
              )}
              <Button
                className={hasMultipleWeapons() ? "" : "ml-auto"}
                onClick={() => setCurrentStep("items")}
              >
                Continue to Equipment Selection
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Equipment Selection */}
      {currentStep === "items" && (
        <Card>
          <CardHeader>
            <CardTitle>Equipment Selection</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {(
              (currentTournament as Tournament).itemConfigs as ItemConfig[]
            )?.map((item) => (
              <div
                key={item.$id}
                className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 p-4 border rounded-lg"
              >
                <div className="flex-grow">
                  <h3 className="font-medium">{item.itemName}</h3>
                  {item.required && (
                    <span className="text-xs text-red-500">Required Item</span>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <div className="grid grid-cols-5 gap-1">
                    {[...Array(item.maxQuantity + 1)].map((_, index) => (
                      <Button
                        key={`${item.$id}_${index}`}
                        size="lg"
                        variant={
                          itemQuantities[item.$id as string] === index
                            ? "default"
                            : "outline"
                        }
                        onClick={() =>
                          setItemQuantities((prev) => ({
                            ...prev,
                            [item.$id as string]: index,
                          }))
                        }
                        className="w-10 h-10 p-0"
                      >
                        {index}
                      </Button>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    Max: {item.maxQuantity}
                  </span>
                </div>
              </div>
            ))}

            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={() => setCurrentStep("details")}
              >
                Back to Fencer Details
              </Button>
              <Button
                onClick={() =>
                  setCurrentStep(
                    FEATURES.NOTIFICATIONS ? "notifications" : "review"
                  )
                }
              >
                Continue to Review
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Notifications (Feature Flagged) */}
      {FEATURES.NOTIFICATIONS && currentStep === "notifications" && (
        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+1234567890"
              />
            </div>
            <div className="space-y-2">
              <Label>Notification Options</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="status"
                    checked={notificationPreferences.status}
                    onCheckedChange={(checked) =>
                      setNotificationPreferences((prev) => ({
                        ...prev,
                        status: checked as boolean,
                      }))
                    }
                  />
                  <Label htmlFor="status">Equipment check status updates</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="pickup"
                    checked={notificationPreferences.pickup}
                    onCheckedChange={(checked) =>
                      setNotificationPreferences((prev) => ({
                        ...prev,
                        pickup: checked as boolean,
                      }))
                    }
                  />
                  <Label htmlFor="pickup">Equipment ready for pickup</Label>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <Button variant="outline" onClick={() => setCurrentStep("items")}>
                Back
              </Button>
              <Button onClick={() => setCurrentStep("review")}>
                Continue to Review
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Review Step */}
      {currentStep === "review" && (
        <Card>
          <CardHeader>
            <CardTitle>Review Submission</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Fencer Details</h3>
                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <p>
                    <span className="font-medium">Name:</span>{" "}
                    {fencerName || "Not provided"}
                  </p>
                  <p>
                    <span className="font-medium">Nationality:</span>{" "}
                    {fencerNationality || "Not provided"}
                  </p>
                  <p>
                    <span className="font-medium">Weapon:</span>{" "}
                    {selectedWeapon}
                  </p>
                  {FEATURES.NOTIFICATIONS && (
                    <p>
                      <span className="font-medium">Phone:</span>{" "}
                      {phoneNumber || "Not provided"}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Equipment</h3>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <ul className="space-y-2">
                    {(
                      (currentTournament as Tournament)
                        .itemConfigs as ItemConfig[]
                    )?.map(
                      (item) =>
                        itemQuantities[item.$id as string] > 0 && (
                          <li key={item.$id} className="flex justify-between">
                            <span className="font-medium">{item.itemName}</span>
                            <span>{itemQuantities[item.$id as string]}</span>
                          </li>
                        )
                    )}
                  </ul>
                </div>
              </div>

              {FEATURES.NOTIFICATIONS && (
                <div>
                  <h3 className="font-semibold mb-2">Notifications</h3>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4" />
                        Status updates:{" "}
                        {notificationPreferences.status ? "Yes" : "No"}
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4" />
                        Pickup notification:{" "}
                        {notificationPreferences.pickup ? "Yes" : "No"}
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={() =>
                  setCurrentStep(
                    FEATURES.NOTIFICATIONS ? "notifications" : "items"
                  )
                }
              >
                Back
              </Button>
              <Button onClick={handleSubmit} disabled={createCheckIn.isPending}>
                {createCheckIn.isPending
                  ? "Submitting..."
                  : "Confirm Submission"}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Success View */}
      {currentStep === "success" && submissionData && (
        <Card>
          <CardHeader>
            <CardTitle>Submission Successful</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-primary/10 p-6 rounded-lg text-center">
              <h2 className="text-4xl font-bold mb-4">Check Number</h2>
              <div className="text-5xl font-mono font-bold text-primary">
                {submissionData.checkNumber}
              </div>
              <div className="mt-4 flex justify-center">
                <QrCode className="h-32 w-32 text-primary" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Details</h3>
              <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                <p>
                  <span className="font-medium">Fencer:</span>{" "}
                  {submissionData.fencerName || "Not provided"}
                </p>
                <p>
                  <span className="font-medium">Nationality:</span>{" "}
                  {submissionData.nationalityCode || "Not provided"}
                </p>
                <p>
                  <span className="font-medium">Weapon:</span>{" "}
                  {submissionData.weaponType}
                </p>
              </div>

              <h3 className="font-semibold">Submitted Items</h3>
              <div className="bg-muted/50 p-4 rounded-lg">
                <ul className="space-y-2">
                  {submissionData.itemChecks.map(
                    (item: any) =>
                      item.quantity > 0 && (
                        <li
                          key={item.itemName}
                          className="flex justify-between"
                        >
                          <span>{item.itemName}</span>
                          <span className="font-medium">{item.quantity}</span>
                        </li>
                      )
                  )}
                </ul>
              </div>
            </div>

            <Button className="w-full mt-6" onClick={resetForm}>
              Start New Submission
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Error Dialog */}
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
