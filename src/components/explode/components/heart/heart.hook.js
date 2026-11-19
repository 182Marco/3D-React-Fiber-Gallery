import * as R from "react";
import * as D from "@react-three/drei";
import { useExplodeAnimation } from "../../animation.hook";

const useHeart = () => {
  const { nodes, materials } = D.useGLTF("./model/Heart.glb");
  const group = R.useRef();

  useExplodeAnimation(group, { distance: 3 });

  return { group, nodes, materials };
};

export { useHeart };
