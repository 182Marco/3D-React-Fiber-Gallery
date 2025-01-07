import { useGLTF } from "@react-three/drei";
import { useDog } from "./dog.hook";

const Dog = () => {
  const u = useDog();
  return (
    <>
      <ambientLight />
      <primitive scale={2.5} position-y={-1.5} object={u.model.scene} />
    </>
  );
};

useGLTF.preload("./model/dog.glb");

export { Dog };
