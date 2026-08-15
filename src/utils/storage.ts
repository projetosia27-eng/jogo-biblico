import { UserStats, Achievement } from '../types';
import { INITIAL_ACHIEVEMENTS } from '../data/achievements';

const STATS_KEY = 'desafio_biblico_user_stats';
const ACHIEVEMENTS_KEY = 'desafio_biblico_achievements';
const ACTIVE_JOURNEY_KEY = 'desafio_biblico_active_journey';
const RECENT_QUESTIONS_KEY = 'desafio_biblico_recent_questions';

const DEFAULT_STATS: UserStats = {
  userProfile: 'jovem', // Default profile, can be selected on first run
  level: 1,
  xp: 0,
  maxXp: 100,
  coins: 100,
  lives: 5,
  maxLives: 5,
  nextLifeTimestamp: null,
  dailyStreak: 1,
  maxStreak: 1,
  lastPlayDate: new Date().toISOString().split('T')[0],
  dailyChallengeCompletedDate: null,
  dailyChallengesCompleted: 0,
  totalDaysPlayed: 1,
  claimedStreakMilestones: [],
  highScore: 0,
  maxCombo: 0,
  matchesPlayed: 0,
  firstMatchBonusClaimed: false,
  totalAnswered: 0,
  totalCorrect: 0,
  totalWrong: 0,
  fastAnswerCount: 0,
  completedCategories: {
    'antigo-testamento': 0,
    'novo-testamento': 0,
    'personagens': 0,
    'jesus': 0,
    'curiosidades': 0,
    'geral': 0,
  },
  soundEnabled: true,
  vibrationEnabled: true,
  maxJourneyQuestionReached: 0,
  journeysCompleted: 0,
};

export const RECHARGE_INTERVAL_MS = 20 * 60 * 1000; // 20 minutes per life

/**
 * Load user stats with fallback defaults & auto-recharge calculations.
 */
export function loadUserStats(): UserStats {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (!raw) {
      saveUserStats(DEFAULT_STATS);
      return DEFAULT_STATS;
    }
    const parsed = JSON.parse(raw);
    const stats: UserStats = {
      ...DEFAULT_STATS,
      ...parsed,
    };

    // Life auto recharge check
    const now = Date.now();
    if (stats.lives < stats.maxLives && stats.nextLifeTimestamp) {
      let timePassed = now - (stats.nextLifeTimestamp - RECHARGE_INTERVAL_MS);
      if (timePassed > 0) {
        const livesGained = Math.floor(timePassed / RECHARGE_INTERVAL_MS);
        if (livesGained > 0) {
          stats.lives = Math.min(stats.maxLives, stats.lives + livesGained);
          if (stats.lives < stats.maxLives) {
            const remainder = timePassed % RECHARGE_INTERVAL_MS;
            stats.nextLifeTimestamp = now + (RECHARGE_INTERVAL_MS - remainder);
          } else {
            stats.nextLifeTimestamp = null;
          }
        }
      }
    }

    // Daily streak logic check on app load
    const today = new Date().toISOString().split('T')[0];
    if (stats.lastPlayDate) {
      const last = new Date(stats.lastPlayDate);
      const current = new Date(today);
      const diffDays = Math.round((current.getTime() - last.getTime()) / (1000 * 3600 * 24));

      if (diffDays === 1) {
        // Streak is active from yesterday, keep as is until today's play
      } else if (diffDays > 1) {
        stats.dailyStreak = 1; // streak reset if full day missed
      }
    }

    saveUserStats(stats);
    return stats;
  } catch (e) {
    console.error('Error loading stats from localStorage', e);
    return DEFAULT_STATS;
  }
}

/**
 * Persist user stats to localStorage (Centralized persistence layer)
 */
export function saveUserStats(stats: UserStats): void {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (e) {
    console.error('Error saving stats to localStorage', e);
  }
}

/**
 * Load achievements list
 */
