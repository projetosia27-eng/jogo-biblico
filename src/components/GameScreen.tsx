import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Check, Clock, Heart, Lightbulb, Sparkles, X, Flame, BookOpen, Coins, Zap, Crown, ShieldCheck, RefreshCw, HelpCircle, Trophy, AlertTriangle } from 'lucide-react';
import { GameSession, Question, UserStats, JOURNEY_SCORE_LADDER } from '../types';
import { soundFx } from '../utils/sound';

interface GameScreenProps {
  session: GameSession;
  stats: UserStats;
  onAnswer: (isCorrect: boolean, pointsEarned: number, isFastAnswer?: boolean) => void;
  onNextQuestion: () => void;
  onQuitGame: (abandonJourney?: boolean) => void;
  onUpdateStats: (newStats: UserStats) => void;
  onUseJourneyHelp?: (helpType: 'fiftyFifty' | 'trocar' | 'dica', newQuestion?: Question) => void;
  allQuestions?: Question[];
}

export const GameScreen: React.FC<GameScreenProps> = ({
  session,
  stats,
  onAnswer,
  onNextQuestion,
  onQuitGame,
  onUpdateStats,
  onUseJourneyHelp,
  allQuestions = [],
}) => {
  const isJourney = Boolean(session.isJourney);
  const currentQuestion: Question | undefined = session.questions[session.currentIndex];

  const QUESTION_TIME = 15;
  const [timeLeft, setTimeLeft] = useState<number>(QUESTION_TIME);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [disabledOptions, setDisabledOptions] = useState<number[]>([]);
  const [pointsBadge, setPointsBadge] = useState<{ points: number; coins: number; text?: string } | null>(null);
  const [showHintBox, setShowHintBox] = useState<boolean>(false);

  // Modals & Overlays
  const [showQuitModal, setShowQuitModal] = useState<boolean>(false);
  const [showFinalQuestionOverlay, setShowFinalQuestionOverlay] = useState<boolean>(false);

  const ladderScrollRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll ladder to active step
  useEffect(() => {
    if (isJourney && ladderScrollRef.current) {
      const activeEl = ladderScrollRef.current.children[session.currentIndex] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [session.currentIndex, isJourney]);

  // Show transition overlay for Question 15
  useEffect(() => {
    if (isJourney && session.currentIndex === 14 && !isAnswered) {
      setShowFinalQuestionOverlay(true);
    } else {
      setShowFinalQuestionOverlay(false);
    }
  }, [session.currentIndex, isJourney]);

  // Reset question state on new question index
  useEffect(() => {
    setTimeLeft(QUESTION_TIME);
    setSelectedOption(null);
    setIsAnswered(false);
    setDisabledOptions([]);
    setPointsBadge(null);
    setShowHintBox(Boolean(session.activeHint));
  }, [session.currentIndex, session.questions]);

  // Countdown timer effect
  useEffect(() => {
    if (isAnswered) return;

    if (timeLeft <= 0) {
      handleTimeOut();
      return;
    }

    if (timeLeft <= 5) {
      soundFx.playTick();
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isAnswered]);

  const handleTimeOut = () => {
    if (isAnswered) return;
    setIsAnswered(true);
    soundFx.playWrong();
    soundFx.vibrate(120);

    setPointsBadge({ points: 0, coins: 0, text: 'Tempo Esgotado!' });
    onAnswer(false, 0, false);
  };

  const handleOptionClick = (index: number) => {
    if (isAnswered || disabledOptions.includes(index) || !currentQuestion) return;

    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = index === currentQuestion.correctIndex;

    if (isCorrect) {
      soundFx.playCorrect();
      soundFx.vibrate(40);

      let totalPoints = 0;
      let coinsEarned = 10;

      if (isJourney) {
        totalPoints = JOURNEY_SCORE_LADDER[session.currentIndex] || 100;
        coinsEarned = (session.currentIndex + 1) * 10;
      } else {
        const timeBonus = Math.floor(timeLeft * 10);
        const nextCombo = session.combo + 1;
        const comboMultiplier = nextCombo >= 2 ? nextCombo : 1;
        const basePoints = currentQuestion.difficulty === 'dificil' ? 180 : currentQuestion.difficulty === 'medio' ? 120 : 80;
        totalPoints = (basePoints + timeBonus) * comboMultiplier;
        coinsEarned = session.isDailyChallenge ? 20 : 10;

        if (nextCombo >= 2) {
          soundFx.playCombo(nextCombo);
        }
      }

      const isFastAnswer = timeLeft >= 10;

      setPointsBadge({
        points: totalPoints,
        coins: coinsEarned,
        text: isJourney
          ? (session.currentIndex + 1 === 15 ? '👑 PERGUNTA FINAL VENCIDA!' : 'Resposta Correta!')
          : (session.combo + 1 >= 3 ? `🔥 Combo x${session.combo + 1}!` : 'Excelente!'),
      });

      onAnswer(true, totalPoints, isFastAnswer);
    } else {
      soundFx.playWrong();
      soundFx.vibrate(120);

      setPointsBadge({ points: 0, coins: 0, text: 'Resposta Incorreta' });
      onAnswer(false, 0, false);
    }
  };

  // Standard 50/50 for practice matches
  const handleUseFiftyFiftyStandard = () => {
    if (isAnswered || !currentQuestion || stats.coins < 30) {
      soundFx.playWrong();
      return;
    }

    soundFx.playCoin();
    soundFx.vibrate(30);

    onUpdateStats({ ...stats, coins: stats.coins - 30 });

    const wrongIndices = [0, 1, 2, 3].filter((i) => i !== currentQuestion.correctIndex);
    const shuffled = wrongIndices.sort(() => 0.5 - Math.random());
    setDisabledOptions([shuffled[0], shuffled[1]]);
  };

  // Journey Help: 50/50
  const handleJourneyFiftyFifty = () => {
    if (isAnswered || !currentQuestion || session.helpsUsed?.fiftyFifty) {
      soundFx.playWrong();
      return;
    }

    soundFx.playCoin();
    soundFx.vibrate(30);

    const wrongIndices = [0, 1, 2, 3].filter((i) => i !== currentQuestion.correctIndex);
    const shuffled = wrongIndices.sort(() => 0.5 - Math.random());
    setDisabledOptions([shuffled[0], shuffled[1]]);

    if (onUseJourneyHelp) {
      onUseJourneyHelp('fiftyFifty');
    }
  };

  // Journey Help: Trocar
  const handleJourneyTrocar = () => {
    if (isAnswered || !currentQuestion || session.helpsUsed?.trocar) {
      soundFx.playWrong();
      return;
    }

    const currentUsedIds = session.questions.map((q) => q.id);
    const targetLevel = currentQuestion.difficultyLevel || (session.currentIndex + 1);
    
    let candidates = allQuestions.filter(
      (q) => q.difficultyLevel === targetLevel && !currentUsedIds.includes(q.id)
    );

    if (candidates.length === 0) {
      candidates = allQuestions.filter(
        (q) => q.difficulty === currentQuestion.difficulty && !currentUsedIds.includes(q.id)
      );
    }

    const fallbackCandidates = candidates.length > 0
      ? candidates
      : allQuestions.filter((q) => !currentUsedIds.includes(q.id));

    if (fallbackCandidates.length === 0) {
      soundFx.playWrong();
      return;
    }

    soundFx.playCoin();
    soundFx.vibrate(30);

    const replacement = fallbackCandidates[Math.floor(Math.random() * fallbackCandidates.length)];

    if (onUseJourneyHelp) {
      onUseJourneyHelp('trocar', replacement);
    }
  };

  // Journey Help: Dica
  const handleJourneyDica = () => {
    if (isAnswered || !currentQuestion || session.helpsUsed?.dica) {
      soundFx.playWrong();
      return;
    }

    soundFx.playCoin();
    soundFx.vibrate(30);
    setShowHintBox(true);

    if (onUseJourneyHelp) {
      onUseJourneyHelp('dica');
    }
  };

  if (!currentQuestion) return null;

  const currentPointsValue = isJourney
    ? JOURNEY_SCORE_LADDER[session.currentIndex] || 100
    : 0;

  const difficultyColor =
    currentQuestion.difficulty === 'dificil'
      ? 'bg-rose-500/20 text-rose-300 border-rose-500/30'
      : currentQuestion.difficulty === 'medio'
      ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
      : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';

  return (
    <div className={`w-full min-h-[calc(100vh-60px)] flex flex-col justify-between p-4 max-w-md mx-auto animate-fade-in relative ${
      session.currentIndex === 14 ? 'bg-gradient-to-b from-amber-950/30 via-slate-950 to-slate-950 rounded-3xl' : ''
    }`}>
      {/* Question 15 Transition Overlay */}
      {showFinalQuestionOverlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-sm bg-gradient-to-b from-amber-900/80 via-slate-900 to-slate-900 border-2 border-amber-500 rounded-3xl p-6 text-center shadow-2xl relative overflow-hidden space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center animate-bounce">
              <Crown className="w-10 h-10 text-amber-400 fill-amber-400/20" />
            </div>

            <div>
              <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono font-black text-xs uppercase tracking-wider">
                Desafio Máximo
              </span>
              <h2 className="text-2xl font-black text-white font-game mt-2">
                PERGUNTA FINAL 👑
              </h2>
              <p className="text-xs text-amber-200 mt-1">
                Você chegou ao topo da Jornada Bíblica!
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-amber-500/30">
              <span className="text-[10px] text-slate-400 uppercase font-bold block">Recompensa da Pergunta</span>
              <span className="text-2xl font-black text-amber-400 font-mono">100.000 PONTOS</span>
            </div>

            <button
              onClick={() => {
                soundFx.playClick();
                setShowFinalQuestionOverlay(false);
              }}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-xl shadow-amber-500/30 hover:brightness-110 active:scale-95 transition-all game-btn-3d"
            >
              ENFRENTAR PERGUNTA FINAL
            </button>
          </div>
        </div>
      )}

      {/* Confirm Quit Modal */}
      {showQuitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl space-y-4 text-center">
            <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 w-12 h-12 mx-auto flex items-center justify-center">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-lg font-black text-white font-game">Sair da Partida?</h3>
              {isJourney ? (
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Ao abandonar a Jornada, você manterá apenas a pontuação garantida pelo seu último checkpoint ({session.guaranteedScore || 0} pts).
                </p>
              ) : (
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Sua partida atual será encerrada e os pontos acumulados até agora serão mantidos.
                </p>
              )}
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => {
                  soundFx.playClick();
                  setShowQuitModal(false);
                }}
                className="flex-1 py-3 rounded-2xl bg-slate-800 border border-slate-700 text-slate-200 font-extrabold text-xs"
              >
                Continuar
              </button>
              <button
                onClick={() => {
                  soundFx.playClick();
                  setShowQuitModal(false);
                  onQuitGame(true);
                }}
                className="flex-1 py-3 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-xs shadow-md"
              >
                {isJourney ? 'Encerrar' : 'Sair'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Navigation & Status Bar */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={() => {
              soundFx.playClick();
              setShowQuitModal(true);
            }}
            className="p-2 text-slate-400 hover:text-white rounded-2xl bg-slate-900 border border-slate-800"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Title or Mode Header */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300">
            {isJourney ? (
              <span className="text-amber-400 font-black flex items-center gap-1">
                <Crown className="w-3.5 h-3.5" /> JORNADA BÍBLICA
              </span>
            ) : (
              <>
                <span>Pergunta</span>
                <span className="text-amber-400 font-mono font-black">
                  {session.currentIndex + 1}/{session.questions.length}
                </span>
              </>
            )}
          </div>

          {/* Hearts / Match Lives Left */}
          {!isJourney ? (
            <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
              {[1, 2, 3].map((heartNum) => (
                <Heart
                  key={heartNum}
                  className={`w-4 h-4 transition-all ${
                    heartNum <= session.livesLeft
                      ? 'text-rose-500 fill-rose-500 scale-100'
                      : 'text-slate-700 fill-slate-800 scale-90'
                  }`}
                />
              ))}
            </div>
          ) : (
            <div className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-extrabold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Garantido: {session.guaranteedScore || 0}</span>
            </div>
          )}
        </div>

        {/* JOURNEY STEPPER LADDER */}
        {isJourney && (
          <div className="mb-3 space-y-2">
            <div
              ref={ladderScrollRef}
              className="flex items-center gap-1.5 overflow-x-auto pb-2 pt-1 scrollbar-none px-1"
            >
              {JOURNEY_SCORE_LADDER.map((scoreVal, index) => {
                const qNum = index + 1;
                const isPassed = index < session.currentIndex;
                const isCurrent = index === session.currentIndex;
                const isCheckpoint = qNum === 5 || qNum === 10;
                const isFinal = qNum === 15;

                return (
                  <div
                    key={qNum}
                    className={`flex-shrink-0 px-2.5 py-1.5 rounded-xl border flex flex-col items-center justify-center transition-all min-w-[56px] text-center ${
                      isCurrent
                        ? 'bg-amber-500 text-slate-950 border-amber-400 font-extrabold scale-105 shadow-lg shadow-amber-500/20'
                        : isPassed
                        ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300 font-bold'
                        : isCheckpoint
                        ? 'bg-indigo-950/60 border-indigo-500/50 text-indigo-300'
                        : isFinal
                        ? 'bg-amber-950/60 border-amber-500/50 text-amber-300'
                        : 'bg-slate-900/60 border-slate-800 text-slate-500'
                    }`}
                  >
                    <div className="flex items-center gap-0.5 text-[10px]">
                      {isPassed && <Check className="w-3 h-3 text-emerald-400 stroke-[3]" />}
                      {isCurrent && <Flame className="w-3 h-3 fill-slate-950 animate-pulse" />}
                      {isCheckpoint && !isPassed && !isCurrent && <ShieldCheck className="w-3 h-3 text-indigo-400" />}
                      {isFinal && !isPassed && !isCurrent && <Crown className="w-3 h-3 text-amber-400" />}
                      <span>{qNum}</span>
                    </div>
                    <span className="text-[9px] font-mono tracking-tight font-extrabold mt-0.5">
                      {scoreVal >= 1000 ? `${scoreVal / 1000}k` : scoreVal}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Current Question Point Value Banner */}
            <div className="flex items-center justify-between px-3 py-1.5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 border border-amber-500/30 text-xs">
              <span className="text-slate-300 font-extrabold flex items-center gap-1">
                {session.currentIndex + 1 === 15 ? (
                  <Crown className="w-4 h-4 text-amber-400 animate-bounce" />
                ) : (
                  <Sparkles className="w-4 h-4 text-amber-400" />
                )}
                <span>Pergunta {session.currentIndex + 1} de 15</span>
              </span>
              <span className="text-amber-400 font-mono font-black">
                VALE {currentPointsValue.toLocaleString('pt-BR')} PTS
              </span>
            </div>
          </div>
        )}

        {/* Difficulty & Timer Bar */}
        <div className="flex items-center justify-between mb-3">
          <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-black uppercase tracking-wider ${difficultyColor}`}>
            {isJourney ? `Nível ${currentQuestion.difficultyLevel || session.currentIndex + 1}/15` : currentQuestion.difficulty} • {session.categoryName}
          </span>

          {/* Timer Clock */}
          <div className={`flex items-center gap-1 font-mono font-black text-sm px-2.5 py-0.5 rounded-full border ${
            timeLeft <= 5
              ? 'bg-rose-500/20 border-rose-500/40 text-rose-400 animate-pulse'
              : 'bg-slate-900 border-slate-800 text-amber-400'
          }`}>
            <Clock className="w-3.5 h-3.5" />
            <span>{timeLeft}s</span>
          </div>
        </div>

        {/* Question Card */}
        <div className={`p-5 rounded-3xl bg-slate-900 border shadow-xl relative min-h-[120px] flex flex-col justify-center ${
          session.currentIndex === 14 ? 'border-amber-500/50 shadow-amber-500/10' : 'border-slate-800'
        }`}>
          <h2 className="text-base font-bold text-white leading-relaxed text-center font-game">
            {currentQuestion.question}
          </h2>
        </div>
      </div>

      {/* Answer Options */}
      <div className="space-y-2.5 my-3">
        {currentQuestion.options.map((optionText, idx) => {
          const isSelected = selectedOption === idx;
          const isCorrectIndex = idx === currentQuestion.correctIndex;
          const isDisabled = disabledOptions.includes(idx);

          let optionStyle = 'bg-slate-900/90 border-slate-800 text-slate-200 hover:border-slate-700';

          if (isAnswered) {
            if (isCorrectIndex) {
              optionStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold shadow-md shadow-emerald-500/10';
            } else if (isSelected && !isCorrectIndex) {
              optionStyle = 'bg-rose-500/20 border-rose-500 text-rose-300 font-bold';
            } else {
              optionStyle = 'bg-slate-900/40 border-slate-800/40 text-slate-600 opacity-50';
            }
          } else if (isDisabled) {
            optionStyle = 'bg-slate-900/30 border-slate-800/30 text-slate-700 opacity-40 cursor-not-allowed';
          }

          return (
            <button
              key={idx}
              onClick={() => handleOptionClick(idx)}
              disabled={isAnswered || isDisabled}
              className={`w-full p-4 rounded-2xl border text-left text-xs font-semibold transition-all duration-200 flex items-center justify-between group active:scale-[0.99] ${optionStyle}`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-6 h-6 rounded-xl flex items-center justify-center text-[11px] font-mono font-bold border ${
                  isAnswered && isCorrectIndex
                    ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                    : isAnswered && isSelected && !isCorrectIndex
                    ? 'bg-rose-500 text-white border-rose-400'
                    : 'bg-slate-800 border-slate-700 text-slate-400 group-hover:text-white'
                }`}>
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="flex-1 leading-snug">{optionText}</span>
              </div>

              {isAnswered && isCorrectIndex && (
                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              )}
              {isAnswered && isSelected && !isCorrectIndex && (
                <X className="w-5 h-5 text-rose-400 flex-shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Hint Banner if Dica is used in Journey */}
      {showHintBox && (
        <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 mb-3 text-xs animate-fade-in">
          <div className="flex items-center gap-1.5 text-amber-400 font-extrabold mb-1">
            <Lightbulb className="w-4 h-4 text-amber-400 fill-amber-400/20" />
            <span>Dica Útil:</span>
          </div>
          <p className="text-amber-200 text-[11px] leading-relaxed italic">
            "{currentQuestion.hint}"
          </p>
        </div>
      )}

      {/* Explanation Box on Answer */}
      {isAnswered && (
        <div className="p-3.5 rounded-2xl bg-slate-900/95 border border-indigo-500/40 mb-3 text-xs animate-fade-in space-y-1.5 shadow-lg shadow-indigo-500/5">
          <div className="flex items-center justify-between text-indigo-400 font-extrabold text-[11px]">
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              <span>Explicação Bíblica</span>
            </div>
            <span className="font-mono text-amber-300 bg-indigo-950/80 px-2 py-0.5 rounded-lg border border-indigo-500/40 font-black">
              📖 {currentQuestion.reference}
            </span>
          </div>
          <p className="text-slate-200 text-[11px] leading-relaxed pt-0.5">
            {currentQuestion.explanation}
          </p>
        </div>
      )}

      {/* Floating Feedback Badge */}
      {pointsBadge && (
        <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border border-amber-500/40 text-center animate-bounce-subtle mb-3">
          <span className="text-xs font-black text-amber-300 block">{pointsBadge.text}</span>
          {pointsBadge.points > 0 && (
            <div className="flex items-center justify-center gap-3 mt-1 font-mono text-xs font-bold">
              <span className="text-amber-400 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 fill-amber-400" />
                +{pointsBadge.points} pts
              </span>
              <span className="text-amber-300 flex items-center gap-1">
                <Coins className="w-3.5 h-3.5 fill-amber-400" />
                +{pointsBadge.coins} moedas
              </span>
            </div>
          )}
        </div>
      )}

      {/* Boosters / Helps Bar */}
      <div className="pt-2 border-t border-slate-800/80">
        {!isAnswered ? (
          isJourney ? (
            /* Journey Mode 3 Helps Bar */
            <div className="space-y-1.5">
              <span className="text-[10px] font-extrabold uppercase text-slate-400 block text-center">
                Ajudas da Jornada (1x cada por partida)
              </span>
              <div className="grid grid-cols-3 gap-2">
                {/* 50/50 */}
                <button
                  onClick={handleJourneyFiftyFifty}
                  disabled={session.helpsUsed?.fiftyFifty || disabledOptions.length > 0}
                  className={`py-2 px-2 rounded-2xl border text-[11px] font-extrabold flex flex-col items-center justify-center gap-0.5 transition-all active:scale-95 ${
                    session.helpsUsed?.fiftyFifty
                      ? 'bg-slate-900/40 border-slate-800 text-slate-600 opacity-50 cursor-not-allowed'
                      : 'bg-slate-900 border-amber-500/40 text-amber-400 hover:bg-slate-800'
                  }`}
                >
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  <span>50 / 50</span>
                  {session.helpsUsed?.fiftyFifty && <span className="text-[8px] text-slate-500">Usado</span>}
                </button>

                {/* Trocar */}
                <button
                  onClick={handleJourneyTrocar}
                  disabled={session.helpsUsed?.trocar}
                  className={`py-2 px-2 rounded-2xl border text-[11px] font-extrabold flex flex-col items-center justify-center gap-0.5 transition-all active:scale-95 ${
                    session.helpsUsed?.trocar
                      ? 'bg-slate-900/40 border-slate-800 text-slate-600 opacity-50 cursor-not-allowed'
                      : 'bg-slate-900 border-indigo-500/40 text-indigo-400 hover:bg-slate-800'
                  }`}
                >
                  <RefreshCw className="w-4 h-4 text-indigo-400" />
                  <span>Trocar</span>
                  {session.helpsUsed?.trocar && <span className="text-[8px] text-slate-500">Usado</span>}
                </button>

                {/* Dica */}
                <button
                  onClick={handleJourneyDica}
                  disabled={session.helpsUsed?.dica}
                  className={`py-2 px-2 rounded-2xl border text-[11px] font-extrabold flex flex-col items-center justify-center gap-0.5 transition-all active:scale-95 ${
                    session.helpsUsed?.dica
                      ? 'bg-slate-900/40 border-slate-800 text-slate-600 opacity-50 cursor-not-allowed'
                      : 'bg-slate-900 border-emerald-500/40 text-emerald-400 hover:bg-slate-800'
                  }`}
                >
                  <HelpCircle className="w-4 h-4 text-emerald-400" />
                  <span>Dica</span>
                  {session.helpsUsed?.dica && <span className="text-[8px] text-slate-500">Usado</span>}
                </button>
              </div>
            </div>
          ) : (
            /* Practice Standard Boosters Bar */
            <div className="flex items-center gap-2 w-full">
              <button
                onClick={handleUseFiftyFiftyStandard}
                disabled={stats.coins < 30 || disabledOptions.length > 0}
                className="flex-1 py-2.5 px-3 rounded-2xl bg-slate-900 border border-slate-800 text-amber-400 hover:bg-slate-800 text-xs font-extrabold flex items-center justify-center gap-1.5 disabled:opacity-40 transition-all active:scale-95"
              >
                <Lightbulb className="w-4 h-4 text-amber-400" />
                <span>50/50 (30m)</span>
              </button>
            </div>
          )
        ) : (
          <button
            onClick={() => {
              soundFx.playClick();
              onNextQuestion();
            }}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 game-btn-3d"
          >
            <span>Próxima Pergunta</span>
            <ArrowLeft className="w-4 h-4 rotate-180 stroke-[3]" />
          </button>
        )}
      </div>
    </div>
  );
};
