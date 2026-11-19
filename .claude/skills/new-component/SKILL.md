---
name: new-component
description: Crea un nuovo componente (scena 3D, modello glTF o sotto-componente) in src/components seguendo lo stile del progetto — separazione jsx/hook/index, export nominati, import a namespace, stile funzionale. Usare quando l'utente chiede di aggiungere o scaffoldare un componente, un progetto della galleria o un modello 3D.
---

# Nuovo componente — stile 3D-React-Fiber-Gallery

Il progetto separa **vista**, **logica** e **dati** in file distinti. Replica questa struttura, non inventarne altre.

## 1. Struttura di una cartella componente

Cartella `camelCase` in `src/components/<nome>/` (o in `<padre>/components/<nome>/` per un sotto-componente):

```
<nome>/
  <nome>.jsx        # SOLO markup JSX
  <nome>.hook.js    # TUTTA la logica: use<Nome>()
  index.js          # export { Nome } from "./<nome>";
  fixedVars.js      # (opzionale) costanti/configurazione
  utils.js          # (opzionale) funzioni pure di supporto
  components/       # (opzionale) sotto-componenti, con proprio index.js barrel
  styles.scss       # (solo componenti con UI DOM, non 3D)
```

Un componente con hook ha sempre `.hook.js`, anche se piccolo. Se l'unica logica è un effetto "di contorno" (camera, audio) può stare in `<nome>.<ruolo>.js` (es. `cartFollowingMidget.updateCamera.js`).

## 2. Separazione delle responsabilità

**`.jsx` — presentazione**
- Una sola riga di logica: `const h = use<Nome>();` (oppure `u` per i modelli glTF). Poi solo JSX.
- Nessun `useState`/`useEffect`/`useFrame`/`useControls` nel `.jsx`. Nessun calcolo: legge da `h.` e basta.
- Props di posizionamento/scala passate dal padre (`position`, `scale`, `rotation-y`) e spalmate con `{...props}` sul `group` radice.
- Fragment `<>…</>` come radice per le scene; `<group dispose={null}>` per i modelli.
- Eventuale `useGLTF.preload("./model/x.glb")` a fine file, prima dell'export.

**`.hook.js` — logica**
- Un solo hook `use<Nome>` come arrow function. Contiene stato, ref, effetti, `useFrame`, `useParam` (pannello parametri, da `../paramsPanel`), caricamento modelli.
- Restituisce **un oggetto** con tutto ciò che serve al `.jsx`, chiavi in ordine alfabetico quando possibile: `return { nodes, materials, groupRef };`.
- Riceve parametri semplici dal componente (`useMovingItem(xSpread, speed)`), non props intere.
- Effetti con cleanup se acquisiscono risorse (audio, camera, animazioni).

**`fixedVars.js` / `utils.js` — dati e funzioni pure**
- `fixedVars.js`: oggetto `vars` con numeri magici e range, nessuna logica. Mai numeri magici sparsi nel hook.
- `utils.js`: funzioni pure piccole (`getXPosition`, `getSingleMeshProps`), ricevono tutto per argomento, nessun side effect.

**`index.js`** — un solo re-export nominato. I barrel di cartelle (`components/index.js`) elencano un `export { X } from "./x"` per riga.

## 3. Stile funzionale

- Solo funzioni e arrow function, `const` ovunque; niente classi, niente `let` salvo reale necessità.
- **Export nominati in fondo al file**: `export { Nome };` — mai `export default`.
- Dati derivati con `map`/`filter`/`Object.keys`/`Object.values`/`forEach`, non cicli `for`. Liste: `[...Array(n)].map((_, i) => ...)`; per sequenze usare `createSeqArray` da `src/utils`.
- Funzioni piccole, pure e componibili; predicati come `isSelected = name => item === map[name]`.
- Selezione per `switch` con `return` per caso (vedi `getComponents.jsx`) invece di catene if/else; per più condizioni `switch (true)`.
- Higher-order helper per i wrapper (`WithSuspense = Component => <Suspense><Component /></Suspense>`).
- Optional chaining `?.` e default nei destructuring (`const { distance = 3 } = options`) invece di controlli manuali.
- Non mutare stato React; la mutazione diretta è ammessa solo su oggetti three.js dentro `useFrame` (`ref.current.rotation.y -= delta * 2`), sempre scalata per `delta`.

