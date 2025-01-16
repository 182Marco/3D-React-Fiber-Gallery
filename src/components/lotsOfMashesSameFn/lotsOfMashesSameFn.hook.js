import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const useLotsOfMashesSameFn = () => {
  const cubeRef = useRef();
  const spinnerRef = useRef();

  const cubeClickHandler = () => {
    cubeRef.current.applyImpulse({ x: -25, y: 0, z: 0 });
  };

  return {
    cubeRef,
    cubeClickHandler,
    spinnerRef,
  };
};

export { useLotsOfMashesSameFn };
