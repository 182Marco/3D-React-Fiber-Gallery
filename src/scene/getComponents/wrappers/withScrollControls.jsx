import { Suspense } from "react";
import { ScrollControls } from "@react-three/drei";

const WithScrollControls = Component => (
  <ScrollControls pages={4}>
    <Suspense>
      <Component />
    </Suspense>
  </ScrollControls>
);

export { WithScrollControls };
