import * as R from "react";
import * as D from "@react-three/drei";

const useHeart = () => {
  const { nodes, materials } = D.useGLTF("/model/heart.glb");
  const allHeart = R.useRef;

  return { allHeart, nodes, materials };
};

export { useHeart };
