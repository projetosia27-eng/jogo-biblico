import React, { useState, useEffect } from 'react';
import { Flame, Coins, Heart, PlusCircle, Sparkles, Volume2, VolumeX, Home } from 'lucide-react';
import { UserStats } from '../types';
import { buyLife, RECHARGE_INTERVAL_MS } from '../utils/storage';
import { soundFx } from '../utils/sound';

interface HeaderTopBarProps {
  stats: UserStats;
  onUpdateStats: (newStats: UserStats) => void;
  onOpenSettings: () => void;
  onGoHome?: () => void;
  currentScreen?: string;
}

export const HeaderTopBar: React.FC<HeaderTopBarProps> = ({
  stats,
  onUpdateStats,
  onOpenSettings,
  onGoHome,
  currentScreen,
}) => {
  const [showLifeModal, setShowLifeModal] = useState(false);
  const [timeToNextLife, setTimeToNextLife] = useState<string>('');

  // Life recharge countdown
  useEffect(() => {
    if (stats.lives >= stats.maxLives || !stats.nextLifeTimestamp) {
      setTimeToNextLife('');
      return;
    }

    const interval = setInterval(() => {
      const remaining = stats.nextLifeTimestamp! - Date.now();
      if (remaining <= 0) {
        // Trigger life reload
        const reloaded = { ...stats };
        onUpdateStats(reloaded);
        clearInterval(interval);
      } else {
        const mins = Math.floor(remaining / 60000);
        const secs = Math.floor((remaining % 60000) / 1000);
        setTimeToNextLife(`${mins}:${secs < 10 ? '0' : ''}${secs}`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [stats, onUpdateStats]);

  const handleBuyLife = () => {
    soundFx.playClick();
    const updated = buyLife(stats, 50);
    if (updated) {
      soundFx.playCoin();
      onUpdateStats(updated);
    } else {
      soundFx.playWrong();
    }
  };

  const toggleSound = () => {
    soundFx.enabled = !soundFx.enabled;
    const updated = { ...stats, soundEnabled: soundFx.enabled };
    onUpdateStats(updated);
    soundFx.playClick();
  };

  const xpPercent = Math.min(100, Math.floor((stats.xp / stats.maxXp) * 100));

  return (
    <>
      <header className="sticky top-0 z-30 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-3 py-2">
        <div className="flex items-center justify-between max-w-md mx-auto">
          {/* Level & XP Badge + Home Button */}
          <div className="flex items-center gap-1.5">
            {onGoHome && currentScreen && currentScreen !== 'home' && (
              <button
                onClick={() => {
                  soundFx.playClick();
                  onGoHome();
                }}
                className="p-2 rounded-xl bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/40 text-amber-300 hover:text-white active:scale-95 transition-all flex items-center gap-1 shadow-sm"
                title="Voltar para o Início (Home)"
              >
                <Home className="w-4 h-4 text-amber-400 stroke-[2.5]" />
                <span className="text-[11px] font-extrabold uppercase hidden sm:inline">Início</span>
              </button>
            )}

            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-indigo-600 p-[2px] shadow-md shadow-amber-500/10">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex flex-col items-center justify-center">
                <span className="text-[10px] uppercase font-bold text-amber-400 leading-none">Nível</span>
                <span className="text-sm font-extrabold text-white leading-none mt-0.5">{stats.level}</span>
              </div>
            </div>

            <div className="flex flex-col w-20">
              <div className="flex justify-between items-center text-[10px] text-slate-400 mb-0.5 font-bold">
                <span>XP</span>
                <span>{stats.xp}/{stats.maxXp}</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden p-[1px]">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-indigo-500 rounded-full transition-all duration-500"
                  style={{ width: `${xpPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Stats Badges: Streak, Coins, Lives */}
          <div className="flex items-center gap-1.5">
            {/* Daily Streak */}
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold shadow-sm">
              <Flame className="w-4 h-4 fill-orange-500 text-orange-500 animate-pulse" />
              <span>{stats.dailyStreak}d</span>
            </div>

            {/* Coins */}
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold shadow-sm">
              <Coins className="w-4 h-4 text-amber-400" />
              <span>{stats.coins}</span>
            </div>

            {/* Lives */}
            <button
              onClick={() => {
                soundFx.playClick();
                setShowLifeModal(true);
              }}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold shadow-sm active:scale-95 transition-transform"
            >
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
              <span>{stats.lives}/{stats.maxLives}</span>
            </button>

            {/* Quick Audio Toggle */}
            <button
              onClick={toggleSound}
              className="p-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white active:scale-95 transition-all"
              title="Alternar Som"
            >
              {stats.soundEnabled ? <Volume2 className="w-4 h-4 text-indigo-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
            </button>
          </div>
        </div>
      </header>

      {/* Life Modal */}
      {showLifeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-xs bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-2xl text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center">
              <Heart className="w-9 h-9 fill-rose-500 text-rose-500 animate-bounce" />
            </div>

            <h3 className="text-xl font-bold text-white mb-1">Vidas do Jogo</h3>
            <p className="text-xs text-slate-400 mb-4">
              Cada vida permite jogar uma rodada. As vidas recarregam com o tempo!
            </p>

            <div className="bg-slate-800/60 rounded-xl p-3 mb-4 border border-slate-700/50">
              <div className="flex justify-between items-center text-sm font-semibold text-slate-200 mb-1">
                <span>Vidas atuais:</span>
                <span className="text-rose-400 font-extrabold text-base">{stats.lives} / {stats.maxLives}</span>
              </div>
              {timeToNextLife && (
                <div className="text-xs text-slate-400 flex justify-between items-center pt-2 border-t border-slate-700">
                  <span>Próxima vida em:</span>
                  <span className="font-mono text-amber-400 font-bold">{timeToNextLife}</span>
                </div>
              )}
            </div>

            {stats.lives < stats.maxLives ? (
              <button
                onClick={handleBuyLife}
                disabled={stats.coins < 50}
                className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/20 hover:brightness-110 active:scale-95 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2 game-btn-3d"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Comprar 1 Vida (50 Moedas)</span>
              </button>
            ) : (
              <div className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 py-2 rounded-lg border border-emerald-500/20">
                Sua energia está no máximo!
              </div>
            )}

            <button
              onClick={() => {
                soundFx.playClick();
                setShowLifeModal(false);
              }}
              className="mt-3 w-full py-2 text-xs font-semibold text-slate-400 hover:text-white"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};
