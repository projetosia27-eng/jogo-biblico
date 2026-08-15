import React, { useState, useEffect } from 'react';
import { Screen, UserStats, GameSession, Achievement, CategoryId, Question, JOURNEY_SCORE_LADDER, UserProfileType } from './types';
import { QUESTIONS } from './data/questions';
import { CATEGORIES } from './data/categories';
import {
  loadUserStats,
  saveUserStats,
  loadAchievements,
  saveAchievements,
  addXpAndCoins,
  consumeLife,
  recordDailyPlay,
  checkAndEvaluateAchievements,
  saveActiveJourney,
  loadActiveJourney,
  clearActiveJourney,
  loadRecentQuestionIds,
  addRecentQuestionIds,
} from './utils/storage';
import { getDailyChallengeQuestions } from './utils/dailyChallenge';
import { pickJourneyQuestions } from './utils/profileDifficulty';
import { soundFx } from './utils/sound';

import { MobileFrame } from './components/MobileFrame';
import { HeaderTopBar } from './components/HeaderTopBar';
import { SplashScreen } from './components/SplashScreen';
import { HomeScreen } from './components/HomeScreen';
import { CategoriesScreen } from './components/CategoriesScreen';
import { GameScreen } from './components/GameScreen';
import { ResultScreen } from './components/ResultScreen';

import { DailyChallengeModal } from './components/DailyChallengeModal';
import { AchievementsModal } from './components/AchievementsModal';
import { AchievementUnlockedModal } from './components/AchievementUnlockedModal';
import { SettingsModal } from './components/SettingsModal';
import { ProfileSelectionModal } from './components/ProfileSelectionModal';
import { LevelUpModal } from './components/LevelUpModal';
import { FirstGameBonusModal } from './components/FirstGameBonusModal';

