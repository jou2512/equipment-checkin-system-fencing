// lib/hooks/use-admin-navigation.ts
"use client";

import { useCallback, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { atom, useAtom } from 'jotai';
import { NavigationState, NavigationOptions } from '@/lib/types/navigation';

const initialState: NavigationState = {
  currentPath: '/admin',
  previousPath: null,
  isTransitioning: false,
  timestamp: Date.now()
};

const navigationStateAtom = atom<NavigationState>(initialState);

export function useAdminNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const [navState, setNavState] = useAtom(navigationStateAtom);
  const routeCacheRef = useRef<Map<string, any>>(new Map());

  const navigateTo = useCallback(async (
    path: string, 
    options: NavigationOptions = {}
  ) => {
    try {
      setNavState((prev: NavigationState) => ({
        ...prev,
        isTransitioning: true,
        previousPath: prev.currentPath,
        timestamp: Date.now()
      }));

      if (options.replace) {
        router.replace(path);
      } else {
        router.push(path);
      }

      setNavState((prev: NavigationState) => ({
        ...prev,
        currentPath: path,
        isTransitioning: false,
        timestamp: Date.now()
      }));

      return true;
    } catch (error) {
      console.error('Navigation failed:', error);
      setNavState((prev: NavigationState) => ({
        ...prev,
        isTransitioning: false,
        timestamp: Date.now()
      }));
      return false;
    }
  }, [router, setNavState]);

  const prefetchRoute = useCallback(async (path: string) => {
    try {
      // Implement prefetching logic here
      router.prefetch(path);
    } catch (error) {
      console.error('Prefetch failed:', error);
    }
  }, [router]);

  const clearCache = useCallback((path?: string) => {
    if (path) {
      routeCacheRef.current.delete(path);
    } else {
      routeCacheRef.current.clear();
    }
  }, []);

  useEffect(() => {
    if (pathname && pathname !== navState.currentPath) {
      setNavState((prev: NavigationState) => ({
        ...prev,
        currentPath: pathname,
        timestamp: Date.now()
      }));
    }
  }, [pathname, navState.currentPath, setNavState]);

  return {
    currentPath: navState.currentPath,
    previousPath: navState.previousPath,
    isTransitioning: navState.isTransitioning,
    navigateTo,
    prefetchRoute,
    clearCache
  };
}