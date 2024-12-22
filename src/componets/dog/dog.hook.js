import { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const useDog = () => {
  const model = useGLTF("./model/dog.glb");
  const animations = useAnimations(model.animations, model.scene);

  useEffect(() => {
    if (animations.actions && animations.actions.Idle) {
      animations.actions.Hide.play();
    } else {
      console.error("Animazione 'Idle' non trovata o non disponibile");
    }
  }, [animations.actions]);

  return { model };
};

export { useDog };
