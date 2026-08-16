import React from 'react';
import { RealLifeStory, PlayerAttributes } from '../types';
import {
  Sparkles,
  Shield,
  RotateCcw,
  CheckCircle2,
  Coins,
  Zap,
  BookOpen,
  Compass,
} from 'lucide-react';

interface RealLifeResultScreenProps {
  story: RealLifeStory;
  accumulatedEffects: Partial<PlayerAttributes>;
  xpEarned: number;
  coinsEarned: number;
  onReplayStory: () => void;
  onComplete: () => void;
}

export const RealLifeResultScreen: React.FC<RealLifeResultScreenProps> = ({
  story,
  accumulatedEffects,
  xpEarned,
  coinsEarned,
  onReplayStory,
  onComplete,
}) => {
  const attributesList: { key: keyof PlayerAttributes; label: string; val: number; color: string }[] = [
    { key: 'integridade', label: 'Integridade', val: accumulatedEffects.integridade || 0, color: 'bg-amber-400' },
    { key: 'coragem', label: 'Coragem', val: accumulatedEffects.coragem || 0, color: 'bg-rose-400' },
    { key: 'sabedoria', label: 'Sabedoria', val: accumulatedEffects.sabedoria || 0, color: 'bg-sky-400' },
    { key: 'misericordia', label: 'Misericórdia', val: accumulatedEffects.misericordia || 0, color: 'bg-emerald-400' },
    { key: 'fe', label: 'Fé', val: accumulatedEffects.fe || 0, color: 'bg-purple-400' },
  ];

  // Find top 2 attributes
  const sorted = [...attributesList].sort((a, b) => b.val - a.val);
  const top1 = sorted[0];
  const top2 = sorted[1];

  const getConclusionText = () => {
    const combined = `${top1.label.toUpperCase()} + ${top2.label.toUpperCase()}`;

    if (top1.key === 'integridade' || top2.key === 'integridade') {
      return `Em "${combined}", suas escolhas nesta história demonstraram uma postura firme de clareza moral e respeito aos valores em momentos cruciais.`;
    }
    if (top1.key === 'coragem' || top2.key === 'coragem') {
      return `Em "${combined}", suas escolhas nesta história indicaram disposição para se posicionar e enfrentar situações de pressão com determinação.`;
    }
    if (top1.key === 'sabedoria' || top2.key === 'sabedoria') {
      return `Em "${combined}", suas escolhas nesta história destacaram prudência ao ponderar riscos e buscar soluções ponderadas.`;
    }
    if (top1.key === 'misericordia' || top2.key === 'misericordia') {
      return `Em "${combined}", suas escolhas nesta história priorizaram o acolhimento, a empatia e o cuidado sincero com as pessoas ao seu redor.`;
    }
    return `Em "${combined}", suas escolhas nesta história demonstraram coerência espiritual e busca por aplicar bons princípios nas decisões cotidianas.`;
  };

  const maxVal = Math.max(...attributesList.map((a) => a.val), 1);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between p-4 pb-12">
      <div className="max-w-md mx-auto w-full flex flex-col gap-6 pt-6">
        {/* Header Badge */}
        <div className="text-center flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/20">
            <Sparkles className="w-8 h-8 stroke-[2.5]" />
          </div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest mt-1">
            HISTÓRIA CONCLUÍDA
          </span>
          <h1 className="text-xl font-black text-slate-100">{story.title}</h1>
        </div>

        {/* Results Card */}
        <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col gap-5 shadow-xl">
          <h2 className="text-xs font-extrabold text-amber-300 uppercase tracking-wider text-center flex items-center justify-center gap-1.5">
            <Shield className="w-4 h-4 text-amber-400" />
            SUAS ESCOLHAS NESTA HISTÓRIA
          </h2>

          {/* Attribute Bars */}
          <div className="flex flex-col gap-3">
            {attributesList.map((attr) => {
              const pct = Math.min(100, Math.round((attr.val / maxVal) * 100));

              return (
                <div key={attr.key} className="flex flex-col gap-1">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-slate-300">{attr.label}</span>
                    <span className="text-slate-400">+{attr.val} pts</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden p-0.5">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${attr.color}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Top Attributes Summary */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex flex-col gap-2">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              ATRIBUTOS PREDOMINANTES
            </div>
            <div className="text-sm font-black text-amber-300 uppercase">
              {top1.label} + {top2.label}
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              {getConclusionText()}
            </p>
          </div>
        </div>

        {/* Reflection Card */}
        <div className="p-5 rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950/50 border border-indigo-500/30 flex flex-col gap-3 shadow-xl">
          <div className="text-xs font-extrabold text-indigo-300 uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            PARA REFLETIR
          </div>
          <p className="text-sm font-bold text-slate-100 leading-snug">
            "{story.reflectionQuestion}"
          </p>
          <span className="text-[11px] text-slate-400 italic">
            Guarde essa reflexão em seu dia a dia ao tomar decisões.
          </span>
        </div>

        {/* Reward Summary */}
        <div className="flex items-center justify-center gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
          <div className="flex items-center gap-2 text-amber-400 font-extrabold text-sm">
            <Zap className="w-4 h-4" />
            +{xpEarned} XP
          </div>
          <div className="w-px h-4 bg-slate-800" />
          <div className="flex items-center gap-2 text-amber-300 font-extrabold text-sm">
            <Coins className="w-4 h-4 text-amber-400" />
            +{coinsEarned} Moedas
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="max-w-md mx-auto w-full flex flex-col gap-3 pt-6">
        <button
          onClick={onReplayStory}
          className="w-full py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-4 h-4 text-amber-400" />
          Explorar outro caminho
        </button>

        <button
          onClick={onComplete}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:brightness-110 active:scale-[0.99] transition flex items-center justify-center gap-2"
        >
          <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
          Concluir História
        </button>
      </div>
    </div>
  );
};
