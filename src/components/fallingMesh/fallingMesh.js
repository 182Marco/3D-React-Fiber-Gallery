import { OrbitControls } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import { useFallingMesh } from "./fallingMesh.hook";

const FallingMesh = props => {
  const u = useFallingMesh();

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 3]} castShadow />
      <Physics
      //    gravity={[0, -9.81, 0]} default earth value
      // Hypothetically, gravity can also move meshes along other axes
      >
        <RigidBody>
          <mesh rotation={[2, 3, 4]} position={[0, 1.5, 0]} castShadow>
            <boxGeometry />
            <meshStandardMaterial color="#CC2941" />
          </mesh>
        </RigidBody>
        <RigidBody type="fixed">
          <mesh position-y={-1} rotation-x={-Math.PI * 0.5} receiveShadow>
            <boxGeometry args={[8, 8, 0.35]} />
            <meshStandardMaterial color="#C7CAC7" />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
};

export { FallingMesh };
