/**
 * Feature flags for gradual rollout. Flip these on as integrations ship.
 */
export const features = {
  onlineScheduling: false,
  clientPortal: false,
  onlinePayments: false,
} as const;

export type FeatureKey = keyof typeof features;

export function isFeatureEnabled(key: FeatureKey): boolean {
  return features[key];
}
