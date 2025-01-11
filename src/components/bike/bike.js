import { OrbitControls } from "@react-three/drei";
import { useBike } from "./bike.hook";

const Bike = () => {
  const u = useBike();

  return (
    <>
      <OrbitControls />
      {u.a && (
        <mesh>
          <boxGeometry />
          <meshBasicMaterial color="red" />
        </mesh>
      )}
    </>
  );
};

export { Bike };
