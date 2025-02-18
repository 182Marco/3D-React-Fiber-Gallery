import * as C from "./components";
import * as D from "@react-three/drei";
import { useCartFollowingMidget } from "./cartFollowingMidget.hook";

const CartFollowingMidget = () => {
  const h = useCartFollowingMidget();
  return (
    <>
      <D.OrbitControls
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
        minDistance={2}
        maxDistance={15}
      />
      <ambientLight intensity={0.2} />
      <D.Environment preset="sunset" intensity={0.7} blur={0.8} />
      <group position={[0, -1, 0]}>
        <C.Ankou
          rotation-y={-Math.PI / 2}
          position={[0.9, 0, 0]}
          scale={[0.5, 0.5, 0.5]}
        />
        <C.YoungKorrigan
          rotation-y={-Math.PI / 2}
          position={[-1, -0.02, 0]}
          scale={[1.5, 1.5, 1.5]}
        />
        <D.ContactShadows scale={[16, 16]} opacity={0.42} />
      </group>
    </>
  );
};

export { CartFollowingMidget };
