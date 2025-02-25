import * as R from "react";
import * as F from "@react-three/fiber";
import * as D from "@react-three/drei";
import * as V from "../../environmentVars";
import { SkeletonUtils } from "three-stdlib";

const useCactoro = hover => {
  const group = R.useRef();
  const { scene, animations } = D.useGLTF("./model/cactoro.gltf");
  const clone = R.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = F.useGraph(clone);
  const { actions, names } = D.useAnimations(animations, group);

  R.useEffect(() => {
    const animationName =
      hover === V.names.catoro
        ? names[names.indexOf("Dance")]
        : names[names.indexOf("Idle")];
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
