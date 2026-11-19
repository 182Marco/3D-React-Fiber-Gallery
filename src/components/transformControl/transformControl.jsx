import { TransformControls, OrbitControls } from "@react-three/drei";

const TransformControl = () => (
  <>
    <OrbitControls makeDefault />
    <TransformControls
      //  mode="rotate"
      mode="scale"
    >
      <mesh>
        <boxGeometry />
        <meshBasicMaterial />
      </mesh>
    </TransformControls>
  </>
);

export { TransformControl };
