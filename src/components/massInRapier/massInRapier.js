import { OrbitControls } from "@react-three/drei";
import * as R from "@react-three/rapier";
import { useMassInRapier } from "./massInRapier.hook";

const MassInRapier = () => {
  const u = useMassInRapier();

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 3]} castShadow />
      <R.Physics>
        {/* <R.Debug /> */}
        <R.RigidBody colliders="cuboid" position={[1, 3, 0]} ref={u.firstMesh}>
          <mesh castShadow onClick={u.fistMeshClickHandler}>
            <boxGeometry />
            <meshStandardMaterial color="#CC2941" mass={20} />
          </mesh>
        </R.RigidBody>
        <R.RigidBody
          colliders="cuboid"
          position={[-1, 3, 0]}
          ref={u.secondMesh}
          scale={2}
        >
          <mesh castShadow onClick={u.secondMeshClickHandler}>
            <boxGeometry />
            <meshStandardMaterial color="blue" mass={200} />
          </mesh>
        </R.RigidBody>
        <R.RigidBody type="fixed">
          <mesh position-y={-1} rotation-x={-Math.PI * 0.5} receiveShadow>
            <boxGeometry args={[8, 8, 0.35]} />
            <meshStandardMaterial color="#C7CAC7" />
          </mesh>
        </R.RigidBody>
      </R.Physics>
    </>
  );
};

export { MassInRapier };
