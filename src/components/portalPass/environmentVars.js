const names = {
  catoro: "Cactoro",
  dragon: "Dragon",
  fish: "Fish King",
};

// Posizione di ogni card (ordine: dragon, fish, cactoro).
// Orizzontale: affiancate e leggermente ruotate verso il centro.
const landscapeLayout = [
  { x: -2.5, y: 0, ry: Math.PI / 8 },
  { x: 0, y: 0, ry: 0 },
  { x: 2.5, y: 0, ry: -Math.PI / 8 },
];

// Verticale (telefono): una sopra l'altra.
const portraitLayout = [
  { x: 0, y: 3.6, ry: 0 },
  { x: 0, y: 0, ry: 0 },
  { x: 0, y: -3.6, ry: 0 },
];

// Ingombro complessivo delle card, usato per calcolare la distanza camera.
const bounds = {
  landscape: { width: 7.4, height: 3.4 },
  portrait: { width: 2.4, height: 10.8 },
};

export { bounds, landscapeLayout, names, portraitLayout };
