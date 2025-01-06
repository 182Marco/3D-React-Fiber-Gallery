import * as C from "../componets";
import * as D from "@react-three/drei";
import * as M from "maath";
import * as R from "react";
import * as T from "@react-three/fiber";
import * as THREE from "three";

const Scene = () => {
  const model = D.useGLTF("./model/1.glb");
  const texture = D.useTexture("./texture/1.png");
  const portalMaterialRef = R.useRef();

  const [active, setActive] = R.useState(false);

  T.useFrame(() => {
    M.easing.damp(portalMaterialRef.current, "blend", active ? 1 : 0);
  });

  return (
    <>
      <ambientLight />
      <D.OrbitControls />
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
        onDoubleClick={() => setActive(pv => !pv)}
      >
        <D.MeshPortalMaterial ref={portalMaterialRef}>
          <primitive object={model.scene} scale={0.6} position={[0, 0.6, 0]} />
          <mesh>
            <sphereGeometry args={[5, 64, 64]} />
            <meshBasicMaterial map={texture} side={THREE.BackSide} />
          </mesh>
        </D.MeshPortalMaterial>
      </D.RoundedBox>
    </>
  );
};

export { Scene };
