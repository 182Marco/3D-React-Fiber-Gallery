import * as D from "@react-three/drei";
import { usePortalPass } from "./portalPass.hook";
import * as THREE from "three";

const PortalPass = () => {
  const h = usePortalPass();
  return (
    <>
      <D.OrbitControls makeDefault />
      <ambientLight intensity={0.5} />
      <D.Environment preset="sunset" />
      <mesh>
        <sphereGeometry args={[5, 32, 32]} />
        <meshStandardMaterial map={h.map} side={THREE.BackSide} />
      </mesh>
    </>
  );
};

export { PortalPass };
