import { useRef } from "react";
import { useHelper, Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useControls } from "leva";

const Scene = () => {
  const lightRef = useRef();
  useHelper(lightRef, THREE.DirectionalLightHelper, 1);

  const { height, radius, scale } = useControls("ground attribute", {
    height: {
      value: 6,
      min: 0,
      max: 20,
    },
    radius: {
      value: 60,
      min: 0,
      max: 100,
    },
    scale: {
      value: 70,
      min: 0,
      max: 100,
    },
  });
  return (
    <>
      <OrbitControls />
      <Environment background files="./envMap/1.hdr" />
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial />
      </mesh>
    </>
  );
};

export { Scene };
