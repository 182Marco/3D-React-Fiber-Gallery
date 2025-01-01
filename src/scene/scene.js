import * as C from "../componets";

const Scene = () => {
  return (
    <>
      <C.PivotControl />
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
