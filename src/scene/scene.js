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
import { MathUtils } from "three";

const { DEG2RAD } = MathUtils;

const Scene = () => {
  const sphereRef = useRef();
  useFrame((state, delta) => {
    sphereRef.current.rotation.x += delta;
  });

  const cameraControls = useRef();
  const camontrols = useControls("camera controls", {
    horizontalRotation: buttonGroup({
      label: "horizontal R",
      opts: {
        // "45deg": () => cameraControls.current.rotate(45 * 0.0174533, 0, true), // 0.017 to convert into radiants
        "45deg": () => cameraControls.current.rotate(45 * DEG2RAD, 0, true), // 2nd way
        "-90deg": () => cameraControls.current.rotate(-90 * DEG2RAD, 0, true),
        "360deg": () => cameraControls.current.rotate(360 * DEG2RAD, 0, true),
      },
    }),
    verticalRotation: buttonGroup({
      label: "vertical R",
      opts: {
        // "45deg": () => cameraControls.current.rotate(45 * 0.0174533, 0, true), // 0.017 to convert into radiants
        "20deg": () => cameraControls.current.rotate(0, 20 * DEG2RAD, true), // 2nd way
        "-40deg": () => cameraControls.current.rotate(0, -40 * DEG2RAD, true),
      },
    }),
  });

  return (
    <>
      <Environment background files="./envMap/1.hdr" />
      <CameraControls ref={cameraControls} smoothTime={5} />
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
