// src/lib/store/check-in-store.ts
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { CheckInCheckInStatus } from '../appwrite/types';

interface CheckInState {
  // State
  currentCheckInId: string | null;
  checkInFilter: {
    status?: CheckInCheckInStatus;
    searchQuery?: string;
    tournamentId?: string;
  };
  
  // Actions
  setCurrentCheckInId: (checkInId: string) => void;
  clearCurrentCheckIn: () => void;
  setCheckInFilter: (filter: Partial<CheckInState['checkInFilter']>) => void;
  clearCheckInFilter: () => void;
}

export const useCheckInStore = create<CheckInState>()(
  devtools(
    persist(
      (set) => ({
        // Initial state
        currentCheckInId: null,
        checkInFilter: {},

        // Actions
        setCurrentCheckInId: (checkInId) => 
          set({ currentCheckInId: checkInId }),
        
        clearCurrentCheckIn: () => 
          set({ currentCheckInId: null }),
        
        setCheckInFilter: (filter) =>
          set((state) => ({
            checkInFilter: { ...state.checkInFilter, ...filter }
          })),
        
        clearCheckInFilter: () =>
          set({ checkInFilter: {} })
      }),
      {
        name: 'check-in-storage',
        partialize: (state) => ({
          currentCheckInId: state.currentCheckInId,
          checkInFilter: state.checkInFilter
        })
      }
    ),
    { name: 'check-in-store' }
  )
);