import { Suspense } from "react";
import * as R from "@react-three/rapier";
import * as D from "@react-three/drei";
import { useGame } from "./game.hook";

const Game = () => {
  const h = useGame();

  return (
    <R.Physics debug gravity={[0, -9.8, 0]}>
      {/* without <Suspense> you can't see colliders  */}
      <Suspense>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-10, 10, 0]} intensity={0.4} />
        <D.OrbitControls />
        <R.RigidBody
          position={[-2.5, 1, 0]}
          colliders="cuboid"
          onPointerEnter={() => h.setHover(true)}
          onPointerLeave={() => h.setHover(false)}
          ref={h.meshRef}
        >
          {/*    <R.BallCollider args={[1]} position={[0, 1, 0]} />
           <D.Sphere position-y={1}>
            <meshStandardMaterial />
          </D.Sphere> 
          <R.CuboidCollider args={[0.5, 0.5, 0.5]} /> */}
          <D.Box onClick={h.jump}>
            <meshStandardMaterial color={h.hover ? "hotpink" : "royalblue"} />
          </D.Box>
        </R.RigidBody>
        <R.RigidBody type="fixed">
          <D.Box position={[0, 0, 0]} args={[10, 1, 10]} />
          <meshStandardMaterial color="springgreen" />
        </R.RigidBody>
        <R.Debug />
      </Suspense>
    </R.Physics>
  );
};

export { Game };
