import * as D from "@react-three/drei";
import * as R from "react";

const useLampPost = () => {
  const group = R.useRef();
  const { nodes, materials } = D.useGLTF("./model/lampPost.gltf");
  return { group, nodes, materials };
};

export { useLampPost };
