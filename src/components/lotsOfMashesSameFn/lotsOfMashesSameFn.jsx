import * as R from "@react-three/rapier";
import * as D from "@react-three/drei";
import { useLotsOfMashesSameFn } from "./lotsOfMashesSameFn.hook";
import * as THREE from "three";

const LotsOfMashesSameFn = () => {
  const h = useLotsOfMashesSameFn();

  return (
    <R.Physics>
      <ambientLight />
      <D.OrbitControls />
      {/* <R.Debug /> */}
      {/* <R.RigidBody ref={u.cubeRef} position={[2.5, 2.5, 0]}>
        <mesh
          castShadow
          onClick={u.cubeClickHandler}
          geometry={new THREE.BoxGeometry(4, 4, 4)}
        >
          <meshStandardMaterial color="#CC3941" />
        </mesh>
      </R.RigidBody> */}
      <R.InstancedRigidBodies {...h}>
        <instancedMesh args={[null, null, h.positions.length]} castShadow>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#39FF14" />
        </instancedMesh>
      </R.InstancedRigidBodies>

      <R.RigidBody
        type="fixed"
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        restitution={0.5}
      >
        <mesh receiveShadow>
          <boxGeometry args={[40, 40, 0.35]} />
          <meshStandardMaterial color="#C7CAC7" />
        </mesh>
      </R.RigidBody>
    </R.Physics>
  );
};

export { LotsOfMashesSameFn };
