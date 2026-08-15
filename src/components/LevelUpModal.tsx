import React, { useEffect } from 'react';
import { Award, Coins, Sparkles, Zap, ChevronRight } from 'lucide-react';
import { soundFx } from '../utils/sound';
import { ParticleEffect } from './ParticleEffect';

interface LevelUpModalProps {
  level: number;
  onClose: () => void;
}

export const LevelUpModal: React.FC<LevelUpModalProps> = ({ level, onClose }) => {
  useEffect(() => {
    soundFx.playLevelUp();
    soundFx.vibrate([100, 50, 100]);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <ParticleEffect active={true} />

      <div className="relative w-full max-w-sm bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 border border-amber-500/40 rounded-3xl p-6 shadow-2xl text-center overflow-hidden">
        {/* Glow effect */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Level Emblem */}
        <div className="relative z-10 my-2">
          <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-orange-500 rounded-3xl rotate-12 animate-pulse opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-amber-500 rounded-3xl -rotate-6 shadow-lg shadow-amber-500/30" />
            <div className="relative z-10 w-20 h-20 bg-slate-950 rounded-2xl flex flex-col items-center justify-center border border-amber-400/50">
              <Sparkles className="w-5 h-5 text-amber-400 animate-spin" />
              <span className="text-2xl font-black text-amber-300 font-game">{level}</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-black text-white mt-3 font-game tracking-wide">
          Nível Alcançado!
        </h2>
        <p className="text-xs text-amber-300 font-semibold mt-1">
          Parabéns! Você evoluiu para o <span className="font-extrabold text-amber-400">Nível {level}</span>
        </p>

        {/* Reward Box */}
        <div className="my-5 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-around text-xs font-bold">
          <div className="flex items-center gap-1.5 text-amber-300">
            <Coins className="w-4 h-4 text-amber-400" />
            <span>+50 Bônus Moedas</span>
          </div>
          <div className="flex items-center gap-1.5 text-indigo-300">
            <Zap className="w-4 h-4 text-indigo-400" />
            <span>Capacidade Aumentada</span>
          </div>
        </div>

        <button
          onClick={() => {
            soundFx.playClick();
            onClose();
          }}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-xl shadow-amber-500/30 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 game-btn-3d"
        >
          <span>Continuar Jogando</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
