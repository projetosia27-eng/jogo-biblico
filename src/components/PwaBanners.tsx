import React, { useState, useEffect } from 'react';
import { Download, RefreshCw, Smartphone, X } from 'lucide-react';
import { soundFx } from '../utils/sound';

interface PwaBannersProps {
  onActivityCount?: number;
}

export const PwaBanners: React.FC<PwaBannersProps> = ({ onActivityCount = 0 }) => {
  const [swWaiting, setSwWaiting] = useState<ServiceWorker | null>(null);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBanner, setShowInstallBanner] = useState<boolean>(false);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);

  useEffect(() => {
    // Check if running in standalone PWA mode
    if (window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone) {
      setIsInstalled(true);
    }

    // Listen for Service Worker updates
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistration().then((reg) => {
        if (!reg) return;

        if (reg.waiting) {
          setSwWaiting(reg.waiting);
        }

        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                setSwWaiting(newWorker);
              }
            });
          }
        });
      });

      // Reload window when new SW takes over
      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) {
          refreshing = true;
          window.location.reload();
        }
      });
    }

    // Listen for PWA Install Prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);

      const dismissed = localStorage.getItem('pwa_install_dismissed');
      if (!dismissed) {
        setShowInstallBanner(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleUpdateApp = () => {
    soundFx.playClick();
    if (swWaiting) {
      swWaiting.postMessage({ type: 'SKIP_WAITING' });
    } else {
      window.location.reload();
    }
  };

  const handleInstallClick = async () => {
    soundFx.playClick();
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsInstalled(true);
    }
    setShowInstallBanner(false);
    setDeferredPrompt(null);
  };

  const handleDismissInstall = () => {
    soundFx.playClick();
    setShowInstallBanner(false);
    localStorage.setItem('pwa_install_dismissed', 'true');
  };

  return (
    <>
      {/* 1. Safe Update Banner (Requirement #8) */}
      {swWaiting && (
        <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-sm bg-indigo-950 border border-indigo-500/50 rounded-2xl p-3 shadow-2xl flex items-center justify-between gap-3 animate-slide-down">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-indigo-600/30 rounded-xl text-indigo-300">
              <RefreshCw className="w-4 h-4 animate-spin-slow" />
            </div>
            <div>
              <p className="text-xs font-extrabold text-white">Nova versão disponível</p>
              <p className="text-[10px] text-slate-300">Atualize para obter novidades e otimizações</p>
            </div>
          </div>
          <button
            onClick={handleUpdateApp}
            className="px-3 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider hover:bg-amber-400 active:scale-95 transition-all shadow-md shrink-0"
          >
            ATUALIZAR
          </button>
        </div>
      )}

      {/* 2. Discreet Install Prompt (Requirement #16) */}
      {showInstallBanner && !isInstalled && deferredPrompt && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-sm bg-slate-900/95 backdrop-blur-md border border-slate-700/80 rounded-2xl p-3.5 shadow-2xl animate-fade-in flex flex-col gap-2.5">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-amber-500/20 border border-amber-500/30 rounded-xl text-amber-400">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-white">Gostou da experiência?</h4>
                <p className="text-[11px] text-slate-300">Instale o aplicativo para jogar quando quiser offline.</p>
              </div>
            </div>
            <button
              onClick={handleDismissInstall}
              className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex gap-2 pt-1">
            <button
              onClick={handleInstallClick}
              className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md hover:brightness-110 active:scale-95 transition-all"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>INSTALAR</span>
            </button>
            <button
              onClick={handleDismissInstall}
              className="py-2 px-3 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 font-bold text-xs"
            >
              AGORA NÃO
            </button>
          </div>
        </div>
      )}
    </>
  );
};
