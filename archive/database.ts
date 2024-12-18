// @ts-nocheck
// src/lib/appwrite/database.ts
import { Client, Databases, ID, Query, Models } from 'appwrite';
import { 
  DATABASE_IDS,
  COLLECTION_IDS 
} from './types';

const unusedVar = 'This should trigger an ESLint warning';


/**
 * Extended type guard and conversion utility for Appwrite documents
 */
function parseDocument<T extends { $id: string }>(
  document: Models.Document, 
  collectionId: string
): T {
  // Validate document structure
  if (!document || typeof document !== 'object') {
    throw new DatabaseError(
      `Invalid document received from collection ${collectionId}`, 
      'INVALID_DOCUMENT_STRUCTURE'
    );
  }

  // Ensure required properties exist
  if (!document.$id) {
    throw new DatabaseError(
      `Document is missing required $id property in collection ${collectionId}`, 
      'MISSING_DOCUMENT_ID'
    );
  }

  // Type-safe conversion with runtime checks
  return {
    ...document as unknown as T,
    $id: document.$id,
    $createdAt: document.$createdAt,
    $updatedAt: document.$updatedAt,
    $databaseId: document.$databaseId,
    $collectionId: document.$collectionId,
    $permissions: document.$permissions
  };
}

/**
 * Custom error class for database-related errors
 * Provides granular error information and context
 */
export class DatabaseError extends Error {
  public readonly code: string;
  public readonly originalError?: unknown;

  constructor(
    message: string, 
    code: string = 'DATABASE_ERROR', 
    originalError?: unknown
  ) {
    super(message);
    this.name = 'DatabaseError';
    this.code = code;
    this.originalError = originalError;
  }

  /**
   * Generates a detailed error log for debugging
   * @returns Comprehensive error details
   */
  public getErrorDetails(): string {
    return JSON.stringify({
      name: this.name,
      message: this.message,
      code: this.code,
      stack: this.stack,
      originalError: this.originalError
    }, null, 2);
  }
}

/**
 * Configuration interface for database operations
 */
interface DatabaseOperationConfig {
  /** Maximum number of retries for failed operations */
  maxRetries?: number;
  /** Timeout for database operations in milliseconds */
  timeout?: number;
}

/**
 * Generic type-safe database service with comprehensive features
 * @typeparam T Document type corresponding to the collection
 */
export class DatabaseService<T extends { $id: string }> {
  private databases: Databases;
  private config: DatabaseOperationConfig;
  private databaseId: string;
  private collectionId: string;

  /**
   * Constructor for DatabaseService
   * @param client Appwrite Client instance
   * @param databaseId Database identifier
   * @param collectionId Collection identifier
   * @param config Optional configuration for database operations
   */
  constructor(
    client: Client, 
    databaseId: string,
    collectionId: string,
    config: DatabaseOperationConfig = {}
  ) {
    this.databases = new Databases(client);
    this.databaseId = databaseId;
    this.collectionId = collectionId;
    this.config = {
      maxRetries: config.maxRetries ?? 2,
      timeout: config.timeout ?? 5000
    };
    }
    
    

  /**
   * Create a new document with comprehensive error handling and retry mechanism
   * @param data Document data to create
   * @returns Created document
   * @throws {DatabaseError} If document creation fails
   */
  public async create(
    data: Omit<T, '$id' | '$createdAt' | '$updatedAt' | '$permissions' | '$databaseId' | '$collectionId'>
  ): Promise<T> {
    return this.executeWithRetry(async () => {
      try {
        // Validate input data
        this.validateInputData(data);

        // Create document with unique ID
        const createdDocument = await this.databases.createDocument(
          this.databaseId, 
          this.collectionId, 
          ID.unique(), 
          data
        );

        // Convert and validate the created document
        return parseDocument<T>(createdDocument, this.collectionId);
      } catch (error) {
        throw new DatabaseError(
          `Failed to create document in collection ${this.collectionId}`, 
          'CREATE_DOCUMENT_ERROR', 
          error
        );
      }
    });
  }

  /**
   * Retrieve a document by its ID with comprehensive error handling
   * @param documentId Document unique identifier
   * @returns Retrieved document
   * @throws {DatabaseError} If document retrieval fails
   */
  public async getById(documentId: string): Promise<T> {
    return this.executeWithRetry(async () => {
      try {
        // Validate input
        if (!documentId) {
          throw new Error('Document ID is required');
        }

        const document = await this.databases.getDocument(
          this.databaseId, 
          this.collectionId, 
          documentId
        );

        // Convert and validate the retrieved document
        return parseDocument<T>(document, this.collectionId);
      } catch (error) {
        throw new DatabaseError(
          `Failed to retrieve document ${documentId} from collection ${this.collectionId}`, 
          'GET_DOCUMENT_ERROR', 
          error
        );
      }
    });
  }

