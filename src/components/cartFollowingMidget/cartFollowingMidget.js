import * as C from "./components";
import * as D from "@react-three/drei";
import { useCartFollowingMidget } from "./cartFollowingMidget.hook";
import { AxesHelper } from "three";
import { vars } from "./fixedVars";

const CartFollowingMidget = () => {
  const h = useCartFollowingMidget();

  const getPosition = i =>
    vars.lampPost_N === 1
      ? 0
      : -vars.lampPost_max_offset_X +
        (2 * vars.lampPost_max_offset_X * i) / (vars.lampPost_N - 1);

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
        {[...Array(vars.lampPost_N)].map((e, i) => (
          <C.MovingItem>
            <C.LampPost
              /*               position={[
                (i / vars.lampPost_N) * (3 + vars.lampPost_max_offset_X) * 2,
                -6,
                -30,
              ]} */
              position={[getPosition(i), 0, -2]}
              scale={0.73}
            />
          </C.MovingItem>
        ))}
        {/*        <C.LampPost position={[6.43, 0, -2]} scale={0.73} /> */}
        <D.ContactShadows scale={[16, 16]} opacity={0.42} />
        <primitive object={new AxesHelper(5)} />
      </group>
    </>
  );
};

export { CartFollowingMidget };
