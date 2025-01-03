import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { databases, account } from '@/lib/appwrite/config';
import { useTournamentContext } from '@/contexts/tournament-context';
import { toast } from './use-toast';
import { useTournamentCodes } from './use-tournament-codes';
import { useTournamentStore } from '@/lib/store/tournament-store';
import { ID, Query } from 'appwrite';
import { 
  DATABASE_IDS, 
  COLLECTION_IDS 
} from '@/lib/appwrite/types';

// Tournament roles remain the same
export const TOURNAMENT_ROLES = {
  'checkin-staff': {
    name: 'Check-in Staff',
    code: null, 
    permissions: ['view-checkins', 'manage-equipment', 'update-submissions']
  },
  'participant': {
    name: 'Participant',
    code: null,
    permissions: ['view-own-checkins', 'create-submissions']
  }
} as const;

export type TournamentRoleType = keyof typeof TOURNAMENT_ROLES;

// Interface for tournament codes in the database
interface TournamentCodeEntry {
  $id?: string;
  code: string;
  tournamentId: string;
  role: TournamentRoleType;
  name: string;
  description?: string;
  active?: boolean;
  expiresAt?: string;
}

export function useTournamentInvites() {
  const { currentTournament } = useTournamentContext();
  const queryClient = useQueryClient();
  const { setCurrentTournamentId } = useTournamentStore();
  const { findCode } = useTournamentCodes();

  // Generate a readable 6-digit code
  const generateInviteCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Store or update role codes for the tournament
  const updateRoleCodes = useMutation({
    mutationFn: async (role: TournamentRoleType) => {
    if (!currentTournament?.$id) throw new Error('No tournament selected');

    // Find and deactivate existing active code for THIS specific role
    const existingCodesResponse = await databases.listDocuments(
      DATABASE_IDS.CHECKING_SYSTEM,
      COLLECTION_IDS.TOURNAMENT_CODES,
      [
        Query.equal('tournamentId', currentTournament.$id),
        Query.equal('role', role),
        Query.equal('active', true)
      ]
    );

    // Deactivate ONLY the existing active code for this specific role
    if (existingCodesResponse.documents.length > 0) {
      await databases.updateDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.TOURNAMENT_CODES,
        existingCodesResponse.documents[0].$id,
        { active: false }
      );
    }

    // Generate new code
    const code = generateInviteCode();

    // Create a new active code entry
    await databases.createDocument(
      DATABASE_IDS.CHECKING_SYSTEM,
      COLLECTION_IDS.TOURNAMENT_CODES,
      ID.unique(),
      {
        code,
        tournamentId: currentTournament.$id,
        role,
        name: TOURNAMENT_ROLES[role].name,
        active: true,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
      }
    );
    
    toast({
      title: 'Code Updated',
      description: `New code generated for ${TOURNAMENT_ROLES[role].name}`
    });

    return code;
  },
    onSuccess: () => {
      queryClient.invalidateQueries({ 
        queryKey: ['tournament-codes', currentTournament?.$id] 
      });
    },
    onError: (error) => {
      toast({
        variant: 'destructive',
        title: 'Update failed',
        description: error instanceof Error ? error.message : 'Please try again',
      });
    }
  });

  // Get the current codes for the tournament
  const { data: roleCodes } = useQuery({
    queryKey: ['tournament-codes', currentTournament?.$id],
    queryFn: async () => {
      if (!currentTournament?.$id) return null;

      // Fetch active codes for this tournament
      const response = await databases.listDocuments(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.TOURNAMENT_CODES,
        [
          Query.equal('tournamentId', currentTournament.$id),
          Query.equal('active', true)
        ]
      );
      
      // Transform response to match previous structure
      const role_codes = {
        "checkin-staff": response.documents.find(
          (doc: any) => (doc as TournamentCodeEntry).role === 'checkin-staff'
        )?.code,
        "participant": response.documents.find(
          (doc: any) => (doc as TournamentCodeEntry).role === 'participant'
        )?.code
      };

      return role_codes || {};
    },
    enabled: !!currentTournament?.$id
  });

  // Process a join code
  const processJoinCode = async (code: string) => {
    try {
      // Find the code in our collection
      const response = await databases.listDocuments(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.TOURNAMENT_CODES,
        [
          Query.equal('code', code),
          Query.equal('active', true)
        ]
      );

      // Check if code exists and is valid
      if (response.documents.length === 0) {
        throw new Error('Invalid or expired code');
      }

      const codeDetails = response.documents[0] as unknown as TournamentCodeEntry;

      // Get current user
      const user = await account.get();

      // Set as current tournament
      setCurrentTournamentId(codeDetails.tournamentId);

      toast({
        title: 'Successfully Joined!',
        description: `You've joined as ${codeDetails.name}`,
        className: 'bg-green-100'
      });

      return {
        success: true,
        tournamentId: codeDetails.tournamentId,
        role: codeDetails.role
      };
    } catch (error) {
      console.error('Join failed:', error);
      toast({
        variant: 'destructive',
        title: 'Invalid Code',
        description: error instanceof Error ? error.message : 'Failed to join tournament'
      });
      
      return { success: false };
    }
  };

  return {
    roleCodes,
    updateRoleCodes,
    processJoinCode,
    availableRoles: TOURNAMENT_ROLES
  };
}