import React, { useEffect, useState } from 'react';
import styles from './Popup.module.css';

export default function Popup({ egg, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (egg) {
      requestAnimationFrame(() => setVisible(true));
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(onClose, 300);
      }, 3200);
      return () => clearTimeout(timer);
    }
  }, [egg, onClose]);

  if (!egg) return null;

  return (
    <div
      className={`${styles.overlay} ${visible ? styles.show : ''}`}
      onClick={() => { setVisible(false); setTimeout(onClose, 300); }}
    >
      <div
        className={`${styles.popup} ${visible ? styles.popupShow : ''}`}
        onClick={e => e.stopPropagation()}
        style={{ '--egg-color': egg.color, '--egg-border': egg.border }}
      >
        <div className={styles.eggVisual}>
          <div className={styles.eggShape} style={{ background: egg.gradient }}>
            <span>{egg.emoji}</span>
          </div>
          <div className={styles.sparkles}>
            {['✨','💕','🌸','⭐'].map((s, i) => (
              <span key={i} className={styles.sparkle} style={{ '--i': i }}>
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.content}>
          <p className={styles.discovered}>🎉 Œuf découvert !</p>
          <p className={styles.message}>{egg.message}</p>
        </div>

        <button className={styles.closeBtn} onClick={() => { setVisible(false); setTimeout(onClose, 300); }}>
          Continuer la chasse →
        </button>
      </div>
    </div>
  );
}
