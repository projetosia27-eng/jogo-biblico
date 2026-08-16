import React from 'react';
import { ArrowLeft, BookOpen, Compass, Crown, Lock, Sparkles, UserCheck } from 'lucide-react';
import { STORY_JOURNEYS, StoryJourney } from '../data/journeys';
import { soundFx } from '../utils/sound';

interface JourneysListScreenProps {
  onSelectJourney: (journey: StoryJourney) => void;
  onBack: () => void;
}

export const JourneysListScreen: React.FC<JourneysListScreenProps> = ({
  onSelectJourney,
  onBack,
}) => {
  return (
    <div className="w-full min-h-[calc(100vh-60px)] flex flex-col justify-between p-4 max-w-md mx-auto pb-8 animate-fade-in space-y-4">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              soundFx.playClick();
              onBack();
            }}
            className="p-2 rounded-2xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 active:scale-95 transition-all flex items-center gap-1.5 text-xs font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar</span>
          </button>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-extrabold uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>Jornadas Bíblicas</span>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-black text-white font-game tracking-wide">
            Histórias & Decisões
          </h1>
          <p className="text-xs text-slate-300 mt-1">
            Entre na história, enfrente momentos decisivos e aprenda o relato bíblico de cada personagem.
          </p>
        </div>

        {/* List of Journeys */}
        <div className="space-y-3 pt-2">
          {STORY_JOURNEYS.map((j) => (
            <div
              key={j.id}
              onClick={() => {
                if (j.unlocked) {
                  soundFx.playClick();
                  soundFx.vibrate(30);
                  onSelectJourney(j);
                } else {
                  soundFx.playWrong();
                }
              }}
              className={`p-5 rounded-3xl border transition-all relative overflow-hidden ${
                j.unlocked
                  ? 'bg-gradient-to-br from-slate-900 via-indigo-950/60 to-slate-950 border-amber-500/50 shadow-xl cursor-pointer active:scale-[0.98] group'
                  : 'bg-slate-900/60 border-slate-800 opacity-75 cursor-not-allowed'
              }`}
            >
              {j.unlocked && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              )}

              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${
                        j.unlocked
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                          : 'bg-slate-800 text-slate-400 border-slate-700'
                      }`}
                    >
                      {j.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-white font-game tracking-wide mt-1.5">
                    {j.title}
                  </h3>
                  <h4 className="text-xs font-bold text-amber-400">{j.subtitle}</h4>
                </div>

                <div
                  className={`p-3 rounded-2xl border ${
                    j.unlocked
                      ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20'
                      : 'bg-slate-800 text-slate-500 border-slate-700'
                  }`}
                >
                  {j.unlocked ? (
                    <BookOpen className="w-6 h-6 stroke-[2.5]" />
                  ) : (
                    <Lock className="w-6 h-6 stroke-[2]" />
                  )}
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mt-2">{j.description}</p>

              {j.unlocked ? (
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-400">
                    5 Capítulos • Decisões de Atributos
                  </span>
                  <button className="py-2 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md group-hover:brightness-110 transition-all game-btn-3d">
                    ENTRAR NA HISTÓRIA
                  </button>
                </div>
              ) : (
                <div className="mt-3 pt-2 text-[11px] font-bold text-slate-500 flex items-center gap-1">
                  <span>Conteúdo em desenvolvimento</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
