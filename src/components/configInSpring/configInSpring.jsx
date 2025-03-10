import { a } from "@react-spring/three";
import { useConfigInSpring } from "./configInSpring.hook";

const ConfigInSpring = () => {
  const u = useConfigInSpring();
  return (
    <a.mesh
      position-x={u.x}
      position-y={u.y}
      onClick={() => u.setClick(pv => !pv)}
    >
      <boxGeometry />
      <a.meshBasicMaterial color={u.color} />
    </a.mesh>
  );
};

export { ConfigInSpring };
