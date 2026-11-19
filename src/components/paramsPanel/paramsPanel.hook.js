import * as R from "react";
import { useAtom } from "jotai";
import { paramsAtom } from "./params.hook";

const usePanel = () => {
  const [params, setParams] = useAtom(paramsAtom);
  // Su telefono parte chiuso, per non coprire la scena.
  const [collapsed, setCollapsed] = R.useState(
    () => window.matchMedia("(max-width: 700px)").matches
  );

  const entries = Object.entries(params).map(([key, def]) => ({
    key,
    ...def,
    label: def.label ?? key,
  }));

  const setValue = (key, value) =>
    setParams(p => ({ ...p, [key]: { ...p[key], value } }));

  const toggleCollapsed = () => setCollapsed(c => !c);

  return { collapsed, entries, setValue, toggleCollapsed };
};

export { usePanel };
