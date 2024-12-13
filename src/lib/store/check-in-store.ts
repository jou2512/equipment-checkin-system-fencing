// src/lib/store/check-in-store.ts
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { CheckInDocument, CheckInStatus } from '@/lib/types/check-in'

// State type for check-in store
type CheckInState = {
  currentCheckIn: CheckInDocument | null
  checkInList: CheckInDocument[]
  
  // Actions
  setCurrentCheckIn: (checkIn: CheckInDocument) => void
  clearCurrentCheckIn: () => void
  updateCheckInStatus: (checkInId: string, itemId: string, status: CheckInStatus) => void
  setCheckInList: (checkIns: CheckInDocument[]) => void
  addCheckIn: (checkIn: CheckInDocument) => void
  removeCheckIn: (checkInId: string) => void
}

export const useCheckInStore = create<CheckInState>()(
  devtools(
    (set) => ({
      currentCheckIn: null,
      checkInList: [],
      
      setCurrentCheckIn: (checkIn) => 
        set((state) => ({ 
          currentCheckIn: checkIn 
        })),
      
      clearCurrentCheckIn: () => 
        set({ currentCheckIn: null }),
      
      updateCheckInStatus: (checkInId, itemId, status) => 
        set((state) => ({
          checkInList: state.checkInList.map(checkIn => 
            checkIn.$id === checkInId 
              ? {
                  ...checkIn,
                  itemChecks: checkIn.itemChecks.map(item => 
                    item.itemId === itemId 
                      ? { ...item, status } 
                      : item
                  ),
                  overallStatus: determineOverallStatus(
                    checkIn.itemChecks.map(item => 
                      item.itemId === itemId 
                        ? { ...item, status } 
                        : item
                    )
                  )
                }
              : checkIn
          )
        })),
      
      setCheckInList: (checkIns) => 
        set({ checkInList: checkIns }),
      
      addCheckIn: (checkIn) => 
        set((state) => ({ 
          checkInList: [...state.checkInList, checkIn] 
        })),
      
      removeCheckIn: (checkInId) => 
        set((state) => ({ 
          checkInList: state.checkInList.filter(checkIn => checkIn.$id !== checkInId) 
        }))
    }),
    { name: 'check-in-store' }
  )
)

// Utility function to determine overall check-in status
function determineOverallStatus(itemChecks: { status: CheckInStatus }[]): CheckInStatus {
    if (itemChecks.some(item => item.status === 'in_progress')) return 'in_progress'
    if (itemChecks.some(item => item.status === 'rejected')) return 'rejected'
    if (itemChecks.every(item => item.status === 'completed')) return 'completed'
    return 'pending'
}