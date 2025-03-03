import * as R from "react";
import * as F from "@react-three/fiber";

const useHome3d = () => {
  const name = "home3d";
  const { camera } = F.useThree();

  const previusPosition = camera.position.clone();
  const priviusFov = camera.fov;

  R.useEffect(() => {
    camera.position.set(0, 4, 5);
    camera.fov = 75;
    camera.updateProjectionMatrix();

    return () => {
      camera.position.set(
        previusPosition.x,
        previusPosition.y,
        previusPosition.z,
      );
      camera.fov = priviusFov;
      camera.updateProjectionMatrix();
    };
  }, [camera]);

  return {
    name,
  };
};

export { useHome3d };
