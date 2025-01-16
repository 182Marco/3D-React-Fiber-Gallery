import { useRef } from "react";

const useSensorHittingACollider = () => {
  const sphereRef = useRef();

  const sphereHandler = () => {
    sphereRef.current.applyImpulse({ x: 0, y: 2.25, z: -2.25 });
  };
  return { sphereHandler, sphereRef };
};

export { useSensorHittingACollider };
