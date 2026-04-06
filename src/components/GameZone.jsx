import React from 'react';
import Egg from './Egg';
import styles from './GameZone.module.css';

const MEADOW_ELEMENTS = [
  { emoji: '🌸', style: { left: '12%', top: '20%' }, size: 28 },
  { emoji: '🌷', style: { left: '45%', top: '10%' }, size: 24 },
  { emoji: '🌸', style: { right: '15%', top: '25%' }, size: 22 },
  { emoji: '🦋', style: { left: '70%', top: '50%' }, size: 26 },
  { emoji: '🐝', style: { left: '25%', bottom: '30%' }, size: 22 },
  { emoji: '🌷', style: { right: '8%', bottom: '20%' }, size: 26 },
  { emoji: '🌱', style: { left: '5%', bottom: '15%' }, size: 24 },
  { emoji: '🌸', style: { right: '35%', bottom: '10%' }, size: 20 },
  { emoji: '🐇', style: { left: '55%', bottom: '18%' }, size: 30 },
  { emoji: '🌸', style: { left: '80%', top: '15%' }, size: 20 },
];

export default function GameZone({ eggs, foundIds, onFind }) {
  const counterEggs = eggs.filter(e => e.zone === 'counter');

  return (
    <section className={styles.section} id="game-zone">
      <div className="container">
        <h2 className={`section-title ${styles.title}`}>
          🌸 La Prairie des Œufs Cachés 🌸
        </h2>
        <p className={`section-subtitle ${styles.subtitle}`}>
          Explore chaque recoin... certains œufs se cachent très bien !
        </p>

        <div className={styles.meadow}>
          {/* Decorative elements */}
          {MEADOW_ELEMENTS.map((el, i) => (
            <span
              key={i}
              className={styles.decoration}
              style={{ ...el.style, fontSize: el.size }}
              aria-hidden
            >
              {el.emoji}
            </span>
          ))}

          {/* Hidden eggs in this zone */}
          {counterEggs.map(egg => (
            <Egg
              key={egg.id}
              egg={egg}
              found={foundIds.includes(egg.id)}
              onFind={onFind}
            />
          ))}

          {/* Grass bottom */}
          <div className={styles.grass} aria-hidden>
            {Array.from({ length: 20 }).map((_, i) => (
              <span
                key={i}
                className={styles.grassBlade}
                style={{ '--i': i, left: `${(i / 20) * 100}%` }}
              >
                🌿
              </span>
            ))}
          </div>

          {/* Hint panel */}
          <div className={styles.hintBox}>
            <span className={styles.hintIcon}>💡</span>
            <p>
              <strong>Astuce :</strong> Les œufs transparents sont plus difficiles à trouver.
              Regarde partout — en haut, en bas, dans les coins !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
