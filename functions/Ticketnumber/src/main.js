import { Client, Databases, Query } from 'node-appwrite';

// Configuration constants
const DATABASE_ID = "675b83ef00172e714622";
const COLLECTION_IDS = {
  CHECK_INS: 'checkIns'
};

/**
 * Custom error class for detailed error handling
 * Provides granular error information for troubleshooting
 */
class CheckInProcessingError extends Error {
  constructor(message, code = 'PROCESSING_ERROR') {
    super(message);
    this.name = 'CheckInProcessingError';
    this.code = code;
  }
}

/**
 * Main Appwrite function to generate and assign check-in number
 * 
 * @param {Object} context - Appwrite function execution context
 * @returns {Object} Standardized response object
 */
export default async (context) => {
  const { req, res, log, error } = context;

  // Comprehensive environment and request validation
  try {
    validateRequest(req);
  } catch (validationError) {
    return res.json({
      success: false,
      code: validationError.code,
      message: validationError.message
    }, 400);
  }

  // Robust client initialization with environment variable validation
  if (!process.env.APPWRITE_FUNCTION_API_ENDPOINT) {
    return res.json({
      success: false,
      code: 'CONFIGURATION_ERROR',
      message: 'Appwrite endpoint not configured'
    }, 500);
  }


  const client = new Client()
    .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
    .setKey(process.env.APPWRITE_FUNCTION_API_KEY);
  
 const databases = new Databases(client);

  try {
    // Extract critical document information
    const documentData = req.body;
    log(documentData)
    const tournamentId = documentData.tournaments.$id;

    // Validate tournament ID
    if (!tournamentId) {
      throw new CheckInProcessingError(
        'Invalid tournament information', 
        'TOURNAMENT_ID_MISSING'
      );
    }

    // Generate unique check-in number
    const checkNumber = await generateCheckInNumber(
      databases, 
      tournamentId,
      log
    );

    log(checkNumber, databases, documentData)

    // Update document with generated check number
    await updateCheckInDocument(
      databases, 
      documentData.$id, 
      checkNumber,
      log
    );

    // Comprehensive logging
    log(`Check-in number generated: ${checkNumber} for document ${documentData.$id}`);

    // Return standardized success response
    return res.json({
      success: true,
      checkNumber,
      documentId: documentData.$id
    });

  } catch (processingError) {
    // Detailed error logging and response
    error(`Check-in processing failed: ${processingError.message}`);

    return res.json({
      success: false,
      code: processingError.code || 'UNEXPECTED_ERROR',
      message: processingError.message || 'Unexpected error during check-in processing',
      details: processingError.toString()
    }, processingError instanceof CheckInProcessingError ? 400 : 500);
  }
};

/**
 * Validate incoming request payload
 * 
 * @param {Object} req - Incoming request object
 * @throws {CheckInProcessingError} If request is invalid
 */
function validateRequest(req) {
  // Validate request method
  if (req.method !== 'POST') {
    throw new CheckInProcessingError(
      'Invalid request method. POST required',
      'INVALID_METHOD'
    );
  }

  // Validate request body
  if (!req.body) {
    throw new CheckInProcessingError(
      'Empty request body',
      'EMPTY_PAYLOAD'
    );
  }
}

/**
 * Generate a unique, sequential check-in number
 * 
 * @param {Databases} databases - Appwrite Databases service
 * @param {string} tournamentId - ID of the tournament
 * @returns {Promise<string>} Formatted check-in number
 */
async function generateCheckInNumber(databases, tournamentId, log) {
  try {
    // Fetch existing check-ins for the tournament
    const existingCheckIns = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_IDS.CHECK_INS,
      [
        Query.orderDesc('$createdAt')
      ]
    );

    const total = existingCheckIns.documents.filter((item) => {
      return item.tournaments.$id === tournamentId
    }).length

    
    log(tournamentId)
    log(existingCheckIns)
    log(total)

    return total;

  } catch (err) {
    throw new CheckInProcessingError(
      `Check-in number generation failed: ${err.message}`,
      'NUMBER_GENERATION_ERROR'
    );
  }
}

/**
 * Update check-in document with generated check number
 * 
 * @param {Databases} databases - Appwrite Databases service
 * @param {string} documentId - ID of the document to update
 * @param {number} checkNumber - Generated check number
 */
async function updateCheckInDocument(databases, id, checkNumber, log) {
  log(databases, id, checkNumber)
  try {
    await databases.updateDocument(
      DATABASE_ID,
      COLLECTION_IDS.CHECK_INS,
      id,
      {fencerName:"hello"}
    );
  } catch (err) {
    throw new CheckInProcessingError(
      `Document update failed: ${err}`,
      'DOCUMENT_UPDATE_ERROR'
    );
  }
}