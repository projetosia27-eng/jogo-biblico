import React, { useState } from 'react';
import { RealLifeStory, UserProfileType, UserStats } from '../types';
import { REAL_LIFE_STORIES } from '../data/realLife';
import { getProfileInfo } from '../utils/profileDifficulty';
import {
  Compass,
  ArrowLeft,
  Sparkles,
  Zap,
  BookOpen,
  Users,
  Camera,
  Shield,
  Briefcase,
  Home,
  CheckCircle2,
  ChevronRight,
  Filter,
} from 'lucide-react';

interface RealLifeListScreenProps {
  stats: UserStats;
  onSelectStory: (story: RealLifeStory) => void;
  onBack: () => void;
}

export const RealLifeListScreen: React.FC<RealLifeListScreenProps> = ({
  stats,
  onSelectStory,
  onBack,
}) => {
  const currentProfile = stats.userProfile || 'jovem';
  const profileInfo = getProfileInfo(currentProfile);

  const [activeTab, setActiveTab] = useState<'para_voce' | 'adolescente' | 'jovem' | 'adulto'>('para_voce');

  const filteredStories = REAL_LIFE_STORIES.filter((story) => {
    if (activeTab === 'para_voce') {
      return story.profiles.includes(currentProfile);
    }
    return story.profiles.includes(activeTab);
  });

  const getStoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="w-6 h-6 text-amber-400" />;
      case 'Camera': return <Camera className="w-6 h-6 text-sky-400" />;
      case 'Shield': return <Shield className="w-6 h-6 text-emerald-400" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-amber-400" />;
      case 'Home': return <Home className="w-6 h-6 text-indigo-400" />;
      default: return <Compass className="w-6 h-6 text-amber-400" />;
    }
  };

  const getProfileBadgeLabel = (profiles: UserProfileType[]) => {
    if (profiles.includes('adolescente')) return 'Adolescente';
    if (profiles.includes('jovem')) return 'Jovem';
    if (profiles.includes('adulto')) return 'Adulto';
    return 'Geral';
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col pb-12">
      {/* Header */}
      <header className="px-4 py-4 bg-slate-900/80 border-b border-slate-800 backdrop-blur-md sticky top-0 z-20 flex items-center justify-between">
        <button
          onClick={onBack}
          className="p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition"
          aria-label="Voltar"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="text-center">
          <h1 className="text-lg font-bold text-amber-300 tracking-tight flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            VIDA REAL
          </h1>
          <p className="text-xs text-slate-400">Decisões de hoje. Princípios que permanecem.</p>
        </div>
        <div className="w-9" />
      </header>

      <main className="max-w-md mx-auto w-full px-4 pt-6 flex-1 flex flex-col gap-6">
        {/* Banner Active Profile */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border border-amber-500/20 shadow-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              {currentProfile === 'adolescente' && <Sparkles className="w-5 h-5" />}
              {currentProfile === 'jovem' && <Zap className="w-5 h-5" />}
              {currentProfile === 'adulto' && <BookOpen className="w-5 h-5" />}
            </div>
            <div>
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                Perfil Atual
              </div>
              <div className="text-sm font-bold text-slate-100">{profileInfo.title}</div>
            </div>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
            {profileInfo.badge}
          </span>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setActiveTab('para_voce')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center gap-1.5 ${
              activeTab === 'para_voce'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Para Você ({profileInfo.title})
          </button>
          <button
            onClick={() => setActiveTab('adolescente')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
              activeTab === 'adolescente'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            Adolescente
          </button>
          <button
            onClick={() => setActiveTab('jovem')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
              activeTab === 'jovem'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            Jovem
          </button>
          <button
            onClick={() => setActiveTab('adulto')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
              activeTab === 'adulto'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            Adulto
          </button>
        </div>

        {/* Stories List Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <Filter className="w-4 h-4 text-amber-400" />
            Escolha uma História
          </h2>
          <span className="text-xs text-slate-500">
            {filteredStories.length} {filteredStories.length === 1 ? 'história' : 'histórias'}
          </span>
        </div>

        {/* Stories Cards */}
        <div className="flex flex-col gap-4">
          {filteredStories.map((story) => {
            const isCompleted = stats.completedRealLifeStoryIds?.includes(story.id);

            return (
              <button
                key={story.id}
                onClick={() => onSelectStory(story)}
                className="group relative p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all text-left flex flex-col gap-3 shadow-lg hover:shadow-amber-500/5 overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/0 to-amber-500/5 group-hover:via-amber-500/5 transition-all pointer-events-none" />

                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center group-hover:scale-105 transition">
                      {getStoryIcon(story.icon)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          {story.theme}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-400">
                          {getProfileBadgeLabel(story.profiles)}
                        </span>
                      </div>
                      <h3 className="text-base font-extrabold text-slate-100 group-hover:text-amber-300 transition mt-0.5">
                        {story.title}
                      </h3>
                    </div>
                  </div>

                  {isCompleted && (
                    <div className="flex items-center gap-1 text-emerald-400 text-xs font-semibold bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Feita
                    </div>
                  )}
                </div>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {story.description}
                </p>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-amber-400">
                  <span>
                    {isCompleted ? 'Refazer (Explorar novos caminhos)' : 'VIVER ESTA HISTÓRIA'}
                  </span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </div>
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
};
