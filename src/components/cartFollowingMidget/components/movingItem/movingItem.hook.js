import * as F from "@react-three/fiber";
import * as R from "react";
import { vars } from "../../fixedVars";

const useMovingItem = () => {
  const groupRef = R.useRef();

  F.useFrame((_, d) => {
    groupRef.current.position.x += d * 5;
    if (groupRef.current.position.x >= vars.lampPost_max_offset_X) {
      groupRef.current.position.x = 3;
    }
  });

  return { groupRef };
};

export { useMovingItem };
