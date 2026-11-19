import * as R from "react";
import { useProgress } from "@react-three/drei";
import { useAppContext } from "../../context";

const useLoadScreen = () => {
  const { startedExperience } = useAppContext();
  const { progress } = useProgress();
  const [removeElement, setRemoveElement] = R.useState(false);

  R.useEffect(() => {
    if (!startedExperience) return;
    const id = setTimeout(() => setRemoveElement(true), 3500);
    return () => clearTimeout(id);
  }, [startedExperience]);

  return { progress, removeElement, startedExperience };
};

export { useLoadScreen };
