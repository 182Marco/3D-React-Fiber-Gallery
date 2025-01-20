import * as R from "react";

const usePlayWithFritionToRoll = () => {
  const [hover, setHover] = R.useState(false);
  const meshRef = R.useRef();

  const jump = () => meshRef.current.applyImpulse({ x: 5, y: 0, z: 0 });

  return {
    hover,
    setHover,
    meshRef,
    jump,
  };
};

export { usePlayWithFritionToRoll };
