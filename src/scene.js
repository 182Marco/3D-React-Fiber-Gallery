import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as T from "three";
import { OrbitControls } from "@react-three/drei";

const Scene = () => {
  const cubeRef = useRef();
  const block = useRef();

  /*   useFrame((state, deltaTime) => {
     cubeRef.current.rotation.y += deltaTime * 0.3;
    block.current.rotation.y += deltaTime * 0.33;
    state.camera.position.x = 4 * Math.cos(state.clock.elapsedTime);
  }); */

  return (
    <>
      <OrbitControls />
    </>
  );
};

export { Scene };
