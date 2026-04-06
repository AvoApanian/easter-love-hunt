import React, { useState } from 'react';
import Egg from './Egg';
import styles from './DiySection.module.css';

const STEPS = [
  {
    num: '01',
    icon: '🗺️',
    title: 'Prépare ta carte au trésor',
    desc: 'Dessine un plan de ton appartement ou jardin. Marque les cachettes avec des ❌ et numérotez-les. Utilise du papier kraft ou coloré pour un effet vintage.',
    color: '#fde68a',
    tip: '✏️ Utilise des crayons de couleur pour décorer !',
  },
  {
    num: '02',
    icon: '🥚',
    title: 'Décore tes œufs',
    desc: "Utilise des œufs en plastique, en carton ou en bois. Peins-les, colle des strass, des fleurs séchées ou des rubans. Chaque œuf peut avoir un thème différent !",
    color: '#f9a8d4',
    tip: '🎨 Peinture acrylique + vernis = résultat pro !',
  },
  {
    num: '03',
    icon: '💌',
    title: 'Écris des messages à la main',
    desc: "Glisse un petit message romantique ou mignon dans chaque œuf. Utilise du beau papier, une plume ou un stylo calligraphie. Chaque mot compte !",
    color: '#c4b5fd',
    tip: '❤️ Exemples : "Tu es ma raison de sourire" "Je t\'adore"',
  },
  {
    num: '04',
    icon: '🏡',
    title: 'Cache tes œufs',
    desc: "Place les œufs dans des endroits insolites : sous un coussin, dans une chaussure, derrière un livre, dans le frigo, sous une tasse... Sois créatif(ve) !",
    color: '#6ee7b7',
    tip: '🔍 Varie : certains visibles, d\'autres bien cachés !',
  },
  {
    num: '05',
    icon: '🎁',
    title: 'La récompense finale',
    desc: "Prépare une surprise spéciale pour quand tous les œufs sont trouvés : un dessert, une sortie, un cadeau fait main, ou simplement une grande déclaration d'amour !",
    color: '#fdba74',
    tip: '🌹 Le plus beau cadeau : ton temps et ton amour !',
  },
];

const HIDING_IDEAS = [
  { place: '🛋️ Sous un coussin', difficulty: 'Facile' },
  { place: '📚 Entre deux livres', difficulty: 'Facile' },
  { place: '🌱 Dans une plante', difficulty: 'Moyen' },
  { place: '👟 Dans une chaussure', difficulty: 'Moyen' },
  { place: '🧦 Dans un tiroir', difficulty: 'Moyen' },
  { place: '🪴 Derrière un cadre', difficulty: 'Difficile' },
  { place: '☕ Sous une tasse retournée', difficulty: 'Difficile' },
  { place: '🎒 Dans un sac', difficulty: 'Difficile' },
];

export default function DiySection({ eggs, foundIds, onFind }) {
  const [activeStep, setActiveStep] = useState(null);
  const diyEggs = eggs.filter(e => e.zone === 'diy');

  return (
    <section className={styles.section} id="diy">
      <div className="container">
        {/* Section header */}
        <div className={styles.header}>
          <span className={styles.badge}>🌷 Activité Créative</span>
          <h2 className={`section-title ${styles.title}`}>
            Crée ta Chasse au Trésor en Vrai !
          </h2>
          <p className={`section-subtitle`}>
            Offre une aventure inoubliable à quelqu'un de spécial 💕
          </p>
        </div>

        {/* Steps */}
        <div className={styles.steps}>
          {STEPS.map((step, i) => (
            <div
              key={i}
              className={`${styles.step} ${activeStep === i ? styles.stepActive : ''}`}
              onClick={() => setActiveStep(activeStep === i ? null : i)}
              style={{ '--step-color': step.color }}
            >
              <div className={styles.stepLeft}>
                <div className={styles.stepNum} style={{ background: step.color }}>
                  {step.num}
                </div>
                <div className={styles.stepIcon}>{step.icon}</div>
              </div>

              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
                {activeStep === i && (
                  <div className={styles.stepTip}>
                    {step.tip}
                  </div>
                )}
              </div>

              <div className={styles.stepArrow}>
                {activeStep === i ? '▲' : '▼'}
              </div>
            </div>
          ))}
        </div>

        {/* Hiding ideas grid */}
        <div className={styles.ideasSection}>
          <h3 className={styles.ideasTitle}>💡 Idées de Cachettes</h3>
          <div className={styles.ideasGrid}>
            {HIDING_IDEAS.map((idea, i) => (
              <div key={i} className={styles.ideaCard}>
                <span className={styles.ideaPlace}>{idea.place}</span>
                <span className={`${styles.ideaDifficulty} ${styles[`diff${idea.difficulty}`]}`}>
                  {idea.difficulty}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Message writing tips */}
        <div className={styles.messageTips}>
          <div className={styles.messageTipsInner}>
            <h3>✍️ Écrire des Messages Parfaits</h3>
            <div className={styles.tipsGrid}>
              {[
                { icon: '💕', tip: '"Tu rends ma vie plus belle chaque jour"' },
                { icon: '🌸', tip: '"Avec toi, même les lundis sont doux"' },
                { icon: '⭐', tip: '"Tu es mon rayon de soleil préféré"' },
                { icon: '🌙', tip: '"Je pense à toi même dans mes rêves"' },
                { icon: '🎵', tip: '"Notre histoire est ma chanson préférée"' },
                { icon: '🌺', tip: '"Merci d\'exister dans ma vie"' },
              ].map((m, i) => (
                <div key={i} className={styles.tipItem}>
                  <span>{m.icon}</span>
                  <span className={styles.tipText}>{m.tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Eggs in DIY zone */}
        <div className={styles.eggsZoneWrapper}>
          <div className={styles.eggsZone}>
            {diyEggs.map(egg => (
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
    </section>
  );
}
