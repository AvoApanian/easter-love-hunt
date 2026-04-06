import { useCallback, useRef } from 'react';

const COLORS = ['#f43f5e', '#f472b6', '#fda4af', '#fde68a', '#c4b5fd', '#6ee7b7', '#7dd3fc', '#fdba74'];
const SHAPES = ['❤️', '🌸', '✨', '💕', '🥚', '🌷', '💖', '⭐'];

export function useConfetti() {
  const containerRef = useRef(null);

  const launchConfetti = useCallback((x, y, container) => {
    const target = container || document.body;
    const count = 14;

    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        font-size: ${12 + Math.random() * 16}px;
        pointer-events: none;
        z-index: 9999;
        animation: confettiBurst 0.8s ease-out forwards;
        --dx: ${(Math.random() - 0.5) * 200}px;
        --dy: ${-80 - Math.random() * 120}px;
        --rot: ${Math.random() * 720 - 360}deg;
      `;
      el.textContent = SHAPES[Math.floor(Math.random() * SHAPES.length)];

      // Inject keyframe if not exists
      if (!document.getElementById('confettiBurstStyle')) {
        const style = document.createElement('style');
        style.id = 'confettiBurstStyle';
        style.textContent = `
          @keyframes confettiBurst {
            0% { transform: translate(0,0) rotate(0deg) scale(1); opacity: 1; }
            100% { transform: translate(var(--dx), var(--dy)) rotate(var(--rot)) scale(0.3); opacity: 0; }
          }
        `;
        document.head.appendChild(style);
      }

      document.body.appendChild(el);
      setTimeout(() => el.remove(), 850);
    }
  }, []);

  const launchMegaConfetti = useCallback(() => {
    const count = 80;
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const el = document.createElement('div');
        const startX = Math.random() * window.innerWidth;
        el.style.cssText = `
          position: fixed;
          left: ${startX}px;
          top: -30px;
          font-size: ${14 + Math.random() * 20}px;
          pointer-events: none;
          z-index: 9999;
          animation: confettiFallAnim ${1.5 + Math.random() * 2}s ease-in forwards;
          --rot: ${Math.random() * 720}deg;
        `;
        el.textContent = SHAPES[Math.floor(Math.random() * SHAPES.length)];

        if (!document.getElementById('confettiFallStyle')) {
          const style = document.createElement('style');
          style.id = 'confettiFallStyle';
          style.textContent = `
            @keyframes confettiFallAnim {
              0% { transform: translateY(0) rotate(0deg); opacity: 1; }
              100% { transform: translateY(110vh) rotate(var(--rot)); opacity: 0.2; }
            }
          `;
          document.head.appendChild(style);
        }

        document.body.appendChild(el);
        setTimeout(() => el.remove(), 3600);
      }, i * 40);
    }
  }, []);

  return { launchConfetti, launchMegaConfetti };
}
