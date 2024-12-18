import { RelationshipAttribute } from '@/lib/appwrite/relationship-types';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Interfaces to represent the configuration structure
export interface AppwriteAttribute {
  key: string;
  type: string;
  required: boolean;
  array: boolean;
  size?: number;
  elements?: string[];
  format?: string;
  relatedCollection?: string;
}

interface AppwriteCollection {
  $id: string;
  name: string;
  attributes: AppwriteAttribute[];
}

interface AppwriteDatabase {
  $id: string;
  name: string;
}

interface AppwriteProjectConfig {
  databases: AppwriteDatabase[];
  collections: AppwriteCollection[];
}


/**
 * Comprehensive type conversion utility
 * Provides robust, type-safe conversion of Appwrite attribute types to TypeScript types
 * 
 * @param attribute - The Appwrite attribute to convert
 * @returns A TypeScript type representation of the attribute
 */
function convertAppwriteTypeToTS(attribute: AppwriteAttribute): string {
  // Precise type mapping for primitive Appwrite types
  const typeMap: { [key: string]: string } = {
    'string': 'string',
    'integer': 'number',
    'float': 'number',
    'boolean': 'boolean',
    'relationship': 'string | RelationshipReference', 
    'datetime': 'string',
  };

  // Advanced enum handling with comprehensive type safety
  if (attribute.format === 'enum' && attribute.elements) {
    // Create a precise union type of enum elements
    const enumType = attribute.elements
      .map(e => `"${e}"`)
      .join(' | ');
    
    // Generate array or single value type based on 'array' flag
    return attribute.array 
      ? `(${enumType})[]`   // Array of enum values
      : enumType;           // Single enum value
  }

  // Handle array types with comprehensive type inference
  if (attribute.array) {
    // For typed arrays (like enums), create a union type
    if (attribute.elements && attribute.elements.length > 0) {
      const elementType = attribute.elements
        .map(e => `"${e}"`)
        .join(' | ');
      return `(${elementType})[]`;
    }

    // Use base type for standard arrays
    return `Array<${typeMap[attribute.type] || 'string'}>`;
  }

  // Relationship type handling with side and type awareness
  if (attribute.type === 'relationship') {
    const relationAttr = attribute as RelationshipAttribute;
    
    // Convert related collection name to interface name
    const relatedTypeName = relationAttr.relatedCollection
      .split(/[-_]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')
      .replace(/s$/, '');

    // Precise base type generation
    const baseType = `(${relatedTypeName} | string)`;
    
    // Detailed type generation based on relationship type and side
    switch (relationAttr.relationType) {
      case 'oneToMany':
        return relationAttr.side === 'parent'
          ? `${baseType}[]`     // Parent side: array of related items
          : `${baseType} | null`; // Child side: single item or null
      
      case 'manyToOne':
        return relationAttr.side === 'parent'
          ? `${baseType} | null`   // Parent side: single item or null
          : `${baseType}[]`;        // Child side: array of related items
      
      case 'manyToMany':
        return `${baseType}[]`;    // Both sides: array of related items
      
      case 'oneToOne':
        return `${baseType} | null`; // Single item or null
      
      default:
        return 'string | RelationshipReference'; // Fallback type
    }
  }

  // Default to base type with fallback
  return typeMap[attribute.type] || 'string';
}


// Enhanced interface generation with relationship context
function generateCollectionInterface(collection: AppwriteCollection): string {
  // Robust naming convention for interfaces
  const interfaceName = collection.name
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
    .replace(/s$/, '');

  // Detailed attribute generation with comprehensive type and optionality handling
  const attributes = collection.attributes.map(attr => {
    const typeName = convertAppwriteTypeToTS(attr);
    const optional = !attr.required ? '?' : '';
    
    // Comprehensive commenting system
    const comments: string[] = [];
    
    if (attr.size) {
      comments.push(`/** Max size: ${attr.size} characters */`);
    }

    // Detailed relationship information
    if (attr.type === 'relationship') {
    const relationAttr = attr as RelationshipAttribute;
    comments.push(`/** Relationship type: ${relationAttr.relationType} */`);
    comments.push(`/** Related collection: ${relationAttr.relatedCollection} */`);
    
    if (relationAttr.twoWay) {
      comments.push(`/** Two-way relationship with key: ${relationAttr.twoWayKey} */`);
    }
    
    // Now this will work without TypeScript error
    comments.push(`/** Deletion behavior: ${relationAttr.onDelete} */`);
  }
    
    const commentString = comments.length > 0 
      ? comments.map(c => `  ${c}`).join('\n') + '\n' 
      : '';
    
    return `${commentString}  ${attr.key}${optional}: ${typeName};`;
  }).join('\n');

  // Comprehensive interface with metadata and permissions
  return `
/**
 * Represents a ${interfaceName} document in the Appwrite database
 * @interface
 */
export interface ${interfaceName} {
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
${attributes}
}
`;
}

// Advanced ID constant generation
function generateIDConstants(config: AppwriteProjectConfig): string {
  // Robust constant name generation
  const sanitizeConstantName = (name: string) => 
    name.toUpperCase().replace(/[^A-Z0-9_]/g, '_');

  const databaseConstants = config.databases.map(db => 
    `  ${sanitizeConstantName(db.name)}: '${db.$id}',`
  ).join('\n');

  const collectionConstants = config.collections.map(col => 
    `  ${sanitizeConstantName(col.name)}: '${col.$id}',`
  ).join('\n');

  return `
/** Database identifiers for the project */
export const DATABASE_IDS = {
${databaseConstants}
};

/** Collection identifiers for the project */
export const COLLECTION_IDS = {
${collectionConstants}
};
`;
}

/**
 * Generates enum and type definitions for collections with enum attributes
 * 
 * @param collections - Appwrite collections to extract enum types from
 * @returns An object with generated enum and type definitions
 */
function generateEnumTypes(collections: AppwriteCollection[]): { 
  enumDefinitions: string; 
  typeDefinitions: string; 
} {
  // Collect unique enum types across all collections
  const enumTypes = new Map<string, string[]>();

  collections.forEach(collection => {
    collection.attributes.forEach(attr => {
      // Find enum attributes
      if (attr.format === 'enum' && attr.elements && attr.elements.length > 0) {
        // Convert collection name to enum/type name
        const typeName = `${collection.name.charAt(0).toUpperCase() + 
          collection.name.slice(1).replace(/s$/, '')}${
          attr.key.charAt(0).toUpperCase() + attr.key.slice(1)
        }`;

        // Store unique enum values
        enumTypes.set(typeName, attr.elements);
      }
    });
  });

  // Generate enum and type definitions
  const enumDefinitions: string[] = [];
  const typeDefinitions: string[] = [];

  Array.from(enumTypes.entries()).forEach(([typeName, elements]) => {
    // Enum definition
    const enumValues = elements
      .map(e => `  /** Represents ${e} option in ${typeName} */`)
      .map((comment, index) => 
        `${comment}\n  ${elements[index].toUpperCase().replace(/[^A-Z0-9]/g, '_')} = "${elements[index]}"`
      )
      .join(',\n');

    const enumDefinition = `
/**
 * Enum type for ${typeName}
 * Provides type-safe representation of possible values
 */
export enum ${typeName} {
${enumValues}
}`;
    enumDefinitions.push(enumDefinition);

    // Type definition (union type)
    const typeDefinition = `
/**
 * Type definition for ${typeName}
 * Provides a union type of possible values
 */
export type ${typeName}Type = ${elements.map(e => `"${e}"`).join(' | ')};`;
    typeDefinitions.push(typeDefinition);
  });

  return {
    enumDefinitions: enumDefinitions.join('\n'),
    typeDefinitions: typeDefinitions.join('\n')
  };
}

/**
 * Comprehensive type generation function with robust error handling
 * Includes enum and type generation, interface creation, and constants
 */
async function generateTypes() {
  try {
    // Robust path resolution
    const configPath = path.resolve(__dirname, '..', 'appwrite.json');
    
    // Comprehensive file reading with error handling
    let configContent: string;
    try {
      configContent = await fs.readFile(configPath, 'utf8');
    } catch (readError) {
      console.error(`❌ Failed to read project configuration: ${readError}`);
      process.exit(1);
    }

    // Robust JSON parsing
    let projectConfig: AppwriteProjectConfig;
    try {
      projectConfig = JSON.parse(configContent);
    } catch (parseError) {
      console.error(`❌ Invalid JSON in project configuration: ${parseError}`);
      process.exit(1);
    }

    // Validate project configuration
    if (!projectConfig.databases || !projectConfig.collections) {
      console.error('❌ Invalid project configuration structure');
      process.exit(1);
    }

    // Prepare output content with comprehensive header
    let output = `// Auto-generated Appwrite Types
// Generated on ${new Date().toISOString()}
// WARNING: This file is auto-generated. Do not modify manually.

`;

    // Generate enum and type definitions
    const { 
      enumDefinitions, 
      typeDefinitions 
    } = generateEnumTypes(projectConfig.collections);

    // Add enum and type definitions
    output += typeDefinitions + '\n\n';
    output += enumDefinitions + '\n\n';

    // Generate collection interfaces
    projectConfig.collections.forEach(collection => {
      output += generateCollectionInterface(collection) + '\n';
    });

    // Add database and collection ID constants
    output += generateIDConstants(projectConfig);

    // Ensure output directory exists with robust path handling
    const outputDir = path.resolve(__dirname, '..', 'src', 'lib', 'appwrite');
    await fs.mkdir(outputDir, { recursive: true });

    // Write to file with comprehensive error handling
    const outputPath = path.resolve(outputDir, 'types.ts');
    try {
      await fs.writeFile(outputPath, output, { encoding: 'utf8' });
      console.log(`✅ Types generated successfully at ${outputPath}`);
    } catch (writeError) {
      console.error(`❌ Failed to write types file: ${writeError}`);
      process.exit(1);
    }

  } catch (error) {
    console.error('❌ Unexpected error during type generation:', error);
    process.exit(1);
  }
}

// Execute type generation
generateTypes()