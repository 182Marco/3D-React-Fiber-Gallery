import * as R from "react";
import { useProgress } from "@react-three/drei";
import { useAppContext } from "../../context";
import { wait } from "@testing-library/user-event/dist/utils";

const useLoadScreen = () => {
  const { startedExperience } = useAppContext();
  const { progress } = useProgress();
  const [removeElement, setRemoveElement] = R.useState(false);

  const handleRemoveElement = async () => {
    await wait(3500);
    setRemoveElement(true);
  };

  R.useEffect(() => {
    if (startedExperience) handleRemoveElement();
  }, [startedExperience]);

  return { progress, removeElement, startedExperience };
};

export { useLoadScreen };
