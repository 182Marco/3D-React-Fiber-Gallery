import { useRef } from "react";
import {
  useHelper,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  CubeCamera,
  Grid,
} from "@react-three/drei";
import { useControls } from "leva";
import { useFrame } from "@react-three/fiber";

const Scene = () => {
  const sphereRef = useRef();
  useFrame((state, delta) => {
    sphereRef.current.rotation.x += delta;
  });
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
      <Grid
        args={[30, 30]}
        cellSize={0.5}
        cellColor="red"
        sectionSize={5}
        sectionThickness={4}
        sectionColor="turquoise"
        cellThickness={2}
      />
      <mesh position={[0, 0, 5]} ref={sphereRef}>
        <boxGeometry />
        <meshStandardMaterial color="violet" />
      </mesh>
      <CubeCamera resolution={1024}>
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
