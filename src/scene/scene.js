import { useState } from "react";
import { OrbitControls } from "@react-three/drei";

const Scene = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <OrbitControls />
      <mesh position-x={-1} onClick={(e) => e.stopPropagation()}>
        <boxGeometry />
        <meshBasicMaterial color="white" />
      </mesh>
      <mesh position-x={1} onClick={() => setIsActive((pv) => !pv)}>
        <boxGeometry />
        <meshBasicMaterial color={isActive ? "red" : "green"} />
      </mesh>
    </>
  );
};

export { Scene };
