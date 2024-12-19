import { useGLTF } from "@react-three/drei";
import { useModel } from "./model.hook";

const Model = () => {
  const u = useModel();
  return <primitive object={u.model.scene} />;
};

useGLTF.preload("./model/dog.glb");

export { Model };
