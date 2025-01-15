import { useRef } from "react";

const useGame = () => {
  const cubeRef = useRef();

  const cubeClickHandler = () => {
    cubeRef.current.applyImpulse({ x: -25, y: 0, z: 0 });
  };

  return {
    cubeRef,
    cubeClickHandler,
  };
};

export { useGame };
