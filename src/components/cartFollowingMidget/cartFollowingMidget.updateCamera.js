import * as R from "react";
import * as T from "@react-three/fiber";

const useUpdateCamera = () => {
  const { camera } = T.useThree();

  R.useEffect(() => {
    const originalPosition = camera.position.clone();
    const originalFov = camera.fov;

    camera.position.set(0, 2, 10);
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
