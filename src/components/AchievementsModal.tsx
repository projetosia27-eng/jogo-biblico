import React from 'react';
import { Award, CheckCircle, Coins, Flame, Sparkles, X, Zap, BookOpen, ShieldCheck, Star, Crown, Trophy, Calendar } from 'lucide-react';
import { Achievement, UserStats } from '../types';
import { soundFx } from '../utils/sound';

interface AchievementsModalProps {
  achievements: Achievement[];
  stats: UserStats;
  onClose: () => void;
  onClaimReward: (achievementId: string) => void;
}

export const AchievementsModal: React.FC<AchievementsModalProps> = ({
  achievements,
  stats,
  onClose,
  onClaimReward,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Star': return <Star className="w-5 h-5 text-indigo-400 fill-indigo-400/20" />;
      case 'Crown': return <Crown className="w-5 h-5 text-amber-400 fill-amber-400/20" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-yellow-400 fill-yellow-400/20" />;
      case 'Award': return <Award className="w-5 h-5 text-indigo-400" />;
      case 'Flame': return <Flame className="w-5 h-5 text-orange-400" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-blue-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-yellow-400" />;
      case 'Calendar': return <Calendar className="w-5 h-5 text-purple-400" />;
      default: return <Coins className="w-5 h-5 text-amber-400" />;
    }
  };

  const unlockedCount = achievements.filter(a => a.unlocked).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl relative max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <Award className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white font-game">Conquistas</h2>
              <p className="text-xs text-slate-400">
                {unlockedCount} de {achievements.length} desbloqueadas
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of achievements */}
        <div className="overflow-y-auto space-y-3 py-4 pr-1 flex-1">
          {achievements.map((ach) => {
            const isCompleted = ach.progress >= ach.maxProgress;
            const isUnlocked = ach.unlocked;
            const isClaimed = ach.claimed;

            return (
              <div
                key={ach.id}
                className={`p-3.5 rounded-2xl border transition-all ${
                  isClaimed
                    ? 'bg-slate-800/40 border-slate-800 opacity-75'
                    : isUnlocked
                    ? 'bg-gradient-to-r from-amber-500/10 via-slate-800 to-slate-800 border-amber-500/40 shadow-md shadow-amber-500/5'
                    : 'bg-slate-800/60 border-slate-700/60'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2.5 rounded-xl border flex-shrink-0 ${
                    isUnlocked ? 'bg-amber-500/20 border-amber-500/40' : 'bg-slate-700/40 border-slate-700'
                  }`}>
                    {getIcon(ach.icon)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white truncate">{ach.title}</h3>
                      {isClaimed ? (
                        <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-0.5">
                          <CheckCircle className="w-3.5 h-3.5" /> Resgatado
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold text-slate-400">
                          {Math.min(ach.progress, ach.maxProgress)} / {ach.maxProgress}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-400 mt-0.5 leading-tight">{ach.description}</p>

                    {/* Progress Bar */}
                    {!isClaimed && (
                      <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden mt-2">
                        <div
                          className="h-full bg-amber-400 rounded-full transition-all duration-300"
                          style={{
                            width: `${Math.min(100, (ach.progress / ach.maxProgress) * 100)}%`,
                          }}
                        />
                      </div>
                    )}

                    {/* Claim Button */}
                    {isUnlocked && !isClaimed && (
                      <button
                        onClick={() => {
                          soundFx.playCoin();
                          onClaimReward(ach.id);
                        }}
                        className="mt-2.5 w-full py-1.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all game-btn-3d"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Resgatar (+{ach.rewardCoins} Moedas, +{ach.rewardXP} XP)</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
