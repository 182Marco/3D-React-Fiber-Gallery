import * as C from "../componets";
import * as D from "@react-three/drei";
import { useState } from "react";

const Scene = () => {
  const [play, setPlay] = useState(false);

  return (
    <>
      {play && (
        <D.PositionalAudio url="./sound/sound.mp3" autoplay loop distance={5} />
      )}
      <D.OrbitControls position={[0, 1, 10]} />
      <mesh onClick={() => setPlay(pv => !pv)}>
        <boxGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>
    </>
  );
};

export { Scene };
