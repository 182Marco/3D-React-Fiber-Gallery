import { Suspense } from "react";
import { Physics, RigidBody } from "@react-three/rapier";
import * as D from "@react-three/drei";
import { useGame } from "./game.hook";

const Game = () => {
  const h = useGame();

  return (
    <Physics gravity={[0, -9.8, 0]}>
      {/* without <Suspense> you can't see colliders  */}
      <Suspense>
        <ambientLight intensity={0.3} />
        <directionalLight position={[-10, 3, 0]} intensity={1} castShadow />
        <D.OrbitControls />
        <RigidBody
          position={[-2.5, 1, 0]}
          colliders="cuboid"
          onPointerEnter={() => h.setHover(true)}
          onPointerLeave={() => h.setHover(false)}
          ref={h.cube}
          castShadow
        >
          {/*    <BallCollider args={[1]} position={[0, 1, 0]} />
           <D.Sphere position-y={1}>
            <meshStandardMaterial />
          </D.Sphere> 
          <CuboidCollider args={[0.5, 0.5, 0.5]} /> */}
          <D.Box onClick={h.jump} castShadow>
            <meshStandardMaterial color={h.hover ? "hotpink" : "royalblue"} />
          </D.Box>
        </RigidBody>
        <RigidBody
          type="kinematicPosition"
          position={[0, 0.75, 0]}
          ref={h.kicker}
        >
          <group position={[2.5, 0, 0]}>
            <D.Box args={[5, 0.5, 0.5]} receiveShadow>
              <meshStandardMaterial color="peachPuff" />
            </D.Box>
          </group>
        </RigidBody>
        <RigidBody type="fixed">
          <D.Box position={[0, 0, 0]} args={[10, 1, 10]} />
          <meshStandardMaterial />
        </RigidBody>
      </Suspense>
    </Physics>
  );
};

export { Game };
