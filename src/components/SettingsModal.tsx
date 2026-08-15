import React, { useState, useEffect } from 'react';
import { Download, RefreshCw, Settings, Smartphone, Volume2, VolumeX, Vibrate, X, ShieldCheck, Check, User } from 'lucide-react';
import { UserStats, UserProfileType } from '../types';
import { USER_PROFILES } from '../utils/profileDifficulty';
import { soundFx } from '../utils/sound';

interface SettingsModalProps {
  stats: UserStats;
  onClose: () => void;
  onUpdateStats: (newStats: UserStats) => void;
  onResetProgress: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  stats,
  onClose,
  onUpdateStats,
  onResetProgress,
}) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);
  const [showResetConfirm, setShowResetConfirm] = useState<boolean>(false);

  useEffect(() => {
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, []);

  const toggleSound = () => {
    soundFx.enabled = !soundFx.enabled;
    soundFx.playClick();
    onUpdateStats({ ...stats, soundEnabled: soundFx.enabled });
  };

  const toggleVibration = () => {
    soundFx.playClick();
    const nextVib = !stats.vibrationEnabled;
    if (nextVib) soundFx.vibrate(50);
    onUpdateStats({ ...stats, vibrationEnabled: nextVib });
  };

  const handleSelectProfile = (profile: UserProfileType) => {
    soundFx.playClick();
    soundFx.vibrate(30);
    onUpdateStats({ ...stats, userProfile: profile });
  };

  const handleInstallPWA = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl relative max-h-[90vh] overflow-y-auto custom-scrollbar">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-slate-800 border border-slate-700">
              <Settings className="w-5 h-5 text-indigo-400" />
            </div>
            <h2 className="text-xl font-extrabold text-white font-game">Configurações</h2>
          </div>
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Selector */}
        <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 mb-4 space-y-2">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              Perfil de Perguntas
            </span>
          </div>
          <p className="text-[11px] text-slate-400 leading-normal">
            Escolha seu público ou nivelamento para ajustar a curva de dificuldade.
          </p>
          <div className="grid grid-cols-2 gap-2 pt-1">
            {USER_PROFILES.map((p) => {
              const isSelected = stats.userProfile === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => handleSelectProfile(p.id)}
                  className={`p-2.5 rounded-xl border text-left transition-all active:scale-95 flex items-center justify-between ${
                    isSelected
                      ? 'border-amber-500 bg-amber-500/10 text-amber-300 font-extrabold'
                      : 'border-slate-700/80 bg-slate-900/60 text-slate-300 hover:bg-slate-800 font-medium'
                  }`}
                >
                  <span className="text-xs">{p.title}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-amber-400 stroke-[3]" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Settings Toggles */}
        <div className="space-y-3 mb-5">
          {/* Sound */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
            <div className="flex items-center gap-3">
              {stats.soundEnabled ? <Volume2 className="w-5 h-5 text-indigo-400" /> : <VolumeX className="w-5 h-5 text-slate-500" />}
              <div>
                <span className="text-sm font-bold text-white block">Efeitos de Som</span>
                <span className="text-xs text-slate-400">Sons interativos no jogo</span>
              </div>
            </div>
            <button
              onClick={toggleSound}
              className={`w-12 h-6 rounded-full p-1 transition-colors ${
                stats.soundEnabled ? 'bg-indigo-600' : 'bg-slate-700'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  stats.soundEnabled ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Vibration */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
            <div className="flex items-center gap-3">
              <Vibrate className="w-5 h-5 text-amber-400" />
              <div>
                <span className="text-sm font-bold text-white block">Vibração Tátil</span>
                <span className="text-xs text-slate-400">Feedback visual e tátil</span>
              </div>
            </div>
            <button
              onClick={toggleVibration}
              className={`w-12 h-6 rounded-full p-1 transition-colors ${
                stats.vibrationEnabled ? 'bg-indigo-600' : 'bg-slate-700'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  stats.vibrationEnabled ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* PWA Install Button */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-indigo-950/60 to-purple-950/60 border border-indigo-500/30">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-indigo-400" />
                <span className="text-sm font-bold text-white">Instalar Aplicativo (PWA)</span>
              </div>
              {isInstalled && (
                <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Instalado
                </span>
              )}
            </div>
            <p className="text-xs text-slate-400 mb-3">
              Instale na tela inicial do celular para jogar offline sem abrir o navegador!
            </p>
            {deferredPrompt && !isInstalled && (
              <button
                onClick={handleInstallPWA}
                className="w-full py-2 px-3 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-indigo-500 active:scale-95 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Instalar no Celular</span>
              </button>
            )}
          </div>
        </div>

        {/* Reset Progress Confirmation */}
        {showResetConfirm ? (
          <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-center mb-4">
            <p className="text-xs font-bold text-rose-300 mb-2">
              Tem certeza? Todo seu progresso, moedas e nível serão reiniciados!
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  soundFx.playClick();
                  onResetProgress();
                  setShowResetConfirm(false);
                  onClose();
                }}
                className="flex-1 py-1.5 rounded-xl bg-rose-600 text-white font-extrabold text-xs"
              >
                Sim, Reiniciar
              </button>
              <button
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 py-1.5 rounded-xl bg-slate-800 text-slate-300 font-extrabold text-xs"
              >
                Cancelar
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowResetConfirm(true)}
            className="w-full py-2.5 px-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-rose-400 font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-800"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Resetar Progresso do Jogo</span>
          </button>
        )}

        <div className="mt-4 pt-3 border-t border-slate-800 text-center text-[11px] text-slate-500">
          <p className="flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            Desafio Bíblico • Versão Final Mobile
          </p>
        </div>
      </div>
    </div>
  );
};
