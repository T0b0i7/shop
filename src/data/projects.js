export const ANIMATIONS = [
  { id: "chaddy-birthday", title: "CHADDY BIRTHDAY", stack: "HTML • CSS • JS", price: "Don $1 libre", summary: "Animation anniversaire complète avec scènes love + cake.", demo: "https://t0b0i7.github.io/animations/chaddy-birthday/", repo: "https://github.com/T0b0i7/animations" },
  { id: "christmas-tree-3d", title: "CHRISTMAS TREE 3D", stack: "Three.js", price: "Don $1 libre", summary: "Sapin 3D luxe avec gestes caméra, neige et photos.", demo: "https://t0b0i7.github.io/animations/christmas-tree-3d/", repo: "https://github.com/T0b0i7/animations" },
  { id: "saint-valentin-2026", title: "SAINT VALENTIN 2026", stack: "React • Vite", price: "Don $1 libre", summary: "Expérience romantique interactive + vidéo.", demo: "https://t0b0i7.github.io/animations/saint-valentin-2026/", repo: "https://github.com/T0b0i7/animations" },
  { id: "toile-d-hiver", title: "TOILE D'HIVER", stack: "React • Vite", price: "Don $1 libre", summary: "Constellation de prénoms, chaque sentiment une étoile.", demo: "https://t0b0i7.github.io/animations/toile-d-hiver/", repo: "https://github.com/T0b0i7/animations" },
  { id: "anniversaries", title: "ANNIVERSARIES", stack: "Three.js", price: "Don $1 libre", summary: "Cœur + étoiles 3D pour anniversaires.", demo: "https://t0b0i7.github.io/animations/anniversaries-animation/", repo: "https://github.com/T0b0i7/animations" },
  { id: "peace-bloodness", title: "PEACE BLOODNESS HBD", stack: "React • Vite", price: "Don $1 libre", summary: "Animation HBD douce et immersive.", demo: "https://t0b0i7.github.io/animations/peace-bloodness-hbd/", repo: "https://github.com/T0b0i7/animations" },
];

export const GAMES = [
  { id: "candy-crush", title: "CANDY CRUSH CLONE", stack: "JavaScript", price: "Don $1 libre", summary: "Clone jouable du Candy Crush.", demo: "https://t0b0i7.github.io/01-Candy-Crush-Game/", repo: "https://github.com/T0b0i7/01-Candy-Crush-Game" },
  { id: "uno", title: "UNO CARD GAME", stack: "JavaScript", price: "Don $1 libre", summary: "Jeu de cartes UNO par Tobi.", demo: "https://t0b0i7.github.io/uno-card-game-by-tobi/", repo: "https://github.com/T0b0i7/uno-card-game-by-tobi" },
];

export const WHATSAPP = "https://wa.me/2290157002427?text=";
export const CHARIOW = ""; // lien Chariow à renseigner
export const donateLink = () => CHARIOW || orderLink("un don de $1 (libre)");
export const orderLink = (title) => `${WHATSAPP}${encodeURIComponent("Salut T0b0i7 ! Je veux acheter : " + title)}`;
