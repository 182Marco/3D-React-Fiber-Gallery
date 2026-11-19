import * as R from "react";
import { useAtom } from "jotai";
import { paramsAtom } from "./params.hook";

const usePanel = () => {
  const [params, setParams] = useAtom(paramsAtom);
  const [collapsed, setCollapsed] = R.useState(false);

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
