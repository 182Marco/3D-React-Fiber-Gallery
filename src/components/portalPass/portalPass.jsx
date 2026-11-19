import * as D from "@react-three/drei";
import * as C from "./components";
import * as V from "./environmentVars";
import { usePortalPass } from "./portalPass.hook";

// Un elemento per card, nello stesso ordine di layout (vedi environmentVars).
const stages = [
  {
    name: V.names.dragon,
    texture: "textures/LavaWorld.jpg",
    color: "#df8252",
    Monster: C.Dragon,
    monsterProps: { scale: 0.46, "position-y": -0.8 },
  },
  {
    name: V.names.fish,
    texture: "textures/waterEnviron.jpg",
    color: "#50b8cd",
    Monster: C.Fish,
    monsterProps: { scale: 0.6, "position-y": -1 },
  },
  {
    name: V.names.catoro,
    texture: "textures/cactusForest.jpg",
    color: "#80aa3f",
    Monster: C.Cactoro,
    monsterProps: { scale: 0.4, "position-y": -0.7 },
  },
];

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
        {stages.map(({ Monster, monsterProps, ...stage }, i) => (
          <C.MonsterStage
            key={stage.name}
            {...stage}
            position={[h.layout[i].x, h.layout[i].y, 0]}
            rotation-y={h.layout[i].ry}
            active={h.active}
            setActive={h.setActive}
            hover={h.hover}
            setIsHover={h.setIsHover}
          >
            <Monster {...monsterProps} hover={h.hover} />
          </C.MonsterStage>
        ))}
      </group>
    </>
  );
};

export { PortalPass };
