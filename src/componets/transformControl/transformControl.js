import { TransformControls, OrbitControls } from "@react-three/drei";

const transformControl = () => {
  return (
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
};

export { transformControl };
