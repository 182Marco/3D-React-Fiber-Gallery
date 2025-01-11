import { OrbitControls, useGLTF } from "@react-three/drei";

const useBike = () => {
  const { nodes, materials } = useGLTF("/model/bike.gltf");
  return { nodes, materials };
};

export { useBike };
