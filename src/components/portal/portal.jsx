import * as D from "@react-three/drei";
import * as THREE from "three";
import { usePortal } from "./portal.hook";

const Portal = () => {
  const u = usePortal();
  return (
    <>
      <ambientLight />
      <D.CameraControls ref={u.CameraControlRef} />
      <D.Text
        fonts="./fonts/Roboto-Bold.ttf"
        position={[0, 1.6, 0.1]}
        fontSize={0.6}
      >
        Eggs
        <meshBasicMaterial toneMapped={false} />
      </D.Text>
      <D.RoundedBox
        args={[3, 4, 0.1]}
        radius={0.1}
        onDoubleClick={() => u.setActive(pv => !pv)}
      >
        <D.MeshPortalMaterial ref={u.portalMaterialRef}>
          <primitive
            object={u.model.scene}
            scale={0.6}
            position={[0, 0.6, 0]}
          />
          <mesh>
            <sphereGeometry args={[5, 64, 64]} />
            <meshBasicMaterial map={u.texture} side={THREE.BackSide} />
          </mesh>
        </D.MeshPortalMaterial>
      </D.RoundedBox>
    </>
  );
};

export { Portal };