export function loadAchievements(): Achievement[] {
  try {
    const raw = localStorage.getItem(ACHIEVEMENTS_KEY);
    if (!raw) {
      saveAchievements(INITIAL_ACHIEVEMENTS);
      return INITIAL_ACHIEVEMENTS;
    }
    const stored: Achievement[] = JSON.parse(raw);
    
    // Ensure all initial achievements exist (migration safety)
    const storedMap = new Map(stored.map((a) => [a.id, a]));
    const merged = INITIAL_ACHIEVEMENTS.map((init) => {
      const existing = storedMap.get(init.id);
      if (existing) {
        return {
          ...init,
          progress: existing.progress,
          unlocked: existing.unlocked,
          claimed: existing.claimed,
        };
      }
      return init;
    });

    saveAchievements(merged);
    return merged;
  } catch {
    return INITIAL_ACHIEVEMENTS;
  }
}

/**
 * Save achievements to localStorage
 */
export function saveAchievements(achievements: Achievement[]): void {
  try {
    localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(achievements));
  } catch (e) {
    console.error('Error saving achievements', e);
  }
}

/**
 * Add XP and coins, handling level ups
 */
export function addXpAndCoins(
  currentStats: UserStats,
  xpEarned: number,
  coinsEarned: number
): { updatedStats: UserStats; leveledUp: boolean; newLevel: number } {
  let newXp = currentStats.xp + xpEarned;
  let level = currentStats.level;
  let maxXp = currentStats.maxXp;
  let leveledUp = false;

  while (newXp >= maxXp) {
    newXp -= maxXp;
    level += 1;
    maxXp = Math.floor(maxXp * 1.25);
    leveledUp = true;
  }

  const updatedStats: UserStats = {
    ...currentStats,
    xp: newXp,
    level,
    maxXp,
    coins: currentStats.coins + coinsEarned,
  };

  saveUserStats(updatedStats);
  return { updatedStats, leveledUp, newLevel: level };
}

/**
 * Consume 1 life
 */
export function consumeLife(currentStats: UserStats): UserStats {
  if (currentStats.lives <= 0) return currentStats;

  const newLives = currentStats.lives - 1;
  const now = Date.now();
  let nextTimestamp = currentStats.nextLifeTimestamp;

  if (newLives < currentStats.maxLives && !nextTimestamp) {
    nextTimestamp = now + RECHARGE_INTERVAL_MS;
  }

  const updated: UserStats = {
    ...currentStats,
    lives: newLives,
    nextLifeTimestamp: nextTimestamp,
  };

  saveUserStats(updated);
  return updated;
}

/**
 * Buy life with coins
 */
export function buyLife(currentStats: UserStats, cost: number = 50): UserStats | null {
  if (currentStats.coins < cost || currentStats.lives >= currentStats.maxLives) {
    return null;
  }

  const newLives = currentStats.lives + 1;
  const updated: UserStats = {
    ...currentStats,
    coins: currentStats.coins - cost,
    lives: newLives,
    nextLifeTimestamp: newLives >= currentStats.maxLives ? null : currentStats.nextLifeTimestamp,
  };

  saveUserStats(updated);
  return updated;
}

/**
 * Record daily play date and update daily streak
 */
export function recordDailyPlay(currentStats: UserStats): UserStats {
  const today = new Date().toISOString().split('T')[0];
  if (currentStats.lastPlayDate === today) {
    return currentStats; // Already recorded today
  }

  const last = new Date(currentStats.lastPlayDate);
  const current = new Date(today);
  const diffDays = Math.round((current.getTime() - last.getTime()) / (1000 * 3600 * 24));

  let newStreak = currentStats.dailyStreak;
  if (diffDays === 1) {
    newStreak += 1;
  } else if (diffDays > 1) {
    newStreak = 1;
  }

  const newMaxStreak = Math.max(currentStats.maxStreak || 1, newStreak);
  const newDaysPlayed = (currentStats.totalDaysPlayed || 1) + 1;

  const updated: UserStats = {
    ...currentStats,
    dailyStreak: newStreak,
    maxStreak: newMaxStreak,
    totalDaysPlayed: newDaysPlayed,
    lastPlayDate: today,
  };

  saveUserStats(updated);
  return updated;
}

