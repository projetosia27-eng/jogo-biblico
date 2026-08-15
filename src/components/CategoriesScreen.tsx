import React from 'react';
import { ArrowLeft, BookOpen, Crown, Globe, Play, Scroll, Sparkles, Users } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { CategoryId, UserStats } from '../types';
import { soundFx } from '../utils/sound';

interface CategoriesScreenProps {
  stats: UserStats;
  onSelectCategory: (catId: CategoryId) => void;
  onBack: () => void;
}

export const CategoriesScreen: React.FC<CategoriesScreenProps> = ({
  stats,
  onSelectCategory,
  onBack,
}) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scroll': return <Scroll className="w-6 h-6 text-amber-400" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-blue-400" />;
      case 'Users': return <Users className="w-6 h-6 text-emerald-400" />;
      case 'Crown': return <Crown className="w-6 h-6 text-yellow-300" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-purple-400" />;
      default: return <Globe className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-60px)] flex flex-col p-4 max-w-md mx-auto animate-fade-in pb-12">
      {/* Header Bar */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => {
            soundFx.playClick();
            onBack();
          }}
          className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white active:scale-95 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-2xl font-black text-white font-game">Categorias</h2>
          <p className="text-xs text-slate-400">Escolha um tema bíblico para jogar</p>
        </div>
      </div>

      {/* Category Cards List */}
      <div className="space-y-3.5 flex-1">
        {CATEGORIES.map((cat) => {
          const completedCount = stats.completedCategories[cat.id] || 0;

          return (
            <div
              key={cat.id}
              onClick={() => {
                soundFx.playClick();
                soundFx.vibrate(30);
                onSelectCategory(cat.id);
              }}
              className="group cursor-pointer p-4 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 active:scale-[0.98] transition-all relative overflow-hidden"
            >
              {/* Subtle accent bar */}
              <div className={`absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-b ${cat.color}`} />

              <div className="flex items-center justify-between pl-2">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 group-hover:scale-105 transition-transform">
                    {getCategoryIcon(cat.iconName)}
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold text-white font-game">{cat.name}</h3>
                    <p className="text-xs text-slate-400 max-w-[200px] line-clamp-1 mt-0.5">
                      {cat.description}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[10px] font-bold text-slate-300 bg-slate-800 px-2 py-0.5 rounded-full border border-slate-700">
                        {cat.questionCount} perguntas
                      </span>
                      {completedCount > 0 && (
                        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                          {completedCount} concluídas
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 flex items-center justify-center font-bold shadow-md group-hover:scale-110 transition-transform flex-shrink-0">
                  <Play className="w-5 h-5 fill-slate-950" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
