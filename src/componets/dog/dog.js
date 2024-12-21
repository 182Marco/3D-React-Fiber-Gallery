import { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Dog = () => {
  const dog = useGLTF("./model/dog.glb");
  const { actions } = useAnimations(dog.animations, dog.scene);

  // Aggiungi un controllo per il caricamento delle animazioni
  useEffect(() => {
    if (actions && actions.Idle) {
      actions.Idle.play();
      console.log("Animazione 'Idle' in play");
    } else {
      console.error("Animazione 'Idle' non trovata");
    }
  }, [actions]); // Dipendenza da 'actions' per garantire che siano caricate
  return <primitive object={dog.scene} />;
};

useGLTF.preload("./dog/dog.glb");

export { Dog };
