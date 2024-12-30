import { OrbitControls } from "@react-three/drei";

const OrbitControl = () => {
  return (
    <>
      <OrbitControls
        enableDamping={false}
        dampingFactor={0.01}
        autoRotate
        autoRotateSpeed={4}
      />
    </>
  );
};

export { OrbitControl };
