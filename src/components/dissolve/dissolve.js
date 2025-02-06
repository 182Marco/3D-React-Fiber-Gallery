import * as D from "@react-three/drei";
import { useDissolve } from "./dissolve.hook";

const Dissolve = () => {
  const h = useDissolve();
  return (
    <>
      <D.OrbitControls />
      <mesh>
        <meshNormalMaterial />
        <boxBufferGeometry />
      </mesh>
    </>
  );
};

export { Dissolve };
