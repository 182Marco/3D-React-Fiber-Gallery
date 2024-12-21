import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const useBike = () => {
  const { nodes, materials } = useGLTF("./model/bike.gltf");

  const backWheelTire = useRef();
  const backWheelSpokes = useRef();
  const frontWheelTire = useRef();
  const frontWheelSpokes = useRef();

  useFrame((_, delta) => {
    if (backWheelTire.current) {
      backWheelTire.current.rotation.y -= delta;
    }
    if (backWheelSpokes.current) {
      backWheelSpokes.current.rotation.z -= delta;
    }
    if (frontWheelTire.current) {
      frontWheelTire.current.rotation.y -= delta;
    }
    if (frontWheelSpokes.current) {
      frontWheelSpokes.current.rotation.z -= delta;
    }
  });
  return {
    backWheelTire,
    backWheelSpokes,
    frontWheelTire,
    frontWheelSpokes,
    materials,
    nodes,
  };
};

export { useBike };
