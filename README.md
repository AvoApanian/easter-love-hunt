# 🥚 Chasse aux Œufs de Pâques — Love Edition ❤️

Un site web interactif pour offrir une chasse aux œufs romantique et magique !

## 🚀 Démarrage rapide

```bash
npm install
npm run dev
```

Puis ouvre [http://localhost:5173](http://localhost:5173) dans ton navigateur.

## 🎮 Comment jouer

1. Clique sur **"Commencer la chasse"** dans le Hero
2. Explore toute la page — certains œufs sont visibles, d'autres très discrets !
3. Clique sur chaque œuf pour découvrir son message romantique
4. Trouve tous les **8 œufs** pour débloquer l'écran final ✨

## 🗺️ Où sont les œufs ?

- **2 œufs** dans la section Hero (en haut de page)
- **2 œufs** dans la Prairie interactive (section du milieu)
- **2 œufs** dans la section DIY (activité créative)
- **2 œufs** dans le Footer (tout en bas !)

> **Astuce :** Les œufs semi-transparents sont les plus difficiles à trouver !

## 📦 Technologies

- ⚛️ React 18
- ⚡ Vite 5
- 🎨 CSS Modules
- 🔊 Web Audio API (sons sans librairie externe)
- 🎉 Confetti en CSS/JS pur

## 📁 Structure du projet

```
easter-love-hunt/
├── public/
│   └── egg-icon.svg
├── src/
│   ├── components/
│   │   ├── Egg.jsx / Egg.module.css
│   │   ├── Popup.jsx / Popup.module.css
│   │   ├── Hero.jsx / Hero.module.css
│   │   ├── Counter.jsx / Counter.module.css
│   │   ├── GameZone.jsx / GameZone.module.css
│   │   ├── DiySection.jsx / DiySection.module.css
│   │   ├── Footer.jsx / Footer.module.css
│   │   └── WinScreen.jsx / WinScreen.module.css
│   ├── data/
│   │   └── eggs.js
│   ├── hooks/
│   │   ├── useSound.js
│   │   └── useConfetti.js
│   ├── App.jsx / App.module.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## 🛠️ Personnalisation

### Modifier les messages romantiques
Édite `src/data/eggs.js` → propriété `message` de chaque œuf.

### Changer le message final
Édite `src/components/WinScreen.jsx` → objet `FINAL_MESSAGE`.

### Ajouter des œufs
Ajoute des entrées dans `src/data/eggs.js` en suivant le même format.

### Modifier les cachettes
Change les propriétés `style` (top/left/right/bottom) dans `src/data/eggs.js`.

## 💝 Fait avec amour

Pour offrir un moment magique à quelqu'un de spécial 🌸
