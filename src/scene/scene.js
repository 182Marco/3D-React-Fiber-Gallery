import { useState, useRef } from "react";
import { OrbitControls, useHelper } from "@react-three/drei";
import * as THREE from "three";

const Scene = () => {
  const lightRef = useRef();
  useHelper(lightRef, THREE.DirectionalLightHelper, 1);
  return (
    <>
      <OrbitControls />
      <directionalLight
        ref={lightRef}
        position={[5, 1, -2]}
        color="blue"
        intensity={10}
      />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5}>
        <boxGeometry args={[8, 8]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
};

export { Scene };
