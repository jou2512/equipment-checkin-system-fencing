import { useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { account } from '@/lib/appwrite/config';
import { ID, Models, AppwriteException } from 'appwrite';
import { useRouter } from 'next/navigation';
import { toast } from '@/hooks/use-toast';

// Constants
const USER_QUERY_KEY = ['user'] as const;
const SESSION_STORAGE_KEY = 'lastActiveSession';
const STALE_TIME = 5 * 60 * 1000; // 5 minutes

/**
 * Type definitions for user profile and preferences
 */
export type PreferredWeapon = 'epee' | 'foil' | 'sabre';

export interface UserPreferences {
  role: string;
  nationality?: string;
  preferredWeapon?: PreferredWeapon;
  onboardingCompleted: boolean;
  language?: string;
  notificationSettings: {
    email: boolean;
    push: boolean;
  };
  lastActiveTeam?: string;
}

export interface UserProfile extends Models.User<UserPreferences> {
  isAdmin?: boolean;
}

/**
 * Authentication error types
 */
export enum AuthErrorType {
  INVALID_CREDENTIALS = 'invalid_credentials',
  EMAIL_EXISTS = 'email_exists',
  NETWORK_ERROR = 'network_error',
  UNKNOWN = 'unknown',
}

export class AuthError extends Error {
  constructor(
    public type: AuthErrorType,
    message: string,
    public originalError?: Error
  ) {
    super(message);
    this.name = 'AuthError';
  }
}

/**
 * Helper functions for error handling
 */
const handleAuthError = (error: unknown): AuthError => {
  if (error instanceof AppwriteException) {
    switch (error.code) {
      case 401:
        return new AuthError(
          AuthErrorType.INVALID_CREDENTIALS,
          'Invalid email or password'
        );
      case 409:
        return new AuthError(
          AuthErrorType.EMAIL_EXISTS,
          'An account with this email already exists'
        );
      default:
        return new AuthError(
          AuthErrorType.UNKNOWN,
          error.message,
          error
        );
    }
  }
  
  if (error instanceof Error && error.message.includes('network')) {
    return new AuthError(
      AuthErrorType.NETWORK_ERROR,
      'Network connection error. Please check your internet connection.'
    );
  }

  return new AuthError(
    AuthErrorType.UNKNOWN,
    'An unexpected error occurred'
  );
};

/**
 * Hook for initializing authentication state
 * This should be used in the root layout
 */
export function useInitAuth() {
  const queryClient = useQueryClient();
  const router = useRouter();

  useEffect(() => {
    const lastSessionId = sessionStorage.getItem(SESSION_STORAGE_KEY);
    
    const fetchUser = async () => {
      try {
        const user = await account.get();
        queryClient.setQueryData(USER_QUERY_KEY, user);
        sessionStorage.setItem(SESSION_STORAGE_KEY, user.$id);
      } catch (error) {
        queryClient.setQueryData(USER_QUERY_KEY, null);
        sessionStorage.removeItem(SESSION_STORAGE_KEY);
        
        // Only redirect to login if there was a previous session
        if (lastSessionId) {
          router.push('/login');
        }
      }
    };

    if (lastSessionId) {
      fetchUser();
    }

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

  // Get current user with proper typing
  const {
    data: user,
    isLoading,
    error
  } = useQuery<UserProfile, AuthError>({
    queryKey: USER_QUERY_KEY,
    queryFn: async () => {
      try {
        return await account.get();
      } catch (error) {
        throw handleAuthError(error);
      }
    },
    retry: (failureCount, error) => {
      // Only retry network errors, up to 3 times
      return error.type === AuthErrorType.NETWORK_ERROR && failureCount < 3;
    },
    staleTime: STALE_TIME
  });

  // Default preferences
  const defaultPreferences: UserPreferences = {
    role: 'user',
    onboardingCompleted: false,
    notificationSettings: {
      email: true,
      push: false,
    }
  };

  // Sign in mutation
  const signIn = useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
      try {
        await account.createEmailPasswordSession(email, password);
        return await account.get();
      } catch (error) {
        throw handleAuthError(error);
      }
    },
    onSuccess: async (user) => {
      try {
        const prefs = await account.getPrefs();
        await queryClient.setQueryData(USER_QUERY_KEY, user);
        sessionStorage.setItem(SESSION_STORAGE_KEY, user.$id);
        
        if (!prefs.onboardingCompleted) {
          toast({
            title: "Login Successful",
            description: "Please Complete the Onboarding!",
          });
          router.push("/onboarding");
        } else {
          toast({
            title: "Welcome back!",
            description: `Signed in as ${user.name}`,
          });
         const returnUrl = localStorage.getItem('returnUrl') || '/profile';
         localStorage.removeItem('returnUrl');
         router.push(returnUrl);
        }
      } catch (error) {
        // Handle preference fetching error
        console.error('Error fetching preferences:', error);
        router.push('/profile');
      }
    },
    onError: (error: AuthError) => {
      toast({
        variant: "destructive",
        title: "Sign in failed",
        description: error.message,
      });
    }
  });

  // Sign up mutation
  const signUp = useMutation({
    mutationFn: async ({
      email,
      password,
      name
    }: {
      email: string;
      password: string;
      name: string;
    }) => {
      try {
        // Create user account with default preferences
        const user = await account.create(
          ID.unique(),
          email,
          password,
          name
        );
        
        // Set default preferences
        await account.updatePrefs(defaultPreferences);
        
        // Create session
        await account.createEmailPasswordSession(email, password);
        return user;
      } catch (error) {
        throw handleAuthError(error);
      }
    },
    onSuccess: (user) => {
      queryClient.setQueryData(USER_QUERY_KEY, user);
      sessionStorage.setItem(SESSION_STORAGE_KEY, user.$id);
      toast({
        title: "Welcome!",
        description: "Your account has been created successfully."
      });
      router.push('/onboarding');
    },
    onError: (error: AuthError) => {
      toast({
        variant: "destructive",
        title: "Sign up failed",
        description: error.message,
      });
    }
  });

  // Sign out mutation
  const signOut = useMutation({
    mutationFn: async () => {
      try {
        await account.deleteSession('current');
      } catch (error) {
        throw handleAuthError(error);
      }
    },
    onSuccess: () => {
      queryClient.setQueryData(USER_QUERY_KEY, null);
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
      router.push('/login');
      toast({ title: "Signed out successfully" });
    },
    onError: (error: AuthError) => {
      toast({
        variant: "destructive",
        title: "Sign out failed",
        description: error.message,
      });
    }
  });

  // Update preferences mutation with optimistic updates
  const updatePreferences = useMutation({
    mutationFn: async (preferences: Partial<UserPreferences>) => {
      try {
        const currentPrefs = (user?.prefs || defaultPreferences);
        const newPrefs = {
          ...currentPrefs,
          ...preferences
        };
        
        return await account.updatePrefs(newPrefs);
      } catch (error) {
        throw handleAuthError(error);
      }
    },
    onMutate: async (newPreferences) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({queryKey: USER_QUERY_KEY});

      // Snapshot the previous value
      const previousUser = queryClient.getQueryData<UserProfile>(USER_QUERY_KEY);

      // Optimistically update to the new value
      if (previousUser) {
        queryClient.setQueryData<UserProfile>(USER_QUERY_KEY, {
          ...previousUser,
          prefs: {
            ...previousUser.prefs,
            ...newPreferences
          }
        });
      }

      return { previousUser };
    },
    onError: (error: AuthError, _, context) => {
      // Rollback to the previous value on error
      if (context?.previousUser) {
        queryClient.setQueryData(USER_QUERY_KEY, context.previousUser);
      }
      
      toast({
        variant: "destructive",
        title: "Update failed",
        description: error.message,
      });
    },
    onSuccess: () => {
      toast({
        title: "Preferences updated",
        description: "Your changes have been saved.",
      });
    },
    onSettled: () => {
      // Always refetch after error or success
      queryClient.invalidateQueries({queryKey: USER_QUERY_KEY});
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
      const returnUrl = localStorage.getItem('returnUrl') || '/profile';
      localStorage.removeItem('returnUrl');
      router.push(returnUrl);
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