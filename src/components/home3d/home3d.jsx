import * as D from "@react-three/drei";
import { OverlayText } from "../overlayText";
import { Office } from "../office";
import J from "./textsToPass.json";
import { useHome3d } from "./home3d.hook";

const Home3d = () => {
  const h = useHome3d();
  return (
    <>
      <ambientLight intensity={3} />
      <D.CameraControls enabled={false} />
      <D.ScrollControls pages={3} damping={0.25}>
        <OverlayText txt={J.txt} />
        <Office scale={1.3} name={h.name} />
      </D.ScrollControls>
    </>
  );
};

export { Home3d };
