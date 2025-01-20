import { Suspense } from "react";
import * as R from "@react-three/rapier";
import * as D from "@react-three/drei";
import { useGame } from "./game.hook";

const Game = () => {
  const u = useGame();

  return (
    <Suspense>
      <R.Physics debug>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-10, 10, 0]} intensity={0.4} />
        <R.RigidBody position={[3, 5, 0]}>
          <D.Box>
            <meshStandardMaterial color="royalblue" />
          </D.Box>
        </R.RigidBody>
        <R.RigidBody type="fixed">
          <D.Box position={[0, 0, 0]} args={[10, 1, 10]} />
          <meshStandardMaterial color="springgreen" />
        </R.RigidBody>
      </R.Physics>
    </Suspense>
  );
};

export { Game };
