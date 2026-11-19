import * as R from "react";
import { useProgress } from "@react-three/drei";
import { useAppContext } from "../../context";

const useLoadScreen = () => {
  const { startedExperience } = useAppContext();
  const { progress: loaded, total } = useProgress();
  const [removeElement, setRemoveElement] = R.useState(false);
  const [idleTimeout, setIdleTimeout] = R.useState(false);

  // Rete di sicurezza: se nessun asset inizia a caricarsi (total === 0) il
  // progresso resterebbe a 0 e Start non si abiliterebbe mai.
  R.useEffect(() => {
    const id = setTimeout(() => setIdleTimeout(true), 4000);
    return () => clearTimeout(id);
  }, []);

  const ready = loaded >= 100 || (total === 0 && idleTimeout);
  const progress = ready ? 100 : loaded;

  R.useEffect(() => {
    if (!startedExperience) return;
    const id = setTimeout(() => setRemoveElement(true), 3500);
    return () => clearTimeout(id);
  }, [startedExperience]);

  return { progress, ready, removeElement, startedExperience };
};

export { useLoadScreen };
