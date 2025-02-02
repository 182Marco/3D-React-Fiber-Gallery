import * as D from "@react-three/drei";
import { usePortalPass } from "./portalPass.hook";
import * as THREE from "three";
import * as C from "./components";

const PortalPass = () => {
  const h = usePortalPass();
  return (
    <>
      <D.OrbitControls makeDefault />
      <D.RoundedBox args={[2, 3, 0.1]}>
        <D.MeshPortalMaterial>
          <D.Environment preset="sunset" />
          <ambientLight intensity={1} />
          <C.Fish scale={0.55} position-y={-0.7} />
          <mesh>
            <sphereGeometry args={[10, 64, 64]} />
            <meshStandardMaterial map={h.map} side={THREE.BackSide} />
          </mesh>
        </D.MeshPortalMaterial>
      </D.RoundedBox>
    </>
  );
};

export { PortalPass };
