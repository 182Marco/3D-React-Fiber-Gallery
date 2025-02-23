import * as C from "./components";
import * as D from "@react-three/drei";
import { useCartFollowingMidget } from "./cartFollowingMidget.hook";
import { AxesHelper } from "three";
import { vars } from "./fixedVars";

const CartFollowingMidget = () => {
  const h = useCartFollowingMidget();

  return (
    <>
      <C.CartSceneOrbitControls />
      <ambientLight intensity={0.2} />
      <D.Environment preset="sunset" intensity={0.7} blur={0.8} />
      <group position={[0, -0.6, 0]}>
        <C.Ankou
          rotation-y={-Math.PI / 2}
          position={[-1.5, -0.02, 0]}
          scale={1.3}
        />
        <C.YoungKorrigan
          rotation-y={-Math.PI / 2}
          position={[1.5, 0, 0]}
          scale={4}
        />
        {[...Array(vars.lampN)].map((_, i) => (
          <C.MovingItem xSpread={vars.lampMaxX} key={i}>
            <C.LampPost
              position={[h.getPosition(i, vars.lampMaxX, vars.lampN), 0, -2]}
              scale={0.7}
            />
          </C.MovingItem>
        ))}
        {[...Array(vars.rocksN)].map((_, i) => (
          <C.MovingItem xSpread={vars.rocksMaxX} key={i}>
            <C.Rock
              position={[h.getPosition(i, vars.rocksMaxX, vars.rocksN), 0, 2.5]}
              scale={0.06}
            />
          </C.MovingItem>
        ))}
        {[...Array(vars.nearTreeN)].map((_, i) => (
          <C.MovingItem xSpread={vars.nearTreeMaxX} key={i}>
            <C.Tree
              position={[
                h.getPosition(i, vars.nearTreeMaxX, vars.nearTreeN),
                0,
                -4,
              ]}
              scale={0.1}
            />
          </C.MovingItem>
        ))}
        {[...Array(vars.farTreeN)].map((_, i) => (
          <C.MovingItem xSpread={vars.farTreeMaxX} key={i}>
            <C.Tree
              position={[
                h.getPosition(i, vars.farTreeMaxX, vars.farTreeN),
                0,
                -12,
              ]}
              scale={0.16}
            />
          </C.MovingItem>
        ))}
        {[...Array(vars.distantTreeN)].map((_, i) => (
          <C.MovingItem xSpread={vars.distantTreeMaxX} key={i}>
            <C.Tree
              position={[
                h.getPosition(i, vars.distantTreeMaxX, vars.distantTreeN) - 1,
                0,
                -17,
              ]}
              scale={0.2}
            />
          </C.MovingItem>
        ))}
        <D.ContactShadows scale={[16, 16]} opacity={0.42} />
        <primitive object={new AxesHelper(5)} />
      </group>
    </>
  );
};

export { CartFollowingMidget };
