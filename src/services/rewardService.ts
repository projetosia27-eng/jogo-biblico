import { UserStats } from '../types';
import { addXpAndCoins, saveUserStats } from '../utils/storage';

/**
 * Reward Service Layer
 * Manages bonus rewards and milestone claims.
 */
export class RewardService {
  /**
   * Grant bonus coins and XP
   */
  public static grantBonusReward(
    currentStats: UserStats,
    xpBonus: number,
    coinsBonus: number
  ): UserStats {
    const { updatedStats } = addXpAndCoins(currentStats, xpBonus, coinsBonus);
    return updatedStats;
  }

  /**
   * Grant extra life refill
   */
  public static grantLifeRefill(currentStats: UserStats): UserStats {
    const newLives = Math.min(currentStats.maxLives, currentStats.lives + 1);
    const updated: UserStats = {
      ...currentStats,
      lives: newLives,
      nextLifeTimestamp: newLives >= currentStats.maxLives ? null : currentStats.nextLifeTimestamp,
    };
    saveUserStats(updated);
    return updated;
  }
}
