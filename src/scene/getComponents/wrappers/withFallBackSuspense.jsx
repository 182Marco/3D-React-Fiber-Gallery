import { Suspense } from "react";
import { Spinner, SlideShow } from "../../../components";

const WithFallBackSuspense = Component => (
  <Suspense fallback={<Spinner speed={10} />}>
    {Component === SlideShow && (
      <color attach="background" args={["#ececec"]} />
    )}
    <Component />
  </Suspense>
);

export { WithFallBackSuspense };
