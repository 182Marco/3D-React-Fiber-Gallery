import * as D from "@react-three/drei";
import { usePortalPass } from "./portalPass.hook";
import * as THREE from "three";
import * as C from "./components";

const PortalPass = () => {
  const h = usePortalPass();
  return (
    <>
      <D.OrbitControls makeDefault />
      <ambientLight intensity={0.5} />
      <D.Environment preset="sunset" />
      <C.Fish />
      <mesh>
        <sphereGeometry args={[10, 64, 64]} />
        <meshStandardMaterial map={h.map} side={THREE.BackSide} />
      </mesh>
    </>
  );
};

export { PortalPass };
