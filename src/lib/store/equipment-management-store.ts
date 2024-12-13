// src/lib/store/equipment-management-store.ts
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { databases, COLLECTION_IDS, DATABASE_ID } from '@/lib/appwrite/config'
import { ID, Query } from 'appwrite'
import { 
  EquipmentType, 
  EquipmentPart, 
  EquipmentPartDefect, 
  EquipmentPartCreationForm
} from '@/lib/types/equipment-management'
import { TreeNode } from '@/lib/utils/equipment-tree'

type EquipmentManagementState = {
    equipmentTypes: EquipmentType[]
    equipmentParts: EquipmentPart[]
    equipmentDefects: EquipmentPartDefect[]
    equipmentPartsTree: TreeNode<EquipmentPart>[]
  
  // Fetching methods
  fetchEquipmentTypes: () => Promise<void>
  fetchEquipmentParts: (equipmentTypeId?: string) => Promise<void>
  fetchEquipmentDefects: (partId?: string) => Promise<void>
  
  // Creation methods
  createEquipmentType: (type: Omit<EquipmentType, '$id'>) => Promise<EquipmentType>
  createEquipmentPart: (part: Omit<EquipmentPart, '$id' | 'possibleDefectIds'>) => Promise<EquipmentPart>
  createEquipmentDefect: (defect: Omit<EquipmentPartDefect, '$id'>) => Promise<EquipmentPartDefect>
  
  // Update methods
  updateEquipmentType: (id: string, updates: Partial<EquipmentType>) => Promise<EquipmentType>
  updateEquipmentPart: (id: string, updates: Partial<EquipmentPart>) => Promise<EquipmentPart>
  updateEquipmentDefect: (id: string, updates: Partial<EquipmentPartDefect>) => Promise<EquipmentPartDefect>
  
  // Deletion methods
  deleteEquipmentType: (id: string) => Promise<void>
  deleteEquipmentPart: (id: string) => Promise<void>
  deleteEquipmentDefect: (id: string) => Promise<void>
}

export const useEquipmentManagementStore = create<EquipmentManagementState>()(
  devtools(
    (set, get) => ({
      equipmentTypes: [],
      equipmentParts: [],
      equipmentDefects: [],
      equipmentPartsTree: [],
      
      // Fetch Equipment Types
      fetchEquipmentTypes: async () => {
        try {
          const response = await databases.listDocuments(
            DATABASE_ID,
            COLLECTION_IDS.equipmentTypes
          )
          set({ equipmentTypes: response.documents as unknown as EquipmentType[] })
        } catch (error) {
          console.error('Failed to fetch equipment types:', error)
          set({ equipmentTypes: [] })
        }
      },
      
      // Fetch Equipment Parts (optionally filtered by equipment type)
      fetchEquipmentParts: async (equipmentTypeId) => {
        try {
          const queries = equipmentTypeId 
            ? [Query.equal('equipmentTypeId', equipmentTypeId)] 
            : []
          
          const response = await databases.listDocuments(
            DATABASE_ID,
            COLLECTION_IDS.equipmentParts,
            queries
          )
          set({ equipmentParts: response.documents as unknown as EquipmentPart[] })
        } catch (error) {
          console.error('Failed to fetch equipment parts:', error)
          set({ equipmentParts: [] })
        }
      },
      
      // Fetch Equipment Defects (optionally filtered by part)
      fetchEquipmentDefects: async (partId) => {
        try {
          const queries = partId 
            ? [Query.contains('applicablePartIds', partId)] 
            : []
          
          const response = await databases.listDocuments(
            DATABASE_ID,
            COLLECTION_IDS.equipmentPartDefects,
            queries
          )
          set({ equipmentDefects: response.documents as unknown as EquipmentPartDefect[] })
        } catch (error) {
          console.error('Failed to fetch equipment defects:', error)
          set({ equipmentDefects: [] })
        }
      },
      
      // Create Equipment Type
      createEquipmentType: async (type) => {
        try {
          const newType = await databases.createDocument(
            DATABASE_ID,
            COLLECTION_IDS.equipmentTypes,
            ID.unique(),
            { ...type, partIds: [] }
          )
          set(state => ({ 
            equipmentTypes: [...state.equipmentTypes, newType as unknown as EquipmentType] 
          }))
          return newType as unknown as EquipmentType
        } catch (error) {
          console.error('Failed to create equipment type:', error)
          throw error
        }
      },
      
      // Create Equipment Part
      createEquipmentPart: async (part) => {
        try {
            // Fetch current type to ensure we have the latest data
            const currentType = await databases.getDocument(
                DATABASE_ID,
                COLLECTION_IDS.equipmentTypes,
                part.equipmentTypeId
            )
            console.log(currentType)
                console.log(part.name.toLowerCase().replace(" ", "-")+"_"+ID.unique())
          // Create the part document
          const newPart = await databases.createDocument(
            DATABASE_ID,
            COLLECTION_IDS.equipmentParts,
            part.name.toLowerCase().replace(" ", "-")+"_"+ID.unique(),
            {
              name: part.name,
              description: part.description || '',
              equipmentTypeId: part.equipmentTypeId,
              parentPartId: part.parentPartId || null,
              possibleDefectIds: []
            }
          )

          // Update the equipment type's part list
          // Use the '$push' method instead of '$append'
          await databases.updateDocument(
            DATABASE_ID,
            COLLECTION_IDS.equipmentTypes,
            part.equipmentTypeId,
            {
                partIds: Array.from(new Set([
                    ...(currentType.partIds || []), 
                    newPart.$id
                ]))
            }
            )

          // Update local state
          set((state) => ({
            equipmentParts: [...state.equipmentParts, newPart as unknown as EquipmentPart]
          }))

          return newPart as unknown as EquipmentPart
        } catch (error) {
          console.error('Failed to create equipment part:', error)
          throw error
        }
          },
      
      // Create Equipment Defect
      createEquipmentDefect: async (defect) => {
        try {
          const newDefect = await databases.createDocument(
            DATABASE_ID,
            COLLECTION_IDS.equipmentPartDefects,
            ID.unique(),
            { 
              ...defect, 
              applicablePartIds: defect.applicablePartIds || [] 
            }
          )
          
          set(state => ({ 
            equipmentDefects: [...state.equipmentDefects, newDefect as unknown as EquipmentPartDefect] 
          }))
          return newDefect as unknown as EquipmentPartDefect
        } catch (error) {
          console.error('Failed to create equipment defect:', error)
          throw error
        }
      },
      
      // Update methods (similar pattern to creation methods)
      updateEquipmentType: async (id, updates) => {
        try {
          const updatedType = await databases.updateDocument(
            DATABASE_ID,
            COLLECTION_IDS.equipmentTypes,
            id,
            updates
          )
          
          set(state => ({
            equipmentTypes: state.equipmentTypes.map(type => 
              type.$id === id ? updatedType as unknown as EquipmentType : type
            )
          }))
          
          return updatedType as unknown as EquipmentType
        } catch (error) {
          console.error('Failed to update equipment type:', error)
          throw error
        }
      },
      
      // Similar update methods for parts and defects...
      
      // Deletion methods
      deleteEquipmentType: async (id) => {
        try {
          await databases.deleteDocument(
            DATABASE_ID,
            COLLECTION_IDS.equipmentTypes,
            id
          )
          
          set(state => ({
            equipmentTypes: state.equipmentTypes.filter(type => type.$id !== id)
          }))
        } catch (error) {
          console.error('Failed to delete equipment type:', error)
          throw error
        }
      },
      
      // Similar deletion methods for parts and defects...
    }),
    { name: 'equipment-management-store' }
  )
)