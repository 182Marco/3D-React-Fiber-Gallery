import * as D from "@react-three/drei";
import * as R from "react";
import { useExplodeAnimation } from "../../animation.hook";

const useBird = () => {
  const { nodes, materials } = D.useGLTF("/model/Westernbluebird.glb");

  const group = R.useRef();

  useExplodeAnimation(group, { distance: 1.7 });

  return {
    group,
    nodes,
    materials,
  };
};

export { useBird };
