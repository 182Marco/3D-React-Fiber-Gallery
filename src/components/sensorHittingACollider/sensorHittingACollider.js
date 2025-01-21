import * as D from "@react-three/drei";
import * as R from "@react-three/rapier";
import { useSensorHittingACollider } from "./sensorHittingACollider.hook";

const SensorHittingACollider = () => {
  const h = useSensorHittingACollider();
  return (
    <>
      <ambientLight />
      <D.OrbitControls />
      <R.Physics>
        {/* <R.Debug /> */}
        <R.RigidBody ref={h.sphereRef} position={[0, 2.5, 5]} colliders="hull">
          <mesh castShadow onClick={h.sphereHandler}>
            <sphereGeometry args={[0.5, 16, 16]} />
            <meshStandardMaterial color="#CC3941" />
          </mesh>
        </R.RigidBody>
        <R.RigidBody type="fixed" position={[0, 0.175, -5]}>
          <R.CuboidCollider
            args={[1, 1, 1]}
            sensor
            onIntersectionEnter={() => h.setGoal(true)}
            onIntersectionExit={() => h.setGoal(false)}
          />
        </R.RigidBody>
        <R.RigidBody type="fixed" restitution={0.4}>
          <mesh position-y={-1} rotation-x={-Math.PI * 0.5} receiveShadow>
            <boxGeometry args={[15, 15, 0.35]} />
            <meshStandardMaterial color="#C7CAC7" />
          </mesh>
        </R.RigidBody>
      </R.Physics>
      {h.goal && (
        <D.Text3D font="./fonts/2.json" position={[-1.75, 3, -5]}>
          Goal
          <meshNormalMaterial />
        </D.Text3D>
      )}
    </>
  );
};

export { SensorHittingACollider };
