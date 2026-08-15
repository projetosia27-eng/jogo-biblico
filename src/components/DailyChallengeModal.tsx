import React, { useState } from 'react';
import { Calendar, CheckCircle, Flame, Gift, Lock, Play, Sparkles, X, Zap } from 'lucide-react';
import { UserStats } from '../types';
import { STREAK_MILESTONES } from '../data/streakMilestones';
import { soundFx } from '../utils/sound';

interface DailyChallengeModalProps {
  stats: UserStats;
  onClose: () => void;
  onStartDaily: () => void;
  onClaimStreakReward: (days: number, xp: number, coins: number) => void;
}

export const DailyChallengeModal: React.FC<DailyChallengeModalProps> = ({
  stats,
  onClose,
  onStartDaily,
  onClaimStreakReward,
}) => {
  const [activeTab, setActiveTab] = useState<'challenge' | 'streak'>('challenge');

  const todayStr = new Date().toISOString().split('T')[0];
  const isCompletedToday = stats.dailyChallengeCompletedDate === todayStr;

  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const currentDayIndex = new Date().getDay();

  const handleStart = () => {
    soundFx.playClick();
    onStartDaily();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

        <button
          onClick={() => {
            soundFx.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Navigation Tabs */}
        <div className="flex bg-slate-950 p-1 rounded-2xl border border-slate-800 mb-4">
          <button
            onClick={() => {
              soundFx.playClick();
              setActiveTab('challenge');
            }}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'challenge'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-md font-extrabold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            Desafio Diário
          </button>
          <button
            onClick={() => {
              soundFx.playClick();
              setActiveTab('streak');
            }}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'streak'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-md font-extrabold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            Sequência ({stats.dailyStreak}d)
          </button>
        </div>

        {/* Tab 1: Desafio Diário */}
        {activeTab === 'challenge' && (
          <div className="space-y-4 overflow-y-auto pr-1">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-2 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
                <Flame className="w-8 h-8 text-slate-950 fill-slate-950 animate-bounce" />
              </div>
              <h2 className="text-xl font-black text-white font-game">Desafio de Hoje</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                10 perguntas bíblicas exclusivas da data atual.
              </p>
            </div>

            {/* Status Card */}
            {isCompletedToday ? (
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                <div className="inline-flex items-center gap-1.5 text-emerald-400 font-extrabold text-xs mb-1">
                  <CheckCircle className="w-4 h-4" />
                  DESAFIO DE HOJE CONCLUÍDO!
                </div>
                <p className="text-[11px] text-slate-300">
                  Você já resgatou o bônus diário hoje. Pode jogar novamente para praticar!
                </p>
              </div>
            ) : (
              <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 rounded-2xl p-3.5 border border-amber-500/30 flex items-center justify-around text-center">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Bônus XP</span>
                  <span className="text-base font-black text-amber-300 flex items-center justify-center gap-1 font-mono">
                    <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
                    +200 XP
                  </span>
                </div>
                <div className="h-8 w-[1px] bg-slate-700" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Bônus Moedas</span>
                  <span className="text-base font-black text-amber-300 flex items-center justify-center gap-1 font-mono">
                    <Gift className="w-4 h-4 text-amber-400" />
                    +100
                  </span>
                </div>
              </div>
            )}

            {/* Weekly Days Bar */}
            <div className="bg-slate-800/60 rounded-2xl p-3 border border-slate-700/60">
              <div className="flex items-center justify-between text-xs font-bold text-slate-300 mb-2.5 px-1">
                <span>Dias da Semana</span>
                <span className="text-orange-400 font-extrabold flex items-center gap-1 font-mono">
                  <Flame className="w-3.5 h-3.5 fill-orange-400" />
                  🔥 {stats.dailyStreak} dias
                </span>
              </div>

              <div className="grid grid-cols-7 gap-1">
                {daysOfWeek.map((day, idx) => {
                  const isToday = idx === currentDayIndex;
                  const isCompleted = idx <= currentDayIndex;

                  return (
                    <div
                      key={day}
                      className={`flex flex-col items-center py-1.5 rounded-xl border text-center transition-all ${
                        isToday
                          ? 'bg-orange-500/20 border-orange-500 text-orange-300 font-bold shadow-md'
                          : isCompleted
                          ? 'bg-slate-700/50 border-slate-600 text-slate-300'
                          : 'bg-slate-800/40 border-slate-800 text-slate-500'
                      }`}
                    >
                      <span className="text-[9px] uppercase font-bold">{day}</span>
                      <div className="mt-1">
                        {isCompleted ? (
                          <Flame className={`w-3 h-3 ${isToday ? 'text-orange-400 fill-orange-400' : 'text-slate-400 fill-slate-400'}`} />
                        ) : (
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-600 my-1" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Start Button */}
            <button
              onClick={handleStart}
              disabled={stats.lives <= 0}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-slate-950 font-black text-sm uppercase tracking-wide shadow-xl shadow-orange-500/20 hover:brightness-110 active:scale-95 disabled:opacity-50 transition-all flex items-center justify-center gap-2 game-btn-3d"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>{isCompletedToday ? 'Jogar Novamente' : 'JOGAR DESAFIO (10 Pergs)'}</span>
            </button>
          </div>
        )}

        {/* Tab 2: Sequência / Streak Rewards */}
        {activeTab === 'streak' && (
          <div className="space-y-3 overflow-y-auto pr-1">
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Sua Sequência Atual</span>
              <div className="text-2xl font-black text-orange-400 flex items-center justify-center gap-1.5 my-1">
                <Flame className="w-7 h-7 fill-orange-400" />
                {stats.dailyStreak} Días Consecutivos
              </div>
              <p className="text-[11px] text-slate-400">
                Jogue todos os dias para alcançar novos marcos e desbloquear recompensas exclusivas!
              </p>
            </div>

            {/* Milestones List */}
            <div className="space-y-2">
              {STREAK_MILESTONES.map((milestone) => {
                const isReached = stats.dailyStreak >= milestone.days || (stats.maxStreak || 1) >= milestone.days;
                const isClaimed = (stats.claimedStreakMilestones || []).includes(milestone.days);

                return (
                  <div
                    key={milestone.days}
                    className={`p-3 rounded-2xl border flex items-center justify-between transition-all ${
                      isClaimed
                        ? 'bg-slate-800/40 border-slate-800 opacity-60'
                        : isReached
                        ? 'bg-amber-500/10 border-amber-500/40'
                        : 'bg-slate-800/60 border-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-xl border ${
                        isReached ? 'bg-orange-500/20 border-orange-500/40 text-orange-400' : 'bg-slate-700/40 border-slate-700 text-slate-500'
                      }`}>
                        <Flame className="w-5 h-5 fill-current" />
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-black text-white">{milestone.title}</span>
                          <span className="text-[10px] font-bold text-amber-400 font-mono">
                            {milestone.days} dias
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-400 flex items-center gap-1">
                          +{milestone.rewardCoins} Moedas, +{milestone.rewardXP} XP
                        </span>
                      </div>
                    </div>

                    {isClaimed ? (
                      <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-0.5">
                        <CheckCircle className="w-3.5 h-3.5" /> Resgatado
                      </span>
                    ) : isReached ? (
                      <button
                        onClick={() => {
                          soundFx.playCoin();
                          onClaimStreakReward(milestone.days, milestone.rewardXP, milestone.rewardCoins);
                        }}
                        className="py-1.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-[11px] shadow-md active:scale-95 transition-all game-btn-3d flex items-center gap-1"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        Resgatar
                      </button>
                    ) : (
                      <div className="p-1.5 rounded-lg bg-slate-800 text-slate-500">
                        <Lock className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
