import React, { useState, useCallback } from 'react';
import { EGGS_DATA, TOTAL_EGGS } from './data/eggs';
import Hero from './components/Hero';
import Counter from './components/Counter';
import GameZone from './components/GameZone';
import DiySection from './components/DiySection';
import Footer from './components/Footer';
import Popup from './components/Popup';
import WinScreen from './components/WinScreen';
import styles from './App.module.css';

export default function App() {
  const [started, setStarted] = useState(false);
  const [foundIds, setFoundIds] = useState([]);
  const [activePopupEgg, setActivePopupEgg] = useState(null);
  const [showWin, setShowWin] = useState(false);

  const handleStart = () => {
    setStarted(true);
    // Smooth scroll to counter
    setTimeout(() => {
      document.getElementById('counter')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  };

  const handleEggFind = useCallback((egg) => {
    if (foundIds.includes(egg.id)) return;

    const newFoundIds = [...foundIds, egg.id];
    setFoundIds(newFoundIds);
    setActivePopupEgg(egg);

    // Check win
    if (newFoundIds.length === TOTAL_EGGS) {
      setTimeout(() => {
        setActivePopupEgg(null);
        setShowWin(true);
      }, 3400);
    }
  }, [foundIds]);

  const handlePopupClose = useCallback(() => {
    setActivePopupEgg(null);
  }, []);

  const handleReplay = () => {
    setFoundIds([]);
    setShowWin(false);
    setStarted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`app-bg ${styles.app}`}>
      {/* Hero Section */}
      <Hero
        eggs={EGGS_DATA}
        foundIds={foundIds}
        onFind={handleEggFind}
        onStart={handleStart}
        started={started}
      />

      {/* Counter */}
      <Counter
        found={foundIds.length}
        foundIds={foundIds}
      />

      {/* Interactive game zone */}
      <GameZone
        eggs={EGGS_DATA}
        foundIds={foundIds}
        onFind={handleEggFind}
      />

      {/* DIY Section */}
      <DiySection
        eggs={EGGS_DATA}
        foundIds={foundIds}
        onFind={handleEggFind}
      />

      {/* Footer with more hidden eggs */}
      <Footer
        eggs={EGGS_DATA}
        foundIds={foundIds}
        onFind={handleEggFind}
      />

      {/* Egg discovery popup */}
      <Popup
        egg={activePopupEgg}
        onClose={handlePopupClose}
      />

      {/* Win screen */}
      {showWin && (
        <WinScreen onReplay={handleReplay} />
      )}

      {/* Floating start hint */}
      {!started && (
        <div className={styles.startHint}>
          👆 Clique sur un œuf pour commencer !
        </div>
      )}

      {/* Progress float indicator */}
      {started && foundIds.length > 0 && foundIds.length < TOTAL_EGGS && (
        <div className={styles.floatProgress}>
          <span className={styles.floatEggs}>{'🥚'.repeat(Math.min(foundIds.length, 5))}</span>
          <span className={styles.floatCount}>
            {foundIds.length}/{TOTAL_EGGS}
          </span>
        </div>
      )}
    </div>
  );
}