export default function App() {
  const [screen, setScreen] = useState<Screen>('splash');
  const [stats, setStats] = useState<UserStats>(loadUserStats());
  const [achievements, setAchievements] = useState<Achievement[]>(loadAchievements());
  const [session, setSession] = useState<GameSession | null>(null);
  const [activeJourneySession, setActiveJourneySession] = useState<GameSession | null>(loadActiveJourney());

  // Modals state
  const [showDailyModal, setShowDailyModal] = useState<boolean>(false);
  const [showAchievementsModal, setShowAchievementsModal] = useState<boolean>(false);
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);
  const [showProfileModal, setShowProfileModal] = useState<boolean>(false);

  // Progression & Notification Modals
  const [showLevelUpModal, setShowLevelUpModal] = useState<boolean>(false);
  const [levelUpVal, setLevelUpVal] = useState<number>(1);
  const [showFirstGameModal, setShowFirstGameModal] = useState<boolean>(false);
  const [unlockedNotification, setUnlockedNotification] = useState<Achievement | null>(null);

  // Result screen level up tracker
  const [leveledUp, setLeveledUp] = useState<boolean>(false);
  const [newLevel, setNewLevel] = useState<number>(1);

  // Register PWA Service Worker on mount
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch((err) => {
        console.log('SW registration failed:', err);
      });
    }
  }, []);

  // Sync sound setting
  useEffect(() => {
    soundFx.enabled = stats.soundEnabled;
  }, [stats.soundEnabled]);

  const updateStatsState = (newStats: UserStats) => {
    setStats(newStats);
    saveUserStats(newStats);
  };

  // Helper to trigger achievement checks and display modal if unlocked
  const evaluateAchievements = (currentStats: UserStats) => {
    const { updatedAchievements, newlyUnlocked } = checkAndEvaluateAchievements(
      currentStats,
      achievements
    );
    setAchievements(updatedAchievements);
    if (newlyUnlocked.length > 0) {
      setUnlockedNotification(newlyUnlocked[0]);
    }
  };

  // Start Standard Quiz Session
  const handleStartQuiz = (categoryId: CategoryId | 'diario' = 'geral') => {
    if (stats.lives <= 0) {
      soundFx.playWrong();
      return;
    }

    const todayStr = new Date().toISOString().split('T')[0];

    // Record daily play streak & deduct 1 energy life
    const streakStats = recordDailyPlay(stats);
    const updatedStats = consumeLife(streakStats);
    updateStatsState(updatedStats);

    let pickedQuestions: Question[] = [];
    let catName = 'Geral';

    if (categoryId === 'diario') {
      catName = 'Desafio Diário';
      pickedQuestions = getDailyChallengeQuestions(todayStr);
    } else if (categoryId !== 'geral') {
      const filtered = QUESTIONS.filter((q) => q.categoryId === categoryId);
      const catObj = CATEGORIES.find((c) => c.id === categoryId);
      if (catObj) catName = catObj.name;

      const randomPicked = [...filtered].sort(() => 0.5 - Math.random()).slice(0, 5);
      const diffWeight: Record<Question['difficulty'], number> = { facil: 1, medio: 2, dificil: 3 };
      pickedQuestions = randomPicked.sort((a, b) => diffWeight[a.difficulty] - diffWeight[b.difficulty]);
    } else {
      const randomPicked = [...QUESTIONS].sort(() => 0.5 - Math.random()).slice(0, 5);
      const diffWeight: Record<Question['difficulty'], number> = { facil: 1, medio: 2, dificil: 3 };
      pickedQuestions = randomPicked.sort((a, b) => diffWeight[a.difficulty] - diffWeight[b.difficulty]);
    }

    const isDailyAlreadyDone = categoryId === 'diario' && stats.dailyChallengeCompletedDate === todayStr;

    const newSession: GameSession = {
      categoryId,
      categoryName: catName,
      questions: pickedQuestions,
      currentIndex: 0,
      score: 0,
      combo: 0,
      maxCombo: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      livesLeft: 3,
      coinsEarned: categoryId === 'diario' ? (isDailyAlreadyDone ? 20 : 50) : 20,
      xpEarned: categoryId === 'diario' ? (isDailyAlreadyDone ? 40 : 100) : 40,
      isDailyChallenge: categoryId === 'diario',
      isJourney: false,
      isFinished: false,
    };

    setSession(newSession);
    setShowDailyModal(false);
    setScreen('game');
  };

  // Start Journey Mode Session with Profile Difficulty Curve
  const handleStartJourney = () => {
    if (stats.lives <= 0) {
      soundFx.playWrong();
      return;
    }

    // Record daily play streak & deduct 1 energy life
    const streakStats = recordDailyPlay(stats);
    const updatedStats = consumeLife(streakStats);
    updateStatsState(updatedStats);

    // Get recent question IDs to avoid repeats
    const recentIds = loadRecentQuestionIds();
    const userProfile = stats.userProfile || 'jovem';

    // Pick 15 questions tailored to user profile and level 1-15
    const picked15 = pickJourneyQuestions(userProfile, QUESTIONS, recentIds);

    // Save newly picked IDs to recent history
    addRecentQuestionIds(picked15.map((q) => q.id));

    const journeySession: GameSession = {
      categoryId: 'jornada',
      categoryName: 'Jornada Bíblica',
      questions: picked15,
      currentIndex: 0,
      score: 0,
      combo: 0,
      maxCombo: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      livesLeft: 1, // 1 mistake ends the journey
      coinsEarned: 0,
      xpEarned: 0,
      isDailyChallenge: false,
      isJourney: true,
      guaranteedScore: 0,
      checkpointReached: 0,
      helpsUsed: { fiftyFifty: false, trocar: false, dica: false },
      activeHint: null,
      isFinished: false,
    };

    saveActiveJourney(journeySession);
    setActiveJourneySession(journeySession);
    setSession(journeySession);
    setScreen('game');
  };

  // Resume active saved Journey session
  const handleResumeJourney = () => {
    const saved = loadActiveJourney();
    if (saved && !saved.isFinished) {
      setSession(saved);
      setActiveJourneySession(saved);
      setScreen('game');
    } else {
      handleStartJourney();
    }
  };

  // Journey Help Booster Actions
  const handleUseJourneyHelp = (
    helpType: 'fiftyFifty' | 'trocar' | 'dica',
    newQuestion?: Question
  ) => {
    if (!session || !session.isJourney) return;

    const currentHelps = session.helpsUsed || { fiftyFifty: false, trocar: false, dica: false };
    let updatedQuestions = [...session.questions];
    let updatedHint = session.activeHint;

    if (helpType === 'fiftyFifty') {
      currentHelps.fiftyFifty = true;
    } else if (helpType === 'trocar' && newQuestion) {
      currentHelps.trocar = true;
      updatedQuestions[session.currentIndex] = newQuestion;
      updatedHint = null; // reset active hint on replaced question
    } else if (helpType === 'dica') {
      currentHelps.dica = true;
      updatedHint = session.questions[session.currentIndex]?.hint || null;
    }

    const updatedSession: GameSession = {
      ...session,
      questions: updatedQuestions,
      helpsUsed: currentHelps,
      activeHint: updatedHint,
    };

    setSession(updatedSession);
    saveActiveJourney(updatedSession);
    setActiveJourneySession(updatedSession);
  };

  // Answer Question Logic
  const handleAnswerQuestion = (
    isCorrect: boolean,
    pointsEarned: number,
    isFastAnswer: boolean = false
  ) => {
    if (!session) return;

    const isJourneyMode = Boolean(session.isJourney);
    const qNum = session.currentIndex + 1;

    const newCombo = isCorrect ? session.combo + 1 : 0;
    const newMaxCombo = Math.max(session.maxCombo, newCombo);
    const newCorrect = isCorrect ? session.correctAnswers + 1 : session.correctAnswers;
    const newWrong = isCorrect ? session.wrongAnswers : session.wrongAnswers + 1;

    let addedScore = session.score;
    let newGuaranteed = session.guaranteedScore || 0;
    let newCheckpoint = session.checkpointReached || 0;

    if (isJourneyMode) {
      if (isCorrect) {
        addedScore = JOURNEY_SCORE_LADDER[session.currentIndex] || 100;
        if (qNum === 5) {
          newGuaranteed = 1000;
          newCheckpoint = 5;
        } else if (qNum === 10) {
          newGuaranteed = 10000;
          newCheckpoint = 10;
        } else if (qNum === 15) {
          newGuaranteed = 100000;
          newCheckpoint = 15;
        }
      }
    } else {
      addedScore = session.score + pointsEarned;
    }

    const newLivesLeft = isCorrect ? session.livesLeft : Math.max(0, session.livesLeft - 1);

    const coinBonus = isCorrect ? (isJourneyMode ? qNum * 10 : session.isDailyChallenge ? 20 : 10) : 0;
    const xpBonus = isCorrect ? (isJourneyMode ? qNum * 20 : session.isDailyChallenge ? 40 : 20) : 0;

    const updatedSession: GameSession = {
      ...session,
      score: addedScore,
      guaranteedScore: newGuaranteed,
      checkpointReached: newCheckpoint,
      combo: newCombo,
      maxCombo: newMaxCombo,
      correctAnswers: newCorrect,
      wrongAnswers: newWrong,
      livesLeft: newLivesLeft,
      coinsEarned: session.coinsEarned + coinBonus,
      xpEarned: session.xpEarned + xpBonus,
    };

    setSession(updatedSession);

    // Update stats live
    const newMaxJourneyReached = isJourneyMode
      ? Math.max(stats.maxJourneyQuestionReached || 0, isCorrect ? qNum : qNum - 1)
      : stats.maxJourneyQuestionReached || 0;

    const newJourneysCompleted = isJourneyMode && isCorrect && qNum === 15
      ? (stats.journeysCompleted || 0) + 1
      : stats.journeysCompleted || 0;

    const updatedTotalStats: UserStats = {
      ...stats,
      totalAnswered: stats.totalAnswered + 1,
      totalCorrect: isCorrect ? stats.totalCorrect + 1 : stats.totalCorrect,
      totalWrong: isCorrect ? stats.totalWrong : (stats.totalWrong || 0) + 1,
      fastAnswerCount: isCorrect && isFastAnswer ? (stats.fastAnswerCount || 0) + 1 : (stats.fastAnswerCount || 0),
      maxCombo: Math.max(stats.maxCombo, newMaxCombo),
      maxJourneyQuestionReached: newMaxJourneyReached,
      journeysCompleted: newJourneysCompleted,
    };

    updateStatsState(updatedTotalStats);
    evaluateAchievements(updatedTotalStats);

    if (isJourneyMode) {
      if (isCorrect) {
        saveActiveJourney(updatedSession);
        setActiveJourneySession(updatedSession);
      } else {
        // Incorrect answer in Journey ends the journey session!
        clearActiveJourney();
        setActiveJourneySession(null);
        finishGameSession(updatedSession);
      }
    }
  };

  // Next Question or Finish Game
  const handleNextQuestion = () => {
    if (!session) return;

    if (session.livesLeft <= 0 || session.currentIndex + 1 >= session.questions.length) {
      if (session.isJourney) {
        clearActiveJourney();
        setActiveJourneySession(null);
      }
      finishGameSession(session);
    } else {
      const updatedSess = {
        ...session,
        currentIndex: session.currentIndex + 1,
        activeHint: null, // Reset hint view on next question
      };
      setSession(updatedSess);
      if (session.isJourney) {
        saveActiveJourney(updatedSess);
        setActiveJourneySession(updatedSess);
      }
    }
  };

  // Quit Game Action
  const handleQuitGame = (abandonJourney: boolean = false) => {
    if (!session) {
      setScreen('home');
      return;
    }

    if (session.isJourney) {
      clearActiveJourney();
      setActiveJourneySession(null);
      finishGameSession(session);
    } else {
      setScreen('home');
    }
  };

  const finishGameSession = (currentSess?: GameSession) => {
    const sess = currentSess || session;
    if (!sess) return;

    const todayStr = new Date().toISOString().split('T')[0];
    const isJourneyMode = Boolean(sess.isJourney);

    // Score awarded: for Journey, if not completed Q15, player gets guaranteed checkpoint score
    const finalMatchScore = isJourneyMode
      ? (sess.correctAnswers >= 15 ? 100000 : sess.guaranteedScore || 0)
      : sess.score;

    const isNewRec = finalMatchScore > stats.highScore && finalMatchScore > 0;

    // Daily challenge extra rewards
    let extraXp = 0;
    let extraCoins = 0;
    let updatedDailyDate = stats.dailyChallengeCompletedDate;
    let updatedDailyCount = stats.dailyChallengesCompleted || 0;

    if (sess.isDailyChallenge && stats.dailyChallengeCompletedDate !== todayStr) {
      extraXp = 200;
      extraCoins = 100;
      updatedDailyDate = todayStr;
      updatedDailyCount += 1;
    }

    // Apply XP & Coins to user stats
    const { updatedStats, leveledUp: lvlUp, newLevel: nLvl } = addXpAndCoins(
      stats,
      sess.xpEarned + extraXp,
      sess.coinsEarned + extraCoins
    );

    const categoryKey = sess.categoryId;
    const completedCatMap = { ...updatedStats.completedCategories };
    if (categoryKey !== 'diario' && categoryKey !== 'geral' && categoryKey !== 'jornada') {
      completedCatMap[categoryKey as CategoryId] = (completedCatMap[categoryKey as CategoryId] || 0) + 1;
    }

    const finalStats: UserStats = {
      ...updatedStats,
      highScore: Math.max(updatedStats.highScore, finalMatchScore),
      maxCombo: Math.max(updatedStats.maxCombo, sess.maxCombo),
      matchesPlayed: updatedStats.matchesPlayed + 1,
      dailyChallengeCompletedDate: updatedDailyDate,
      dailyChallengesCompleted: updatedDailyCount,
      completedCategories: completedCatMap,
    };

    updateStatsState(finalStats);
    setLeveledUp(lvlUp);
    setNewLevel(nLvl);

    const finishedSession: GameSession = {
      ...sess,
      score: finalMatchScore,
      coinsEarned: sess.coinsEarned + extraCoins,
      xpEarned: sess.xpEarned + extraXp,
      isFinished: true,
      isNewRecord: isNewRec,
    };

    setSession(finishedSession);
    evaluateAchievements(finalStats);

    if (!finalStats.firstMatchBonusClaimed) {
      setShowFirstGameModal(true);
    } else if (lvlUp) {
      setLevelUpVal(nLvl);
      setShowLevelUpModal(true);
    }

    setScreen('result');
  };

  const handleClaimFirstGameReward = () => {
    const { updatedStats } = addXpAndCoins(stats, 200, 100);
    const finalStats: UserStats = {
      ...updatedStats,
      firstMatchBonusClaimed: true,
    };
    updateStatsState(finalStats);
    setShowFirstGameModal(false);

    if (leveledUp) {
      setLevelUpVal(newLevel);
      setShowLevelUpModal(true);
    }
  };

  // Claim achievement reward
  const handleClaimReward = (achievementId: string) => {
    const ach = achievements.find((a) => a.id === achievementId);
    if (!ach || ach.claimed || !ach.unlocked) return;

    const { updatedStats } = addXpAndCoins(stats, ach.rewardXP, ach.rewardCoins);
    updateStatsState(updatedStats);

    const updated = achievements.map((a) => (a.id === achievementId ? { ...a, claimed: true } : a));
    setAchievements(updated);
    saveAchievements(updated);
  };

  // Claim streak milestone reward
  const handleClaimStreakReward = (days: number, xp: number, coins: number) => {
    const claimed = stats.claimedStreakMilestones || [];
    if (claimed.includes(days)) return;

    const { updatedStats } = addXpAndCoins(stats, xp, coins);
    const finalStats: UserStats = {
      ...updatedStats,
      claimedStreakMilestones: [...claimed, days],
    };

    updateStatsState(finalStats);
  };

  // Reset all game data
  const handleResetProgress = () => {
    localStorage.clear();
    const fresh = loadUserStats();
    setStats(fresh);
    setAchievements(loadAchievements());
    setSession(null);
    setActiveJourneySession(null);
    setScreen('home');
  };

  return (
    <MobileFrame>
      {/* Top Header Status Bar */}
      {screen !== 'splash' && screen !== 'game' && (
        <HeaderTopBar
          stats={stats}
          onUpdateStats={updateStatsState}
          onOpenSettings={() => setShowSettingsModal(true)}
        />
      )}

      {/* Screen Views */}
      <main className="flex-1 flex flex-col">
        {screen === 'splash' && (
          <SplashScreen onStart={() => setScreen('home')} />
        )}

        {screen === 'home' && (
          <HomeScreen
            stats={stats}
            onStartQuiz={handleStartQuiz}
            onStartJourney={handleStartJourney}
            onResumeJourney={handleResumeJourney}
            hasActiveJourney={Boolean(activeJourneySession && !activeJourneySession.isFinished)}
            activeJourneyQuestion={(activeJourneySession?.currentIndex || 0) + 1}
            onOpenCategories={() => setScreen('categories')}
            onOpenDailyChallenge={() => setShowDailyModal(true)}
            onOpenAchievements={() => setShowAchievementsModal(true)}
            onOpenProfile={() => setShowProfileModal(true)}
            onOpenSettings={() => setShowSettingsModal(true)}
          />
        )}

        {screen === 'categories' && (
          <CategoriesScreen
            stats={stats}
            onSelectCategory={(catId) => handleStartQuiz(catId)}
            onBack={() => setScreen('home')}
          />
        )}

        {screen === 'game' && session && (
          <GameScreen
            session={session}
            stats={stats}
            onAnswer={handleAnswerQuestion}
            onNextQuestion={handleNextQuestion}
            onQuitGame={handleQuitGame}
            onUpdateStats={updateStatsState}
            onUseJourneyHelp={handleUseJourneyHelp}
            allQuestions={QUESTIONS}
          />
        )}

        {screen === 'result' && session && (
          <ResultScreen
            session={session}
            stats={stats}
            leveledUp={leveledUp}
            newLevel={newLevel}
            onPlayAgain={() => (session.isJourney ? handleStartJourney() : handleStartQuiz(session.categoryId))}
            onGoHome={() => setScreen('home')}
          />
        )}
      </main>

      {/* Modals */}
      {unlockedNotification && (
        <AchievementUnlockedModal
          achievement={unlockedNotification}
          onClose={() => setUnlockedNotification(null)}
        />
      )}

      {showFirstGameModal && (
        <FirstGameBonusModal onClaim={handleClaimFirstGameReward} />
      )}

      {showLevelUpModal && (
        <LevelUpModal
          level={levelUpVal}
          onClose={() => setShowLevelUpModal(false)}
        />
      )}

      {showDailyModal && (
        <DailyChallengeModal
          stats={stats}
          onClose={() => setShowDailyModal(false)}
          onStartDaily={() => handleStartQuiz('diario')}
          onClaimStreakReward={handleClaimStreakReward}
        />
      )}

      {showAchievementsModal && (
        <AchievementsModal
          achievements={achievements}
          stats={stats}
          onClose={() => setShowAchievementsModal(false)}
          onClaimReward={handleClaimReward}
        />
      )}

      {showProfileModal && (
        <ProfileSelectionModal
          currentProfile={stats.userProfile || 'jovem'}
          onSelectProfile={(profile) => {
            updateStatsState({ ...stats, userProfile: profile });
            setShowProfileModal(false);
          }}
          onClose={() => setShowProfileModal(false)}
        />
      )}

      {showSettingsModal && (
        <SettingsModal
          stats={stats}
          onClose={() => setShowSettingsModal(false)}
          onUpdateStats={updateStatsState}
          onResetProgress={handleResetProgress}
        />
      )}
    </MobileFrame>
  );
}
