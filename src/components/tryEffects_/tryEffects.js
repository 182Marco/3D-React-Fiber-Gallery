import * as R from "@react-three/rapier";
import * as D from "@react-three/drei";
import { useTryEffects } from "./tryEffects.hook_";
import { OrbitControl } from "../orbitControl";

const TryEffects = () => {
  // const u = useTryEffects();

  return (
    <>
      <ambientLight />
      <OrbitControl />
      <mesh position={[1, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
      <mesh position={[-1, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="rgb(106, 115, 180)" />
      </mesh>
    </>
  );
};

export { TryEffects };
