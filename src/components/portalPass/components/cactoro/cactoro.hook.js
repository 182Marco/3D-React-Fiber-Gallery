import * as R from "react";
import * as F from "@react-three/fiber";
import * as D from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

const useCactoro = hover => {
  const group = R.useRef();
  const { scene, animations } = D.useGLTF("./model/cactoro.gltf");
  const clone = R.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = F.useGraph(clone);
  const { actions } = D.useAnimations(animations, group);

  R.useEffect(() => {
    const action = actions["Yes"];
    if (action) {
      action.reset().fadeIn(0.5).play();
      action.timeScale = 0.05;
    }
    return () => actions["Idle"];
  }, []);

  return { group, nodes, materials };
};

export { useCactoro };
