import React, { useEffect } from 'react';
import { Gift, Coins, Zap, Trophy, Check } from 'lucide-react';
import { soundFx } from '../utils/sound';
import { ParticleEffect } from './ParticleEffect';

interface FirstGameBonusModalProps {
  onClaim: () => void;
}

export const FirstGameBonusModal: React.FC<FirstGameBonusModalProps> = ({ onClaim }) => {
  useEffect(() => {
    soundFx.playLevelUp();
    soundFx.vibrate([100, 100, 100]);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <ParticleEffect active={true} />

      <div className="relative w-full max-w-sm bg-gradient-to-b from-slate-900 via-slate-900 to-amber-950/40 border border-amber-500/50 rounded-3xl p-6 shadow-2xl text-center overflow-hidden">
        {/* Glow */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* Gift Icon */}
        <div className="relative z-10 w-20 h-20 mx-auto my-2 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 p-0.5 shadow-lg shadow-amber-500/30">
          <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
            <Gift className="w-10 h-10 text-amber-400 animate-bounce" />
          </div>
        </div>

        <h2 className="text-2xl font-black text-white mt-2 font-game tracking-wide">
          Primeira Recompensa!
        </h2>
        <p className="text-xs text-slate-300 font-medium mt-1">
          Parabéns por completar sua primeira experiência na Jornada da Fé! Aqui está o seu bônus especial:
        </p>

        {/* Rewards List */}
        <div className="my-5 space-y-2">
          <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between px-4 text-xs font-bold text-amber-300">
            <div className="flex items-center gap-2">
              <Coins className="w-5 h-5 text-amber-400" />
              <span>Bônus de Moedas</span>
            </div>
            <span className="text-sm font-black text-amber-400">+100 Moedas</span>
          </div>

          <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-between px-4 text-xs font-bold text-indigo-300">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-indigo-400" />
              <span>Bônus de Experiência</span>
            </div>
            <span className="text-sm font-black text-indigo-400">+200 XP</span>
          </div>
        </div>

        <button
          onClick={() => {
            soundFx.playCoin();
            soundFx.vibrate(50);
            onClaim();
          }}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-xl shadow-amber-500/30 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 game-btn-3d"
        >
          <Check className="w-5 h-5 stroke-[3]" />
          <span>Resgatar Recompensa</span>
        </button>
      </div>
    </div>
  );
};
