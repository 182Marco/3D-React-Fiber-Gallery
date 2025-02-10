import * as D from "@react-three/drei";
import * as C from "..";
import J from "./textsToPass.json";
import { useHome3d } from "./home3d.hook";

const Home3d = () => {
  const h = useHome3d();
  return (
    <>
      <ambientLight intensity={1} />
      <D.CameraControls enabled={false} ref={h.cameraRef} />
      <D.ScrollControls pages={3} damping={0.25}>
        <C.OverlayText txt={J.txt} />
        <C.Office scale={1.3} name={h.name} />
      </D.ScrollControls>
    </>
  );
};

export { Home3d };
