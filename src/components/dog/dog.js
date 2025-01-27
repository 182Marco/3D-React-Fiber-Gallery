import * as D from "@react-three/drei";
import { useDog } from "./dog.hook";

const Dog = () => {
  const u = useDog();
  return (
    <>
      <D.OrbitControls />
      <ambientLight />
      <primitive scale={2.2} position-y={-1.5} object={u.model.scene} />
    </>
  );
};

D.useGLTF.preload("./model/dog.glb");

export { Dog };
