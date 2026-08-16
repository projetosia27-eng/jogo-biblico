import React from 'react';
import { UserStats } from '../types';
import { getProfileInfo } from '../utils/profileDifficulty';
import {
  Sparkles,
  Compass,
  Search,
  Calendar,
  Award,
  User,
  Settings,
  Flame,
  Zap,
  Coins,
  Heart,
  ChevronRight,
  BookOpen,
  Shield,
} from 'lucide-react';

interface HomeScreenProps {
  stats: UserStats;
  onNavigate: (screen: any) => void;
  onOpenDailyChallenge: () => void;
  onOpenProfileModal: () => void;
  onOpenSettingsModal: () => void;
  onOpenAchievementsModal: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  stats,
  onNavigate,
  onOpenDailyChallenge,
  onOpenProfileModal,
  onOpenSettingsModal,
  onOpenAchievementsModal,
}) => {
  const currentProfile = stats.userProfile || 'jovem';
  const profileInfo = getProfileInfo(currentProfile);

  const today = new Date().toISOString().split('T')[0];
  const isDailyDone = stats.dailyChallengeCompletedDate === today;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col pb-12">
      {/* Top Bar with Level, Coins, Lives, Streak */}
      <header className="px-4 py-3 bg-slate-900/80 border-b border-slate-800 backdrop-blur-md sticky top-0 z-20 flex items-center justify-between">
        {/* Profile Info */}
        <button
          onClick={onOpenProfileModal}
          className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-800 transition"
        >
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-xs">
            Nv.{stats.level}
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-xs font-bold text-slate-200">{profileInfo.title}</div>
            <div className="text-[10px] text-amber-400">{profileInfo.badge}</div>
          </div>
        </button>

        {/* Resources */}
        <div className="flex items-center gap-3">
          {/* Streak */}
          <div className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
            <Flame className="w-3.5 h-3.5 fill-amber-400" />
            <span>{stats.dailyStreak}</span>
          </div>

          {/* Coins */}
          <div className="flex items-center gap-1 text-xs font-bold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
            <Coins className="w-3.5 h-3.5 text-amber-400" />
            <span>{stats.coins}</span>
          </div>

          {/* Lives */}
          <div className="flex items-center gap-1 text-xs font-bold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-full border border-rose-500/20">
            <Heart className="w-3.5 h-3.5 fill-rose-400" />
            <span>{stats.lives}</span>
          </div>
        </div>
      </header>

      {/* Main Home Content */}
      <main className="max-w-md mx-auto w-full px-4 pt-6 flex-1 flex flex-col gap-6">
        {/* App Title Banner */}
        <div className="text-center flex flex-col items-center">
          <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            Jornada da Fé
          </span>
          <h1 className="text-2xl font-black text-slate-100 mt-2 tracking-tight">
            Decisões, Histórias e Mistérios
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Sua vivência diária de aprendizado e reflexão bíblica.
          </p>
        </div>

        {/* ================= 1. VIDA REAL ================= */}
        <section className="relative p-6 rounded-3xl bg-gradient-to-br from-amber-950/60 via-slate-900 to-slate-900 border border-amber-500/30 shadow-2xl flex flex-col gap-4 overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-start justify-between">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <Sparkles className="w-6 h-6 stroke-[2.5]" />
            </div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Novo Modo
            </span>
          </div>

          <div>
            <h2 className="text-lg font-black text-slate-100 tracking-tight">VIDA REAL</h2>
            <p className="text-xs font-semibold text-amber-400 mt-0.5">
              Decisões de hoje. Princípios que permanecem.
            </p>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Enfrente situações atuais do cotidiano, tome decisões éticas e reflita sobre princípios bíblicos práticos para a sua vida.
            </p>
          </div>

          <button
            onClick={() => onNavigate('real-life-list')}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:brightness-110 active:scale-[0.99] transition flex items-center justify-center gap-2 mt-1"
          >
            <span>VIVER UMA SITUAÇÃO</span>
            <ChevronRight className="w-4 h-4 stroke-[3]" />
          </button>
        </section>

        {/* ================= 2. JORNADAS ================= */}
        <section className="p-5 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition flex flex-col gap-3 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-slate-100">JORNADAS</h2>
              <p className="text-xs text-indigo-400 font-medium">Entre nas histórias da Bíblia.</p>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Viva acontecimentos da história bíblica sob a perspectiva dos personagens e compare suas decisões com os relatos originais.
          </p>

          <button
            onClick={() => onNavigate('journeys')}
            className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-1.5"
          >
            <span>EXPLORAR JORNADAS</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </section>

        {/* ================= 3. MISTÉRIOS ================= */}
        <section className="p-5 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition flex flex-col gap-3 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-slate-100">MISTÉRIOS</h2>
              <p className="text-xs text-sky-400 font-medium">Descubra através das pistas.</p>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Investigue personagens, lugares e acontecimentos usando o menor número de pistas possível para ganhar recompensas máximas.
          </p>

          <button
            onClick={() => onNavigate('mysteries')}
            className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-1.5"
          >
            <span>INVESTIGAR MISTÉRIOS</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </section>

        {/* ================= 4. DESAFIO DO DIA ================= */}
        <section className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-amber-400 uppercase">DESAFIO DO DIA</div>
              <div className="text-xs text-slate-300 font-medium mt-0.5">
                {isDailyDone ? 'Concluído por hoje!' : 'Um mistério exclusivo para hoje'}
              </div>
            </div>
          </div>

          <button
            onClick={onOpenDailyChallenge}
            className={`px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
              isDailyDone
                ? 'bg-slate-800 text-slate-400 border border-slate-700'
                : 'bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-md shadow-amber-500/20'
            }`}
          >
            {isDailyDone ? 'Ver' : 'Iniciar'}
          </button>
        </section>

        {/* Secondary Menu Grid */}
        <div className="grid grid-cols-3 gap-3 pt-2">
          <button
            onClick={onOpenAchievementsModal}
            className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 flex flex-col items-center text-center gap-1.5 transition"
          >
            <Award className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-bold text-slate-300">Conquistas</span>
          </button>

          <button
            onClick={onOpenProfileModal}
            className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 flex flex-col items-center text-center gap-1.5 transition"
          >
            <User className="w-5 h-5 text-sky-400" />
            <span className="text-xs font-bold text-slate-300">Perfil</span>
          </button>

          <button
            onClick={onOpenSettingsModal}
            className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 flex flex-col items-center text-center gap-1.5 transition"
          >
            <Settings className="w-5 h-5 text-indigo-400" />
            <span className="text-xs font-bold text-slate-300">Ajustes</span>
          </button>
        </div>
      </main>
    </div>
  );
};
