import * as D from "@react-three/drei";
import * as C from "../../components";
import { useDissolve } from "./dissolve.hook";

const Dissolve = () => {
  const h = useDissolve();
  return (
    <>
      <D.OrbitControls />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
      />
      <C.Woman />
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeBufferGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial trasparent opacity={0.2} />
      </mesh>
    </>
  );
};

export { Dissolve };
