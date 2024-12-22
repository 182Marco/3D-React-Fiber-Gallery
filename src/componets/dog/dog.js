import { useGLTF } from "@react-three/drei";
import { useDog } from "./dog.hook";

const Dog = () => {
  const u = useDog();
  return <primitive position-y={-0.4} object={u.model.scene} />;
};

useGLTF.preload("./model/dog.glb");

export { Dog };
