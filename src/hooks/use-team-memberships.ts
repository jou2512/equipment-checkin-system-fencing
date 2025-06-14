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
        
        const response = await fetch('/api/users/memberships', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer honoiscool',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ userId: user.$id })
        });
        
        const data = await response.json();
        if (!data.success) {
          throw new Error(data.error || 'Failed to fetch memberships');
        }
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
        // Process the tournament join code first
        const processResult = await processJoinCode(invitationCode);
        if (!processResult.success) {
          throw new Error("Invalid tournament code");
        }

        const { tournamentId, role } = decodeInviteCode(invitationCode);
        const user = await account.get();

        const response = await fetch('/api/teams/join', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer honoiscool',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            tournamentId,
            role,
            userEmail: user.email,
            userId: user.$id,
            userName: user.name
          })
        });

        const data = await response.json();
        if (!data.success) {
          throw new Error(data.error || 'Failed to join tournament');
        }

        return {
          ...data,
          tournamentId,
          role
        };
      } catch (error) {
        console.error('Tournament join failed', error);
        throw error;
      }
    },
    onSuccess: (data) => {
      // Clear stored data
      localStorage.removeItem(PENDING_CODE_KEY);
      localStorage.removeItem(RETURN_URL_KEY);

      // Show success toast with role information
      toast({
        title: "Successfully Joined!",
        description: `You've joined as a ${data.role}`,
        className: "bg-green-100",
      });

      // Handle redirect
      router.push(`tournament/${data.tournamentId}/${data.role}`);
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Failed to Join",
        description: error instanceof Error 
          ? error.message 
          : "Please check your code and try again.",
      });
    }
  });

  const getTournamentPrefs = useMutation({
    mutationFn: async (tournamentId: string) => {
      const response = await fetch('/api/teams/prefs', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer honoiscool',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ teamId: tournamentId })
      });
      
      const data = await response.json();
      if (!data.success) {
        throw new Error(data.error || 'Failed to fetch preferences');
      }
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