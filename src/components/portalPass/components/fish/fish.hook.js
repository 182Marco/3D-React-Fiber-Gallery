import * as R from "react";
import * as F from "@react-three/fiber";
import * as D from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

const useFish = () => {
  const group = R.useRef();
  const { scene, animations } = D.useGLTF("./model/fish.gltf");
  const clone = R.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = F.useGraph(clone);
  const { actions } = D.useAnimations(animations, group);

  R.useEffect(() => {
    actions["Idle"].reset().fadeIn(0.5).play();
    return () => actions["Idle"];
  }, []);

  return { group, nodes, materials };
};

export { useFish };
