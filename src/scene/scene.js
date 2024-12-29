import { useRef } from "react";
import { Environment, CubeCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CameraControl } from "../componets";

const Scene = () => {
  const sphereRef = useRef();
  useFrame((state, delta) => {
    sphereRef.current.rotation.x += delta;
  });

  return (
    <>
      <Environment background files="./envMap/1.hdr" />
      <CameraControl />
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
