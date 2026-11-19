import * as R from "react";
import { atom, useAtomValue, useSetAtom } from "jotai";

// Parametri registrati dalle scene: { [chiave]: { ...definizione, value } }.
// Lo store jotai è globale, quindi funziona sia dentro il Canvas (altro root
// React) sia nel pannello DOM.
const paramsAtom = atom({});

const useRegister = (key, def) => {
  const setParams = useSetAtom(paramsAtom);
  R.useEffect(() => {
    setParams(p => ({
      ...p,
      [key]: { ...def, value: p[key]?.value ?? def.value },
    }));
    return () => setParams(({ [key]: _removed, ...rest }) => rest);
  }, [key]);
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
    [key]
  );
  return useAtomValue(valueAtom) ?? def.value;
};

// Registra una riga di pulsanti: actions = { etichetta: () => ... }.
const useParamActions = (key, actions, label) =>
  useRegister(key, { actions, label });

export { paramsAtom, useParam, useParamActions };
