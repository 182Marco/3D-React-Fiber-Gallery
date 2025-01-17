import * as R from "@react-three/rapier";
import * as D from "@react-three/drei";
import { useExperience } from "./experience.hook";

const Experience = () => {
  const u = useExperience();

  return (
    <>
      <mesh>
        <boxGeometry />
        <meshBasicMaterial />
      </mesh>
    </>
  );
};

export { Experience };
