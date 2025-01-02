import * as C from "../componets";
import { Text, OrbitControls, Text3D } from "@react-three/drei";

const Scene = () => {
  return (
    <>
      <OrbitControls />
      <Text
        fontSize={0.4}
        color="red"
        font="./fonts/Quicksand-Medium.ttf"
        position={[0, 1.5, 0]}
        rotation-y={Math.PI / 4}
        maxWidth={2} // in axes units
        textAlign="center"
      >
        This is the text
      </Text>
      <Text3D
        position={[0, -1.5, 0]}
        font="./fonts/Quicksand Medium_Regular.json"
      >
        Here a 3d text
      </Text3D>
      {/* <C.PivotControl /> */}
      {/* <C.TransformControl /> */}
      {/* <C.ScrollControl /> */}
      {/*  <C.PresentationControl />
     <Environment background files="./envMap/1.hdr" />
      <C.CameraControl /> 
       <C.OrbitControl /> 
    
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
