import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const useBike = () => {
  const { nodes, materials } = useGLTF("/model/bike.gltf");

  const backTireRef = useRef();
  const backRadiusRef = useRef();
  const frontTireRef = useRef();
  const frontRadiusRef = useRef();

  useFrame((_, deltaT) => {
    backTireRef.current.rotation.y -= deltaT * 2;
    backRadiusRef.current.rotation.z -= deltaT * 2;
    frontTireRef.current.rotation.y -= deltaT * 2;
    frontRadiusRef.current.rotation.z -= deltaT * 2;
  });

  return {
    backRadiusRef,
    backTireRef,
    frontRadiusRef,
    frontTireRef,
    nodes,
    materials,
  };
};

export { useBike };
