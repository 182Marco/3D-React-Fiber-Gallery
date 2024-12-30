import { useGLTF } from "@react-three/drei";

const useScrollControl = () => {
  const model = useGLTF("./model/model.gltf");
  return {
    colors: ["red", "green", "blue", "yellow", "purple", "orange"],
    model,
  };
};

export { useScrollControl };
