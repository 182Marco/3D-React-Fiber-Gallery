import * as F from "@react-three/fiber";
import * as R from "react";
import * as THREE from "three";

const usePortalPass = () => {
  const [active, setActive] = R.useState(null);
  const [hover, setIsHover] = R.useState(null);
  const cameraRef = R.useRef();
  const scene = F.useThree(state => state.scene);

  R.useEffect(() => {
    if (active) {
      const targetPosition = new THREE.Vector3();
      scene.getObjectByName(active).getWorldPosition(targetPosition);
      cameraRef.current?.setLookAt(
        0,
        0,
        5,
        targetPosition.x,
        targetPosition.y,
        targetPosition.z,
        true,
      );
    } else {
      cameraRef.current?.setLookAt(0, 0, 4, 0, 0, 0, true);
    }
  }, [active]);

  return { active, cameraRef, setActive, hover, setIsHover };
};

export { usePortalPass };
