import React, { useState } from 'react';
import { Smartphone, Monitor } from 'lucide-react';

interface MobileFrameProps {
  children: React.ReactNode;
}

export const MobileFrame: React.FC<MobileFrameProps> = ({ children }) => {
  const [isSimulatedFrame, setIsSimulatedFrame] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center relative overflow-x-hidden selection:bg-amber-500 selection:text-slate-950">
      {/* Viewport Toggle Switcher for Desktop previewers */}
      <div className="fixed bottom-3 right-3 z-50 hidden md:flex items-center gap-1 p-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-800 shadow-xl text-xs font-bold text-slate-400">
        <button
          onClick={() => setIsSimulatedFrame(true)}
          className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all ${
            isSimulatedFrame ? 'bg-indigo-600 text-white shadow-sm' : 'hover:text-white'
          }`}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Modo Celular</span>
        </button>
        <button
          onClick={() => setIsSimulatedFrame(false)}
          className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all ${
            !isSimulatedFrame ? 'bg-indigo-600 text-white shadow-sm' : 'hover:text-white'
          }`}
        >
          <Monitor className="w-3.5 h-3.5" />
          <span>Tela Cheia</span>
        </button>
      </div>

      {/* Mobile Shell / Container */}
      <div
        className={`w-full min-h-screen flex flex-col bg-slate-950 transition-all ${
          isSimulatedFrame
            ? 'md:max-w-[430px] md:min-h-[880px] md:my-6 md:rounded-[48px] md:border-[10px] md:border-slate-800/90 md:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] md:ring-1 md:ring-slate-700/50 md:overflow-hidden relative'
            : 'max-w-md'
        }`}
      >
        {/* Mobile Camera Notch Bar Simulation for Desktop Phone Frame */}
        {isSimulatedFrame && (
          <div className="hidden md:flex justify-center pt-2 pb-1 bg-slate-950 sticky top-0 z-40">
            <div className="w-28 h-4 rounded-full bg-slate-900 border border-slate-800/80 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-slate-950 border border-slate-800" />
            </div>
          </div>
        )}

        {/* Content Area */}
        <div className="flex-1 flex flex-col">{children}</div>
      </div>
    </div>
  );
};
