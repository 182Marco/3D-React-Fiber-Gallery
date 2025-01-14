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
          //  rotation={[2, 3, 4]}
          ref={u.firstMesh}
          onCollisionEnter={() => console.log(`collision enter`)}
          onCollisionExit={() => console.log(`collision exit`)}
          onSleep={() => console.log(`sleeping`)}
          onWake={() => console.log(`wake`)}
          gravityScale={0.2} // can also move up with minus value
          // restitution={2} // Adds floor restitution (0), gives 2 / 2 = 1-> returns to the fall height.
        >
          <mesh castShadow onClick={u.fistMeshClickHandler}>
            <boxGeometry />
            <meshStandardMaterial color="#CC2941" />
          </mesh>
        </R.RigidBody>
        <R.RigidBody
          colliders="ball"
          position={[3, 3, 1]}
          gravityScale={0.2} // can also move up with minus value
          restitution={1} // If restitution is 1, like the floor, you will have infinite bouncing.
        >
          <mesh castShadow onClick={u.fistMeshClickHandler}>
            <sphereGeometry />
            <meshStandardMaterial color="#32FF32" />
          </mesh>
        </R.RigidBody>
        <R.RigidBody
          colliders="cuboid"
          position={[-2, 3.5, 2]}
          rotation={[1, 4, 1]}
          ref={u.secondMesh}
          restitution={-1}
          friction={0} // Less friction with the floor means it will take longer to stop rotating
        >
          <mesh castShadow onClick={u.secondMeshClickHandler}>
            <boxGeometry />
            <meshStandardMaterial color="#CC2941" />
          </mesh>
        </R.RigidBody>
        <R.RigidBody
          type="fixed"
          restitution={1}
          friction={0} // 0 + 0 = 0 so infinite rotation or impulse
        >
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
