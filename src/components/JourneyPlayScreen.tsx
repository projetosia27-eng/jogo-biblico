import { ArrowLeft, BookOpen, CheckCircle2, ChevronRight, Compass, Heart, Shield, Sparkles, Trophy, Zap } from 'lucide-react';
import React, { useState } from 'react';
import { ChoiceOption, JourneyMoment, StoryJourney } from '../data/journeys';
import { GameSessionResult, PlayerAttributes } from '../types';
import { soundFx } from '../utils/sound';

interface JourneyPlayScreenProps {
  journey: StoryJourney;
  onFinishJourney: (result: GameSessionResult) => void;
  onBack: () => void;
}

export const JourneyPlayScreen: React.FC<JourneyPlayScreenProps> = ({
  journey,
  onFinishJourney,
  onBack,
}) => {
  const [currentMomentIndex, setCurrentMomentIndex] = useState<number>(0);
  const [selectedChoice, setSelectedChoice] = useState<ChoiceOption | null>(null);
  const [sessionAttributes, setSessionAttributes] = useState<PlayerAttributes>({
    fe: 0,
    coragem: 0,
    sabedoria: 0,
    misericordia: 0,
  });
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const currentMoment: JourneyMoment = journey.moments[currentMomentIndex] || journey.moments[0];
  const totalMoments = journey.moments.length;

  const handleSelectChoice = (choice: ChoiceOption) => {
    if (selectedChoice) return; // prevent double taps
    soundFx.playClick();
    soundFx.vibrate(35);

    setSelectedChoice(choice);
    setSessionAttributes((prev) => ({
      fe: prev.fe + choice.effects.fe,
      coragem: prev.coragem + choice.effects.coragem,
      sabedoria: prev.sabedoria + choice.effects.sabedoria,
      misericordia: prev.misericordia + choice.effects.misericordia,
    }));
  };

  const handleNextMoment = () => {
    soundFx.playClick();
    if (currentMomentIndex + 1 < totalMoments) {
      setSelectedChoice(null);
      setCurrentMomentIndex((prev) => prev + 1);
    } else {
      soundFx.playLevelUp();
      setIsFinished(true);
    }
  };

  // Determine dominant profile
  const getDominantProfile = () => {
    const { fe, coragem, sabedoria, misericordia } = sessionAttributes;
    const maxVal = Math.max(fe, coragem, sabedoria, misericordia);

    if (misericordia === maxVal) {
      return {
        title: 'CORAÇÃO MISERICORDIOSO',
        desc: 'Durante esta jornada, suas decisões demonstraram forte tendência ao perdão, à empatia e à compaixão em momentos de conflito.',
        color: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
      };
    }
    if (sabedoria === maxVal) {
      return {
        title: 'PRUDENTE E ESTRATÉGICO',
        desc: 'Suas decisões priorizaram a análise, a observação do cenário e o planejamento antes de qualquer reação impulsiva.',
        color: 'text-indigo-300 bg-indigo-500/10 border-indigo-500/30',
      };
    }
    if (coragem === maxVal) {
      return {
        title: 'LÍDER CORAJOSO',
        desc: 'Sua jornada refletiu prontidão para agir com firmeza diante de grandes desafios e adversidades inesperadas.',
        color: 'text-amber-300 bg-amber-500/10 border-amber-500/30',
      };
    }
    return {
      title: 'HOMEM DE FÉ INABALÁVEL',
      desc: 'Sua conduta colocou em primeiro lugar a confiança plena no propósito divino e na soberania do Criador.',
      color: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/30',
    };
  };

  const handleCompleteAll = () => {
    soundFx.playClick();
    const dominant = getDominantProfile();
    onFinishJourney({
      mode: 'journey',
      title: `Jornada: ${journey.title}`,
      subtitle: journey.subtitle,
      xpEarned: 250,
      coinsEarned: 150,
      attributesGained: sessionAttributes,
      finalProfileName: dominant.title,
      finalProfileDescription: dominant.desc,
      bibleReference: '📖 Gênesis 37 - 50',
    });
  };

  if (isFinished) {
    const dominant = getDominantProfile();

    return (
      <div className="w-full min-h-[calc(100vh-60px)] flex flex-col justify-between p-4 max-w-md mx-auto pb-8 animate-fade-in space-y-4">
        {/* Header */}
        <div className="text-center space-y-2 pt-2">
          <div className="w-16 h-16 mx-auto rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 p-1 shadow-2xl shadow-amber-500/30 flex items-center justify-center">
            <div className="w-full h-full rounded-[22px] bg-slate-950 flex items-center justify-center">
              <Trophy className="w-8 h-8 text-amber-400" />
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-extrabold text-[10px] uppercase tracking-wider">
            JORNADA CONCLUÍDA
          </span>
          <h1 className="text-2xl font-black text-white font-game">{journey.title}</h1>
          <p className="text-xs text-slate-300">{journey.subtitle}</p>
        </div>

        {/* Profile Result Card */}
        <div className="space-y-3">
          <div className={`p-4 rounded-3xl border text-center space-y-2 ${dominant.color}`}>
            <span className="text-[10px] font-black uppercase tracking-wider block opacity-80">
              Seu Perfil nesta Jornada
            </span>
            <h2 className="text-lg font-black font-game">{dominant.title}</h2>
            <p className="text-xs leading-relaxed text-slate-200">{dominant.desc}</p>
          </div>

          {/* Attributes Scores Breakdown */}
          <div className="p-4 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
            <h3 className="text-xs font-black text-slate-300 uppercase tracking-wider text-center">
              Atributos Desenvolvidos
            </h3>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> Fé
                </span>
                <span className="text-sm font-black text-white font-mono">+{sessionAttributes.fe}</span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                  <Zap className="w-4 h-4" /> Coragem
                </span>
                <span className="text-sm font-black text-white font-mono">+{sessionAttributes.coragem}</span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-400 flex items-center gap-1.5">
                  <Shield className="w-4 h-4" /> Sabedoria
                </span>
                <span className="text-sm font-black text-white font-mono">+{sessionAttributes.sabedoria}</span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-bold text-rose-400 flex items-center gap-1.5">
                  <Heart className="w-4 h-4" /> Misericórdia
                </span>
                <span className="text-sm font-black text-white font-mono">+{sessionAttributes.misericordia}</span>
              </div>
            </div>
          </div>

          {/* Reward Summary */}
          <div className="p-4 rounded-3xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-slate-900 border border-amber-500/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-amber-500 text-slate-950 font-black">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold text-amber-400 uppercase block">
                  Recompensa da Jornada
                </span>
                <span className="text-xs font-bold text-white">+250 XP • +150 Moedas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleCompleteAll}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-xl shadow-amber-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 game-btn-3d"
        >
          <span>RECEBER RECOMPENSA</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[calc(100vh-60px)] flex flex-col justify-between p-4 max-w-md mx-auto pb-8 animate-fade-in space-y-4">
      {/* Top Bar Navigation */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              soundFx.playClick();
              onBack();
            }}
            className="p-2 rounded-2xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 active:scale-95 transition-all flex items-center gap-1.5 text-xs font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Sair</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-amber-400 font-game uppercase">
              {journey.title}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[10px] font-bold border border-slate-700">
              {currentMomentIndex + 1}/{totalMoments}
            </span>
          </div>
        </div>

        {/* Chapter Transition Banner */}
        {currentMoment.transitionBanner && (
          <div className="p-2.5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-indigo-950 to-slate-900 border border-amber-500/30 text-center animate-pulse-subtle">
            <span className="text-[10px] font-black tracking-widest text-amber-300 uppercase flex items-center justify-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              {currentMoment.transitionBanner}
            </span>
          </div>
        )}
      </div>

      {/* Main Narrative Content Card */}
      <div className="space-y-3 my-auto">
        {/* Narrative Text */}
        <div className="p-4 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-extrabold text-indigo-400 uppercase tracking-wider">
              Capítulo {currentMoment.chapterNumber}: {currentMoment.chapterTitle}
            </span>
            <span className="text-[10px] font-bold text-slate-400">
              {currentMoment.location}
            </span>
          </div>

          <p className="text-xs text-slate-200 leading-relaxed font-medium">
            {currentMoment.narrativeText}
          </p>

          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-1">
            <span className="text-[10px] font-extrabold text-amber-400 uppercase block">
              A Situação
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentMoment.situationText}
            </p>
          </div>
        </div>

        {/* Prompt Question */}
        <div className="text-center py-1">
          <span className="text-xs font-black text-amber-300 uppercase tracking-wider bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 inline-block">
            {currentMoment.promptQuestion}
          </span>
        </div>

        {/* Choices or Outcome */}
        {!selectedChoice ? (
          /* Decision Choices List */
          <div className="space-y-2.5">
            {currentMoment.choices.map((choice, idx) => (
              <button
                key={choice.id}
                onClick={() => handleSelectChoice(choice)}
                className="w-full p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950/70 border border-indigo-500/30 hover:border-amber-500 text-left transition-all active:scale-[0.98] group flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-black flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  {idx + 1}
                </div>
                <p className="text-xs text-slate-100 font-bold leading-snug">
                  {choice.text}
                </p>
              </button>
            ))}
          </div>
        ) : (
          /* Consequence & Biblical Truth Panel */
          <div className="space-y-3 animate-fade-in">
            {/* Attribute Gain Feedback Banner */}
            <div className="p-3 rounded-2xl bg-gradient-to-r from-emerald-950/80 to-slate-900 border border-emerald-500/40 flex items-center justify-between">
              <span className="text-[11px] font-extrabold text-emerald-300 uppercase flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Decisão Registrada
              </span>
              <div className="flex items-center gap-2 text-xs font-black">
                {selectedChoice.effects.misericordia > 0 && (
                  <span className="text-rose-400">+{selectedChoice.effects.misericordia} Misericórdia</span>
                )}
                {selectedChoice.effects.sabedoria > 0 && (
                  <span className="text-indigo-300">+{selectedChoice.effects.sabedoria} Sabedoria</span>
                )}
                {selectedChoice.effects.fe > 0 && (
                  <span className="text-emerald-300">+{selectedChoice.effects.fe} Fé</span>
                )}
                {selectedChoice.effects.coragem > 0 && (
                  <span className="text-amber-300">+{selectedChoice.effects.coragem} Coragem</span>
                )}
              </div>
            </div>

            {/* Hypothetical Consequence Card */}
            <div className="p-4 rounded-3xl bg-indigo-950/60 border border-indigo-500/40 space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 block">
                NA SUA JORNADA
              </span>
              <p className="text-xs text-slate-200 leading-relaxed font-medium">
                {selectedChoice.hypotheticalConsequence}
              </p>
            </div>

            {/* Biblical Truth Summary Card */}
            <div className="p-4 rounded-3xl bg-slate-900 border border-amber-500/40 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  NO RELATO BÍBLICO
                </span>
                <span className="text-[10px] font-mono font-bold text-amber-400">
                  {currentMoment.bibleReference}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {currentMoment.biblicalTruthSummary}
              </p>
            </div>

            {/* Next Chapter Button */}
            <button
              onClick={handleNextMoment}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-xl shadow-amber-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 game-btn-3d"
            >
              <span>
                {currentMomentIndex + 1 < totalMoments
                  ? 'CONTINUAR PARA O PRÓXIMO CAPÍTULO'
                  : 'VER PERFIL FINAL DA JORNADA'}
              </span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
