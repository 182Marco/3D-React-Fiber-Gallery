import { OrbitControls } from "@react-three/drei";

const CartSceneOrbitControls = () => (
  <OrbitControls
    minAzimuthAngle={0}
    maxAzimuthAngle={Math.PI / 2}
    minPolarAngle={0}
    maxPolarAngle={Math.PI / 2}
    minDistance={4}
    maxDistance={15}
  />
);

export { CartSceneOrbitControls };
