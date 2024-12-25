import { useRef } from "react";
import {
  useHelper,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  CubeCamera,
} from "@react-three/drei";
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
      <Environment background files="./envMap/1.hdr" />
      <mesh position={[0, 0, 5]}>
        <boxGeometry />
        <meshStandardMaterial color="violet" />
      </mesh>
      <CubeCamera>
        {(texture) => (
          <mesh>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial
              envMap={texture}
              roughness={0}
              metalness={0.9}
            />
          </mesh>
        )}
      </CubeCamera>
      <OrbitControls />
    </>
  );
};

export { Scene };
