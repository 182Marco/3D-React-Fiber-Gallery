import * as D from "@react-three/drei";
import * as C from "..";
import J from "./textsToPass.json";

const Home3d = () => (
  <>
    <ambientLight intensity={1} />
    <D.OrbitControls enableZoom={false} />
    <D.ScrollControls pages={3} damping={0.25}>
      <C.OverlayText txt={J.txt} />
      <C.Office scale={1.3} />
    </D.ScrollControls>
  </>
);

export { Home3d };
