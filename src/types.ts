export type Screen =
  | 'splash'
  | 'home'
  | 'journeys'
  | 'journey-play'
  | 'mysteries'
  | 'mystery-play'
  | 'real-life-list'
  | 'real-life-play'
  | 'result';

export type UserProfileType = 'adolescente' | 'jovem' | 'adulto';
export type UserProfile = UserProfileType | 'pastor' | 'leader';

export type MysteryType =
  | 'quem_sou_eu'
  | 'onde_estou'
  | 'qual_acontecimento'
  | 'qual_livro'
  | 'quem_disse'
  | 'linha_do_tempo';

export type MysteryDifficulty = 'facil' | 'medio' | 'dificil';

export interface PlayerAttributes {
  fe: number;
  coragem: number;
  sabedoria: number;
  misericordia: number;
  integridade: number;
}

export interface UserStats {
  userProfile: UserProfileType;
  level: number;
  xp: number;
  maxXp: number;
  coins: number;
  lives: number;
  maxLives: number;
  nextLifeTimestamp: number | null;
  dailyStreak: number;
  maxStreak: number;
  lastPlayDate: string; // YYYY-MM-DD
  dailyChallengeCompletedDate: string | null; // YYYY-MM-DD
  dailyChallengesCompleted: number;
  totalDaysPlayed: number;
  claimedStreakMilestones: number[];
  highScore: number;
  matchesPlayed: number;
  firstMatchBonusClaimed: boolean;
  totalAnswered: number;
  totalCorrect: number;
  soundEnabled: boolean;
  vibrationEnabled: boolean;
  journeysCompleted: number;
  completedJourneyIds: string[];
  mysteriesSolved: number;
  solvedMysteryIds: string[];
  decisionsMade: number;
  realLifeCompletedCount: number;
  replayedStoryCount: number;
  completedRealLifeStoryIds: string[];
  attributes: PlayerAttributes;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  progress: number;
  maxProgress: number;
  unlocked: boolean;
  claimed: boolean;
  rewardCoins: number;
  rewardXP: number;
}

export interface StreakMilestone {
  days: number;
  rewardCoins: number;
  rewardXP: number;
  title: string;
}

// Real Life Mode Data Interfaces
export interface RealLifeChoice {
  id: string;
  text: string;
  consequence: string;
  effects: Partial<PlayerAttributes>;
  biblicalPrinciple: string;
  biblicalReference: string;
  biblicalExplanation: string;
}

export interface RealLifeScene {
  id: string;
  sceneNumber: number; // 1 to 5
  title: string;
  context: string;
  promptQuestion: string; // e.g., "O que você faria?"
  choices: RealLifeChoice[];
}

export interface RealLifeStory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  profiles: UserProfileType[];
  theme: string;
  icon: string;
  scenes: RealLifeScene[];
  reflectionQuestion: string;
  completionReward: {
    xp: number;
    coins: number;
  };
}

// Result summary type for Journeys, Mysteries, or Real Life
export interface GameSessionResult {
  mode: 'journey' | 'mystery' | 'daily' | 'real_life';
  title: string;
  subtitle: string;
  xpEarned: number;
  coinsEarned: number;
  attributesGained?: Partial<PlayerAttributes>;
  finalProfileName?: string;
  finalProfileDescription?: string;
  cluesUsed?: number;
  bibleReference?: string;
  isDailyChallenge?: boolean;
  reflectionQuestion?: string;
  storyId?: string;
}
