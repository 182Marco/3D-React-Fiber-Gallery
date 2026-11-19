import * as R from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useParam } from "../paramsPanel";

const useDog = () => {
  const model = useGLTF("./model/dog.glb");
  const animations = useAnimations(model.animations, model.scene);
  const { actions, names } = animations;

  const animation = useParam("animation", { value: names[0], options: names });

  const stopActiveAnimation = () =>
    Object.values(actions).forEach(a => (a.isRunning() ? a.stop() : null));

  R.useEffect(() => {
    if (animation) {
      stopActiveAnimation();
      actions[animation]?.play();
    }

    return () => {
      stopActiveAnimation();
    };
  }, [animation, actions]);

  return { model };
};

export { useDog };
