import { useProgress } from "@react-three/drei";
import { useAppContext } from "../../context";

const useLoadScreen = () => {
  const { startedExperience } = useAppContext();
  const { progress } = useProgress();
  return { progress, startedExperience };
};

export { useLoadScreen };
