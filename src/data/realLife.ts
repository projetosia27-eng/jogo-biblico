import { RealLifeStory, UserProfile } from '../types';
import { ADOLESCENTE_STORIES } from './realLife/adolescente';
import { JOVEM_STORIES } from './realLife/jovem';
import { ADULTO_STORIES } from './realLife/adulto';

export const REAL_LIFE_STORIES: RealLifeStory[] = [
  ...ADOLESCENTE_STORIES,
  ...JOVEM_STORIES,
  ...ADULTO_STORIES
];

export function getStoriesForProfile(profile: UserProfile): RealLifeStory[] {
  // Map pastor/leader to adulto fallback if any remain
  const normalizedProfile: UserProfile = (profile === 'pastor' || profile === 'leader') ? 'adulto' : profile;
  
  return REAL_LIFE_STORIES.filter(story => 
    story.profiles.includes(normalizedProfile) || story.profiles.includes('adulto')
  );
}

export function getStoryById(id: string): RealLifeStory | undefined {
  return REAL_LIFE_STORIES.find(story => story.id === id);
}
