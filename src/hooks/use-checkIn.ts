// src/lib/hooks/use-check-ins.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { databases } from '@/lib/appwrite/config';
import { useCheckInStore } from '@/lib/store/check-in-store';
import { ID, Query } from 'appwrite';
import {
  CheckIn,
  Checkinitem,
  CheckInCheckInStatus,
  Tournament,
  CheckInCheckInStatusType,
  TournamentActiveWeapons,
  CheckinitemStatus,
  CheckinitemStatusType,
  DATABASE_IDS,
  COLLECTION_IDS
} from '@/lib/appwrite/types';
import { toast } from './use-toast';
import { ZodError, z } from "zod";

const MAX_RETRIES = 3;
const INITIAL_RETRY_DELAY = 1000; // 1 second

interface CreateCheckInError extends Error {
  code?: number;
}
 
// Enum for weapon types
const WeaponSchema = z.nativeEnum(TournamentActiveWeapons);

// Schema for status
const CheckInStatusSchema = z.nativeEnum(CheckinitemStatus);

// Schema for individual item check
const CheckinItemSchema = z.object({
  $id: z.string(),
  itemName: z.string().max(64),
  quantity: z.number().int().min(0),
  status: CheckInStatusSchema
});

// Schema for check-in updates
const CheckInUpdateSchema = z.object({
  fencerName: z
    .string()
    .max(64)
    .optional()
    .transform((val) => val?.trim()),
  nationalityCode: z
    .string()
    .length(3)
    .regex(/^[A-Z]{3}$/)
    .optional()
    .transform((val) => val?.toUpperCase()),
  weaponType: WeaponSchema.optional(),
  CheckInStatus: CheckInStatusSchema.optional(),
  pickupConfirmed: z.boolean().optional(),
  itemChecks: z.array(CheckinItemSchema).optional(),
}).strict();

// Types derived from schemas
type CheckInUpdate = z.infer<typeof CheckInUpdateSchema>;
type CheckinItemType = z.infer<typeof CheckinItemSchema>;

