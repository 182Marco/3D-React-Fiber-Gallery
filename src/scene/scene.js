import * as C from "../componets";
import * as D from "@react-three/drei";

const Scene = () => {
  return (
    <>
      <ambientLight />
      <D.OrbitControls position={[0, 3, 3]} />
      {/* <D.Environment background files="./envMap/envMap.hdr" /> */}
      <mesh>
        <boxGeometry args={[1, 1, 1, 32, 32, 32]} />
        <D.MeshWobbleMaterial color="red" factor={3} speed={0.3} wireframe />
        {/*gelatinus material*/}
      </mesh>
      {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-1}>
        <boxGeometry args={[6, 6, 1]} />
        <D.MeshReflectorMaterial
          resolution={512}
          color="grey"
          blur={[1000, 100]}
          mixBlur={1}
          mirror={1} // reflect evironment map
        />
      </mesh> */}
    </>
  );
};

export { Scene };
