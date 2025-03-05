import { Suspense } from "react";
import { Spinner } from "../../../components";
import { projects } from "../../utils";

const WithFallBackSuspense = Component => (
  <Suspense fallback={<Spinner speed={10} />}>
    {Component?.name === projects.slideShow && (
      <color attach="background" args={["#ececec"]} />
    )}
    <Component />
  </Suspense>
);

export { WithFallBackSuspense };
