import { useRef } from "react";
import {
  Cloud,
  OrbitControls,
  Sky,
  Sparkles,
  Stars,
  useHelper,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";
import { useControls } from "leva";

const Scene = () => {
  const lightRef = useRef();
  useHelper(lightRef, THREE.DirectionalLightHelper, 1);

  const { sunPosition } = useControls("sky", {
    sunPosition: {
      value: [-7.359999999999987, 0.11000000000000063, 5.049999999999996],
    },
  });
  return (
    <>
      <OrbitControls />
      <directionalLight
        castShadow
        ref={lightRef}
        position={[0, 2, 0]}
        color="white"
        intensity={10}
      />
      {/*<mesh castShadow>
        <boxGeometry />
        <meshStandardMaterial color="white" />
      </mesh> */}
      {/* <Sparkles
        count={1000}
        speed={0.05}
        opacity={3}
        color="#D3D3D3"
        scale={20}
        size={2}
      /> 
      <Stars
        radius={1}
        depth={50}
        count={1000}
        opacity={0.5}
        factor={1}
        saturation={0}
        speed={1}
      />
      <Cloud
        opacity={1}
        speed={0.2}
        depth={3}
        segments={60}
        depthTest={false}
      />
      <Sky sunPosition={sunPosition} /> */}
      <Environment
        background
        files="./envMap/1.hdr"
        path="/"
        blur={0}
        preset={null}
        encoding={THREE.sRGBEncoding}
      />
      <mesh receiveShadow position-y={-3} rotation-x={-Math.PI * 0.5}>
        <boxGeometry args={[8, 8]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
};

export { Scene };
