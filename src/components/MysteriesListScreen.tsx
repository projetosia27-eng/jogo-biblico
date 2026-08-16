import React, { useState } from 'react';
import { ArrowLeft, BookOpen, HelpCircle, Layers, Search, Sparkles, Zap } from 'lucide-react';
import { MYSTERIES_DATABASE, MysteryItem } from '../data/mysteries';
import { MysteryType } from '../types';
import { soundFx } from '../utils/sound';

interface MysteriesListScreenProps {
  onSelectMystery: (mystery: MysteryItem) => void;
  onBack: () => void;
}

export const MysteriesListScreen: React.FC<MysteriesListScreenProps> = ({
  onSelectMystery,
  onBack,
}) => {
  const [selectedType, setSelectedType] = useState<MysteryType | 'todos'>('todos');

  const filteredMysteries = selectedType === 'todos'
    ? MYSTERIES_DATABASE
    : MYSTERIES_DATABASE.filter((m) => m.type === selectedType);

  const filterTabs: { id: MysteryType | 'todos'; label: string }[] = [
    { id: 'todos', label: 'Todos' },
    { id: 'quem_sou_eu', label: 'Personagem' },
    { id: 'onde_estou', label: 'Lugar' },
    { id: 'qual_acontecimento', label: 'Evento' },
    { id: 'qual_livro', label: 'Livro' },
    { id: 'quem_disse', label: 'Quem Disse?' },
  ];

  return (
    <div className="w-full min-h-[calc(100vh-60px)] flex flex-col justify-between p-4 max-w-md mx-auto pb-8 animate-fade-in space-y-4">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              soundFx.playClick();
              onBack();
            }}
            className="p-2 rounded-2xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 active:scale-95 transition-all flex items-center gap-1.5 text-xs font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar</span>
          </button>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-extrabold uppercase">
            <Search className="w-3.5 h-3.5" />
            <span>Investigação Bíblica</span>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-black text-white font-game tracking-wide">
            Modo Mistérios
          </h1>
          <p className="text-xs text-slate-300 mt-1">
            Quantas pistas você precisa para descobrir o mistério? Acerte com menos pistas para ganhar mais pontos!
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                soundFx.playClick();
                setSelectedType(tab.id);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedType === tab.id
                  ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/20 border border-indigo-400'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Mysteries Grid */}
        <div className="space-y-2.5 pt-1">
          {filteredMysteries.map((m) => (
            <div
              key={m.id}
              onClick={() => {
                soundFx.playClick();
                soundFx.vibrate(30);
                onSelectMystery(m);
              }}
              className="p-4 rounded-3xl bg-slate-900 border border-indigo-500/30 hover:border-indigo-400 cursor-pointer active:scale-[0.98] transition-all flex items-center justify-between group"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-[10px] font-black uppercase">
                    {m.typeBadge}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">
                    Até 5 Pistas
                  </span>
                </div>
                <h3 className="text-sm font-black text-white font-game">
                  {m.title}
                </h3>
                <p className="text-xs text-slate-300 italic font-medium">
                  "{m.questionPrompt}"
                </p>
              </div>

              <button className="py-2 px-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-black text-xs uppercase tracking-wider shadow-md group-hover:brightness-110 transition-all game-btn-3d">
                DESVENDAR
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
