import * as C from "../componets";
import * as D from "@react-three/drei";

const Scene = () => {
  return (
    <>
      <ambientLight />
      <D.OrbitControls position={[0, 3, 3]} />
      <D.Environment background files="./envMap/envMap.hdr" />
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="red" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-1}>
        <boxGeometry args={[6, 6, 1]} />
        <D.MeshReflectorMaterial
          resolution={512}
          color="grey"
          blur={[1000, 100]}
          mixBlur={1}
          mirror={0.8} // reflect evironment map
        />
      </mesh>
    </>
  );
};

export { Scene };
