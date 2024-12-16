import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Scene = () => {
  const cubeRef = useRef();
  useFrame((state, deltaTime) => {
    cubeRef.current.rotation.y += deltaTime * 10;
  });
  return (
    <group>
      <mesh position-x={-2} ref={cubeRef}>
        <boxGeometry arg={[8, 3, 10]} />
        <meshBasicMaterial color="turquoise" wireframe />
      </mesh>
      <mesh position-x={2}>
        <boxGeometry arg={[2, 10, 6]} />
        <meshBasicMaterial color="orange" wireframe />
      </mesh>
    </group>
  );
};

export { Scene };
