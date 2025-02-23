import * as F from "@react-three/fiber";
import * as R from "react";

const useMovingItem = (xSpread, speed) => {
  const groupRef = R.useRef();

  F.useFrame((_, d) => {
    groupRef.current.position.x += d * speed;
    if (groupRef.current.position.x >= xSpread) {
      groupRef.current.position.x = -xSpread;
    }
  });

  return { groupRef };
};

export { useMovingItem };
