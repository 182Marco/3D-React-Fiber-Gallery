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
- `src/scene/utils/projects.js` elenca i progetti selezionabili (Bike, CartFollowingMidget, Dog, Explode, Home3d, PortalPass, slideShow, Woman).
- `src/scene/getComponents/getComponents.jsx` mappa progetto → componente, avvolto con uno dei wrapper in `getComponents/wrappers` (`WithSuspense`, `WithFallBackSuspense`, `WithScrollControls`).
- Camera per progetto: `src/scene/utils/getCamera.js`; classe di sfondo per progetto: `getBgClass` in `scene.hook.js`.
- `src/components/*` contiene tutti i componenti 3D; molti sono esperimenti non collegati al selettore (physics, spring, ecc.). Barrel in `src/components/index.js`.
- Asset statici (modelli `.glb/.gltf`, HDR, font, texture, audio) in `public/`; vanno caricati con path relativo a `public`.

## Convenzioni
- Ogni componente vive in una cartella `camelCase/` con: `nome.jsx` (solo JSX), `nome.hook.js` (logica, hook `useNome`), `index.js` (re-export). Rispettare questa separazione.
- Export nominati (`export { Bike }`), niente default export. Import a namespace: `import * as R from "react"`, `* as C from "../components"`, `* as U from "./utils"`.
- Prettier: `arrowParens: "avoid"` (`x => ...`). Doppi apici, punto e virgola.
- Nel `.jsx` l'hook restituisce un oggetto usato come `h.` / `u.` (es. `const u = useBike()`).

## Aggiungere un nuovo progetto
1. Creare `src/components/<nome>/` con `.jsx`, `.hook.js`, `index.js`.
2. Esportarlo da `src/components/index.js`.
3. Aggiungerlo a `projects` in `src/scene/utils/projects.js`.
4. Aggiungere il `case` in `getComponents.jsx` con il wrapper adatto.
5. Se serve, camera in `getCamera.js` e sfondo in `getBgClass`.

## Attenzioni
- Prestazioni: gli effetti glow/postprocessing sono stati rimossi di recente perché rallentavano tutto (vedi git log); evitare di reintrodurli senza misurare.
- Non committare modifiche a `public/model/*.blend` o asset pesanti senza necessità.
- Nessun linter/test automatico: verificare a mano con `npm start` nel browser.
