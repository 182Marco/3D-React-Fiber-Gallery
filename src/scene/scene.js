import { useRef } from "react";
import {
  useHelper,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  CubeCamera,
  Grid,
  CameraControls,
} from "@react-three/drei";
import { useControls, buttonGroup, button } from "leva";
import { useFrame } from "@react-three/fiber";

const Scene = () => {
  const sphereRef = useRef();
  useFrame((state, delta) => {
    sphereRef.current.rotation.x += delta;
  });

  const cameraControls = useRef();
  const camontrols = useControls("camera controls", {});

  return (
    <>
      <Environment background files="./envMap/1.hdr" />
      <CameraControls ref={cameraControls} />
      <Grid
        args={[100, 100]}
        cellSize={0.5}
        cellColor="red"
        sectionSize={5}
        sectionThickness={4}
        sectionColor="turquoise"
        cellThickness={2}
        fadeDistance={20}
        fadeStrength={2}
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
    </>
  );
};

export { Scene };
