import * as R from "react";
import * as F from "@react-three/fiber";
import * as U from "../utils";

const useGetComponents = project => {
  const { camera } = F.useThree();

  R.useEffect(() => {
    const {
      position = [0, 0, 5],
      fov = 75,
      near = 0.1,
      far = 1000,
    } = U.getCamera(project).camera;

    camera.position.set(...position);
    camera.fov = fov;
    camera.near = near;
    camera.far = far;

    camera.updateProjectionMatrix();
  }, [project, camera]);
};

export { useGetComponents };
