import * as R from "react";
import * as F from "@react-three/fiber";
import * as THREE from "three";

const useHome3d = () => {
  const name = "home3d";
  const cameraRef = R.useRef();
  const scene = F.useThree(state => state.scene);

  R.useEffect(() => {
    if (!cameraRef.current) return;

    const targetPosition = new THREE.Vector3();
    scene.getObjectByName(name)?.getWorldPosition(targetPosition);

    cameraRef.current.setLookAt(
      0,
      0,
      -12,
      targetPosition.x,
      targetPosition.y,
      targetPosition.z,
      true,
    );
  }, [scene, name]);
  return {
    name,
  };
};

export { useHome3d };
