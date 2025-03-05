import { ScrollControls } from "@react-three/drei";

const WithScrollControls = Component => (
  <ScrollControls pages={4}>
    <Component />
  </ScrollControls>
);

export { WithScrollControls };
