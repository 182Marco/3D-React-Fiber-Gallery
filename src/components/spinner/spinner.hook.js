import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useMyControls } from "./spinner.controls";

const useSpinner = (speed = 1) => {
  const meshRef = useRef();

  const { c } = useMyControls();

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * speed;
      meshRef.current.rotation.z += delta * speed;
    }
  });

  return { c, meshRef };
};

export { useSpinner };
