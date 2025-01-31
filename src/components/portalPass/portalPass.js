import * as D from "@react-three/drei";

const PortalPass = () => {
  return (
    <>
      <D.OrbitControls makeDefault />
      <ambientLight intensity={1} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="green" />
      </mesh>
    </>
  );
};

export { PortalPass };
