import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Dog, Spinner } from "../componets";

const Scene = ({ IsShowDog }) => (
  <>
    <ambientLight intensity={2} />
    {/*  <Suspense fallback={<Spinner speed={3} />}>
      <Model />
    </Suspense> */}
    {IsShowDog ? <Dog /> : <Spinner speed={10} />}
    <OrbitControls />
  </>
);

export { Scene };
