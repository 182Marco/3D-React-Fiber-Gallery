import * as D from "@react-three/drei";
import * as R from "react";

const useRock = () => {
  const group = R.useRef();
  const { nodes, materials } = D.useGLTF("./model/rock.gltf");
  return { group, nodes, materials };
};

export { useRock };
