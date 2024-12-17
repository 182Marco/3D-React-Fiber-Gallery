import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as T from "three";
import { OrbitControls } from "@react-three/drei";

const Scene = () => {
  const cubeRef = useRef();
  const block = useRef();

  useFrame((state, deltaTime) => {
    // cubeRef.current.rotation.y += deltaTime * 0.3;
    block.current.rotation.y += deltaTime * 0.33;
    // state.camera.position.x = 4 * Math.cos(state.clock.elapsedTime);
  });

  return (
    <>
      <OrbitControls />
      <group>
        <mesh position-x={-4} ref={cubeRef}>
          <boxGeometry arg={[2, 2, 2]} />
          <meshBasicMaterial color="turquoise" wireframe />
        </mesh>
        <mesh position-x={4} ref={block}>
          <boxGeometry args={[2, 1, 1]} />
          <meshBasicMaterial color="pink" wireframe />
        </mesh>
      </group>
    </>
  );
};

export { Scene };
