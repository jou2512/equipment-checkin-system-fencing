export interface NavigationState {
  currentPath: string;
  previousPath: string | null;
  isTransitioning: boolean;
  timestamp: number;
}

export interface NavigationOptions {
  skipCache?: boolean;
  replace?: boolean;
}

export interface AdminNavigationContextValue {
  currentPath: string;
  previousPath: string | null;
  isTransitioning: boolean;
  navigateTo: (path: string, options?: NavigationOptions) => Promise<boolean>;
  prefetchRoute: (path: string) => Promise<void>;
  clearCache: (path?: string) => void;
}