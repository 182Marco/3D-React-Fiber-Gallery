import * as D from "@react-three/drei";
import { usePortalPass } from "./portalPass.hook";
import * as C from "./components";

const PortalPass = () => {
  const h = usePortalPass();
  return (
    <>
      <D.OrbitControls makeDefault />
      <C.MonsterStage texture={h.texture}>
        <C.Fish scale={0.6} position-y={-1} />
      </C.MonsterStage>
    </>
  );
};

export { PortalPass };
