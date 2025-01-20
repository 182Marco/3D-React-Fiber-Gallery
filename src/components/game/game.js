import * as R from "@react-three/rapier";
import * as D from "@react-three/drei";
import { useGame } from "./game.hook";

const Game = () => {
  const u = useGame();

  return (
    <R.Physics>
      <ambientLight />
      <R.Debug />
      <R.RigidBody>
        <mesh receiveShadow></mesh>
      </R.RigidBody>
    </R.Physics>
  );
};

export { Game };
