import { Question } from '../types';
import { QUESTIONS } from '../data/questions';

/**
 * Returns a deterministic integer hash from a date string (YYYY-MM-DD)
 */
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

/**
 * Deterministically picks 10 questions for any given date string (YYYY-MM-DD).
 * The output is 100% identical every time for the same date.
 */
export function getDailyChallengeQuestions(dateStr: string): Question[] {
  const seed = hashString(dateStr);
  const total = QUESTIONS.length;

  if (total <= 10) return [...QUESTIONS];

  const indices: number[] = [];
  const used = new Set<number>();

  let currentSeed = seed;
  while (indices.length < 10) {
    currentSeed = (currentSeed * 9301 + 49297) % 233280;
    const index = Math.floor((currentSeed / 233280) * total);
    if (!used.has(index)) {
      used.add(index);
      indices.push(index);
    }
  }

  const picked = indices.map((i) => QUESTIONS[i]);

  // Sort picked questions by progressive difficulty: facil -> medio -> dificil
  const diffWeight: Record<Question['difficulty'], number> = {
    facil: 1,
    medio: 2,
    dificil: 3,
  };

  return picked.sort((a, b) => diffWeight[a.difficulty] - diffWeight[b.difficulty]);
}
