import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Dog, Spinner } from "../componets";
import { Perf } from "r3f-perf";

const Scene = ({ IsShowDog }) => {
  return (
    <>
      {/*  <Perf /> */}
      <ambientLight intensity={2} />
      {/*  <Suspense fallback={<Spinner speed={3} />}>
      <Model />
    </Suspense> */}
      {IsShowDog ? <Dog /> : <Spinner speed={10} />}
      <OrbitControls />
    </>
  );
};

export { Scene };
