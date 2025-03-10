import { PivotControls, OrbitControls } from "@react-three/drei";

const PivotControl = () => (
  <>
    <OrbitControls />
    <PivotControls
      anchor={[-1, 0, 0]}
      depthTest={false}
      lineWidth={4}
      scale={3}
      axisColors={["turquoise", "violet", "emerald"]}
    >
      <mesh position={[2, 0, 0]} scale={2}>
        <boxGeometry />
        <meshBasicMaterial />
      </mesh>
    </PivotControls>
  </>
);

export { PivotControl };
