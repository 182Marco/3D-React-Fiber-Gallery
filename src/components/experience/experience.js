import * as D from "@react-three/drei";
import * as C from "../../components";
import { useExperience } from "./experience.hook";

const Experience = () => {
  const u = useExperience();

  return (
    <>
      <ambientLight intensity={1} />
      <D.OrbitControls />
      <C.Office />
    </>
  );
};

export { Experience };
