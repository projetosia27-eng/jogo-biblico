import { UserProfileType } from '../types';

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
    badge: 'Escola & Desafios',
    description: 'Situações cotidianas sobre amizade, pressão social, escola, família e presença nas redes digitais.',
    iconName: 'Sparkles',
  },
  {
    id: 'jovem',
    title: 'Jovem',
    badge: 'Carreira & Futuro',
    description: 'Decisões envolvendo faculdade, primeiro emprego, namoro, relacionamentos, independência e valores.',
    iconName: 'Zap',
  },
  {
    id: 'adulto',
    title: 'Adulto',
    badge: 'Família & Trabalho',
    description: 'Dilemas éticos no trabalho, relacionamentos familiares, gestão de prioridades e responsabilidade.',
    iconName: 'BookOpen',
  },
];

export function getProfileInfo(profile?: UserProfileType): ProfileInfo {
  return USER_PROFILES.find((p) => p.id === profile) || USER_PROFILES[1]; // default to 'jovem'
}
