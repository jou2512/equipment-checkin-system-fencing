// src/app/admin/material-check/page.tsx
"use client";

import { useState, useCallback } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { databases, COLLECTION_IDS, DATABASE_ID } from '@/lib/appwrite/config';
import { Query, ID } from 'appwrite';
import { TournamentConfig, useTournamentStore } from '@/lib/store/tournament-store';
import { useCheckInStore } from '@/lib/store/check-in-store';
import { 
  CheckInDocument, 
  CheckInStatus, 
  CreateCheckInData 
} from '@/lib/types/check-in';

export default function MaterialCheckInterface() {
  const { currentTournament } = useTournamentStore();
  const { 
    currentCheckIn, 
    setCurrentCheckIn, 
    clearCurrentCheckIn 
  } = useCheckInStore();

  // State for search and filtering
  const [searchQuery, setSearchQuery] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch check-in records
  const {
    data: checkInRecords,
    refetch: refetchCheckIns,
    isLoading: isLoadingCheckIns,
    error: checkInError
  } = useQuery<CheckInDocument[]>({
    queryKey: ['checkInRecords', currentTournament?.id, searchQuery],
    queryFn: async () => {
      if (!currentTournament) return [];

      const queries = [
        Query.equal('tournamentId', currentTournament.id),
        ...(searchQuery 
          ? [Query.or([
              Query.startsWith('checkNumber', searchQuery),
              Query.startsWith('fencerName', searchQuery)
          ])] 
          : [])
      ];

      try {
        const response = await databases.listDocuments(
          DATABASE_ID,
          COLLECTION_IDS.checkIns,
          queries
        );

        return response.documents as unknown as CheckInDocument[];
      } catch (error) {
        console.error('Failed to fetch check-in records:', error);
        throw error;
      }
    },
    enabled: !!currentTournament
  });

  // Mutation for creating a new check-in
  const createCheckInMutation = useMutation<CheckInDocument, Error, CreateCheckInData>({
    mutationFn: async (checkInData) => {
      try {
        const response = await databases.createDocument(
          DATABASE_ID,
          COLLECTION_IDS.checkIns,
          ID.unique(),
          checkInData
        );
        return response as unknown as CheckInDocument;
      } catch (error) {
        console.error('Failed to create check-in:', error);
        throw error;
      }
    },
    onSuccess: (newCheckIn) => {
      // Optionally refresh the list or add to local state
      refetchCheckIns();
    },
    onError: (error) => {
      setErrorMessage(error.message || 'Failed to create check-in');
    }
  });

  // Mutation for updating check-in status
  const updateCheckInStatusMutation = useMutation<
    CheckInDocument, 
    Error, 
    { checkInId: string; itemId: string; status: CheckInStatus }
  >({
    mutationFn: async ({ checkInId, itemId, status }) => {
      try {
        const checkInDoc = checkInRecords?.find(
          record => record.$id === checkInId
        );

        if (!checkInDoc) {
          throw new Error('Check-in record not found');
        }

        // Update item status within the document
        const updatedItemChecks = checkInDoc.itemChecks.map(itemCheck => 
          itemCheck.itemId === itemId 
            ? { ...itemCheck, status }
            : itemCheck
        );

        // Determine overall status
        const overallStatus = determineOverallStatus(updatedItemChecks);

        // Update document in Appwrite
        const updatedDoc = await databases.updateDocument(
          DATABASE_ID,
          COLLECTION_IDS.checkIns,
          checkInId,
          {
            itemChecks: updatedItemChecks,
            overallStatus
          }
        );

        return updatedDoc as unknown as CheckInDocument;
      } catch (error) {
        console.error('Failed to update check-in status:', error);
        throw error;
      }
    },
    onSuccess: () => {
      refetchCheckIns();
    },
    onError: (error) => {
      setErrorMessage(error.message || 'Failed to update status');
    }
  });

  // Utility function to determine overall check-in status
  const determineOverallStatus = useCallback(
    (itemChecks: CheckInDocument['itemChecks']): CheckInStatus => {
      if (itemChecks.some(item => item.status === 'rejected')) return 'rejected';
      if (itemChecks.every(item => item.status === 'completed')) return 'completed';
      if (itemChecks.some(item => item.status === 'in_progress')) return 'in_progress';
      return 'pending';
    },
    []
  );

  // Handler for selecting a check-in record
  const handleSelectCheckIn = (checkIn: CheckInDocument) => {
    setCurrentCheckIn(checkIn);
  };

  // Render methods
  const renderCheckInList = () => {
    if (isLoadingCheckIns) {
      return <div>Loading check-in records...</div>;
    }

    if (checkInError) {
      return <div className="text-red-500">Error loading records</div>;
    }

    return (
      <div className="grid gap-4">
        {checkInRecords?.map(record => (
          <CheckInListItem 
            key={record.$id} 
            record={record}
            onSelect={() => handleSelectCheckIn(record)}
          />
        ))}
      </div>
    );
  };

  // Early return if no tournament is selected
  if (!currentTournament) {
    return (
      <div className="text-center text-red-600 p-4">
        Please select a tournament first
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Material Check Interface</h1>
      
      {/* Search and Filter Section */}
      <div className="mb-4 flex space-x-2">
        <input
          type="text"
          placeholder="Search by check number or fencer name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow p-2 border rounded"
        />
        <button 
          onClick={() => refetchCheckIns()}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      {/* Check-in Records */}
      {renderCheckInList()}

      {/* Detailed Check Modal */}
      {currentCheckIn && (
        <CheckInDetailModal 
          checkIn={currentCheckIn}
          onClose={clearCurrentCheckIn}
          onUpdateStatus={(itemId, status) => 
            updateCheckInStatusMutation.mutate({
              checkInId: currentCheckIn.$id,
              itemId,
              status
            })
          }
        />
      )}

      {/* Error Handling */}
      {errorMessage && (
        <ErrorNotification 
          message={errorMessage} 
          onDismiss={() => setErrorMessage('')}
        />
      )}
    </div>
  );
}

// Subcomponents (would typically be in separate files in a larger project)
function CheckInListItem({ 
  record, 
  onSelect 
}: { 
  record: CheckInDocument, 
  onSelect: () => void 
}) {
  return (
    <div 
      className="border rounded p-4 hover:bg-gray-50 cursor-pointer"
      onClick={onSelect}
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold">{record.checkNumber}</h3>
          <p>{record.fencerName || 'Anonymous'}</p>
        </div>
        <span 
          className={`px-2 py-1 rounded ${
            record.overallStatus === 'completed' ? 'bg-green-100 text-green-800' :
            record.overallStatus === 'rejected' ? 'bg-red-100 text-red-800' :
            record.overallStatus === 'in_progress' ? 'bg-yellow-100 text-yellow-800' :
            'bg-gray-100 text-gray-800'
          }`}
        >
          {record.overallStatus}
        </span>
      </div>
    </div>
  );
}

function CheckInDetailModal({
  checkIn,
  onClose,
  onUpdateStatus
}: {
  checkIn: CheckInDocument;
  onClose: () => void;
  onUpdateStatus: (itemId: string, status: CheckInStatus) => void;
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            Check Details: {checkIn.checkNumber}
          </h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-4">
          {checkIn.itemChecks.map(itemCheck => (
            <div 
              key={itemCheck.itemId} 
              className="border rounded p-4 flex justify-between items-center"
            >
              <div>
                <h3 className="font-medium">{itemCheck.itemName}</h3>
                <p>Quantity: {itemCheck.quantity}</p>
              </div>
              <div className="flex space-x-2">
                <select
                  value={itemCheck.status}
                  onChange={(e) => onUpdateStatus(
                    itemCheck.itemId, 
                    e.target.value as CheckInStatus
                  )}
                  className="p-2 border rounded"
                >
                  <option value="pending">Pending</option>
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ErrorNotification({
  message,
  onDismiss,
}: {
  message: string;
  onDismiss: () => void;
}) {
  return (
    <div
      className="fixed bottom-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded shadow-lg flex items-center justify-between"
      role="alert"
    >
      <div className="flex items-center">
        <svg
          className="w-6 h-6 mr-2 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{message}</span>
      </div>
      <button
        onClick={onDismiss}
        className="ml-4 text-red-700 hover:text-red-900 focus:outline-none"
        aria-label="Dismiss error"
      >
        ✕
      </button>
    </div>
  );
}

// Utility functions for check-in management
export function generateCheckNumber(tournamentId: string): string {
  // Generate a unique check-in number based on tournament ID and timestamp
  const timestamp = new Date().getTime();
  const randomSuffix = Math.random().toString(36).substring(2, 7);
  return `${tournamentId.slice(
    0,
    4
  )}-${timestamp}-${randomSuffix}`.toUpperCase();
}

// Advanced error handling utility
export class CheckInError extends Error {
  constructor(
    public code: string,
    message: string,
    public details?: Record<string, any>
  ) {
    super(message);
    this.name = "CheckInError";
  }

  // Method to convert error to a user-friendly message
  toUserMessage(): string {
    const errorMessages: Record<string, string> = {
      INVALID_QUANTITY: "Invalid item quantity. Please check your input.",
      TOURNAMENT_MISMATCH:
        "Selected items do not match tournament requirements.",
      NETWORK_ERROR:
        "Unable to process check-in. Please check your connection.",
      DEFAULT: "An unexpected error occurred. Please try again.",
    };

    return errorMessages[this.code] || errorMessages["DEFAULT"];
  }

  // Static method for creating common error types
  static create(
    code: string,
    message: string,
    details?: Record<string, any>
  ): CheckInError {
    return new CheckInError(code, message, details);
  }
}

// Validation utility for check-in data
export function validateCheckInData(
  data: CreateCheckInData,
  tournamentConfig: TournamentConfig
): void {
  // Validate tournament match
  if (data.tournamentId !== tournamentConfig.id) {
    throw CheckInError.create(
      "TOURNAMENT_MISMATCH",
      "Tournament ID does not match current tournament"
    );
  }

  // Validate item quantities against tournament config
  data.itemChecks.forEach((itemCheck) => {
    const itemConfig = tournamentConfig.itemConfigs.find(
      (config) => config.itemId === itemCheck.itemId
    );

    if (!itemConfig) {
      throw CheckInError.create(
        "INVALID_ITEM",
        `Item ${itemCheck.itemId} not found in tournament configuration`
      );
    }

    // Check maximum quantity
    if (
      itemCheck.quantity > itemConfig.maxQuantity &&
      itemConfig.maxQuantity > 0
    ) {
      throw CheckInError.create(
        "INVALID_QUANTITY",
        `Exceeded max quantity for item ${itemCheck.itemName}`,
        {
          itemId: itemCheck.itemId,
          maxAllowed: itemConfig.maxQuantity,
          submitted: itemCheck.quantity,
        }
      );
    }

    // Check required items
    if (itemConfig.required && itemCheck.quantity === 0) {
      throw CheckInError.create(
        "MISSING_REQUIRED_ITEM",
        `Required item ${itemCheck.itemName} not submitted`
      );
    }
  });
}

// Logging utility for critical events
export function logCheckInEvent(
  eventType: "CREATE" | "UPDATE" | "DELETE",
  data: Partial<CheckInDocument>,
  additionalContext?: Record<string, any>
) {
  // In a real-world scenario, this would integrate with a logging service
  console.log(
    JSON.stringify(
      {
        timestamp: new Date().toISOString(),
        eventType,
        documentId: data.$id,
        tournamentId: data.tournamentId,
        ...additionalContext,
      },
      null,
      2
    )
  );
}