import * as R from "react";
import * as D from "@react-three/drei";
import * as F from "@react-three/fiber";

const useOverlayText = () => {
  const [op1, setOp1] = R.useState(1);
  const [op2, setOp2] = R.useState(1);
  const [op3, setOp3] = R.useState(1);

  const scroll = D.useScroll();

  F.useFrame(() => {
    setOp1(1 - scroll.range(0, 1 / 3));
    setOp2(1 - scroll.range(1 / 3, 1 / 3));
    setOp3(1 - scroll.range(2 / 3, 1 / 3));
  });

  return { opacity: [op1, op2, 1 - op3] };
};

export { useOverlayText };
