import type { Weapon } from '@/lib/store/tournament-store'

// Possible status for a check-in process
// Expanded status to include more nuanced tracking
export type CheckInStatus = 
  | 'pending'      // Initial state
  | 'in_review'    // Being checked
  | 'approved'     // Fully approved
  | 'partially_approved' // Some items approved
  | 'rejected'     // Completely rejected

// Detailed check-in item status
export interface CheckInItem {
  itemId: string
  itemName: string
  quantity: number
  status: CheckInStatus
}

// Full check-in document structure
export interface CheckInDocument {
  $id: string
  checkNumber: string
  fencerName?: string
  nationalityCode?: string
  tournamentId: string
  weaponType?: Weapon
  itemChecks: CheckInItem[]
  overallStatus: CheckInStatus
  createdAt: string
  updatedAt: string
}

// Interface for creating a new check-in
export interface CreateCheckInData {
  tournamentId: string
  checkNumber: string
  fencerName?: string
  nationalityCode?: string
  weaponType?: Weapon
  itemChecks: CheckInItem[]
}

// Query parameters for filtering check-ins
export interface CheckInQueryParams {
  tournamentId?: string
  status?: CheckInStatus
  fencerName?: string
  checkNumber?: string
  weaponType?: Weapon
}