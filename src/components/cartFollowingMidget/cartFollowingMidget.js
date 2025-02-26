import * as C from "./components";
import * as D from "@react-three/drei";
import * as P from "@react-three/postprocessing";
import { getProps } from "./childrenCompontsProps";
import { useUpdateCamera } from "./cartFollowingMidget.updateCamera";

const CartFollowingMidget = () => {
  useUpdateCamera();

  return (
    <>
      <C.CartSceneOrbitControls />
      <D.Environment preset="sunset" intensity={0.7} blur={0} />
      <P.EffectComposer>
        <P.Bloom
          mipmapBlur
          luminanceThreshold={1}
          intensity={1.42}
          radius={0.72}
        />
      </P.EffectComposer>
      <group position={[0, -0.7, 0]} rotation={[0, Math.PI / 4, 0]}>
        <C.Ankou
          rotation-y={-Math.PI / 2}
          position={[-1.5, -0.02, 0]}
          scale={1.8}
        />
        <C.YoungKorrigan
          rotation-y={-Math.PI / 2}
          position={[1.5, 0, 0]}
          scale={4}
        />
        <C.RenderMovingItems Component={C.Rock} {...getProps("rocks")} />
        <C.RenderMovingItems Component={C.LampPost} {...getProps("lamps")} />
        <C.RenderMovingItems Component={C.Tree} {...getProps("trees")} />
        <D.ContactShadows scale={[120, 120]} opacity={0.6} />
      </group>
    </>
  );
};

export { CartFollowingMidget };
