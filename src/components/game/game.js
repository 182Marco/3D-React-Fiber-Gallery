import * as R from "@react-three/rapier";
import { useGame } from "./game.hook";

const Game = () => {
  const u = useGame();

  return (
    <>
      <R.Physics>
        <ambientLight />
        <R.Debug />
        <R.RigidBody ref={u.cubeRef} position={[2.5, 2.5, 0]}>
          <mesh castShadow onClick={u.cubeClickHandler}>
            <boxGeometry args={[1.75, 1.75, 1.75]} />
            <meshStandardMaterial color="#CC3941" />
          </mesh>
        </R.RigidBody>

        <R.RigidBody position-y={-0.65}>
          <mesh receiveShadow>
            <boxGeometry args={[1, 0.35, 15]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        </R.RigidBody>

        <R.RigidBody
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
    </>
  );
};

export { Game };
