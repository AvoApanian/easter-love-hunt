import React from 'react';
import Egg from './Egg';
import styles from './Footer.module.css';

export default function Footer({ eggs, foundIds, onFind }) {
  const footerEggs = eggs.filter(e => e.zone === 'footer');

  return (
    <footer className={styles.footer} id="footer">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <span className={styles.logo}>🥚💕</span>
            <p className={styles.tagline}>
              Chasse aux Œufs · Love Edition
            </p>
            <p className={styles.made}>
              Fait avec ❤️ pour quelqu'un de très spécial
            </p>
          </div>

          <div className={styles.divider} />

          <p className={styles.hint}>
            🔍 <em>Psst... il reste peut-être des œufs cachés dans les coins !</em>
          </p>

          <div className={styles.eggsZone}>
            {footerEggs.map(egg => (
              <Egg
                key={egg.id}
                egg={egg}
                found={foundIds.includes(egg.id)}
                onFind={onFind}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