## 4. Convenzioni di import

Namespace a una lettera per le librerie, import nominato per l'hook locale:

```js
import * as R from "react";             // R.useRef, R.useEffect
import * as F from "@react-three/fiber"; // F.useFrame, F.useThree
import * as D from "@react-three/drei";  // D.useGLTF, D.OrbitControls
import { useParam } from "../paramsPanel"; // parametri nel pannello UI
import * as C from "./components";       // C.Sotto
import * as U from "./utils";            // U.fn
import { useNome } from "./nome.hook";
```

Per Bike/Tree semplici è accettato anche l'import nominato da drei (`{ OrbitControls, useGLTF }`), ma preferisci i namespace nel codice nuovo. Prettier: `arrowParens: "avoid"`, doppi apici, `;`. Il commento nel codice è in italiano.

## 5. Template

`index.js`
```js
export { Nome } from "./nome";
```

`nome.hook.js` (modello glTF animato)
```js
import * as R from "react";
import * as F from "@react-three/fiber";
import * as D from "@react-three/drei";

const useNome = () => {
  const { nodes, materials } = D.useGLTF("./model/nome.gltf");
  const groupRef = R.useRef();

  F.useFrame((_, delta) => {
    groupRef.current.rotation.y += delta;
  });

  return { groupRef, materials, nodes };
};

export { useNome };
```

`nome.jsx`
```jsx
import * as D from "@react-three/drei";
import { useNome } from "./nome.hook";

const Nome = props => {
  const h = useNome();
  return (
    <group {...props} dispose={null} ref={h.groupRef}>
      <mesh geometry={h.nodes.Mesh.geometry} material={h.materials.Mat} />
    </group>
  );
};

D.useGLTF.preload("./model/nome.gltf");

export { Nome };
```

Scena selezionabile (con parametri nel pannello: `const animation = useParam("animation", { value: names[0], options: names })`; slider con `{ value, min, max, step }`, toggle con `{ value: true }`, colore con `{ value: "#fff" }`, pulsanti con `useParamActions("nome", { etichetta: () => ... })`)
```jsx
const Nome = () => {
  const h = useNome();
  return (
    <>
      <D.OrbitControls />
      <ambientLight intensity={3} />
      <primitive object={h.model.scene} scale={2} />
    </>
  );
};
```

## 6. Collegamento al progetto

1. Aggiungi `export { Nome } from "./nome";` in `src/components/index.js` (o nel barrel `components/index.js` del padre).
2. **Solo se è una scena selezionabile:**
   - UNA sola voce in `src/scene/utils/registry.js`: `load: () => import("../../components/nome")`, `exportName`, `title`, `description`, `accent` (card in galleria), `wrapper` (`"suspense"` carica asset, `"fallback"` con spinner, `"scroll"` se usa `useScroll`), e se servono `bg` (classi sfondo), `camera`, `background` (colore Canvas). `projects`, camera, sfondo e `getComponents.jsx` si aggiornano da soli.
3. Asset in `public/model/` (riferiti come `./model/x.glb`), audio in `public/audios/`, texture in `public/textures/`.

## 7. Checklist prima di finire
- [ ] `.jsx` senza hook React/three oltre a `use<Nome>()`.
- [ ] Hook restituisce un oggetto; il `.jsx` usa `h.` (o `u.` per glTF).
- [ ] Costanti in `fixedVars.js`, funzioni pure in `utils.js`.
- [ ] Export nominati ovunque, barrel aggiornati.
- [ ] Effetti con risorse hanno il cleanup.
- [ ] Verifica manuale con `npm start` (non ci sono test).
