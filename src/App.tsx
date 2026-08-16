import React, { useEffect, useState } from 'react';
import { Achievement, GameSessionResult, PlayerAttributes, RealLifeChoice, RealLifeStory, Screen, UserStats } from './types';
import {
  addXpAndCoins,
  checkAndEvaluateAchievements,
  loadAchievements,
  loadUserStats,
  recordDailyPlay,
  saveAchievements,
  saveUserStats,
} from './utils/storage';
import { soundFx } from './utils/sound';

import { AchievementUnlockedModal } from './components/AchievementUnlockedModal';
import { AchievementsModal } from './components/AchievementsModal';
import { DailyChallengeModal } from './components/DailyChallengeModal';
import { HeaderTopBar } from './components/HeaderTopBar';
import { HomeScreen } from './components/HomeScreen';
import { JourneyPlayScreen } from './components/JourneyPlayScreen';
import { JourneysListScreen } from './components/JourneysListScreen';
import { LevelUpModal } from './components/LevelUpModal';
import { MobileFrame } from './components/MobileFrame';
import { MysteriesListScreen } from './components/MysteriesListScreen';
import { MysteryPlayScreen } from './components/MysteryPlayScreen';
import { ProfileSelectionModal } from './components/ProfileSelectionModal';
import { RealLifeListScreen } from './components/RealLifeListScreen';
import { RealLifePlayScreen } from './components/RealLifePlayScreen';
import { RealLifeResultScreen } from './components/RealLifeResultScreen';
import { ResultScreen } from './components/ResultScreen';
import { SettingsModal } from './components/SettingsModal';
import { SplashScreen } from './components/SplashScreen';

import { StoryJourney } from './data/journeys';
import { MysteryItem } from './data/mysteries';

