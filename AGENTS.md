# AGENTS.md

Galleria di esperimenti 3D con React Three Fiber (CRA + `react-app-rewired`, JavaScript, nessun TypeScript). Deploy su GitHub Pages.

## Stack
- React 18, `@react-three/fiber` 8, `@react-three/drei` 9, `three` 0.159
- Animazioni: `@react-spring/three`, `gsap`; fisica: `@react-three/rapier`
- UI/debug: `leva`; stato globale: React context (`src/context`), `jotai` disponibile
- Stili: SCSS (`src/styles`)
- Build e dev server passano da `react-app-rewired` (CRA); Vite è stato rimosso.

## Comandi
- `npm start` — dev server
- `npm run build` — build di produzione (`config-overrides.js` forza il template `public/index.html`)
- `npm run deploy` — `gh-pages -d build` (il workflow `.github/workflows/deploy.yml` lo esegue a ogni push su `main`)
- `npm test` — configurato, ma al momento non ci sono test nel repo

## Architettura
- `src/index.js` → `src/root.jsx` (`AppProvider` + `Scene`).
- `src/scene/scene.jsx` mostra `LoadScreen` finché `startedExperience` è false, poi un `<Canvas shadows>` con il progetto scelto dal controllo Leva `project`.
- `src/scene/utils/registry.js` è l'unico punto in cui si definisce un progetto selezionabile (Bike, CartFollowingMidget, Dog, Explode, Home3d, PortalPass, slideShow, Woman): import dinamico, wrapper, sfondo, camera, testo/colore della card. `projects.js` ne deriva i nomi.
- `src/scene/getComponents/getComponents.jsx` crea un componente `React.lazy` per voce del registry e lo avvolge col wrapper indicato (`suspense` → `WithSuspense`, `fallback` → `WithFallBackSuspense`, `scroll` → `WithScrollControls`, in `getComponents/wrappers`). Camera e sfondo si leggono dal registry (`getCamera.js`, `getBgClass` in `scene.hook.js`).
- `src/components/*` contiene tutti i componenti 3D; molti sono esperimenti non collegati al selettore (physics, spring, ecc.). Barrel in `src/components/index.js`.
- Asset statici (modelli `.glb/.gltf`, HDR, font, texture, audio) in `public/`; vanno caricati con path relativo a `public`.

- Navigazione: `src/components/gallery` (pulsante in alto a sinistra → griglia di card) + deep link con hash `#/nomeprogetto` gestito in `scene.hook.js`. Leva non seleziona più il progetto: contiene solo i parametri dei singoli progetti (animazioni Dog/Woman, oggetto di Explode, ecc.).

## Convenzioni
- Ogni componente vive in una cartella `camelCase/` con: `nome.jsx` (solo JSX), `nome.hook.js` (logica, hook `useNome`), `index.js` (re-export). Rispettare questa separazione.
- Export nominati (`export { Bike }`), niente default export. Import a namespace: `import * as R from "react"`, `* as C from "../components"`, `* as U from "./utils"`.
- Prettier: `arrowParens: "avoid"` (`x => ...`). Doppi apici, punto e virgola.
- Nel `.jsx` l'hook restituisce un oggetto usato come `h.` / `u.` (es. `const u = useBike()`).

## Aggiungere un nuovo progetto
1. Creare `src/components/<nome>/` con `.jsx`, `.hook.js`, `index.js`.
2. Esportarlo da `src/components/index.js` (e fare `export` nominato anche in `<nome>/index.js`: il registry importa la cartella).
3. Aggiungere UNA voce in `registry` (`src/scene/utils/registry.js`): `load`, `exportName`, `wrapper`, `title`, `description`, `accent` (card della galleria), e se servono `bg`, `camera`, `background`.

## Attenzioni
- Prestazioni: gli effetti glow/postprocessing sono stati rimossi di recente perché rallentavano tutto (vedi git log); evitare di reintrodurli senza misurare.
- Non committare modifiche a `public/model/*.blend` o asset pesanti senza necessità.
- Nessun linter/test automatico: verificare a mano con `npm start` nel browser.
