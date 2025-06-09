// lib/features/flags.ts

export const FEATURES = {
  PHONE_INPUT: false,
  NOTIFICATION_CHECKIN: false,
  NOTIFICATION_PICKUP: true
} as const;

// Type for feature flags
export type FeatureFlags = typeof FEATURES;