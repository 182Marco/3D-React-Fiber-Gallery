import { OrbitControls } from "@react-three/drei";
import * as R from "@react-three/rapier";
import { useMethodsOfTheRigidBody } from "./methodsOfTheRigidBody.hook";

const MethodsOfTheRigidBody = () => {
  const u = useMethodsOfTheRigidBody();

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 3]} castShadow />
      <R.Physics>
        <R.Debug />
        <R.RigidBody
          colliders="cuboid"
          position={[0, 3, 0]}
          rotation={[2, 3, 4]}
        >
          <mesh castShadow>
            <boxGeometry />
            <meshStandardMaterial color="#CC2941" />
          </mesh>
        </R.RigidBody>
        <R.RigidBody
          colliders="cuboid"
          position={[-2, 3.5, 2]}
          rotation={[1, 4, 1]}
        >
          <mesh castShadow>
            <boxGeometry />
            <meshStandardMaterial color="#CC2941" />
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

export { MethodsOfTheRigidBody };
