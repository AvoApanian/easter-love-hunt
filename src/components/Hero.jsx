import React, { useState, useEffect } from 'react';
import Egg from './Egg';
import styles from './Hero.module.css';

export default function Hero({ eggs, foundIds, onFind, onStart, started }) {
  const [titlePulse, setTitlePulse] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setTitlePulse(p => !p);
    }, 2000);
    return () => clearInterval(t);
  }, []);

  const heroEggs = eggs.filter(e => e.zone === 'hero');

  return (
    <section className={styles.hero} id="hero">
      {/* Decorative background hearts */}
      <div className={styles.bgDecorations} aria-hidden>
        {['💗','💖','💝','💕','🌸','✨','🌷','🫶'].map((h, i) => (
          <span key={i} className={styles.bgDeco} style={{ '--i': i }}>{h}</span>
        ))}
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <span>🌷</span> Édition Pâques • Love Edition <span>🌷</span>
        </div>

        <h1 className={`${styles.title} ${titlePulse ? styles.pulse : ''}`}>
          <span className={styles.titleLine1}>Chasse aux</span>
          <span className={styles.titleLine2}>Œufs de Pâques</span>
          <span className={styles.titleHeart}>❤️</span>
        </h1>

        <p className={styles.subtitle}>
          Des œufs magiques sont cachés partout sur cette page...<br />
          Sauras-tu les trouver tous pour débloquer un message spécial ?
        </p>

        {!started ? (
          <button className="btn-primary" onClick={onStart}>
            <span>🥚</span>
            Commencer la chasse
            <span>🐣</span>
          </button>
        ) : (
          <div className={styles.huntingBadge}>
            <span>🔍</span> Chasse en cours... explore la page !
          </div>
        )}

        {/* Eggs in hero zone */}
        <div className={styles.eggsZone}>
          {heroEggs.map(egg => (
            <Egg
              key={egg.id}
              egg={egg}
              found={foundIds.includes(egg.id)}
              onFind={onFind}
            />
          ))}
        </div>
      </div>

      {/* Decorative wave */}
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,80 L0,80 Z" fill="rgba(255,241,242,0.8)" />
          <path d="M0,55 C240,30 480,70 720,50 C960,30 1200,65 1440,55 L1440,80 L0,80 Z" fill="white" opacity="0.6" />
        </svg>
      </div>
    </section>
  );
}
