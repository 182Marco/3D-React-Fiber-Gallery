import * as C from "../componets";
import * as D from "@react-three/drei";
import * as THREE from "three";

const Scene = () => {
  const model = D.useGLTF("./model/1.glb");
  const texture = D.useTexture("./texture/1.png");
  return (
    <>
      <ambientLight />
      <D.OrbitControls />
      <mesh>
        <planeGeometry args={[2, 3]} />
        <D.MeshPortalMaterial>
          <primitive object={model.scene} scale={0.6} position={[0, 0.6, 0]} />
          <mesh>
            <sphereGeometry args={[3, 64, 64]} />
            <meshBasicMaterial map={texture} side={THREE.BackSide} />
          </mesh>
        </D.MeshPortalMaterial>
      </mesh>
    </>
  );
};

export { Scene };