export default function App() {
  const [screen, setScreen] = useState<Screen>('splash');
  const [stats, setStats] = useState<UserStats>(loadUserStats());
  const [achievements, setAchievements] = useState<Achievement[]>(loadAchievements());

  // Game Mode Selection State
  const [selectedJourney, setSelectedJourney] = useState<StoryJourney | null>(null);
  const [selectedMystery, setSelectedMystery] = useState<MysteryItem | null>(null);
  const [selectedRealLifeStory, setSelectedRealLifeStory] = useState<RealLifeStory | null>(null);
  const [realLifeEffectsGained, setRealLifeEffectsGained] = useState<Partial<PlayerAttributes>>({});
  const [gameResult, setGameResult] = useState<GameSessionResult | null>(null);

  // Modals state
  const [showDailyModal, setShowDailyModal] = useState<boolean>(false);
  const [showAchievementsModal, setShowAchievementsModal] = useState<boolean>(false);
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);
  const [showProfileModal, setShowProfileModal] = useState<boolean>(false);

  // Progression & Notification Modals
  const [showLevelUpModal, setShowLevelUpModal] = useState<boolean>(false);
  const [levelUpVal, setLevelUpVal] = useState<number>(1);
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

  // Real Life Finish Handler
  const handleFinishRealLifeStory = (
    accumulatedEffects: Partial<PlayerAttributes>,
    _choicesMade: RealLifeChoice[]
  ) => {
    if (!selectedRealLifeStory) return;

    const streakStats = recordDailyPlay(stats);
    const xpReward = selectedRealLifeStory.completionReward.xp;
    const coinsReward = selectedRealLifeStory.completionReward.coins;

    const { updatedStats, leveledUp: lvlUp, newLevel: nLvl } = addXpAndCoins(
      streakStats,
      xpReward,
      coinsReward
    );

    const isReplay = updatedStats.completedRealLifeStoryIds?.includes(selectedRealLifeStory.id);

    const currentAttrs = updatedStats.attributes || {
      fe: 0,
      coragem: 0,
      sabedoria: 0,
      misericordia: 0,
      integridade: 0,
    };

    const updatedCompletedIds = Array.from(
      new Set([...(updatedStats.completedRealLifeStoryIds || []), selectedRealLifeStory.id])
    );

    const finalStats: UserStats = {
      ...updatedStats,
      realLifeCompletedCount: (updatedStats.realLifeCompletedCount || 0) + 1,
      replayedStoryCount: isReplay
        ? (updatedStats.replayedStoryCount || 0) + 1
        : updatedStats.replayedStoryCount || 0,
      completedRealLifeStoryIds: updatedCompletedIds,
      attributes: {
        fe: currentAttrs.fe + (accumulatedEffects.fe || 0),
        coragem: currentAttrs.coragem + (accumulatedEffects.coragem || 0),
        sabedoria: currentAttrs.sabedoria + (accumulatedEffects.sabedoria || 0),
        misericordia: currentAttrs.misericordia + (accumulatedEffects.misericordia || 0),
        integridade: (currentAttrs.integridade || 0) + (accumulatedEffects.integridade || 0),
      },
    };

    updateStatsState(finalStats);
    evaluateAchievements(finalStats);

    setLeveledUp(lvlUp);
    setNewLevel(nLvl);
    if (lvlUp) {
      setLevelUpVal(nLvl);
      setShowLevelUpModal(true);
    }

    setRealLifeEffectsGained(accumulatedEffects);
    setScreen('real-life-result');
  };

  // Journey Finish Handler
  const handleFinishJourney = (result: GameSessionResult) => {
    const streakStats = recordDailyPlay(stats);
    const { updatedStats, leveledUp: lvlUp, newLevel: nLvl } = addXpAndCoins(
      streakStats,
      result.xpEarned,
      result.coinsEarned
    );

    // Combine attributes
    const curAttr = updatedStats.attributes || { fe: 0, coragem: 0, sabedoria: 0, misericordia: 0, integridade: 0 };
    const gainedAttr = result.attributesGained || { fe: 0, coragem: 0, sabedoria: 0, misericordia: 0, integridade: 0 };

    const finalStats: UserStats = {
      ...updatedStats,
      journeysCompleted: (updatedStats.journeysCompleted || 0) + 1,
      decisionsMade: (updatedStats.decisionsMade || 0) + 5,
      attributes: {
        fe: curAttr.fe + (gainedAttr.fe || 0),
        coragem: curAttr.coragem + (gainedAttr.coragem || 0),
        sabedoria: curAttr.sabedoria + (gainedAttr.sabedoria || 0),
        misericordia: curAttr.misericordia + (gainedAttr.misericordia || 0),
        integridade: (curAttr.integridade || 0) + (gainedAttr.integridade || 0),
      },
    };

    updateStatsState(finalStats);
    evaluateAchievements(finalStats);

    setLeveledUp(lvlUp);
    setNewLevel(nLvl);
    if (lvlUp) {
      setLevelUpVal(nLvl);
      setShowLevelUpModal(true);
    }

    setGameResult(result);
    setScreen('result');
  };

  // Mystery Finish Handler
  const handleFinishMystery = (result: GameSessionResult) => {
    const streakStats = recordDailyPlay(stats);
    const { updatedStats, leveledUp: lvlUp, newLevel: nLvl } = addXpAndCoins(
      streakStats,
      result.xpEarned,
      result.coinsEarned
    );

    const finalStats: UserStats = {
      ...updatedStats,
      mysteriesSolved: (updatedStats.mysteriesSolved || 0) + 1,
    };

    updateStatsState(finalStats);
    evaluateAchievements(finalStats);

    setLeveledUp(lvlUp);
    setNewLevel(nLvl);
    if (lvlUp) {
      setLevelUpVal(nLvl);
      setShowLevelUpModal(true);
    }

    setGameResult(result);
    setScreen('result');
  };

  // Daily Challenge Finish Handler
  const handleCompleteDailyChallenge = (xpEarned: number, coinsEarned: number) => {
    const todayStr = new Date().toISOString().split('T')[0];
    const streakStats = recordDailyPlay(stats);

    const { updatedStats, leveledUp: lvlUp, newLevel: nLvl } = addXpAndCoins(
      streakStats,
      xpEarned,
      coinsEarned
    );

    const finalStats: UserStats = {
      ...updatedStats,
      dailyChallengeCompletedDate: todayStr,
      dailyChallengesCompleted: (updatedStats.dailyChallengesCompleted || 0) + 1,
      mysteriesSolved: (updatedStats.mysteriesSolved || 0) + 1,
    };

    updateStatsState(finalStats);
    evaluateAchievements(finalStats);

    if (lvlUp) {
      setLevelUpVal(nLvl);
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

  // Reset progress
  const handleResetProgress = () => {
    localStorage.clear();
    const fresh = loadUserStats();
    setStats(fresh);
    setAchievements(loadAchievements());
    setScreen('home');
  };

  return (
    <MobileFrame>
      {/* Top Header Status Bar */}
      {screen !== 'splash' && (
        <HeaderTopBar
          stats={stats}
          onUpdateStats={updateStatsState}
          onOpenSettings={() => setShowSettingsModal(true)}
        />
      )}

      {/* Main View Router */}
      <main className="flex-1 flex flex-col">
        {screen === 'splash' && (
          <SplashScreen onStart={() => setScreen('home')} />
        )}

        {screen === 'home' && (
          <HomeScreen
            stats={stats}
            onNavigate={(navScreen) => setScreen(navScreen)}
            onOpenDailyChallenge={() => setShowDailyModal(true)}
            onOpenAchievementsModal={() => setShowAchievementsModal(true)}
            onOpenProfileModal={() => setShowProfileModal(true)}
            onOpenSettingsModal={() => setShowSettingsModal(true)}
          />
        )}

        {screen === 'real-life-list' && (
          <RealLifeListScreen
            stats={stats}
            onSelectStory={(story) => {
              setSelectedRealLifeStory(story);
              setScreen('real-life-play');
            }}
            onBack={() => setScreen('home')}
          />
        )}

        {screen === 'real-life-play' && selectedRealLifeStory && (
          <RealLifePlayScreen
            story={selectedRealLifeStory}
            soundEnabled={stats.soundEnabled}
            vibrationEnabled={stats.vibrationEnabled}
            onFinishStory={handleFinishRealLifeStory}
            onBack={() => setScreen('real-life-list')}
          />
        )}

        {screen === 'real-life-result' && selectedRealLifeStory && (
          <RealLifeResultScreen
            story={selectedRealLifeStory}
            accumulatedEffects={realLifeEffectsGained}
            xpEarned={selectedRealLifeStory.completionReward.xp}
            coinsEarned={selectedRealLifeStory.completionReward.coins}
            onReplayStory={() => setScreen('real-life-play')}
            onComplete={() => setScreen('home')}
          />
        )}

        {screen === 'journeys' && (
          <JourneysListScreen
            onSelectJourney={(journey) => {
              setSelectedJourney(journey);
              setScreen('journey-play');
            }}
            onBack={() => setScreen('home')}
          />
        )}

        {screen === 'journey-play' && selectedJourney && (
          <JourneyPlayScreen
            journey={selectedJourney}
            onFinishJourney={handleFinishJourney}
            onBack={() => setScreen('journeys')}
          />
        )}

        {screen === 'mysteries' && (
          <MysteriesListScreen
            onSelectMystery={(mystery) => {
              setSelectedMystery(mystery);
              setScreen('mystery-play');
            }}
            onBack={() => setScreen('home')}
          />
        )}

        {screen === 'mystery-play' && selectedMystery && (
          <MysteryPlayScreen
            mystery={selectedMystery}
            onFinishMystery={handleFinishMystery}
            onBack={() => setScreen('mysteries')}
          />
        )}

        {screen === 'result' && gameResult && (
          <ResultScreen
            result={gameResult}
            stats={stats}
            leveledUp={leveledUp}
            newLevel={newLevel}
            onPlayAgain={() => {
              if (gameResult.mode === 'journey') setScreen('journeys');
              else setScreen('mysteries');
            }}
            onGoHome={() => setScreen('home')}
          />
        )}
      </main>

      {/* Modals & Popups */}
      {unlockedNotification && (
        <AchievementUnlockedModal
          achievement={unlockedNotification}
          onClose={() => setUnlockedNotification(null)}
        />
      )}

      {showLevelUpModal && (
        <LevelUpModal
          level={levelUpVal}
          onClose={() => setShowLevelUpModal(false)}
        />
      )}

      {showDailyModal && (
        <DailyChallengeModal
          completedToday={stats.dailyChallengeCompletedDate === new Date().toISOString().split('T')[0]}
          streakDays={stats.dailyStreak || 1}
          onCompleteDaily={handleCompleteDailyChallenge}
          onClose={() => setShowDailyModal(false)}
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
          stats={stats}
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
