import { OrbitControls } from "@react-three/drei";
import { Model, Spinner } from "./componets";
import { Suspense } from "react";

const Scene = () => {
  return (
    <>
      <ambientLight intensity={2} />
      <Suspense fallback={<Spinner speed={3} />}>
        <Model />
      </Suspense>
      <OrbitControls />
    </>
  );
};

export { Scene };
