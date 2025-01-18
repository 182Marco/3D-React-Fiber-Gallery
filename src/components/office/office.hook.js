import { useGLTF } from "@react-three/drei";

const useOffice = () => {
  const { nodes, materials } = useGLTF("./model/WawaOffice.glb");
  return { nodes, materials };
};

export { useOffice };