  /**
   * List documents with advanced querying and pagination support
   * @param queries Optional query parameters
   * @param limit Maximum number of documents to retrieve
   * @param offset Pagination offset
   * @returns List of documents with total count
   * @throws {DatabaseError} If document listing fails
   */
  public async list(
    queries: string[] = [], 
    limit = 25, 
    offset = 0
  ): Promise<{ total: number; documents: T[] }> {
    return this.executeWithRetry(async () => {
      try {
        // Validate and prepare queries
        const paginatedQueries = [
          ...queries,
          Query.limit(limit),
          Query.offset(offset)
        ];

        const response = await this.databases.listDocuments(
          this.databaseId, 
          this.collectionId, 
          paginatedQueries
        );

        // Convert and validate retrieved documents
        const documents = response.documents.map(doc => 
          parseDocument<T>(doc, this.collectionId)
        );

        return {
          total: response.total,
          documents
        };
      } catch (error) {
        throw new DatabaseError(
          `Failed to list documents in collection ${this.collectionId}`, 
          'LIST_DOCUMENTS_ERROR', 
          error
        );
      }
    });
  }

  /**
   * Update a document with comprehensive validation
   * @param documentId Document unique identifier
   * @param data Partial update data
   * @returns Updated document
   * @throws {DatabaseError} If document update fails
   */
  public async update(
    documentId: string, 
    data: Partial<Omit<T, '$id' | '$createdAt' | '$updatedAt' | '$permissions' | '$databaseId' | '$collectionId'>>
  ): Promise<T> {
    return this.executeWithRetry(async () => {
      try {
        // Validate inputs
        if (!documentId) {
          throw new Error('Document ID is required');
        }

        this.validateInputData(data);

        const updatedDocument = await this.databases.updateDocument(
          this.databaseId, 
          this.collectionId, 
          documentId, 
          data
        );

        // Convert and validate the updated document
        return parseDocument<T>(updatedDocument, this.collectionId);
      } catch (error) {
        throw new DatabaseError(
          `Failed to update document ${documentId} in collection ${this.collectionId}`, 
          'UPDATE_DOCUMENT_ERROR', 
          error
        );
      }
    });
  }

  /**
   * Delete a document with comprehensive error handling
   * @param documentId Document unique identifier
   * @throws {DatabaseError} If document deletion fails
   */
  public async delete(documentId: string): Promise<void> {
    return this.executeWithRetry(async () => {
      try {
        // Validate input
        if (!documentId) {
          throw new Error('Document ID is required');
        }

        await this.databases.deleteDocument(
          this.databaseId, 
          this.collectionId, 
          documentId
        );
      } catch (error) {
        throw new DatabaseError(
          `Failed to delete document ${documentId} from collection ${this.collectionId}`, 
          'DELETE_DOCUMENT_ERROR', 
          error
        );
      }
    });
  }

   /**
   * Execute a database operation with retry mechanism
   * @param operation Database operation to execute
   * @returns Result of the operation
   * @throws {DatabaseError} If operation fails after max retries
   */
  private async executeWithRetry<R>(
    operation: () => Promise<R>
  ): Promise<R> {
    let lastError: unknown;

    for (let attempt = 1; attempt <= (this.config.maxRetries ?? 2); attempt++) {
      try {
        // Set a timeout for the operation
        return await Promise.race([
          operation(),
          new Promise<R>((_, reject) => 
            setTimeout(
              () => reject(new Error('Operation timed out')), 
              this.config.timeout
            )
          )
        ]);
      } catch (error) {
        lastError = error;
        
        // Exponential backoff
        await new Promise(resolve => 
          setTimeout(resolve, Math.pow(2, attempt) * 100)
        );
      }
    }

    throw new DatabaseError(
      'Operation failed after maximum retries', 
      'MAX_RETRIES_EXCEEDED', 
      lastError
    );
  }

  /**
   * Validate input data for database operations
   * @param data Data to validate
   * @throws {DatabaseError} If data is invalid
   */
  private validateInputData(data: unknown): void {
    if (!data || typeof data !== 'object') {
      throw new DatabaseError(
        'Invalid input data: must be a non-null object', 
        'INVALID_INPUT_DATA'
      );
    }
  }
}

/**
 * Create a centralized Appwrite client with database services
 * @returns Configured Appwrite client and services
 */
export function createAppwriteClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

  return {
    client,
    databases: {
      checkIns: new DatabaseService(
        client, 
        DATABASE_IDS.CHECKING_SYSTEM, 
        COLLECTION_IDS.CHECKINS
      ),
      tournaments: new DatabaseService(
        client, 
        DATABASE_IDS.CHECKING_SYSTEM, 
        COLLECTION_IDS.TOURNAMENTS
      ),
      // Add other database services as needed
    }
  };
}