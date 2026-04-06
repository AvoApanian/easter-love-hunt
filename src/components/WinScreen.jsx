import React, { useEffect, useState } from 'react';
import { useSound } from '../hooks/useSound';
import { useConfetti } from '../hooks/useConfetti';
import styles from './WinScreen.module.css';

const FINAL_MESSAGE = {
  title: "Tu as trouvé tous les œufs ! 🎊",
  subtitle: "Et avec eux, tout mon amour...",
  poem: [
    "Chaque œuf caché était un bout de mon cœur,",
    "Chaque message trouvé, une petite douceur.",
    "Merci d'être là, merci d'exister,",
    "Tu es ma plus belle raison de sourire. ❤️",
  ],
  closing: "Joyeuses Pâques, mon amour 🌸🐣",
};

const FLOATING_EMOJIS = ['❤️','💕','🌸','✨','💖','🥚','🌷','💝','🎊','💗','⭐','🐣'];

export default function WinScreen({ onReplay }) {
  const [visible, setVisible] = useState(false);
  const [showPoem, setShowPoem] = useState(false);
  const { playWin } = useSound();
  const { launchMegaConfetti } = useConfetti();

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 100);
    const t2 = setTimeout(() => {
      playWin();
      launchMegaConfetti();
    }, 500);
    const t3 = setTimeout(() => setShowPoem(true), 1200);

    // Repeat confetti bursts
    const t4 = setTimeout(() => launchMegaConfetti(), 2500);
    const t5 = setTimeout(() => launchMegaConfetti(), 4500);

    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout);
  }, []);

  return (
    <div className={`${styles.overlay} ${visible ? styles.show : ''}`}>
      {/* Floating background emojis */}
      <div className={styles.floatingBg} aria-hidden>
        {FLOATING_EMOJIS.map((e, i) => (
          <span key={i} className={styles.floatingEmoji} style={{ '--i': i }}>
            {e}
          </span>
        ))}
      </div>

      <div className={`${styles.card} ${visible ? styles.cardShow : ''}`}>
        {/* Trophy */}
        <div className={styles.trophy}>
          <div className={styles.trophyInner}>🏆</div>
          <div className={styles.trophyRings}>
            <span className={styles.ring} />
            <span className={styles.ring} />
          </div>
        </div>

        {/* Title */}
        <h1 className={styles.title}>{FINAL_MESSAGE.title}</h1>
        <p className={styles.subtitle}>{FINAL_MESSAGE.subtitle}</p>

        {/* Eggs parade */}
        <div className={styles.eggsParade}>
          {['🥚','🐣','🐥','🐰','🌸','💕','🌷','✨'].map((e, i) => (
            <span
              key={i}
              className={styles.paradeEgg}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {e}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className={styles.divider}>
          <span>✦</span><span>❤️</span><span>✦</span>
        </div>

        {/* Poem */}
        {showPoem && (
          <div className={styles.poem}>
            {FINAL_MESSAGE.poem.map((line, i) => (
              <p
                key={i}
                className={styles.poemLine}
                style={{ animationDelay: `${i * 0.18}s` }}
              >
                {line}
              </p>
            ))}
          </div>
        )}

        {/* Closing */}
        {showPoem && (
          <p className={styles.closing} style={{ animationDelay: '0.9s' }}>
            {FINAL_MESSAGE.closing}
          </p>
        )}

        {/* Actions */}
        <div className={styles.actions}>
          <button className={styles.replayBtn} onClick={onReplay}>
            🔄 Rejouer
          </button>
          <button
            className={styles.shareBtn}
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Chasse aux Œufs — Love Edition',
                  text: 'J\'ai trouvé tous les œufs ! 🥚❤️',
                });
              }
            }}
          >
            💌 Partager
          </button>
        </div>
      </div>
    </div>
  );
}
