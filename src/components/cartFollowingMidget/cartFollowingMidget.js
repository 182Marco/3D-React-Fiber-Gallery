import * as C from "./components";
import * as D from "@react-three/drei";
import { useCartFollowingMidget } from "./cartFollowingMidget.hook";

const CartFollowingMidget = () => {
  const h = useCartFollowingMidget();
  return (
    <>
      <D.OrbitControls />
      <ambientLight />
      <group rotation={[0, Math.PI / 12, 0]} position={[0, -0.7, 0]}>
        <C.LampPost />
        <C.Rock scale={0.2} />
        <C.Ankou
          scale={3}
          rotation={[0, (-Math.PI * 4) / 10, 0]}
          position={[-1, -1.7, -1]}
        />
        <C.YoungKorrigan
          scale={1.3}
          position={[3.5, -1, -1]}
          rotation={[0, (-Math.PI * 4) / 10, 0]}
        />
      </group>
    </>
  );
};

export { CartFollowingMidget };
