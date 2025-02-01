import * as R from "react";
import * as F from "@react-three/fiber";
import * as D from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

const useFish = () => {
  const group = R.useRef();
  const { scene, animations } = D.useGLTF("/fish.gltf");
  const clone = R.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = F.useGraph(clone);
  const { actions } = D.useAnimations(animations, group);

  return { group, nodes, materials };
};

export { useFish };
