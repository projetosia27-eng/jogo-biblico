import React, { useEffect } from 'react';
import { BookOpen, Crown, Sparkles, Play } from 'lucide-react';
import { soundFx } from '../utils/sound';

interface SplashScreenProps {
  onStart: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onStart }) => {
  useEffect(() => {
    // Play subtle entrance sound
    const timer = setTimeout(() => {
      soundFx.playClick();
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    soundFx.playClick();
    soundFx.vibrate(30);
    onStart();
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-between p-6 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950 overflow-hidden select-none">
      {/* Background Decorative Auras */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Tagline */}
      <div className="pt-8 text-center z-10 animate-fade-in">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold tracking-wide uppercase shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Jogo Mobile de Quiz Bíblico</span>
        </div>
      </div>

      {/* Main Logo & Title Hero */}
      <div className="flex flex-col items-center justify-center my-auto text-center z-10">
        <div className="relative mb-6 group cursor-pointer" onClick={handleClick}>
          {/* Outer Ring */}
          <div className="w-36 h-36 rounded-3xl bg-gradient-to-tr from-amber-500 via-indigo-500 to-purple-600 p-1 shadow-2xl shadow-indigo-500/30 animate-glow">
            <div className="w-full h-full bg-slate-900/90 backdrop-blur-md rounded-[22px] flex flex-col items-center justify-center relative overflow-hidden">
              <Crown className="w-8 h-8 text-amber-400 absolute top-3 animate-bounce" />
              <BookOpen className="w-16 h-16 text-amber-300 mt-4 drop-shadow-[0_4px_12px_rgba(245,158,11,0.5)]" />
            </div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-2 font-game drop-shadow-md">
          DESAFIO <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 bg-clip-text text-transparent">BÍBLICO</span>
        </h1>

        <p className="text-sm text-slate-300 max-w-xs font-medium leading-relaxed px-2">
          Teste seus conhecimentos, aprenda a Palavra e supere seus limites na Jornada Bíblica!
        </p>
      </div>

      {/* Bottom Start Action Button */}
      <div className="w-full max-w-xs mb-8 z-10">
        <button
          onClick={handleClick}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 font-black text-lg tracking-wide uppercase shadow-xl shadow-amber-500/25 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 border-b-4 border-amber-700 game-btn-3d"
        >
          <Play className="w-6 h-6 fill-slate-950" />
          <span>Jogar Agora</span>
        </button>

        <p className="text-[11px] text-center text-slate-500 mt-4 font-medium">
          Versão 1.0 • PWA Mobile Ready
        </p>
      </div>
    </div>
  );
};
