import * as F from "@react-three/fiber";
import * as R from "react";
import { vars } from "../../fixedVars";

const useMovingItem = () => {
  const groupRef = R.useRef();

  F.useFrame((_, d) => {
    groupRef.current.position.x += d / 2;
    if (groupRef.current.position.x >= vars.lampMaxX) {
      groupRef.current.position.x = -vars.lampMaxX;
    }
  });

  return { groupRef };
};

export { useMovingItem };
