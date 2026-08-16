import { ArrowLeft, BookOpen, CheckCircle2, ChevronRight, HelpCircle, Lightbulb, Search, Sparkles, Trophy, XCircle, Zap } from 'lucide-react';
import React, { useState } from 'react';
import { MysteryItem } from '../data/mysteries';
import { GameSessionResult } from '../types';
import { soundFx } from '../utils/sound';

interface MysteryPlayScreenProps {
  mystery: MysteryItem;
  onFinishMystery: (result: GameSessionResult) => void;
  onBack: () => void;
}

export const MysteryPlayScreen: React.FC<MysteryPlayScreenProps> = ({
  mystery,
  onFinishMystery,
  onBack,
}) => {
  const [unlockedCluesCount, setUnlockedCluesCount] = useState<number>(1);
  const [showAnswerModal, setShowAnswerModal] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isWrongAnswer, setIsWrongAnswer] = useState<boolean>(false);
  const [isSolved, setIsSolved] = useState<boolean>(false);

  // Calculate potential XP based on clues used
  const calculateXpReward = (cluesCount: number) => {
    switch (cluesCount) {
      case 1:
        return 500;
      case 2:
        return 400;
      case 3:
        return 300;
      case 4:
        return 200;
      default:
        return 100;
    }
  };

  const handleAskNextClue = () => {
    if (unlockedCluesCount < mystery.clues.length) {
      soundFx.playClick();
      soundFx.vibrate(25);
      setUnlockedCluesCount((prev) => prev + 1);
    }
  };

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    if (option === mystery.correctAnswer) {
      soundFx.playLevelUp();
      soundFx.vibrate([40, 60, 40]);
      setIsSolved(true);
      setIsWrongAnswer(false);
      setShowAnswerModal(false);
    } else {
      soundFx.playWrong();
      soundFx.vibrate(80);
      setIsWrongAnswer(true);
    }
  };

  const handleClaimReward = () => {
    soundFx.playClick();
    const xp = calculateXpReward(unlockedCluesCount);
    onFinishMystery({
      mode: 'mystery',
      title: `Mistério: ${mystery.title}`,
      subtitle: mystery.correctAnswer,
      xpEarned: xp,
      coinsEarned: Math.floor(xp / 2),
      cluesUsed: unlockedCluesCount,
      bibleReference: mystery.bibleReference,
    });
  };

  const currentXpReward = calculateXpReward(unlockedCluesCount);

  if (isSolved) {
    return (
      <div className="w-full min-h-[calc(100vh-60px)] flex flex-col justify-between p-4 max-w-md mx-auto pb-8 animate-fade-in space-y-4">
        {/* Victory Header */}
        <div className="text-center space-y-2 pt-2 my-auto">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 p-1 shadow-2xl shadow-indigo-500/30 flex items-center justify-center animate-bounce-subtle">
            <div className="w-full h-full rounded-[22px] bg-slate-950 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            </div>
          </div>

          <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-extrabold text-[10px] uppercase tracking-wider">
            MISTÉRIO DESVENDADO!
          </span>

          <h1 className="text-2xl font-black text-white font-game">{mystery.correctAnswer}</h1>
          <p className="text-xs text-amber-300 font-mono font-bold">{mystery.bibleReference}</p>

          {/* Explanation Card */}
          <div className="p-4 rounded-3xl bg-slate-900 border border-indigo-500/30 space-y-2 text-left mt-4">
            <span className="text-[10px] font-black uppercase text-indigo-300 tracking-wider flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" />
              Explicação Bíblica
            </span>
            <p className="text-xs text-slate-200 leading-relaxed font-medium">
              {mystery.explanation}
            </p>
          </div>

          {/* Performance Summary */}
          <div className="grid grid-cols-2 gap-2.5 mt-2">
            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <Lightbulb className="w-5 h-5 text-amber-400 mx-auto mb-1" />
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Pistas Usadas</span>
              <span className="text-lg font-black text-amber-300 font-mono">{unlockedCluesCount} de 5</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <Zap className="w-5 h-5 text-indigo-400 mx-auto mb-1" />
              <span className="text-[10px] uppercase font-bold text-slate-400 block">XP Conquistado</span>
              <span className="text-lg font-black text-indigo-300">+{currentXpReward} XP</span>
            </div>
          </div>
        </div>

        {/* Claim Button */}
        <button
          onClick={handleClaimReward}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-600 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-indigo-500/25 active:scale-95 transition-all flex items-center justify-center gap-2 game-btn-3d"
        >
          <span>RECEBER RECOMPENSA</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[calc(100vh-60px)] flex flex-col justify-between p-4 max-w-md mx-auto pb-8 animate-fade-in space-y-4">
      {/* Top Bar Navigation */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              soundFx.playClick();
              onBack();
            }}
            className="p-2 rounded-2xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 active:scale-95 transition-all flex items-center gap-1.5 text-xs font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Sair</span>
          </button>

          <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-extrabold uppercase">
            {mystery.typeBadge}
          </span>
        </div>

        {/* Header Title & Reward Gauge */}
        <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900 border border-slate-800">
          <div>
            <h2 className="text-sm font-black text-white font-game">{mystery.title}</h2>
            <p className="text-[11px] text-slate-400">{mystery.questionPrompt}</p>
          </div>

          <div className="text-right">
            <span className="text-[9px] uppercase font-bold text-slate-400 block">Recompensa Atual</span>
            <span className="text-xs font-black text-amber-400 font-mono">+{currentXpReward} XP</span>
          </div>
        </div>
      </div>

      {/* Unlocked Clues Stack */}
      <div className="space-y-2.5 my-auto">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-black text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4 text-amber-400" />
            Pistas Reveladas ({unlockedCluesCount}/{mystery.clues.length})
          </span>
        </div>

        <div className="space-y-2">
          {mystery.clues.slice(0, unlockedCluesCount).map((clue, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-slate-900/90 border border-indigo-500/30 flex items-start gap-3 animate-fade-in shadow-md"
            >
              <span className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <p className="text-xs text-slate-200 font-medium leading-relaxed">
                {clue}
              </p>
            </div>
          ))}
        </div>

        {/* Wrong Answer Alert */}
        {isWrongAnswer && (
          <div className="p-3 rounded-2xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-bold text-center flex items-center justify-center gap-2 animate-shake">
            <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>Resposta incorreta! Peça outra pista ou tente novamente.</span>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="space-y-2.5">
        {unlockedCluesCount < mystery.clues.length && (
          <button
            onClick={handleAskNextClue}
            className="w-full py-3.5 px-5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-indigo-500/40 text-indigo-300 font-black text-xs uppercase tracking-wider active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Lightbulb className="w-4 h-4 text-amber-400" />
            <span>PEDIR OUTRA PISTA (PRÓXIMA: -100 XP)</span>
          </button>
        )}

        <button
          onClick={() => {
            soundFx.playClick();
            setShowAnswerModal(true);
          }}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-600 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-indigo-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 game-btn-3d"
        >
          <Search className="w-5 h-5" />
          <span>RESPONDER MISTÉRIO</span>
        </button>
      </div>

      {/* Answer Modal Selection Drawer */}
      {showAnswerModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-end sm:items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-md bg-slate-900 border border-indigo-500/40 rounded-3xl p-5 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-black text-white font-game">
                Qual é a sua resposta?
              </h3>
              <button
                onClick={() => setShowAnswerModal(false)}
                className="p-1 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {mystery.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt)}
                  className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-400 text-left text-xs font-bold text-slate-200 hover:text-white active:scale-95 transition-all flex items-center justify-between"
                >
                  <span>{opt}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
