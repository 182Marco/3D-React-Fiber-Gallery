import * as R from "react";
import * as L from "leva";
import { useGLTF, useAnimations } from "@react-three/drei";

const useDog = () => {
  const model = useGLTF("./model/dog.glb");
  const animations = useAnimations(model.animations, model.scene);
  const animationsObj = animations.actions;
  const animationsAr = Object.keys(animationsObj);

  const { animation } = L.useControls({
    animation: { value: animationsAr[0], options: animationsAr },
  });

  const stopActiveAnimation = () =>
    Object.values(animationsObj).forEach(a =>
      a.isRunning() ? a.stop() : null,
    );

  R.useEffect(() => {
    if (animation) {
      stopActiveAnimation();
      animationsObj[animation]?.play();
    }
  }, [animation, animationsObj]);

  return { animationsAr, model };
};

export { useDog };
