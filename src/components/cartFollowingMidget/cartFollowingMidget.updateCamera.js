import * as R from "react";
import * as T from "@react-three/fiber";
import { useAppContext } from "../../context";

const useUpdateCamera = () => {
  const { camera } = T.useThree();

  const { startedExperience } = useAppContext();

  R.useEffect(() => {
    if (!startedExperience) return;

    // creato qui (non a livello di modulo) così il file audio viene
    // scaricato solo quando questa scena viene davvero usata
    const audio = new Audio("./audios/Song Of Unity.mp3");
    audio.play().catch(() => {});

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [startedExperience]);

  R.useEffect(() => {
    const originalPosition = camera.position.clone();
    const originalFov = camera.fov;

    camera.position.set(0, 2, 8);
    camera.fov = 25;
    camera.updateProjectionMatrix();

    return () => {
      camera.position.copy(originalPosition);
      camera.fov = originalFov;
      camera.updateProjectionMatrix();
    };
  }, [camera]);
};

export { useUpdateCamera };
