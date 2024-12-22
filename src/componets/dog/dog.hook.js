import { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const useDog = () => {
  const model = useGLTF("./model/dog.glb");
  const animations = useAnimations(model.animations, model.scene);

  useEffect(() => {
    animations?.actions?.Writing.play();
  }, [animations.actions]);

  return { model };
};

export { useDog };
