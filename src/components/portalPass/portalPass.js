import * as D from "@react-three/drei";
import { usePortalPass } from "./portalPass.hook";

const PortalPass = () => {
  const h = usePortalPass();
  return (
    <>
      <D.OrbitControls makeDefault />
      <ambientLight intensity={0.5} />
      <D.Environment preset="sunset" />
      <mesh scale={2.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={h.map} />
      </mesh>
    </>
  );
};

export { PortalPass };
