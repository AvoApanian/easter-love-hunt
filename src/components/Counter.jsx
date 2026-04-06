import React from 'react';
import { TOTAL_EGGS } from '../data/eggs';
import { EGGS_DATA } from '../data/eggs';
import styles from './Counter.module.css';

export default function Counter({ found, onEggFind, foundIds }) {
  const progress = (found / TOTAL_EGGS) * 100;

  return (
    <section className={styles.section} id="counter">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.left}>
            <div className={styles.label}>Œufs trouvés</div>
            <div className={styles.score}>
              <span className={styles.current}>{found}</span>
              <span className={styles.separator}>/</span>
              <span className={styles.total}>{TOTAL_EGGS}</span>
            </div>
            {found < TOTAL_EGGS && (
              <div className={styles.remaining}>
                {TOTAL_EGGS - found} œuf{TOTAL_EGGS - found > 1 ? 's' : ''} restant{TOTAL_EGGS - found > 1 ? 's' : ''}...
              </div>
            )}
            {found === TOTAL_EGGS && (
              <div className={styles.complete}>🎊 Tous trouvés !</div>
            )}
          </div>

          <div className={styles.right}>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className={styles.eggGrid}>
              {EGGS_DATA.map(egg => (
                <div
                  key={egg.id}
                  className={`${styles.eggDot} ${foundIds.includes(egg.id) ? styles.dotFound : ''}`}
                  style={{
                    '--egg-color': egg.color,
                    '--egg-border': egg.border,
                  }}
                  title={foundIds.includes(egg.id) ? '✓ Trouvé !' : '?'}
                >
                  {foundIds.includes(egg.id) ? egg.emoji : '❓'}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
