import * as D from "@react-three/drei";
import * as L from "leva";
import * as R from "react";
import { useGraph } from "@react-three/fiber";
import { SkeletonUtils } from "three-stdlib";

const useWoman = () => {
  const group = R.useRef();
  const { scene, animations } = D.useGLTF("./model/woman.gltf");
  const clone = R.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions, names } = D.useAnimations(animations, group);

  const { animation } = L.useControls({
    animation: { value: names[3], options: names },
  });

  const stopActiveAnimation = () =>
    Object.values(actions).forEach(a => (a.isRunning() ? a.stop() : null));

  R.useEffect(() => {
    if (animation) {
      stopActiveAnimation();
      actions[animation]?.play();
    }
  }, [animation, actions]);

  return { group, nodes, materials };
};

export { useWoman };
