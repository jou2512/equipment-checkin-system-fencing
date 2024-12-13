"use client";

import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import type {
  Weapon,
  CheckableItem,
  TournamentConfig,
  itemConfigs
} from "@/lib/store/tournament-store";
import { databases, COLLECTION_IDS, DATABASE_ID } from "@/lib/appwrite/config";
import { ID } from "appwrite"; // Import ID from appwrite for document creation

// Define error type for better error handling
interface AppwriteError {
  message: string;
  code: number;
}

export default function TournamentSetupForm() {
  // Component state
  const [isMounted, setIsMounted] = useState(false);
  const [tournamentName, setTournamentName] = useState("");
  const [selectedWeapons, setSelectedWeapons] = useState<Weapon[]>([]);
  const [itemConfigs, setItemConfigs] = useState<itemConfigs>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Set mounted state after initial render
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Query for checkable items with proper error handling
  const {
    data: checkableItems,
    isLoading: isLoadingItems,
    error: itemsError,
    refetch: refetchItems,
  } = useQuery<CheckableItem[], AppwriteError>({
    queryKey: ["checkableItems"],
    queryFn: async () => {
      try {
        console.log(DATABASE_ID, COLLECTION_IDS.checkableItems);
        const response = await databases.listDocuments(
          DATABASE_ID,
          COLLECTION_IDS.checkableItems
        );
        console.log(response)
        return response.documents as unknown as CheckableItem[];
      } catch (error) {
        console.error("Error fetching checkable items:", error);
        throw error;
      }
    },
    enabled: isMounted, // Only run query on client-side
    retry: 2, // Retry failed requests twice
  });

  // Tournament creation mutation with enhanced error handling
  const createTournamentMutation = useMutation({
    mutationFn: async (newTournament: Omit<TournamentConfig, "id">) => {
      try {
        // Validate input before submission
        if (!newTournament.name.trim()) {
          throw new Error("Tournament name is required");
        }
        if (newTournament.activeWeapons.length === 0) {
          throw new Error("At least one weapon must be selected");
        }

        const response = await databases.createDocument(
          DATABASE_ID,
          COLLECTION_IDS.tournaments,
          newTournament.name.toLowerCase().replace(" ","-"),
          newTournament
        );
        return response;
      } catch (error) {
        console.error("Error creating tournament:", error);
        const appwriteError = error as AppwriteError;
        throw new Error(appwriteError.message || "Failed to create tournament");
      }
    },
    onError: (error) => {
      setErrorMessage(error.message);
    },
    onSuccess: () => {
      // Reset form on success
      setTournamentName("");
      setSelectedWeapons([]);
      setItemConfigs([]);
      setErrorMessage("");
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous errors

    try {
      await createTournamentMutation.mutateAsync({
        name: tournamentName,
        activeWeapons: selectedWeapons,
        itemConfigs: itemConfigs.filter(
          (config) => config.maxQuantity > 0 || config.required
        ),
      });
    } catch (error) {
      // Error handling is managed by mutation callbacks
      console.error("Submission error:", error);
    }
  };

  // Show loading state or return null while not mounted
  if (!isMounted) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Tournament Name */}
      <div>
        <label
          htmlFor="tournament-name"
          className="block text-sm font-medium mb-2"
        >
          Tournament Name
        </label>
        <input
          id="tournament-name"
          type="text"
          value={tournamentName}
          onChange={(e) => setTournamentName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      {/* Weapon Selection */}
      <div>
        <label className="block text-sm font-medium mb-2">Active Weapons</label>
        <div className="space-x-4">
          {(["epee", "foil", "sabre"] as const).map((weapon) => (
            <label key={weapon} className="inline-flex items-center">
              <input
                id={`weapon-${weapon}`}
                type="checkbox"
                checked={selectedWeapons.includes(weapon)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedWeapons([...selectedWeapons, weapon]);
                  } else {
                    setSelectedWeapons(
                      selectedWeapons.filter((w) => w !== weapon)
                    );
                  }
                }}
                className="mr-2"
              />
              {weapon.charAt(0).toUpperCase() + weapon.slice(1)}
            </label>
          ))}
        </div>
      </div>

      {/* Item Configuration */}
      <div>
        <h2 className="text-lg font-medium mb-4">Configure Items</h2>
        {isLoadingItems ? (
          <div className="text-gray-600">Loading items...</div>
        ) : itemsError ? (
          <div className="text-red-600">
            Error loading items.
            <button
              onClick={() => refetchItems()}
              className="ml-2 text-blue-500 underline"
            >
              Try again
            </button>
          </div>
        ) : checkableItems && checkableItems.length > 0 ? (
          checkableItems.map((item) => (
            <div key={item.id} className="mb-4 p-4 border rounded">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-2">
                Used for: {item.forWeapons.join(", ")}
              </p>
              <div className="flex space-x-4">
                <label
                  htmlFor={`quantity-${item.id}`}
                  className="inline-flex items-center"
                >
                  <span className="mr-2">Max Quantity:</span>
                  <input
                    id={`quantity-${item.id}`}
                    type="number"
                    min="0"
                    value={
                      itemConfigs.find((c) => c.itemId === item.id)
                        ?.maxQuantity ?? 0
                    }
                    onChange={(e) => {
                      const newConfigs = [...itemConfigs];
                      const configIndex = newConfigs.findIndex(
                        (c) => c.itemId === item.id
                      );
                      if (configIndex >= 0) {
                        newConfigs[configIndex] = {
                          ...newConfigs[configIndex],
                          maxQuantity: parseInt(e.target.value) || 0,
                        };
                      } else {
                        newConfigs.push({
                          itemId: item.id,
                          itemName: item.name,
                          maxQuantity: parseInt(e.target.value) || 0,
                          required: false,
                        });
                      }
                      setItemConfigs(newConfigs);
                    }}
                    className="w-20 p-1 border rounded"
                  />
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={
                      itemConfigs.find((c) => c.itemId === item.id)?.required ??
                      false
                    }
                    onChange={(e) => {
                      const newConfigs = [...itemConfigs];
                      const configIndex = newConfigs.findIndex(
                        (c) => c.itemId === item.id
                      );
                      if (configIndex >= 0) {
                        newConfigs[configIndex] = {
                          ...newConfigs[configIndex],
                          required: e.target.checked,
                        };
                      } else {
                        newConfigs.push({
                          itemId: item.id,
                          itemName: item.name,
                          maxQuantity: 0,
                          required: e.target.checked,
                        });
                      }
                      setItemConfigs(newConfigs);
                    }}
                    className="mr-2"
                  />
                  Required
                </label>
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-600">No items available</div>
        )}
      </div>

      {/* Error and Success Messages */}
      {errorMessage && (
        <div className="text-red-600 p-2 bg-red-50 rounded">{errorMessage}</div>
      )}
      {createTournamentMutation.isSuccess && (
        <div className="text-green-600 p-2 bg-green-50 rounded">
          Tournament created successfully
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed"
        disabled={createTournamentMutation.isPending || isLoadingItems}
      >
        {createTournamentMutation.isPending
          ? "Creating..."
          : "Create Tournament"}
      </button>
    </form>
  );
}
