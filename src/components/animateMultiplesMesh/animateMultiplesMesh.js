import { OrbitControls } from "@react-three/drei";
import { a } from "@react-spring/three";
import { useAnimateMultiplesMesh } from "./animateMultiplesMesh.hook";

const AnimateMultiplesMesh = () => {
  const u = useAnimateMultiplesMesh();

  return (
    <>
      <OrbitControls />
      {u.springs.map(e => (
        <a.mesh key={e.key} scale={0.5} position={e.position}>
          <boxGeometry />
          <meshBasicMaterial />
        </a.mesh>
      ))}
    </>
  );
};

export { AnimateMultiplesMesh };
