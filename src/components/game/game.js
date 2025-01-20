import { Suspense } from "react";
import * as R from "@react-three/rapier";
import * as D from "@react-three/drei";
import { useGame } from "./game.hook";

const Game = () => {
  const u = useGame();

  return (
    <R.Physics debug gravity={[0, -9.8, 0]}>
      {/* without <Suspense> you can't see colliders  */}
      <Suspense>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-10, 10, 0]} intensity={0.4} />
        <D.OrbitControls />
        <R.RigidBody position={[0, 5, 0]} colliders={false}>
          <R.BallCollider args={[1]} position={[0, 1, 0]} />
          <D.Sphere position-y={1}>
            <meshStandardMaterial color="hotpink" />
          </D.Sphere>
          <R.CuboidCollider args={[0.5, 0.5, 0.5]} />
          <D.Box>
            <meshStandardMaterial color="royalblue" />
          </D.Box>
        </R.RigidBody>
        <R.RigidBody position={[3, 5, 0]}></R.RigidBody>
        <R.RigidBody position={[-4, 5, 0]} colliders="hull">
          <D.Torus>
            <meshStandardMaterial color="orange" />
          </D.Torus>
        </R.RigidBody>
        <R.RigidBody type="fixed" restitution={1}>
          <D.Box position={[0, 0, 0]} args={[10, 1, 10]} />
          <meshStandardMaterial color="springgreen" />
        </R.RigidBody>
        {/* Aggiungi il componente Debug per una visualizzazione dettagliata */}
        <R.Debug />
      </Suspense>
    </R.Physics>
  );
};

export { Game };
