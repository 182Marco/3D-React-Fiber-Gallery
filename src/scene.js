import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

const Scene = () => {
  const cubeRef = useRef();

  const model = useLoader(GLTFLoader, "./model/dog.glb");

  return (
    <>
      <ambientLight intensity={2} />
      <primitive object={model.scene} />
      <OrbitControls />
    </>
  );
};

export { Scene };
