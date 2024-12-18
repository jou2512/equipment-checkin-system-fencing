// Auto-generated Appwrite Types
// Generated on 2024-12-17T21:30:16.550Z
// WARNING: This file is auto-generated. Do not modify manually.


/**
 * Type definition for CheckableItemForWeapons
 * Provides a union type of possible values
 */
export type CheckableItemForWeaponsType = "epee" | "foil" | "sabre";

/**
 * Type definition for CheckinitemStatus
 * Provides a union type of possible values
 */
export type CheckinitemStatusType = "pending" | "in_review" | "approved" | "partially_approved" | "rejected";

/**
 * Type definition for TournamentActiveWeapons
 * Provides a union type of possible values
 */
export type TournamentActiveWeaponsType = "epee" | "foil" | "sabre";

/**
 * Type definition for CheckInCheckInStatus
 * Provides a union type of possible values
 */
export type CheckInCheckInStatusType = "pending" | "in_review" | "approved" | "partially_approved" | "rejected";


/**
 * Enum type for CheckableItemForWeapons
 * Provides type-safe representation of possible values
 */
export enum CheckableItemForWeapons {
  /** Represents epee option in CheckableItemForWeapons */
  EPEE = "epee",
  /** Represents foil option in CheckableItemForWeapons */
  FOIL = "foil",
  /** Represents sabre option in CheckableItemForWeapons */
  SABRE = "sabre"
}

/**
 * Enum type for CheckinitemStatus
 * Provides type-safe representation of possible values
 */
export enum CheckinitemStatus {
  /** Represents pending option in CheckinitemStatus */
  PENDING = "pending",
  /** Represents in_review option in CheckinitemStatus */
  IN_REVIEW = "in_review",
  /** Represents approved option in CheckinitemStatus */
  APPROVED = "approved",
  /** Represents partially_approved option in CheckinitemStatus */
  PARTIALLY_APPROVED = "partially_approved",
  /** Represents rejected option in CheckinitemStatus */
  REJECTED = "rejected"
}

/**
 * Enum type for TournamentActiveWeapons
 * Provides type-safe representation of possible values
 */
export enum TournamentActiveWeapons {
  /** Represents epee option in TournamentActiveWeapons */
  EPEE = "epee",
  /** Represents foil option in TournamentActiveWeapons */
  FOIL = "foil",
  /** Represents sabre option in TournamentActiveWeapons */
  SABRE = "sabre"
}

/**
 * Enum type for CheckInCheckInStatus
 * Provides type-safe representation of possible values
 */
export enum CheckInCheckInStatus {
  /** Represents pending option in CheckInCheckInStatus */
  PENDING = "pending",
  /** Represents in_review option in CheckInCheckInStatus */
  IN_REVIEW = "in_review",
  /** Represents approved option in CheckInCheckInStatus */
  APPROVED = "approved",
  /** Represents partially_approved option in CheckInCheckInStatus */
  PARTIALLY_APPROVED = "partially_approved",
  /** Represents rejected option in CheckInCheckInStatus */
  REJECTED = "rejected"
}


/**
 * Represents a CheckableItem document in the Appwrite database
 * @interface
 */
export interface CheckableItem {
  /** Unique document identifier */
  $id?: string;
  /** Document creation timestamp */
  $createdAt?: string;
  /** Document last update timestamp */
  $updatedAt?: string;
  /** Database identifier */
  $databaseId?: string;
  /** Collection identifier */
  $collectionId?: string;
  /** Document-level permissions */
  $permissions?: string[];
  /** Max size: 32 characters */
  name: string;
  forWeapons?: ("epee" | "foil" | "sabre")[];
}


/**
 * Represents a ItemConfig document in the Appwrite database
 * @interface
 */
export interface ItemConfig {
  /** Unique document identifier */
  $id?: string;
  /** Document creation timestamp */
  $createdAt?: string;
  /** Document last update timestamp */
  $updatedAt?: string;
  /** Database identifier */
  $databaseId?: string;
  /** Collection identifier */
  $collectionId?: string;
  /** Document-level permissions */
  $permissions?: string[];
  maxQuantity: number;
  required: boolean;
  /** Max size: 32 characters */
  itemName: string;
  /** Relationship type: oneToMany */
  /** Related collection: tournaments */
  /** Two-way relationship with key: itemConfigs */
  /** Deletion behavior: setNull */
  tournament?: (Tournament | string) | null;
}


/**
 * Represents a EquipmentType document in the Appwrite database
 * @interface
 */
export interface EquipmentType {
  /** Unique document identifier */
  $id?: string;
  /** Document creation timestamp */
  $createdAt?: string;
  /** Document last update timestamp */
  $updatedAt?: string;
  /** Database identifier */
  $databaseId?: string;
  /** Collection identifier */
  $collectionId?: string;
  /** Document-level permissions */
  $permissions?: string[];
  /** Max size: 64 characters */
  name: string;
  /** Max size: 64 characters */
  category: string;
  /** Relationship type: manyToOne */
  /** Related collection: equipmentParts */
  /** Two-way relationship with key: equipmentTypeId */
  /** Deletion behavior: setNull */
  partIds?: (EquipmentPart | string)[];
}


/**
 * Represents a EquipmentPart document in the Appwrite database
 * @interface
 */
