import * as R from "react";
import * as D from "@react-three/drei";
import { useExplodeAnimation } from "../../animation.hook";

const useBanana = () => {
  const { nodes, materials } = D.useGLTF("/model/banana.glb");
  const group = R.useRef();

  useExplodeAnimation(group, { distance: 2.2 });

  return { group, nodes, materials };
};

export { useBanana };
