import * as D from "@react-three/drei";
import * as C from "../../components";
import { useExperience } from "./experience.hook";

const Experience = () => {
  const h = useExperience();

  return (
    <>
      <ambientLight intensity={1} />
      <D.OrbitControls enableZoom={false} />
      <D.ScrollControls pages={3} damping={0.25}>
        <C.OverlayText />
        <C.Office />
      </D.ScrollControls>
    </>
  );
};

export { Experience };
