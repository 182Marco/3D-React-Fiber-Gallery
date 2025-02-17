import * as D from "@react-three/drei";
import * as R from "react";

const useTree = () => {
  const group = R.useRef();
  const { nodes, materials } = D.useGLTF("./model/tree.gltf");
  return { group, nodes, materials };
};

export { useTree };
