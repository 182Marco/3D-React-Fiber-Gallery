import * as D from "@rea ct-three/drei";
import * as R from "react";

const useTree = () => {
  const group = R.useRef();
  const { nodes, materials } = D.useGLTF("./models/tree-spruce/model.gltf");
  return { group, nodes, materials };
};

export { useTree };
