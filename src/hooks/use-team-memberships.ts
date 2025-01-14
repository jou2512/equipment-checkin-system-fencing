import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { account } from '@/lib/appwrite/config';
import { useTournaments } from '@/hooks/use-tournaments';
import { toast } from '@/hooks/use-toast';
import { 
  CheckInCheckInStatus, 
  Tournament, 
  CheckIn 
} from '@/lib/appwrite/types';
import { Models } from 'appwrite';
import { useRouter } from 'next/navigation';
import { client } from '@/lib/hono/hono-client';

// Invite Code Utilities
import { 
  generateInviteCode, 
  decodeInviteCode, 
  verifyInviteCode 
} from '@/lib/utils/invite-code-utils';
import { useCheckIns } from './use-checkIn';

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

export function useTeamMemberships() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { checkIns } = useCheckIns();
  const { tournaments } = useTournaments();

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
        const user = await account.get();
        
        // Use Hono endpoint to get memberships
        const response = await client.api.users.memberships.$post({
          json: { userId: user.$id }
        });
        
        const data = await response.json();
        if (!data.success) {
          // @ts-expect-error
          throw new Error(data.error || 'Failed to fetch memberships');
        }
        // @ts-expect-error
        return data.memberships;
      } catch (fetchError) {
        console.error('Failed to fetch team memberships', fetchError);
        throw fetchError;
      }
    },
    retry: 1,
    staleTime: 5 * 60 * 1000 // 5 minutes
  });

  // Enrich memberships logic remains the same
  const enrichedMemberships = useMemo<EnrichedTeamMembership[]>(() => {
    if (!rawMemberships) return [];
    
    return rawMemberships.map(membership => {
      const tournament = tournaments.find(t => t.$id === membership.teamId);
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

  const joinTournamentByCode = useMutation({
    mutationFn: async (invitationCode: string) => {
      try {
        const { tournamentId, role } = decodeInviteCode(invitationCode);
        const user = await account.get();

        // Use Hono endpoint to join tournament
        const response = await client.api.teams.join.$post({
          json: {
            tournamentId,
            role,
            userEmail: user.email,
            userId: user.$id,
            userName: user.name
          }
        });

        const data = await response.json();
        if (!data.success) {
          // @ts-expect-error
          throw new Error(data.error || 'Failed to join tournament');
        }

        await queryClient.invalidateQueries({ queryKey: ['teamMemberships'] });
        return data;
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

  const getTournamentPrefs = useMutation({
    mutationFn: async (tournamentId: string) => {
      const response = await client.api.teams.prefs.$post({
        json: { teamId: tournamentId }
      });
      
      const data = await response.json();
      if (!data.success) {
        // @ts-expect-error
        throw new Error(data.error || 'Failed to fetch preferences');
      }
      // @ts-expect-error
      return data.preferences;
    },
    onSuccess: (data) => {
      console.log('Tournament preferences fetched successfully:', data);
    },
    onError: (error) => {
      console.error('Failed to fetch tournament preferences:', error);
    },
  });

  // Helper functions remain the same
  const isMemberOfTournament = (tournamentId: string): boolean => {
    return enrichedMemberships.some(
      membership => membership.teamId === tournamentId
    );
  };

  const getTournamentMembership = (tournamentId: string): EnrichedTeamMembership | undefined => {
    return enrichedMemberships.find(
      membership => membership.teamId === tournamentId
    );
  };

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