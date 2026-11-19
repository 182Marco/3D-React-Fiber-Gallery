import { Suspense } from "react";
import { Spinner } from "../../../components/spinner";

const WithFallBackSuspense = (Component, background) => (
  <Suspense fallback={<Spinner speed={10} />}>
    {background && <color attach="background" args={[background]} />}
    <Component />
  </Suspense>
);

export { WithFallBackSuspense };