export interface EquipmentPart {
  /** Unique document identifier */
  $id?: string;
  /** Document creation timestamp */
  $createdAt?: string;
  /** Document last update timestamp */
  $updatedAt?: string;
  /** Database identifier */
  $databaseId?: string;
  /** Collection identifier */
  $collectionId?: string;
  /** Document-level permissions */
  $permissions?: string[];
  /** Max size: 64 characters */
  name: string;
  /** Max size: 256 characters */
  description?: string;
  /** Max size: 64 characters */
  parentPartId?: string;
  /** Relationship type: manyToOne */
  /** Related collection: equipmentTypes */
  /** Two-way relationship with key: partIds */
  /** Deletion behavior: setNull */
  equipmentTypeId?: (EquipmentType | string) | null;
  /** Relationship type: manyToMany */
  /** Related collection: equipmentPartDefects */
  /** Two-way relationship with key: applicablePartIds */
  /** Deletion behavior: setNull */
  possibleDefectIds?: (EquipmentPartDefect | string)[];
}


/**
 * Represents a EquipmentPartDefect document in the Appwrite database
 * @interface
 */
export interface EquipmentPartDefect {
  /** Unique document identifier */
  $id?: string;
  /** Document creation timestamp */
  $createdAt?: string;
  /** Document last update timestamp */
  $updatedAt?: string;
  /** Database identifier */
  $databaseId?: string;
  /** Collection identifier */
  $collectionId?: string;
  /** Document-level permissions */
  $permissions?: string[];
  /** Max size: 64 characters */
  name: string;
  /** Max size: 256 characters */
  description?: string;
  /** Max size: 32 characters */
  severity?: string;
  /** Relationship type: manyToMany */
  /** Related collection: equipmentParts */
  /** Two-way relationship with key: possibleDefectIds */
  /** Deletion behavior: setNull */
  applicablePartIds?: (EquipmentPart | string)[];
}


/**
 * Represents a Checkinitem document in the Appwrite database
 * @interface
 */
export interface Checkinitem {
  /** Unique document identifier */
  $id?: string;
  /** Document creation timestamp */
  $createdAt?: string;
  /** Document last update timestamp */
  $updatedAt?: string;
  /** Database identifier */
  $databaseId?: string;
  /** Collection identifier */
  $collectionId?: string;
  /** Document-level permissions */
  $permissions?: string[];
  /** Max size: 64 characters */
  itemName: string;
  quantity: number;
  /** Relationship type: oneToMany */
  /** Related collection: checkIns */
  /** Two-way relationship with key: itemChecks */
  /** Deletion behavior: cascade */
  checkInDocument?: (CheckIn | string) | null;
  status?: "pending" | "in_review" | "approved" | "partially_approved" | "rejected";
}


/**
 * Represents a Tournament document in the Appwrite database
 * @interface
 */
export interface Tournament {
  /** Unique document identifier */
  $id?: string;
  /** Document creation timestamp */
  $createdAt?: string;
  /** Document last update timestamp */
  $updatedAt?: string;
  /** Database identifier */
  $databaseId?: string;
  /** Collection identifier */
  $collectionId?: string;
  /** Document-level permissions */
  $permissions?: string[];
  /** Max size: 64 characters */
  name: string;
  /** Relationship type: oneToMany */
  /** Related collection: itemconfigs */
  /** Two-way relationship with key: tournament */
  /** Deletion behavior: setNull */
  itemConfigs?: (ItemConfig | string)[];
  activeWeapons?: ("epee" | "foil" | "sabre")[];
  orderCount?: number;
}


/**
 * Represents a CheckIn document in the Appwrite database
 * @interface
 */
export interface CheckIn {
  /** Unique document identifier */
  $id?: string;
  /** Document creation timestamp */
  $createdAt?: string;
  /** Document last update timestamp */
  $updatedAt?: string;
  /** Database identifier */
  $databaseId?: string;
  /** Collection identifier */
  $collectionId?: string;
  /** Document-level permissions */
  $permissions?: string[];
  checkNumber: number;
  /** Max size: 64 characters */
  fencerName?: string;
  /** Max size: 32 characters */
  nationalityCode?: string;
  /** Max size: 10 characters */
  weaponType: string;
  pickupConfirmed?: boolean;
  /** Relationship type: manyToOne */
  /** Related collection: tournaments */
  /** Deletion behavior: setNull */
  tournaments?: (Tournament | string) | null;
  /** Relationship type: oneToMany */
  /** Related collection: checkinitem */
  /** Two-way relationship with key: checkInDocument */
  /** Deletion behavior: cascade */
  itemChecks?: (Checkinitem | string)[];
  /** Max size: 32 characters */
  eventKey: string;
  CheckInStatus?: "pending" | "in_review" | "approved" | "partially_approved" | "rejected";
}


/** Database identifiers for the project */
export const DATABASE_IDS = {
  CHECKING_SYSTEM: '675b83ef00172e714622',
};

/** Collection identifiers for the project */
export const COLLECTION_IDS = {
  CHECKABLEITEMS: 'checkableItems',
  ITEMCONFIGS: 'itemconfigs',
  EQUIPMENTTYPES: 'equipmentTypes',
  EQUIPMENTPARTS: 'equipmentParts',
  EQUIPMENTPARTDEFECTS: 'equipmentPartDefects',
  CHECKINITEM: 'checkinitem',
  TOURNAMENTS: 'tournaments',
  CHECKINS: 'checkIns',
};
