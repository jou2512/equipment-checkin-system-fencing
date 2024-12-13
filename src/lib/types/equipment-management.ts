// src/lib/types/equipment-management.ts
export const categories = ['weapon', 'protective-gear', 'electrical equipment'] as const

export type category = typeof categories[number]

export interface EquipmentType {
    $id: string
    name: string
    category: category
    partIds: string[]
}

export interface EquipmentPart {
    $id?: string
    name: string
    description?: string
    parentPartId?: string  // For nested parts
    possibleDefectIds?: string[]  // References to defects
    equipmentTypeId: string 
}

export interface EquipmentPartDefect {
    $id?: string
    name: string
    description?: string
    severity?: 'low' | 'medium' | 'high'
    applicablePartIds?: string[]
}

export interface EquipmentPartCreationForm {
  name: string
  description: string
  equipmentTypeIds: string[]
  partIds: string[]
}





// Appwrite Collection Schemas:

// Collection: equipment_types
// Attributes:
// - $id: string (auto-generated)
// - name: string (required)
// - category: string (required)
// - partIds: string[] (optional)
// - createdAt: datetime
// - updatedAt: datetime

// Collection: equipment_parts
// Attributes:
// - $id: string (auto-generated)
// - name: string (required)
// - description: string (optional)
// - parentPartId: string (optional)
// - possibleDefectIds: string[] (optional)
// - equipmentTypeId: string (required, relationship to equipment_types)
// - createdAt: datetime
// - updatedAt: datetime

// Collection: equipment_part_defects
// Attributes:
// - $id: string (auto-generated)
// - name: string (required)
// - description: string (optional)
// - severity: string (optional)
// - applicablePartIds: string[] (optional, references parts)
// - createdAt: datetime
// - updatedAt: datetime