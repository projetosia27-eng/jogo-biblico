import React from 'react';
import { Award, CheckCircle2, ChevronRight, Crown, Flame, Grid, Play, Settings, Sparkles, ShieldCheck, Zap, RotateCcw, User } from 'lucide-react';
import { UserStats } from '../types';
import { getProfileInfo } from '../utils/profileDifficulty';
import { soundFx } from '../utils/sound';

interface HomeScreenProps {
  stats: UserStats;
  onStartQuiz: (categoryId?: any) => void;
  onStartJourney: () => void;
  onResumeJourney?: () => void;
  hasActiveJourney?: boolean;
  activeJourneyQuestion?: number;
  onOpenCategories: () => void;
  onOpenDailyChallenge: () => void;
  onOpenAchievements: () => void;
  onOpenProfile: () => void;
  onOpenSettings: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  stats,
  onStartQuiz,
  onStartJourney,
  onResumeJourney,
  hasActiveJourney = false,
  activeJourneyQuestion = 1,
  onOpenCategories,
  onOpenDailyChallenge,
  onOpenAchievements,
  onOpenProfile,
  onOpenSettings,
}) => {
  const todayStr = new Date().toISOString().split('T')[0];
  const isDailyCompletedToday = stats.dailyChallengeCompletedDate === todayStr;
  const currentProfileInfo = getProfileInfo(stats.userProfile);

  const verses = [
    '“Lâmpada para os meus pés é tua palavra e luz para o meu caminho.” — Salmos 119:105',
    '“Tudo posso naquele que me fortalece.” — Filipenses 4:13',
    '“O Senhor é o meu pastor; nada me faltará.” — Salmos 23:1',
    '“Busquem, pois, em primeiro lugar o Reino de Deus.” — Mateus 6:33',
  ];
  const randomVerse = verses[Math.floor(Date.now() / 86400000) % verses.length];

  return (
    <div className="w-full min-h-[calc(100vh-60px)] flex flex-col justify-between p-4 max-w-md mx-auto pb-8 animate-fade-in space-y-4">
      {/* Header & Verse */}
      <div className="space-y-3">
        {/* Profile & Verse Card */}
        <div className="relative overflow-hidden p-4 rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 border border-indigo-500/30 shadow-xl space-y-3">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-bold uppercase tracking-wider border border-indigo-500/30">
              Versículo do Dia
            </span>

            {/* Profile Tag Button */}
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenProfile();
              }}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-800/90 border border-indigo-500/30 text-xs font-bold text-amber-300 hover:brightness-110 active:scale-95 transition-all"
            >
              <User className="w-3.5 h-3.5 text-amber-400" />
              <span>Perfil: {currentProfileInfo.title}</span>
            </button>
          </div>

          <p className="text-xs text-slate-200 font-medium italic leading-relaxed">
            {randomVerse}
          </p>
        </div>

        {/* Active Journey Banner if session is paused */}
        {hasActiveJourney && (
          <div className="p-4 rounded-3xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/10 border border-amber-500/50 shadow-xl relative overflow-hidden animate-pulse-subtle">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30">
                  <RotateCcw className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-amber-400 tracking-wider block">
                    Jornada Ativa
                  </span>
                  <h3 className="text-sm font-extrabold text-white font-game">
                    Pergunta {activeJourneyQuestion} de 15
                  </h3>
                </div>
              </div>

              <button
                onClick={() => {
                  soundFx.playClick();
                  if (onResumeJourney) onResumeJourney();
                }}
                className="py-2 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md hover:brightness-110 active:scale-95 transition-all game-btn-3d"
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {/* Featured Card: JORNADA BÍBLICA */}
        <div className="relative overflow-hidden p-5 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/80 to-slate-900 border border-amber-500/40 shadow-2xl group space-y-3">
          <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/20">
                <Crown className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h2 className="text-lg font-black text-white font-game tracking-wide">
                  JORNADA BÍBLICA
                </h2>
                <p className="text-xs text-amber-300 font-medium">
                  15 Perguntas • Chegue até a Pergunta Final 👑
                </p>
              </div>
            </div>

            <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono font-black uppercase">
              100.000 pts
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Enfrente 15 etapas de sabedoria bíblica ajustadas ao perfil <span className="text-amber-300 font-bold">{currentProfileInfo.title}</span>. Conquiste checkpoints e complete a Pergunta Final!
          </p>

          <button
            onClick={() => {
              soundFx.playClick();
              soundFx.vibrate(40);
              onStartJourney();
            }}
            disabled={stats.lives <= 0}
            className="w-full py-4 px-5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-xl shadow-amber-500/20 border-b-4 border-amber-700 hover:brightness-110 active:scale-95 disabled:opacity-50 transition-all flex items-center justify-center gap-2 game-btn-3d"
          >
            <Play className="w-5 h-5 fill-slate-950 text-slate-950" />
            <span>JOGAR JORNADA</span>
          </button>
        </div>

        {/* Secondary Card: DESAFIO DIÁRIO */}
        <div
          onClick={() => {
            soundFx.playClick();
            onOpenDailyChallenge();
          }}
          className={`group relative cursor-pointer overflow-hidden p-4 rounded-3xl border shadow-lg active:scale-[0.98] transition-all ${
            isDailyCompletedToday
              ? 'bg-gradient-to-r from-emerald-950/60 via-slate-900 to-slate-900 border-emerald-500/40'
              : 'bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-slate-900 border-orange-500/30'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform ${
                  isDailyCompletedToday
                    ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/20'
                    : 'bg-gradient-to-br from-amber-500 to-orange-600 text-slate-950 shadow-orange-500/20'
                }`}
              >
                {isDailyCompletedToday ? (
                  <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                ) : (
                  <Flame className="w-6 h-6 fill-slate-950" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-extrabold text-white font-game">DESAFIO DIÁRIO</h3>
                  {isDailyCompletedToday ? (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-black">
                      CONCLUÍDO ✓
                    </span>
                  ) : (
                    <span className="px-1.5 py-0.2 rounded bg-orange-500 text-[9px] font-black uppercase text-slate-950">
                      BÔNUS STREAK
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-300 mt-0.5">
                  10 perguntas • Sequência diária ({stats.dailyStreak} dias)
                </p>
              </div>
            </div>

            <div
              className={`py-1.5 px-3 rounded-xl text-xs font-black uppercase transition-all flex items-center gap-1 ${
                isDailyCompletedToday
                  ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-300'
                  : 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-md'
              }`}
            >
              <span>{isDailyCompletedToday ? 'VER' : 'JOGAR'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Play & Navigation Grid */}
      <div className="space-y-3">
        <button
          onClick={() => {
            soundFx.playClick();
            soundFx.vibrate(40);
            onStartQuiz('geral');
          }}
          disabled={stats.lives <= 0}
          className="w-full py-3 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-extrabold text-xs flex items-center justify-between active:scale-95 transition-all"
        >
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-indigo-400" />
            <span>Treino Rápido (5 perguntas aleatórias)</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-500" />
        </button>

        {/* Navigation Cards Grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* Categorias Card */}
          <div
            onClick={() => {
              soundFx.playClick();
              onOpenCategories();
            }}
            className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 cursor-pointer active:scale-95 transition-all flex flex-col justify-between h-24 group"
          >
            <div className="flex items-center justify-between">
              <div className="p-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform">
                <Grid className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded-full">
                6 Temas
              </span>
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-white font-game">Treino</h4>
              <p className="text-[10px] text-slate-400">Por categorias</p>
            </div>
          </div>

          {/* Conquistas Card */}
          <div
            onClick={() => {
              soundFx.playClick();
              onOpenAchievements();
            }}
            className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 cursor-pointer active:scale-95 transition-all flex flex-col justify-between h-24 group"
          >
            <div className="flex items-center justify-between">
              <div className="p-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full">
                Medalhas
              </span>
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-white font-game">Conquistas</h4>
              <p className="text-[10px] text-slate-400">Suas recompensas</p>
            </div>
          </div>

          {/* Perfil Card */}
          <div
            onClick={() => {
              soundFx.playClick();
              onOpenProfile();
            }}
            className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 cursor-pointer active:scale-95 transition-all flex flex-col justify-between h-24 group"
          >
            <div className="flex items-center justify-between">
              <div className="p-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                <User className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded-full">
                {currentProfileInfo.title}
              </span>
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-white font-game">Perfil</h4>
              <p className="text-[10px] text-slate-400">Ajustar dificuldade</p>
            </div>
          </div>

          {/* Configurações Card */}
          <div
            onClick={() => {
              soundFx.playClick();
              onOpenSettings();
            }}
            className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 cursor-pointer active:scale-95 transition-all flex flex-col justify-between h-24 group"
          >
            <div className="flex items-center justify-between">
              <div className="p-1.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                <Settings className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded-full">
                Opções
              </span>
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-white font-game">Ajustes</h4>
              <p className="text-[10px] text-slate-400">Som e preferências</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

