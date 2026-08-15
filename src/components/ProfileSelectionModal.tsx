import React from 'react';
import { UserProfileType, UserStats } from '../types';
import { USER_PROFILES } from '../utils/profileDifficulty';
import { soundFx } from '../utils/sound';
import { Sparkles, Zap, BookOpen, Crown, Check, ShieldCheck } from 'lucide-react';

interface ProfileSelectionModalProps {
  currentProfile?: UserProfileType;
  onSelectProfile: (profile: UserProfileType) => void;
  onClose?: () => void;
  isInitialSetup?: boolean;
}

export const ProfileSelectionModal: React.FC<ProfileSelectionModalProps> = ({
  currentProfile,
  onSelectProfile,
  onClose,
  isInitialSetup = false,
}) => {
  const getIcon = (id: UserProfileType) => {
    switch (id) {
      case 'adolescente':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'jovem':
        return <Zap className="w-6 h-6 text-cyan-400" />;
      case 'adulto':
        return <BookOpen className="w-6 h-6 text-emerald-400" />;
      case 'pastor':
        return <Crown className="w-6 h-6 text-purple-400" />;
    }
  };

  const getCardBorder = (id: UserProfileType, isSelected: boolean) => {
    if (!isSelected) return 'border-slate-800 bg-slate-900/90 hover:border-slate-700';
    switch (id) {
      case 'adolescente':
        return 'border-amber-500 bg-amber-950/40 ring-2 ring-amber-500/30';
      case 'jovem':
        return 'border-cyan-500 bg-cyan-950/40 ring-2 ring-cyan-500/30';
      case 'adulto':
        return 'border-emerald-500 bg-emerald-950/40 ring-2 ring-emerald-500/30';
      case 'pastor':
        return 'border-purple-500 bg-purple-950/40 ring-2 ring-purple-500/30';
    }
  };

  const handleSelect = (profile: UserProfileType) => {
    soundFx.playClick();
    soundFx.vibrate(30);
    onSelectProfile(profile);
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-md bg-slate-900 border border-indigo-500/30 rounded-3xl p-5 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto custom-scrollbar">
        {/* Header */}
        <div className="text-center space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-extrabold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span>Personalização Bíblica</span>
          </div>
          <h2 className="text-xl font-black text-white font-game tracking-wide">
            Qual é o seu perfil?
          </h2>
          <p className="text-xs text-slate-300">
            O perfil ajusta a curva de dificuldade e o estilo das perguntas nas suas partidas.
          </p>
        </div>

        {/* Options List */}
        <div className="space-y-3 pt-1">
          {USER_PROFILES.map((prof) => {
            const isSelected = currentProfile === prof.id;
            return (
              <div
                key={prof.id}
                onClick={() => handleSelect(prof.id)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all active:scale-[0.98] ${getCardBorder(
                  prof.id,
                  isSelected
                )}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700/80 shrink-0">
                      {getIcon(prof.id)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-extrabold text-white font-game">
                          {prof.title}
                        </h3>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                          {prof.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed mt-1">
                        {prof.description}
                      </p>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="p-1 rounded-full bg-emerald-500 text-slate-950 shrink-0 shadow-md">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="pt-2">
          {!isInitialSetup && onClose && (
            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="w-full py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs uppercase tracking-wider transition-all"
            >
              Confirmar Escolha
            </button>
          )}

          {isInitialSetup && (
            <p className="text-[11px] text-center text-slate-400">
              Você pode alterar seu perfil a qualquer momento nas Configurações.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
