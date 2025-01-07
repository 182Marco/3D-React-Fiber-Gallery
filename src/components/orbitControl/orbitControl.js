import { OrbitControls } from "@react-three/drei";

const OrbitControl = () => {
  return (
    <>
      <OrbitControls
        enableDamping={false}
        dampingFactor={0.01}
        autoRotate
        autoRotateSpeed={4}
        // maxAzimuthAngle={Math.PI / 2}
        // minAzimuthAngle={-Math.PI / 2}
        // maxPolarAngle={-Math.PI / 4}
        // minPolarAngle={-Math.PI / 4}
      />
    </>
  );
};

export { OrbitControl };
