import { UserProfileType, Question } from '../types';

export interface ProfileInfo {
  id: UserProfileType;
  title: string;
  badge: string;
  description: string;
  iconName: string;
}

export const USER_PROFILES: ProfileInfo[] = [
  {
    id: 'adolescente',
    title: 'Adolescente',
    badge: 'Iniciante ao Desafio',
    description: 'Histórias bíblicas mais conhecidas, personagens marcantes, ensinamentos e acontecimentos fundamentais.',
    iconName: 'Sparkles',
  },
  {
    id: 'jovem',
    title: 'Jovem',
    badge: 'Intermediário',
    description: 'Contexto dos livros, acontecimentos das narrativas, ensinamentos dos evangelhos e detalhes bíblicos.',
    iconName: 'Zap',
  },
  {
    id: 'adulto',
    title: 'Adulto',
    badge: 'Intermediário ao Avançado',
    description: 'Cronologia bíblica, personagens menos conhecidos, passagens específicas e contexto histórico dos livros.',
    iconName: 'BookOpen',
  },
  {
    id: 'pastor',
    title: 'Pastor / Líder',
    badge: 'Avançado ao Especialista',
    description: 'Geografia bíblica, teologia, relação entre textos do Antigo e Novo Testamento e conhecimento detalhado.',
    iconName: 'Crown',
  },
];

export function getProfileInfo(profile?: UserProfileType): ProfileInfo {
  return USER_PROFILES.find((p) => p.id === profile) || USER_PROFILES[1]; // default to 'jovem'
}

/**
 * Calculates the target question difficulty level (1 to 15) for question number (1 to 15) based on profile.
 */
export function getTargetLevelForQuestion(profile: UserProfileType, qNum: number): number {
  const num = Math.max(1, Math.min(15, qNum));

  switch (profile) {
    case 'adolescente': {
      // 1-5: Fácil (lvl 1-3), 6-10: Médio (lvl 4-6), 11-14: Intermediário/Difícil (lvl 7-10), 15: Difícil (lvl 12)
      const map: Record<number, number> = {
        1: 1, 2: 1, 3: 2, 4: 2, 5: 3,
        6: 4, 7: 4, 8: 5, 9: 5, 10: 6,
        11: 7, 12: 8, 13: 9, 14: 10,
        15: 12,
      };
      return map[num] || num;
    }
    case 'jovem': {
      // 1-5: Fácil/Intermediário (lvl 2-4), 6-10: Intermediário (lvl 5-9), 11-14: Difícil (lvl 10-13), 15: Muito Difícil (lvl 14)
      const map: Record<number, number> = {
        1: 2, 2: 2, 3: 3, 4: 3, 5: 4,
        6: 5, 7: 6, 8: 7, 9: 8, 10: 9,
        11: 10, 12: 11, 13: 12, 14: 13,
        15: 14,
      };
      return map[num] || num;
    }
    case 'adulto': {
      // 1-5: Intermediário (lvl 3-6), 6-10: Intermediário/Difícil (lvl 7-11), 11-14: Difícil (lvl 12-15), 15: Avançado (lvl 15)
      const map: Record<number, number> = {
        1: 3, 2: 3, 3: 4, 4: 5, 5: 6,
        6: 7, 7: 8, 8: 9, 9: 10, 10: 11,
        11: 12, 12: 13, 13: 14, 14: 15,
        15: 15,
      };
      return map[num] || num;
    }
    case 'pastor': {
      // 1-5: Intermediário (lvl 4-8), 6-10: Difícil (lvl 9-13), 11-14: Avançado (lvl 13-15), 15: Especialista (lvl 15)
      const map: Record<number, number> = {
        1: 4, 2: 5, 3: 6, 4: 7, 5: 8,
        6: 9, 7: 10, 8: 11, 9: 12, 10: 13,
        11: 13, 12: 14, 13: 15, 14: 15,
        15: 15,
      };
      return map[num] || num;
    }
    default:
      return num;
  }
}

/**
 * Smart Journey question selector matching profile curve and avoiding recent questions.
 */
export function pickJourneyQuestions(
  profile: UserProfileType,
  allQuestions: Question[],
  recentQuestionIds: string[] = []
): Question[] {
  const picked: Question[] = [];
  const usedInSessionIds = new Set<string>();

  for (let qNum = 1; qNum <= 15; qNum++) {
    const targetLevel = getTargetLevelForQuestion(profile, qNum);

    // Filter available questions by target level or profile tag
    let candidatePool = allQuestions.filter((q) => {
      if (usedInSessionIds.has(q.id)) return false;
      const isLevelMatch = q.difficultyLevel === targetLevel;
      const isProfileMatch = q.profileTags ? q.profileTags.includes(profile) : true;
      return isLevelMatch && isProfileMatch;
    });

    // Fallback: broaden level search if exact level candidate count is zero
    if (candidatePool.length === 0) {
      candidatePool = allQuestions.filter((q) => {
        if (usedInSessionIds.has(q.id)) return false;
        const levelDiff = Math.abs((q.difficultyLevel || 1) - targetLevel);
        return levelDiff <= 2;
      });
    }

    // Ultimate fallback if still empty
    if (candidatePool.length === 0) {
      candidatePool = allQuestions.filter((q) => !usedInSessionIds.has(q.id));
    }

    // Prefer questions NOT in recentQuestionIds
    const freshCandidates = candidatePool.filter((q) => !recentQuestionIds.includes(q.id));
    const finalPool = freshCandidates.length > 0 ? freshCandidates : candidatePool;

    // Pick random question from final pool
    const selected = finalPool.length > 0
      ? finalPool[Math.floor(Math.random() * finalPool.length)]
      : allQuestions[0];

    picked.push(selected);
    usedInSessionIds.add(selected.id);
  }

  return picked;
}
