import { CheckCircle2, Flame, Lightbulb, Sparkles, X, Zap } from 'lucide-react';
import React, { useState } from 'react';
import { MYSTERIES_DATABASE, MysteryItem } from '../data/mysteries';
import { soundFx } from '../utils/sound';

interface DailyChallengeModalProps {
  completedToday: boolean;
  streakDays: number;
  onCompleteDaily: (xpEarned: number, coinsEarned: number) => void;
  onClose: () => void;
}

export const DailyChallengeModal: React.FC<DailyChallengeModalProps> = ({
  completedToday,
  streakDays,
  onCompleteDaily,
  onClose,
}) => {
  const todayStr = new Date().toISOString().split('T')[0];
  const dayIndex = Math.abs(
    todayStr.split('-').reduce((acc, part) => acc + parseInt(part, 10), 0)
  ) % MYSTERIES_DATABASE.length;

  const todayMystery: MysteryItem = MYSTERIES_DATABASE[dayIndex] || MYSTERIES_DATABASE[0];

  const [unlockedClues, setUnlockedClues] = useState<number>(2);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const handleSelectOption = (opt: string) => {
    setSelectedOption(opt);
    setIsAnswered(true);

    if (opt === todayMystery.correctAnswer) {
      soundFx.playLevelUp();
      soundFx.vibrate([40, 60, 40]);
      setIsCorrect(true);
    } else {
      soundFx.playWrong();
      soundFx.vibrate(80);
      setIsCorrect(false);
    }
  };

  const handleClaimReward = () => {
    soundFx.playClick();
    onCompleteDaily(200, 100);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-md bg-slate-900 border border-amber-500/40 rounded-3xl p-5 space-y-4 shadow-2xl relative">
        <button
          onClick={() => {
            soundFx.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 rounded-2xl bg-slate-800 text-slate-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Title */}
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 font-black shadow-lg shadow-amber-500/20">
            <Flame className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black text-amber-400 uppercase tracking-wider">
                DESAFIO DO DIA
              </span>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-[10px] font-bold">
                🔥 {streakDays} Dias
              </span>
            </div>
            <h2 className="text-base font-black text-white font-game">
              {todayMystery.title}
            </h2>
          </div>
        </div>

        {completedToday ? (
          <div className="p-5 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-2">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <h3 className="text-sm font-black text-white font-game">
              Desafio Concluído Hoje!
            </h3>
            <p className="text-xs text-slate-300">
              Você já garantiu seu bônus de hoje! Volte amanhã para manter sua sequência diária ativa.
            </p>
          </div>
        ) : !isAnswered ? (
          <div className="space-y-3">
            <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-[10px] font-extrabold text-amber-400 uppercase flex items-center gap-1">
                <Lightbulb className="w-3.5 h-3.5" /> Pistas do Dia
              </span>
              {todayMystery.clues.slice(0, unlockedClues).map((clue, idx) => (
                <p key={idx} className="text-xs text-slate-200 font-medium">
                  • {clue}
                </p>
              ))}
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase text-slate-400 block">
                Escolha a Resposta Correta:
              </span>
              <div className="grid grid-cols-1 gap-2">
                {todayMystery.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt)}
                    className="w-full p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-400 text-left text-xs font-bold text-slate-200 hover:text-white active:scale-95 transition-all"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3 text-center">
            {isCorrect ? (
              <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h3 className="text-sm font-black text-white font-game">EXCELENTE!</h3>
                <p className="text-xs text-slate-200">{todayMystery.explanation}</p>
                <p className="text-xs text-amber-300 font-mono font-bold">
                  {todayMystery.bibleReference}
                </p>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-rose-950/80 border border-rose-500/40 space-y-2">
                <h3 className="text-sm font-black text-white font-game">RESPOSTA INCORRETA</h3>
                <p className="text-xs text-slate-300">
                  A resposta correta era: <strong className="text-white">{todayMystery.correctAnswer}</strong>.
                </p>
              </div>
            )}

            <button
              onClick={handleClaimReward}
              className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all"
            >
              CONCLUIR DESAFIO DO DIA (+200 XP)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
