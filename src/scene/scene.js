import * as C from "../componets";
import * as D from "@react-three/drei";

const Scene = () => {
  return (
    <>
      <D.OrbitControls />
      <D.Text
        fontSize={0.6}
        color="turquoise"
        font="./fonts/Quicksand-Medium.ttf"
        position={[5, 1.5, 0]}
        rotation-y={Math.PI / 16}
        maxWidth={5} // in axes units
        textAlign="center"
      >
        This is the text branch
      </D.Text>
      <D.Center>
        <D.Float speed={3} floatIntensity={10}>
          <D.Text3D
            bevelEnabled
            bevelSegments={60}
            font="./fonts/Quicksand Medium_Regular.json"
            letterSpacing={0.3}
            height={1.3}
            size={3}
            position={[0, -1.5, 0]}
          >
            3D
            <meshNormalMaterial />
          </D.Text3D>
        </D.Float>
      </D.Center>
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
