import React, { useEffect } from 'react';
import { Award, CheckCircle, Coins, Flame, Home, RotateCcw, Sparkles, Star, Trophy, Zap, XCircle, Crown, ShieldCheck } from 'lucide-react';
import { GameSession, UserStats } from '../types';
import { soundFx } from '../utils/sound';
import { ParticleEffect } from './ParticleEffect';

interface ResultScreenProps {
  session: GameSession;
  stats: UserStats;
  leveledUp: boolean;
  newLevel: number;
  onPlayAgain: () => void;
  onGoHome: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  session,
  stats,
  leveledUp,
  newLevel,
  onPlayAgain,
  onGoHome,
}) => {
  const isJourney = Boolean(session.isJourney);
  const totalQuestions = session.questions.length;
  const accuracy = totalQuestions > 0 ? Math.round((session.correctAnswers / totalQuestions) * 100) : 0;
  const isJourneyVictory = isJourney && session.correctAnswers >= 15;

  let stars = 1;
  if (accuracy >= 80 || isJourneyVictory) stars = 3;
  else if (accuracy >= 50) stars = 2;

  useEffect(() => {
    soundFx.playLevelUp();
  }, []);

  return (
    <div className="w-full min-h-[calc(100vh-60px)] flex flex-col justify-between p-4 max-w-md mx-auto animate-fade-in pb-8">
      {/* Celebration Particle Effect */}
      <ParticleEffect active={stars >= 2 || leveledUp || Boolean(session.isNewRecord) || isJourneyVictory} />

      {/* Main Result Card */}
      <div className="text-center my-auto space-y-3">
        {isJourneyVictory ? (
          /* Journey Victory Crown Header */
          <div className="space-y-2 animate-bounce-subtle">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-orange-500 p-1 shadow-2xl shadow-amber-500/30 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                <Crown className="w-12 h-12 text-amber-400 fill-amber-400/20" />
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-black text-xs uppercase tracking-wider">
              100.000 PONTOS
            </span>
            <h2 className="text-2xl font-black text-white font-game">
              JORNADA CONCLUÍDA!
            </h2>
            <p className="text-xs text-amber-200">
              Você superou as 15 perguntas e alcançou o topo bíblico!
            </p>
          </div>
        ) : isJourney ? (
          /* Journey Attempt Ended Header */
          <div className="space-y-1.5">
            <div className="w-16 h-16 mx-auto rounded-full bg-slate-900 border border-amber-500/30 flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-amber-400" />
            </div>
            <h2 className="text-2xl font-black text-white font-game">
              FIM DA JORNADA
            </h2>
            <p className="text-xs text-slate-300">
              Você chegou até a <span className="text-amber-400 font-bold">Pergunta {session.currentIndex + 1} de 15</span>
            </p>
          </div>
        ) : (
          /* Standard Practice Match Header */
          <>
            <div className="flex items-center justify-center gap-3 mb-1">
              <Star className={`w-10 h-10 ${stars >= 1 ? 'text-amber-400 fill-amber-400 animate-bounce' : 'text-slate-800'}`} />
              <Star className={`w-14 h-14 -translate-y-2 ${stars >= 2 ? 'text-amber-400 fill-amber-400 animate-bounce' : 'text-slate-800'}`} />
              <Star className={`w-10 h-10 ${stars >= 3 ? 'text-amber-400 fill-amber-400 animate-bounce' : 'text-slate-800'}`} />
            </div>

            <h2 className="text-2xl font-black text-white font-game">
              {accuracy >= 80 ? 'Excelente Desempenho!' : accuracy >= 50 ? 'Bom Trabalho!' : 'Continue Praticando!'}
            </h2>

            <p className="text-xs text-slate-400">
              Você concluiu a partida em <span className="text-indigo-300 font-bold">{session.categoryName}</span>
            </p>
          </>
        )}

        {/* New Record Badge */}
        {session.isNewRecord && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 animate-pulse">
            <Trophy className="w-4 h-4 fill-slate-950" />
            <span>NOVO RECORDE PESSOAL!</span>
          </div>
        )}

        {/* Level Up Banner Notification */}
        {leveledUp && (
          <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border border-amber-500/40 text-center animate-pulse">
            <span className="text-xs font-black uppercase text-amber-300 flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              NOVO NÍVEL ALCANÇADO: NÍVEL {newLevel}!
            </span>
          </div>
        )}

        {/* Stats Grid Summary */}
        <div className="grid grid-cols-2 gap-2.5 mt-4">
          {/* Pontuação Obtida */}
          <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <Trophy className="w-5 h-5 text-amber-400 mx-auto mb-1" />
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Pontuação</span>
            <span className="text-lg font-black text-amber-400 font-mono">{session.score.toLocaleString('pt-BR')} pts</span>
          </div>

          {/* Pontuação Garantida por Checkpoint (in Journey) or Precision */}
          <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            {isJourney ? (
              <>
                <ShieldCheck className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Garantido Checkpoint</span>
                <span className="text-lg font-black text-emerald-400 font-mono">{(session.guaranteedScore || 0).toLocaleString('pt-BR')} pts</span>
              </>
            ) : (
              <>
                <CheckCircle className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Precisão</span>
                <span className="text-lg font-black text-emerald-400">{accuracy}%</span>
              </>
            )}
          </div>

          {/* XP Ganho */}
          <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <Zap className="w-5 h-5 text-indigo-400 mx-auto mb-1" />
            <span className="text-[10px] uppercase font-bold text-slate-400 block">XP Recebido</span>
            <span className="text-lg font-black text-indigo-400">+{session.xpEarned} XP</span>
          </div>

          {/* Moedas Ganhas */}
          <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <Coins className="w-5 h-5 text-amber-400 mx-auto mb-1" />
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Moedas Ganhas</span>
            <span className="text-lg font-black text-amber-300">+{session.coinsEarned}</span>
          </div>
        </div>

        {/* Acertos e Erros breakdown */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-xs font-bold text-slate-300 px-3">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle className="w-4 h-4" /> Acertos
            </span>
            <span className="text-white font-extrabold">{session.correctAnswers}</span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-xs font-bold text-slate-300 px-3">
            <span className="flex items-center gap-1.5 text-rose-400">
              <XCircle className="w-4 h-4" /> Erros
            </span>
            <span className="text-white font-extrabold">{session.wrongAnswers}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2.5 mt-4">
        <button
          onClick={() => {
            soundFx.playClick();
            onPlayAgain();
          }}
          disabled={stats.lives <= 0}
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-xl shadow-amber-500/20 hover:brightness-110 active:scale-95 disabled:opacity-50 transition-all flex items-center justify-center gap-2 game-btn-3d"
        >
          <RotateCcw className="w-5 h-5" />
          <span>{isJourney ? 'Nova Jornada' : 'Jogar Novamente'}</span>
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
