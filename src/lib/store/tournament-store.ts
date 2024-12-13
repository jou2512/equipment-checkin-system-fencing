import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export type Weapon = 'epee' | 'foil' | 'sabre'

export type CheckableItem = {
  id: string
  name: string
  forWeapons: Weapon[]
}

export type itemConfigs = {
    itemId: string
    itemName: string
    maxQuantity: number
    required: boolean
  }[]

export type TournamentConfig = {
  id: string
  name: string
  activeWeapons: Weapon[]
  itemConfigs: itemConfigs
}

type TournamentState = {
  currentTournament: TournamentConfig | null
  setCurrentTournament: (tournament: TournamentConfig) => void
  clearCurrentTournament: () => void
}

export const useTournamentStore = create<TournamentState>()(
  devtools(
    (set) => ({
      currentTournament: null,
      setCurrentTournament: (tournament) => set({ currentTournament: tournament }),
      clearCurrentTournament: () => set({ currentTournament: null }),
    }),
    { name: 'tournament-store' }
  )
)