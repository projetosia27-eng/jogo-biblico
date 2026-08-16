import React, { useState } from 'react';
import { RealLifeStory, RealLifeChoice, PlayerAttributes } from '../types';
import {
  ArrowLeft,
  Sparkles,
  BookOpen,
  ChevronRight,
  Shield,
  Zap,
  Heart,
  Award,
  Check,
} from 'lucide-react';

interface RealLifePlayScreenProps {
  story: RealLifeStory;
  soundEnabled: boolean;
  vibrationEnabled: boolean;
  onFinishStory: (accumulatedEffects: Partial<PlayerAttributes>, choicesMade: RealLifeChoice[]) => void;
  onBack: () => void;
}

export const RealLifePlayScreen: React.FC<RealLifePlayScreenProps> = ({
  story,
  soundEnabled,
  vibrationEnabled,
  onFinishStory,
  onBack,
}) => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<RealLifeChoice | null>(null);
  const [choicesMade, setChoicesMade] = useState<RealLifeChoice[]>([]);
  const [accumulatedEffects, setAccumulatedEffects] = useState<Partial<PlayerAttributes>>({
    fe: 0,
    coragem: 0,
    sabedoria: 0,
    misericordia: 0,
    integridade: 0,
  });

  const scene = story.scenes[currentSceneIndex];
  const isLastScene = currentSceneIndex === story.scenes.length - 1;

  const handleSelectChoice = (choice: RealLifeChoice) => {
    if (selectedChoice) return; // Prevent double click

    if (vibrationEnabled && typeof window !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(20);
    }

    setSelectedChoice(choice);

    // Merge effects
    const newEffects: Partial<PlayerAttributes> = { ...accumulatedEffects };
    Object.entries(choice.effects).forEach(([key, val]) => {
      const k = key as keyof PlayerAttributes;
      newEffects[k] = (newEffects[k] || 0) + (val || 0);
    });

    setAccumulatedEffects(newEffects);
    setChoicesMade((prev) => [...prev, choice]);
  };

  const handleNextScene = () => {
    if (isLastScene) {
      onFinishStory(accumulatedEffects, choicesMade);
    } else {
      setSelectedChoice(null);
      setCurrentSceneIndex((prev) => prev + 1);
    }
  };

  const renderEffectBadge = (key: string, value: number) => {
    let name = '';
    let colorClass = '';

    switch (key) {
      case 'integridade':
        name = 'Integridade';
        colorClass = 'bg-amber-500/10 text-amber-400 border-amber-500/20';
        break;
      case 'coragem':
        name = 'Coragem';
        colorClass = 'bg-rose-500/10 text-rose-400 border-rose-500/20';
        break;
      case 'sabedoria':
        name = 'Sabedoria';
        colorClass = 'bg-sky-500/10 text-sky-400 border-sky-500/20';
        break;
      case 'misericordia':
        name = 'Misericórdia';
        colorClass = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
        break;
      case 'fe':
        name = 'Fé';
        colorClass = 'bg-purple-500/10 text-purple-400 border-purple-500/20';
        break;
      default:
        name = key;
        colorClass = 'bg-slate-800 text-slate-300 border-slate-700';
    }

    return (
      <span
        key={key}
        className={`text-xs font-bold px-3 py-1 rounded-full border ${colorClass} flex items-center gap-1`}
      >
        +{value} {name}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col pb-12">
      {/* Header */}
      <header className="px-4 py-4 bg-slate-900/90 border-b border-slate-800 backdrop-blur-md sticky top-0 z-20 flex items-center justify-between">
        <button
          onClick={onBack}
          className="p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition"
          aria-label="Voltar"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div className="text-center flex-1 mx-2">
          <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
            VIDA REAL • SITUAÇÃO {currentSceneIndex + 1} DE {story.scenes.length}
          </span>
          <h1 className="text-sm font-extrabold text-slate-100 truncate">{story.title}</h1>
        </div>

        <div className="w-9" />
      </header>

      {/* Progress Bar */}
      <div className="w-full bg-slate-900 h-1.5 overflow-hidden">
        <div
          className="bg-gradient-to-r from-amber-500 to-amber-300 h-full transition-all duration-300"
          style={{ width: `${((currentSceneIndex + 1) / story.scenes.length) * 100}%` }}
        />
      </div>

      <main className="max-w-md mx-auto w-full px-4 pt-6 flex-1 flex flex-col gap-6">
        {/* Scenario Header */}
        <div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            {scene.title}
          </span>
          <p className="text-sm text-slate-200 mt-2 leading-relaxed bg-slate-900/90 p-4 rounded-2xl border border-slate-800 shadow-lg">
            {scene.context}
          </p>
        </div>

        {/* Prompt Question */}
        <div className="text-base font-extrabold text-amber-300 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          {scene.promptQuestion}
        </div>

        {/* Choices List */}
        <div className="flex flex-col gap-3">
          {scene.choices.map((choice, idx) => {
            const letters = ['A', 'B', 'C', 'D'];
            const isSelected = selectedChoice?.id === choice.id;

            return (
              <button
                key={choice.id}
                disabled={!!selectedChoice}
                onClick={() => handleSelectChoice(choice)}
                className={`w-full p-4 rounded-2xl border text-left transition-all flex items-start gap-3 relative overflow-hidden ${
                  isSelected
                    ? 'bg-amber-950/40 border-amber-500 shadow-lg shadow-amber-500/10'
                    : selectedChoice
                    ? 'bg-slate-900/40 border-slate-800/60 opacity-60'
                    : 'bg-slate-900 border-slate-800 hover:border-amber-500/40 hover:bg-slate-800/80'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center shrink-0 transition ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950'
                      : 'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}
                >
                  {isSelected ? <Check className="w-4 h-4 stroke-[3]" /> : letters[idx]}
                </div>
                <span className="text-sm text-slate-200 leading-snug font-medium pt-0.5">
                  {choice.text}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Choice Consequence & Biblical Principle */}
        {selectedChoice && (
          <div className="flex flex-col gap-4 animate-fadeIn pt-2">
            {/* Consequence Section */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-amber-500/30 flex flex-col gap-3">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Shield className="w-4 h-4" />
                SUA DECISÃO
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {selectedChoice.consequence}
              </p>

              {/* Effects list */}
              <div className="flex flex-wrap gap-2 pt-1">
                {Object.entries(selectedChoice.effects).map(([key, val]) =>
                  val ? renderEffectBadge(key, Number(val)) : null
                )}
              </div>
            </div>

            {/* Biblical Principle Section */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950/40 border border-indigo-500/30 flex flex-col gap-2.5 shadow-lg">
              <div className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-indigo-400" />
                À LUZ DA BÍBLIA
              </div>
              <div className="text-sm font-bold text-slate-100">{selectedChoice.biblicalPrinciple}</div>
              <span className="text-xs font-bold text-amber-400">{selectedChoice.biblicalReference}</span>
              <p className="text-xs text-slate-300 leading-relaxed italic">
                "{selectedChoice.biblicalExplanation}"
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleNextScene}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:brightness-110 active:scale-[0.99] transition flex items-center justify-center gap-2 mt-2"
            >
              <span>{isLastScene ? 'VER RESULTADO DA HISTÓRIA' : 'AVANÇAR NA HISTÓRIA'}</span>
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        )}
      </main>
    </div>
  );
};
