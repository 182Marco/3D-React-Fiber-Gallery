import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Model, Spinner } from "../componets";

const Scene = ({ IsShowDog }) => (
  <>
    <ambientLight intensity={2} />
    {/*  <Suspense fallback={<Spinner speed={3} />}>
      <Model />
    </Suspense> */}
    {IsShowDog ? <Model /> : <Spinner speed={3} />}
    <OrbitControls />
  </>
);

export { Scene };
