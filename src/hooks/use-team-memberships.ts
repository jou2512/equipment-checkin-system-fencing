import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { account, teams, users } from '@/lib/appwrite/config';
import { useTournaments } from '@/hooks/use-tournaments';
import { toast } from '@/hooks/use-toast';
import { 
  CheckInCheckInStatus, 
  Tournament, 
  CheckIn 
} from '@/lib/appwrite/types';
import { Models } from 'appwrite';
import { useRouter } from 'next/navigation';

// Invite Code Utilities
import { 
  generateInviteCode, 
  decodeInviteCode, 
  verifyInviteCode 
} from '@/lib/utils/invite-code-utils';
import { useCheckIns } from './use-checkIn';

/**
 * Represents an enriched team membership with tournament and check-in details
 */
export interface EnrichedTeamMembership {
  $id: string;
  teamId: string;
  userId: string;
  userName: string;
  userEmail: string;
  role: string[];
  joined: string;
  tournament?: Tournament | null;
  checkIns: CheckIn[];
  upcomingCheckIns: CheckIn[];
  pastCheckIns: CheckIn[];
}

/**
 * Hook to manage team memberships with advanced functionality
 * @returns Object containing team memberships methods and data
 */
export function useTeamMemberships() {
  const queryClient = useQueryClient();
  const router = useRouter();

  // Fetch check-ins and tournaments to enrich membership data
  const { checkIns } = useCheckIns();
  const { tournaments } = useTournaments();

  // Fetch team memberships
  const {
    data: rawMemberships,
    isLoading,
    isError,
    error,
    refetch: refetchMemberships
  } = useQuery<Models.Membership[]>({
    queryKey: ['teamMemberships'],
    queryFn: async () => {
      try {
        // Get current user
        const user = await account.get();
        
        // Fetch team memberships for the user
        const membershipResponse = await users.listMemberships(user.$id);
        
        return membershipResponse.memberships;
      } catch (fetchError) {
        console.error('Failed to fetch team memberships', fetchError);
        throw fetchError;
      }
    },
    retry: 1,
    staleTime: 5 * 60 * 1000 // 5 minutes
  });

  // Enrich memberships with tournament and check-in data
  const enrichedMemberships = useMemo<EnrichedTeamMembership[]>(() => {
    if (!rawMemberships) return [];
    
    return rawMemberships.map(membership => {
      // Find corresponding tournament (team ID === tournament ID)
      const tournament = tournaments.find(
        t => t.$id === membership.teamId
      );

      // Find associated check-ins
      const tournamentCheckIns = checkIns.filter(
        checkIn => checkIn.tournaments === membership.teamId
      );

      return {
        $id: membership.$id,
        teamId: membership.teamId,
        userId: membership.userId,
        userName: membership.userName,
        userEmail: membership.userEmail,
        role: membership.roles,
        joined: membership.$createdAt,
        tournament: tournament || null,
        checkIns: tournamentCheckIns,
        upcomingCheckIns: tournamentCheckIns.filter(
          checkIn => checkIn.CheckInStatus !== CheckInCheckInStatus.APPROVED
        ),
        pastCheckIns: tournamentCheckIns.filter(
          checkIn => checkIn.CheckInStatus === CheckInCheckInStatus.APPROVED
        ),
      };
    });
  }, [rawMemberships, tournaments, checkIns]);

  /**
   * Generate an invitation code for a specific tournament and role
   * @param tournamentId Tournament unique identifier
   * @param role User role in the tournament
   * @param metadata Optional additional metadata
   * @returns Invite code string
   */
  const generateTournamentInvite = (
    tournamentId: string, 
    role: string = 'participant',
    metadata?: Record<string, any>
  ): string => {
    return generateInviteCode({
      tournamentId,
      role,
      metadata,
      expiresAt: Math.floor(Date.now() / 1000) + (30 * 24 * 60 * 60) // 30 days
    });
  };

  /**
   * Mutation to join a tournament using an invitation code
   */
  const joinTournamentByCode = useMutation({
    mutationFn: async (invitationCode: string) => {
      try {
        // Verify and decode the invite code
        const { tournamentId, role } = decodeInviteCode(invitationCode);

        // Get current user
        const user = await account.get();

        // Create team (if not exists)
        let team;
        try {
          team = await teams.get(tournamentId);
        } catch {
          // Team doesn't exist, create it
          team = await teams.create(tournamentId, tournamentId);
        }

        // Create membership
        const membership = await teams.createMembership(
          tournamentId,
          [role],
          user.email
        );

        // Invalidate and refetch memberships
        await queryClient.invalidateQueries({ queryKey: ['teamMemberships'] });

        return { team, membership };
      } catch (error) {
        console.error('Tournament join failed', error);
        throw error;
      }
    },
    onSuccess: () => {
      toast({
        title: 'Tournament Joined',
        description: 'You have successfully joined the tournament.',
        className: 'bg-green-100'
      });
      
      // Redirect to profile
      router.push('/profile');
    },
    onError: (error) => {
      toast({
        title: 'Join Failed',
        description: error instanceof Error 
          ? error.message 
          : 'Failed to join tournament. Please try again.',
        variant: 'destructive'
      });
    }
  });

  /**
   * Check if a user is already a member of a specific tournament
   * @param tournamentId - ID of the tournament to check
   * @returns Boolean indicating membership status
   */
  const isMemberOfTournament = (tournamentId: string): boolean => {
    return enrichedMemberships.some(
      membership => membership.teamId === tournamentId
    );
  };

  /**
   * Get a specific tournament membership
   * @param tournamentId - ID of the tournament
   * @returns Enriched membership or undefined
   */
  const getTournamentMembership = (tournamentId: string): EnrichedTeamMembership | undefined => {
    return enrichedMemberships.find(
      membership => membership.teamId === tournamentId
    );
  };

  const getTournamentPrefs = useMutation({
    mutationFn: async (tournamentId: string) => {
      const tournamentPrefs = await teams.getPrefs(tournamentId);
      return tournamentPrefs;
    },
    onSuccess: (data) => {
      console.log('Tournament preferences fetched successfully:', data);
      // Additional logic here, if needed
    },
    onError: (error) => {
      console.error('Failed to fetch tournament preferences:', error);
      // Handle error here, such as showing a toast notification
    },
    }
  );

  return {
    memberships: enrichedMemberships,
    isLoading,
    isError,
    error,
    refetchMemberships,
    joinTournamentByCode,
    generateTournamentInvite,
    verifyInviteCode,
    decodeInviteCode,
    isMemberOfTournament,
    getTournamentMembership,
    getTournamentPrefs
  };
}

