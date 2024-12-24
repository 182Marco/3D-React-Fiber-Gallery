import { useRef } from "react";
import {
  OrbitControls,
  useHelper,
  Sparkles,
  Stars,
  Cloud,
} from "@react-three/drei";
import * as THREE from "three";

const Scene = () => {
  const lightRef = useRef();
  useHelper(lightRef, THREE.DirectionalLightHelper, 1);
  return (
    <>
      <OrbitControls />
      <directionalLight
        castShadow
        ref={lightRef}
        position={[0, 2, 0]}
        color="blue"
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
      /> */}
      <Stars
        radius={1}
        depth={50}
        count={1000}
        opacity={0.5}
        factor={1}
        saturation={0}
        speed={1}
      />
      <Cloud opacity={1} />
      <mesh receiveShadow position-y={-3} rotation-x={-Math.PI * 0.5}>
        <boxGeometry args={[8, 8]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
};

export { Scene };
