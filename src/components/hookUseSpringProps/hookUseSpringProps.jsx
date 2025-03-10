import { a } from "@react-spring/three";
import { useHookUseSpringProps } from "./hookUseSpringProps.hook";

const HookUseSpringProps = () => {
  const u = useHookUseSpringProps();
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

export { HookUseSpringProps };
