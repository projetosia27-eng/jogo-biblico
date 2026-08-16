/**
 * Monetization Architectural Layer
 * Prepared for future Google AdMob / Unity Ads integration.
 * Currently configured with feature flags set to disabled.
 */

export interface AdReward {
  type: 'coins' | 'life' | 'xp' | 'hint';
  amount: number;
}

export class MonetizationService {
  private static instance: MonetizationService;
  private isAdsEnabled: boolean = false;
  private isAdLoaded: boolean = false;

  private constructor() {
    // Feature flag initialized to false for clean production build
    this.isAdsEnabled = false;
  }

  public static getInstance(): MonetizationService {
    if (!MonetizationService.instance) {
      MonetizationService.instance = new MonetizationService();
    }
    return MonetizationService.instance;
  }

  public isEnabled(): boolean {
    return this.isAdsEnabled;
  }

  public isRewardedAdReady(): boolean {
    return this.isAdsEnabled && this.isAdLoaded;
  }

  public async preloadRewardedAd(): Promise<boolean> {
    if (!this.isAdsEnabled) return false;
    // Future AdMob/SDK preload logic here
    this.isAdLoaded = true;
    return true;
  }

  public async showRewardedAd(_rewardType: 'coins' | 'life' | 'xp'): Promise<boolean> {
    if (!this.isAdsEnabled || !this.isAdLoaded) {
      return false;
    }
    // Future AdMob show logic here
    this.isAdLoaded = false;
    return true;
  }
}

export const monetizationService = MonetizationService.getInstance();
