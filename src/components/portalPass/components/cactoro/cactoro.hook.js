import * as R from "react";
import * as F from "@react-three/fiber";
import * as D from "@react-three/drei";
import * as V from "../../environmentVars";
import { SkeletonUtils } from "three-stdlib";
import { animationNames } from "./animationNames";

const useCactoro = hover => {
  const group = R.useRef();
  const { scene, animations } = D.useGLTF("./model/cactoro.gltf");
  const clone = R.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = F.useGraph(clone);
  const { actions } = D.useAnimations(animations, group);

  R.useEffect(() => {
    const animationName =
      hover === V.names.catoro ? animationNames.Dance : animationNames.Idle;
    const action = actions[animationName];
    if (action) {
      action.reset().fadeIn(0.5).play();
    }
    return () => {
      actions[animationName]?.stop();
    };
  }, [hover, actions]);

  return { group, nodes, materials };
};

export { useCactoro };
