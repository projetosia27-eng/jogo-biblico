import React from 'react';
import { Shield, X, Lock, Database, UserCheck, Smartphone } from 'lucide-react';
import { soundFx } from '../utils/sound';

interface PrivacyModalProps {
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl relative max-h-[85vh] overflow-y-auto custom-scrollbar">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Shield className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-extrabold text-white font-game">Política de Privacidade</h2>
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

        {/* Content */}
        <div className="space-y-4 text-slate-300 text-xs leading-relaxed">
          <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3">
            <Lock className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-white text-xs mb-1">Armazenamento 100% Local</h3>
              <p className="text-slate-400 text-[11px]">
                Seu progresso, nível, moedas e atributos são armazenados exclusivamente no seu dispositivo (LocalStorage).
              </p>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3">
            <Database className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-white text-xs mb-1">Sem Coleta de Dados Pessoais</h3>
              <p className="text-slate-400 text-[11px]">
                O aplicativo não exige cadastro, e-mail, senha ou criação de conta. Não coletamos dados de identificação pessoal.
              </p>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3">
            <UserCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-white text-xs mb-1">Nenhum Rastreamento</h3>
              <p className="text-slate-400 text-[11px]">
                Não utilizamos cookies de terceiros para perfilamento ou rastreamento publicitário.
              </p>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3">
            <Smartphone className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-white text-xs mb-1">Modo Offline e PWA</h3>
              <p className="text-slate-400 text-[11px]">
                O aplicativo é executado de forma autônoma e offline sem necessidade de conexão constante com servidores externos.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Close */}
        <div className="mt-5 pt-3 border-t border-slate-800">
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
