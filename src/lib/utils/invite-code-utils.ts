import crypto from 'crypto';

/**
 * Invite Code Generation and Validation Utility
 * 
 * This module provides a secure and flexible system for generating 
 * and decoding tournament invitation codes.
 */

/**
 * Represents the structure of an invitation payload
 */
export interface InvitationPayload {
  /** Unique identifier for the tournament */
  tournamentId: string;
  
  /** Role for the invitation (e.g., 'admin', 'participant', 'staff') */
  role: string;
  
  /** Optional expiration timestamp */
  expiresAt?: number;
  
  /** Optional additional metadata */
  metadata?: Record<string, any>;
}

/**
 * Encryption key for invite code generation
 * NOTE: In production, this should be a secure environment variable
 */
const ENCRYPTION_KEY = process.env.INVITE_CODE_SECRET || 
  crypto.randomBytes(32).toString('hex');

/**
 * Generate a secure invite code for a tournament
 * 
 * @param payload - Invitation details
 * @returns A URL-safe encoded invite code
 */
export function generateInviteCode(payload: InvitationPayload): string {
  // Validate input
  if (!payload.tournamentId) {
    throw new Error('Tournament ID is required');
  }

  // Add default expiration (7 days from now) if not specified
  const finalPayload: InvitationPayload = {
    ...payload,
    expiresAt: payload.expiresAt || 
      Math.floor(Date.now() / 1000) + (7 * 24 * 60 * 60) // 7 days
  };

  // Convert payload to JSON
  const jsonPayload = JSON.stringify(finalPayload);

  // Create cipher
  const cipher = crypto.createCipheriv(
    'aes-256-cbc', 
    Buffer.from(ENCRYPTION_KEY, 'hex'),
    crypto.randomBytes(16) // IV
  );

  // Encrypt payload
  let encrypted = cipher.update(jsonPayload, 'utf8', 'base64');
  encrypted += cipher.final('base64');

  // Generate a short, uppercase code
  const shortCode = crypto.randomBytes(3)
    .toString('hex')
    .toUpperCase()
    .slice(0, 6);

  // Combine short code with encrypted payload
  return shortCode + encrypted;
}

/**
 * Decode and validate an invite code
 * 
 * @param inviteCode - The invite code to decode
 * @returns Decoded invitation payload
 * @throws Error if code is invalid or expired
 */
export function decodeInviteCode(inviteCode: string): InvitationPayload {
  // Validate input
  if (!inviteCode || inviteCode.length < 10) {
    throw new Error('Invalid invite code');
  }

  try {
    // Extract short code and encrypted payload
    const shortCode = inviteCode.slice(0, 6);
    const encryptedPayload = inviteCode.slice(6);

    // Create decipher
    const decipher = crypto.createDecipheriv(
      'aes-256-cbc', 
      Buffer.from(ENCRYPTION_KEY, 'hex'),
      crypto.randomBytes(16) // IV must match encryption
    );

    // Decrypt payload
    let decrypted = decipher.update(encryptedPayload, 'base64', 'utf8');
    decrypted += decipher.final('utf8');

    // Parse payload
    const payload: InvitationPayload = JSON.parse(decrypted);

    // Validate expiration
    if (payload.expiresAt && payload.expiresAt < Math.floor(Date.now() / 1000)) {
      throw new Error('Invite code has expired');
    }

    return payload;
  } catch (error) {
    console.error('Invite code decoding error:', error);
    throw new Error('Invalid or corrupted invite code');
  }
}

/**
 * Verify if an invite code is valid
 * 
 * @param inviteCode - The invite code to verify
 * @returns Boolean indicating if the code is valid
 */
export function verifyInviteCode(inviteCode: string): boolean {
  try {
    decodeInviteCode(inviteCode);
    return true;
  } catch {
    return false;
  }
}

/**
 * Create an example invite code generation utility
 */
export function createTournamentInvite(
  tournamentId: string, 
  role: string = 'participant', 
  additionalMetadata?: Record<string, any>
): string {
  return generateInviteCode({
    tournamentId,
    role,
    metadata: additionalMetadata,
    // Optional: set custom expiration
    expiresAt: Math.floor(Date.now() / 1000) + (30 * 24 * 60 * 60) // 30 days
  });
}