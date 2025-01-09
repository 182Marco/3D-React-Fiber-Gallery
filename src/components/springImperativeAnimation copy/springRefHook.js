import { a } from "@react-spring/three";
import { useSpringRefHook } from "./SpringRefHook.hook";

const SpringRefHook = () => {
  const u = useSpringRefHook();
  return (
    <a.mesh onClick={u.handleClick} scale={2} position-x={u.spring.x}>
      <boxGeometry />
      <a.meshBasicMaterial color="orange" />
    </a.mesh>
  );
};

export { SpringRefHook };