export function useCheckIns() {
  const queryClient = useQueryClient();
  const { checkInFilter } = useCheckInStore();

  // Fetch check-ins with filtering
  const {
    data: checkIns = [],
    isLoading,
    isError,
    refetch: refetchCheckIns
  } = useQuery<CheckIn[]>({
    queryKey: ['checkIns', checkInFilter],
    queryFn: async () => {
      const queries = [
        ...(checkInFilter.tournamentId 
          ? [Query.equal('tournamentId', checkInFilter.tournamentId)]
          : []),
        ...(checkInFilter.status 
          ? [Query.equal('CheckInStatus', checkInFilter.status)]
          : []),
        ...(checkInFilter.searchQuery
          ? [Query.or([
              Query.search('checkNumber', checkInFilter.searchQuery),
              Query.search('fencerName', checkInFilter.searchQuery)]
            )]
          : [])
      ];

      const response = await databases.listDocuments(
        DATABASE_IDS.CHECKING_SYSTEM,
          COLLECTION_IDS.CHECKINS,
        queries
      );
      return response.documents as CheckIn[];
    },
    staleTime: 30000 // 30 seconds
  });

  // Get single check-in details
  const getCheckIn = (checkInId: string) => 
    useQuery<CheckIn>({
      queryKey: ['checkIn', checkInId],
      queryFn: async () => {
        const response = await databases.getDocument(
          DATABASE_IDS.CHECKING_SYSTEM,
          COLLECTION_IDS.CHECKINS,
          checkInId
        );
        return response as CheckIn;
      },
      enabled: !!checkInId
    });

  // Create new check-in
  const createCheckIn = useMutation({
    mutationFn: async (data: Omit<CheckIn, '$id' | '$createdAt' | '$updatedAt' | 'checkNumber'>) => {
      const tournamentId = data.tournaments as string;
      if (!tournamentId) {
        throw new Error('Tournament ID is required');
      }

      return await attemptCheckInCreation(tournamentId, data);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['checkIns'] });
      toast({
        className: "bg-green-100",
        title: "Check-in Created",
        description: `Check-in #${data.checkNumber} has been created successfully.`
      });
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Failed to Create Check-in",
        description: error.message
      });
    }
  });

  // Update check-in status
  const updateCheckInItemStatus = useMutation({
    mutationFn: async ({
      checkInId,
      itemId,
      status
    }: {
      checkInId: string;
      itemId: string;
      status: CheckInCheckInStatus;
    }) => {
      const checkIn = await databases.getDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
          COLLECTION_IDS.CHECKINS,
        checkInId
      ) as CheckIn;

      const updatedItemChecks = checkIn.itemChecks?.map(item =>
        (item as Checkinitem).$id === itemId
          ? { ...(item as Checkinitem), status }
          : item
      );

      const overallStatus = calculateOverallStatus(updatedItemChecks as Checkinitem[]);

      return await databases.updateDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
          COLLECTION_IDS.CHECKINS,
        checkInId,
        {
          itemChecks: updatedItemChecks,
          CheckInStatus: overallStatus
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['checkIns'] });
      toast({
        className: "bg-green-100",
        title: "Status Updated",
        description: "Check-in status has been updated successfully."
      });
    }
  });

  // Confirm pickup
  const confirmPickup = useMutation({
    mutationFn: async (checkInId: string) => {
      return await databases.updateDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
          COLLECTION_IDS.CHECKINS,
        checkInId,
        { pickupConfirmed: true }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['checkIns'] });
      toast({
        className: "bg-green-100",
        title: "Pickup Confirmed",
        description: "Equipment pickup has been confirmed."
      });
    }
  });

  // Delete check-in
  const deleteCheckIn = useMutation({
    mutationFn: async (checkInId: string) => {
      return await databases.deleteDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
          COLLECTION_IDS.CHECKINS,
        checkInId
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['checkIns'] });
      toast({
        className: "bg-green-100",
        title: "Check-in Deleted",
        description: "Check-in has been deleted successfully."
      });
    }
  });

  const updateCheckIn = useMutation({
    mutationFn: async ({
      checkInId,
      updates,
      optimisticUpdate = true,
    }: {
      checkInId: string;
      updates: CheckInUpdate;
      optimisticUpdate?: boolean;
    }) => {
      try {
        // Get current check-in state
        const currentCheckIn = await databases.getDocument(
          DATABASE_IDS.CHECKING_SYSTEM,
          COLLECTION_IDS.CHECKINS,
          checkInId
        ) as CheckIn;

        // Validate updates using Zod
        const validatedUpdates = await validateUpdates(currentCheckIn, updates);

        // Apply optimistic update if enabled
        if (optimisticUpdate) {
          queryClient.setQueryData<CheckIn>(
            ["checkIn", checkInId],
            (old) => old ? { ...old, ...validatedUpdates } : old
          );
        }

        // Perform update
        const updatedCheckIn = await databases.updateDocument(
          DATABASE_IDS.CHECKING_SYSTEM,
          COLLECTION_IDS.CHECKINS,
          checkInId,
          {
            ...validatedUpdates
          }
        );

        return updatedCheckIn as CheckIn;
      } catch (error) {
        // Handle validation errors specifically
        if (error instanceof ZodError) {
          const errorMessage = error.errors
            .map((err) => `${err.path.join(".")}: ${err.message}`)
            .join(", ");
          toast({
            variant: "destructive",
            title: "Update Failed",
            description: `Validation failed: ${errorMessage}`,
          });
          throw new Error(`Validation failed: ${errorMessage}`);
        }

        // Revert optimistic update if it was applied
        if (optimisticUpdate) {
          queryClient.invalidateQueries({ queryKey: ["checkIn", checkInId] });
        }

        throw error;
      }
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["checkIns"] });
      queryClient.invalidateQueries({
        queryKey: ["checkIn", variables.checkInId],
      });

      toast({
        className: "bg-green-100",
        title: "Check-in Updated",
        description: "The check-in has been updated successfully.",
      });
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Update Failed",
        description: error.message,
      });
    },
  });

  // Helper function to calculate overall status
  function calculateOverallStatus(items: Checkinitem[]): CheckinitemStatusType {
    if (items.some(item => item.status === 'rejected')) return 'rejected';
    if (items.some(item => item.status === 'in_review')) return 'in_review';
    if (items.some(item => item.status === 'partially_approved')) return 'partially_approved';
    if (items.every(item => item.status === 'approved')) return 'approved';
    return 'pending';
  }

  async function validateUpdates(
    currentCheckIn: CheckIn,
    updates: CheckInUpdate
  ): Promise<CheckInUpdate> {
    // Parse updates through Zod schema
    const validatedUpdates = CheckInUpdateSchema.parse(updates);

    // Additional business logic validations
    if (
      validatedUpdates.pickupConfirmed &&
      (["pending", "in_review"].includes(currentCheckIn.CheckInStatus as string))
    ) {
      throw new Error("Cannot confirm pickup for non-approved check-in");
    }

    if (validatedUpdates.itemChecks) {
      // Validate item IDs exist in current check-in
      const currentItemIds = new Set(
        (currentCheckIn.itemChecks as Checkinitem[]).map((item) => item.$id)
      );
      
      const invalidItems = validatedUpdates.itemChecks.filter(
        (item) => !currentItemIds.has(item.$id)
      );

      if (invalidItems.length > 0) {
        throw new Error(
          `Invalid item IDs: ${invalidItems.map((item) => item.$id).join(", ")}`
        );
      }

      // Calculate overall status based on item checks
      validatedUpdates.CheckInStatus = calculateOverallStatus(
        validatedUpdates.itemChecks
      ) as CheckinitemStatus;
    }

    return validatedUpdates;
  }

  return {
    checkIns,
    isLoading,
    isError,
    getCheckIn,
    createCheckIn,
    updateCheckIn,
    updateCheckInItemStatus,
    confirmPickup,
    deleteCheckIn,
    refetchCheckIns
  };
}

