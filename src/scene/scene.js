import * as C from "../componets";
import * as D from "@react-three/drei";

const Scene = () => {
  return (
    <>
      <ambientLight />
      <D.OrbitControls />
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>
    </>
  );
};

export { Scene };
