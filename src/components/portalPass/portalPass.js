import * as C from "./components";
import * as D from "@react-three/drei";
import { usePortalPass } from "./portalPass.hook";

const PortalPass = () => {
  const h = usePortalPass();

  return (
    <>
      <D.CameraControls ref={h.camera} />
      <group scale={1.2}>
        <C.MonsterStage
          texture="textures/LavaWorld.jpg"
          position-x={-2.5}
          rotation-y={Math.PI / 8}
          name="Dragon"
          color="#df8252"
          active={h.active}
          setActive={h.setActive}
        >
          <C.Dragon scale={0.46} position-y={-0.8} />
        </C.MonsterStage>
        <C.MonsterStage
          texture="textures/waterEnviron.jpg"
          name="Fish King"
          color="#50b8cd"
          active={h.active}
          setActive={h.setActive}
        >
          <C.Fish scale={0.6} position-y={-1} />
        </C.MonsterStage>
        <C.MonsterStage
          texture="textures/cactusForest.jpg"
          position-x={2.5}
          rotation-y={-Math.PI / 8}
          name="Cactoro"
          color="#80aa3f"
          active={h.active}
          setActive={h.setActive}
        >
          <C.Cactoro scale={0.4} position-y={-0.7} />
        </C.MonsterStage>
      </group>
    </>
  );
};

export { PortalPass };
