// src/lib/types/tournament-codes.ts
export interface TournamentCode {
  $id?: string;
  code: string;           // The 6-digit code
  tournamentId: string;   // Reference to the tournament/team
  role: string;          // The role this code grants
  name: string;          // Display name for the code (e.g., "Staff Access")
  description?: string;  // Optional description
  active: boolean;       // Whether this code is currently active
}

// src/hooks/use-tournament-codes.ts
import { useQuery, useMutation } from '@tanstack/react-query';
import { databases } from '@/lib/appwrite/config';
import { ID, Query } from 'appwrite';
import { toast } from './use-toast';
import { DATABASE_IDS, COLLECTION_IDS } from '@/lib/appwrite/types';

export function useTournamentCodes() {
  // Generate a readable 6-digit code
  const generateCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Create a new tournament code
  const createCode = useMutation({
    mutationFn: async ({ 
      tournamentId, 
      role, 
      name,
      description 
    }: Omit<TournamentCode, '$id' | 'code' | 'active'>) => {
      const code = generateCode();

      return await databases.createDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.TOURNAMENT_CODES,
        ID.unique(),
        {
          code,
          tournamentId,
          role,
          name,
          description,
          active: true
        }
      );
    },
    onSuccess: () => {
      toast({
        title: 'Code Created',
        description: 'New tournament code has been generated'
      });
    }
  });

  // Find and validate a code
  const findCode = async (code: string) => {
    try {
      const response = await databases.listDocuments(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.TOURNAMENT_CODES,
        [
          Query.equal('code', code),
          Query.equal('active', true)
        ]
      );

      if (response.documents.length === 0) {
        throw new Error('Invalid or expired code');
      }

      return response.documents[0] as unknown as TournamentCode;
    } catch (error) {
      console.error('Code lookup failed:', error);
      throw error;
    }
  };

  // Get codes for a tournament
  const useGetTournamentCodes = (tournamentId?: string) => {
    return useQuery({
      queryKey: ['tournament-codes', tournamentId],
      queryFn: async () => {
        if (!tournamentId) return [];
        
        const response = await databases.listDocuments(
          DATABASE_IDS.CHECKING_SYSTEM,
          COLLECTION_IDS.TOURNAMENT_CODES,
          [Query.equal('tournamentId', tournamentId)]
        );

        return response.documents as unknown as TournamentCode[];
      },
      enabled: !!tournamentId
    });
  };

  // Toggle code active status
  const toggleCodeStatus = useMutation({
    mutationFn: async ({ 
      codeId, 
      active 
    }: { 
      codeId: string; 
      active: boolean 
    }) => {
      return await databases.updateDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.TOURNAMENT_CODES,
        codeId,
        { active }
      );
    }
  });

  return {
    createCode,
    findCode,
    useGetTournamentCodes,
    toggleCodeStatus
  };
}