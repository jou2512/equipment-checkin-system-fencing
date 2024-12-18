import { AppwriteAttribute } from "../../../scripts/generate-types.mjs";

/**
 * Represents the possible deletion behaviors for relationships in Appwrite
 */
type RelationshipDeletionBehavior = 
  | 'cascade'   // Delete related documents
  | 'setNull'   // Set related field to null
  | 'restrict'  // Prevent deletion if related documents exist
  | 'noAction'; // Do nothing (default)

/**
 * Represents a flexible relationship reference
 * Can be either a full document or a reference ID
 */
type RelationshipReference = {
  /** Unique identifier of the related document */
  $id: string;
  /** Optional additional metadata for the related document */
  [key: string]: unknown;
};

/**
 * Enhanced interface for relationship attributes
 * Provides comprehensive type information for Appwrite relationships
 */
export interface RelationshipAttribute extends AppwriteAttribute {
  relatedCollection: string;
  relationType: 'oneToMany' | 'manyToOne' | 'oneToOne' | 'manyToMany';
  twoWay: boolean;
  twoWayKey?: string;
  side: 'parent' | 'child';
  onDelete: RelationshipDeletionBehavior;
}

/**
 * Type guard to check if a value is a valid relationship reference
 * 
 * @param value - The value to check
 * @returns Boolean indicating if the value is a relationship reference
 * 
 * @example
 * ```typescript
 * const ref = { $id: '123', name: 'Example' };
 * if (isRelationshipReference(ref)) {
 *   console.log('Valid relationship reference');
 * }
 * ```
 */
function isRelationshipReference(value: unknown): value is RelationshipReference {
  return (
    typeof value === 'object' && 
    value !== null && 
    '$id' in value && 
    typeof (value as Record<string, unknown>)['$id'] === 'string'
  );
}

/**
 * Resolves a relationship reference to its ID
 * 
 * @param reference - The relationship reference to resolve
 * @returns The string ID of the reference
 * 
 * @throws {Error} If the reference is invalid
 * 
 * @example
 * ```typescript
 * const id1 = resolveRelationshipReference('123');
 * const id2 = resolveRelationshipReference({ $id: '456' });
 * ```
 */
function resolveRelationshipReference(
  reference: string | RelationshipReference
): string {
  if (typeof reference === 'string') {
    return reference;
  }

  if (isRelationshipReference(reference)) {
    return reference.$id;
  }

  throw new Error('Invalid relationship reference');
}

/**
 * Creates a type that can flexibly represent a relationship
 * Supports string IDs, full references, and arrays
 */
type FlexibleRelationship<T, R extends 'oneToMany' | 'manyToOne' | 'oneToOne' | 'manyToMany'> = 
  R extends 'oneToMany' | 'manyToMany' 
    ? Array<T | string> 
    : R extends 'manyToOne' | 'oneToOne' 
      ? (T | string | null) 
      : never;