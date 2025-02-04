import * as R from "react";
import * as F from "@react-three/fiber";
import * as D from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

const useDragon = hover => {
  const group = R.useRef();
  const { scene, animations } = D.useGLTF("./model/dragon.gltf");
  const clone = R.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = F.useGraph(clone);
  const { actions } = D.useAnimations(animations, group);

  R.useEffect(() => {
    actions["Flying_Idle"].reset().fadeIn(0.5).play();
    return () => actions["Idle"];
  }, []);

  return { group, nodes, materials };
};

export { useDragon };
