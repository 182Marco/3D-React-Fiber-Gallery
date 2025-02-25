import * as R from "react";
import * as L from "leva";
import { useGLTF, useAnimations } from "@react-three/drei";

const useDog = () => {
  const model = useGLTF("./model/dog.glb");
  const animations = useAnimations(model.animations, model.scene);
  const { actions, names } = animations;

  const { animation } = L.useControls({
    animation: { value: names[0], options: names },
  });

  const stopActiveAnimation = () =>
    Object.values(actions).forEach(a => (a.isRunning() ? a.stop() : null));

  R.useEffect(() => {
    if (animation) {
      stopActiveAnimation();
      actions[animation]?.play();
    }
  }, [animation, actions]);

  return { model };
};

export { useDog };
