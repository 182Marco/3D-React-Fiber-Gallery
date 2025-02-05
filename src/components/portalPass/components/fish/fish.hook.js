import * as R from "react";
import * as F from "@react-three/fiber";
import * as D from "@react-three/drei";
import * as V from "../../environmentVars";
import { SkeletonUtils } from "three-stdlib";
import { animationNames } from "./animationNames";

const useFish = hover => {
  const group = R.useRef();
  const { scene, animations } = D.useGLTF("./model/fish.gltf");
  const clone = R.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = F.useGraph(clone);
  const { actions } = D.useAnimations(animations, group);

  R.useEffect(() => {
    const actionName =
      hover === V.names.fish ? animationNames.Wave : animationNames.Idle;
    actions[actionName].stop();
    actions[actionName].reset().fadeIn(0.5).play();
    return () => actions[actionName].stop();
  }, [hover]);

  return { group, nodes, materials };
};

export { useFish };
