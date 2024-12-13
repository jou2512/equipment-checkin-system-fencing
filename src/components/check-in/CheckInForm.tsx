"use client";

import { useState, useEffect, ReactNode } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { databases, COLLECTION_IDS, DATABASE_ID } from "@/lib/appwrite/config";
import { useTournamentStore } from "@/lib/store/tournament-store";
import { ID, Query } from "appwrite";
import type { CheckInDocument, CreateCheckInData } from "@/lib/types/check-in";

// Type definitions
interface ItemQuantity {
  itemId: string;
  quantity: number;
}

interface SuccessMessageProps {
  checkNumber: string;
}

// Success message component
const SuccessMessage: React.FC<SuccessMessageProps> = ({ checkNumber }) => (
  <div className="text-center">
    <div className="text-2xl font-bold mb-2">Check-in Successful!</div>
    <div className="text-4xl font-mono bg-blue-100 inline-block px-4 py-2 rounded">
      #{checkNumber}
    </div>
    <div className="mt-2 text-sm text-gray-600">
      Please keep this number for reference
    </div>
  </div>
);

export function CheckInForm() {
  const currentTournament = useTournamentStore(
    (state) => state.currentTournament
  );
  const [itemQuantities, setItemQuantities] = useState<ItemQuantity[]>([]);
  const [fencerName, setFencerName] = useState("");
  const [nationalityCode, setNationalityCode] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<ReactNode | null>(null);

  // Query to get the latest check number
  const { data: latestCheckIn, isError: isLatestCheckInError } = useQuery({
    queryKey: ["latestCheckNumber", currentTournament?.id],
    queryFn: async () => {
      if (!currentTournament) return null;

      try {
        const response = await databases.listDocuments(
          DATABASE_ID,
          COLLECTION_IDS.checkIns,
          [
            Query.equal("tournamentId", currentTournament.id),
            Query.orderDesc("checkNumber"),
            Query.limit(1),
          ]
        );

        return response.documents[0] as unknown as CheckInDocument | undefined;
      } catch (error) {
        console.error("Error fetching latest check number:", error);
        throw error;
      }
    },
    enabled: !!currentTournament,
    retry: 2,
  });

  // Generate next check number with error handling
  const getNextCheckNumber = (): string => {
    try {
      if (!latestCheckIn?.checkNumber) return "001";
      const currentNumber = parseInt(latestCheckIn.checkNumber, 10);
      return (currentNumber + 1).toString().padStart(3, "0");
    } catch (error) {
      console.error("Error generating next check number:", error);
      return "001"; // Fallback to initial number if parsing fails
    }
  };

  // Reset form utility function
  const resetForm = () => {
    setItemQuantities([]);
    setFencerName("");
    setNationalityCode("");
    setErrorMessage(null);
    setSuccessMessage(null);
  };

  // Create check-in mutation
  const createCheckInMutation = useMutation<
    CheckInDocument,
    Error,
    CreateCheckInData
  >({
    mutationFn: async (data) => {
      try {
        const response = await databases.createDocument(
          DATABASE_ID,
          COLLECTION_IDS.checkIns,
          ID.unique(),
          {
            ...data,
            overallStatus: "pending",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          }
        );
        return response as unknown as CheckInDocument;
      } catch (error) {
        console.error("Error creating check-in:", error);
        throw error;
      }
    },
    onSuccess: (data) => {
      setSuccessMessage(<SuccessMessage checkNumber={data.checkNumber} />);
      resetForm();
    },
    onError: (error) => {
      setErrorMessage(error.message || "Failed to create check-in");
      setSuccessMessage(null);
    },
  });

  // Form validation
  const validateForm = (): { isValid: boolean; error?: string } => {
    if (!currentTournament) {
      return { isValid: false, error: "No tournament selected" };
    }

    // Validate quantities against tournament config
    const invalidItems = itemQuantities.filter((iq) => {
      const config = currentTournament.itemConfigs.find(
        (ic) => ic.itemId === iq.itemId
      );
      return (
        config &&
        (iq.quantity > config.maxQuantity ||
          (config.required && iq.quantity === 0))
      );
    });

    if (invalidItems.length > 0) {
      return {
        isValid: false,
        error:
          "Some items exceed maximum allowed quantity or required items are missing",
      };
    }

    if (nationalityCode && !/^[A-Z]{3}$/.test(nationalityCode)) {
      return {
        isValid: false,
        error: "Nationality code must be exactly 3 uppercase letters",
      };
    }

    return { isValid: true };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    const validation = validateForm();
    if (!validation.isValid || !currentTournament) {
      setErrorMessage(validation.error || "Validation failed");
      return;
    }

    try {
      const checkNumber = getNextCheckNumber();

      const checkInData: CreateCheckInData = {
        tournamentId: currentTournament.id,
        checkNumber,
        fencerName: fencerName.trim() || undefined,
        nationalityCode: nationalityCode || undefined,
        weaponType: "epee",
        itemChecks: itemQuantities.map((iq) => ({
          itemId: iq.itemId,
          itemName:
            currentTournament.itemConfigs.find((ic) => ic.itemId === iq.itemId)
              ?.itemName || "Unknown Item",
          quantity: iq.quantity,
          status: "pending",
        })),
      };

      await createCheckInMutation.mutateAsync(checkInData);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  // Show error if latest check number query fails
  useEffect(() => {
    if (isLatestCheckInError) {
      setErrorMessage(
        "Error fetching check numbers. Some features may be limited."
      );
    }
  }, [isLatestCheckInError]);

  if (!currentTournament) {
    return (
      <div className="text-center p-12 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
        <p className="text-gray-600 text-lg">
          Please select a tournament to continue
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
      {/* Tournament Info - Enhanced */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm">
        <h2 className="text-xl font-bold text-blue-800 mb-2">
          {currentTournament.name}
        </h2>
        <div className="flex items-center space-x-2 text-blue-600">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
            />
          </svg>
          <p className="text-sm font-semibold">
            Next Check Number: #{getNextCheckNumber()}
          </p>
        </div>
      </div>

      {/* Fencer Information - Enhanced */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
          Fencer Information
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="fencer-name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Fencer Name
              <span className="text-gray-400 text-xs ml-1">(Optional)</span>
            </label>
            <div className="relative">
              <input
                id="fencer-name"
                type="text"
                value={fencerName}
                onChange={(e) => setFencerName(e.target.value)}
                className="pl-10 w-full h-10 rounded-lg border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="Enter fencer's name"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </div>
          <div>
            <label
              htmlFor="nationality"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nationality Code
              <span className="text-gray-400 text-xs ml-1">(Optional)</span>
            </label>
            <div className="relative">
              <input
                id="nationality"
                type="text"
                value={nationalityCode}
                onChange={(e) =>
                  setNationalityCode(e.target.value.toUpperCase())
                }
                maxLength={3}
                className="pl-10 w-full h-10 rounded-lg border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors uppercase"
                placeholder="e.g., GER"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Equipment List - Enhanced */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
          Equipment Check-in
        </h3>
        <div className="space-y-4">
          {currentTournament.itemConfigs.map((config) => (
            <div
              key={config.itemId}
              className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <div className="flex-1">
                  <span className="text-gray-900 font-medium">
                    {config.itemName}
                  </span>
                  <div className="flex items-center mt-1 space-x-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                      Max: {config.maxQuantity}
                    </span>
                    {config.required && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                        Required
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-4 sm:w-32">
                  <input
                    type="number"
                    min="0"
                    max={config.maxQuantity}
                    value={
                      itemQuantities.find((iq) => iq.itemId === config.itemId)
                        ?.quantity ?? 0
                    }
                    onChange={(e) => {
                      const newQuantities = [...itemQuantities];
                      const index = newQuantities.findIndex(
                        (iq) => iq.itemId === config.itemId
                      );
                      const newValue = parseInt(e.target.value) || 0;

                      if (index >= 0) {
                        newQuantities[index] = {
                          ...newQuantities[index],
                          quantity: newValue,
                        };
                      } else {
                        newQuantities.push({
                          itemId: config.itemId,
                          quantity: newValue,
                        });
                      }

                      setItemQuantities(newQuantities);
                    }}
                    className="block w-full h-10 rounded-lg border-gray-300 text-center bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    required={config.required}
                  />
                </div>
              </div>
              {/* Progress bar */}
              <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden mt-2">
                <div
                  className="h-full bg-blue-500 transition-all duration-200"
                  style={{
                    width: `${
                      ((itemQuantities.find((iq) => iq.itemId === config.itemId)
                        ?.quantity ?? 0) /
                        config.maxQuantity) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Messages - Keep existing implementation */}
      {errorMessage && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{errorMessage}</p>
            </div>
          </div>
        </div>
      )}
      {successMessage && (
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
          {successMessage}
        </div>
      )}

      {/* Submit Button - Enhanced */}
      <button
        type="submit"
        disabled={createCheckInMutation.isPending}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium 
                 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 
                 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-blue-600 
                 disabled:hover:to-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
      >
        {createCheckInMutation.isPending ? (
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </div>
        ) : (
          "Submit Check-in"
        )}
      </button>
    </form>
  );
}
