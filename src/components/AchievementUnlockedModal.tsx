import React, { useEffect } from 'react';
import { Award, CheckCircle, Coins, Flame, Sparkles, Trophy, X, Zap } from 'lucide-react';
import { Achievement } from '../types';
import { soundFx } from '../utils/sound';

interface AchievementUnlockedModalProps {
  achievement: Achievement;
  onClose: () => void;
}

export const AchievementUnlockedModal: React.FC<AchievementUnlockedModalProps> = ({
  achievement,
  onClose,
}) => {
  useEffect(() => {
    soundFx.playLevelUp();
    soundFx.vibrate([40, 60, 100]);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in pointer-events-auto">
      <div className="w-full max-w-xs bg-slate-900 border-2 border-amber-500/50 rounded-3xl p-5 shadow-2xl relative text-center overflow-hidden animate-bounce-subtle">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />

        <button
          onClick={() => {
            soundFx.playClick();
            onClose();
          }}
          className="absolute top-3 right-3 p-1.5 text-slate-400 hover:text-white rounded-full bg-slate-800/80"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Icon Header */}
        <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
          <Trophy className="w-9 h-9 text-slate-950 stroke-[2.5]" />
        </div>

        <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-black text-[10px] uppercase tracking-wider mb-2 animate-pulse">
          CONQUISTA DESBLOQUEADA!
        </span>

        <h3 className="text-lg font-black text-white font-game mb-1">{achievement.title}</h3>
        <p className="text-xs text-slate-300 mb-4">{achievement.description}</p>

        {/* Reward Pills */}
        <div className="flex items-center justify-center gap-2 p-2.5 rounded-2xl bg-slate-950/80 border border-amber-500/30 mb-4 font-mono text-xs font-bold">
          <span className="text-amber-400 flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            +{achievement.rewardXP} XP
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-amber-300 flex items-center gap-1">
            <Coins className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            +{achievement.rewardCoins} Moedas
          </span>
        </div>

        <button
          onClick={() => {
            soundFx.playCoin();
            onClose();
          }}
          className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:brightness-110 active:scale-95 transition-all game-btn-3d"
        >
          Excelente!
        </button>
      </div>
    </div>
  );
};
