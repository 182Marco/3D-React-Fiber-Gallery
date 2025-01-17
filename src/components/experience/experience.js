import * as D from "@react-three/drei";
import * as C from "../../components";
import { useExperience } from "./experience.hook";

const Experience = () => {
  const u = useExperience();

  return (
    <>
      <ambientLight intensity={1} />
      <D.OrbitControls enableZoom={false} />
      <D.ScrollControls pages={3} dumping={0.25} />
      <C.Office />
    </>
  );
};

export { Experience };
