import * as D from "@react-three/drei";
import * as C from "./components";
import * as V from "./environmentVars";
import { usePortalPass } from "./portalPass.hook";

const PortalPass = () => {
  const h = usePortalPass();

  return (
    <>
      <D.CameraControls
        ref={h.cameraRef}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={-Math.PI / 6}
      />
      <group>
        <C.MonsterStage
          texture="textures/LavaWorld.jpg"
          position-x={-2.5}
          rotation-y={Math.PI / 8}
          name={V.names.dragon}
          color="#df8252"
          active={h.active}
          setActive={h.setActive}
          hover={h.hover}
          setIsHover={h.setIsHover}
        >
          <C.Dragon scale={0.46} position-y={-0.8} hover={h.hover} />
        </C.MonsterStage>
        <C.MonsterStage
          texture="textures/waterEnviron.jpg"
          name={V.names.fish}
          color="#50b8cd"
          active={h.active}
          setActive={h.setActive}
          hover={h.hover}
          setIsHover={h.setIsHover}
        >
          <C.Fish scale={0.6} position-y={-1} hover={h.hover} />
        </C.MonsterStage>
        <C.MonsterStage
          texture="textures/cactusForest.jpg"
          position-x={2.5}
          rotation-y={-Math.PI / 8}
          name={V.names.catoro}
          color="#80aa3f"
          active={h.active}
          setActive={h.setActive}
          hover={h.hover}
          setIsHover={h.setIsHover}
        >
          <C.Cactoro scale={0.4} position-y={-0.7} hover={h.hover} />
        </C.MonsterStage>
      </group>
    </>
  );
};

export { PortalPass };
