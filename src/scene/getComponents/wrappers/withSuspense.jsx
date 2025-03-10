import { Suspense } from "react";

const WithSuspense = Component => (
  <Suspense>
    <Component />
  </Suspense>
);

export { WithSuspense };
