import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const useGame = () => {
  const cubeRef = useRef();
  const spinnerRef = useRef();

  const cubeClickHandler = () => {
    cubeRef.current.applyImpulse({ x: -25, y: 0, z: 0 });
  };

  useFrame(state => {
    const elapsedTime = state.clock.getElapsedTime();
    console.log(`elapsedTime: `, elapsedTime);
  });

  return {
    cubeRef,
    cubeClickHandler,
    spinnerRef,
  };
};

export { useGame };