async function attemptCheckInCreation(
    tournamentId: string,
    data: Omit<CheckIn, '$id' | '$createdAt' | '$updatedAt' | 'checkNumber'>,
    attempt: number = 1
  ): Promise<CheckIn> {
    try {
      // Get current tournament data
      const tournament = await databases.getDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.TOURNAMENTS,
        tournamentId
      ) as Tournament;

      const proposedNumber = (tournament.orderCount || 0) + 1;
      const eventKey = data.eventKey.toLowerCase().replace(/\s+/g, '-');

      // Attempt to create check-in with proposed number
      const checkIn = await databases.createDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
          COLLECTION_IDS.CHECKINS,
        ID.unique(),
        {
          ...data,
          checkNumber: proposedNumber,
          eventKey,
          CheckInStatus: 'pending' as CheckInCheckInStatus
        }
      );

      // If successful, update the tournament's order count
      await databases.updateDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.TOURNAMENTS,
        tournamentId,
        { orderCount: proposedNumber }
      );

      return checkIn as CheckIn;

    } catch (error) {
      const appwriteError = error as CreateCheckInError;
      
      // Check if error is due to duplicate eventKey/checkNumber
      if (appwriteError.code === 409 && attempt < MAX_RETRIES) {
        // Wait with exponential backoff before retrying
        const delay = INITIAL_RETRY_DELAY * Math.pow(2, attempt - 1);
        await new Promise(resolve => setTimeout(resolve, delay));
        
        // Retry with next attempt
        return attemptCheckInCreation(tournamentId, data, attempt + 1);
      }

      // If max retries reached or different error, throw
      throw new Error(
        attempt >= MAX_RETRIES
          ? `Failed to create check-in after ${MAX_RETRIES} attempts. Please try again.`
          : `Error creating check-in: ${appwriteError.message}`
      );
    }
}
  