/**
 * Evaluate achievements progress and return newly unlocked achievements
 */
export function checkAndEvaluateAchievements(
  stats: UserStats,
  achievementsList: Achievement[]
): { updatedAchievements: Achievement[]; newlyUnlocked: Achievement[] } {
  let changed = false;
  const newlyUnlocked: Achievement[] = [];

  const updatedAchievements = achievementsList.map((ach) => {
    let progress = ach.progress;

    if (ach.id === 'ach_1') progress = stats.matchesPlayed >= 1 ? 1 : 0;
    if (ach.id === 'ach_chk_1') progress = (stats.maxJourneyQuestionReached || 0) >= 5 ? 1 : 0;
    if (ach.id === 'ach_chk_2') progress = (stats.maxJourneyQuestionReached || 0) >= 10 ? 1 : 0;
    if (ach.id === 'ach_chk_3') progress = (stats.maxJourneyQuestionReached || 0) >= 15 ? 1 : 0;
    if (ach.id === 'ach_master') progress = (stats.journeysCompleted || 0) >= 1 ? 1 : 0;
    if (ach.id === 'ach_2') progress = Math.min(ach.maxProgress, stats.totalCorrect);
    if (ach.id === 'ach_3') progress = Math.min(ach.maxProgress, stats.totalCorrect);
    if (ach.id === 'ach_4') progress = Math.min(ach.maxProgress, stats.maxCombo);
    if (ach.id === 'ach_5') progress = stats.fastAnswerCount >= 1 ? 1 : 0;
    if (ach.id === 'ach_6') progress = Math.min(ach.maxProgress, Math.max(stats.dailyStreak, stats.maxStreak));
    if (ach.id === 'ach_7') progress = Math.min(ach.maxProgress, stats.level);

    const isUnlocked = progress >= ach.maxProgress;

    if (!ach.unlocked && isUnlocked) {
      newlyUnlocked.push({ ...ach, progress, unlocked: true });
      changed = true;
      return { ...ach, progress, unlocked: true };
    }

    if (progress !== ach.progress) {
      changed = true;
      return { ...ach, progress };
    }

    return ach;
  });

  if (changed) {
    saveAchievements(updatedAchievements);
  }

  return { updatedAchievements, newlyUnlocked };
}

/**
 * Save active journey session to localStorage
 */
export function saveActiveJourney(session: any | null): void {
  try {
    if (!session) {
      localStorage.removeItem(ACTIVE_JOURNEY_KEY);
    } else {
      localStorage.setItem(ACTIVE_JOURNEY_KEY, JSON.stringify(session));
    }
  } catch (e) {
    console.error('Error saving active journey', e);
  }
}

/**
 * Load active journey session from localStorage
 */
export function loadActiveJourney(): any | null {
  try {
    const raw = localStorage.getItem(ACTIVE_JOURNEY_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

/**
 * Clear active journey session from localStorage
 */
export function clearActiveJourney(): void {
  try {
    localStorage.removeItem(ACTIVE_JOURNEY_KEY);
  } catch (e) {
    console.error('Error clearing active journey', e);
  }
}

/**
 * Load recent question IDs
 */
export function loadRecentQuestionIds(): string[] {
  try {
    const raw = localStorage.getItem(RECENT_QUESTIONS_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

/**
 * Add recent question IDs (keeps max 60 most recent)
 */
export function addRecentQuestionIds(ids: string[]): void {
  try {
    const existing = loadRecentQuestionIds();
    const updated = Array.from(new Set([...ids, ...existing])).slice(0, 60);
    localStorage.setItem(RECENT_QUESTIONS_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Error saving recent question IDs', e);
  }
}
