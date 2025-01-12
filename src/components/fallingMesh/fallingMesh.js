import { OrbitControls } from "@react-three/drei";
import * as R from "@react-three/rapier";
import { useFallingMesh } from "./fallingMesh.hook";

const FallingMesh = () => {
  const u = useFallingMesh();

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 3]} castShadow />
      <R.Physics
      //    gravity={[0, -9.81, 0]} default earth value
      // Hypothetically, gravity can also move meshes along other axes
      >
        <R.Debug />
        <R.RigidBody position={[0, 3, 0]} rotation={[2, 3, 4]}>
          <R.CuboidCollider args={[0.5, 0.5, 0.5]} />
          <mesh castShadow>
            <boxGeometry />
            <meshStandardMaterial color="#CC2941" />
          </mesh>
        </R.RigidBody>
        <R.RigidBody
          // colliders="hull"
          // timesh will reduce performance, use it as little as possible
          colliders="trimesh"
        >
          <mesh position={[-1.5, 3, 0]} castShadow>
            <torusKnotGeometry args={[0.5, 0.15, 100, 100]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        </R.RigidBody>
        <R.RigidBody colliders="ball">
          <mesh position={[0, 3, -1.5]} castShadow>
            <sphereGeometry args={[0.75, 64, 64]} />
            <meshStandardMaterial color="#23b278" />
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

export { FallingMesh };
