import React, { useState, useRef } from 'react';
import { useSound } from '../hooks/useSound';
import { useConfetti } from '../hooks/useConfetti';
import styles from './Egg.module.css';

export default function Egg({ egg, onFind, found }) {
  const [clicked, setClicked] = useState(false);
  const [wobble, setWobble] = useState(false);
  const ref = useRef(null);
  const { playPop } = useSound();
  const { launchConfetti } = useConfetti();

  const handleClick = (e) => {
    if (found) return;
    e.stopPropagation();
    setClicked(true);
    playPop();

    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      launchConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }

    setTimeout(() => {
      onFind(egg);
    }, 80);
  };

  const handleMouseEnter = () => {
    if (!found) setWobble(true);
  };
  const handleMouseLeave = () => setWobble(false);
  const handleAnimEnd = () => setWobble(false);

  const size = egg.size || 48;

  return (
    <div
      ref={ref}
      className={`
        ${styles.egg}
        ${found ? styles.found : ''}
        ${clicked ? styles.clicked : ''}
        ${wobble ? styles.wobble : ''}
        ${egg.hidden ? styles.hidden : ''}
      `}
      style={{
        position: 'absolute',
        ...egg.style,
        width: size,
        height: size * 1.2,
        background: egg.gradient,
        borderColor: egg.border,
        cursor: found ? 'default' : 'pointer',
      }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onAnimationEnd={handleAnimEnd}
      title={found ? '✓ Trouvé !' : '🔍 Cliquez pour découvrir...'}
      role="button"
      aria-label={found ? 'Œuf trouvé' : 'Œuf caché — cliquez pour découvrir'}
    >
      <span className={styles.emoji} style={{ fontSize: size * 0.55 }}>
        {found ? '✅' : egg.emoji}
      </span>

      {found && (
        <span className={styles.foundBadge}>
          ✓
        </span>
      )}

      {/* Pulse ring on hover */}
      {!found && (
        <span className={styles.pulseRing} style={{ borderColor: egg.border }} />
      )}
    </div>
  );
}
