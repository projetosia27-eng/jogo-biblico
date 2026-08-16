import { Award, BookOpen, CheckCircle2, ChevronRight, Compass, Heart, Home, RotateCcw, Search, Shield, Sparkles, Trophy, Zap } from 'lucide-react';
import React, { useEffect } from 'react';
import { GameSessionResult, UserStats } from '../types';
import { soundFx } from '../utils/sound';
import { ParticleEffect } from './ParticleEffect';

interface ResultScreenProps {
  result: GameSessionResult;
  stats: UserStats;
  leveledUp: boolean;
  newLevel: number;
  onPlayAgain: () => void;
  onGoHome: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  result,
  stats,
  leveledUp,
  newLevel,
  onPlayAgain,
  onGoHome,
}) => {
  useEffect(() => {
    soundFx.playLevelUp();
  }, []);

  return (
    <div className="w-full min-h-[calc(100vh-60px)] flex flex-col justify-between p-4 max-w-md mx-auto animate-fade-in pb-8">
      <ParticleEffect active={true} />

      {/* Main Result Header */}
      <div className="text-center my-auto space-y-3">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-amber-400 via-orange-500 to-indigo-600 p-1 shadow-2xl shadow-amber-500/30 flex items-center justify-center animate-bounce-subtle">
          <div className="w-full h-full rounded-[22px] bg-slate-950 flex items-center justify-center">
            {result.mode === 'journey' ? (
              <Compass className="w-10 h-10 text-amber-400" />
            ) : (
              <Search className="w-10 h-10 text-indigo-400" />
            )}
          </div>
        </div>

        <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-black text-[10px] uppercase tracking-wider">
          {result.mode === 'journey' ? 'JORNADA CONCLUÍDA' : 'MISTÉRIO DESVENDADO'}
        </span>

        <h1 className="text-2xl font-black text-white font-game">{result.title}</h1>
        {result.subtitle && (
          <p className="text-xs text-amber-300 font-bold">{result.subtitle}</p>
        )}

        {/* Level Up Banner */}
        {leveledUp && (
          <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border border-amber-500/40 text-center animate-pulse">
            <span className="text-xs font-black uppercase text-amber-300 flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              NOVO NÍVEL ALCANÇADO: NÍVEL {newLevel}!
            </span>
          </div>
        )}

        {/* Profile Card if Journey */}
        {result.finalProfileName && (
          <div className="p-4 rounded-3xl bg-slate-900 border border-indigo-500/30 text-center space-y-1">
            <span className="text-[10px] font-black text-indigo-400 uppercase tracking-wider block">
              Seu Perfil de Decisão
            </span>
            <h3 className="text-sm font-black text-white font-game">{result.finalProfileName}</h3>
            {result.finalProfileDescription && (
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                {result.finalProfileDescription}
              </p>
            )}
          </div>
        )}

        {/* Rewards Summary Grid */}
        <div className="grid grid-cols-2 gap-2.5 mt-3">
          <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <Zap className="w-5 h-5 text-indigo-400 mx-auto mb-1" />
            <span className="text-[10px] uppercase font-bold text-slate-400 block">XP Recebido</span>
            <span className="text-lg font-black text-indigo-300">+{result.xpEarned} XP</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <Award className="w-5 h-5 text-amber-400 mx-auto mb-1" />
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Moedas Ganhas</span>
            <span className="text-lg font-black text-amber-300">+{result.coinsEarned}</span>
          </div>
        </div>

        {/* Bible Reference Banner */}
        {result.bibleReference && (
          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs font-bold text-slate-300 px-4">
            <span className="flex items-center gap-1.5 text-amber-400">
              <BookOpen className="w-4 h-4" /> Referência Bíblica
            </span>
            <span className="text-white font-mono font-bold">{result.bibleReference}</span>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="space-y-2.5 mt-4">
        <button
          onClick={() => {
            soundFx.playClick();
            onPlayAgain();
          }}
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-xl shadow-amber-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 game-btn-3d"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Jogar Novamente</span>
        </button>

        <button
          onClick={() => {
            soundFx.playClick();
            onGoHome();
          }}
          className="w-full py-3 px-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white font-bold text-xs flex items-center justify-center gap-2 active:scale-95 transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Voltar ao Início</span>
        </button>
      </div>
    </div>
  );
};
