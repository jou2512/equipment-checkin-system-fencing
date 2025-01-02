// src/hooks/use-permissions.ts
import { useQuery } from '@tanstack/react-query';
import { teams, account } from '@/lib/appwrite/config';
import { useTournamentContext } from '@/contexts/tournament-context';
import { toast } from './use-toast';
import { useCallback } from 'react';

// Define role permissions structure
export const ROLE_PERMISSIONS = {
  'tournament-admin': [
    'create_invitations',
    'manage_equipment',
    'view_all_check-ins',
    'approve_check-ins',
    'manage_settings',
    'manage_roles'  // Special permission for role management
  ],
  'equipment-checker': [
    'view_assigned_check-ins',
    'update_check-ins',
    'manage_equipment'
  ],
  'participant': [
    'view_own_check-ins',
    'submit_equipment'
  ],
  'observer': [
    'view_public_check-ins'
  ]
} as const;

export type RoleType = keyof typeof ROLE_PERMISSIONS;
export type PermissionType = typeof ROLE_PERMISSIONS[RoleType][number];

export function usePermissions() {
  const { currentTournament } = useTournamentContext();

  // Get current user's membership in the tournament
  const { data: membership, isLoading } = useQuery({
    queryKey: ['teamMembership', currentTournament?.$id],
    queryFn: async () => {
      if (!currentTournament?.$id) return null;
      
      try {
        const currentUser = await account.get();
        const membershipList = await teams.listMemberships(currentTournament.$id);
        
        return membershipList.memberships.find(
          m => m.userId === currentUser.$id
        ) || null;
      } catch (error) {
        console.error('Failed to fetch team membership:', error);
        return null;
      }
    },
    enabled: !!currentTournament?.$id
  });

  // Get all team members and their roles
  const { data: allMembers } = useQuery({
    queryKey: ['teamMembers', currentTournament?.$id],
    queryFn: async () => {
      if (!currentTournament?.$id) return [];
      return await teams.listMemberships(currentTournament.$id);
    },
    enabled: !!currentTournament?.$id
  });

  const hasPermission = useCallback((permission: PermissionType): boolean => {
    if (!membership) return false;

    return membership.roles.some(role => {
      const roleKey = role as RoleType;
      return ROLE_PERMISSIONS[roleKey]?.includes(permission);
    });
  }, [membership]);

  const hasRole = useCallback((roles: RoleType | RoleType[]): boolean => {
    if (!membership) return false;
    
    const rolesToCheck = Array.isArray(roles) ? roles : [roles];
    return rolesToCheck.some(role => membership.roles.includes(role));
  }, [membership]);

  // Function to update member roles (requires admin permission)
  const updateMemberRoles = async (
    memberId: string,
    roles: RoleType[]
  ) => {
    if (!currentTournament?.$id || !hasPermission('manage_roles')) {
      throw new Error('No permission to manage roles');
    }

    try {
      await teams.updateMembership(
        currentTournament.$id,
        memberId,
        roles
      );

      toast({
        title: 'Roles Updated',
        description: 'Member roles have been updated successfully',
        className: 'bg-green-100'
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update member roles',
        variant: 'destructive'
      });
      throw error;
    }
  };

  return {
    membership,
    allMembers,
    isLoading,
    hasPermission,
    hasRole,
    updateMemberRoles,
    availableRoles: Object.keys(ROLE_PERMISSIONS) as RoleType[],
    getPermissionsForRole: (role: RoleType) => ROLE_PERMISSIONS[role]
  };
}