import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const useSpinner = (speed = 1) => {
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * speed;
      meshRef.current.rotation.z += delta * speed;
    }
  });

  return { meshRef };
};

export { useSpinner };
