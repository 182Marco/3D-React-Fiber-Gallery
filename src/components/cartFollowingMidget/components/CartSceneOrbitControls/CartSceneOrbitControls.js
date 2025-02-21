import { OrbitControls } from "@react-three/drei";

const CartSceneOrbitControls = () => (
  <OrbitControls
    minAzimuthAngle={-Math.PI / 4}
    maxAzimuthAngle={Math.PI / 4}
    minPolarAngle={0}
    maxPolarAngle={Math.PI / 2}
    minDistance={2}
    maxDistance={15}
  />
);

export { CartSceneOrbitControls };
