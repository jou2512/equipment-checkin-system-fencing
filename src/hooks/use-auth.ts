

import { useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { account } from '@/lib/appwrite/config';
import { ID, Models } from 'appwrite';
import { useRouter } from 'next/navigation';
import { toast } from '@/hooks/use-toast';

/**
 * Type definitions for user profile and preferences
 */
export interface UserPreferences {
    role: string,
  nationality?: string;
  preferredWeapon?: 'epee' | 'foil' | 'sabre';
  onboardingCompleted?: boolean;
  language?: string;
  notificationSettings?: {
    email: boolean;
    push: boolean;
  };
  lastActiveTeam?: string;
}

export interface UserProfile extends Models.User<UserPreferences> {
  isAdmin?: boolean;
}

/**
 * Local authentication state interface
 */
interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  sessionId: string | null;
  setSession: (sessionId: string | null) => void;
}

/**
 * Hook for initializing authentication state
 * This should be used in the root layout
 */
export function useInitAuth() {
  const queryClient = useQueryClient();
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await account.get();
        console.log(user)
        queryClient.setQueryData(['user'], user);
      } catch {
        queryClient.setQueryData(['user'], null);
        router.push('/login');
      }
    };

    // Initial session check
    fetchUser();

    return () => {
      // Cleanup if needed
    };
  }, [queryClient, router]);
}

/**
 * Main auth hook for managing user authentication state
 */
export function useAuth() {
  const queryClient = useQueryClient();
  const router = useRouter();

  // Get current user
  const {
    data: user,
    isLoading,
    error
  } = useQuery({
    queryKey: ['user'],
    queryFn: () => account.get(),
    retry: false,
    staleTime: 5 * 60 * 1000 // Consider user data fresh for 5 minutes
  });

  // Sign in mutation
  const signIn = useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
      await account.createEmailPasswordSession(email, password);
      return account.get();
    },
    onSuccess: async (user) => {
      // Check user preferences
      const prefs = await account.getPrefs();

      // Route based on onboarding status
      if (!prefs.onboardingComplete) {
        await queryClient.setQueryData(['user'], user);
        queryClient.invalidateQueries({ queryKey: ['user'] })
        toast({
          title: "Login Successful",
          description: "Pleas Complete the Onboarding!",
        });
        router.push("/onboarding");
      } else {
        await queryClient.setQueryData(['user'], user);
        queryClient.invalidateQueries({ queryKey: ['user'] })
        toast({
          title: "Login Successful",
          description: "Welcome back!",
        });
        router.push('/profile');
      }
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Sign in failed",
        description: error instanceof Error ? error.message : "Please try again",
      });
    }
  });

  // Sign up mutation
  const signUp = useMutation({
    mutationFn: async ({ email, password, name }: { email: string; password: string; name: string }) => {
      // Create user account
      await account.create(ID.unique(), email, password, name);
      // Create session
      await account.createEmailPasswordSession(email, password);
      return account.get();
    },
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user);
      queryClient.invalidateQueries({ queryKey: ['user'] })
      toast({ title: "Welcome!" });
      router.push('/profile');
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Sign up failed",
        description: error instanceof Error ? error.message : "Please try again",
      });
    }
  });

  // Sign out mutation
  const signOut = useMutation({
    mutationFn: () => account.deleteSession('current'),
    onSuccess: () => {
      queryClient.setQueryData(['user'], null);
      router.push('/login');
      toast({ title: "Signed out successfully" });
    }
  });

  // Update preferences mutation
  const updatePreferences = useMutation({
    mutationFn: async (preferences: Partial<UserPreferences>) => {
      const currentPrefs = (user && user.prefs) || {};
      const newPrefs = {
        ...currentPrefs,
        ...preferences
      };
      
      await account.updatePrefs(newPrefs);
      return newPrefs;
    },
    onSuccess: (newPrefs) => {
      // Update local user data
      queryClient.setQueryData(['user'], (old: UserProfile | null) => 
        old ? { ...old, prefs: newPrefs } : old
      );
      
      toast({
        title: "Preferences updated",
        description: "Your changes have been saved.",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Update failed",
        description: error instanceof Error ? error.message : "Please try again",
      });
    },
  });

  // Complete onboarding mutation
  const completeOnboarding = useMutation({
    mutationFn: async (preferences: Partial<UserPreferences>) => {
      return updatePreferences.mutateAsync({
        ...preferences,
        onboardingCompleted: true
      });
    },
    onSuccess: () => {
      toast({
        title: "Welcome aboard!",
        description: "Your profile setup is complete.",
      });
    },
  });

  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    error,
    signIn,
    signUp,
    signOut,
    updatePreferences,
    completeOnboarding,
  };
}
