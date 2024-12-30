import { useRef } from "react";
import { Environment, CubeCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CameraControl, OrbitControl, PresentationControl } from "../componets";

const Scene = () => {
  return (
    <>
      <PresentationControl />
      {/*  <Environment background files="./envMap/1.hdr" />
      <CameraControl /> 
       <OrbitControl /> 
    
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
      </CubeCamera> */}
    </>
  );
};

export { Scene };
