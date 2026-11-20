# AGENTS.md

Galleria di esperimenti 3D con React Three Fiber (CRA + `react-app-rewired`, JavaScript, nessun TypeScript). Deploy su GitHub Pages.

## Stack
- React 18, `@react-three/fiber` 8, `@react-three/drei` 9, `three` 0.159
- Animazioni: `gsap`; fisica: `@react-three/rapier` (solo PhotoWorld)
- UI: pannello parametri proprio (`src/components/paramsPanel`, basato su `jotai`)
- Stili: SCSS (`src/styles`)
- Build e dev server passano da `react-app-rewired` (CRA); Vite è stato rimosso.

## Comandi
- `npm start` — dev server
- `npm run build` — build di produzione (`config-overrides.js` forza il template `public/index.html`)
- `npm run deploy` — `gh-pages -d build` (il workflow `.github/workflows/deploy.yml` lo esegue a ogni push su `main`)
- `npm test -- --watchAll=false` — test di fumo sul registry (`src/scene/utils/registry.test.js`: campi obbligatori, thumbnail esistente, `load()` risolve `exportName`); il canvas WebGL non si monta in jsdom. Il CI (`.github/workflows/ci.yml`) esegue build e test sulle PR.

## Architettura
- `src/index.js` → `src/root.jsx` (`AppProvider` + `Scene`).
- `src/scene/scene.jsx` mostra un `<Canvas shadows>` con il progetto scelto dalla galleria (stato in `scene.hook.js`); non c'è più intro/start: all'avvio la modale della galleria è aperta (salvo deep link a una scena).
- `src/scene/utils/registry.js` è l'unico punto in cui si definisce un progetto selezionabile (Bike, CartFollowingMidget, Dog, Explode, Home3d, PortalPass, slideShow, Woman e, con `lab: true` — badge "Lab" in galleria —, Portal e PhotoWorld): import dinamico, wrapper, sfondo, camera, testo/colore della card. `projects.js` ne deriva i nomi.
- `src/scene/getComponents/getComponents.jsx` crea un componente `React.lazy` per voce del registry e lo avvolge col wrapper indicato (`suspense` → `WithSuspense`, `fallback` → `WithFallBackSuspense`, `scroll` → `WithScrollControls`, in `getComponents/wrappers`). Camera e sfondo si leggono dal registry (`getCamera.js`, `getBgClass` in `scene.hook.js`).
- `src/components/*` contiene le scene (una cartella per voce del registry), i loro sotto-componenti (`office` per Home3d, `overlayText`, `spinner`) e la UI dell'app (`gallery`, `paramsPanel`, `sceneHint`, `responsiveCamera`). Gli esperimenti orfani non collegati alla galleria sono stati eliminati (restano nella storia git). Barrel in `src/components/index.js` (solo le scene e i loro sotto-componenti).
- Asset statici (modelli `.glb/.gltf`, HDR, font, texture, audio) in `public/`; vanno caricati con path relativo a `public`.

- Navigazione: `src/components/gallery` (pulsante in alto a sinistra → griglia di card) + deep link con hash `#/nomeprogetto` gestito in `scene.hook.js`. I parametri delle singole scene (animazioni Dog/Woman, oggetto di Explode, distanze slideShow) si dichiarano con `useParam(chiave, definizione)` / `useParamActions` dagli hook: il pannello in alto a destra (`ParamsPanel`) li mostra da solo (select/pillole, slider, toggle, colore, pulsanti). Leva è stata rimossa.

## Convenzioni
- Ogni componente vive in una cartella `camelCase/` con: `nome.jsx` (solo JSX), `nome.hook.js` (logica, hook `useNome`), `index.js` (re-export). Rispettare questa separazione.
- Export nominati (`export { Bike }`), niente default export. Import a namespace: `import * as R from "react"`, `* as C from "../components"`, `* as U from "./utils"`.
- Prettier: `arrowParens: "avoid"` (`x => ...`). Doppi apici, punto e virgola.
- Nel `.jsx` l'hook restituisce un oggetto usato come `h.` / `u.` (es. `const u = useBike()`).

## Aggiungere un nuovo progetto
1. Creare `src/components/<nome>/` con `.jsx`, `.hook.js`, `index.js`.
2. Esportarlo da `src/components/index.js` (e fare `export` nominato anche in `<nome>/index.js`: il registry importa la cartella).
3. Aggiungere UNA voce in `registry` (`src/scene/utils/registry.js`): `load`, `exportName`, `wrapper`, `title`, `description`, `accent`, `icon`, `tips` (card della galleria), e se servono `lab: true`, `bg`, `camera`, `background`, `fitWidth: false` (solo se la scena gestisce da sé la larghezza: di default `ResponsiveCamera` riduce lo zoom su schermi più stretti di 1.2:1 perché nulla esca dai lati).
4. Aggiungere la thumbnail `public/thumbs/<Nome>.jpg` (vedi `scripts/make-thumbs.mjs`) e, se vuoi, una riga nella tabella del README.

## Attenzioni
- Prestazioni: gli effetti glow/postprocessing sono stati rimossi di recente perché rallentavano tutto (vedi git log); evitare di reintrodurli senza misurare.
- Non committare modifiche a `public/model/*.blend` o asset pesanti senza necessità.
- Nessun linter; i test coprono solo il registry: il resto va verificato a mano con `npm start` nel browser.
- Le anteprime della galleria sono `public/thumbs/<Nome>.jpg` (il test le richiede): per una nuova scena o se cambia l'aspetto di una esistente rigenerarle con `scripts/make-thumbs.mjs` (istruzioni nell'header).
