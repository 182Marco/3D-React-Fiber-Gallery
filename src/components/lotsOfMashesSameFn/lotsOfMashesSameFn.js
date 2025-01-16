import * as R from "@react-three/rapier";
import * as D from "@react-three/drei";
import { useLotsOfMashesSameFn } from "./lotsOfMashesSameFn.hook";
import * as THREE from "three";

const LotsOfMashesSameFn = () => {
  const u = useLotsOfMashesSameFn();

  return (
    <R.Physics>
      <ambientLight />
      <R.Debug />
      <R.RigidBody ref={u.cubeRef} position={[2.5, 2.5, 0]}>
        <mesh
          castShadow
          onClick={u.cubeClickHandler}
          geometry={new THREE.BoxGeometry(2, 2, 2)}
        >
          <meshStandardMaterial color="#CC3941" />
        </mesh>
      </R.RigidBody>
      {/* <instancedMesh args={[, , ,]}></instancedMesh>

      <R.RigidBody */}
        type="fixed"
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        restitution={0.5}
      >
        <mesh receiveShadow>
          <boxGeometry args={[15, 15, 0.35]} />
          <meshStandardMaterial color="#C7CAC7" />
        </mesh>
      </R.RigidBody>
    </R.Physics>
  );
};

export { LotsOfMashesSameFn };
