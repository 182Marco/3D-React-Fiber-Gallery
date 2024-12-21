import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";

const Dog = () => {
  const model = useGLTF("./model/dog.glb");
  const animations = useAnimations(model.animations, model.scene);

  useEffect(() => {
    // Controlla se l'animazione 'Idle' è disponibile
    if (animations.actions && animations.actions.Idle) {
      animations.actions.Writing.play();
    } else {
      console.error("Animazione 'Idle' non trovata o non disponibile");
    }
  }, [animations.actions]); // Dipendenza da 'animations.actions'

  return <primitive position-y={-0.4} object={model.scene} />;
};

useGLTF.preload("./model/dog.glb");

export { Dog };
