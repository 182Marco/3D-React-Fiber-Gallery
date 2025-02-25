import * as R from "react";
import * as F from "@react-three/fiber";
import * as THREE from "three";

const useHome3d = () => {
  const name = "home3d";
  const cameraRef = R.useRef();
  const scene = F.useThree(state => state.scene);

  const { camera } = F.useThree();

  R.useEffect(() => {
    const originalPosition = camera.position.clone();
    const originalFov = camera.fov;

    camera.position.set(0, 5, 20);
    camera.fov = 25;
    camera.updateProjectionMatrix();

    return () => {
      camera.position.copy(originalPosition);
      camera.fov = originalFov;
      camera.updateProjectionMatrix();
    };
  }, [camera]);

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
