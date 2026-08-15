export type Screen = 'splash' | 'home' | 'categories' | 'game' | 'result';

export type CategoryId = 'antigo-testamento' | 'novo-testamento' | 'personagens' | 'jesus' | 'curiosidades' | 'geral';

export type UserProfileType = 'adolescente' | 'jovem' | 'adulto' | 'pastor';

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  iconName: string;
  color: string; // Tailwind gradient class or hex
  accentColor: string;
  questionCount: number;
}

export interface Question {
  id: string;
  categoryId: CategoryId;
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
  reference: string; // e.g. "Gênesis 1:1"
  difficulty: 'facil' | 'medio' | 'dificil';
  difficultyLevel?: number; // 1 to 15 for Journey progression
  profileTags?: UserProfileType[];
  hint: string;
}

export interface UserStats {
  userProfile: UserProfileType;
  level: number;
  xp: number;
  maxXp: number;
  coins: number;
  lives: number;
  maxLives: number;
  nextLifeTimestamp: number | null; // epoch time for life recharge
  dailyStreak: number;
  maxStreak: number;
  lastPlayDate: string; // YYYY-MM-DD
  dailyChallengeCompletedDate: string | null; // YYYY-MM-DD
  dailyChallengesCompleted: number;
  totalDaysPlayed: number;
  claimedStreakMilestones: number[]; // e.g. [3, 7, 14, 30]
  highScore: number;
  maxCombo: number;
  matchesPlayed: number;
  firstMatchBonusClaimed: boolean;
  totalAnswered: number;
  totalCorrect: number;
  totalWrong: number;
  fastAnswerCount: number;
  completedCategories: Record<CategoryId, number>;
  soundEnabled: boolean;
  vibrationEnabled: boolean;
  maxJourneyQuestionReached: number;
  journeysCompleted: number;
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

export interface JourneyHelps {
  fiftyFifty: boolean;
  trocar: boolean;
  dica: boolean;
}

export interface GameSession {
  categoryId: CategoryId | 'diario' | 'jornada';
  categoryName: string;
  questions: Question[];
  currentIndex: number;
  score: number;
  combo: number;
  maxCombo: number;
  correctAnswers: number;
  wrongAnswers: number;
  livesLeft: number; // match lives (starts at 3 for standard, 1 for journey)
  coinsEarned: number;
  xpEarned: number;
  isDailyChallenge: boolean;
  isJourney?: boolean;
  guaranteedScore?: number;
  checkpointReached?: number; // 0, 5, 10
  helpsUsed?: JourneyHelps;
  activeHint?: string | null;
  isFinished: boolean;
  isNewRecord?: boolean;
  firstMatchReward?: boolean;
  isRewardEarned?: boolean;
}

export const JOURNEY_SCORE_LADDER = [
  100,      // Q1 (Fácil)
  200,      // Q2 (Fácil)
  300,      // Q3 (Fácil)
  500,      // Q4 (Fácil)
  1000,     // Q5 (Fácil) - Checkpoint 1 (1.000 pts)
  2000,     // Q6 (Médio)
  3000,     // Q7 (Médio)
  5000,     // Q8 (Médio)
  7500,     // Q9 (Médio)
  10000,    // Q10 (Médio) - Checkpoint 2 (10.000 pts)
  20000,    // Q11 (Difícil)
  30000,    // Q12 (Difícil)
  50000,    // Q13 (Difícil)
  75000,    // Q14 (Difícil)
  100000,   // Q15 (Pergunta Final / 👑)
];
