import * as R from "react";

const useGame = () => {
  const [hover, setHover] = R.useState(false);
  const meshRef = R.useRef();

  const jump = () => meshRef.current.applyImpulse({ x: 0, y: 5, z: 0 });

  return {
    hover,
    setHover,
    meshRef,
    jump,
  };
};

export { useGame };
