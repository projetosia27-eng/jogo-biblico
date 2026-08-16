import { UserStats, Achievement } from '../types';
import { INITIAL_ACHIEVEMENTS } from '../data/achievements';

const STATS_KEY = 'desafio_biblico_user_stats';
const ACHIEVEMENTS_KEY = 'desafio_biblico_achievements';
const ACTIVE_JOURNEY_KEY = 'desafio_biblico_active_journey';
const RECENT_QUESTIONS_KEY = 'desafio_biblico_recent_questions';

const DEFAULT_STATS: UserStats = {
  userProfile: 'jovem',
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
  matchesPlayed: 0,
  firstMatchBonusClaimed: false,
  totalAnswered: 0,
  totalCorrect: 0,
  soundEnabled: true,
  vibrationEnabled: true,
  journeysCompleted: 0,
  completedJourneyIds: [],
  mysteriesSolved: 0,
  solvedMysteryIds: [],
  decisionsMade: 0,
  realLifeCompletedCount: 0,
  replayedStoryCount: 0,
  completedRealLifeStoryIds: [],
  attributes: {
    fe: 0,
    coragem: 0,
    sabedoria: 0,
    misericordia: 0,
    integridade: 0,
  },
};

export const RECHARGE_INTERVAL_MS = 20 * 60 * 1000; // 20 minutes per life

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
      attributes: {
        ...DEFAULT_STATS.attributes,
        ...(parsed.attributes || {}),
      },
    };

    // Migration: Migrate obsolete profile 'pastor' or 'leader' to 'adulto'
    if (stats.userProfile === ('pastor' as any) || stats.userProfile === ('leader' as any)) {
      stats.userProfile = 'adulto';
    }

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
        // Streak is active
      } else if (diffDays > 1) {
        stats.dailyStreak = 1;
      }
    }

    saveUserStats(stats);
    return stats;
  } catch (e) {
    console.error('Error loading stats from localStorage', e);
    return DEFAULT_STATS;
  }
}

export function saveUserStats(stats: UserStats): void {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (e) {
    console.error('Error saving stats to localStorage', e);
  }
}

export function loadAchievements(): Achievement[] {
  try {
    const raw = localStorage.getItem(ACHIEVEMENTS_KEY);
    if (!raw) {
      saveAchievements(INITIAL_ACHIEVEMENTS);
      return INITIAL_ACHIEVEMENTS;
    }
    const stored: Achievement[] = JSON.parse(raw);
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

export function saveAchievements(achievements: Achievement[]): void {
  try {
    localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(achievements));
  } catch (e) {
    console.error('Error saving achievements', e);
  }
}

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

export function recordDailyPlay(currentStats: UserStats): UserStats {
  const today = new Date().toISOString().split('T')[0];
  if (currentStats.lastPlayDate === today) {
    return currentStats;
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

export function checkAndEvaluateAchievements(
  stats: UserStats,
  achievementsList: Achievement[]
): { updatedAchievements: Achievement[]; newlyUnlocked: Achievement[] } {
  let changed = false;
  const newlyUnlocked: Achievement[] = [];

  const updatedAchievements = achievementsList.map((ach) => {
    let progress = ach.progress;

    if (ach.id === 'primeira_escolha') progress = (stats.realLifeCompletedCount || 0) >= 1 ? 1 : 0;
    if (ach.id === 'pensando_alem') progress = Math.min(ach.maxProgress, stats.realLifeCompletedCount || 0);
    if (ach.id === 'outra_perspectiva') progress = (stats.replayedStoryCount || 0) >= 1 ? 1 : 0;
    if (ach.id === 'vida_e_fe') progress = Math.min(ach.maxProgress, stats.completedRealLifeStoryIds?.length || 0);
    if (ach.id === 'primeira_decisao') progress = stats.decisionsMade >= 1 ? 1 : 0;
    if (ach.id === 'investigador') progress = Math.min(ach.maxProgress, stats.mysteriesSolved);
    if (ach.id === 'viajante') progress = Math.min(ach.maxProgress, stats.journeysCompleted);
    if (ach.id === 'conhecedor') progress = Math.min(ach.maxProgress, stats.mysteriesSolved);
    if (ach.id === 'sabedoria_divina') progress = Math.min(ach.maxProgress, stats.attributes.sabedoria);
    if (ach.id === 'fidelidade_diaria') progress = Math.min(ach.maxProgress, Math.max(stats.dailyStreak, stats.maxStreak));

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

export function loadActiveJourney(): any | null {
  try {
    const raw = localStorage.getItem(ACTIVE_JOURNEY_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearActiveJourney(): void {
  try {
    localStorage.removeItem(ACTIVE_JOURNEY_KEY);
  } catch (e) {
    console.error('Error clearing active journey', e);
  }
}

export function loadRecentQuestionIds(): string[] {
  try {
    const raw = localStorage.getItem(RECENT_QUESTIONS_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function addRecentQuestionIds(ids: string[]): void {
  try {
    const existing = loadRecentQuestionIds();
    const updated = Array.from(new Set([...ids, ...existing])).slice(0, 60);
    localStorage.setItem(RECENT_QUESTIONS_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Error saving recent question IDs', e);
  }
}
