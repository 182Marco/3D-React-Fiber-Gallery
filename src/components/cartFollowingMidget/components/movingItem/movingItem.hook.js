import * as F from "@react-three/fiber";
import * as R from "react";

const useMovingItem = () => {
  const groupRef = R.useRef();

  F.useFrame((_, d) => {
    groupRef.current.position.x += d;
  });

  return { groupRef };
};

export { useMovingItem };
