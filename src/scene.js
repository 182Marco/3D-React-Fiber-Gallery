import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as T from "three";
import { OrbitControls } from "@react-three/drei";

const Scene = () => {
  const cubeRef = useRef();
  const plane = useRef();

  useFrame((state, deltaTime) => {
    cubeRef.current.rotation.y += deltaTime * 0.3;
    plane.current.rotation.y += deltaTime * 0.33;
  });

  return (
    <>
      <OrbitControls />
      <group>
        <mesh position-x={-2} ref={cubeRef}>
          <boxGeometry arg={[8, 3, 10]} />
          <meshBasicMaterial color="turquoise" wireframe />
        </mesh>
        <mesh position-x={2} ref={plane}>
          <planeGeometry arg={[2, 10, 6]} side={T.DoubleSide} />
          <meshBasicMaterial color="lightgreen" />
        </mesh>
      </group>
    </>
  );
};

export { Scene };
