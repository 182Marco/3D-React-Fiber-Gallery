import * as R from "react";
import { atom, useAtomValue, useSetAtom } from "jotai";

// Parametri registrati dalle scene: { [chiave]: { ...definizione, value } }.
// Lo store jotai è globale, quindi funziona sia dentro il Canvas (altro root
// React) sia nel pannello DOM.
const paramsAtom = atom({});

// Ogni registrazione ha un proprietario: alla pulizia (cambio scena) toglie
// solo la propria voce. Senza, il canvas vecchio — smontato dopo che il nuovo
// si è già registrato — cancellava i parametri della scena appena aperta.
// Il valore scelto si conserva solo se è ancora valido per la nuova
// definizione (es. un'animazione che non esiste nella scena successiva).
const isValid = (def, value) =>
  value !== undefined && (!def.options || def.options.includes(value));

const useRegister = (key, def) => {
  const setParams = useSetAtom(paramsAtom);
  // cambiano le opzioni (altro oggetto/scena) → ci si registra di nuovo
  const signature = JSON.stringify([def.options, def.min, def.max, def.step]);
  R.useEffect(() => {
    const owner = Symbol(key);
    setParams(p => ({
      ...p,
      [key]: {
        ...def,
        owner,
        value: isValid(def, p[key]?.value) ? p[key].value : def.value,
      },
    }));
    return () =>
      setParams(p => {
        if (p[key]?.owner !== owner) return p;
        const { [key]: _removed, ...rest } = p;
        return rest;
      });
  }, [key, signature]);
};

// Registra un parametro e ne restituisce il valore corrente.
//   { value, options }          → select / pillole
//   { value: number, min, max, step } → slider
//   { value: boolean }          → toggle
//   { value: "#rrggbb" }        → colore
// def.label opzionale (default: la chiave).
const useParam = (key, def) => {
  useRegister(key, def);
  const valueAtom = R.useMemo(
    () => atom(get => get(paramsAtom)[key]?.value),
    [key],
  );
  return useAtomValue(valueAtom) ?? def.value;
};

// Registra una riga di pulsanti: actions = { etichetta: () => ... }.
const useParamActions = (key, actions, label) =>
  useRegister(key, { actions, label });

export { paramsAtom, useParam, useParamActions };
